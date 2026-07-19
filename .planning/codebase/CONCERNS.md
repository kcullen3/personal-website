# Codebase Concerns

**Analysis Date:** 2026-07-18

Summary for a manager AI overseeing future work: this is a small, well-organized CRA portfolio site. No secrets are leaked, no TODO/FIXME backlog exists, and the code is generally clean. The main remaining risk is dependency staleness (CRA/react-scripts is deprecated upstream). Bundle growth from two heavy libraries (`react-tsparticles`, `react-pdf`/`pdfjs-dist`) was resolved via route-level code splitting — see Resolved section.

## High Risk

**react-scripts (Create React App) is deprecated upstream:**
- Issue: `package.json` pins `"react-scripts": "5.0.1"`. The React team officially stopped recommending CRA and the `react-scripts` package is no longer actively maintained upstream. No security patches or webpack/babel updates are coming.
- Files: `package.json:18`
- Impact: Slow build times, aging webpack 5 config baked into `react-scripts`, and no path to fix future toolchain vulnerabilities without ejecting or migrating.
- Fix approach: Migrate to Vite (or Next.js if SSR/SEO becomes a goal) when a larger refactor phase is planned. Not urgent for a static portfolio site, but should not be delayed indefinitely.

## Medium Risk

**Several core dependencies are multiple major versions behind current:**
- `react` / `react-dom` `^17.0.2` — React 17 predates automatic batching improvements, `useId`, and the newer concurrent-safe APIs available in later majors; upgrading later gets harder the longer it's deferred.
- `react-pdf` pinned to exact `5.7.2` (no caret) — several majors behind current releases; pinned exactly rather than range, so it will never get patch updates via `npm install`.
- `@testing-library/react` `^12.1.4` and `@testing-library/user-event` `^13.5.0` — old majors, paired with React 17; will need to move together with any React upgrade.
- `react-tsparticles` `^1.42.2` — this package line was superseded by the `@tsparticles/react` package; v1 is in maintenance mode only.
- Files: `package.json:6-24`
- Impact: None currently broken, but the gap widens the effort required for any future upgrade, and CVE fixes for these libraries (if any surface) won't land automatically.
- Fix approach: Batch-upgrade in a dedicated phase (React 17→18/19, testing-library, react-pdf, tsparticles) rather than one-off bumps, since these have interdependent breaking changes.

## Low Risk

**No `.env` secrets committed — verified clean:**
- `.gitignore` correctly excludes `.env`, `.env.local`, `.env.development.local`, `.env.test.local`, `.env.production.local` (`.gitignore:11-15`).
- `git ls-files` confirms only `.env.example` is tracked, and it contains placeholder values only (`your_service_id`, `your_template_id`, `your_public_key`) — no real credentials (`.env.example`).
- `src/components/Contact/Contact.js:7-9` reads EmailJS IDs from `process.env.REACT_APP_*` correctly rather than hardcoding them.
- A grep of `src/` for API-key/token/secret patterns found no hardcoded credentials.
- This is not a finding requiring action — noted for completeness so future agents don't need to re-check.

**EmailJS public key is client-exposed by design:**
- Issue: `REACT_APP_*` env vars are inlined into the client bundle at build time (standard CRA behavior), so the EmailJS service ID, template ID, and public key are visible in the shipped JS regardless of `.env` hygiene.
- Files: `src/components/Contact/Contact.js:7-9`
- Impact: This is EmailJS's intended client-side usage model (the "public key" is meant to be public), so it is not a leak — but if EmailJS dashboard rate-limiting/domain-restriction isn't configured, the form could be abused for spam. Verify EmailJS dashboard has allowed-origins/rate limits set; this is outside the repo.

**No error monitoring / logging service wired in:**
- Issue: No `console.error`/`console.warn` calls or error-tracking SDK found in `src/`. `Contact.js:76-78` catches EmailJS send failures but only sets UI state (`setStatus("error")`) — the actual error is silently discarded.
- Files: `src/components/Contact/Contact.js:76-78`
- Impact: If the contact form starts failing silently (bad EmailJS config, quota exceeded), there is no visibility from the developer side beyond a user reporting it. A `sentry.svg` icon exists in `src/Assets/TechIcons/sentry.svg` and is referenced in `src/components/About/Toolstack.js:60` as a listed tool/skill, but no actual Sentry (or any) error-tracking integration exists in the app code.
- Fix approach: Low priority for a portfolio site; consider adding basic error logging if the contact form becomes business-critical.

**No automated test suite exercised beyond CRA defaults:**
- Issue: `@testing-library/*` packages are installed (CRA default) but no `.test.js`/`.spec.js` files exist anywhere in `src/`.
- Files: n/a (absence noted)
- Impact: No regression safety net for routing, form validation, or rendering. Any future refactor (e.g., the dependency upgrades above) carries higher risk of silent breakage.
- Fix approach: Not urgent given the site's low complexity and static nature, but worth adding smoke tests (renders without crashing, routes resolve) before a major dependency upgrade phase.

## Non-Issues (checked, no action needed)

- **TODO/FIXME/HACK/XXX comments:** none found anywhere in `src/`.
- **Alt text on images:** all 37 `<img>` tags found in `src/` carry an `alt` attribute; no obvious accessibility gap on this axis.
- **Dead/unused components:** spot-checked `Timeline.js`, `AboutCard.js`, `BackScratchCard.js`, `ServiceCard.js`, `NBRRCard.js`, `Slideshow.js`, `Scroll.js` — all are imported and used by their respective parent pages. No orphaned component files detected.
- **package-lock.json present:** dependency versions are locked (`package-lock.json`), so builds are reproducible.

## Resolved

**No code-splitting — heavy libraries ship in the main bundle: RESOLVED (2026-07-18, commit `c64ae0c`)**
- Original issue: `src/App.js` statically imported every route component (`Robotics`, `GravitationalWaves`, `BackScratch`, etc.) with no `React.lazy`/`Suspense` anywhere in `src/`. `react-pdf` (which pulls in `pdfjs-dist`, ~36MB unpacked with its own worker/wasm assets) was imported directly in `src/components/Research/GravitationalWaves/WaveformComparisons.js`, `src/components/Research/GravitationalWaves/NeuralSHO.js`, and `src/components/Projects/Robotics/Splinter.js`. `react-tsparticles` (~9.4MB unpacked with `tsparticles` core) was imported in `src/components/Particle.js`, itself imported by 8 different page components.
- Original impact: Every visitor downloaded the PDF-rendering engine and the particle-animation engine on first load, even if they only viewed the homepage — inflating time-to-interactive unnecessarily for a portfolio site.
- Resolution: Route-level `React.lazy(() => import(...))` + `Suspense` added for `Robotics` and `GravitationalWaves` in `src/App.js` (the two routes that pull in `react-pdf`), and the particle background split out into a deferred `ParticleField` component (`src/components/Particle.js` now delegates to the new `src/components/ParticleField.js`).
- Verified: `npm run build` — initial gzip bundle dropped from 284.4 kB to 98.9 kB, with `pdfjs-dist` and `react-tsparticles` now split into separate on-demand chunks instead of shipping in `main.js`.
- Files: `src/App.js`, `src/components/Particle.js`, `src/components/ParticleField.js`
- Commit: `c64ae0c`

---

*Concerns audit: 2026-07-18*
