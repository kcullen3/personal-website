<!-- refreshed: 2026-07-18 -->
# Architecture

**Analysis Date:** 2026-07-18

## System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                        index.js (root)                       │
│              `src/index.js` — ReactDOM.render                │
└───────────────────────────────┬───────────────────────────────┘
                                 ▼
┌─────────────────────────────────────────────────────────────┐
│                          App.js                                │
│  `src/App.js` — BrowserRouter, page-title effect, preloader, │
│  persistent Navbar/Footer, <Routes> route table                │
└───────────────────────────────┬───────────────────────────────┘
                                 ▼
┌──────────────────────────────────────────────────────────────┐
│                       Route-level Pages                        │
│  Home · About · Projects · Research · Services · Contact ·    │
│  Projects/BackScratch · Projects/AlgoTrade · Projects/Robotics│
│  Research/GravitationalWaves · Research/CoupkooReview ·       │
│  Research/MyPsychicEdge · Research/ParapsychologyResearch     │
│  each under `src/components/<Area>/<Page>.js`                  │
└───────────────────────────────┬───────────────────────────────┘
                                 ▼
┌──────────────────────────────────────────────────────────────┐
│                Section / Card Sub-components                  │
│  e.g. Timeline, Techstack, Toolstack, AboutCard (About)        │
│  NBRRCard, Splinter, Torus, ArtEngineering, Slideshow (Robotics)│
│  NeuralSHO, WaveformComparisons (GravitationalWaves)           │
│  `src/components/<Area>/<Sub>/<Component>.js`                  │
└───────────────────────────────┬───────────────────────────────┘
                                 ▼
┌──────────────────────────────────────────────────────────────┐
│                      Content Data Layer                        │
│  Plain JS modules — content arrays/objects/strings, no logic   │
│  (imported by both the Page and Section/Card layers above)     │
│  `src/data/*.js` — 17 files (bio, timeline, techstack,          │
│  toolstack, social, scroll, projects, research, services,      │
│  contact, nbrrCard, artEngineering, splinter, torus,            │
│  backScratchCard, neuralSHO, waveformComparisons)               │
└───────────────────────────────┬───────────────────────────────┘
                                 ▼
┌──────────────────────────────────────────────────────────────┐
│         Shared/cross-cutting components + static assets        │
│  Particle.js (bg canvas), Navbar.js, Footer.js, Pre.js,         │
│  ScrollToTop.js — `src/components/*.js`                        │
│  Images/PDFs/video — `src/Assets/**`                            │
└──────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| `App` | Router setup, page `<title>` sync, preload timer, persistent Navbar/Footer shell | `src/App.js` |
| `Navbar` | Fixed/sticky top nav, mobile collapse, route links + dropdowns for Projects/Research | `src/components/Navbar.js` |
| `Footer` | Site footer, social links, copyright | `src/components/Footer.js` |
| `Pre` (Preloader) | Splash/loading screen shown for first 1.2s via `App`'s timer | `src/components/Pre.js` |
| `ScrollToTop` | Resets scroll position on route change | `src/components/ScrollToTop.js` |
| `Particle` | Animated starfield background: custom `<canvas>` constellation renderer + `react-tsparticles` particle layer; rendered per-page (not global) | `src/components/Particle.js` |
| `Home` | Landing page hero (name, animated role scroll, profile image) | `src/components/Home/Home.js` |
| `Scroll` | Animated rotating text ("Physicist", "Engineer", etc.) used inside Home | `src/components/Home/Scroll.js`, `Scroll.css` |
| `About` | About page: bio card, profile image, Timeline, Techstack, Toolstack, social links | `src/components/About/About.js` |
| `AboutCard` | Bio blockquote + "currently working on" list; content from `src/data/bio.js` | `src/components/About/AboutCard.js` |
| `Timeline` | Career/education timeline entries; content from `src/data/timeline.js` | `src/components/About/Timeline.js` |
| `Techstack` / `Toolstack` | Icon grids (languages/frameworks vs tools); content from `src/data/techstack.js`, `toolstack.js` | `src/components/About/Techstack.js`, `Toolstack.js` |
| `Projects` | Projects index — card grid rendered from `src/data/projects.js` | `src/components/Projects/Projects.js` |
| `BackScratch` / `AlgoTrade` / `Robotics` | Individual project detail pages, each composed of sub-cards | `src/components/Projects/**` |
| `Research` | Research index — card grid rendered from `src/data/research.js`, linking to detail pages | `src/components/Research/Research.js` |
| `GravitationalWaves`, `CoupkooReview`, `MyPsychicEdge`, `ParapsychologyResearch` | Research detail pages | `src/components/Research/**` |
| `NeuralSHO`, `WaveformComparisons` | Embed research PDFs inline via `react-pdf` inside GravitationalWaves page; highlight tags from `src/data/neuralSHO.js`/`waveformComparisons.js` | `src/components/Research/GravitationalWaves/NeuralSHO.js`, `WaveformComparisons.js` |
| `Splinter` | Robotics sub-page that also embeds PDFs (spec sheets) via `react-pdf`; slides/highlights/labels from `src/data/splinter.js` | `src/components/Projects/Robotics/Splinter.js` |
| `Services` / `ServiceCard` | Services page — card grid rendered from `src/data/services.js` | `src/components/Services/Services.js`, `ServiceCard.js` |
| `Contact` | Contact form; submits via EmailJS (`@emailjs/browser`) using `REACT_APP_EMAILJS_*` env vars | `src/components/Contact/Contact.js` |

