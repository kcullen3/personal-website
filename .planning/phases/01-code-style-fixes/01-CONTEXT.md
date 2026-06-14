# Phase 1: Code & Style Fixes - Context

**Gathered:** 2026-06-13
**Status:** Ready for planning

<domain>
## Phase Boundary

Remove the orphaned Home2.js file, merge duplicate `.navbar-nav .nav-link` CSS blocks, fix the font import system so Lato (body) and Nunito (headings) actually render, and add `className="tech-icon-images"` to Techstack icons for height parity with Toolstack.

No new features. No redesign. Pure cleanup and consistency fixes.

</domain>

<decisions>
## Implementation Decisions

### Font System (STYLE-01)
- **D-01:** Switch body font to Lato. Remove `body { font-family: "PT Mono" !important }` from `src/index.css` so `style.css`'s `body { font-family: "Lato" }` takes effect. Add a Google Fonts `@import` for Lato + Nunito to `src/index.css` (alongside or replacing the current Outfit + PT Mono import). After fix: body = Lato, headings = Nunito, PT Mono removed from body.
- **D-02:** The Outfit and PT Mono imports in `index.css` can be removed if they are no longer referenced anywhere in style.css or component CSS. Planner should verify before removing.

### Dead Code Removal (CLEAN-01)
- **D-03:** Delete `src/components/Home/Home2.js`. App.js already has no import or reference to it — no App.js edit required. Just delete the file.

### CSS Deduplication (CLEAN-02)
- **D-04:** Merge the two standalone `.navbar-nav .nav-link` blocks in `src/style.css` (lines 202 and 268) into one block containing all unique properties. Preserve current visual behavior. The media query override at line 283 inside `@media (max-width: 767px)` is correct and should remain.

### Icon Sizing (STYLE-02)
- **D-05:** Add `className="tech-icon-images"` to every `<img>` tag in `src/components/About/Techstack.js`. This matches the pattern already used in Toolstack.js and applies the 1.6rem height via `.tech-icon-images` in style.css.
- **D-06:** The new icons already staged/untracked (numpy, matplotlib/graph, matlab, typescript in Techstack; n8n and sentry in Toolstack) should be committed as part of this phase. They are in-progress work related to STYLE-02.

### Claude's Discretion
- Order of merged CSS properties in the combined `.navbar-nav .nav-link` block
- Whether to keep Outfit import if it's used elsewhere (planner to check)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

No external specs — requirements fully captured in decisions above.

### Project Requirements
- `.planning/REQUIREMENTS.md` — Phase 1 requirements: CLEAN-01, CLEAN-02, STYLE-01, STYLE-02

### Roadmap
- `.planning/ROADMAP.md` — Phase 1 success criteria and goal

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/components/About/Toolstack.js` — reference implementation for icon pattern: uses `className="tech-icon-images"` on every `<img>`. Techstack should match exactly.
- `.tech-icon-images` CSS class (style.css line 590) — sets `height: 1.6rem; line-height: 1.6`. This is the sizing target.

### Established Patterns
- Google Fonts import lives in `src/index.css` via `@import url(...)` — add Lato + Nunito to the same file.
- `src/style.css` line 3: `body { font-family: "Lato", sans-serif; }` — this is the intent; index.css currently overrides it with `!important`.
- `src/style.css` lines 6–13: `h1–h6 { font-family: "Nunito", sans-serif; }` — this is the intent for headings.

### Integration Points
- `src/index.css` body declaration must be changed (not just added to) — removing `!important` or removing the PT Mono rule entirely.
- New SVG files in `src/Assets/TechIcons/` (numpy.svg, graph.svg, Matlab.svg, typescript.svg, n8n.svg, sentry.svg) are untracked — plan should stage and commit them.

</code_context>

<specifics>
## Specific Ideas

No specific requirements — open to standard approaches for the mechanical fixes.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 1-code-style-fixes*
*Context gathered: 2026-06-13*
