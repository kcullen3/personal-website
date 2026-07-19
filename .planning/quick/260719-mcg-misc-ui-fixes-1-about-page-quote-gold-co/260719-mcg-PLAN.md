---
phase: quick-260719-mcg
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - src/components/About/AboutCard.js
  - src/components/Research/MyPsychicEdge/MyPsychicEdgeCard.js
  - src/components/Projects/BackScratch/BackScratchCard.js
autonomous: true
requirements: [QUICK-260719-mcg]

must_haves:
  truths:
    - "About page bio quote renders in gold, matching the My Psychic Edge quote"
    - "My Psychic Edge card shows the shared hover highlight (scale + cyan glow) on hover"
    - "BackScratch card shows the shared hover highlight (scale + cyan glow) on hover"
  artifacts:
    - path: "src/components/About/AboutCard.js"
      provides: "Gold-styled bio quote"
      contains: "var(--accent2)"
    - path: "src/components/Research/MyPsychicEdge/MyPsychicEdgeCard.js"
      provides: "MPE card wrapper with shared hover class"
      contains: "project-card-view"
    - path: "src/components/Projects/BackScratch/BackScratchCard.js"
      provides: "BackScratch card wrapper with shared hover class"
      contains: "project-card-view"
  key_links:
    - from: "src/components/Research/MyPsychicEdge/MyPsychicEdgeCard.js"
      to: ".project-card-view:hover (src/style.css)"
      via: "className on wrapper div"
      pattern: "className=\"project-card-view\""
    - from: "src/components/Projects/BackScratch/BackScratchCard.js"
      to: ".project-card-view:hover (src/style.css)"
      via: "className on wrapper div"
      pattern: "className=\"project-card-view\""
---

<objective>
Two miscellaneous UI fixes on the personal website:
1. Style the About page bio quote gold, matching the existing gold pull-quote on the My Psychic Edge page.
2. Add the site's shared card hover/highlight effect to the My Psychic Edge and BackScratch cards, which currently lack it.

Purpose: Visual consistency — quotes use one gold accent everywhere, and all cards share the same hover affordance.
Output: Edits to three existing components, reusing existing CSS variables and the existing `.project-card-view` hover class (no new CSS).
</objective>

<execution_context>
@$HOME/.claude/get-shit-done/workflows/execute-plan.md
</execution_context>

<context>
@src/components/About/AboutCard.js
@src/components/Research/MyPsychicEdge/MyPsychicEdgeCard.js
@src/components/Projects/BackScratch/BackScratchCard.js

# Reference only — do NOT edit these:
# src/style.css lines 507-520 define .project-card-view and .project-card-view:hover
#   (box-shadow: 0 0 18px 4px rgba(155,114,207,0.45); hover: scale(1.02) + cyan glow 0 0 28px 6px rgba(0,229,255,0.6))
# CSS vars: --accent1 = #00E5FF (cyan), --accent2 = #FFD700 (gold)
# MyPsychicEdgeCard.js line 78 shows the gold quote pattern: color: "var(--accent2)", fontFamily: "Lato, sans-serif"
# ServiceCard.js applies the hover via className="project-card-view" — same approach reused here
</context>

<tasks>

<task type="auto">
  <name>Task 1: Style About page bio quote gold</name>
  <files>src/components/About/AboutCard.js</files>
  <action>In the bio quote paragraph (currently `<p style={{ color: "var(--accent1)", marginTop: "16px" }}><em>{bioQuote}</em></p>`, around line 80), change the text color from `var(--accent1)` (cyan) to `var(--accent2)` (gold) and add `fontFamily: "Lato, sans-serif"` to the inline style so it matches the gold pull-quote on MyPsychicEdgeCard.js (line 78). Keep `marginTop: "16px"`. Do NOT touch the `blockquote-footer` author line. This reuses the existing gold accent variable — do not introduce a new color.</action>
  <verify>
    <automated>grep -n 'var(--accent2)' src/components/About/AboutCard.js</automated>
  </verify>
  <done>The bio quote `<p>` uses `color: "var(--accent2)"` and `fontFamily: "Lato, sans-serif"`; no remaining `var(--accent1)` on that quote paragraph.</done>
</task>

<task type="auto">
  <name>Task 2: Add shared hover highlight to MPE and BackScratch cards</name>
  <files>src/components/Research/MyPsychicEdge/MyPsychicEdgeCard.js, src/components/Projects/BackScratch/BackScratchCard.js</files>
  <action>Both card components render their content inside a plain wrapper `<div style={{ border..., borderRadius: "16px", boxShadow..., backgroundColor..., padding: "16px", marginBottom: "40px" }}>` with no className (MyPsychicEdgeCard.js ~line 21, BackScratchCard.js ~line 28). Add `className="project-card-view"` to each of these two wrapper divs, keeping the existing inline `style` object intact. This reuses the site's shared card class (defined in src/style.css) exactly as ServiceCard.js does, giving both cards the same base glow plus the `:hover` scale(1.02) + cyan glow effect that other cards have. Do NOT write any new CSS and do NOT modify src/style.css. The class's `!important` box-shadow/background/opacity will layer over the inline styles — this is the intended shared-card appearance.</action>
  <verify>
    <automated>grep -c 'className="project-card-view"' src/components/Research/MyPsychicEdge/MyPsychicEdgeCard.js src/components/Projects/BackScratch/BackScratchCard.js</automated>
  </verify>
  <done>Each of the two card files contains exactly one `className="project-card-view"` on its top-level wrapper div; src/style.css is unchanged.</done>
</task>

</tasks>

<verification>
- `npm run build` (or `npm start`) compiles with no errors.
- About page bio quote renders gold (#FFD700), matching the My Psychic Edge pull quote.
- Hovering the My Psychic Edge card and the BackScratch card produces the same scale-up + cyan glow as other site cards.
</verification>

<success_criteria>
- About bio quote is gold via `var(--accent2)` + Lato font.
- MyPsychicEdgeCard and BackScratchCard wrapper divs carry `className="project-card-view"` and exhibit the shared hover highlight.
- No new CSS added; src/style.css untouched; only the three component files changed.
</success_criteria>

<output>
Create `.planning/quick/260719-mcg-misc-ui-fixes-1-about-page-quote-gold-co/260719-mcg-SUMMARY.md` when done.
</output>
