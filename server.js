const { WebcastPushConnection } = require('tiktok-live-connector');
const express = require('express');
const http = require('http');
const path = require('path');
const THEMES = require('./themes');

const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── Per-session state (keyed by sessionId) ────────────────────
const sessions = new Map();

function getSession(id) {
  if (!sessions.has(id)) {
    sessions.set(id, {
      id,
      connection: null,
      connected: false,
      username: null,
      theme: 'blossom',
      clients: new Set(),
      likerMap: new Map(),
      gifterMap: new Map(),
      followerList: [],
      totalLikes: 0,
      likeMeterGoal: 100,
      seenJoins: new Set(),
    });
  }
  return sessions.get(id);
}

function broadcast(session, data) {
  const msg = `data: ${JSON.stringify(data)}\n\n`;
  for (const send of session.clients) send(msg);
}

// ── SSE ───────────────────────────────────────────────────────
app.get('/events/:sessionId', (req, res) => {
  const session = getSession(req.params.sessionId);
  res.set({ 'Content-Type':'text/event-stream', 'Cache-Control':'no-cache', 'Connection':'keep-alive', 'Access-Control-Allow-Origin':'*' });
  res.flushHeaders();
  const send = (msg) => res.write(msg);
  session.clients.add(send);
  // Send current state
  send(`data: ${JSON.stringify({ type:'state', likers: getTopLikers(session, 8), gifters: getTopGifters(session), followers: getTopFollowers(session) })}\n\n`);
  send(`data: ${JSON.stringify({ type:'status', status: session.connected ? 'connected' : 'disconnected', username: session.username })}\n\n`);
  send(`data: ${JSON.stringify({ type:'likeMeter', total: session.totalLikes, goal: session.likeMeterGoal })}\n\n`);
  send(`data: ${JSON.stringify({ type:'theme', theme: session.theme })}\n\n`);
  req.on('close', () => session.clients.delete(send));
});

// ── Helpers ───────────────────────────────────────────────────
function upsert(map, user, count) {
  const key = user.uniqueId || user.userId || 'unknown';
  const existing = map.get(key) || { nickname: user.nickname || key, profilePicture: user.profilePictureUrl || '', count: 0 };
  existing.count += count;
  map.set(key, existing);
  return { key, ...existing };
}

function getTopLikers(session, n = 5) {
  return [...session.likerMap.entries()]
    .map(([id, d]) => ({ id, ...d }))
    .sort((a, b) => b.count - a.count)
    .slice(0, n);
}

function getTopGifters(session, n = 5) {
  return [...session.gifterMap.entries()]
    .map(([id, d]) => ({ id, ...d }))
    .sort((a, b) => b.count - a.count)
    .slice(0, n);
}

function getTopFollowers(session, n = 5) {
  return session.followerList.slice(-n).reverse();
}

// ── TikTok connect ────────────────────────────────────────────
function connect(session, username) {
  if (session.connection) { try { session.connection.disconnect(); } catch(_) {} }
  session.username = username;
  session.likerMap.clear();
  session.gifterMap.clear();
  session.followerList = [];
  session.totalLikes = 0;
  session.likeMeterGoal = 100;
  session.seenJoins.clear();
  session.connected = false;

  console.log(`[${session.id}] Connecting to @${username}...`);
  broadcast(session, { type:'status', status:'connecting', username });

  const conn = new WebcastPushConnection(username, {
    processInitialData: false,
    fetchRoomInfoOnConnect: true,
    enableExtendedGiftInfo: false,
  });
  session.connection = conn;

  conn.connect().then(state => {
    session.connected = true;
    console.log(`[${session.id}] Connected! Room: ${state.roomId}`);
    broadcast(session, { type:'status', status:'connected', username });
  }).catch(err => {
    console.error(`[${session.id}] Failed:`, err.message);
    broadcast(session, { type:'status', status:'error', message: err.message });
  });

  // Likes
  conn.on('like', data => {
    const updated = upsert(session.likerMap, data, data.likeCount || 1);
    session.totalLikes += (data.likeCount || 1);
    broadcast(session, { type:'state', likers: getTopLikers(session, 8), gifters: getTopGifters(session), followers: getTopFollowers(session) });
    broadcast(session, { type:'likeMeter', total: session.totalLikes, goal: session.likeMeterGoal });
  });

  // Gifts
  conn.on('gift', data => {
    if (data.giftType === 1 && !data.repeatEnd) return;
    const diamonds = (data.diamondCount || 0) * (data.repeatCount || 1);
    if (diamonds === 0) return;
    upsert(session.gifterMap, data, diamonds);
    broadcast(session, { type:'state', likers: getTopLikers(session, 8), gifters: getTopGifters(session), followers: getTopFollowers(session) });
  });

  // Follows
  conn.on('follow', data => {
    const key = data.uniqueId || data.userId;
    if (session.followerList.find(f => f.id === key)) return;
    session.followerList.push({ id: key, nickname: data.nickname || key, profilePicture: data.profilePictureUrl || '', count: 1 });
    if (session.followerList.length > 100) session.followerList.shift();
    broadcast(session, { type:'state', likers: getTopLikers(session, 8), gifters: getTopGifters(session), followers: getTopFollowers(session) });
  });

  // Joins
  function handleJoin(data) {
    const key = data.uniqueId || data.userId || data.nickname;
    if (!key || session.seenJoins.has(key)) return;
    session.seenJoins.add(key);
    if (session.seenJoins.size > 500) session.seenJoins.clear();
    const nickname = data.nickname || data.uniqueId || 'Someone';
    console.log(`[${session.id}] Join: ${nickname}`);
    broadcast(session, { type:'join', nickname, profilePicture: data.profilePictureUrl || '' });
  }
  conn.on('member', handleJoin);
  conn.on('roomUser', handleJoin);

  // Chat comments — for TTS widget
  conn.on('chat', data => {
    const nickname = data.nickname || data.uniqueId || 'viewer';
    const comment = data.comment || '';
    if (!comment.trim()) return;
    broadcast(session, {
      type: 'chat',
      nickname,
      uniqueId: data.uniqueId || '',
      comment: comment.trim(),
      profilePicture: data.profilePictureUrl || '',
    });
  });

  conn.on('disconnected', () => {
    session.connected = false;
    broadcast(session, { type:'status', status:'disconnected' });
  });

  conn.on('error', err => {
    broadcast(session, { type:'status', status:'error', message: err.message });
  });
}

