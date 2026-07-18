---
quick_id: 260718-nzu
status: complete
date: 2026-07-18
---

# Quick Task 260718-nzu: Build out Projects index page

## What was done

Rewrote `src/components/Projects/Projects.js`, replacing the "Content coming soon!" stub
with a real index page mirroring `src/components/Research/Research.js`'s pattern.

- `PROJECTS` const array with 3 entries: BackScratch, New Bedford Research & Robotics,
  Algorithmic Trading — each with title/subtitle/description linking to its existing
  detail route (`/projects/backscratch`, `/projects/robotics`, `/projects/algotrade`).
- Renders `<Particle />` background, `about-section` container, `project-heading` title,
  and a card grid using the existing `robotics-download-btn` class (no new CSS classes
  invented), consistent with `Research.js`.
- `src/App.js` and `src/components/Navbar.js` left untouched per plan constraint —
  `/projects` route still not linked from the nav dropdown (intentional).

## Build verification

`npm run build` compiled cleanly. One pre-existing unrelated ESLint warning in
`BackScratchCard.js` (`collageStyle` unused) — not introduced by this change.

## Deviations

None — plan executed exactly as written.

## Commit

`314969e` — feat(260718-nzu): build out Projects index page with real cards
