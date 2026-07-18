---
quick_id: 260718-nzu
description: Build out src/components/Projects/Projects.js as a real project index page
date: 2026-07-18
---

# Quick Task 260718-nzu: Build out Projects index page

## Task

Replace the "Content coming soon!" stub in `src/components/Projects/Projects.js` with a real
index page, mirroring the hardcoded-array-of-cards pattern already used in
`src/components/Research/Research.js`.

Do NOT touch `src/App.js` or `src/components/Navbar.js` — routing and nav exclusion are
intentional for now. This is a single-file change.

## Tasks

1. Rewrite `src/components/Projects/Projects.js`:
   - Keep the existing single-line file-header comment convention (e.g.
     `/* Index page listing all projects with links to detail pages */`) at the top of the file.
   - `import React from "react";`, `import { Container, Row, Col } from "react-bootstrap";`,
     `import Particle from "../Particle";`, `import { Link } from "react-router-dom";`,
     `import { AiOutlineArrowRight } from "react-icons/ai";` — same import set as
     `Research.js`.
   - Define a module-level `const PROJECTS = [...]` array (mirrors `Research.js`'s `PROJECTS`
     const) with exactly 3 entries, each `{ title, subtitle, description, link, available: true }`:
     - `{ title: "BackScratch", subtitle: "I scratch yours, you scratch mine.", description: "A local services marketplace connecting neighbors who need a hand with neighbors who can help — built and shipped as a live web app.", link: "/projects/backscratch", available: true }`
     - `{ title: "New Bedford Research & Robotics", subtitle: "Robotics Engineering, Rapid Prototyping & STEM Education", description: "3D design and rapid prototyping, AI development, and K-12 STEM education and mentorship — spanning the NBRR robotics program, the Torus project, and the Splinter toolhead system.", link: "/projects/robotics", available: true }`
     - `{ title: "Algorithmic Trading", subtitle: "Systematic Strategy Research & Backtesting", description: "Signal research, backtesting, and execution tooling for systematic trading strategies.", link: "/projects/algotrade", available: true }`
   - Component body: render `<Particle />` first (background, matches `Research.js`/`BackScratch.js`/`Robotics.js` convention), then a `Container fluid className="about-section"` wrapping:
     - An inner `<Container>` with `<h1 className="project-heading" style={{ paddingTop: "40px" }}>My <strong className="cyan">Projects</strong></h1>` and an intro `<p>` styled identically to `Research.js`'s intro paragraph (same inline style object: `rgba(255,255,255,0.7)` color, `Lato, sans-serif`, `var(--font-base)`, `marginTop: "-6px"`, `marginBottom: "40px"`), with copy along the lines of "Selected projects — from full-stack apps to robotics and research engineering."
     - A `<div style={{ padding: "0 12px" }}>` wrapping a `<Row className="g-4" style={{ marginBottom: "60px" }}>` that `.map()`s over `PROJECTS`, rendering one `<Col md={6} key={i}>` per project using the exact same card markup/inline-style structure as `Research.js` (bordered card div with title `<h2>`, subtitle `<p>`, description `<p>`, and a `robotics-download-btn` styled `<Link to={proj.link}>` with `AiOutlineArrowRight` reading "View Project"). Reuse the `robotics-download-btn` class exactly as `Research.js` does — do not invent new classes. Omit the `tags`/`robotics-highlights` block and the `date` line since these projects don't have that data; also omit the `available`-ternary unavailable branch since all 3 entries are `available: true` (keep the `available` field on the objects for parity/future-proofing, but the render can call `.map()` and always render the `Link` branch, or keep the ternary for consistency with `Research.js` — either is acceptable as long as all 3 cards render as clickable links).
     - Keep `export default Projects;` as the last line, matching `Research.js`/current file convention.
   - Do not import any image assets — mirror `Research.js`'s text-only card pattern (no `img`/thumbnail field), since a consistent hero image isn't available for all three projects.

## Verify

- `npm run build` compiles without errors.
- Visiting `/projects` directly (e.g. via URL bar, since it's not linked from the Navbar) renders 3 cards: BackScratch, New Bedford Research & Robotics, Algorithmic Trading.
- Each card's "View Project" link navigates to its existing detail route (`/projects/backscratch`, `/projects/robotics`, `/projects/algotrade`) without a 404.
- `src/App.js` and `src/components/Navbar.js` are unchanged (`git diff --stat` shows only `src/components/Projects/Projects.js`).