## Pattern Overview

**Overall:** Classic Create React App (CRA, react-scripts 5) single-page app with client-side routing. No backend, no state management library, no data-fetching layer — a static/marketing portfolio site.

**Key Characteristics:**
- Flat, page-oriented component tree: `App` → route component → (optional) sub-components. No shared layout components beyond Navbar/Footer/Particle/Preloader.
- Content (bio text, project descriptions, tech lists, service descriptions) is extracted into a plain-JS **data layer** under `src/data/*.js` (e.g. `PROJECTS` in `data/research.js`, `SUBJECTS` in `data/contact.js`), imported by the page/section component that renders it — still no CMS or markdown, but content and presentation are now separated. A small, deliberate exception: a handful of body paragraphs that embed a live in-sentence link (e.g. in `NBRRCard.js`, `BackScratchCard.js`) remain hardcoded in the component rather than pushing link markup into data files.
- No global state management (no Redux/Context/Zustand). Each component owns its own `useState`/`useEffect` local state (e.g. `About`/`Contact`/`Navbar`/`Particle`/`NeuralSHO`).
- Styling is a hybrid: Bootstrap 5 (`bootstrap.min.css`) + `react-bootstrap` components (`Container`, `Row`, `Col`, `Card`, `Form`, `Navbar`) for grid/layout, one global custom stylesheet (`src/style.css`, ~1090 lines) for theming (CSS custom properties for colors/fonts) and custom classes, plus **large amounts of inline `style={{ ... }}` objects** directly in components. One component-local CSS file exists: `src/components/Home/Scroll.css`.
- React 17 + `ReactDOM.render` (not React 18 `createRoot`).
- React Router v6 (`react-router-dom` ^6.2.2) with a flat `<Routes>` table in `App.js`; unmatched paths `Navigate` to `/`.

## Layers

**Routing/shell layer:**
- Purpose: Wires up the router, persistent chrome (Navbar/Footer), preload splash, and dynamic `document.title` per route.
- Location: `src/App.js`
- Contains: `PAGE_TITLES` map, `PageTitle` helper component (uses `useLocation`), `<Routes>` table.
- Depends on: every page-level component, `react-router-dom`.
- Used by: `src/index.js` (mount point).

**Page layer:**
- Purpose: One component per route; composes the page from bootstrap grid + sub-components; usually renders `<Particle />` as its background.
- Location: `src/components/<Area>/<Page>.js` (e.g. `Home/Home.js`, `About/About.js`, `Contact/Contact.js`)
- Contains: JSX layout, local UI state where needed (e.g. Contact form state, About/Navbar scroll state); index-style pages (`Projects.js`, `Research.js`, `Services.js`, `Contact.js`) import their card/option lists from `src/data/`.
- Depends on: react-bootstrap, react-icons, shared components (`Particle`), Assets, `src/data/*.js`.
- Used by: `App.js` route table.

**Section/card sub-component layer:**
- Purpose: Break a large page into semantically named chunks (e.g. `Timeline`, `Techstack`, `NBRRCard`, `Splinter`, `WaveformComparisons`).
- Location: `src/components/<Area>/<Sub>/<Component>.js`
- Contains: Presentational JSX; content constants (`HIGHLIGHTS`, `CONTENT`, `SLIDES`, icon lists) imported from a matching `src/data/*.js` module rather than defined locally; some still inline one or two body paragraphs that embed a live in-sentence link (kept out of the data layer by convention); some embed PDFs (`react-pdf`) or media (`<video>`/`<img>`).
- Depends on: react-bootstrap, react-icons, `Assets/**` imports, `src/data/*.js`.
- Used by: parent page component only (not reused across pages), except `src/data/social.js` which feeds both `Footer.js` and `About.js`.

