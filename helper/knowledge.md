# Mint Overlays: extra notes for the helper

Mint Overlays is a Windows desktop app for TikTok LIVE hosts. It runs overlays (alerts, goal bars, leaderboards, videos, sounds, games) that the host adds to TikTok LIVE Studio or OBS as a Browser source. Each tool has its own page in the left sidebar. Each overlay tool page shows an Overlay URL and a Copy URL button; that URL is what goes into the Browser source.

## Where things are in the app
- The **Guide** button (bottom-right corner) opens short guided tours for each page. The **Ask Moxy** button joined to its left side opens this helper chat (Moxy is the Mint Overlays fox mascot) (up to 30 questions a day per license).
- **Report Issue** (bottom-left of the window) is how someone gets help from the developer when something is broken.
- **Account** (bottom of the sidebar) is where the license key is entered. The key only needs to be entered once: it stays saved on that computer.
- When a newer version is available, an **Update available** button appears in the top-left corner of the window. Clicking it downloads the update, then it changes to **Restart to update**. If it does not appear, quit Mint Overlays completely (including the tray icon), open it again and wait about 15 seconds; if it still does not appear, download the newest installer from the Mint Overlays download page and run it over the old version (settings are kept).
- The app only works for people with an active license; the how-to guide covers activation.

## Page ids (for links)
connections, overlay-studio, text-to-speech, soundboard, gift-sounds, vip-soundboard, sound-alerts, text-alerts, like-burst, gift-jar, gift-scroll, battle-board, video-board, gift-videos, stream-credits, points-economy, spin-wheel, choice-wheel, actions, goal-bars, top-likes, top-gifter, word-garden, live-party, countdown-timer, top-gift, voicemod, account

# The how-to guide

<page id="connections">
(Section: Getting started)

## Connecting your platforms

Everything in Mint Overlays is powered by your live activity, so this is step one. Open Connections: in the sidebar — it's the page you land on when the app opens.

- Find the card for the platform you stream on — TikTok, YouTube, Twitch, or Kick.
Enter your channel or username exactly as it appears on that platform (no need to include the @).

- Toggle the platform on to connect it.
Mint listens to that channel's live events in the background — chat, gifts, follows, likes, and shares — the moment you go live.

- Repeat for every platform you simulcast to.
You can connect as many platforms as you like at once; most widgets let you choose which connected platforms feed into them.

Why this matters:
Almost every widget below — Text to Speech, Like Burst, Goal Bars, Points, Top Gifters — reacts to the events these connections produce. Nothing else in the app will feel "live" until at least one platform is connected.
</page>

<page id="obs-setup">
(Section: Getting started)

## Getting a widget onto your stream

Most tools in the Visual Effects, Videos & Media, Community & Rewards, and Games & Activities groups render as a transparent Overlay URL: you drop into your broadcasting software as a browser source. A few tools in Audio & Voice play sound locally through the app instead and don't need this step — each section below tells you which kind it is.

Browser sourceHas a copyable Overlay URL — put this in OBS / TikTok LIVE Studio

Local audioPlays through your PC's audio output — route it into your mixer or stream audio, no browser source needed

- Open the widget's page in Mint Overlays and find its Overlay URL: card, then click Copy URL: .

- In OBS: add a new Browser: source to your scene, paste the URL into the URL field.
In TikTok LIVE Studio: add a Web: layer and paste the same URL.

- Set the source's width and height to match your canvas (1920×1080 for a horizontal OBS scene, 1080×1920 for a vertical TikTok scene), then resize/position it on your scene.

- Leave it running. The page is transparent and updates itself automatically — you never need to refresh it mid-stream.
If you restart Mint Overlays, your browser sources reconnect on their own once the app is back.

One URL per widget, unless you use Overlay Studio:
Adding each widget as its own browser source works fine, but it means one source per widget in your scene. If you'd rather manage everything as a single layout with drag-and-drop positioning, build it in Overlay Studio instead and use its one combined URL.
</page>

<page id="guide-button">
(Section: Getting started)

## The Guide button and page tours

Inside the Mint Overlays app, the Guide: button sits at the bottom right of every page. It is a built-in assistant, so you do not have to remember anything from this guide.

- Getting started checklist.: Four steps — connect your live, add an overlay to TikTok LIVE Studio, add your first video, and take a tour. The first three tick themselves when you do them, and each has a button that takes you to the right page.

- Show me around.: Every page has a short tour that highlights the parts of the page one at a time and explains them in plain language. Press Next: and Back: , use the arrow keys, or press Esc: to leave. Choose Show all tours: to start the tour for any page.

- First-visit offer.: The first time you open a page you may see a small "New here?" card offering its tour. It goes away by itself, and it is only shown once per page. Untick Offer a tour the first time I open a page: in the Guide, or choose Don't show tips: , to turn the offers off.

- Start over.: Start the tours over: in the Guide brings the offers and the checklist back.

- This guide.: Open the how-to guide: in the Guide opens the page you are reading.
</page>

<page id="ask-helper">
(Section: Getting started)

## Ask Moxy (the AI helper)

Stuck, or just do not feel like reading? Meet Moxy, the Mint Overlays fox. The Ask Moxy: button next to the Guide button opens a small chat where you can type a question about the app and get plain steps back.

- What it knows.: It answers from this guide, so it is best at "how do I..." and "why is my overlay not showing" questions. If the guide does not cover something it says so, and you can press Report Issue: at the bottom left of the app to reach a person.

- Open the page for you.: When a page would help, the answer includes an Open: button that takes you there.

- Limits.: It is an AI, so it can be wrong; it cannot see your screen or settings. You can ask up to 30 questions a day, and it needs your license key to be entered on the Account page and an internet connection.

- New chat.: New chat: clears the conversation; Esc: closes the chat.
</page>

<page id="connect-your-app">
(Section: Advanced)

## Connect Your App

Advanced · limited support
An advanced feature for people who build their own programs or scripts. It sends your TikTok gifts, as they happen, to a program you run on the same computer, for example one that changes your OBS scenes. You can safely skip it if that is not you: it is off until you turn it on, and nothing else in Mint needs it. It is provided as is with limited support, so we cannot help write or fix your own program.

### Set it up

- Open Account: in the sidebar, find the Advanced: card named Connect your app and press Open: . Then switch it On: .

- Press Copy address: and give the address to your program. It looks like ws://127.0.0.1:21420/?token=... and only works on this computer. Keep the whole address, token included.

- Press Send a test gift: to see your program react without going live. The page shows how many programs are connected.

- Building your own program, or asking an AI assistant to? Press Copy instructions for my developer or AI: . It copies everything they need, including the exact message format.

Mint does not control OBS itself: This feed hands your program the gifts. Your program decides what to do with them, such as switching OBS scenes through OBS's own connection.

### What a gift message contains

#### Who
TikTok's numeric viewer ID, the @handle, the nickname and the picture, plus a cleaned-up display name with rude names replaced.

#### What
TikTok's gift ID, the gift's name and picture, and what one gift is worth in diamonds.

#### How many, and streaks
The repeat count and total diamonds. A gift streak sends messages while it builds, marked final: false, then one last message marked final: true with the total. For one message per gift or streak, use only the final: true ones.

#### No doubles
Every message has an event ID, plus TikTok's own message ID, so your program can skip one it has already handled, for example after reconnecting.

#### Staying safe
It only listens on this computer, asks for the token, and turns away web pages. Under Options you can change the port or make a new token. Only gifts are sent for now.
</page>

<page id="tts">
(Section: Audio & Voice)

## Text to Speech

