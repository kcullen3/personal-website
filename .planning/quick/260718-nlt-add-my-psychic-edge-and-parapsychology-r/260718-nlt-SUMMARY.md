---
quick_id: 260718-nlt
status: complete
---

# Summary: Add Research navbar items

Added "My Psychic Edge" and "Parapsychology Research" as new dropdown items under the Research navbar, matching the existing pattern (Gravitational Waves, Coupkoo Review).

## Changes

- `src/components/Research/MyPsychicEdge/MyPsychicEdge.js` — new placeholder page (matches `CoupkooReview.js` shape)
- `src/components/Research/ParapsychologyResearch/ParapsychologyResearch.js` — new placeholder page
- `src/App.js` — imports, routes (`/research/mypsychicedge`, `/research/parapsychologyresearch`), and `PAGE_TITLES` entries
- `src/components/Navbar.js` — two new `NavDropdown.Item` entries under Research dropdown

## Verification

- `npm run build` compiles successfully (pre-existing unrelated lint warning in `BackScratchCard.js` only).
- Research dropdown now has 4 items: Gravitational Waves, Coupkoo Review, My Psychic Edge, Parapsychology Research.
