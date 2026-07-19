# Codebase Structure

**Analysis Date:** 2026-07-18

## Directory Layout

```
personal-website/
├── public/
│   ├── 404.html            # GitHub Pages SPA-redirect fallback (client-side routing hack)
│   ├── favicon.png
│   ├── index.html           # CRA HTML shell — #root mount point
│   ├── manifest.json        # PWA manifest
│   └── robots.txt
├── src/
│   ├── Assets/               # All static media (images, PDFs, video) — capitalized, non-standard CRA name
│   │   ├── about.png, logo.png, logomain.png, me.png, pre.svg   # top-level site images (nav logo, preloader, about photo)
│   │   ├── BackScratch/
│   │   │   └── landing.png
│   │   ├── Research/
│   │   │   ├── NeuralSHO.pdf              # embedded via react-pdf in NeuralSHO.js
│   │   │   └── WaveformComparisons.pdf    # embedded via react-pdf in WaveformComparisons.js
│   │   ├── Robotics/          # project photos, spec-sheet PDFs, and demo videos (.mp4)
│   │   │   └── *.png, *.jpg/.JPG/.JPEG, *.mp4, *.pdf
│   │   ├── Services/           # one image per service card (art.jpg, consulting.jpg, healing.jpg, tech.jpg, website.jpg)
│   │   └── TechIcons/          # one SVG/PNG per skill/tool badge shown in About page (Techstack.js, Toolstack.js)
│   ├── data/                  # Content data layer — plain JS modules, no rendering logic (added in the data-layer refactor)
│   │   ├── bio.js               # About page bio paragraphs, "currently working on"/"beyond the work" lists, quote
│   │   ├── timeline.js          # About page career/education timeline entries
│   │   ├── techstack.js         # About page language/framework icon grid (icon imports + labels)
│   │   ├── toolstack.js         # About page tools icon grid (icon imports + labels)
│   │   ├── social.js            # shared social-link list (icon + href) — used by both Footer.js and About.js
│   │   ├── scroll.js            # Home page rotating role-title words
│   │   ├── projects.js          # Projects index page card list
│   │   ├── research.js          # Research index page card list
│   │   ├── services.js          # Services page card list (one description holds a JSX block)
│   │   ├── contact.js           # Contact form subject dropdown options
│   │   ├── nbrrCard.js          # NBRRCard highlights + subtitle/date
│   │   ├── artEngineering.js    # ArtEngineering highlights + subtitle/paragraphs
│   │   ├── splinter.js          # Splinter slideshow images/captions, highlights, PDF labels
│   │   ├── torus.js             # Torus slideshow images, highlights, body paragraphs
│   │   ├── backScratchCard.js   # BackScratchCard subtitle/date
│   │   ├── neuralSHO.js         # NeuralSHO highlight tags
│   │   └── waveformComparisons.js # WaveformComparisons highlight tags
│   ├── components/            # ALL React components live here — pages and sub-components together, no separate "pages" dir
│   │   ├── About/
│   │   │   ├── About.js         # page: bio + timeline + skills
│   │   │   ├── AboutCard.js     # bio blockquote — content from data/bio.js
│   │   │   ├── Techstack.js     # language/framework icon grid — content from data/techstack.js
│   │   │   ├── Timeline.js      # career/education timeline — content from data/timeline.js
│   │   │   └── Toolstack.js     # tools icon grid — content from data/toolstack.js
│   │   ├── Contact/
│   │   │   └── Contact.js       # page: EmailJS contact form
│   │   ├── Home/
│   │   │   ├── Home.js          # page: landing hero
│   │   │   ├── Scroll.js        # animated rotating-role text widget
│   │   │   └── Scroll.css       # only component-scoped CSS file in the repo
│   │   ├── Projects/
│   │   │   ├── Projects.js       # page: index route, card grid from data/projects.js — not linked from Navbar
│   │   │   ├── AlgoTrade/
│   │   │   │   └── AlgoTrade.js  # page: algorithmic trading project detail
│   │   │   ├── BackScratch/
│   │   │   │   ├── BackScratch.js       # page: BackScratch project detail
│   │   │   │   └── BackScratchCard.js   # sub-component card
│   │   │   └── Robotics/
│   │   │       ├── Robotics.js         # page: composes NBRRCard/Torus/ArtEngineering/Splinter
│   │   │       ├── ArtEngineering.js   # sub-section ("From Vision to Viable")
│   │   │       ├── NBRRCard.js         # sub-section (New Bedford Research & Robotics)
│   │   │       ├── Slideshow.js        # reusable image slideshow widget
│   │   │       ├── Splinter.js         # sub-section, embeds spec-sheet PDFs via react-pdf
│   │   │       └── Torus.js            # sub-section (Torus Project)
│   │   ├── Research/
│   │   │   ├── Research.js               # page: index — PROJECTS array from data/research.js rendered as cards
│   │   │   ├── CoupkooReview/
│   │   │   │   └── CoupkooReview.js
│   │   │   ├── GravitationalWaves/
│   │   │   │   ├── GravitationalWaves.js     # page, composes NeuralSHO + WaveformComparisons
│   │   │   │   ├── NeuralSHO.js              # embeds NeuralSHO.pdf via react-pdf
│   │   │   │   └── WaveformComparisons.js    # embeds WaveformComparisons.pdf via react-pdf
│   │   │   ├── MyPsychicEdge/
│   │   │   │   └── MyPsychicEdge.js
│   │   │   └── ParapsychologyResearch/
│   │   │       └── ParapsychologyResearch.js
│   │   ├── Services/
│   │   │   ├── Services.js       # page: service list from data/services.js
│   │   │   └── ServiceCard.js    # reusable service card sub-component
│   │   ├── Footer.js             # shared: site footer
│   │   ├── Navbar.js             # shared: top nav w/ Projects & Research dropdowns
│   │   ├── Particle.js           # shared: canvas constellation field + react-tsparticles layer (per-page bg)
│   │   ├── Pre.js                # shared: preloader/splash screen
│   │   └── ScrollToTop.js        # shared: scroll-to-top-on-navigate side effect
│   ├── App.css                  # tiny, App-root-specific rules
│   ├── App.js                   # router, route table, page-title sync, preloader timing
│   ├── index.css                # global resets loaded first (before App.css/style.css)
│   ├── index.js                 # CRA/webpack entry point — ReactDOM.render(<App />)
│   ├── reportWebVitals.js       # CRA default perf-metrics hook (unused/no-op unless wired up)
│   ├── setupTests.js            # CRA default Jest/RTL setup (jest-dom matchers)
│   └── style.css                # main global stylesheet (~1090 lines) — CSS custom properties (theme vars), utility & component classes
├── package.json
└── .planning/                   # GSD planning artifacts (this document's parent directory)
```

