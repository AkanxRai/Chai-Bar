# CLAUDE.md — Chai Bar Website Project

> This file is read automatically by Claude Code at the start of every session.
> It contains project context, mandatory workflow rules, and memory anchors.

---

## 📁 Project Root File Structure

> All three core files live directly in the project root. Do not move them into subdirectories.

```
chai-bar/                          ← project root
├── CLAUDE.md                      ← THIS FILE — auto-read by Claude Code each session
├── chai-bar-website-design.md     ← full design spec, page-by-page, complete menu data
├── claude-memory.md               ← persistent learnings, append after every session
├── package.json                   ← created in Phase 0
├── next.config.js                 ← created in Phase 0
├── tailwind.config.js             ← created in Phase 0
├── src/                           ← app source code
└── public/                        ← static assets (images, fonts)
```

**At the start of every session, Claude Code must:**
1. Read `CLAUDE.md` (auto)
2. Read `chai-bar-website-design.md` (full spec + menu data)
3. Read `claude-memory.md` (learnings from previous sessions)
4. Check the Phase Status Tracker below before doing anything

---

## Project Identity

**Project:** Chai Bar — Official Website  
**Type:** Experience-first café website (no payments, no ordering)  
**Location:** Indiranagar, Bangalore  
**Stack:** Next.js 14 · Tailwind CSS · shadcn/ui · Sanity CMS · Vercel  
**Design doc:** `chai-bar-website-design.md` ← full spec, lives in project root  
**Memory file:** `claude-memory.md` ← persistent learnings, lives in project root  
**Primary goal:** Make visitors *feel* Chai Bar emotionally before they walk in.

---

## Mandatory Workflow Rules

### 🎨 UI Work — Always follow this order, no exceptions

```
1. uipro search "<component context>"     ← MUST run first, every time
2. Read output → confirm/update tokens    ← don't skip this
3. Invoke frontend-design skill           ← creative execution
4. Build component
5. playwright screenshot (mobile + desktop)
6. superpowers:requesting-code-review
```

**Never write UI code without running `uipro search` first.**  
The design system is systematic — `ui-ux-pro-max` catches anti-patterns before they're built.

### 🧪 Code Work — TDD always
- `superpowers:test-driven-development` before any implementation
- `superpowers:verification-before-completion` before marking anything done
- `superpowers:requesting-code-review` after each feature/page

### 🤖 Parallel Work — Use agents for independent tasks
- Menu page + Blog page can always be built in parallel
- `superpowers:dispatching-parallel-agents` for Phase 3 onwards

---

## Design Tokens (baseline — uipro output overrides these)

```css
--chai-brown:    #5C3317
--cream:         #F5ECD7
--terracotta:    #C1440E
--muted-gold:    #C9A84C
--charcoal:      #2A2A2A
--warm-white:    #FAF6EF
--font-brand:    'Playfair Display'
--font-script:   'Dancing Script'
--font-body:     'DM Sans'
```

---

## Skills & Plugins Reference

| Tool | Purpose | When |
|---|---|---|
| `ui-ux-pro-max` | Design system generator | Before ANY UI work |
| `frontend-design` | Creative UI execution | Every component |
| `shadcn-ui` | Component base layer | Layout, cards, tabs, badges |
| `playwright` | Visual + browser testing | After each phase |
| `code-review` | Quality gate | After each page |
| `security-guidance` | Security audit | Pre-deployment |
| `superpowers:writing-plans` | Phase planning | Start of each phase |
| `superpowers:dispatching-parallel-agents` | Parallel builds | Phase 3+ |

---

## Project Status Tracker

Update this section as phases complete.

- [x] **Phase 0** — Design system bootstrap + project scaffold
- [x] **Phase 1** — Homepage (Hero, Why Chai Bar, Menu Teaser, Gallery)
- [x] **Phase 2** — Menu page (full, with filters + M/L toggle)
- [x] **Phase 3** — Blog (City Stories) + About + Visit pages
- [ ] **Phase 4** — Reviews, Instagram feed, Contact form
- [ ] **Phase 5** — Polish, SEO, Analytics, Security, Deploy

---

## Key Decisions Already Made

| Decision | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 | SSG = fast, SEO-friendly, Vercel-native |
| Styling | Tailwind + shadcn/ui | Rapid build, accessible base, customisable |
| CMS | Sanity.io | Café staff can update menu without touching code |
| Design system | ui-ux-pro-max + frontend-design | Systematic + creative, neither alone is enough |
| Hosting | Vercel | Free tier, GitHub auto-deploy |
| Analytics | GA4 + Microsoft Clarity | Pageviews + heatmaps |
| No payments | Confirmed | Experience-first, drive footfall |
| No online ordering | Confirmed | Out of scope v1 |

---

## Content Status

| Content | Status |
|---|---|
| Full menu (food + drinks + prices) | ✅ Done — see design doc Section "Complete Menu Data" |
| High-res café photos | ⏳ Needed from client |
| Brand origin story | ⏳ Needed from client |
| Hours of operation | ⏳ Needed from client |
| Instagram handle | ⏳ Needed from client |
| Google Business access | ⏳ Needed from client |
| Contact email/phone | ⏳ Needed from client |
| Seed blog posts (3–5) | ⏳ Needed from client |

---

## Important Context for Claude

- The café's brand tagline is **"Chai, Chill & City Stories"** — every copy decision should echo this
- The mural ("Chai, Chill & City Stories" in script) and neon sign ("One cup away from happiness") are key visual brand assets — use in hero
- Chai Specials have **two sizes: M (₹79) and L (₹129)** — menu cards need a size toggle
- **"DBC Pastry"** and **"DBC Sundae"** are the correct item names — display exactly as-is on the menu
- ~70% of menu items are veg — use this as a filter and selling point
- Price range: ₹59 (Samosa) to ₹479 (Chicken Ramen Bowl) — "From ₹59" badge on Snack Bites for affordability signalling
- Target audience prioritises **feeling over function** — no feature without emotional purpose
- Mobile-first always — 70%+ café discovery is on phone

---

## Claude Memory Notes

> These are persistent learnings from brainstorming sessions. Do not delete.

- **2026-03-22:** Brainstorming complete. Full design doc at `docs/plans/chai-bar-website-design.md`. User confirmed: no payments, no ordering, experience-first.
- **2026-03-22:** Menu fully captured from physical menu photos. 100+ items across 20+ categories. Data lives in design doc.
- **2026-03-22:** UI toolchain decided: `ui-ux-pro-max` (systematic) → `frontend-design` (creative). Must always run in this order.
- **2026-03-22:** `ui-ux-pro-max` not yet installed. User will run `npm install -g uipro-cli && uipro init --ai claude` before Phase 0.
- **2026-03-22:** City Stories blog is highest-value content differentiator — mirrors mural tagline, drives SEO, builds community identity.
- **2026-03-22:** Phase 3 (blog + about + visit) can be parallelised using `superpowers:dispatching-parallel-agents`.
