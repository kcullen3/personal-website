# Phase 02: Mobile Responsiveness - Research

**Researched:** 2026-06-14
**Domain:** CSS responsive layout, Bootstrap 5 grid, React-Bootstrap
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **D-01:** All pages reachable from the nav are in scope — Home, About, Projects, Contact, and all Research sub-pages. No page exclusions.
- **D-02:** Fix any mobile issue found during the audit in this phase. Phase goal is "all pages pass at 375px and 768px" — issues beyond MOBL-01/02/03 are fixed here, not deferred.
- **D-03:** Remove `paddingTop: "120px"` from the inline style on `Col md={5}` with `className="about-img"` in `src/components/About/About.js`. Move the value to the `.about-img` CSS rule in `src/style.css`.
- **D-04:** Stacked column layout on mobile (image below text card) is acceptable. No additional mobile treatment needed beyond the padding fix.
- **D-05:** Desktop appearance is unchanged — 120px top padding value is preserved, just moved from inline style to CSS class.
- **D-06:** Canonical mobile breakpoint is `767px`. The single `@media (max-width: 768px)` font-scale block at the top of `src/style.css` must be updated to `max-width: 767px`. All new mobile rules written during this phase must also use `767px`.

### Claude's Discretion

- Page audit order (alphabetical or by nav order)
- Whether to add `overflow-x: hidden` on `body`/`html` if it resolves horizontal scroll issues found during the audit

### Deferred Ideas (OUT OF SCOPE)

None.
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| MOBL-01 | About page profile image column uses responsive CSS padding instead of hardcoded `paddingTop: "120px"` inline style | D-03/D-05: remove inline style, add `padding-top: 120px` to `.about-img` in style.css; mobile reset already present |
| MOBL-02 | All pages verified and functional at 375px viewport width (no horizontal overflow, text readable, nav works) | Audit findings below identify three overflow risks: Home heading padding, timeline collage grid, Torus video fixed height |
| MOBL-03 | All pages verified and functional at 768px viewport width (tablet breakpoint) | 768px breakpoint inconsistency (D-06) must be fixed; tablet audit must cover all routes |
</phase_requirements>

---

## Summary

This phase is a targeted CSS cleanup plus a full-site mobile audit. The codebase is a React + React-Bootstrap SPA using a single `src/style.css` for responsive overrides. Bootstrap's grid handles most column stacking automatically below `md` (768px). The work is pure CSS/JSX — no new dependencies, no architectural changes.

The existing breakpoint convention is `max-width: 767px` for mobile rules, with one outlier: the font-scale block at line 48 uses `max-width: 768px`. This inconsistency means the font-scale applies at exactly 768px (tablet width) when it should not. Fixing this to `767px` is a one-line change but affects global typography at the tablet breakpoint — it must be the first fix so all subsequent testing uses the corrected scale.

Three legitimate mobile risk areas were identified during code audit beyond the MOBL-01 inline style: (1) `.heading` and `.heading-name` in Home have `padding-left: 45px` with no mobile override, which can cause content to overflow or crowd on narrow viewports; (2) `NBRRCard` uses a hardcoded 4-column CSS grid (`gridTemplateColumns: "1fr 1fr 1fr 1fr"`) for its collage row with no responsive override, producing four tiny thumbnails at 375px; (3) `Torus` has a video with `height: 500px` hardcoded inline, which is taller than most mobile viewports and may push layout. These are in-scope per D-02.

**Primary recommendation:** Fix the breakpoint inconsistency first, then MOBL-01, then audit each route at 375px and 768px in nav order and address any overflow or layout breaks found.

---

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Responsive layout | Browser / Client | — | CSS media queries; no SSR in this CRA app |
| Column stacking | Browser / Client | — | Bootstrap grid responds to viewport at `md` breakpoint |
| Navbar toggle | Browser / Client | — | React Bootstrap `Navbar.Toggle` + CSS animation |
| Inline style removal (MOBL-01) | Frontend (JSX) | CSS (style.css) | Remove from JSX, add to CSS class |
| Breakpoint normalization (D-06) | CSS (style.css) | — | One-line change in style.css |
| Mobile audit verification | Browser / Client | — | Chrome DevTools device simulation at 375px and 768px |

---

## Standard Stack

No new packages. This phase uses only what is already installed.

### Existing Stack in Use

