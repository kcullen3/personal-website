# Keigan Cullen — Personal Website

## What This Is

A React-based personal portfolio site for Keigan Cullen, showcasing projects (robotics, trading, apps), research (gravitational waves), services offered, and contact info. Dark-themed with animated particles, deployed via Vercel.

## Core Value

A clean, fast, professional first impression that accurately represents Keigan's work and skills.

## Current Milestone: v1.0 Site Polish & Cleanup

**Goal:** Clean up the existing site — fix UI inconsistencies, improve mobile experience, remove dead code, and simplify where possible.

**Target features:**
- Fix font stack inconsistency (Lato/Nunito declared but never imported)
- Remove orphaned Home2.js "under development" code
- Fix tech icon sizing inconsistency between Techstack and Toolstack
- Fix About page mobile layout (hardcoded 120px padding on image column)
- Remove duplicate CSS declarations
- Mobile audit across all pages
- Keep particles everywhere, keep Research dropdown (more pages coming)

## Requirements

### Validated

(None yet — first milestone)

### Active

- [ ] Font stack resolved — one consistent, imported font system
- [ ] Home2.js dead code removed
- [ ] Tech icons visually consistent between Techstack and Toolstack
- [ ] About page profile image renders correctly on mobile
- [ ] CSS cleaned up — no duplicate declarations
- [ ] All pages verified responsive at 375px, 768px, 1280px

### Out of Scope

- New pages or features — this milestone is cleanup only
- Changing the color scheme / design system
- Removing Research dropdown — more items coming
- Removing particle animations — user preference to keep

## Context

- **Stack:** React 18, React Router v6, React Bootstrap, tsParticles, Vercel
- **Fonts imported:** Outfit + PT Mono (in index.css via Google Fonts)
- **Fonts declared but not imported:** Lato (body), Nunito (headings) — in style.css
- **Known issues found:** duplicate `.navbar-nav .nav-link` in style.css, About image col has `paddingTop: "120px"` hardcoded, Techstack uses inline SVG (no height class), Toolstack uses `tech-icon-images` class (1.6rem)
- **Orphaned component:** Home2.js renders "WEBSITE UNDER DEVELOPMENT" but is imported in App.js yet has no route

## Constraints

- **Tech stack:** React + Bootstrap only — no new libraries for this milestone
- **Scope:** Polish/cleanup only — no new features, no redesign

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Keep particles on all pages | User preference | — Pending |
| Keep Research as dropdown | More research pages planned | — Pending |
| Fix font import rather than remove Lato/Nunito | Both fonts used heavily in CSS | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-06-13 after milestone v1.0 initialization*
