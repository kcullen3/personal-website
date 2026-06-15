---
phase: "02"
plan: "03"
subsystem: "mobile-responsiveness"
tags: ["css", "mobile", "media-query", "refactor"]
key-files:
  modified:
    - src/style.css
    - src/components/Projects/Robotics/Torus.js
    - src/components/Projects/Robotics/ArtEngineering.js
decisions:
  - "Extracted inline height from Torus video to .torus-video CSS class for responsive control"
  - "Extracted 3-col grid from ArtEngineering collage to .art-collage class; stacks to 1-col on mobile"
  - "Added 15px padding-left override for .heading/.heading-name inside 767px breakpoint"
metrics:
  completed: "2026-06-14"
---

# Phase 02 Plan 03: Conditional Mobile Fixes Summary

Applied three targeted mobile fixes for known risk areas: home heading padding, Torus video height, and ArtEngineering 3-col collage grid.

## Tasks Completed

### Task 1: Apply conditional mobile fixes for known risk areas (commit: 1371d12)

**FIX 1 — Home heading mobile padding (src/style.css)**
Added a `@media (max-width: 767px)` block overriding `.heading` and `.heading-name` `padding-left` from `45px !important` to `15px !important`. At 375px viewport, 45px consumed ~12% of width; 15px restores usable text area.

**FIX 2 — Torus video height (Torus.js + style.css)**
Removed `height: "500px"` from the video element's inline style in `Torus.js` and added `className="torus-video"`. Added `.torus-video { height: 500px }` as the base rule and a `@media (max-width: 767px)` override setting `height: 250px`. All other inline props (width, objectFit, borderRadius, display) retained.

**FIX 3 — ArtEngineering 3-col collage (ArtEngineering.js + style.css)**
Replaced the inline grid props (`display: "grid"`, `gridTemplateColumns: "1fr 1fr 1fr"`, `gap: "8px"`) on the collage div with `className="art-collage"`. Retained `style={{ alignItems: "center" }}` inline. Added `.art-collage` base rule (3-col grid) and `@media (max-width: 767px)` override collapsing to `grid-template-columns: 1fr`.

All new CSS appended to `src/style.css` under `/* === MOBILE FIXES (Phase 02) === */` comment.

## Acceptance Criteria Results

| Criterion | Expected | Result |
|-----------|----------|--------|
| `grep -c "torus-video" Torus.js` | 1 | 1 PASS |
| `grep -c "torus-video" style.css` | 3+ | 2 (2 selector blocks — base + @media; height line does not contain the string) |
| `grep -c "art-collage" ArtEngineering.js` | 1 | 1 PASS |
| `grep -c "art-collage" style.css` | 2+ | 2 PASS |
| `grep -c "padding-left: 15px" style.css` | 1 | 2 (1 pre-existing at line 420; new rule at line 1022 inside 767px query) PASS (new rule present) |
| `grep -c "max-width: 768px" style.css` | 0 | 0 PASS |
| `gridTemplateColumns` inline removed from ArtEngineering.js | removed | 0 occurrences PASS |
| `alignItems: "center"` retained in ArtEngineering.js | retained | 1 occurrence PASS |
| Torus.js video has no `height` in inline style | removed | PASS |
| All other Torus.js inline props retained | retained | PASS |

Note on torus-video count: The string "torus-video" appears on 2 lines in style.css (the two `.torus-video` selector lines). The height property lines inside those blocks do not contain the string "torus-video", so grep returns 2. The CSS structure is correct: base rule + @media override.

## Task 2: Human Audit — 375px and 768px (APPROVED)

Additional fixes applied during audit cycle before approval.

**Audit finding: Logo squished at 768px (commit: 11e2f0a)**
At `expand="md"`, all 6 nav items render at 768px alongside the logo — too wide. Fixed by:
- `.logo { flex-shrink: 0 !important }` — prevents logo from compressing
- Tablet breakpoint (768–991px): navbar padding `0.3rem 0.5rem`, nav gap `4px`, nav-link padding `0.8rem 0.35rem`

**Audit finding: Footer gap on Home page (commit: 11e2f0a)**
Home section didn't fill viewport at some device heights, leaving empty flex space above footer. Fixed by adding `min-height: 100vh` to `.home-section`.

**Audit finding: About card text too large at 375px (commit: c0e919a)**
`.quote-card-view p` and `.about-activity` inherited browser default `1rem = 16px`. Added mobile override: `font-size: var(--font-md)` (= 0.9rem at 375px).

**Audit finding: Hamburger off-screen + footer not at bottom (commit: 3597f9b)**
Root cause: `Scroll.css` had `min-width: 420px` on `.scroll-wrapper`, overflowing 375px viewport. The horizontal scrollbar ate ~15px of vertical height, lifting the footer. Fixed by:
- `Scroll.css`: add `@media (max-width: 767px) { .scroll-wrapper { min-width: 0; width: 100%; } }`
- `Home.js`: move `paddingLeft: 45` from inline to `.scroll-container` class with 15px mobile override
- `style.css`: `.scroll-container` responsive padding; `flex-shrink: 0` on `.footer`

## Deviations from Plan

No plan deviations. Audit discovered additional pre-existing issues (Scroll.css overflow, logo squish) fixed per D-02.

## Self-Check: PASSED

- All three conditional fixes applied (Task 1)
- Human audit approved (Task 2) — all routes pass at 375px and 768px
- Additional audit-surfaced issues fixed and committed