Local audio
Turns chat from every connected platform into one clear, moderated voice, plus an optional shared live-chat window you can pop out and capture separately.

### Voice & routing

- Pick a voice engine — System voices: (the voices installed on your Windows PC) or ElevenLabs voices: — then pick a voice and use the test text field to hear how it sounds before you go live.
Rate, pitch and volume sliders sit next to the voice picker.

- Under Choose the conversations: , select which connected platforms feed the voice (and the shared chat window) — each one can be included or muted independently.

- Optionally set a TikTok Fan Club filter: : read out everyone, Fan Club members only, or members at or above a minimum Fan Club level.

### Using ElevenLabs voices

- Set Voice engine: to ElevenLabs voices: .

- Paste your ElevenLabs API key and click Connect: .
You find the key on ElevenLabs, under your profile's API Keys page. There is no separate login for third-party apps. Your key stays inside the Mint Overlays app on your PC.

- Choose a voice from the list. Voices you have cloned or generated yourself show up marked (your voice): .

- Click Test voice: to hear it.

Needs internet, and uses your ElevenLabs quota: Each line is generated over the internet by your own ElevenLabs account, so it needs a connection and counts against your plan's character allowance. If a line fails (a bad key or a used-up allowance), the status text on the page tells you why.

HD local voices were removed in version 2.0.9: If you had chosen them, Mint Overlays switches you to System voices automatically and clears the old voice download from your computer. Your other settings are unchanged.

### Stopping the voice

Two buttons at the top of the page control what is being read right now.

#### Stop reading
Silences the voice immediately and clears every line still waiting in the queue. New chat keeps being read afterwards.

#### TTS enabled / paused
Pausing also clears the queue, so nothing already waiting is read while TTS is paused. Switch it back to enabled to read chat again.

### Moderation

Text to Speech has real moderation built in, not just a mute button:

#### Skip profanity & slurs
A built-in blocklist is filtered out of both usernames and messages before anything is spoken.

#### Blocked words & phrases
Add your own list of words or phrases to silence — one per line.

#### Muted viewers
Block specific usernames per platform, one at a time or pasted in bulk.

#### English only
Best-effort local language detection to skip non-English messages.

#### Per-viewer cooldown
Skips repeat TTS from the same person for a while, so one viewer spamming chat or likes can't spam your voice.

### Multi-chat pop-out

The same card lets you build a shared live-chat feed — combining messages from every included platform into one styled window, with your own title, colors, and fonts (upload custom fonts if you like). Use the pop-out button to open it as its own window, which you can then window-capture in OBS if you want chat visible on stream.

Not an overlay URL: Text to Speech and the multi-chat window don't use a copyable Overlay URL — the voice plays through your PC's audio, and the chat window is a real pop-out you capture like any other application window.
</page>

<page id="soundboard">
(Section: Audio & Voice)

## Soundboard

Local audio
Your reaction deck — build pages of sounds, each with its own image and keyboard shortcut, and fire them instantly while you're live.

- Click + Add sound: to create a tile, then attach an audio file and (optionally) an image.

- Click Set shortcut: on the tile and press the key combination you want to trigger it.

- Organize sounds into pages — click + New page: to add another tab, and rename pages to match a theme or segment of your stream.

- To get rid of a whole page and every sound on it, open that page and click Delete page: . You are asked to confirm, and you cannot delete your last page. Delete only removes the page from your Soundboard, never anything else on your computer.

Mint Overlays comes with a Starter pack: page of 50 ready-made sound effects (Vine Boom, Bruh, Air Horn and more), already named. Click the round play button on any card to hear it, then press Set shortcut: to give it a key. The cards are small on purpose so a long page stays easy to scan; use Find a sound: at the top to narrow a big page down by name. Your own sounds work exactly the same way.

If you delete the Starter pack and want it back, a Restore Starter pack: button appears next to Rename page. Sounds you add yourself are never touched by it.

Real global hotkeys: Shortcuts registered here work even when Mint Overlays isn't the focused window — so you can be tabbed into your game or browser and still trigger a sound.
</page>

<page id="gift-sounds">
(Section: Audio & Voice)

## Gift Sounds

Local audio
Attach a sound effect to a real TikTok gift so it plays automatically the moment that gift lands.

- Search or filter the gift catalog by coin value, then select the gift you want to react to.

- Click Add sound effect: , then attach an audio file and give it a sound title.

- Organize configured gifts into folders if your list grows large, and adjust the master volume at the top of the page.

Gift images and coin values come from the bundled gift catalog; if a gift you receive isn't listed, add it as a custom gift.

Feeds Gift Scroll automatically: Every gift you configure here shows up in the Gift Scroll banner without any extra setup — the two tools share the same list.
</page>

<page id="vip">
(Section: Audio & Voice)

## VIP Entrances

Local audio
Give your regulars, mods, or subscribers a personal sound the moment they join your live.

- Paste each person's TikTok profile link — Mint extracts the exact username used by live events, so you don't have to type it manually.

- Attach an entrance sound to each VIP, and set the master VIP volume.

- Turn VIP Entrances on to start playing sounds automatically when they join your stream.

- Only the first time they join each live.: Tick this on a VIP to play their sound once per live, so it does not repeat every time they leave and come back. Leave it off and it plays on every join, as before. Each live starts fresh.

- Want a video as well as a sound? Add a Video Board video with the Specific viewer: trigger for the same person. It can play on stream with its own position and size, and has the same once-per-live switch.

Your VIP list is shared: The same list of VIPs powers the "VIP joins" trigger in both Text Alerts and Video Board — add someone once here and they're available as a trigger everywhere.
</page>

<page id="sound-alerts">
(Section: Audio & Voice)

## Sound Alerts

Local audio
Spoken welcome and milestone messages that feel like part of your stream, using the same voice as Text to Speech.

#### Welcome alerts
Up to three messages, chosen at random, spoken once per viewer per session when they join. Use {name} in your message.

#### Milestone alerts
Each viewer has their own like counter. Set how often to celebrate (every N likes) and Mint speaks one of your milestone messages using {name} and {count}.

Use the Preview welcome: / Preview milestone: buttons and the per-message Test: button to hear exactly what will play before you go live.
</page>

<page id="voicemod">
(Section: Audio & Voice)

## Voicemod

Needs the Voicemod app
Change your voice on stream when something happens — a gift lands, a VIP walks in, you win a battle. Mint Overlays switches your Voicemod voice for the time you choose, then puts it back. Voicemod is its own app and you need to have it installed.

- Open the Voicemod app and keep it running, then open Voicemod: in the Mint Overlays sidebar and click Connect to Voicemod: .
Mint Overlays never starts Voicemod or connects to it on its own — unless you tick Connect to Voicemod automatically when Mint Overlays starts: (off by default; it still never opens Voicemod for you).

- Make sure the voice changer is switched on inside Voicemod. If it is off, the page tells you, and your voice triggers can't change anything until you switch it on there.

- Under Change my voice when…: , pick the moment, pick a voice, and choose how long it lasts.

- Click Add voice trigger: . It appears under Your voice triggers: , where you can edit it, and the master switch Voice triggers are on: lets you turn them all off while keeping the list.

### What can change your voice

#### A gift is sent
Optionally pick one gift, or leave it empty for any gift. With no gift picked, only the highest minimum a gift reaches plays, so a 1,000-coin gift won't also use your 100-coin voice.

#### New follower / Someone shares
Fires on a follow or a share.

#### VIP joins
Uses your VIP list from VIP Entrances.

#### Viewer joins (by level)
Plays when a viewer at that Points Economy level or higher joins. Add several levels and the highest one they have reached is used.