## Directory Purposes

**`public/`:**
- Purpose: CRA static public assets served as-is; HTML shell.
- Contains: `index.html` (mount point), `404.html` (GitHub Pages SPA fallback trick — redirects unknown paths back through `index.html` so client-side routing works on a static host), favicon, manifest, robots.txt.
- Key files: `public/index.html`, `public/404.html`.

**`src/Assets/`:**
- Purpose: All binary/static media used by components (images, PDFs, video). Named `Assets` (capital A), not the CRA-conventional lowercase `assets`.
- Contains: PNG/JPG/JPEG/SVG images, MP4 demo videos, PDF documents (research papers, spec sheets).
- Key files: subfolders mirror the feature areas that use them (`Research/`, `Robotics/`, `Services/`, `TechIcons/`, `BackScratch/`) plus loose top-level site-wide images.

**`src/data/`:**
- Purpose: Content data layer — plain JS modules (exported consts: arrays/objects/strings) holding copy that was previously defined inline in component files. Introduced by the data-layer refactor to decouple content from presentation.
- Contains: 17 files, one per content area or sub-component (see directory tree above for the full list and what each holds). Most files are pure data; `techstack.js`, `toolstack.js`, `splinter.js`, `torus.js` also import image assets directly so the consuming component stays presentation-only; `services.js` holds one JSX description block (imports `react`).
- Key files: `bio.js`, `timeline.js`, `projects.js`, `research.js`, `services.js`, `contact.js`, `social.js` (page-level content); `nbrrCard.js`, `artEngineering.js`, `splinter.js`, `torus.js`, `backScratchCard.js`, `neuralSHO.js`, `waveformComparisons.js` (sub-component-level content).
- Note: a handful of body paragraphs that embed a live in-sentence link (in `NBRRCard.js`, `NeuralSHO.js`, `WaveformComparisons.js`, `BackScratchCard.js`, `ArtEngineering.js`) were deliberately left inline in the component rather than moved here — see `CONVENTIONS.md`.

