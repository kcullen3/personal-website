# Phase 1: Code & Style Fixes - Pattern Map

**Mapped:** 2026-06-14
**Files analyzed:** 4 modified files + 1 deleted file
**Analogs found:** 4 / 4 (all modified files have direct in-repo analogs)

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|----------------|---------------|
| `src/index.css` | config | transform | `src/style.css` (lines 1-13) | role-match |
| `src/style.css` | config | transform | `src/style.css` itself (lines 277-287) | exact (self-reference — media block is the kept pattern) |
| `src/components/About/Techstack.js` | component | request-response | `src/components/About/Toolstack.js` | exact |
| `src/components/Home/Home2.js` | component | — | — | DELETE — no analog needed |

## Pattern Assignments

### `src/index.css` (config, STYLE-01 font fix)

**Analog:** `src/style.css` lines 1-13 (canonical font declarations that index.css must now enable)

**Current state** (full file, lines 1-9):
```css
@import url("https://fonts.googleapis.com/css2?family=Outfit&family=PT+Mono&display=swap");

body {
  margin: 0;
  font-family: "PT Mono", monospace !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(to left, rgb(27 20 41), rgb(20 15 35));
}
```

**Target state after fix** (replace entire file):
```css
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Nunito:wght@300;400;600;700&display=swap");

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(to left, rgb(27 20 41), rgb(20 15 35));
}
```

**Changes:**
- Line 1: Replace Outfit+PT Mono `@import` with Lato+Nunito `@import`
- Line 5: Delete `font-family: "PT Mono", monospace !important;` entirely
- All other lines unchanged

**Constraint:** `@import` must remain line 1 — CSS ignores imports that appear after any rule.

---

### `src/style.css` (config, CLEAN-02 CSS deduplication)

**Duplicate block A** (lines 202-206 — to be removed):
```css
.navbar-nav .nav-link {
  color: white !important;
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}
```

**Duplicate block B** (lines 268-274 — to be replaced with merged block):
```css
.navbar-nav .nav-link {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1rem;
  line-height: 1;
}
```

**Merged target block** (replaces block B at line 268; block A at line 202 is deleted):
```css
.navbar-nav .nav-link {
  color: white !important;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1rem;
  padding-right: 1rem !important;
  padding-left: 1rem !important;
  line-height: 1;
}
```

**Property ordering rule:** `padding` shorthand appears BEFORE `padding-right`/`padding-left` longhands so the `!important` longhands win the cascade.

**Kept untouched** (lines 283-286 — responsive override, NOT a duplicate):
```css
@media (max-width: 767px) {
  .navbar-nav .nav-link {
    justify-content: flex-start;
    padding: 0.7rem 1rem;
  }
}
```

---

### `src/components/About/Techstack.js` (component, STYLE-02 icon className)

**Analog:** `src/components/About/Toolstack.js` — exact same component structure; every `<img>` already has `className="tech-icon-images"`

**Reference pattern from Toolstack.js** (lines 20-22, repeated for every icon):
```jsx
<Col xs={4} md={2} className="tech-icons">
  <img src={Windows} alt="Windows" className="tech-icon-images" />
  <div className="tech-icons-text">Windows</div>
</Col>
```

**Current Techstack.js pattern** (lines 24-27, missing className — applies to all 16 `<img>` tags):
```jsx
<Col xs={4} md={2} className="tech-icons">
  <img src={Python} alt="Python" />
  <div className="tech-icons-text">Python</div>
</Col>
```

**Target Techstack.js pattern** (add `className="tech-icon-images"` to every `<img>`):
```jsx
<Col xs={4} md={2} className="tech-icons">
  <img src={Python} alt="Python" className="tech-icon-images" />
  <div className="tech-icons-text">Python</div>
</Col>
```

**All 16 `<img>` tags to update** (Techstack.js lines 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85):
`Python`, `numpy`, `Matplotlib`, `Pandas`, `C++`, `Julia`, `terminal`, `git`, `latex`, `javascript`, `Typescript`, `MATLAB`, `node`, `react`, `CSS`, `sql`

**CSS class being applied** (style.css lines 590-593):
```css
.tech-icon-images {
  height: 1.6rem;
  line-height: 1.6 !important;
}
```

---

### `src/components/Home/Home2.js` (component, CLEAN-01)

**Action:** Delete file. No analog needed.

**Verification:** `src/App.js` has zero references to `Home2` — confirmed by research. No other file edits required.

---

## Shared Patterns

### CSS @import position rule
**Source:** CSS spec / established pattern in `src/index.css` line 1
**Apply to:** `src/index.css` edit only
The `@import` must be the first line. Do not insert any CSS rule before it.

### `!important` cascade management
**Source:** `src/style.css` lines 202-206 and 268-274 (the conflict being fixed)
**Apply to:** `src/style.css` CLEAN-02 merge
When a shorthand (`padding`) and longhands (`padding-right`, `padding-left !important`) coexist in the same block, place the shorthand first so longhands win.

### icon component structure
**Source:** `src/components/About/Toolstack.js` lines 20-63
**Apply to:** `src/components/About/Techstack.js` STYLE-02 edit
Every icon tile is: `<Col xs={4} md={2} className="tech-icons">` containing `<img ... className="tech-icon-images" />` and `<div className="tech-icons-text">label</div>`. Techstack must match this exactly.

---

## No Analog Found

No files in this phase lack an analog. All four modified files have direct in-repo references.

| File | Status |
|------|--------|
| `src/index.css` | Analog: `src/style.css` lines 1-13 (shows the font declarations that need to be enabled) |
| `src/style.css` | Self-referencing: the kept media-query block at line 283 is the model for the merged block |
| `src/components/About/Techstack.js` | Analog: `src/components/About/Toolstack.js` (exact match) |
| `src/components/Home/Home2.js` | DELETE — no analog needed |

## Metadata

**Analog search scope:** `src/` — all component, CSS, and config files
**Files scanned:** `src/index.css`, `src/style.css` (lines 1-20, 195-290, 585-593), `src/components/About/Toolstack.js`, `src/components/About/Techstack.js`
**Pattern extraction date:** 2026-06-14