#### Fan club level-up
Plays when a viewer's TikTok fan club level goes up, for example from 10 to 11. Leave the level at 0 for every level-up, or type a level such as 11 to play only when someone reaches it. TikTok does not announce level-ups, so Mint notices when a level is higher than the last time it saw that viewer, usually the next time they chat, send a gift, like, share or join. Someone Mint has never seen before cannot trigger it the first time; levels are remembered between lives. This is the fan club level, not Points Economy. In an alert, {level} is the new level and {oldlevel} the one before.

#### Specific viewer joins
Type the viewer's username. Only the first time they join each live: is on by default; turn it off to play every time they join again.

#### Battles
Battle starts, battle win, battle lose, or a last-second snipe.

#### Twitch
Cheer (Bits), subscription, gift subs, or a raid.

#### Keyboard shortcut
Works anywhere in Windows, even while Mint Overlays is in the background.

After the time you set, your voice goes back to what it was. If a new trigger fires during that time, the voice swaps and the clock restarts. Put my voice back now: returns you to your normal voice immediately.

Connected to Voicemod, your voices appear in a list on the page — click one to hear it for 8 seconds before your voice goes back.
</page>

<page id="text-alerts">
(Section: Visual Effects)

## Text Alerts

Browser source
Animated text moments that float over your scene — a follow, a share, a VIP joining, or any milestone you define.

- Click + New alert: , name it, and write the message. Insert {name} or {count} tokens where you want them substituted live.

- Choose a text style, motion, font, size, and how long it stays on screen.

- Pick a trigger (see below) and configure it, then click Save alert: .

- Copy the Overlay URL from the top of the page into OBS or TikTok LIVE Studio as a transparent browser source.

### Triggers

#### Keyboard shortcut
Fires from a real global hotkey — works even when the app isn't focused.

#### New follower
Fires the moment someone follows you live.

#### Someone shares
Fires when a viewer shares your stream.

#### VIP joins
Fires when someone on your VIP Entrances list joins the live. It has the same Only the first time they join each live: switch.

#### Fan club level-up
Plays when a viewer's TikTok fan club level goes up, for example from 10 to 11. Leave the level at 0 for every level-up, or type a level such as 11 to play only when someone reaches it. TikTok does not announce level-ups, so Mint notices when a level is higher than the last time it saw that viewer, usually the next time they chat, send a gift, like, share or join. Someone Mint has never seen before cannot trigger it the first time; levels are remembered between lives. This is the fan club level, not Points Economy.

#### Specific viewer
Only the first time they join each live: is on by default; turn it off to play every time they join again. Paste a viewer's profile link — fires only for that person.

#### Stream milestone
Fires at every multiple of likes, follows, or gift coins for the whole stream (e.g. every 100 likes).

#### Individual milestone
Fires when one viewer personally crosses a multiple — their own 100th like or gift, tracked per-person.

#### Someone joins
Fires when any viewer joins the live.

#### Viewer joins (by level)
Fires when a viewer at a minimum Points Economy level (or higher) joins. Add several at different levels and the highest one they have reached is the one that plays.

#### Chat command
A viewer types a command such as !score and the alert shows their points, level and place. Tokens: {name}, {points}, {currency}, {level}, {rank}.

#### Wheel result / Wheel jackpot
Shows what a viewer won on the Spin Wheel, with {reward} for the amount.

#### Twitch: cheer, sub, gift subs, raid
Twitch events, with tokens like {bits}, {count} and {viewers}. See the note below.

Twitch triggers.: Connect Twitch on the Connections page first. For cheers you set a minimum Bits; for subscriptions a minimum months subscribed; for gift subs a minimum subs gifted (a bulk gift counts once); for raids a minimum raiders. Add several alerts at different amounts and only the highest amount reached plays, so a 1,000-Bit cheer won't also play your 100-Bit alert. Bits also count towards points, leaderboards and goals the way gifts do.

Plays on.: If you stream in both vertical and horizontal using the same overlay link, pick Vertical streams only or Horizontal streams only on an alert and it only plays on the browser source that is taller than wide (vertical) or wider than tall (horizontal). Left on Any stream layout, it plays on both.

New-follower alerts pull the follower's real platform avatar automatically, and you can show/hide the avatar and choose its position and size.
</page>

<page id="like-burst">
(Section: Visual Effects)

## Like Burst

Browser source
A live floating-hearts effect that highlights whoever is actively double-tapping your stream, with running like totals per viewer.

- Choose how many top likers to show at once, heart size and spawn rate, and where the effect sits on screen.

- Set milestone thresholds (e.g. 100 / 500 / 1,000 likes) to celebrate a viewer crossing them.

- Copy the Overlay URL into OBS or TikTok LIVE Studio.

This reacts to real likes as they come in — viewers, avatars, and running totals are all pulled from your live session, not placeholder data.
</page>

<page id="gift-jar">
(Section: Visual Effects)

## Gift Jar

Browser source
Turns every gift into a physical object that drops into a jar and stacks up with real physics — a satisfying visual tally of the stream's gifts.

- Pick one of the built-in jars, or upload your own jar artwork (PNG, WebP, or JPG).

- Use Drop gifts: and Reset: in the editor to preview how gifts physically settle before you go live.

- Copy the Overlay URL into OBS or TikTok LIVE Studio.

Real gifts you receive drop into the jar automatically and settle with persistent physics — they stay stacked where they land until you reset the jar (typically at the start of a new stream).
</page>

<page id="gift-scroll">
(Section: Visual Effects)

## Gift Scroll

Browser source
A scrolling banner that automatically mirrors every gift you've configured a sound for in Gift Sounds — no separate setup needed to populate it.

- Adjust scroll speed, direction, icon and text size, and background/opacity to match your scene.

- Choose what label shows on each item: gift title, gift + sound title, or sound title only.

- Optionally add up to four rotating "how to play" info lines (with an emoji picker) and a live status line — e.g. showing the current Spin Wheel high score using tokens like {name}, {points}, and {currency}.

- Copy the Overlay URL into OBS or TikTok LIVE Studio.
</page>

<page id="battle-board">
(Section: Visual Effects)

## Battle Board Beta

Browser source
One scoreboard for your whole TikTok battle. It reads TikTok's battle data from your own connection, so you see every player's score in one place — and nobody else needs Mint Overlays.

- Connect TikTok on the Connections page with your own username, like always.
It is built to work whether you started the battle or were invited into it.

- Copy the Overlay URL from the top of the Battle Board page into TikTok LIVE Studio or OBS as a browser source. It stays empty until a battle starts.

- Pick a layout under Pick how it looks on stream: : Team panel: (both team totals, a lead bar, and every player under their team), Ranked list: (everyone ranked by score), or Slim strip: (a small bar for a corner of the screen).

- Under Make it yours: , set team and player colors, text and panel colors, font, size, whether to show a panel behind the scoreboard (turn it off for just the text and numbers floating on your scene, with no box or lines), panel opacity, whether to show profile pictures, and how long the board stays up after a battle ends.

It handles 2v2 team battles, 1v2, three-player and free-for-all battles, and 1v1. The preview on the page shows sample numbers until a real battle starts. Anyone hiding their identity in an Enigma battle shows as an "Enigma gifter".

### Top supporters after the battle

TikTok only lists each side's top three supporters. When a battle ends, Mint Overlays can put those three on a podium with their pictures, names and points. It is its own overlay with its own URL — add it as a separate, full-screen browser source above your other sources.

- Choose an animation, a title and your own subtitle line, plus font, colors and size.

