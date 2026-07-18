# Testing Patterns

**Analysis Date:** 2026-07-18

## Test Framework

**Runner:**
- Jest, via `react-scripts test` (bundled with `react-scripts` 5.0.1 / CRA). No standalone Jest config file — configuration is entirely CRA's default.

**Assertion Library:**
- Jest's built-in `expect`, extended with `@testing-library/jest-dom` (installed as a dependency, `^5.16.2`) for DOM matchers (`toHaveTextContent`, etc.).

**Other testing-library packages installed (dependencies, not devDependencies):**
- `@testing-library/react` `^12.1.4`
- `@testing-library/user-event` `^13.5.0`

**Setup file:**
- `src/setupTests.js` — imports `@testing-library/jest-dom` only. This is CRA's default scaffold file, unmodified.

**Run Commands:**
```bash
npm test          # runs `react-scripts test` — Jest in interactive watch mode
```
No `test:ci`, `test:coverage`, or coverage-flag script is defined in `package.json`. Coverage can only be obtained via `npm test -- --coverage --watchAll=false` manually; this is not wired into any script or CI.

## Test File Organization

**Current state: no test files exist in `src/`.**

A recursive search for `*.test.js` under `src/` returned zero matches. The only `.test.js` files in the repository are inside `node_modules` (transitive dependency test files, not part of this project). `src/App.test.js` — the default CRA smoke test scaffold — has been removed/was never committed.

There is no `__tests__` directory, no `*.spec.js` files, and no e2e test setup (no Cypress/Playwright config).

## Test Structure

Not applicable — no test suites exist to characterize structure, suite organization, or assertion patterns.

## Mocking

Not applicable — no mocks, fixtures, or test doubles exist in the codebase.

## Coverage

**Requirements:** None enforced. No coverage thresholds configured in `package.json`, no coverage reporting in CI (no CI exists — see below).

**Assessment: NONE.** This is a zero-test codebase. All 30+ components (`Home`, `About`, `Contact`, `Projects`, `Research`, `Services`, `Robotics`, `BackScratch`, `AlgoTrade`, etc.) and all interactive logic (the EmailJS contact form submission/validation in `src/components/Contact/Contact.js`, routing/title logic in `src/App.js`, the `ScrollToTop` behavior) ship with zero automated verification.

## CI/CD

- No `.github/` directory exists anywhere in the repository (confirmed via glob search). There is no GitHub Actions workflow, no other CI provider config (no `.gitlab-ci.yml`, `.circleci/`, etc.).
- Deployment is manual: `npm run deploy` runs `predeploy` (`npm run build`) then `gh-pages -d build`, publishing directly to GitHub Pages from a local machine. No test gate exists before deploy.

## Test Types

**Unit Tests:** None.
**Integration Tests:** None.
**E2E Tests:** None (no Cypress/Playwright/Selenium present).

## Recommendations for Future Work

Since this is a static, low-interactivity marketing/portfolio site, full coverage is not critical, but the highest-value gaps if testing is introduced would be:
1. `src/components/Contact/Contact.js` — form validation (`MAX_CHARS` truncation, required-field handling), submit success/error state transitions (`handleSubmit`).
2. `src/App.js` — route rendering (`PAGE_TITLES` document-title effect) and the `*` catch-all redirect to `/`.
3. `src/components/ScrollToTop.js` — scroll-reset-on-navigation behavior.

Any new test files should follow CRA/Jest defaults: co-located `ComponentName.test.js` next to the component, using `@testing-library/react`'s `render`/`screen` and `@testing-library/user-event`, since those libraries are already installed as dependencies (though currently unused).

---

*Testing analysis: 2026-07-18*