**Data layer:**
- Purpose: Plain JS modules holding content (arrays/objects/strings, one file with a JSX description block) with no rendering logic — decouples copy from presentation so content edits don't touch component code.
- Location: `src/data/*.js` — 17 files: `bio.js`, `timeline.js`, `techstack.js`, `toolstack.js`, `social.js`, `scroll.js`, `projects.js`, `research.js`, `services.js`, `contact.js`, `nbrrCard.js`, `artEngineering.js`, `splinter.js`, `torus.js`, `backScratchCard.js`, `neuralSHO.js`, `waveformComparisons.js`.
- Contains: Exported consts (`UPPER_SNAKE_CASE` for page-level arrays like `PROJECTS`/`SERVICES`/`SUBJECTS`, mixed case for sub-component data mirroring the old in-component names like `HIGHLIGHTS`/`CONTENT`/`SLIDES`); some files import image assets directly (e.g. `techstack.js`, `splinter.js`, `torus.js`) so the consuming component stays presentation-only.
- Depends on: `src/Assets/**` (for files holding image imports); `react` (only `services.js`, for its one JSX description block).
- Used by: the corresponding Page or Section/card component (1:1 in most cases; `social.js` is shared by two components).

**Shared/cross-cutting layer:**
- Purpose: Global UI chrome and effects reused on every/most pages.
- Location: `src/components/Navbar.js`, `Footer.js`, `Pre.js`, `ScrollToTop.js`, `Particle.js`
- Contains: Nav/footer chrome, loading splash, scroll-restoration side effect, animated canvas background.
- Depends on: react-bootstrap, react-icons, react-router-dom (`Link`, `useLocation`), react-tsparticles.
- Used by: `App.js` (Navbar/Footer/ScrollToTop/Preloader) and individual pages (`Particle`, imported per-page rather than globally in `App.js`).

## Data Flow

### Primary Request Path (page navigation)

1. User clicks a `Nav.Link`/`NavDropdown.Item`/in-page `<Link>` (`src/components/Navbar.js:62-154`, or e.g. `Research.js:103`).
2. `react-router-dom` matches the path against the `<Routes>` table in `src/App.js:74-89` and swaps the rendered route element.
3. `PageTitle` (`src/App.js:47-53`) reacts to the new `location.pathname` via `useEffect` and updates `document.title` from the `PAGE_TITLES` map.
4. `ScrollToTop` (`src/components/ScrollToTop.js`) reacts to the same `pathname` change and calls `window.scrollTo(0, 0)`.
5. The matched page component renders, typically mounting its own `<Particle />` background and its static content (imported from `src/data/*.js` where applicable).

### Contact Form Submission

1. User fills the form; `Contact.js` (`src/components/Contact/Contact.js:52-56`) tracks all fields in one `form` state object via `handleChange`.
2. On submit, `handleSubmit` (`Contact.js:58-79`) calls `emailjs.send(...)` from `@emailjs/browser`, using service/template/public-key IDs read from `process.env.REACT_APP_EMAILJS_*` (build-time env vars, CRA convention).
3. `status` state (`null | "sending" | "sent" | "error"`) drives conditional UI (spinner text, success panel, error message). No backend of its own — EmailJS is the only external service call in the app.

**State Management:**
- Purely local component state (`useState`/`useEffect`/`useRef`). No Context API, no Redux, no global store. Each component that needs interactivity (Navbar scroll color, About/Contact/Particle animation, PDF viewer page counts) manages its own state independently.

## Key Abstractions

**Page component:**
- Purpose: Represents one routed URL; owns page-level layout and composition.
- Examples: `src/components/Home/Home.js`, `src/components/About/About.js`, `src/components/Services/Services.js`
- Pattern: Function component, default export, wraps content in `<Container fluid className="...-section">`, usually starts with `<Particle />`.

**Card/section sub-component:**
- Purpose: Isolates one visual block within a page (bio card, timeline, tech icon grid, PDF viewer panel) to keep page files smaller.
- Examples: `src/components/About/Timeline.js`, `src/components/Projects/Robotics/NBRRCard.js`, `src/components/Research/GravitationalWaves/NeuralSHO.js`
- Pattern: Function component; imports its content constants (e.g. `HIGHLIGHTS`, `CONTENT`, `SLIDES`, `PROJECTS`, `SUBJECTS`) from a matching `src/data/<name>.js` module instead of defining them locally. Five sub-components (`NBRRCard`, `NeuralSHO`, `WaveformComparisons`, `BackScratchCard`, `ArtEngineering`) still keep one or two body paragraphs inline because those paragraphs embed a live `<a>` link mid-sentence — link-bearing prose was deliberately left out of the data-layer extraction (see CONVENTIONS.md).

**Inline-styled bootstrap grid:**
- Purpose: Layout via `react-bootstrap` `<Container>/<Row>/<Col>` combined with one-off `style={{ ... }}` objects for spacing/color rather than CSS classes.
- Examples: pervasive across nearly all page/section components.
- Pattern: `className` used for reusable theme classes defined in `style.css` (e.g. `project-heading`, `cyan`, `about-section`, `robotics-highlight-item`); `style` prop used for one-off tweaks (padding, borders, box-shadow using the CSS custom properties like `var(--primary)`).