- Set how long it stays on screen, how many seconds after the battle ends it starts, and how dark the backdrop is.

- Optionally Also show the other side's top 3: (shown after yours) and turn Show points: on or off.

- Send a test to my overlay: plays a sample on your real browser source, so you can check placement before a battle.

### Power-ups: who earned and who played them

In a battle, TikTok tells us when viewers earn power-ups and when one is played: boosting glove, magic mist, time maker, stun hammer, and the no. 2 and no. 3 boosters. Mint Overlays turns that into a pop-up each time a power-up is played (who played it, which one, and whether it was for you or the other streamer) plus a running list of who earned one. It is its own overlay with its own URL — add it as a separate browser source.

- TikTok says who earned a power-up but not how many each person holds, so the list shows who earned one, and a small badge for each power-up that person has played.

- Turn the pop-ups or the list on or off, set how long a pop-up stays, how many names to show, and how long the list stays after the battle ends.

- Choose the title, font, colors, size, whether there is a panel behind it (off means no box or lines at all) and its opacity. Send a test to my overlay: plays a sample on your real browser source.

### Videos for battle moments

The Video Board has battle triggers — battle starts, you win, you lose, the 2x or 3x time (the bonus mission reward), a Boosting Glove, a Magic Mist, a Time Maker, a Stun Hammer, a No. 2 Booster or a No. 3 Booster being played, and a last-second snipe — so you can pop up your own videos during a battle.

Beta: Battle data comes from TikTok's unofficial feed, so details can change and a few battle types may not report every score yet. The app keeps a local record of battle events in a file called battle-capture.jsonl in the Mint Overlays data folder. Nothing is uploaded. If the scoreboard stays empty in a battle you were invited to, or something looks wrong, send that file in with Report Issue.
</page>

<page id="video-board">
(Section: Videos & Media)

## Video Board

Browser source
Play a local video or image alert over your stream, controlled from one Overlay URL — perfect for entrance clips, hype cams, or full-screen celebration moments.

- Add an entry and attach a local video or image file.

- Position and size it on the preview canvas (or set it to fill the frame), and set duration, loop count, and volume.

- For image uploads, optionally enable chroma key to remove a background color so it composites cleanly over your scene.

- Choose a trigger and save. Organize clips into folders if your board grows large.
After you save, a "Saved" message appears and the form clears for the next video; the name fills in from the file name. If something is missing, the message tells you exactly what.

### Triggers

Video Board shares most of its triggers with Text Alerts — see the trigger cards there for what each one does — and adds a few of its own:

#### Click to play
Never plays by itself. It plays only when you click its thumbnail in the Mini Player.

#### Keyboard shortcut
A global hotkey that works even when the app isn't focused.

#### Follow, share, VIP joins, viewer joins (by level), fan club level-up, specific viewer
The same as in Text Alerts. A VIP who also has their own Specific viewer video gets both.

#### Stream milestone / Personal milestone
Every multiple of likes, follows or gift coins for the stream, or one viewer's own multiple.

#### Spin wheel jackpot
Plays when someone hits the jackpot slice on the Spin Wheel.

#### Battle moments
Battle starts, you win, you lose, 2x time, 3x time, Boosting Glove, Magic Mist, Time Maker, Stun Hammer, No. 2 Booster and No. 3 Booster played, last-second snipe. 2x time and 3x time: play when TikTok's bonus mission is completed and the 2x or 3x scoring window really begins; the No. 2 and No. 3 boosters viewers can play are separate triggers. The last-second snipe plays only in the final 15 seconds. See Battle Board.

#### Super Fan sticker
Pick one of the stickers your viewers have recently sent.

#### Twitch: cheer, sub, gift subs, raid
Set a minimum amount; the highest amount reached is the one that plays.

### Plays on: vertical or horizontal

If you stream in both shapes with the same overlay link, set Plays on: to Vertical streams only or Horizontal streams only so each video only plays on the shape it was made for. The default, Any stream layout, plays on both.

### How playback works

- Videos always play one after another, in the order they arrive.

- Test: cuts in front and plays right away. The video it interrupted starts over afterwards and the line carries on.

- The Stop on stream: button immediately stops whatever is playing on your stream and clears anything queued behind it.

- Removing the background colour (chroma key) works on videos as well as images. If your PC is busy, the effect scales itself down so the video keeps playing smoothly.

### Moved over from the old Mint Overlays?

Your videos and sounds from the original Mint Overlays come over by themselves the first time you open the new app. If something is missing, open the Video Board page, scroll to the Video library: and press Bring in my old videos and sounds: (the same button is at the bottom of the Soundboard). It looks in every old Mint Overlays folder on your computer, brings over anything that is not here yet, and tells you in plain words how many it found, how many came in, and which ones could not come over and why. It is safe to press more than once. Your old files are never changed or deleted. If it says it cannot find an old app, or some videos could not come over, press Report Issue: so we can help.

### Where video sound plays

One setting, shared by Video Board and Gift Videos, near the top of each page:

Choice | What happens |

Mint Overlays app (recommended) | The video shows on stream with its sound off, and the app plays the sound through the same PC audio your soundboard uses. Set the browser source to sound off in TikTok LIVE Studio or OBS so you don't hear it twice. |

The browser source | The sound plays inside your streaming software's browser source. Some programs keep it silent until the source has been clicked. |

### Video has no sound on stream?

- Check the setting above is on Mint Overlays app: . It is the most reliable, and it works for videos inside an Overlay Studio scene too. When you add a Video Board to a scene while the setting is on the browser source, Moxy offers to switch it for you.

- Make sure Mint Overlays is open: . In the app setting, the sound comes from the app, not from the browser source.

- Make sure your streaming program is capturing your PC's sound: . A quick test is a Soundboard sound: if that reaches your stream, videos will too. If it doesn't, add your PC or desktop audio in TikTok LIVE Studio or OBS.

- Set the web source to sound off: in TikTok LIVE Studio or OBS (app setting only), so the sound isn't played twice or muted twice.

- If a video's sound is refused by the computer, Moxy pops up with these same checks.
</page>

<page id="gift-videos">
(Section: Videos & Media)

## Gift Videos

Browser source
Assign a local video or image to a specific TikTok gift, so receiving it plays your clip once — even if a viewer sends the same gift several times in a row.

- Pick the gift from the catalog and attach the video or image that should play when it arrives.

- Set position/size or full-screen, duration, and chroma key (background removal) if needed.

- Copy the Overlay URL into OBS or TikTok LIVE Studio.

Gift Videos plays once per gift burst instead of stacking or spamming your stream when someone sends a gift combo.

- A video for one viewer.: After you choose a gift, type a username or paste a profile link into Only for one viewer: before you press Add. That video plays only when that person sends the gift, and it takes the place of the gift's everyday video for them. Everyone else still gets the everyday one. A gift can have its everyday video plus one for each person you like, and you can change who a video is for later in its editor.

- The gift catalog shows 300 gifts with a button to show more, and a coin-value filter so you can jump to, say, the 1-coin or 10-coin gifts.

- A gift can have two videos — one for vertical streams and one for horizontal. Add the gift a second time after setting the first one's Plays on: to Vertical streams only or Horizontal streams only.

- Video sound follows the Where video sound plays setting.

- Open the Mini Player to play any gift video with one click.
</page>

<page id="mini-player">
(Section: Videos & Media)

## Mini Player

Pop-out window
A small window of clickable thumbnails with a tab for your Video Board and a tab for your Gift Videos, so you can put any of them on stream with one click while you are live.

- Open it from the Video Board: or Gift Videos: page with the Open Mini Player: button.

