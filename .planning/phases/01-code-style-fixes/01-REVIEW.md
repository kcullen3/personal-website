---
phase: 01-code-style-fixes
reviewed: 2026-06-14T00:00:00Z
depth: standard
files_reviewed: 5
files_reviewed_list:
  - src/index.css
  - src/style.css
  - src/components/About/Techstack.js
  - src/components/About/Toolstack.js
  - src/components/About/About.js
findings:
  critical: 0
  warning: 4
  info: 8
  total: 12
status: issues_found
---

# Phase 01: Code Review Report

**Reviewed:** 2026-06-14
**Depth:** standard
**Files Reviewed:** 5
**Status:** issues_found

## Summary

Five files reviewed: two CSS files and three React components for the About section. No security vulnerabilities or data-loss bugs found. The main issues are: a CSS `transition` property override that silently kills the intended hover effect, multiple places where raw hex color literals are used instead of the established CSS custom property tokens, a background gradient color mismatch between `index.css` and the `--background` token, trailing whitespace in JSX `className` strings, and whitespace-before-`>` in JSX closing tags.

---

## Warnings

### WR-01: Duplicate `transition` in `.tech-icons` — second declaration never applies

**File:** `src/style.css:561-564`
**Issue:** `.tech-icons` declares `transition` twice. The first at line 561 carries `!important`, which wins in the cascade. The second at line 564 (the granular per-property transition) does NOT carry `!important`, so it is always overridden. The intended fine-grained `outline-color 0.3s, outline-width 0.3s, transform 0.3s` transition never fires; instead the broader `all 0.4s ease 0s` runs for every hover.

```css
/* line 561 — wins due to !important */
transition: all 0.4s ease 0s !important;
/* line 564 — NEVER applies */
transition: outline-color 0.3s, outline-width 0.3s, transform 0.3s;
```

**Fix:** Remove the first `transition` declaration and keep only the specific one, adding `!important` to it:

```css
.tech-icons {
  /* ... other properties ... */
  transition: outline-color 0.3s, outline-width 0.3s, transform 0.3s !important;
}
```

---

### WR-02: Background gradient in `index.css` does not match `--background` token

**File:** `src/index.css:7`
**Issue:** The `body` gradient uses `rgb(27 20 41)` and `rgb(20 15 35)`. The declared `--background` token is `#0B0C1E` = `rgb(11 12 30)`. These are different colors. The page background will not match the `--background` token used by cards, navbar, preloader, scrollbar track, timeline nodes, etc., creating a visible gradient/flat-color mismatch on some browsers/zoom levels.

**Fix:** Either update the gradient to use the token (requires a fallback since gradients cannot directly use CSS variables as stop colors inline in `url()` but can in `linear-gradient`):

```css
body {
  background-image: linear-gradient(to left, #0B0C1E, #1A1B2E);
}
```

Or define the gradient once in `style.css` using the `--section-background-color` variable already defined there, and remove the `body` background from `index.css` entirely to keep a single source of truth.

---

### WR-03: `.cyan` and `.white` utility classes hard-code hex values instead of using design tokens

**File:** `src/style.css:63,66`
**Issue:** `.cyan` uses `#00E5FF !important` and `.white` uses `#FFFFFF !important`. The design token system on the same file defines `--accent1: #00E5FF` and `--text: #FFFFFF`. If a theme color ever changes, these utility classes will be missed.

```css
/* line 63 */
.cyan  { color: #00E5FF !important; }
/* line 66 */
.white { color: #FFFFFF !important; }
```

**Fix:**

```css
.cyan  { color: var(--accent1) !important; }
.white { color: var(--text) !important; }
```

---

### WR-04: Trailing whitespace inside `className` strings in `Toolstack.js`

**File:** `src/components/About/Toolstack.js:27,39,43`
**Issue:** Three `<Col>` elements have a trailing space inside the `className` string: `className="tech-icons "`. While browsers strip this safely, it indicates copy-paste sloppiness and would cause a string equality check on the className to fail.

```jsx
{/* line 27 */}
<Col xs={4} md={2} className="tech-icons ">
{/* line 39 */}
<Col xs={4} md={2} className="tech-icons ">
{/* line 43 */}
<Col xs={4} md={2} className="tech-icons ">
```

**Fix:** Remove the trailing space in all three instances:

```jsx
<Col xs={4} md={2} className="tech-icons">
```

---

## Info

### IN-01: `--secondary` token is identical to `--primary` — redundant variable

