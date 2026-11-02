# KinetiQ — Project Microsite

Microsite for **KinetiQ**, a fleet management system for individual vehicles and micromobility built on real-time telemetry. Developed as part of **PEI 2026/2027** at the Universidade de Aveiro, in partnership with the mariaBike platform.

**Live site →** https://kinetiq-pei.github.io/kinetiq-site/

**Repository →** https://github.com/KinetiQ-PEI/kinetiq-site

---

## Tech stack

- **Vite + React** — no CSS framework; all styles live in `src/index.css` with CSS variables driving light/dark mode
- **HashRouter** — routes work on GitHub Pages without any server config
- **GitHub Actions** — auto-deploys to GitHub Pages on every push to `main`

---

## Getting started

Requires **Node 20+**.

```bash
npm install
npm run dev      # → http://localhost:5173
```

---

## Where to edit content

Almost everything is data, not code. Day-to-day edits happen in these places:

| File | What it controls |
|---|---|
| `src/data/site.js` | Team, advisors, partners, goals, modules, milestones, roadmap, docs tables — all page text |
| `src/content/minutes/` | One Markdown file per meeting minute |
| `documents` / `documentGroups` in `src/data/site.js` | Documentation page: documents per milestone, group labels, dates and status |
| `src/content/msN/` | Milestone files (PDFs), one folder per milestone (`ms1/`, `ms2/`, …) |

Pages read from `site.js`; they hold no text themselves.

---

## Adding a meeting minute

1. Copy `src/content/minutes/_TEMPLATE.md` into a new file in the same folder (files starting with `_` are ignored by the loader).
2. Fill in the frontmatter:
   ```md
   ---
   number: 2
   date: 2026-10-06
   title: Weekly sync
   location: DETI
   time: 16:00
   ---
   ```
3. Write the body in plain Markdown below (tables, task lists, headings all work).
4. Commit and push — it appears on the Minutes page automatically, newest first.

---

## Adding a document

1. Put the file in `src/content/msN/` (e.g. `src/content/ms3/technical-risks.pdf`).
2. Add (or update) an entry in `documents` in `src/data/site.js`:
   ```js
   {
     id: "technical-risks",
     milestone: "MS3",
     title: "Technical Risks",
     description: "One-line summary shown on the card.",
     file: "ms3/technical-risks.pdf",           // relative to src/content
     downloadName: "KinetiQ_MS3_Technical_Risks.pdf",
     type: "PDF",
     size: "120 KB",
     pages: 4,
     status: "available",                      // "available" | "in-revision" | "upcoming"
     links: [{ label: "Canva", href: "https://…" }], // optional
   }
   ```
3. It shows up on the Documentation page under its milestone and is counted on the Milestones page. A milestone's presentation should use an `id` ending in `presentation` so it becomes the main button there. If `file` doesn't exist, the dev server logs a warning and the document is shown as unavailable.

---

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

**One-time setup:** go to **Settings → Pages → Build and deployment** and set the source to **GitHub Actions**.
