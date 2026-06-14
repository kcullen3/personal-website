# Phase 2: Mobile Responsiveness - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-13
**Phase:** 2-Mobile Responsiveness
**Areas discussed:** Research pages scope, Breakpoint consolidation, About image mobile layout

---

## Research Pages Scope

| Option | Description | Selected |
|--------|-------------|----------|
| Yes — all Research pages too | Full audit of every page reachable from the nav, including Research sub-pages | ✓ |
| No — top-level pages only | Audit Home, About, Projects, Contact. Research sub-pages excluded | |

**User's choice:** All Research pages included.

---

| Option | Description | Selected |
|--------|-------------|----------|
| Fix everything found in this phase | Any overflow, broken layout, or unreadable text found at 375px or 768px gets fixed now | ✓ |
| Fix only the named requirements, log the rest | MOBL-01/02/03 only. Other issues found get logged for a future phase | |

**User's choice:** Fix everything found — phase is done when all pages pass, not just the three requirements.

---

## Breakpoint Consolidation

| Option | Description | Selected |
|--------|-------------|----------|
| 767px — normalize to 767px | Bootstrap's standard. Existing rules stay correct; only font-scale query at top changes | ✓ |
| 768px — normalize to 768px | Matches MOBL requirement test point exactly. Would change most existing rules | |
| Leave as-is | Don't touch existing queries. Less disruption but inconsistency stays | |

**User's choice:** 767px is canonical. Update the single `@media (max-width: 768px)` font-scale block to `767px`.

---

## About Image Mobile Layout

| Option | Description | Selected |
|--------|-------------|----------|
| Yes — stacked below is fine | Move 120px to .about-img in CSS. Stacked mobile layout stays as-is | ✓ |
| No — image needs additional mobile treatment | Beyond fixing the padding, the image needs changes on mobile | |

**User's choice:** Stacked layout is acceptable. Fix is purely moving the inline value to CSS.

---

| Option | Description | Selected |
|--------|-------------|----------|
| No constraint — desktop stays as it looks now | Move 120px to .about-img in style.css, remove inline style. Desktop identical | ✓ |
| Adjust the 120px value while we're in here | The value feels off or arbitrary | |

**User's choice:** Desktop unchanged. Value stays 120px, just moves to CSS class.

---

## Claude's Discretion

- Page audit order (can go alphabetically or by nav order)
- Whether to add `overflow-x: hidden` on `body`/`html` if that's the cleanest fix for any horizontal scroll found

## Deferred Ideas

None — discussion stayed within phase scope.
