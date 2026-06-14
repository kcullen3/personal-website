# Phase 1: Code & Style Fixes - Research

**Researched:** 2026-06-14
**Domain:** React / CSS — dead code removal, CSS deduplication, font import, icon className
**Confidence:** HIGH

## Summary

This phase is pure mechanical cleanup with no new dependencies. All four requirements are single-file or two-file edits with exact locations confirmed in the codebase. No external library research is needed. All findings below come from direct file inspection of the repo.

The only judgment call is whether to keep the Outfit `@import` in `index.css`. Grep confirms Outfit and PT Mono appear ONLY in `index.css` — not in `style.css` or any component file — so both can be safely dropped.

**Primary recommendation:** Four independent edits, committed together. No new packages, no dependencies, no migrations.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Switch body font to Lato. Remove `body { font-family: "PT Mono", monospace !important }` from `src/index.css`. Add Google Fonts `@import` for Lato + Nunito to `src/index.css`. After fix: body = Lato, headings = Nunito, PT Mono removed from body.
- **D-02:** The Outfit and PT Mono imports in `index.css` can be removed if no longer referenced elsewhere. Planner should verify before removing. (Verified: safe to remove — see Standard Stack section.)
- **D-03:** Delete `src/components/Home/Home2.js`. App.js has no import or reference — no App.js edit required.
- **D-04:** Merge the two standalone `.navbar-nav .nav-link` blocks in `src/style.css` (lines 202 and 268) into one block. Preserve current visual behavior. The media query override at line 283 inside `@media (max-width: 767px)` is correct and should remain.
- **D-05:** Add `className="tech-icon-images"` to every `<img>` tag in `src/components/About/Techstack.js`. Matches the pattern in Toolstack.js.
- **D-06:** New SVG icons already staged/untracked (numpy, matplotlib/graph, Matlab, typescript in Techstack; n8n and sentry in Toolstack) should be committed as part of this phase.

### Claude's Discretion
- Order of merged CSS properties in the combined `.navbar-nav .nav-link` block.
- Whether to keep Outfit import if used elsewhere (resolved: safe to remove).

### Deferred Ideas (OUT OF SCOPE)
- None.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| CLEAN-01 | Home2.js removed along with its import in App.js | File confirmed at `src/components/Home/Home2.js`. App.js has zero references — deletion is the only action. |
| CLEAN-02 | Duplicate `.navbar-nav .nav-link` CSS declaration removed from style.css | Two standalone blocks at lines 202 and 268. Media-query block at line 283 is separate and must be kept. |
| STYLE-01 | Lato and Nunito imported via Google Fonts in index.css | index.css currently imports Outfit + PT Mono and overrides body with PT Mono `!important`. Lato and Nunito are in style.css but never imported. |
| STYLE-02 | Techstack icon images use `tech-icon-images` class for consistent height | 16 `<img>` tags in Techstack.js have no className. Toolstack.js is the reference implementation. |
</phase_requirements>

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Dead code removal (CLEAN-01) | Frontend source | — | File delete only; no runtime state |
| CSS deduplication (CLEAN-02) | Frontend source | — | Single file edit in style.css |
| Font loading (STYLE-01) | Browser / Client | Frontend source | Google Fonts CDN request driven by @import in index.css |
| Icon sizing (STYLE-02) | Browser / Client | Frontend source | CSS class applied via JSX className prop |

## Standard Stack

### Core (all already in project — no installs)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| React | (existing) | JSX component edits | Project already uses React |
| CSS (plain) | — | style.css and index.css edits | No preprocessor in use |
| Google Fonts CDN | — | Lato + Nunito delivery | Already established pattern in project |

### No New Packages Required

This phase installs nothing. All changes are file edits.

**D-02 verification (Outfit / PT Mono removal):** [VERIFIED: direct grep of src/] Neither "Outfit" nor "PT Mono" appear anywhere in `src/style.css` or any component file. They appear only in `src/index.css` lines 1 and 5. Safe to remove the entire existing `@import` line and replace with Lato + Nunito.

## Package Legitimacy Audit

No external packages are installed in this phase. Section not applicable.

## Architecture Patterns

### System Architecture Diagram