**File:** `src/style.css:19-20`
**Issue:** `--secondary: #9B72CF` and `--primary: #9B72CF` are the same value. The `--secondary` token is never used for a distinct purpose. It is used in `.btn-primary:hover` border-color but adds no distinction. This creates confusion about whether a meaningful visual hierarchy was intended.

**Fix:** If `--secondary` is meant to be distinct, assign a different color. If it is not needed, remove it and replace the one usage (`src/style.css:524`) with `var(--primary)`.

---

### IN-02: Multiple raw `#0B0C1E` hex literals should use `var(--background)`

**File:** `src/style.css:83,103,185,623,695`
**Issue:** The `--background: #0B0C1E` token is defined on line 16, but the same hex is repeated as a raw literal in: `#preloader` background-color (line 83), `::-webkit-scrollbar-track` background (line 103), mobile `.navbar` background-color (line 185), `.dropdown-menu` background-color (line 623), and `.timeline-node` background (line 695). If the background color changes, these literals will be missed.

**Fix:** Replace all instances with `var(--background)`:

```css
#preloader            { background-color: var(--background); }
::-webkit-scrollbar-track { background: var(--background); }
.navbar (mobile)      { background-color: var(--background) !important; }
.dropdown-menu        { background-color: var(--background) !important; }
.timeline-node        { background: var(--background); }
```

---

### IN-03: Whitespace before `>` in JSX closing tags in `About.js`

**File:** `src/components/About/About.js:132-135`
**Issue:** Four closing tags have a space before the `>`: `</ul >`, `</Col >`, `</Row >`, `</Container >`. This is technically valid JSX but is non-standard formatting that no formatter produces and will be flagged by any JSX linter.

**Fix:**

```jsx
            </ul>
          </Col>
        </Row>
      </Container>
```

---

### IN-04: Inconsistent import identifier casing in `Techstack.js`

**File:** `src/components/About/Techstack.js:16-17`
**Issue:** `numpy` and `matplotlib` are imported with lowercase identifiers while every other SVG import in the same file uses PascalCase (`Python`, `Git`, `Julia`, etc.). This is purely a consistency issue.

```js
import numpy from "../../Assets/TechIcons/numpy.svg";
import matplotlib from "../../Assets/TechIcons/graph.svg";
```

**Fix:**

```js
import Numpy from "../../Assets/TechIcons/numpy.svg";
import Matplotlib from "../../Assets/TechIcons/graph.svg";
```

Update the corresponding `src` references on lines 29 and 33 to match.

---

### IN-05: `--background_lighter` token uses underscore instead of hyphen

**File:** `src/style.css:17`
**Issue:** All other custom properties in the file use hyphens as separators (`--accent1_dull` is also affected). CSS convention is hyphen-delimited (`--background-lighter`, `--accent1-dull`). While functionally valid, it mixes naming conventions within the same token set.

**Fix:** Standardize to hyphens: `--background-lighter`, `--accent1-dull`, and update all usages. (Low priority — only do this as part of a broader CSS token cleanup.)

---

### IN-06: `grid-template-columns: 1fr 1fr 1fr 1fr` should use `repeat()`

**File:** `src/style.css:1008`
**Issue:** `grid-template-columns: 1fr 1fr 1fr 1fr` is verbose. The idiomatic CSS is `repeat(4, 1fr)`.

**Fix:**

```css
.nbrr-collage {
  grid-template-columns: repeat(4, 1fr);
}
```

---

### IN-07: Double blank line between imports and function in `Toolstack.js`

**File:** `src/components/About/Toolstack.js:14-15`
**Issue:** Two blank lines separate the last import from the function declaration. Convention is one blank line.

**Fix:** Remove one of the two blank lines.

---

### IN-08: `AiOutlineTwitter` icon used for an X (Twitter) link

**File:** `src/components/About/About.js:109`
**Issue:** The social link at line 104 points to `https://x.com/KeiganCullen` (X, formerly Twitter) but uses `<AiOutlineTwitter />`. This is only a naming/icon accuracy issue — the Twitter bird icon may look outdated if users recognize the X brand.

**Fix:** If `react-icons` has an X/Twitter icon (`FaXTwitter` in `fa6`), consider switching. Otherwise, this is acceptable as-is and can be left for a later icon refresh.

---

_Reviewed: 2026-06-14_
_Reviewer: Claude (gsd-code-reviewer)_
_Depth: standard_
