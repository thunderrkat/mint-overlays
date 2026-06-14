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
    '--gfonts':'Quicksand:wght@500;600;700&family=Playfair+Display:wght@700',
    '--scanlines':'none','--corner-text':'',
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
    '--gfonts':'Nunito:wght@500;600;700;800',
    '--scanlines':'none','--corner-text':'',
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
    '--gfonts':'Cormorant+Garamond:wght@500;600;700',
    '--scanlines':'none','--corner-text':'',
  },
  warzone: {
    '--bg':'rgba(6,8,5,0.96)','--border':'#3d4a1e','--border-glow':'rgba(61,74,30,0.8)',
    '--a1':'#4a5c22','--a2':'#FF6B00','--a3':'#1a2010','--text':'#c8ccb8',
    '--sub':'rgba(74,92,34,0.7)','--elec':'#FF6B00','--elec-glow':'rgba(255,107,0,0.7)',
    '--b1':'#0d1208','--b2':'#1a2010','--b3':'#3d4a1e','--b4':'#FF6B00','--b5':'#ffcc00','--b6':'#FF6B00',
    '--glow-tl':'rgba(255,107,0,0.08)','--glow-br':'rgba(61,74,30,0.12)',
    '--r1':'#FF6B00','--r2':'#4a5c22','--r3':'#2C3A1A',
    '--live':'#FF6B00','--live-glow':'rgba(255,107,0,0.9)',
    '--font':'"Barlow Condensed",sans-serif','--head-font':'"Barlow Condensed",sans-serif',
    '--gfonts':'Barlow+Condensed:wght@500;600;700;800',
    '--scanlines':'block','--corner-text':'OPERATOR',
  },
  storm: {
    '--bg':'rgba(5,8,20,0.94)','--border':'#1B90DD','--border-glow':'rgba(27,144,221,0.7)',
    '--a1':'#1B90DD','--a2':'#8A2BE2','--a3':'#FFD700','--text':'#e8f4ff',
    '--sub':'rgba(27,144,221,0.6)','--elec':'#FFD700','--elec-glow':'rgba(255,215,0,0.65)',
    '--b1':'#050830','--b2':'#1B3070','--b3':'#1B90DD','--b4':'#5FCEEA','--b5':'#FFD700','--b6':'#8A2BE2',
    '--glow-tl':'rgba(27,144,221,0.15)','--glow-br':'rgba(138,43,226,0.12)',
    '--r1':'#FFD700','--r2':'#5FCEEA','--r3':'#8A2BE2',
    '--live':'#1B90DD','--live-glow':'rgba(27,144,221,0.9)',
    '--font':'"Nunito",sans-serif','--head-font':'"Nunito",sans-serif',
    '--gfonts':'Nunito:wght@600;700;800;900',
    '--scanlines':'none','--corner-text':'VICTORY ROYALE',
  },
  raiders: {
    '--bg':'rgba(8,6,10,0.96)','--border':'#9B2257','--border-glow':'rgba(155,34,87,0.7)',
    '--a1':'#eae0cd','--a2':'#FF3366','--a3':'#00FFCC','--text':'#eae0cd',
    '--sub':'rgba(234,224,205,0.45)','--elec':'#00FFCC','--elec-glow':'rgba(0,255,204,0.6)',
    '--b1':'#1a0a14','--b2':'#9B2257','--b3':'#FF3366','--b4':'#eae0cd','--b5':'#00FFCC','--b6':'#FF6B00',
    '--glow-tl':'rgba(0,255,204,0.12)','--glow-br':'rgba(155,34,87,0.10)',
    '--r1':'#eae0cd','--r2':'#FF3366','--r3':'#9B2257',
    '--live':'#FF3366','--live-glow':'rgba(255,51,102,0.9)',
    '--font':'"Share Tech Mono",monospace','--head-font':'"Share Tech Mono",monospace',
    '--gfonts':'Share+Tech+Mono',
    '--scanlines':'block','--corner-text':'TOPSIDE',
  },
};

// Special per-theme panel effects
const THEME_EFFECTS = {
  warzone: {
    borderRadius: '4px',
    extraCSS: `
      .panel, .join-panel, .meter-panel {
        border-left: 3px solid #FF6B00 !important;
        border-radius: 4px !important;
      }
      .panel::after {
        content: 'OPERATOR';
        position: absolute;
        top: 6px; right: 10px;
        font-size: 9px;
        letter-spacing: 0.2em;
        color: rgba(74,92,34,0.5);
        font-weight: 700;
      }
      /* Scanline overlay */
      .panel::before, .join-panel::before, .meter-panel::before {
        content: '';
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0, rgba(0,0,0,0.08) 1px, transparent 1px, transparent 3px);
        pointer-events: none;
        z-index: 100;
        border-radius: inherit;
      }
    `,
  },
  storm: {
    borderRadius: '16px',
    extraCSS: `
      .panel, .join-panel, .meter-panel {
        border-width: 2px !important;
        border-radius: 16px !important;
      }
      .title, .meter-brand, .join-label {
        text-transform: uppercase;
        letter-spacing: 0.15em;
      }
    `,
  },
  raiders: {
    borderRadius: '2px',
    extraCSS: `
      .panel, .join-panel, .meter-panel {
        border-radius: 2px !important;
        border-width: 1px !important;
      }
      .panel::after {
        content: 'TOPSIDE';
        position: absolute;
        bottom: 8px; right: 10px;
        font-size: 9px;
        letter-spacing: 0.2em;
        color: rgba(234,224,205,0.3);
        font-weight: 400;
      }
      /* Scanlines */
      .panel::before, .join-panel::before, .meter-panel::before {
        content: '';
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(0deg, rgba(0,0,0,0.06) 0, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 2px);
        pointer-events: none;
        z-index: 100;
      }
      /* Rainbow stripe accent */
      .divider {
        background: linear-gradient(90deg, #FF3366, #FF6B00, #FFD700, #00FFCC, #1B90DD, #8A2BE2) !important;
        opacity: 0.8 !important;
        height: 2px !important;
      }
    `,
  },
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
  document.body.style.fontFamily = vars['--font'];

  // Apply special theme effects
  const existing_style = document.getElementById('theme-effects');
  if (existing_style) existing_style.remove();
  const effects = THEME_EFFECTS[themeId];
  if (effects && effects.extraCSS) {
    const style = document.createElement('style');
    style.id = 'theme-effects';
    style.textContent = effects.extraCSS;
    document.head.appendChild(style);
  }
}
