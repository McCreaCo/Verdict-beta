# VERDICT — Beta Site

A categorized hub linking 15 head-to-head bracket tournaments. Pure static HTML/CSS/JS — no build step, no dependencies, no backend. Drop it on any static host and it works.

## What's in here

- `index.html` — the hub (front door). Categorized into 5 shelves. **This is the entry point.**
- 15 `*-bracket.html` files — one self-contained tournament each. Each links back to the hub via the VERDICT wordmark.

## The 15 brackets

**Sports** — NFL Greatest Players, Greatest Sports Moments, Greatest Pro Wrestlers
**Screen** — Greatest Movie Villains, Greatest Fictional Universes, Greatest 90s Sitcoms, Characters Who Rewired You, Greatest OH HELL YES Moments
**Music** — Greatest 90s Songs
**Kids & Play** — Greatest Video Game Characters, Greatest Kids Movies, 80s Kids Character Draft, Who's On Your Team
**History & Big Questions** — What If? Hinges in History, They Almost Didn't Make It

## Deploy: GitHub → Vercel (~10 min)

1. Create a free GitHub account if you don't have one.
2. Create a new repository (e.g. `verdict-beta`). Make it public.
3. Upload every file in this folder to the repo root (drag-and-drop in GitHub's web uploader works — `index.html` must be at the top level, not in a subfolder).
4. Go to vercel.com, sign in with GitHub.
5. "Add New… → Project" → import the `verdict-beta` repo → Deploy. No settings to change; it's static.
6. Vercel gives you a live URL like `verdict-beta.vercel.app`. That URL opens the hub. Every bracket is reachable from it.

To update later: push a changed file to the repo and Vercel redeploys automatically.

## Adding a new bracket later

1. Build the bracket as a standalone HTML file (use any existing one as the engine template).
2. Drop it in the repo.
3. Open `index.html`, find the right shelf in the `SHELVES` array, add one line:
   ```js
   { file:"your-new-bracket.html", emoji:"🎯", title:"Your Title", q:"Your core question?", accent:"#hexcolor", pill:"32 · Tag" },
   ```
4. Push. Done. The hub regenerates itself from that array — no other edits.

## Known limitations (fine for beta)

- **Vote percentages are faked** (deterministic placeholder). Testers won't see anything that says so, but a sharp fan may notice an odd number on an obvious matchup. Real crowd data comes when the backend is wired.
- **No data is captured.** This build is purely for testing the loop: do people play through, and do they forward it? Behavioral logging is a later step.
- State resets on tab close (no accounts, no persistence) — intentional for now.
