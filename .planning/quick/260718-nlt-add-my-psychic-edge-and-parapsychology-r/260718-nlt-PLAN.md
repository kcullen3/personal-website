---
quick_id: 260718-nlt
description: Add "My Psychic Edge" and "Parapsychology Research" tabs to Research navbar
date: 2026-07-18
---

# Quick Task 260718-nlt: Add Research navbar items

## Task

Add two new dropdown items under the existing "Research" navbar dropdown:
- "My Psychic Edge" → `/research/mypsychicedge`
- "Parapsychology Research" → `/research/parapsychologyresearch`

Match the existing pattern used by "Gravitational Waves" and "Coupkoo Review":
- Placeholder page component (same shape as `CoupkooReview.js`)
- Route registered in `App.js`
- Page title entry in `PAGE_TITLES`
- `NavDropdown.Item` added in `Navbar.js`

## Tasks

1. Create `src/components/Research/MyPsychicEdge/MyPsychicEdge.js` and `src/components/Research/ParapsychologyResearch/ParapsychologyResearch.js` — placeholder pages matching `CoupkooReview.js` structure.
2. Wire both into `src/App.js` (import, route, PAGE_TITLES entry).
3. Add both as `NavDropdown.Item` entries in `src/components/Navbar.js` under the Research dropdown.

## Verify

- `npm run build` compiles without errors.
- Both new routes render placeholder pages.
- Navbar dropdown shows 4 items: Gravitational Waves, Coupkoo Review, My Psychic Edge, Parapsychology Research.