**`src/components/`:**
- Purpose: Holds both route-level "pages" and their reusable sub-components/sections — there is no separate `pages/` directory. Organized by feature area (About, Contact, Home, Projects, Research, Services), each as its own subdirectory.
- Contains: One `<Area>.js` file typically named after the folder (the "page"), plus sibling files for sub-sections/cards specific to that page. Deeper nesting occurs for multi-project areas (`Projects/Robotics/`, `Research/GravitationalWaves/`).
- Key files: `Navbar.js`, `Footer.js`, `Particle.js`, `Pre.js`, `ScrollToTop.js` at the top level of `components/` are the only components shared across multiple pages.

**`src/` (root files):**
- Purpose: App bootstrap, routing, and global styling.
- Contains: `index.js`/`App.js` (entry + router), `index.css`/`App.css`/`style.css` (global styles, loaded in that order via imports), CRA defaults (`reportWebVitals.js`, `setupTests.js`).
- Key files: `src/App.js` (route table + `PAGE_TITLES` map), `src/style.css` (theme/CSS variables + most custom classes).

## Key File Locations

**Entry Points:**
- `src/index.js`: Webpack/CRA entry, mounts `<App />` via `ReactDOM.render` into `public/index.html`'s `#root`.
- `src/App.js`: Router (`BrowserRouter`/`Routes`), preloader timing, per-route document title.

**Configuration:**
- `package.json`: Dependencies, CRA scripts (`start`/`build`/`test`/`eject`), `homepage` (GitHub Pages URL), `predeploy`/`deploy` (`gh-pages`) scripts, browserslist, ESLint config (`extends: react-app`).
- No `.eslintrc`, `.prettierrc`, `tsconfig.json`, or custom webpack config present — project uses CRA defaults unmodified (no eject).

**Core Logic:**
- `src/App.js`: Central route table — the single source of truth for what pages exist and their URLs.
- `src/components/Navbar.js`: Central nav-link source of truth — must be kept in sync with `App.js` route table manually (no shared route-config file).

**Testing:**
- `src/setupTests.js`: Jest/RTL setup (imports `@testing-library/jest-dom`).
- No `*.test.js`/`*.spec.js` files exist anywhere in `src/` — testing libraries are installed (CRA default: `@testing-library/react`, `jest-dom`, `user-event`) but unused.

## Naming Conventions

**Files:**
- Component files: `PascalCase.js` matching the exported component name (e.g. `Navbar.js` exports `NavBar`, `AboutCard.js` exports `AboutCard`).
- One component per file; default export used throughout (no named exports for components observed).
- Data files (`src/data/`): `camelCase.js`, one file per content area — named after the consuming component in camelCase where it's a 1:1 relationship (e.g. `nbrrCard.js` for `NBRRCard.js`, `backScratchCard.js` for `BackScratchCard.js`), or after the content topic for shared/page-level data (`social.js`, `projects.js`, `contact.js`). Named exports only (no default export), using the same const-naming convention as before extraction (`UPPER_SNAKE_CASE` for page-level arrays, mixed case matching the old in-component name for sub-component data).
- CSS files: lowercase/mixed to match their scope — `App.css`, `index.css`, `style.css` (global), `Scroll.css` (component-scoped, same directory as `Scroll.js`).

