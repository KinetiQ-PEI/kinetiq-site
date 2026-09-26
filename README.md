# KINETIQ

Microsite for **KINETIQ**, built as PEI (2026/2027) at the Universidade de Aveiro, for the mariaBike platform.

Built with Vite + React, no CSS framework (styles live in `src/index.css`, with variables driving light/dark mode). Uses `HashRouter`, so routes work on GitHub Pages with no extra config.

## Getting started

Needs Node 20+.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Where to edit things

Day-to-day work happens in two places:

- **`src/data/site.js`** — all the site's text: team, advisors, partners, goals, modules, milestones, and the Documentation page tables. Pages only read from here, they don't hold any text themselves.
- **`src/content/minutes/`** — one meeting minute per file. See below.

Fields in square brackets (`[NMEC]`, `[GITHUB LINK]`) in `site.js` are placeholders — swap them for the real value once you have it.

## Meeting minutes

Each minute is its own Markdown file, not a hand-written list:

1. Copy `src/content/minutes/_TEMPLATE.md` into a new file in the same folder (files starting with `_` are ignored).
2. Fill in the header:
   ```md
   ---
   number: 2
   date: 2026-10-06
   title: Weekly sync
   location: DETI
   time: 16:00
   ---
   ```
3. Write the minute in plain Markdown below (tables, task lists, etc. all work).
4. Commit and push. It shows up on the Minutes page on its own, newest first, with its own page (`#/minutes/02-...`).

## Calendar and roadmap

The Calendar page has two parts: a monthly grid with the course's official dates (MS1 to MS4, seminars, check point), and below it, the full project roadmap through to the defence, following the four OpenUP phases. Both data sets live in `src/data/site.js` (`nearTermEvents` and `roadmap`), not in the component.

## Deploying

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`. Before that works, enable it once in **Settings → Pages → Build and deployment → Source: GitHub Actions**.

`vite.config.js` uses `base: './'`, so the site works both at `https://<org>.github.io/` and `https://<org>.github.io/<repo>/` without changes. Once the repository exists, update this line with the real address:

> `https://<org>.github.io/<repo>/#/`