- Switch between the Video Board: and Gift Videos: tabs, and use the search box to find a video or gift by name.

- Click a thumbnail to play it on your stream.

- Filters.: On the Video Board tab, narrow the thumbnails to certain folders or triggers. On the Gift Videos tab, narrow them to certain coin values (1 coin, 5 coins, 10 coins and so on). Clear filters: shows everything again.

- Thumbnail size.: A slider changes how big the thumbnails are.

- Moving it.: Drag the bar across the top of the window (the one with the dotted handle) to move it, even to another screen. Drag the edge or corner of the window to resize it.

- Always on top.: The window stays above your other windows by default; click the pin button to turn that off or on.

- Stop on stream.: Immediately stops whatever is playing on your stream and clears anything queued behind it.

- Videos set to the Click to play: trigger never play by themselves — the Mini Player is where you play them.

Videos added or changed on the Video Board and Gift Videos pages show up in the Mini Player; if a tab is empty it tells you where to add some.
</page>

<page id="stream-credits">
(Section: Community & Rewards)

## Stream Credits

Browser source
A closing thank-you reel for the end of your stream — scrolls through your top gifters and newest followers.

- Set a title for the credits screen.

- Copy the transparent Overlay URL into OBS or TikTok LIVE Studio and bring it on screen when you're wrapping up.

The list is built from your real session — top gifters and new followers from the stream you just ran, not sample names.
</page>

<page id="points-economy">
(Section: Community & Rewards)

## Points Economy

Browser source
Give your community a currency they earn by watching and participating, and spend on things like Spin Wheel entries.

### How viewers earn points

#### Gift coins
Earn a set number of points per coin spent on a gift — toggle on/off and set the rate.

#### Shares
Earn points each time someone shares your stream.

#### Watch time
Earn points per minute spent watching live.

Name your currency (defaults to "Points"), and configure a leveling curve so viewers climb levels as they accumulate points.

### Managing your community's balances

- The leaderboard tab lists every viewer with their points, level, and last-seen date — filter and search it as your community grows.

- The transaction tab logs every point change with a timestamp, so you can audit exactly how someone reached their balance.

- Manually adjust any viewer's balance up or down with a note — useful for corrections or one-off rewards.

- Click any column heading (User, Level, Total, First activity, Last activity) to sort the list, and click again to reverse it.

- Tick boxes next to viewers to delete several at once, edit a viewer's details, and undo a change if you make a mistake.

- Import points: brings your points over from another list: open your old points list, select the rows (usernames, levels and points), copy them and paste them in. Paste more than once if the list is long. Nothing changes until you press Import, and you choose whether to keep whichever total is higher (safe to repeat), use the imported total, or add it to what viewers already have.

Points on Stream: Turning on the on-screen leaderboard gives you a separate transparent Overlay URL for a live points leaderboard you can display during your stream — copy it from the same page into OBS or TikTok LIVE Studio.
</page>

<page id="spin-wheel">
(Section: Community & Rewards)

## Spin Wheel

Browser source
A transparent, command-driven reward wheel viewers spend points on by typing a chat command.

- Set the wheel title and the spin command chat viewers type to enter (defaults to !spin).

- Choose the number of slices and the minimum/maximum points a spin can cost or win, then set each slice's value (or use Randomize slice values: ).

- Optionally set a spin cooldown per viewer in minutes, so one person can't spin back to back.

- Use Spin time: to choose how long the wheel turns, from 3 to 15 seconds (8 by default). A longer spin builds more suspense. Points, alerts and videos wait until the wheel has stopped, and the winner is only announced once it lands. Tick sound: adds a soft click as each slice passes the pointer.

- Style it — pick a winner-name font (or upload your own), a winner animation, a wheel color palette, and an optional particle effect (fire, hearts, sparkles, electric, confetti).

- Copy the Overlay URL into OBS or TikTok LIVE Studio.

When live, Mint listens for your spin command in chat, spends the viewer's points, spins the wheel, and substitutes the real chatter's name and your currency name into the winner text — the Preview spin: button just lets you test the animation without a real entry.

The page has two tabs: Points wheel: (this one) and Choice wheel: , below. Each has its own Overlay URL.
</page>

<page id="choice-wheel">
(Section: Community & Rewards)

## Choice Wheel

Browser source
A wheel of your own choices, like "Do 10 squats" or "Chat picks the next game". It spins for a chat command, a gift, a new follower, a share, or the Spin now button, and can run an Action when a choice wins.

- Open the Spin Wheel: page and choose the Choice wheel: tab (it also has its own entry in the sidebar).

- Type your choices, one per row, or use Paste a list: to fill the wheel from a list with one choice per line. You can have 2 to 24. Give a choice a bigger Chance: number to make it come up more often (3 comes up three times as often as 1), and pick a slice colour if you like.

- To make a choice do something when it wins, pick an Action in When it wins, run: . Make the Action first on the Actions & Events page: it can play a sound or a video, show an alert, press a key, switch an OBS scene or send a web request. The Action only runs while Actions & Events is switched on.

- Under What makes it spin: , choose what spins it: a chat command (default !choose, moderators only unless you change it), a gift (any gift, or one gift, with a minimum coin value), a new follower, or a share. When several arrive at once they wait in line and spin one after another.

- Set the Spin time: (3 to 15 seconds), the palette, and the fonts: one for the choices on the slices: and one for the winner: , picked from the fonts on your computer. The picture of the person who spun it shows in the middle of the wheel. Long choices are split over two or three lines to fit on their slice.

- The words on each slice are dark or white, whichever reads best on that slice's colour. To pick your own, use the small colour box between a choice's name and its Chance number. Turn off Pick text colours automatically: to make every choice white, and use Reset all text colours: to go back.

- Copy the Choice wheel's Overlay URL into OBS or TikTok LIVE Studio. It is a different link from the Points wheel, so you can use either one or both.

Spin now is a real spin: It also shows on your stream and runs the winning choice's Action. Use it to test, but remember anything the Action does (a key press, a video) really happens.
</page>

<page id="actions">
(Section: Community & Rewards)

## Actions & Events

Windows for key presses
When something happens, Mint does what you line up. A chat command: like !clip, a gift: , a new follower: , a share: , a fan club level-up: , or on Twitch a cheer: , subscription: , gift subs: or raid: can press a keyboard shortcut (for example Ctrl+H to save a clip in TikTok LIVE Studio), show a text alert, play a video or a sound, change your voice, read a message aloud, switch your OBS scene or send a web request. You choose who may use a chat command and how often anything can run.

### Set one up

- Open Actions & Events: under Community & Rewards and press Add an action: . The first one comes ready as !clip: , pressing Ctrl+H: , with a text alert, for moderators only. Change anything you like, and add more the same way.

- Under When this happens: , choose a chat command, a gift, a new follower, a share or a fan club level-up. For a chat command, type the word and choose Who can use it: (everyone, moderators, followers, subscribers, your fan club, or named viewers). For a gift, pick the gift (or leave it empty for any) and a minimum number of coins. For a fan club level-up, leave the level at 0 for every level-up or type the level to wait for (messages can use {name}, {level} and {oldlevel}). For a Twitch event, set the minimum (bits, months subscribed, subs gifted or raiders); your Twitch channel needs to be connected.

- Under What it does: , press Add a step: and add as many as you like. They start together, unless you give a step a Delay: : a step with a delay of 5 starts 5 seconds after the trigger, so an alert can come first and a scene change after it.

- Under How often: , set how long anyone has to wait, and how long the same viewer has to wait, before it can run again.

