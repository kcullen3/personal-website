# Coding Conventions

**Analysis Date:** 2026-07-18

## Naming Patterns

**Files:**
- Component files: PascalCase matching the component name, e.g. `Home.js`, `Contact.js`, `NBRRCard.js`, `ScrollToTop.js`.
- Component folders group a feature's page + subcomponents, e.g. `src/components/Projects/Robotics/{Robotics.js, NBRRCard.js, Splinter.js, ArtEngineering.js, Slideshow.js}`.
- Assets live under `src/Assets/<Category>/` (`Robotics`, `TechIcons`, `Services`, `BackScratch`, `Research`) mirroring the component tree that consumes them.
- Data files live flat under `src/data/<name>.js`, camelCase — named after the consuming component where 1:1 (`nbrrCard.js` for `NBRRCard.js`) or after the content topic when shared/page-level (`social.js`, `projects.js`, `contact.js`). Named exports only.
- CSS files are sparse and named after their scope: `src/style.css` (global, 1088 lines — the vast majority of all styling), `src/App.css` (7 lines), `src/index.css` (8 lines), `src/components/Home/Scroll.css` (component-scoped, 44 lines).

**Functions/Components:**
- One default-exported function component per file, declared with `function ComponentName() { ... }` (not arrow-function consts), e.g. `src/components/Home/Home.js`, `src/components/Contact/Contact.js`.
- Always `export default ComponentName;` at the bottom of the file. No named exports observed for components.

**Variables/Constants:**
- Module-level constant config objects/arrays are `UPPER_SNAKE_CASE`: `SUBJECTS`, `MAX_CHARS`, `HIGHLIGHTS`, `CONTENT`, `PAGE_TITLES`. `MAX_CHARS` and `PAGE_TITLES` stay module-local (`src/components/Contact/Contact.js`, `src/App.js` respectively) since they're config, not content; `SUBJECTS`, `HIGHLIGHTS`, `CONTENT`-style content constants now live in `src/data/*.js` (e.g. `SUBJECTS` in `src/data/contact.js`, `HIGHLIGHTS`/`CONTENT` in `src/data/nbrrCard.js`) and are imported into the component rather than declared there.
- Inline style objects reused across a component are `camelCase` consts placed above the component function: `inputStyle`, `selectStyle`, `bodyStyle`, `collageStyle`.
- Local component state/vars are `camelCase` (`form`, `status`, `load`).

**Types:**
- Plain JavaScript (`.js`), no TypeScript, no PropTypes. Props are not validated or documented via types.

## Code Style

**Formatting:**
- No Prettier config present (no `.prettierrc*`, no `prettier` key in `package.json`).
- Indentation is inconsistent between files: some use 4 spaces (`Contact.js`, `NBRRCard.js`), others use 2 spaces (`App.js`, `Home.js`). Match the surrounding file's existing indentation when editing rather than imposing one style.
- Double quotes are used consistently for JSX attribute strings and JS string literals.
- Semicolons are used consistently.

**Linting:**
- ESLint is configured only via CRA defaults in `package.json`:
  ```json
  "eslintConfig": { "extends": ["react-app", "react-app/jest"] }
  ```
- No `.eslintrc*` file, no custom rules, no `eslint-disable` conventions observed. Lint runs implicitly through `react-scripts` (build/start), not as a standalone `npm run lint` script.

## Import Organization

**Order (observed, not enforced by tooling):**
1. `react` / third-party libraries (`react-bootstrap`, `react-router-dom`, `@emailjs/browser`)
2. Local component imports (relative paths, e.g. `../Particle`, `./Scroll`)
3. Asset imports (images/videos/PDFs), typically last, e.g. `import homeLogo from "../../Assets/logomain.png";`
4. Data imports (from `src/data/*.js`), grouped with or immediately after local component/asset imports, e.g. `import { HIGHLIGHTS, CONTENT } from "../../../data/nbrrCard";` in `NBRRCard.js`
5. Global CSS imports (only in `App.js`, at the very end): `bootstrap/dist/css/bootstrap.min.css`, `./style.css`, `./App.css`

**Path Aliases:**
- None. All imports use relative paths (`../../../Assets/...`). No `jsconfig.json` / `tsconfig.json` path aliasing.

## Styling Approach

