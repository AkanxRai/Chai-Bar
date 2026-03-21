# Claude Memory — Chai Bar Project
> Persistent observations and learnings. Append; never delete. Date-stamp every entry.

---

## Project Context

**Project:** Chai Bar website — experience-first café site, Indiranagar Bangalore  
**Owner:** User (akanks... based on Gmail tab seen in screenshots)  
**Started:** 2026-03-22  
**Repo:** TBD (not yet created)  
**Design Doc:** `docs/plans/chai-bar-website-design.md`  
**CLAUDE.md:** Project root — read at every session start

---

## Observations Log

### 2026-03-22 — Brainstorming Session

**User preferences observed:**
- Prefers thorough planning before any code — brainstormed fully before a single line
- Wants a single MD file that Claude Code can consume directly — "single source of truth" mindset
- Proactive about tooling — asked about ui-ux-pro-max unprompted, already has 7 plugins installed in Claude Code
- Has Claude Code set up with: code-review, frontend-design, playwright, ralph-loop, security-guidance, skill-judge, superpowers plugins
- Has MCP servers: Playwright (browser automation) + Claude Memory (get_observations)
- User's Claude Code has 27 skills total including brainstorming, marketing-ideas, marketing-psychology, web-design-guidelines, shadcn-ui

**Product decisions confirmed:**
- No payments
- No online ordering
- Goal = drive physical footfall, not digital transactions
- Full menu captured from physical menu photos — 100+ items, 20+ categories

**UI toolchain decision:**
- `ui-ux-pro-max` (GitHub: nextlevelbuilder/ui-ux-pro-max-skill) chosen for design system generation
- `frontend-design` chosen for creative execution
- These two must always be used together, in order
- `ui-ux-pro-max` not yet installed — user will install before Phase 0

**Audience confirmed:** Indiranagar locals + young professionals/college crowd + tourists  
**Visual direction confirmed:** Warm & cozy, earthy tones, textures — like the café interiors  
**Primary action:** Get excited → visit the café in person (not browse, not share, not find location)

**Content gaps remaining:**
- High-res photos (critical for hero)
- Brand origin story
- Hours of operation
- Instagram handle
- Google Business access
- Contact details
- 3–5 seed blog posts

**Key design insight:**
- "City Stories" blog is the biggest differentiator — mirrors the mural tagline, drives SEO, builds community. This is not an afterthought feature — it should be treated as a core content pillar from day one.

**Technical nuances to remember:**
- Chai Specials have M/L sizing — menu cards need size toggle, not static price
- "DBC Pastry" and "DBC Sundae" are the correct full item names — confirmed by user. Display as-is, no CMS description needed.
- ~70% veg items — strong filter + selling point for Bangalore audience
- Price range ₹59–₹479 — affordability badge useful for student/young professional segment

---

## Skill Usage Patterns (for this project)

| Task | Skill sequence |
|---|---|
| Any new UI component | uipro search → frontend-design → build → playwright → code-review |
| New page | writing-plans → tdd → build (with UI sequence above) → verification |
| Independent pages | dispatching-parallel-agents → subagent-driven-development |
| Phase completion | verification-before-completion → requesting-code-review → finishing-a-development-branch |
| Pre-deploy | security-guidance → verification-before-completion |

---

## Anti-Patterns to Avoid (for this project)

- ❌ Default shadcn/ui styling without Chai Bar theme tokens — will look like a SaaS app
- ❌ Generic AI fonts (Inter, Roboto, Space Grotesk) — must use Playfair + Dancing Script + DM Sans or uipro recommendation
- ❌ Purple gradients or cool-tone palettes — this is a warm earthy brand
- ❌ Dense, feature-heavy layouts — the vibe is unhurried and soulful
- ❌ Writing UI code before running uipro search
- ❌ Treating the blog as an afterthought — it's a core SEO and brand pillar
- ❌ Forgetting mobile-first — 70%+ discovery is mobile

---

## Phase Completion Log

### 2026-03-22 — Phase 0 Complete

- Next.js 14.2.35 + TypeScript + Tailwind 3 + shadcn/ui scaffolded
- Design tokens: baseline palette confirmed (chai-brown, cream, terracotta, muted-gold, charcoal, warm-white)
- Fonts: Playfair Display (brand), Dancing Script (script), DM Sans (body) via next/font
- Navbar + Footer built with TDD (9 passing tests)
- All 5 routes created: /, /menu, /stories, /about, /visit
- Vitest + React Testing Library configured
- ESLint configured (next/core-web-vitals)
- Code review passed — a11y improvements applied (aria-labels, semantic nav, focus states)
- Ready for Phase 1 (Homepage)

---

## Open Questions (resolve before/during Phase 0)

- [x] ~~What is DBC?~~ → "DBC Pastry" and "DBC Sundae" are the correct item names. Display as-is.
- [ ] Are there any seasonal/rotating specials not on the current menu?
- [ ] Does the café host events (open mic, etc.)? Affects Phase 2 scope.
- [ ] What is the Instagram handle?
- [ ] What are the exact hours of operation?
- [ ] Does the founder want to be featured on the About page?
- [ ] Any press/media mentions to feature?