- Press Test: to try it, then switch the big On: switch at the top. Nothing runs while it is Off.

Each action sits on one line until you open it with the arrow on its left, so a long list stays easy to scan. With four or more actions, a search box and a filter (only On, only Off, TikTok triggers, Twitch triggers) appear above the list, along with Open all: and Close all: . A line shows the action's trigger and a short list of what it does.

You stay in control: Chat can never type anything of its own. Only the steps you set up can run, shortcuts that close or switch windows (such as Alt+F4 or Alt+Tab) are not allowed, and a chat command has to be the first word of the message: !clip and !clip nice one both work, please !clip does not.

### The steps you can add

#### Press keys
Click the box and press the shortcut. Works for shortcuts that work anywhere on your PC, like TikTok LIVE Studio's. Windows only.

#### Show a text alert
Type the message. Use {name} for the viewer, and {gift}, {coins} and {count} for gifts. Change its look on the Text Alerts page.

#### Play a video or picture, change my voice
Pick an item from the Video Board or Voicemod page. Only items whose trigger is set to Run by an Action: are listed, so they never also play from their own trigger.

#### Play a sound
Pick any sound from your Soundboard. It plays in the Mint Overlays window.

#### Read a message aloud
Reads your message with your text-to-speech voice. {text} is whatever the viewer typed after the command.

#### Switch the OBS scene
Pick a scene, and optionally how many seconds before it goes back. Needs the OBS connection below.

#### Send a web request
Sends a message to a web address when the action runs, so other tools and services can react. It sends a small standard message, or the text you write. A request that takes longer than 5 seconds is cancelled.

### Connecting OBS (optional)

Only needed for the Switch the OBS scene: step. In OBS, open Tools > WebSocket Server Settings: and turn the server on. Then in the OBS connection card, enter the same port and password and press Save and connect: . The card shows Connected when it works, and the scene list fills in. The password stays on your computer and is never shown again.

### Good to know

#### Recent activity
Every trigger shows up at the bottom with what Mint did, or why it did not run (not someone you allowed, cooling down, switched off).

#### Your other tools still work
An action runs in addition to your gift sounds, gift videos and alerts, so it does not replace them. Give each thing one job to avoid doubles.

#### Followers and subscribers
Moderators, followers and subscribers are what TikTok tells Mint about each viewer. The activity list tells you why someone was or was not allowed.

#### Mint must be running
Actions only run while Mint Overlays is open and connected to your live.
</page>

<page id="top-gift">
(Section: Community & Rewards)

## Top Gift & Streak

Browser source
Two cards for your stream: the biggest single gift of your live and the longest gift streak, each with who sent it. Each card is just the gift picture with the coin amount (or the streak count, like x7) on its bottom-right corner, then the sender's picture and name, with no box behind it. When someone beats a record, the card pops with a glow and a "New record!" tag.

- Copy the Overlay URL into TikTok LIVE Studio or OBS as a browser source, or place Top Gift & Streak: in an Overlay Studio scene.

- Go live. The cards fill in by themselves as gifts arrive. This live: on the page shows your current records.

- Open Make it yours: to change the titles, font, colors and size, show only one of the two cards, put them side by side or stacked, and turn on Show a panel behind it: if you want a box behind the cards (it is off by default).

- Top gift: is the most expensive single gift. By default a gift counts for what one of it costs, so 99 Roses do not beat a Galaxy. Switch on Count a combo as one big gift: if you want a combo to count for everything in it together.

- Top streak: is the longest run of the same gift from the same person without a break. It counts once the streak ends, and you choose how many in a row make a streak (two or more).

- A tie keeps the first person.: Someone has to beat a record, not match it.

- New live, clean slate.: The records start over when you go live again. A quick reconnect (a dropped connection) keeps them, and they are saved, so closing Mint in the middle of a live does not lose them. Reset records: clears them by hand, and you can turn off the automatic fresh start.

- TikTok gifts only.: Twitch bits are not counted.

- Try it.: Send a test record to my overlay: shows a made-up record for a few seconds so you can see the look and the celebration. It does not touch your real records.
</page>

<page id="goal-bars">
(Section: Community & Rewards)

## Goal Bars

Browser source
Follower, Gift, and Like goal bars you can style to match your brand — each is its own tab with its own Overlay URL.

- Pick a tab: Followers, Gift value, or Likes.

- Set the bar label and target.

- Style it: bar look (several energy/glass/neon-style presets), animation, font, color, height, and corner radius, plus whether to show the glass container and the "keep it going" footer.

- Copy that tab's Overlay URL into OBS or TikTok LIVE Studio — each goal has its own URL, so you can place them independently.

How the current value is tracked:
Gift Goal and Like Goal track automatically from your live TikTok activity and reset back to zero every time you connect — there's nothing to type in. Follower Goal is different: TikTok doesn't expose a live follower-count API, so you set a starting follower count manually, and the app rolls that number forward automatically at the end of each session so next time's goal starts from where you left off.
</page>

<page id="leaderboards">
(Section: Community & Rewards)

## Top Likes & Top Gifters

Browser source
A live scoreboard celebrating your most active viewers — likes on one widget, gift value on the other.

- Choose how many spots to show, whether to show a title, and pick fonts and colors for names and values.

- Pick an avatar style for the top spot versus the rest, and a like icon if you're using the Top Likes variant.

- Copy the Overlay URL into OBS or TikTok LIVE Studio.

Both widgets update from real live activity during your stream — actual viewers, actual totals.
</page>

<page id="word-garden">
(Section: Games & Activities)

## Word Garden

Browser source
A word game your chat plays together. Each round shows a prompt, like "Cozy caf ", with six hidden connections. Every viewer who types a matching word uncovers a tile and scores points, and the top bloomers climb the board with their profile pictures.

### Set it up

- Open Word Garden: under Games & Activities and copy the Overlay link: .

- In TikTok LIVE Studio or OBS add a browser source with that link. It is built for a tall 9:16 scene and scales to fill whatever size you give it. Leave the upper left of your scene clear for your camera or avatar; the leaderboard sits to the right of it.

- Connect your live on the Connections page as usual, then click Open game window: and press Let's play: .

Keep the game window open: The game runs in that window and the overlay shows it, so the overlay stays on "waiting" if the window is closed. You can minimize it.

### How a round works

#### Chat is the game
Everything your viewers type is a guess. A word counts if it matches one of the six hidden connections (common spellings and close synonyms are included). Wrong words and repeats stay quiet, so normal chat never interrupts the game. Names and comments are filtered like your other overlays.

#### Points
100 points for a find, up to 50 more for speed, and a combo bonus when the same viewer finds words back to back. Scores last for the session.

#### Hint and next garden
Reveal a letter if everyone is stuck. When a round ends the answers are shown; press Next garden: , or choose in Settings to start the next round by itself after 10 seconds. Round length can be 60, 90 or 120 seconds, or choose Your own time: and type any time from 0:15 to 15:00, like 2:30.

#### Made for TikTok phones
TikTok's phone screen is taller than a normal stream, so it crops the sides and covers the top and bottom with its own header and comments. Word Garden's layout keeps the round, timer, keyword, Top Bloomers and answer cards together in the part that stays visible. Eight-answer words use three columns.

#### My words (optional)
You never need to add words, because the 1,000 built-in ones are plenty. If you want your own, turn on My words: in the game window's Settings. Then My words: lets you add your own keywords, like "Dentist". Choose 6 or 8 answers: , then type one answer per line. Put other words that should count after a comma (teeth, tooth); plurals are counted for you. With eight answers the board grows to eight cards. Your words are saved with Mint Overlays, so they are there next time you open the game. The ▶ button plays a word right now, ✎ edits it and ✕ deletes it. In Settings, Words to play: can mix yours into the 1,000 built-in words or play only yours.