**Directories:**
- Feature-area folders under `src/components/` are `PascalCase` (`About/`, `Contact/`, `Home/`, `Projects/`, `Research/`, `Services/`), matching the page/component name they contain.
- Nested project/sub-topic folders also `PascalCase` (`Robotics/`, `GravitationalWaves/`, `BackScratch/`, `AlgoTrade/`, `CoupkooReview/`, `MyPsychicEdge/`, `ParapsychologyResearch/`).
- `src/Assets/` (capitalized) breaks from typical lowercase CRA convention (`assets/`) — subfolders inside it (`Research/`, `Robotics/`, `Services/`, `TechIcons/`, `BackScratch/`) echo the `components/` feature-area names.

## Where to Add New Code

**New top-level page/route:**
- Create `src/components/<AreaName>/<AreaName>.js` (PascalCase, function component, default export).
- Register the route in `src/App.js`: add an entry to `PAGE_TITLES` and a `<Route path="..." element={<AreaName />} />` in the `<Routes>` block.
- Add a corresponding `Nav.Item`/`NavDropdown.Item` link in `src/components/Navbar.js` if it should be reachable from primary nav (this is currently a manual, unenforced sync between the two files).

**New sub-section/card within an existing page:**
- Add a sibling file inside that page's folder, e.g. `src/components/Research/GravitationalWaves/NewSection.js`, and import/compose it into the parent page file (mirrors `NeuralSHO.js`/`WaveformComparisons.js` under `GravitationalWaves/`).

**New static content data (project list, timeline entries, etc.):**
- Add or extend a file in `src/data/<topic>.js` (camelCase; matching the consuming component's name where it's a 1:1 relationship, e.g. `nbrrCard.js` for `NBRRCard.js`) exporting plain consts, and import them into the component. Follow the existing 17-file pattern: page-level index arrays (`projects.js`, `research.js`, `services.js`, `contact.js`) use `UPPER_SNAKE_CASE` export names (`PROJECTS`, `SERVICES`, `SUBJECTS`); sub-component data (`nbrrCard.js`, `splinter.js`, etc.) mirrors the constants that used to live at the top of the component (`HIGHLIGHTS`, `CONTENT`, `SLIDES`). A data file may import image assets directly (see `techstack.js`, `splinter.js`) so the component stays presentation-only. Exception: short prose paragraphs that embed a live in-sentence link stay hardcoded in the component rather than being extracted — plain strings and structured arrays go to `src/data/`, link-bearing paragraphs stay put.

**New images/PDFs/video:**
- Place under `src/Assets/<FeatureArea>/` (matching the consuming component's feature folder name), then `import` the file directly into the component (CRA/webpack asset-import pattern — see `import profilepic from "../../Assets/about.png"` in `About.js`).

**Shared/cross-page utility component:**
- Add directly under `src/components/` (flat, top level) alongside `Navbar.js`/`Footer.js`/`Particle.js`/`Pre.js`/`ScrollToTop.js` — this is the established location for anything reused across multiple pages.

**Global styling:**
- New reusable CSS classes/theme variables go in `src/style.css` (the single large stylesheet). Only create a new component-scoped `.css` file (like `Scroll.css`) if the styling is truly local to one component and non-trivial; otherwise prefer inline `style={{}}` for one-off tweaks (the codebase's existing dominant pattern) or a new `style.css` class for anything reused more than once.

## Special Directories

**`public/`:**
- Purpose: Static files served verbatim at the site root by CRA's build output.
- Generated: No (hand-maintained `index.html`, `404.html`, `manifest.json`, `robots.txt`, `favicon.png`).
- Committed: Yes.

**`build/`** (not present in current tree but produced by `npm run build` / `predeploy`):
- Purpose: CRA production build output, deployed to GitHub Pages via `gh-pages -d build`.
- Generated: Yes.
- Committed: No (expected to be gitignored; not inspected here since it doesn't currently exist in the working tree).

**`node_modules/`:**
- Purpose: Installed dependencies.
- Generated: Yes.
- Committed: No.

---

*Structure analysis: 2026-07-18*