```
Browser request
      |
      v
index.css  -->  @import Google Fonts (Lato + Nunito)   [STYLE-01 fix here]
      |
      v
style.css  -->  body { font-family: "Lato" }            [already correct]
               h1-h6 { font-family: "Nunito" }          [already correct]
               .navbar-nav .nav-link { ... }            [CLEAN-02: merge lines 202+268]
               .tech-icon-images { height: 1.6rem }     [STYLE-02: class already exists]
      |
      v
React components
  Techstack.js  -->  <img className="tech-icon-images"> [STYLE-02 fix here — 16 tags]
  Home2.js      -->  DELETE                             [CLEAN-01 fix here]
```

### Recommended Project Structure (unchanged)

```
src/
├── index.css           # Fix: swap @import + remove PT Mono body override
├── style.css           # Fix: merge duplicate .navbar-nav .nav-link blocks
├── components/
│   ├── Home/
│   │   ├── Home.js     # Untouched
│   │   └── Home2.js    # DELETE this file
│   └── About/
│       ├── Techstack.js  # Fix: add className="tech-icon-images" to all <img>
│       └── Toolstack.js  # Reference only — do not change
└── Assets/TechIcons/   # New SVGs already present — stage for commit
```

### Pattern 1: Google Fonts @import

**What:** Replace the Outfit+PT Mono import with a Lato+Nunito import.
**When to use:** Whenever adding a Google Font to the project.

```css
/* Source: direct inspection of src/index.css + fonts.google.com URL format */

/* BEFORE (current index.css line 1): */
@import url("https://fonts.googleapis.com/css2?family=Outfit&family=PT+Mono&display=swap");

/* AFTER: */
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Nunito:wght@300;400;600;700&display=swap");
```

### Pattern 2: Merged .navbar-nav .nav-link block

**What:** Combine lines 202–206 and lines 268–274 into one canonical block. Properties from both blocks are unioned; where both define the same property, the line-268 value takes precedence (it appears later and has more specificity intent).

**Current block at line 202:**
```css
.navbar-nav .nav-link {
  color: white !important;
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}
```

**Current block at line 268:**
```css
.navbar-nav .nav-link {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1rem;
  line-height: 1;
}
```

**Merged result (planner's discretion on property order — Claude's Discretion):**
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

Note: The media query block at line 283 (`@media (max-width: 767px) { .navbar-nav .nav-link { ... } }`) is a separate override and MUST remain untouched.

### Pattern 3: Techstack className addition

**What:** Add `className="tech-icon-images"` to every `<img>` in Techstack.js.
**Reference:** Toolstack.js — every `<img>` already follows this exact pattern.

```jsx
{/* Source: direct inspection of Toolstack.js */}
{/* BEFORE (current Techstack.js): */}
<img src={Python} alt="Python" />

{/* AFTER: */}
<img src={Python} alt="Python" className="tech-icon-images" />
```

There are 16 `<img>` tags in Techstack.js — all need this change.

### Anti-Patterns to Avoid

- **Removing the media-query `.navbar-nav .nav-link` block at line 283:** This is a responsive override, not a duplicate. The duplicates are lines 202 and 268 only.
- **Editing App.js for CLEAN-01:** App.js already has no import or reference to Home2.js. Only the file deletion is required.
- **Adding weight variants to the Lato/Nunito @import URL that aren't used:** Keep the import lean. The weights shown in Pattern 1 above cover the declared uses in style.css.
- **Using `@import` after other rules in index.css:** CSS `@import` must appear before all other rules.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Font loading | Local font files or base64 embeds | Google Fonts CDN @import | Already established project pattern; zero build complexity |
| Icon sizing | Per-icon inline `style={{height: "1.6rem"}}` on each img | `.tech-icon-images` CSS class | Class already exists in style.css at line 590; Toolstack already uses it |

## Runtime State Inventory

Not applicable. This is a greenfield cleanup phase with no renames, migrations, or stored data changes.

## Common Pitfalls

### Pitfall 1: Padding shorthand vs. longhand conflict in merged CSS block
**What goes wrong:** The line-202 block uses `padding-right` and `padding-left` with `!important`; the line-268 block uses the `padding` shorthand without `!important`. When merged, order matters — if `padding` shorthand appears after the longhands, it overrides them.
**Why it happens:** CSS cascade: last declaration wins for same-specificity rules.
**How to avoid:** In the merged block, place the `padding` shorthand BEFORE `padding-right` and `padding-left`, so the longhands (with `!important`) win.
**Warning signs:** Nav link left/right padding changes visually after merge.