#### Your own background
In the game window's Settings, set Background: to None. The café scenery disappears and only the game pieces remain (logo, board, prompt and answer cards) on a transparent page, so you can put your own logo or a moving background behind it in TikTok LIVE Studio. It works best on darker scenes.

#### Sound effects
A soft chime plays for each word found (it climbs with a combo) and a short cheer plays for a win. They play in the game window by default, which is where your stream already picks up this computer's sound. In Settings you can switch them off or have the overlay play them instead; the note button in the game window mutes them quickly.

#### Winner screen
If your chat finds all six, the top scorer of that round gets a "A fully bloomed garden!" celebration with their name, points and profile picture. After about five seconds the celebration shrinks to a slim winner bar, so everyone can read the answers, including the ones nobody found, before you press Next garden.

There are 1,000 prompts, shuffled so none repeats until all have been played. Try sample chat: in the game window lets you practise without going live. Copy overlay link: in the game window copies the same link as the page.
</page>

<page id="live-party">
(Section: Games & Activities)

## Live Party Beta

Browser source
A 3D dance club where every viewer who joins, comments, likes or sends a gift becomes a dancer with their own profile picture and name above their head. You run it from a control room window while the stage shows on your stream.

Beta — use at your own risk: Live Party is in beta and may have bugs or change. TikTok's rules limit asking viewers for gifts and offering rewards in return for gifting, and hosts are responsible for the tools they use on their LIVE. Putting your biggest gifters on a podium can count as rewarding gifts, and a show that keeps running while you are away can look like automated gift incentives. Be on screen and taking part while you are live, do not tell viewers to send gifts to get on the podium or to trigger effects, and read TikTok's current guidelines yourself. Mint Overlays is not affiliated with TikTok and cannot promise that any use follows its rules. You tick an "I have read this" box on the Live Party page before the stage link and control room unlock.

### Setting it up

- Open Live Party: under Games & Activities, read the notice, and tick the box.

- Copy the Stage link: and add it to TikTok LIVE Studio or OBS as a browser source, sized to fill the scene. It shows the club only, with no controls, and keeps running whether or not the control room is open.

- Connect your live on the Connections page as usual. Viewers, comments, gifts, likes and follows come through that connection, and names and comments are filtered like your other overlays.

- Click Open control room: to run the room. You can close it at any time; the stage keeps going.

Live Party has no music of its own. Play your own music as you normally do, and use Dance speed: in the control room to match it.

### In the control room

The control room fits on one screen with no long scrolling. The stage is on the left, and under it are the buttons you use during a live — Spotlight, Wings, Headliner and Confetti: — with the Featured viewer: picker. On the right are six tabs with pictures: Room, Crowd, Look, Camera, Energy: and Live: . Everything is a picture tile, a button or a switch. Press the ?: at the top of the panel to show or hide the short explanations. The connection status is the small chip at the top right.

#### Party room
Neon Grove Club, Halloween Dance Party, Christmas Dance Party, Latin Dance Club, Country Dance Hall, Hip-Hop Nightclub, Electric Dance Arena, Velvet R&B Lounge, Rock & Roll Stage, or the Mad Scientist Laboratory (with creature costumes). Under Edit the wall sign: you can change the wall title and subtitle, and pick the wall lettering: : Match the room gives every room its own font, or choose one of Bebas, Bungee, Monoton, Orbitron, Righteous, Great Vibes, Creepster, Rye or Cinzel, or Plain for the old lettering. It changes on the stage straight away.

#### Costumes and look
Choose the new illustrated costumes or the classic articulated ones, mixed, male or female outfits, the new detailed rooms or the classic stage, and the new or classic celebration effects.

#### Podium · top three
Choose who stands on the podium: most gifts, most likes, most Points Economy points, or I choose — pick a viewer under Featured viewer and move them to 1st, 2nd or 3rd.

#### Stage shape
Automatic (matches the window), Horizontal, or Vertical. The crowd and camera are arranged to fit any size or shape you give the browser source.

#### Who stays on the dance floor
Everyone who joined (up to 60), only the most recent viewers (20–60), or only viewers active in the last 5 minutes to an hour. The podium follows this choice.

#### Refresh dance floor
Clears every dancer, the podium and the energy meter. Viewers who are still here come back the moment they comment, like, gift or join. Your settings stay as they are.

#### Featured viewer
Pick a viewer for a camera close-up, a little magic, to take the main stage, or to light up the room.

#### Camera and speed
Camera tour or a fixed wide view, dance speed, and a room energy meter that fills as viewers take part.

The control room also has practice tools — add a demo viewer, send a demo comment, or simulate a busy room — so you can try everything without going live. Practice events are simulated, and your room is saved on this computer.

### Gift effects are off by default

Gifts always count towards viewer totals and the podium, but they do not set off effects or fill the energy meter unless you tick Enable gift-triggered effects and gift energy: in the control room. When it is on, gifts trigger effects by size: a spotlight for small gifts, confetti, feather wings, and a flying headliner for large ones. Turn it on only if you are comfortable with that — see the beta notice above.

The stage in TikTok LIVE Studio does not follow the control room?: Refresh the Live Party link in TikTok LIVE Studio (or remove it and add it again). A stage that was open before an update can keep running the old version; from this version on it reloads itself when the app is updated.

Names: Viewer names show exactly as they wrote them. A viewer who goes quiet can step off the dance floor depending on your crowd setting, and pops back when they do something.
</page>

<page id="countdown-timer">
(Section: Games & Activities)

## Countdown Timer

Browser source
A clock on your stream that viewers keep alive. Gifts, taps, comments, shares, subscriptions and follows each add time, so the more they give, the longer you stay on.

- Copy the Overlay URL into TikTok LIVE Studio or OBS as a browser source and place it where you want the clock.

- Under What adds time: , say how many seconds each thing is worth. Small numbers work: 0.2 seconds per gift coin means 100 coins add 20 seconds. TikTok's own timer only allows whole seconds per coin, this one does not.

- Type how long the clock starts at: in hours, minutes and seconds (for example 1 hour 45 minutes, or 90 minutes), up to 24 hours. The quick buttons fill in 30 minutes, 1 hour, 1 hour 30 or 2 hours. You can also set a limit it can never go above.

- Press Start: when you go live. Or switch on Start the clock when I connect to my live: and it starts by itself.

- Pause, Reset and the +/- buttons.: Pause holds the time (gifts still add while it is paused). Reset asks you to click twice while the clock is running. The buttons add or take away time by hand.

- Pop-ups.: Each time something adds time, a small "+20s" appears under the clock with the person's profile picture, their name and what they did, such as "sent Rose x3" or "commented". A flood of taps adds up into one growing pop-up with no name or picture. You can turn the pop-ups, names and pictures off. If TikTok does not send a picture, the person's first letter shows instead.

- Panel on or off.: Show a panel behind the clock: puts a dark box behind the clock and pop-ups. Turn it off and only the numbers and pop-ups sit on your scene, with a soft shadow so they stay readable.

- Low time.: The clock turns a warning color when it is nearly up. At zero it says Time's up! and stays there until you press Start again, so late gifts do not bring it back.

- Your own comments never add time.: Taps, shares and follows count from TikTok. Gifts count from TikTok and Twitch. Subscriptions count from TikTok and Twitch (a gifted sub counts once per sub).

