# Phase 2: Mobile Responsiveness - Pattern Map

**Mapped:** 2026-06-14
**Files analyzed:** 5 files to modify (2 confirmed primary + 3 conditional on audit)
**Analogs found:** 5 / 5 (all from within the same codebase)

---

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|----------------|---------------|
| `src/style.css` | stylesheet | transform | `src/style.css` itself (existing patterns) | exact |
| `src/components/About/About.js` | component | request-response | `src/components/Home/Home.js` (Col layout) | role-match |
| `src/components/Projects/Robotics/NBRRCard.js` | component | transform | `src/components/Projects/Robotics/ArtEngineering.js` (inline grid collage) | exact |
| `src/components/Projects/Robotics/Torus.js` | component | request-response | `src/components/Projects/Robotics/NBRRCard.js` (inline video style) | role-match |
| `src/components/Projects/Robotics/ArtEngineering.js` | component | transform | `src/components/Projects/Robotics/NBRRCard.js` (3-col inline grid) | exact |

---

## Pattern Assignments

### `src/style.css` — primary CSS file (all mobile rules)

**Analog:** Itself — pattern is already established in lines 1-612.

**Existing breakpoint convention** (lines 608-612 — canonical mobile override form):
```css
@media (max-width: 767px) {
  .about-img {
    padding-top: 0 !important;
  }
}
```
All new mobile overrides must match this exact form: `@media (max-width: 767px)`.

**Breakpoint to fix — font-scale block** (lines 48-60):
```css
/* BEFORE (line 48): */
@media (max-width: 768px) {
  html {
    --font-xs: 0.6rem;
    /* ... all font vars ... */
  }
}

/* AFTER: */
@media (max-width: 767px) {
  html {
    --font-xs: 0.6rem;
    /* ... all font vars ... */
  }
}
```

**Breakpoint to fix — timeline mobile stack** (line 773):
```css
/* BEFORE (line 773): */
@media (max-width: 768px) {
  .timeline-track { ... }
  ...
}

/* AFTER: */
@media (max-width: 767px) {
  .timeline-track { ... }
  ...
}
```

**Base rule to add for MOBL-01** (before line 608, after the existing `.about-img` context):
```css
/* === ABOUT === */
.about-img {
  padding-top: 120px;
}

@media (max-width: 767px) {
  .about-img {
    padding-top: 0 !important;    /* already exists at line 608-612 — do not duplicate */
  }
}
```
Note: Only add the base `.about-img { padding-top: 120px; }` rule. The `@media` block already exists at lines 608-612.

**NBRRCard collage — new CSS rule to add** (following the pattern at lines 608-612):
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

**Home heading padding — conditional override** (add only if visual audit shows overflow/clipping):
```css
@media (max-width: 767px) {
  .heading,
  .heading-name {
    padding-left: 15px !important;
  }
}
```
Source of existing rules: lines 323-331.
```css
/* existing rules (lines 323-330): */
.heading {
  font-size: var(--font-3xl) !important;
  padding-left: 45px !important;
}

.heading-name {
  font-size: var(--font-4xl) !important;
  padding-left: 45px !important;
}
```

**Torus video — conditional override** (add only if 500px height breaks mobile layout):
```css
@media (max-width: 767px) {
  .torus-video {
    height: 250px;
  }
}
```

**ArtEngineering 3-col grid — conditional override** (add only if three ~110px columns are unreadable):
```css
@media (max-width: 767px) {
  .art-collage {
    grid-template-columns: 1fr;
  }
}
```

---

### `src/components/About/About.js` — MOBL-01 inline style removal

**Analog:** Itself — the fix is removing an inline style from lines 52-62.

**Current code** (lines 52-62 — the element to modify):
```jsx
<Col
  md={5}
  style={{
    paddingTop: "120px",
    paddingBottom: "50px",
  }}
  className="about-img"
>
  <img src={profilepic} alt="about" className="img-fluid" />
</Col>
```

**After change:**
```jsx
<Col
  md={5}
  style={{ paddingBottom: "50px" }}
  className="about-img"
>
  <img src={profilepic} alt="about" className="img-fluid" />
</Col>
```
Only `paddingTop: "120px"` is removed. `paddingBottom: "50px"` is retained. The `className="about-img"` is already present — the CSS class rule added in style.css takes over.

---

### `src/components/Projects/Robotics/NBRRCard.js` — collage grid fix

**Analog:** `src/components/Projects/Robotics/ArtEngineering.js` — uses the same inline `gridTemplateColumns` pattern (lines 85-90 in ArtEngineering).

**Current inline grid** (lines 119-123 in NBRRCard.js):
```jsx
<div style={{
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "8px",
}}>
```