// ── API endpoints ─────────────────────────────────────────────
app.post('/api/:sessionId/connect', (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error:'username required' });
  const session = getSession(req.params.sessionId);
  connect(session, username.replace('@',''));
  res.json({ ok:true });
});

app.post('/api/:sessionId/theme', (req, res) => {
  const session = getSession(req.params.sessionId);
  const theme = req.body.theme;
  if (!THEMES[theme]) return res.status(400).json({ error:'unknown theme' });
  session.theme = theme;
  broadcast(session, { type:'theme', theme });
  res.json({ ok:true });
});

app.post('/api/:sessionId/reset', (req, res) => {
  const session = getSession(req.params.sessionId);
  session.likerMap.clear();
  session.gifterMap.clear();
  session.followerList = [];
  session.totalLikes = 0;
  session.likeMeterGoal = 100;
  session.seenJoins.clear();
  broadcast(session, { type:'state', likers:[] });
  broadcast(session, { type:'likeMeter', total:0, goal:100 });
  res.json({ ok:true });
});

app.post('/api/:sessionId/test-join', (req, res) => {
  const session = getSession(req.params.sessionId);
  broadcast(session, { type:'join', nickname: req.body.nickname || 'TestViewer', profilePicture:'' });
  res.json({ ok:true });
});

app.get('/api/themes', (req, res) => {
  res.json(Object.entries(THEMES).map(([id, t]) => ({ id, name:t.name, emoji:t.emoji, desc:t.desc })));
});

app.get('/api/:sessionId/status', (req, res) => {
  const session = getSession(req.params.sessionId);
  res.json({ connected: session.connected, username: session.username, theme: session.theme, likers: getTopLikers(session, 8), totalLikes: session.totalLikes, likeMeterGoal: session.likeMeterGoal });
});

// ── GSA Hunt — Discord OAuth callback ─────────────────────────
app.get('/gsa-hunt/callback', async (req, res) => {
  const { code } = req.query;
  if (!code) return res.redirect('/gsa-hunt?error=no_code');

  const CLIENT_ID     = process.env.DISCORD_CLIENT_ID;
  const CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
  const REDIRECT_URI  = process.env.DISCORD_REDIRECT_URI || 'https://mintoverlays.com/gsa-hunt/callback';

  if (!CLIENT_ID || !CLIENT_SECRET) {
    return res.redirect('/gsa-hunt?error=discord_not_configured');
  }

  try {
    const tokenRes = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: CLIENT_ID, client_secret: CLIENT_SECRET,
        grant_type: 'authorization_code', code,
        redirect_uri: REDIRECT_URI,
      }),
    });
    const tokenData = await tokenRes.json();
    if (!tokenData.access_token) throw new Error('No access token received');

    const userRes = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });
    const user = await userRes.json();
    const avatar = user.avatar
      ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=64`
      : null;

    const params = new URLSearchParams({
      discordId: user.id,
      name: user.global_name || user.username,
      avatar: avatar || '',
    });
    res.redirect(`/gsa-hunt?${params}`);
  } catch(e) {
    console.error('[GSA OAuth]', e.message);
    res.redirect('/gsa-hunt?error=oauth_failed');
  }
});

// ── GSA Admin page ────────────────────────────────────────────
app.get('/gsa-hunt/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'gsa-hunt', 'admin.html'));
});

// Clean up old sessions every hour
setInterval(() => {
  const cutoff = Date.now() - 3600000;
  for (const [id, session] of sessions) {
    if (!session.connected && session.clients.size === 0) {
      if (session.connection) try { session.connection.disconnect(); } catch(_) {}
      sessions.delete(id);
    }
  }
}, 3600000);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`\n🌿 Mint Overlays running on port ${PORT}`);
  console.log(`   Open: http://localhost:${PORT}\n`);
});