- It is safe to restart Mint.: The clock is saved, so closing or losing the app in the middle of a live does not reset it.

It is an on-screen clock:
It does not keep your TikTok live open by itself. It shows viewers how long you have promised to stay on, and you end the live yourself when it reaches zero. Mint must be running and connected to your live for time to be added.
</page>

<page id="overlay-studio">
(Section: Compositing)

## Overlay Studio

Browser source
Build a full scene out of multiple widgets — position and layer them together — and get one single browser-source URL for the whole thing, instead of adding each widget separately in OBS.

### Building a scene

- Open Overlay Studio: in the sidebar and press Open editor: on a scene. The editor opens in its own window, so you have the whole screen to work in.

- Open the Add: tab on the left and click any widget to add it as a layer: Text Alerts, Gift Jar, Top Likes, goal bars, videos and more.

- Drag: a layer to move it. Drag a corner: to resize it: everything inside grows or shrinks with the box and keeps its shape. Hold Shift while dragging to change the shape of the box without changing the size of what is inside (you get more or less room around it). Guide lines help you line things up with the canvas and with other layers.

- Hold Alt and drag any edge or corner to trim: that side off. The picture itself does not shrink or move, a part of it is just hidden. The panel on the right has Top, Bottom, Left and Right trim boxes and a Reset button.

- Use the Layers: list to drag layers into a new order (the top of the list is the front), hide or show a layer, or lock it. A locked: layer cannot be moved by accident and clicks go straight through it, so you can work on what is behind it. Right-click: a layer for Lock or Unlock, Hide, Duplicate, Bring to front and more.

- In the Add: tab, Add image: puts your own picture in as a layer, and Background: fills the whole canvas with it. If the picture has a green or pink screen, select it and turn on Make a color see-through: : pick the color (the dropper picks it from anywhere on your screen) and adjust How close and Edge softness.

- Hover over any button to see what it does. Ctrl+Z undoes, the arrow keys nudge the selected layer, and L locks it.

- Press Copy scene link: (or Copy link: on the scene's card) and paste it once into OBS or TikTok LIVE Studio. Every visible layer shows in its saved place from that one link.

Edit while you are live: Leave the editor open during your stream. Anything you move, resize, trim, add or hide shows on stream right away, so you can change your scene in the middle of a live without touching TikTok LIVE Studio.

### Vertical and horizontal versions

Every scene has a Vertical: (TikTok, 1080×1920) and a Horizontal: (OBS, 1920×1080) version, each with its own link. Switch between them with the Vertical / Horizontal buttons at the top of the editor, or open either one from the scene list. Each version keeps its own layers.

### Multiple scenes

Press + New scene: to start a separate layout (an intermission screen, a "starting soon" screen, and so on). Each scene has its own layers and its own link.

The canvas is a placement guide only: What you see in the editor is for positioning — your actual copied browser source stays fully transparent behind your widgets, so it composites correctly no matter what's behind it in OBS.
</page>

<page id="license">
(Section: Reference)

## License activation

Mint Overlays needs a license key. Enter it once, on the key screen or under Account: in the sidebar, and it stays saved on this computer: you are not asked again each time you open the app.

- Paste your license key into the field (format: XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX).

- Click Activate: . Mint checks it with Gumroad and opens up on this computer.

### Where do I find my license key?

- In your email.: Gumroad sent you a receipt when you signed up, and your license key is in it. Search your inbox for "Gumroad" or "Mint Overlays", and check spam.

- On Gumroad.: Sign in to Gumroad with the email you signed up with, open your Library: , and click Mint Overlays: . Your key is on that page. The key screen in the app has a button that opens your Gumroad library.

- Copy the whole key, with no spaces before or after, and paste it in.

- Monthly and yearly members: stay active as long as the membership does. If it ends or cannot be confirmed for a week, the app pauses and asks for a key again. Your boards, sounds and settings are kept.

- You are never cut off in the middle of a live.: If access is due to pause while you are connected, it waits until the live ends.

- Founders Edition: keys stay active permanently and are never asked for again.

- Can't find your key? Press Report Issue: at the bottom of the app and we'll help.
</page>

<page id="performance">
(Section: Reference)

## Performance: use your graphics card

By default Mint Overlays draws its own windows — the Live Party control room is the biggest one — using your processor. That works on every PC, but it can use a lot of it while you are live.

- Open Account: and find the Performance: card.

- Tick Use my graphics card to draw Mint Overlays: .

- Close and reopen Mint Overlays. The card tells you whether it is using your graphics card or your processor right now.

Safe to try: If Mint Overlays ever cannot start with the graphics card on — it crashes, or the window stays black and you close it — it switches itself back to the processor on the next start and tells you so on this card. This only changes the Mint Overlays app. Your overlays in TikTok LIVE Studio or OBS are drawn by those programs.

Whichever you choose, the Live Party control room is kept light on purpose: it slows down when you are not looking at it and pauses when minimized. If your PC is struggling during a live, closing the control room is the quickest fix — the stage in TikTok LIVE Studio keeps running without it.
</page>

<page id="footer-tools">
(Section: Reference)

## Footer tools & support

A few things live in the footer at the bottom of every page (except the transparent overlay pages themselves):

- Report Issue: — opens a form to report something broken or leave feedback. It automatically includes your app version and a recent slice of the diagnostic log, and you can optionally leave your email for a reply.

- Privacy Policy: / Terms of Service: — open in your browser.

- How-To Guide: — this page.

- Update indicator: — shows your current version. When a newer version is available, an Update available: button shows in the top-left corner of the window; click it to download, then Restart to update: . Mint Overlays looks for updates when it starts and again every few hours while it stays open. If the button never shows up, quit Mint Overlays completely (including the tray icon), open it again and wait about 15 seconds; if it still does not show, download the newest installer from the Mint Overlays download page and run it over the old version (your settings are kept).

- Closing and minimizing: — closing the window asks "Quit Mint Overlays?" first, and the minus button minimizes to your taskbar, where you can pin the app. Mint Overlays does not use the system tray.
</page>

<page id="troubleshooting">
(Section: Reference)

## Tips & troubleshooting

Symptom | Try this |

A widget looks blank in OBS | Double-check you pasted the full Overlay URL, and that the browser source's width/height roughly matches your canvas. |

Nothing is reacting live | Confirm the platform is connected on the Connections page and that you're actually live on that platform — most widgets are inert until a real session starts. |

A hotkey doesn't fire | Make sure no other trigger with the same key combination is already assigned, and that Mint Overlays is running (hotkeys work in the background, but the app still needs to be open). |

A widget shows sample/demo data | That's expected in the editor before you're live, or when you click a "Preview" / "Test" button — it's just a placeholder so you can style things offline. |

A video's sound is missing or plays twice | Check Where video sound plays. With Mint Overlays app selected, the app plays the sound and the browser source should be set to sound off in TikTok LIVE Studio or OBS — otherwise you hear it twice. With The browser source, some programs stay silent until the source is clicked. |

A video shows only its first frame | Mint Overlays now restarts a video that gets stuck on its first frame. If it still happens, send a Report Issue right after — it includes your recent log, which shows what happened. |

Battle Board stays empty | It stays empty until a battle starts, and it needs TikTok connected with your own username. If it stays empty in a battle you were invited to, send in your battle-capture.jsonl with Report Issue. |

Voicemod triggers do nothing | The Voicemod app must be running and connected on the Voicemod page, and its voice changer must be switched on inside Voicemod. |

Goal Bar didn't carry over follower count | Only Follower Goal keeps a manual starting count; Gift and Like goals intentionally reset to zero on every new connection. |
</page>
