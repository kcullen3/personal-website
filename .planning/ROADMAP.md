# Roadmap: Keigan Cullen — Personal Website

**Milestone:** v1.0 Site Polish & Cleanup
**Goal:** Clean up the site — fix font/icon inconsistencies, remove dead code, improve mobile layout
**Requirements:** 7 total
**Phases:** 2

## Phases

- [ ] **Phase 1: Code & Style Fixes** - Remove dead code and resolve visual inconsistencies (fonts, icon sizing, duplicate CSS)
- [ ] **Phase 2: Mobile Responsiveness** - Fix responsive layout issues and verify all pages at target breakpoints

## Phase Details

### Phase 1: Code & Style Fixes

**Goal**: The codebase is clean and visually consistent — no dead components, no duplicate styles, fonts load correctly, and icons are uniform in size
**Depends on**: Nothing (first phase)
**Requirements**: CLEAN-01, CLEAN-02, STYLE-01, STYLE-02
**Success Criteria** (what must be TRUE):

  1. Home2.js no longer exists in the project and App.js contains no import or reference to it
  2. style.css contains exactly one `.navbar-nav .nav-link` declaration block
  3. Lato and Nunito fonts load correctly in the browser (visible in DevTools Network tab as Google Fonts requests)
  4. Techstack icons render at the same visual height as Toolstack icons on the About page

**Plans**: 2 plans
Plans:

- [ ] 01-01-PLAN.md — Delete Home2.js dead code and fix font imports in index.css (CLEAN-01, STYLE-01)
- [ ] 01-02-PLAN.md — Merge duplicate CSS nav-link blocks and add icon className to Techstack (CLEAN-02, STYLE-02, D-06)

### Phase 2: Mobile Responsiveness

**Goal**: The About page image displays correctly on mobile and all pages are usable at 375px and 768px viewports
**Depends on**: Phase 1
**Requirements**: MOBL-01, MOBL-02, MOBL-03
**Success Criteria** (what must be TRUE):

  1. About page profile image column has no hardcoded `paddingTop: "120px"` inline style — padding is controlled by responsive CSS
  2. At 375px viewport: no page shows horizontal scroll, all text is readable, and the navbar opens/closes correctly
  3. At 768px viewport: all pages render with correct tablet layout and no broken elements

**Plans**: 3 plans

Plans:

- [ ] 02-01-PLAN.md — Normalize breakpoints to 767px and add .about-img + .nbrr-collage CSS rules (MOBL-01, MOBL-02, MOBL-03)
- [ ] 02-02-PLAN.md — Remove paddingTop inline style from About.js and replace NBRRCard inline grid with className (MOBL-01, MOBL-02)
- [ ] 02-03-PLAN.md — Apply conditional fixes for heading/Torus/ArtEngineering and human audit all routes at 375px + 768px (MOBL-01, MOBL-02, MOBL-03)

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Code & Style Fixes | 0/2 | Not started | - |
| 2. Mobile Responsiveness | 0/3 | Not started | - |