| Library | Purpose | Mobile-Relevant Behavior |
|---------|---------|--------------------------|
| React-Bootstrap 5 | Grid system | Columns stack to full-width below `md` (768px) automatically [ASSUMED] |
| `src/style.css` | All responsive overrides | Single file; all mobile rules live here by convention |
| Bootstrap CSS (via npm) | Base grid + component styles | `max-width: 767px` is the correct upper bound for "mobile-only" rules — `768px` is the first "tablet" pixel |

**Installation:** No new packages.

### Bootstrap Grid Behavior (relevant to this phase)

- `Col md={N}` with no other prop: full-width (`xs=12`) below 768px, `N` columns at 768px and above. [ASSUMED]
- `Col md={5}` (the `about-img` col): stacks below text card on mobile — this is the desired behavior per D-04.
- `Row className="g-3"`: Bootstrap 5 gutter — applies horizontal padding to children. No overflow risk.
- `Container fluid`: full-width; no max-width constraint. Safe on mobile.
- `Container` (without `fluid`): has horizontal padding of `0.75rem` each side. Safe on mobile.

---

## Package Legitimacy Audit

No external packages are installed in this phase.

| Package | Registry | Disposition |
|---------|----------|-------------|
| (none) | — | N/A |

---

## Architecture Patterns

### System Architecture Diagram

```
User (375px / 768px viewport)
        |
        v
  Browser renders React SPA
        |
   [Navbar.js] — React Bootstrap Navbar, expand="md"
        |             Hamburger toggle below 768px
        v
  [Page Component] (route-specific)
        |
   uses Bootstrap Grid (Row / Col md={N})
        |             Stacks to full-width below 768px
        v
  [src/style.css] media queries
        |             @media (max-width: 767px) overrides
        v
  Final rendered layout at target viewport
```

### Recommended File Touch List

Only two files require edits:

```
src/
├── components/
│   └── About/
│       └── About.js          # Remove paddingTop: "120px" inline style from Col md={5}
└── style.css                 # All CSS changes go here:
                              #   - Fix font-scale breakpoint 768px → 767px
                              #   - Add padding-top: 120px to .about-img base rule
                              #   - Add any additional mobile fixes found in audit
```

### Pattern 1: Move Inline Style to CSS Class (MOBL-01)

**What:** Replace JSX inline `style={{ paddingTop: "120px" }}` on a component that already has a className, with a CSS class rule. The mobile override (`padding-top: 0 !important`) already exists in style.css at the `max-width: 767px` breakpoint.

**JSX before:**
```jsx
// src/components/About/About.js  line 53-58
<Col
  md={5}
  style={{
    paddingTop: "120px",
    paddingBottom: "50px",
  }}
  className="about-img"
>
```

**JSX after:**
```jsx
<Col
  md={5}
  style={{ paddingBottom: "50px" }}
  className="about-img"
>
```

**CSS addition to style.css** (at the existing `.about-img` rule, before the `@media` block):
```css
.about-img {
  padding-top: 120px;
}

@media (max-width: 767px) {
  .about-img {
    padding-top: 0 !important;
  }
}
```

The `@media` block already exists at line 608-612 in style.css. Only the base rule needs adding.

### Pattern 2: Fix Breakpoint Inconsistency (D-06)

**What:** Change `@media (max-width: 768px)` to `@media (max-width: 767px)` at style.css line 48. This is the only occurrence of `768px` in a `max-width` context (two others use it as `min-width: 768px` which is correct for "tablet and above" rules).

**Before:** `@media (max-width: 768px) {`
**After:** `@media (max-width: 767px) {`

The two `max-width: 768px` occurrences:
- Line 48: font-scale block — **must change to 767px** (D-06)
- Line 773: timeline stack layout — **must change to 767px** (D-06 / consistency)

The `min-width: 768px` at line 261 (`.nav-icon-label` desktop layout) is correct and must NOT be changed.

### Pattern 3: CSS Grid to Responsive Grid (NBRRCard collage)

**What:** The collage row at the bottom of `NBRRCard.js` uses `gridTemplateColumns: "1fr 1fr 1fr 1fr"` as an inline style. At 375px this produces four ~80px columns — thumbnails too small to be useful and potentially causing overflow.

**Fix option A (CSS grid with media query — preferred):**
Add a class to the div and override in style.css:
```css
.nbrr-collage {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8px;
}
@media (max-width: 767px) {
  .nbrr-collage {
    grid-template-columns: 1fr 1fr;
  }
}
```

