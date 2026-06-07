# Tex — the open (Acts I–II)

A single self-contained `index.html`. No build step, no dependencies. Deploys
anywhere instantly and renders identically when you send the link.

## The sequence
**Act I — the fear (clinical white)**
1. `FEBRUARY 2026` — a documentary dateline. This is a true story.
2. The scene, typed slowly: *An AI agent deleted hundreds of emails while its owner watched. It stopped when someone cut the power.*
3. *So they sold you tools.* → the vendor wall floods in (Zenity, Noma, Pillar, Lasso, Palo Alto, Cisco, CrowdStrike…) and accelerates into noise.
4. The verdict over the noise: *It found the agent. It scored the risk. It waited for a human.* → *The human was asleep.*

**Act II — the turn (warm cream)**
5. Everything clears. The room warms. The longest silence in the piece.
6. **I am Tex.** — small, calm, breathing in on the variable font.
7. The headline: *I decide what your agents may do. You will not supervise me.*

Auto-plays on load. Click anywhere (or press Space) to replay.

## Deploy to texdeck.com on Vercel
1. `vercel.com/new` → drag this folder in → Deploy. (Or `npx vercel` then `npx vercel --prod`.)
2. Project → Settings → Domains → add `texdeck.com`.
Static site, no settings needed. `og.png` ships in the folder, so the link preview
resolves at `https://texdeck.com/og.png` once the domain is live.

## Tuning the pace
Open `index.html`, find the `C` config object near the top of the `<script>`.
Every value is in milliseconds. The one that matters most is `pause` — the silence
before the name. Make it longer than feels comfortable. `perChar` controls how
slowly the true story types.

## Sound
Off by default — the piece is complete in silence; the voice is the typography and
the timing. The faint `sound` toggle (top-right) opts in: when on, a single spoken
line ("I am Tex.") breaks the silence at the reveal, via the browser's built-in
speech. For a premium voice, replace `speakTex()` with a hosted neural-TTS clip.

## The wall
Renders the dashboard *archetype* — real vendor names (fact) over archetypal panels
(risk scores, agent counts, alert feeds). It deliberately does **not** paste
competitors' screenshots: legally clean, timeless, and on your stage, not theirs.

## Next (not in this file yet)
Act III — the proof (one real FORBID, slowly, a sealed hash) — and Act IV — the ask.
