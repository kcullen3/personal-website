---
phase: 01
slug: code-style-fixes
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-06-14
---

# Phase 01 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None — no jest/vitest/pytest configured in this project |
| **Config file** | none |
| **Quick run command** | `npm run build` (compilation gate only) |
| **Full suite command** | `npm run build` + manual browser checks |
| **Estimated runtime** | ~30 seconds (build) + 2 min manual |

---

## Sampling Rate

- **After every task commit:** Run `npm run build`
- **After every plan wave:** Run `npm run build` + grep assertions
- **Before `/gsd-verify-work`:** Full suite (build + manual browser + grep checks) must be green
- **Max feedback latency:** ~30 seconds (build only)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 01-CLEAN-01 | 01 | 1 | CLEAN-01 | — | N/A | manual+cmd | `ls src/components/Home/Home2.js` should exit non-zero | ✅ | ⬜ pending |
| 01-CLEAN-02 | 01 | 1 | CLEAN-02 | — | N/A | automated | `grep -c "^\.navbar-nav .nav-link {" src/style.css` → expect 1 | ✅ | ⬜ pending |
| 01-STYLE-01 | 01 | 2 | STYLE-01 | — | N/A | manual | DevTools Network tab filter "fonts.gstatic.com" shows Lato + Nunito | ✅ | ⬜ pending |
| 01-STYLE-02 | 01 | 2 | STYLE-02 | — | N/A | automated | `grep -c 'className="tech-icon-images"' src/components/About/Techstack.js` → expect 16 | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

None — existing project structure covers all verification needs. No test framework installation required.

*All automated verifications use grep-based assertions on known file locations.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Home2.js deleted from filesystem | CLEAN-01 | File deletion not testable via build | `ls src/components/Home/Home2.js` returns error; App.js grep finds no Home2 reference |
| Lato + Nunito fonts load in browser | STYLE-01 | Font loading requires browser network tab | Open DevTools → Network → filter "fonts.gstatic.com" → reload — Lato and Nunito appear |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or manual instruction
- [ ] Sampling continuity: `npm run build` after each commit
- [ ] Wave 0 covers all MISSING references — N/A (no test framework)
- [ ] No watch-mode flags
- [ ] Feedback latency < 60s (build gate)
- [ ] `nyquist_compliant: true` set in frontmatter when all tasks verified

**Approval:** pending