**Fix option B (Bootstrap Row/Col):** Replace with `<Row>` / `<Col xs={6} md={3}>` — consistent with the rest of the codebase but requires JSX restructure.

Fix option A is simpler and keeps the JSX unchanged.

### Pattern 4: Home Heading Padding on Mobile

**What:** `.heading` and `.heading-name` both have `padding-left: 45px !important` at lines 325 and 330 in style.css. At 375px viewport, 45px is ~12% of the viewport — significant, and the text then also has to share the column with a right Col. The home header is `Col md={7}`, which becomes full-width on mobile. At 375px the `padding-left: 45px` on heading text is acceptable but should be audited visually. Add a mobile override if text clips.

**Potential fix (add only if needed after audit):**
```css
@media (max-width: 767px) {
  .heading,
  .heading-name {
    padding-left: 15px !important;
  }
}
```

### Pattern 5: Torus Video Fixed Height

**What:** `Torus.js` Col md={6} contains a `<video>` with inline `height: "500px"`. At 375px this renders as a full-width column with a 500px tall video — taller than most mobile viewports above the fold.

**Fix (add only if causes layout break):**
```css
/* Or inline: style={{ width: "100%", height: "auto", ... }} */
```
Or add a CSS class `torus-video` and override in style.css:
```css
@media (max-width: 767px) {
  .torus-video {
    height: 250px;
  }
}
```

### Anti-Patterns to Avoid

- **Adding `overflow-x: hidden` on `html` globally:** Can mask scroll bugs and break position:sticky/fixed. Only add to `body` if a specific overflow root cause is confirmed. Add with a comment explaining why.
- **Using `max-width: 768px` for new mobile rules:** The convention in this codebase is `767px`. The 768px value applies the rule at the first tablet pixel, which breaks tablet layouts.
- **New inline styles for responsive behavior:** All mobile overrides go in `src/style.css`, not JSX inline styles. The MOBL-01 fix is explicitly about moving in that direction.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Column stacking on mobile | Custom flex/grid JS | Bootstrap `Col md={N}` with no xs prop | Already in use; auto-stacks below md |
| Hamburger menu | Custom toggle component | React Bootstrap `Navbar.Toggle` already in place | Toggle is already wired and styled |
| Responsive images | Custom resize logic | `className="img-fluid"` (Bootstrap) | Already applied to profile pic and home logo |

---

## Full Page Audit Findings

Pages reachable from the nav (D-01):

| Route | Component | Mobile Risks Found | Risk Level |
|-------|-----------|--------------------|------------|
| `/` | `Home.js` | `.heading`/`.heading-name` have `padding-left: 45px` — no mobile override. Needs visual verification at 375px. | LOW-MEDIUM |
| `/about` | `About.js` | `paddingTop: "120px"` inline (MOBL-01) — primary fix. Everything else uses Bootstrap grid. | HIGH (known) |
| `/projects` | `Projects.js` | Stub page ("Content coming soon!"). No layout risk. | NONE |
| `/projects/backscratch` | `BackScratchCard.js` | Bootstrap Row/Col layout, `img-fluid` not applied to landing image (uses `width: "100%"` inline instead — acceptable). | LOW |
| `/projects/algotrade` | `AlgoTrade.js` | Stub page. No risk. | NONE |
| `/projects/robotics` | `Robotics.js` + sub-cards | NBRRCard 4-col collage grid (no responsive override), Torus 500px-tall video, ArtEngineering 3-col inline grid. | MEDIUM |
| `/projects/coupkooreview` | `CoupkooReview.js` | Stub page. No risk. | NONE |
| `/research` | `Research.js` | Bootstrap Row/Col md={6} cards with `g-4`. Stacks to full-width fine. | NONE |
| `/research/gravitationalwaves` | `GravitationalWaves.js` → WaveformComparisons + NeuralSHO | PDF viewer uses `containerWidth` measured from ref — responsive by design. 600px fixed height container is scrollable (overflowY: auto). Acceptable. | LOW |
| `/services` | `Services.js` | Bootstrap Col md={4} cards, `rowGap: 24px`. Stacks to full-width fine. | NONE |
| `/contact` | `Contact.js` | Bootstrap Col md={6} form fields within Col md={7} outer. Stacks fine on mobile. | LOW |

