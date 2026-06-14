// Shared theme CSS variables — injected into every overlay
const THEME_VARS = {
  blossom: {
    '--bg':'rgba(20,10,15,0.92)','--border':'#E8A0BF','--border-glow':'rgba(232,160,191,0.6)',
    '--a1':'#E8A0BF','--a2':'#FFB7C5','--a3':'#C8748C','--text':'#fdf0f5',
    '--sub':'rgba(232,160,191,0.5)','--elec':'#FF85A1','--elec-glow':'rgba(255,133,161,0.5)',
    '--b1':'#7a2040','--b2':'#C8748C','--b3':'#E8A0BF','--b4':'#ffffff','--b5':'#FFB7C5','--b6':'#ff69b4',
    '--glow-tl':'rgba(255,133,161,0.12)','--glow-br':'rgba(232,160,191,0.08)',
    '--r1':'#FFB7C5','--r2':'#E8A0BF','--r3':'#C8748C',
    '--live':'#ff69b4','--live-glow':'rgba(255,105,180,0.8)',
    '--font':'"Quicksand",sans-serif','--head-font':'"Playfair Display",serif',
    '--gfonts':'Quicksand:wght@500;600;700&family=Playfair+Display:wght@700'
  },
  violet: {
    '--bg':'rgba(12,8,20,0.93)','--border':'#9B59B6','--border-glow':'rgba(155,89,182,0.65)',
    '--a1':'#9B59B6','--a2':'#C39BD3','--a3':'#7D3C98','--text':'#f5f0ff',
    '--sub':'rgba(195,155,211,0.5)','--elec':'#DA70D6','--elec-glow':'rgba(218,112,214,0.55)',
    '--b1':'#3d0060','--b2':'#7D3C98','--b3':'#9B59B6','--b4':'#C39BD3','--b5':'#DA70D6','--b6':'#ff99ff',
    '--glow-tl':'rgba(218,112,214,0.14)','--glow-br':'rgba(155,89,182,0.09)',
    '--r1':'#DA70D6','--r2':'#C39BD3','--r3':'#9B59B6',
    '--live':'#DA70D6','--live-glow':'rgba(218,112,214,0.8)',
    '--font':'"Nunito",sans-serif','--head-font':'"Nunito",sans-serif',
    '--gfonts':'Nunito:wght@500;600;700;800'
  },
  noir: {
    '--bg':'rgba(8,6,6,0.95)','--border':'#B8860B','--border-glow':'rgba(184,134,11,0.55)',
    '--a1':'#B8860B','--a2':'#DAA520','--a3':'#8B0000','--text':'#f5f0e8',
    '--sub':'rgba(184,134,11,0.5)','--elec':'#DAA520','--elec-glow':'rgba(218,165,32,0.5)',
    '--b1':'#3a0000','--b2':'#8B0000','--b3':'#B8860B','--b4':'#DAA520','--b5':'#fff8dc','--b6':'#B8860B',
    '--glow-tl':'rgba(218,165,32,0.10)','--glow-br':'rgba(139,0,0,0.10)',
    '--r1':'#DAA520','--r2':'#B8860B','--r3':'#8B0000',
    '--live':'#8B0000','--live-glow':'rgba(139,0,0,0.8)',
    '--font':'"Cormorant Garamond",serif','--head-font':'"Cormorant Garamond",serif',
    '--gfonts':'Cormorant+Garamond:wght@500;600;700'
  },
  warzone: {
    '--bg':'rgba(8,10,6,0.94)','--border':'#4A5C2A','--border-glow':'rgba(74,92,42,0.7)',
    '--a1':'#4A5C2A','--a2':'#FF6B00','--a3':'#2C3A1A','--text':'#d4d8c8',
    '--sub':'rgba(74,92,42,0.6)','--elec':'#FF6B00','--elec-glow':'rgba(255,107,0,0.6)',
    '--b1':'#1a2010','--b2':'#2C3A1A','--b3':'#4A5C2A','--b4':'#FF6B00','--b5':'#ffaa44','--b6':'#FF6B00',
    '--glow-tl':'rgba(255,107,0,0.10)','--glow-br':'rgba(74,92,42,0.10)',
    '--r1':'#FF6B00','--r2':'#4A5C2A','--r3':'#2C3A1A',
    '--live':'#FF6B00','--live-glow':'rgba(255,107,0,0.8)',
    '--font':'"Barlow Condensed",sans-serif','--head-font':'"Barlow Condensed",sans-serif',
    '--gfonts':'Barlow+Condensed:wght@500;600;700;800'
  },
  storm: {
    '--bg':'rgba(6,8,18,0.93)','--border':'#00D4FF','--border-glow':'rgba(0,212,255,0.65)',
    '--a1':'#00D4FF','--a2':'#7B2FFF','--a3':'#FFE000','--text':'#e8f4ff',
    '--sub':'rgba(0,212,255,0.5)','--elec':'#FFE000','--elec-glow':'rgba(255,224,0,0.6)',
    '--b1':'#0a0030','--b2':'#7B2FFF','--b3':'#00D4FF','--b4':'#ffffff','--b5':'#FFE000','--b6':'#7B2FFF',
    '--glow-tl':'rgba(0,212,255,0.14)','--glow-br':'rgba(123,47,255,0.10)',
    '--r1':'#FFE000','--r2':'#00D4FF','--r3':'#7B2FFF',
    '--live':'#00D4FF','--live-glow':'rgba(0,212,255,0.9)',
    '--font':'"Rajdhani",sans-serif','--head-font':'"Rajdhani",sans-serif',
    '--gfonts':'Rajdhani:wght@500;600;700'
  },
  raiders: {
    '--bg':'rgba(10,8,6,0.95)','--border':'#8B3A2A','--border-glow':'rgba(139,58,42,0.65)',
    '--a1':'#8B3A2A','--a2':'#CC4A2A','--a3':'#5C5C5C','--text':'#d8cfc8',
    '--sub':'rgba(139,58,42,0.55)','--elec':'#CC4A2A','--elec-glow':'rgba(204,74,42,0.6)',
    '--b1':'#1a0a06','--b2':'#4a1a0a','--b3':'#8B3A2A','--b4':'#CC4A2A','--b5':'#ff8866','--b6':'#5C5C5C',
    '--glow-tl':'rgba(204,74,42,0.12)','--glow-br':'rgba(92,92,92,0.08)',
    '--r1':'#CC4A2A','--r2':'#8B3A2A','--r3':'#5C5C5C',
    '--live':'#CC4A2A','--live-glow':'rgba(204,74,42,0.8)',
    '--font':'"Share Tech Mono",monospace','--head-font':'"Share Tech Mono",monospace',
    '--gfonts':'Share+Tech+Mono'
  }
};

function applyTheme(themeId) {
  const vars = THEME_VARS[themeId];
  if (!vars) return;
  const root = document.documentElement;
  for (const [k, v] of Object.entries(vars)) {
    root.style.setProperty(k, v);
  }
  // Load Google Font
  const existing = document.getElementById('gfont');
  if (existing) existing.remove();
  const link = document.createElement('link');
  link.id = 'gfont';
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${vars['--gfonts']}&display=swap`;
  document.head.appendChild(link);
  // Apply font to body
  document.body.style.fontFamily = vars['--font'];
}