### Pitfall 2: Google Fonts @import must be first in index.css
**What goes wrong:** If any CSS rule appears before `@import`, browsers silently ignore the import.
**Why it happens:** CSS spec requires `@import` at the top of the file.
**How to avoid:** The replacement `@import` line must be line 1 of index.css.

### Pitfall 3: Missing `<img>` tags in Techstack.js count
**What goes wrong:** Manually counting 16 `<img>` tags and missing one leaves one icon unsized.
**Why it happens:** Copy-paste editing can skip a tag.
**How to avoid:** After editing, verify with a grep count: `grep -c '<img' src/components/About/Techstack.js` should return 16. Then verify all 16 have `className="tech-icon-images"`.

## Code Examples

### index.css after fix
```css
/* Source: direct inspection of src/index.css */
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Nunito:wght@300;400;600;700&display=swap");

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(to left, rgb(27 20 41), rgb(20 15 35));
}
```

(The `font-family: "PT Mono", monospace !important` line is deleted. The `body` rule in style.css line 3 (`font-family: "Lato", sans-serif`) then takes effect.)

## State of the Art

No framework changes. This is CSS/JSX cleanup only.

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Outfit + PT Mono font import | Lato + Nunito (matches style.css declarations) | This phase | Body and heading fonts visually correct |
| Two `.navbar-nav .nav-link` blocks | One merged block | This phase | No visual change, cleaner CSS |
| Techstack `<img>` without className | `className="tech-icon-images"` | This phase | Icon heights match Toolstack |

## Assumptions Log

All claims verified by direct file inspection. No assumed claims.

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| — | — | — | — |

**All claims in this research were verified by direct grep and file reads against the repo. No user confirmation needed.**

## Open Questions

None. All decisions are locked and all file locations are confirmed.

## Environment Availability

Step 2.6: SKIPPED — no external dependencies. All edits are file changes within the existing React project. No CLI tools, databases, or services required.

## Validation Architecture

### Test Framework

No test framework is configured in this project. [VERIFIED: direct inspection — no jest.config, vitest.config, pytest.ini, or test/ directory found.]

Manual browser verification is the appropriate validation method for this phase.

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| CLEAN-01 | Home2.js deleted, no App.js reference | manual | `ls src/components/Home/Home2.js` should return error | N/A |
| CLEAN-02 | Exactly one `.navbar-nav .nav-link` standalone block | automated | `grep -c "^\.navbar-nav .nav-link {" src/style.css` — expect 1 | N/A |
| STYLE-01 | Lato + Nunito load in browser | manual | DevTools Network tab filter "fonts.gstatic.com" | N/A |
| STYLE-02 | All Techstack imgs have className | automated | `grep -c 'className="tech-icon-images"' src/components/About/Techstack.js` — expect 16 | N/A |

### Wave 0 Gaps

None — no test framework needed for this cleanup phase. Verification is grep-based and manual browser check.

## Security Domain

No security surface introduced. No auth, no HTTP endpoints, no user data, no form inputs. Section not applicable.

## Sources

### Primary (HIGH confidence — direct file inspection)

- `src/index.css` — current font import and body override confirmed
- `src/style.css` — duplicate .navbar-nav .nav-link blocks at lines 202, 268; media-query block at 283; .tech-icon-images at line 590; body Lato at line 3; h1-h6 Nunito at line 12
- `src/components/About/Techstack.js` — 16 `<img>` tags, none have className
- `src/components/About/Toolstack.js` — reference implementation with className="tech-icon-images"
- `src/components/Home/Home2.js` — file exists, unused "under development" component
- `src/App.js` — grep confirmed zero references to Home2
- Whole-repo grep — "Outfit" and "PT Mono" appear only in index.css

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — no new packages; all changes are file edits in confirmed locations
- Architecture: HIGH — direct inspection of every affected file
- Pitfalls: HIGH — all pitfalls derived from the actual code (padding shorthand conflict, @import position rule, img count)

**Research date:** 2026-06-14
**Valid until:** Until any of the four affected files change
