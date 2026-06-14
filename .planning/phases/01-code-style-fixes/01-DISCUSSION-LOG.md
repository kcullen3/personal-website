# Phase 1: Code & Style Fixes - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-13
**Phase:** 1-code-style-fixes
**Areas discussed:** Font intent

---

## Font Intent

| Option | Description | Selected |
|--------|-------------|----------|
| Keep PT Mono for body | Import Lato + Nunito so they're available, but PT Mono stays as the body font. Headings will use Nunito. Current feel is preserved. | |
| Switch body to Lato | Remove PT Mono from index.css body, import Lato + Nunito. style.css intent wins — Lato for body, Nunito for headings. | ✓ |
| Claude's discretion | Planner picks the cleanest approach based on what's already in style.css. | |

**User's choice:** Switch body to Lato
**Notes:** The style.css font declarations (Lato body, Nunito headings) represent the intended font system. The PT Mono `!important` in index.css was overriding that intent. Fix is to remove the override and import the intended fonts.

---

## Claude's Discretion

- Order of merged CSS properties in the combined `.navbar-nav .nav-link` block
- Whether to keep Outfit import if it's used elsewhere (planner to check)
- Mechanical details of CLEAN-01 (delete Home2.js), CLEAN-02 (CSS merge), STYLE-02 (add class to Techstack img tags)

## Deferred Ideas

None — discussion stayed within phase scope.