- **Global CSS** (`src/style.css`) holds almost all class-based styling (layout sections, navbar, cards, grids, responsive breakpoints). Classes use kebab-case: `.home-section`, `.about-img`, `.nbrr-collage`, `.robotics-highlight-item`, `.tech-icon-images`.
- **Inline `style={{...}}` objects** are pervasive for one-off/component-specific styling (colors, spacing, borders), e.g. throughout `Contact.js` and `NBRRCard.js`. Shared inline style objects are hoisted to module-level consts (`inputStyle`, `bodyStyle`) when reused within a file, but are not shared across files.
- CSS custom properties (design tokens) are used for theme values: `var(--primary)`, `var(--text)`, `var(--background)`, `var(--accent1)`, `var(--font-sm/md/lg/base)`. Defined once in `src/style.css` and referenced everywhere (both in CSS and inline JS styles).
- Fonts are hardcoded per-inline-style as `"Lato, sans-serif"` (body) and `"Nunito, sans-serif"` (headings) rather than via a CSS class or token.
- Recent commit history (`style(02-02)`, `fix(02-03)`) shows an active effort to move some inline styles into `style.css` classes (e.g. `.nbrr-collage`, `.tech-icon-images`) — new work should prefer adding a class to `style.css` over introducing new one-off inline styles, per that established direction.

## Comments

- File-header comments: many files open with a single-line `/* Purpose description */` comment summarizing the file's role, e.g. `/* Contact page — email form that sends messages via EmailJS */` (`Contact.js`), `/* Root application component — sets up routing, preloader, and persistent layout (Navbar, Footer) */` (`App.js`), `/* Landing page — hero section... */` (`Home.js`). Follow this pattern for new top-level component files.
- Inline comments mark logical JSX sections in larger files, e.g. `{/* Row 1: description left, video right */}` in `NBRRCard.js`.
- No JSDoc/TSDoc usage.

## Function Design

- Components are small-to-medium single-purpose functions; larger "page" components (e.g. `NBRRCard.js`) inline substantial JSX rather than splitting into subcomponents, but source their config data (highlights, labels, dates) from an imported `src/data/*.js` module instead of a top-of-file constant. Body paragraphs that embed a live in-sentence link are the one exception left as inline JSX/copy (see `ARCHITECTURE.md`'s Key Abstractions for the full list).
- Event handlers are defined inline inside the component as `const handleX = (e) => {...}` closures (see `handleChange`, `handleSubmit` in `Contact.js`).
- `async/await` with `try/catch` is the pattern for async operations (EmailJS send in `Contact.js`); errors are caught and reflected into component state (`setStatus("error")`) rather than thrown further.

## Module Design

- Every component file has exactly one default export; no barrel (`index.js`) files re-exporting multiple components were found. Data files under `src/data/` are the one exception — they use named exports only (no default export), since a file may export more than one const (e.g. `splinter.js` exports `SLIDES`, `HIGHLIGHTS`, and `CONTENT`).
- Environment variables are read at module scope via `process.env.REACT_APP_*` (CRA convention), e.g. `EMAILJS_SERVICE_ID` in `Contact.js`.
- Routing table (`PAGE_TITLES` in `App.js`) and route definitions are centralized in `src/App.js`; new pages should be added there as both a `<Route>` and a `PAGE_TITLES` entry.

## Commit Message Style

Based on `git log --oneline -30`, this repo follows **Conventional Commits** with a GSD-workflow phase/plan scope convention:

- Format: `<type>(<scope>): <description>`, lowercase, imperative mood, no trailing period.
- Types observed: `feat`, `fix`, `docs`, `style`, `chore`, `test`, `merge`.
- Scopes are frequently phase/plan identifiers from the GSD planning workflow, e.g. `fix(02-03): ...`, `feat(01-02): ...`, `docs(phase-01): ...`, `merge(01): ...`. Occasionally a functional scope is used instead, e.g. `fix(about): center social icons with flexbox`.
- Example commits:
  - `fix(02-03): fix horizontal overflow and footer alignment on Home page`
  - `feat(01-02): add tech-icon-images class to all Techstack imgs and track new SVGs (STYLE-02, D-05, D-06)`
  - `docs(02-03): complete plan summary with audit findings and approval`
- Some commits append bracketed issue/finding codes in parentheses at the end (e.g. `(STYLE-01)`, `(CLEAN-02, D-04)`) referencing tracked audit/finding IDs from planning docs.
- Plain descriptive commits without scope also occur for small ad hoc changes: `Wording updates`, `misc changes`, `Switch Coupkoo Review to Research Nav`.

**When contributing:** use `type(scope): description` for planned/phased work (matching the active GSD plan/phase ID as scope); a short plain imperative message is acceptable for small unplanned tweaks.

---

*Convention analysis: 2026-07-18*