**Navbar:** `Navbar expand="md"` collapses to hamburger below 768px. `Navbar.Toggle` is wired. CSS animation (3-span hamburger → X) is in style.css. Must verify toggle opens/closes at 375px — no code fix anticipated.

**ArtEngineering 3-col grid risk:** `gridTemplateColumns: "1fr 1fr 1fr"` for artist photos — at 375px this gives three ~110px columns. The items are images/video with `height: auto` — they will scale. Likely acceptable, but verify visually.

---

## Common Pitfalls

### Pitfall 1: Fixing 768px → 767px Breaks a Different Layout
**What goes wrong:** There are two `max-width: 768px` media queries (lines 48 and 773). Changing both to `767px` is correct. The font-scale change (line 48) means slightly larger fonts now apply at exactly 768px — beneficial. The timeline layout change (line 773) means the vertical stack applies up to 767px rather than 768px — correct.
**How to avoid:** Change both occurrences. Do not change the `min-width: 768px` rule at line 261 (that's for desktop-up layout of nav icon labels).

### Pitfall 2: `.about-img` Rule Order
**What goes wrong:** Adding `padding-top: 120px` to `.about-img` AFTER the `@media (max-width: 767px)` override block would make specificity work correctly, but if the mobile block lacks `!important`, the base rule could win.
**How to avoid:** The existing mobile override already uses `!important`. Add the base rule before the `@media` block, or inside the existing `.about-img` rule block if it exists at base level (currently it only exists inside the media query — add a base-level rule).
**Warning signs:** Desktop shows no top padding on the image after the change.

### Pitfall 3: Horizontal Scroll From Particle Canvas
**What goes wrong:** `#tsparticles` is `position: fixed; width: 100%; height: 100%`. This is not a source of horizontal scroll — it's fixed, not in flow.
**How to avoid:** If horizontal scroll appears, check Bootstrap Row negative margins first (`Row` applies `-0.75rem` margins each side). The fix for Row-caused overflow is `overflow-x: hidden` on the nearest containing block, not on `html`.

### Pitfall 4: PDF Viewer Width on Mobile
**What goes wrong:** `WaveformComparisons.js` and `NeuralSHO.js` use `containerRef` + `window.addEventListener("resize")` to measure container width and pass it to `<Page width={containerWidth - 4}>`. This is already responsive. However, at 375px the Col md={8} (which is actually full-width on mobile) may show a very narrow PDF.
**How to avoid:** This is acceptable behavior — the PDF is in a scrollable container with `overflowX: hidden`. Verify it renders without horizontal overflow of the parent.

---

## Code Examples

### MOBL-01 Complete Change Set

**`src/components/About/About.js`** — remove `paddingTop: "120px"` from line 55:
```jsx
// Before (lines 52-59):
<Col
  md={5}
  style={{
    paddingTop: "120px",
    paddingBottom: "50px",
  }}
  className="about-img"
>

// After:
<Col
  md={5}
  style={{ paddingBottom: "50px" }}
  className="about-img"
>
```

**`src/style.css`** — add base rule before the existing media query (current line 608):
```css
/* === ABOUT === */
.about-img {
  padding-top: 120px;
}

@media (max-width: 767px) {
  .about-img {
    padding-top: 0 !important;
  }
}
```

### Breakpoint Fix (D-06)

**`src/style.css` line 48:**
```css
/* Before: */
@media (max-width: 768px) {

/* After: */
@media (max-width: 767px) {
```

**`src/style.css` line 773** (timeline mobile stack):
```css
/* Before: */
@media (max-width: 768px) {

/* After: */
@media (max-width: 767px) {
```

### NBRRCard Collage Responsive Fix

**`src/components/Projects/Robotics/NBRRCard.js`** — add className:
```jsx
<div className="nbrr-collage">
```

**`src/style.css`:**
```css
.nbrr-collage {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8px;
}

@media (max-width: 767px) {
  .nbrr-collage {
    grid-template-columns: 1fr 1fr;
  }
}
```

---

## State of the Art

| Old Approach | Current Approach | Impact |
|--------------|------------------|--------|
| Inline responsive styles | CSS class + media query | Inline styles cannot be overridden by media queries reliably — moving to CSS class is the correct pattern |
| `max-width: 768px` for "mobile only" | `max-width: 767px` | Bootstrap `md` starts at 768px; mobile-only rules should stop at 767px to avoid affecting tablet layout |

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Bootstrap `Col md={N}` auto-stacks to full-width below 768px | Standard Stack | Low — this is fundamental Bootstrap grid behavior, highly stable |
| A2 | React Bootstrap `Navbar.Toggle` opens/closes correctly at 375px without code changes | Audit Findings (Navbar) | Low — toggle mechanism is React state + Bootstrap CSS; CSS animation already in place |
| A3 | The 4-col NBRRCard collage causes visible usability issues at 375px | Audit Findings | Low — even if thumbnails are small, there is no overflow; fix still improves UX |

---

## Open Questions

1. **Home heading overflow at 375px**
   - What we know: `.heading` and `.heading-name` have `padding-left: 45px` with no mobile override. At 375px this is large but the col is full-width.
   - What's unclear: whether text clips or overflows at 375px or 768px.
   - Recommendation: Verify in DevTools. If text is clipped or causes horizontal scroll, add the mobile override shown in Pattern 4. Otherwise skip.

2. **ArtEngineering 3-col image grid**
   - What we know: `gridTemplateColumns: "1fr 1fr 1fr"` inline. Images have `height: auto`.
   - What's unclear: whether three auto-height images at ~110px wide look acceptable or broken.
   - Recommendation: Verify visually at 375px. If images are too small to read, add `.art-collage` class and `grid-template-columns: 1fr` on mobile.

---

## Environment Availability

Step 2.6: SKIPPED — this phase is pure CSS/JSX edits with no external tools, services, or CLIs required. The React dev server (`npm start`) is the only runtime dependency and is already installed.

---

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Manual browser testing (DevTools device simulation) |
| Config file | None — no automated test infrastructure in this repo |
| Quick run command | Open Chrome DevTools → Toggle device toolbar → Set to 375px width |
| Full suite command | Test all routes at 375px and 768px with hamburger nav exercised |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Verification Method | Notes |
|--------|----------|-----------|---------------------|-------|
| MOBL-01 | Profile image col has no inline paddingTop | Code inspection | `grep "paddingTop" src/components/About/About.js` returns nothing for the about-img Col | Automated |
| MOBL-01 | Profile image displays with correct top spacing at desktop | Manual | Chrome DevTools at 1280px — image should have visible top gap matching design | Visual |
| MOBL-02 | No horizontal scroll at 375px on any page | Manual | DevTools 375px, scroll horizontally on each route | Visual per-page |
| MOBL-02 | Text is readable at 375px on all pages | Manual | DevTools 375px, verify no text overflow, clipping, or font too small | Visual |
| MOBL-02 | Navbar opens and closes correctly at 375px | Manual | DevTools 375px, tap hamburger, verify menu opens; tap again or tap a link, verify closes | Interactive |
| MOBL-03 | All pages render correctly at 768px | Manual | DevTools 768px, check all routes for broken layout, overflow, or display issues | Visual per-page |

### Wave 0 Gaps

None — no automated test framework setup needed. All verification is manual browser testing via Chrome DevTools.

---

## Security Domain

Security enforcement: not applicable to this phase. All changes are CSS and JSX layout edits with no authentication, data handling, user input (beyond what Contact.js already implements), or network calls.

---

## Sources

### Primary (HIGH confidence)
- Direct codebase inspection — all findings are from reading the actual source files in this repo
- `src/style.css` — full text read, all breakpoints catalogued
- `src/components/About/About.js` — inline style confirmed at line 55
- All page components — read in full; layout risks identified from code

### Secondary (MEDIUM confidence — from training knowledge)
- Bootstrap 5 grid breakpoints (`md` = 768px, columns stack below) [ASSUMED: A1]
- React Bootstrap `Navbar.Toggle` expand behavior [ASSUMED: A2]

### Tertiary (LOW confidence)
- None

---

## Metadata

**Confidence breakdown:**
- MOBL-01 fix: HIGH — exact lines identified, pattern is simple and reversible
- Breakpoint fix (D-06): HIGH — both occurrences of `768px` in `max-width` context identified at lines 48 and 773
- Mobile audit findings: MEDIUM — code-based inference; visual verification still required
- Pitfall identification: MEDIUM — based on codebase patterns plus Bootstrap knowledge

**Research date:** 2026-06-14
**Valid until:** Stable (CSS-only phase; no dependency updates in scope)
