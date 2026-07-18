# Technology Stack

**Analysis Date:** 2026-07-18

## Languages

**Primary:**
- JavaScript (ES6+, JSX) - All application code in `src/`, no TypeScript despite a `typescript.svg` tech icon asset present

**Secondary:**
- CSS - `src/App.css`, `src/style.css`, `src/components/Home/Scroll.css`

## Runtime

**Environment:**
- Node.js (local dev machine tested at v24.16.0; no `.nvmrc` or `engines` field pins a version)
- Browser target defined via `browserslist` in `package.json` (production: `>0.2%, not dead, not op_mini all`; development: last 1 chrome/firefox/safari)

**Package Manager:**
- npm (evidenced by `package-lock.json`, 742KB)
- Lockfile: present (`package-lock.json`)

## Frameworks

**Core:**
- React 17.0.2 (`react`, `react-dom`) - UI framework, class-free functional components with hooks
- react-scripts 5.0.1 (Create React App) - build tooling, dev server, test runner wrapper
- react-router-dom 6.2.2 (declared) / 6.30.3 (installed) - client-side routing, see `src/App.js`
- react-bootstrap 2.2.1 (declared) / 2.10.2 (installed) + bootstrap 5.1.3 (declared) / 5.3.3 (installed) - UI component library and CSS framework

**Testing:**
- @testing-library/react 12.1.4, @testing-library/jest-dom 5.16.2, @testing-library/user-event 13.5.0 - installed as devDependencies via CRA template but **no test files exist** anywhere under `src/` (confirmed via glob for `*.test.*`/`*.spec.*` - zero matches). Test tooling is present but unused.
- Test runner: `react-scripts test` (Jest under the hood, via CRA) - `package.json:28`

**Build/Dev:**
- react-scripts 5.0.1 (Webpack/Babel under the hood, CRA-managed, not ejected - no `eject` has been run, `config-overrides` etc. absent)
- gh-pages 6.3.0 (devDependency) - static deploy tool, pushes `build/` to `gh-pages` branch

## Key Dependencies

**Critical:**
- `@emailjs/browser` ^4.4.1 - powers the contact form (`src/components/Contact/Contact.js`); only outbound API integration in the app
- `react-tsparticles` ^1.42.2 - animated particle/starfield background, custom constellation config in `src/components/Particle.js`
- `react-icons` ^4.8.0 - icon set used across About, Footer, Navbar, Projects components

**Infrastructure:**
- `web-vitals` ^2.1.4 - wired in `src/reportWebVitals.js` / `src/index.js` but not sent anywhere (no analytics endpoint configured; comment at `src/index.js:16` references CRA docs for optional analytics wiring, unused)

**Declared but unused:**
- `react-pdf` 5.7.2 - listed in `package.json` and README's tech stack section, but zero imports of `react-pdf` or `pdfjs` found anywhere in `src/`. PDF assets (e.g. `src/Assets/Robotics/SplinterToolheads.pdf`, `src/Assets/Research/NeuralSHO.pdf`) are linked to directly as static files (plain `<a href>` / asset links), not rendered via the `react-pdf` viewer component. This is dead weight in the bundle unless intentionally kept for future use.

## Configuration

**Environment:**
- CRA-standard `.env` file (gitignored, see `.gitignore`) loaded at build time via `process.env.REACT_APP_*` convention
- `.env.example` at repo root documents the three required vars (see INTEGRATIONS.md)
- No `.env.local`/`.env.development.local` etc. present, only the base `.env`/`.env.example` pair

**Build:**
- `package.json` (scripts, deps, `eslintConfig`, `browserslist`) - no separate `webpack.config.js`, `babel.config.js`, or `tsconfig.json` (project is not ejected, no TypeScript)
- ESLint config is minimal, inline in `package.json:33-38`: extends `react-app` and `react-app/jest` (CRA defaults only, no custom rules)
- No Prettier config found

## Platform Requirements

**Development:**
- Node.js + npm, `npm install` then `npm start` (dev server on port 3000, per README)
- Local `.env` file required (copy from `.env.example`) for the Contact form to function in dev

**Production:**
- Static site, no server-side runtime
- Deployed to GitHub Pages via `npm run deploy` (`gh-pages -d build`), publishing `build/` to the `gh-pages` branch
- `homepage` field in `package.json` pins the deploy target: `https://kcullen3.github.io/personal-website`
- Environment variables are baked into the static build at build time (client-exposed, not server secrets) — see README note at deploy section and INTEGRATIONS.md

## Outdated / Deprecated Concerns

- React 17.0.2 installed vs. React 19.2.7 latest (React 18/19 not adopted; no concurrent features, no automatic batching)
- react-router-dom locked to v6 range but far behind v7 latest (v7 latest is 7.18.1)
- react-tsparticles v1 is a deprecated line — the tsParticles project split into `@tsparticles/react` + `@tsparticles/slim` etc. for v2+; staying on v1.x means missing maintenance/security fixes
- react-pdf 5.7.2 vs. latest 10.4.1 (5 major versions behind) — moot if truly unused, see above
- Testing Library packages are pinned old (`@testing-library/react` 12 vs. 16 latest, needed for React 18+ compat) — irrelevant while React stays on 17, but blocks a future React upgrade until bumped
- No lockfile-enforced Node version and no CI pipeline (`.github/workflows` absent) to catch drift/breakage before deploy

---

*Stack analysis: 2026-07-18*
