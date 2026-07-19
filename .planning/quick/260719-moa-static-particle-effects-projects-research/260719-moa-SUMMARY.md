---
quick_id: 260719-moa
status: complete
date: 2026-07-19
---

# Quick Task 260719-moa: Static particle background on Projects/Research pages

## What was done

Added an opt-in `static` prop to `Particle`/`ParticleField` that disables all motion in the
background starfield, and wired it on at every Projects/Research call site.

- `src/components/Particle.js` and `src/components/ParticleField.js`: accept
  `{ static: isStatic = false }` (destructured rename since `static` is a reserved identifier).
  When `isStatic`, the canvas layer skips the constellation-rotation and shooting-star intervals,
  skips constellation drift, and renders a single static frame instead of looping via
  `requestAnimationFrame`. The `react-tsparticles` layer gets `move.enable`,
  `opacity.anim.enable`, and `size.anim.enable` all forced to `false`.
- Passed `<Particle static />` at all 8 existing call sites, all under Projects/Research:
  `Projects.js`, `AlgoTrade.js`, `Robotics.js`, `BackScratch.js`, `Research.js`,
  `MyPsychicEdge.js`, `ParapsychologyResearch.js`, `GravitationalWaves.js`.
- Home/About/Services/Contact left untouched — still animated (out of scope, prop defaults to
  `false` there since they call `<Particle />` with no prop).

## Build verification

`npm run build` compiled cleanly (same pre-existing unrelated ESLint warning in
`BackScratchCard.js` for `collageStyle` unused — not introduced by this change).

## Deviations

None — implemented per plan.
