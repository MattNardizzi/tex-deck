# Tex Deck

The investor deck for Tex by VortexBlack. Lives at **tex-deck.com**.

Nine slides. One screen at a time. No scroll.

## What's inside

- Same Source Serif 4 + Inter type system as texaegis.com
- Same `--tex-paper` / `--tex-ink` palette, same `--tex-glass-*` tokens
- The "Absolute." cover is the verbatim Hero SVG from the main site —
  font-size 186, letter-spacing -11, four-layer glass gradient with
  the same 7-second sweep
- The breathing Orb component is lifted directly from `components/Orb`
  — five layers, 4.2s breath cycle, quiet/asking/proof states
- Slide-by-slide: arrow keys / space / click / swipe

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Navigate the deck

- `→` `↓` `Space` `PageDown` — next
- `←` `↑` `PageUp` — back
- `Home` / `End` — first / last
- Click anywhere on the slide — next
- Swipe left/right on mobile

## Deploy to Vercel

1. Push this folder to a new GitHub repo
2. `vercel.com` → New Project → Import the repo
3. Framework preset: **Vite** (auto-detected). Leave everything default.
4. After first deploy, go to Project Settings → Domains → add `tex-deck.com`
5. Vercel gives you DNS records (an `A` and a `CNAME`) — paste those at
   wherever you bought the domain (Namecheap, GoDaddy, Cloudflare, etc.)
6. Wait ~5 minutes for DNS to propagate. Done.

Future pushes to `main` redeploy automatically.

## Edit a slide

Each slide is its own file under `src/slides/`. Open the one you want
to change — copy lives in the JSX, motion timing lives in the CSS.

The slide order is in `src/App.jsx` in the `SLIDES` array.
