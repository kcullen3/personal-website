# External Integrations

**Analysis Date:** 2026-07-18

## APIs & External Services

**Email / Contact Form:**
- EmailJS (emailjs.com) - sends the Contact page form submissions directly from the browser, no backend
  - SDK/Client: `@emailjs/browser` ^4.4.1, imported in `src/components/Contact/Contact.js:4` as `emailjs`
  - Call site: `emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {...}, EMAILJS_PUBLIC_KEY)` at `src/components/Contact/Contact.js:62-73`
  - Auth: three env vars read via `process.env` at module scope (`src/components/Contact/Contact.js:7-9`):
    - `REACT_APP_EMAILJS_SERVICE_ID`
    - `REACT_APP_EMAILJS_TEMPLATE_ID`
    - `REACT_APP_EMAILJS_PUBLIC_KEY`
  - This is the **only** external API integration in the codebase (confirmed via repo-wide grep for `fetch(`, `axios`, `XMLHttpRequest` — zero matches outside EmailJS)

## Data Storage

**Databases:**
- None. No database client, ORM, or connection string anywhere in the codebase.

**File Storage:**
- Local filesystem only — all media (images, PDFs, videos) are static assets bundled from `src/Assets/` (e.g. `src/Assets/Robotics/`, `src/Assets/Research/`) and served as part of the static build.

**Caching:**
- None. No `localStorage`/`sessionStorage` usage found (grepped, zero matches). No service worker registration beyond CRA's default (unused, not registered in `src/index.js`).

## Authentication & Identity

**Auth Provider:**
- None. This is a public static portfolio site with no login, session, or user-identity concept anywhere in the app.

## Monitoring & Observability

**Error Tracking:**
- None configured. A `sentry.svg` icon exists in `src/Assets/TechIcons/sentry.svg` (used decoratively in the About/Toolstack tech-icon grid) but there is no actual Sentry SDK dependency, no `Sentry.init()`, and no error-tracking wiring anywhere in `src/`. This appears to be purely a "tools I know" icon display, not a live integration.

**Logs:**
- None. No structured logging, no remote log shipping. `web-vitals` (`src/reportWebVitals.js`) is wired but its callback is not connected to any analytics/reporting endpoint — see `src/index.js:16` comment referencing the optional CRA analytics hook, left unimplemented.

**Analytics:**
- None found. Grepped `src/` and `public/` for `gtag`, `google-analytics`, `GA_MEASUREMENT`, `analytics` — no hits besides the unused `web-vitals` scaffold comment.

## CI/CD & Deployment

**Hosting:**
- GitHub Pages, static site — `homepage` field in `package.json` set to `https://kcullen3.github.io/personal-website`

**Deployment mechanism:**
- Manual, local-machine deploy via `npm run deploy` (`package.json:31`, runs `predeploy` → `npm run build` → `gh-pages -d build`)
- `gh-pages` (devDependency ^6.3.0) pushes the built `build/` directory to the `gh-pages` branch of the repo
- **No CI pipeline** — confirmed no `.github/workflows/` directory exists. Builds and deploys happen only from a developer's local machine, and require the local `.env` file to be present at deploy time (per `README.md` deploy-notes section) since CRA bakes `REACT_APP_*` vars into the static bundle at build time.

**SPA routing on GitHub Pages:**
- Uses the standard `spa-github-pages` 404-redirect trick: `public/404.html` redirects unknown paths back to `index.html` with the path encoded in the query string, and `public/index.html:16-29` contains the matching decode/`history.replaceState` script. This is required because GitHub Pages has no server-side rewrite support for client-side routing (`react-router-dom`'s `BrowserRouter`).

## Environment Configuration

**Required env vars** (documented in `.env.example`, all three required for the contact form to work):
- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`
- `REACT_APP_EMAILJS_PUBLIC_KEY`

**Secrets location:**
- Local `.env` file at repo root (gitignored — see `.gitignore` entries for `.env`, `.env.local`, `.env.development.local`, `.env.test.local`, `.env.production.local`)
- `.env.example` (committed, safe placeholder values only: `your_service_id`, `your_template_id`, `your_public_key`) documents the schema
- **Important nuance:** these are CRA `REACT_APP_*` vars, which means they are compiled into the client-side JS bundle at build time and are publicly visible in the deployed site's source — this is standard/expected for EmailJS's public key + service/template IDs (EmailJS's browser SDK is designed for client-exposed keys, restricted server-side via EmailJS dashboard allow-listing), not a leak of a traditional secret, but worth flagging to a future maintainer who might assume `.env` values stay private in production.

## Webhooks & Callbacks

**Incoming:**
- None. Static site has no server to receive webhooks.

**Outgoing:**
- None beyond the EmailJS `send()` call described above (EmailJS handles the actual outbound email delivery on its own infrastructure once the browser SDK call succeeds).

---

*Integration audit: 2026-07-18*
