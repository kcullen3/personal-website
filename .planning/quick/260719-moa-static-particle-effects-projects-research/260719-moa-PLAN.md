---
quick_id: 260719-moa
description: Make background particle effects static on all Projects/Research pages
date: 2026-07-19
---

# Quick Task 260719-moa: Static particle background on Projects/Research pages

## Task

`<Particle />` (`src/components/Particle.js` -> `src/components/ParticleField.js`) renders an
animated starfield: a canvas layer with drifting/fading constellations and shooting stars, plus
a `react-tsparticles` layer with moving/pulsing dust particles. Make this static (no movement) on
every page under "Projects" and "Research" — the only 8 call sites, all of which are Projects/
Research pages.

## Tasks

1. `src/components/Particle.js`: accept a `static` prop (destructured as `{ static: isStatic = false }`
   since `static` is a reserved word), forward as `<ParticleField static={isStatic} />`.
2. `src/components/ParticleField.js`: accept `{ static: isStatic = false }`.
   - Canvas `useEffect`: skip `rotateInterval`/`shootingStarInterval` creation when static, skip
     constellation drift increment, call `draw()` once without scheduling `requestAnimationFrame`
     when static. Add `isStatic` to the effect's dependency array.
   - `Particles` tsparticles params: set `move.enable`, `opacity.anim.enable`, `size.anim.enable`
     to `!isStatic`.
3. Add the `static` prop at all 8 call sites (`<Particle />` -> `<Particle static />`):
   `Projects/Projects.js`, `Projects/AlgoTrade/AlgoTrade.js`, `Projects/Robotics/Robotics.js`,
   `Projects/BackScratch/BackScratch.js`, `Research/Research.js`,
   `Research/MyPsychicEdge/MyPsychicEdge.js`, `Research/ParapsychologyResearch/ParapsychologyResearch.js`,
   `Research/GravitationalWaves/GravitationalWaves.js`.
   Home/About/Services/Contact are untouched — not in scope, stay animated.

## Verify

- `npm run build` compiles.
- Visiting Projects/Research pages shows a static starfield/dust background (no drift, no fade
  rotation, no shooting stars, no dust movement).
