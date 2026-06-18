# Mint Overlays

Custom stream overlay packs for creators. Hosted on Cloudflare Workers.

## Project Structure

```
mintoverlays/
├── wrangler.jsonc                        # Cloudflare config
├── package.json                          # Scripts & dependencies
├── README.md                             # This file
└── public/                              # All files served from here
    ├── index.html                        # mintoverlays.com homepage
    ├── 404.html                          # Custom 404
    └── jared-hoover3-x9q2/             # Jared's private pack
        ├── index.html                    # mintoverlays.com/jared-hoover3-x9q2
        ├── widget-header.html            # Stream header (1080×220)
        ├── widget-gift-goal.html         # Gift goal bar (400×100)
        ├── widget-top-gifters.html       # Top gifters board (360×320)
        ├── widget-alert.html             # Alert popup (520×130)
        ├── widget-camframe.html          # Cam frame (380×290)
        └── widget-ticker.html           # Event ticker (1080×52)
```

## URL Structure

| URL | What it serves |
|-----|---------------|
| `mintoverlays.com` | Public homepage |
| `mintoverlays.com/jared-hoover3-x9q2` | Jared's private hub |
| `mintoverlays.com/jared-hoover3-x9q2/widget-header.html` | Header widget |
| `mintoverlays.com/jared-hoover3-x9q2/widget-alert.html` | Alert popup widget |
| *(any unknown URL)* | Custom 404 page |

## First-Time Setup

```bash
# 1. Install dependencies
npm install

# 2. Login to Cloudflare
npx wrangler login

# 3. Test locally
npm run dev
# → mintoverlays.com/jared-hoover3-x9q2 at localhost:8787

# 4. Deploy to production
npm run deploy
```

## Connecting Your Domain (mintoverlays.com)

1. Point `mintoverlays.com` nameservers to Cloudflare (if not already done)
2. After first deploy, go to:  
   **Cloudflare Dashboard → Workers & Pages → mintoverlays → Settings → Domains & Routes**
3. Add `mintoverlays.com` as a custom domain
4. SSL is automatic — done in ~60 seconds

## Adding a New Client

1. Generate a token: use `name-xxxx` format (e.g. `thunderrkat-k3m9`)
2. Create folder: `public/thunderrkat-k3m9/`
3. Add their widgets + `index.html` hub inside it
4. Run `npm run deploy`
5. Send them their URL: `mintoverlays.com/thunderrkat-k3m9`

That's it. Each deploy takes ~10 seconds.