## Entry Points

**`src/index.js`:**
- Location: `src/index.js`
- Triggers: CRA build/dev server bootstraps this as the webpack entry; `ReactDOM.render` mounts `<App />` into `#root` (see `public/index.html`).
- Responsibilities: React 17 legacy render API, wraps app in `<React.StrictMode>`, imports global `index.css`, fires `reportWebVitals()`.

**`src/App.js`:**
- Location: `src/App.js`
- Triggers: Rendered once by `index.js`; owns the router for the whole app lifetime.
- Responsibilities: Route table, preloader timing (`setTimeout` 1200ms), persistent Navbar/Footer, per-route `document.title`.

## Architectural Constraints

- **Threading:** Single-threaded browser SPA; no web workers except the implicit PDF.js worker used by `react-pdf` (loaded from a CDN — see `pdfjs.GlobalWorkerOptions.workerSrc` in `NeuralSHO.js:8`, `WaveformComparisons.js`, `Splinter.js`).
- **Global state:** None beyond module-scope constants (e.g. `PAGE_TITLES` in `App.js`, `allConstellations` star-map data in `Particle.js`, `PROJECTS`/`SUBJECTS`-style arrays now living in `src/data/*.js` and imported into page/section files). No singletons holding mutable app state.
- **Circular imports:** None observed — import graph is strictly top-down (App → pages → sub-components → assets).
- **Environment coupling:** `Contact.js` requires three `REACT_APP_EMAILJS_*` env vars to be set at build time (CRA inlines `process.env.REACT_APP_*` at build); missing values will silently produce `undefined` args to `emailjs.send`.
- **PDF worker is CDN-loaded:** All three `react-pdf` usages point `pdfjs.workerSrc` at `cdnjs.cloudflare.com`, creating a runtime dependency on an external CDN being reachable and version-matched to the installed `pdfjs-dist` transitively bundled with `react-pdf@5.7.2`.
- **Deployment:** `homepage` field in `package.json` is `https://kcullen3.github.io/personal-website`; `gh-pages` devDependency + `deploy`/`predeploy` npm scripts indicate GitHub Pages static hosting. `Router basename={process.env.PUBLIC_URL}` in `App.js:67` supports being served from a sub-path.

## Anti-Patterns

### Heavy inline `style={{ }}` usage alongside a large global stylesheet

**What happens:** Nearly every page/component mixes `className` (pointing at rules in the single 1090-line `src/style.css`) with large ad-hoc `style={{ ... }}` objects duplicating colors/spacing (e.g. repeated `border: "1px solid var(--primary)"` boxes in `About.js`, `Contact.js`, `NeuralSHO.js`, `Robotics.js`).
**Why it's wrong:** Duplicated inline styles are harder to theme consistently, bypass CSS specificity/caching benefits, and bloat component files with presentation logic.
**Do this instead:** Promote repeated inline style blocks (e.g. the "bordered glow card" pattern) into a shared CSS class in `style.css` (or a small set of reusable styled wrapper components).

### `Projects` index route not linked from primary nav

**What happens:** `src/components/Projects/Projects.js` is now a real card grid (built out after this doc's initial pass, mirroring `Research.js`'s `PROJECTS` pattern, content in `src/data/projects.js`), but the Navbar's Projects dropdown still links directly to `/projects/backscratch`, `/projects/robotics`, `/projects/algotrade` and never to `/projects` itself.
**Why it's wrong:** `/projects` is a fully-built page but unreachable from primary nav — a visitor (or manager agent) would only find it by typing the URL directly.
**Do this instead:** Add a `Nav.Item`/`NavDropdown.Item` link to `/projects` in `src/components/Navbar.js`, or intentionally document it as a non-nav landing page if that's by design.

## Error Handling

**Strategy:** Minimal — mostly limited to the Contact form's async EmailJS call.

**Patterns:**
- `Contact.js` wraps `emailjs.send` in `try/catch`, setting `status` to `"error"` on failure and rendering a static fallback message with a direct email address (`Contact.js:76-78, 215-219`).
- No error boundaries, no global error handler, no logging/monitoring integration observed anywhere in `src/`.

## Cross-Cutting Concerns

**Logging:** None — no `console.log`/analytics/error-tracking SDK found in `src/`.
**Validation:** HTML5 form validation only (`required`, `type="email"`, `type="tel"` attributes) in `Contact.js`; character-count guard (`MAX_CHARS = 300`) enforced manually in `handleChange` (`Contact.js:52-56`).
**Authentication:** None — the site has no auth, no protected routes, no user accounts.

---

*Architecture analysis: 2026-07-18*