**After change (add className, remove inline display/grid props):**
```jsx
<div className="nbrr-collage">
```
The CSS class `.nbrr-collage` in style.css owns the grid definition and its responsive override. The four child elements (img/video) need no changes.

---

### `src/components/Projects/Robotics/Torus.js` — video height fix (conditional)

**Analog:** `src/components/Projects/Robotics/NBRRCard.js` — same video element pattern.

**Current inline video style** (lines 51-58 in Torus.js):
```jsx
<video
  controls
  style={{
    width: "100%",
    height: "500px",
    objectFit: "contain",
    borderRadius: "12px",
    display: "block",
  }}
>
```

**Fix approach A — add className (preferred, matches NBRRCard pattern):**
```jsx
<video
  controls
  className="torus-video"
  style={{
    width: "100%",
    height: "500px",
    objectFit: "contain",
    borderRadius: "12px",
    display: "block",
  }}
>
```
Then add `.torus-video` media query override to style.css (shown above). Only add if 500px height causes layout issues at 375px.

---

### `src/components/Projects/Robotics/ArtEngineering.js` — 3-col grid fix (conditional)

**Analog:** Itself — inline `gridTemplateColumns: "1fr 1fr 1fr"` at lines 85-90.

**Current inline grid** (lines 85-90):
```jsx
<div style={{
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "8px",
  alignItems: "center",
}}>
```

**Fix approach (add className if needed):**
```jsx
<div className="art-collage" style={{ alignItems: "center" }}>
```
Add `.art-collage` base rule + mobile override to style.css. Only apply if visual audit at 375px shows images are too small to be useful.

---

## Shared Patterns

### Mobile Override Form
**Source:** `src/style.css` lines 608-612
**Apply to:** Every new mobile rule in this phase
```css
@media (max-width: 767px) {
  .class-name {
    property: value;
  }
}
```
Never use `max-width: 768px` for mobile-only rules. `768px` is the first Bootstrap `md` tablet pixel.

### Inline Style to CSS Class Migration
**Source:** `src/components/About/About.js` lines 52-62 (before) + `src/style.css` (after)
**Apply to:** NBRRCard collage, Torus video (if needed), ArtEngineering collage (if needed)

Pattern: When an element already has or can receive a `className`, move layout/sizing properties that need responsive overrides out of JSX `style={{}}` and into a CSS class in `src/style.css`. Keep non-responsive decorative inline styles (borderRadius, display, objectFit) in JSX only if they never need breakpoint variants.

### Card Border/Shadow Convention (do not change)
**Source:** `src/components/Projects/Robotics/NBRRCard.js` lines 45-52
```jsx
<div style={{
  border: "1px solid var(--primary)",
  borderRadius: "16px",
  boxShadow: "0 0 20px rgba(155, 114, 207, 0.2)",
  backgroundColor: "var(--background)",
  padding: "16px",
  marginBottom: "40px",
}}>
```
This wrapper pattern is shared across Torus, NBRRCard, ArtEngineering, and About. Do not modify it — it is not a mobile risk.

---

## No Analog Found

None. All files to be modified are existing files within the codebase. No new files are created in this phase.

---

## Fix Priority Order

| Order | File | Change | Rationale |
|-------|------|--------|-----------|
| 1 | `src/style.css` line 48 | `768px` → `767px` (font-scale) | Must be first — all subsequent testing uses the corrected typography scale |
| 2 | `src/style.css` line 773 | `768px` → `767px` (timeline stack) | Consistency fix, no risk |
| 3 | `src/style.css` | Add `.about-img { padding-top: 120px; }` base rule | MOBL-01 CSS side |
| 4 | `src/components/About/About.js` | Remove `paddingTop: "120px"` from Col inline style | MOBL-01 JSX side |
| 5 | `src/components/Projects/Robotics/NBRRCard.js` | Replace inline grid with `className="nbrr-collage"` | Known collage risk |
| 6 | `src/style.css` | Add `.nbrr-collage` grid + mobile override | Supports fix #5 |
| 7 | Audit all routes at 375px + 768px | Visual verification | Discover remaining MOBL-02/03 gaps |
| 8 | `src/style.css` (conditional) | Add `.heading`/`.heading-name` mobile padding override | Only if audit shows overflow |
| 9 | `src/components/Projects/Robotics/Torus.js` (conditional) | Add `className="torus-video"` | Only if 500px height breaks layout |
| 10 | `src/components/Projects/Robotics/ArtEngineering.js` (conditional) | Add `className="art-collage"` | Only if 3-col grid is unreadable at 375px |

---

## Metadata

**Analog search scope:** `src/components/**/*.js`, `src/style.css`
**Files scanned:** 6 source files read in full
**Pattern extraction date:** 2026-06-14
