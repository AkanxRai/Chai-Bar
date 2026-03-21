# Chai Bar — Website Design & Development Plan
**Date:** 2026-03-21  
**Location:** Indiranagar, Bangalore  
**Goal:** Build an experience-first website that makes visitors *feel* Chai Bar before they walk in — and then walk in.

---

## 1. Project Overview

### What We're Building
A warm, immersive café website for **Chai Bar** — "Chai, Chill & City Stories." No payments, no online ordering. Pure experience: inspire a visit, show the menu, tell the brand story.

### Primary Goal
> **Get visitors emotionally excited enough to visit the café in person.**

Every design decision, every line of copy, every animation should serve this single goal.

### Target Audience
- **Indiranagar locals** — regulars and potential walk-ins
- **Young professionals / college crowd** — looking for a cool hangout spot
- **Tourists discovering Bangalore cafés** — via Google, travel blogs, maps

### Visual Identity
- **Palette:** Warm earthy tones — chai brown, cream, terracotta, muted gold
- **Textures:** Soft paper grain, linen, hand-drawn illustration strokes (inspired by the mural)
- **Typography:** Mix of a handwritten/script font (brand voice) + a clean serif (readability)
- **Photography:** Real café shots — the mural, arched interiors, lanterns, neon sign, food & drinks
- **Mood:** Like walking into a warm hug. Unhurried. Real. Soulful.

---

## 2. Site Architecture

```
/                   → Hero / Landing (full experience intro)
/menu               → Full café menu with categories & visuals
/stories            → City Stories blog
/about              → Brand story, team, the space
/visit              → Location, hours, Google Maps embed, Instagram
/#reviews           → Testimonials section (embedded in homepage)
/#contact           → Simple contact/inquiry form
```

---

## 3. Page-by-Page Design Spec

---

### 3.1 Homepage `/`

**Purpose:** Create desire. Make them feel the place.

#### Section 1 — Hero
- **Full-screen video or looping image carousel** of the café interior — the mural wall, lanterns, a steaming cup, the neon sign "One cup away from happiness"
- Large tagline overlay: *"Chai, Chill & City Stories"*
- Subline: *"Your corner of Indiranagar. Come for the chai. Stay for the stories."*
- CTA button: **"See Our Menu"** (scrolls or navigates to menu) + secondary **"Find Us"** (links to /visit)
- Subtle scroll indicator animation

**Psychology used:** *Peak-end rule* — the very first impression sets the emotional peak. Use the most beautiful café shot here.

---

#### Section 2 — "Why Chai Bar" (3-column vibe section)
Three short, icon-accompanied statements — visual + 1 sentence each:

| Icon | Headline | Sub |
|---|---|---|
| ☕ | *Crafted Chai* | Every cup made with intention. Not a chain. Not rushed. |
| 🏛️ | *A Space That Feels Like Yours* | Arched walls, warm light, no judgment. Just you. |
| 📖 | *City Stories Live Here* | Conversations, ideas, and the quiet hum of Indiranagar. |

---

#### Section 3 — Menu Teaser
- 4–6 hero menu items displayed as large cards with food photography
- Each card: item name, a one-line poetic description, category tag
- CTA: **"Explore the Full Menu →"**
- Examples:
  - *Irani Cutting Chai* — "The original. Unchanged for a reason."
  - *Masala Latte* — "Warm spice meets cold evening energy."
  - *Bun Maska* — "Soft, buttery, unassuming. Like a good morning."

**Psychology used:** *Paradox of choice* — don't show everything here. Show the best 6. Make them curious.

---

#### Section 4 — The Space (Photo Gallery Strip)
- Horizontal scrolling strip of 8–10 high-quality photos
- Caption overlays on hover: little moments ("The mural took 3 days." / "The lanterns came from Old Delhi.")
- Feels like a visual tour of the café

---

#### Section 5 — Customer Reviews / Testimonials
- 3–5 curated Google/Instagram reviews
- Card format: quote, name, star rating, maybe a small photo
- Headline: *"What people say over a second cup"*
- Link: **"Read more reviews on Google →"** (opens Google Maps)

**Psychology used:** *Social proof* — real people vouching is more powerful than any copy.

---

#### Section 6 — City Stories Teaser (Blog)
- 2–3 latest blog posts shown as cards
- Each card: cover image, story title, 1-line teaser, read time
- Example stories:
  - *"The Art on Our Wall — A Story in Strokes"*
  - *"Why Indiranagar Needed a Chai Bar"*
  - *"5 Things to Do in Indiranagar on a Rainy Evening"*
- CTA: **"Read More Stories →"** (links to /stories)

**Psychology used:** *Curiosity gap* — short teasers that leave them wanting to read more.

---

#### Section 7 — Instagram Social Wall
- Live Instagram feed embed (3x2 or 4x2 grid)
- Headline: *"Tag us. Be part of the story."*
- Handle: **@chaibar** (update with actual handle)
- Each post is clickable, opens Instagram

---

#### Section 8 — Visit / Find Us (Footer CTA)
- Google Maps embed
- Hours of operation (table format)
- Address + phone
- "Get Directions" button
- Simple inquiry/contact form: Name, Email, Message (for event bookings, collaborations)
- Social media links

---

### 3.2 Menu Page `/menu`

**Purpose:** Make the food and drinks look so good they can taste it before arriving.

#### Design Approach
- Category tabs / sticky sidebar navigation:
  - 🍵 Chai Specials
  - ☕ Coffee & Cold Coffee
  - 🥤 Shakes, Smoothies & More
  - 🧃 Healthy Drinks & Soda
  - 🍟 Snack Bites
  - 🍳 Breakfast
  - 🍔 Burgers & Sandwiches
  - 🍝 Pasta & Ramen
  - 🍰 Desserts & Sweets

#### Each Menu Item Card
```
[Item Photo]
Item Name           ← large, script-style font
Category tag        ← small pill label
One-line description ← poetic, evocative (not "contains milk and spices")
Price               ← clean, no ₹ guilt-tripping
[Veg 🟢 / Non-Veg 🔴 badge]
```

---

## Complete Menu Data (from physical menu)

> Use this data to populate the CMS. All prices in ₹. 🟢 = Veg | 🔴 = Non-Veg

### 🍵 Chai Specials
*(M = Medium | L = Large)*

| Item | Veg | M | L |
|---|---|---|---|
| Classic Chai | 🟢 | 79 | 129 |
| Masala Chai | 🟢 | 79 | 129 |
| Ginger Chai | 🟢 | 79 | 129 |
| Cardamom Chai | 🟢 | 79 | 129 |
| Elaichi Chai | 🟢 | 79 | 129 |
| Lemon Chai | 🟢 | 79 | 129 |

---

### ☕ Coffee & Cold Coffee

| Item | Veg | Price |
|---|---|---|
| Classic Filter Coffee | 🟢 | 70 |
| Espresso | 🟢 | 179 |
| Cappuccino | 🟢 | 189 |
| Americano | 🟢 | 189 |
| Latte | 🟢 | 179 |
| Black Coffee | 🟢 | 189 |
| Classic Cold Coffee | 🟢 | 169 |
| Caramel Cold Coffee | 🟢 | 179 |
| Chocolate Cold Coffee | 🟢 | 179 |
| Hazelnut Cold Coffee | 🟢 | 179 |
| Matcha Cold Coffee | 🟢 | 189 |

---

### 🥤 Thick Shakes & Smoothies

| Item | Price |
|---|---|
| Mango Jugalbandi | 169 |
| Pistachio Triangle | 179 |
| Creamy Vanilla | 149 |
| Choco Banana | 169 |
| Choco Brownie | 199 |
| Oreo Thick Shake | 199 |
| Tender Coconut with Guava | 249 |
| Apple & Banana Smoothie | 139 |
| Mixed Berry Smoothie | 169 |
| Dry Fruit Smoothie | 179 |

---

### 🍹 Ice Tea

| Item | Price |
|---|---|
| Lemon Mint | 99 |
| Peach | 119 |
| Orange & Basil | 139 |

---

### 🥛 Lassi

| Item | Price |
|---|---|
| Sweet | 90 |
| Mango | 100 |
| Dry Fruit | 130 |
| Rose | 90 |
| Kesar Badam | 135 |
| Strawberry | 100 |

---

### 🍃 Mojito

| Item | Price |
|---|---|
| Virgin Mojito | 159 |
| Chilli Guava | 169 |
| Blue Lagoon | 159 |
| Watermelon | 169 |
| Green Apple | 159 |
| Strawberry | 159 |
| Blueberry | 159 |
| Peach | 169 |

---

### 🧃 Healthy Drinks

| Item | Price |
|---|---|
| Beetroot Solid | 79 |
| ABC | 179 |
| Cucumber Mint Lime | 89 |
| Cabos | 159 |

---

### 🫧 Soda

| Item | Price |
|---|---|
| Fresh Lime Soda | 89 |
| Masala Lime Soda | 99 |
| Masala Coke | 99 |

---

### 🍟 Snack Bites

| Item | Veg | Price |
|---|---|---|
| Samosa | 🟢 | 59 |
| Veg Puff | 🟢 | 73 |
| Egg Puff | 🔴 | 80 |
| Chicken Puff | 🔴 | 110 |
| Korean Maskabun | 🟢 | 169 |
| Chicken Nuggets | 🔴 | 249 |
| Classic Salted Fries | 🟢 | 100 |
| Peri Peri Fries | 🟢 | 120 |
| Cheesy Fries | 🟢 | 159 |
| Potato Wedges | 🟢 | 148 |
| Crispy Chicken Wings (2 pcs) | 🔴 | 183 |
| Crispy Chicken Strips (2 pcs) | 🔴 | 193 |

---

### 🍳 Omelette

| Item | Veg | Price |
|---|---|---|
| Plain Omelette | 🔴 | 119 |
| Masala Omelette | 🔴 | 128 |
| Spinach & Mushroom Omelette | 🟢 | 141 |
| Cheese Omelette | 🔴 | 168 |

---

### 🍜 Maggi

| Item | Veg | Price |
|---|---|---|
| Plain Maggi | 🟢 | 169 |
| Masala Egg Maggi | 🔴 | 179 |
| Cheese Chicken Maggi | 🔴 | 199 |

---

### 🍔 Burgers & Sandwiches

| Item | Veg | Price |
|---|---|---|
| Classic Veg Burger | 🟢 | 149 |
| Paneer Tikka Burger | 🟢 | 169 |
| Mexican Veg Burger | 🟢 | 159 |
| Crispy Chicken Burger | 🔴 | 219 |
| Chicken Tikka Burger | 🔴 | 219 |
| Paneer Tikka Sandwich | 🟢 | 179 |
| Chicken Tikka Sandwich | 🔴 | 229 |
| Tomato Cheese Sandwich | 🟢 | 189 |
| Spinach Corn Sandwich | 🟢 | 249 |
| Tomato Cucumber Sandwich | 🟢 | 179 |

---

### 🥗 Breakfast

| Item | Veg | Price |
|---|---|---|
| Veg Caesar Salad | 🟢 | 219 |
| Chicken Caesar Salad | 🔴 | 299 |
| Cornflakes with Hot Milk | 🟢 | 209 |
| Oats with Dry Fruits | 🟢 | 249 |

---

### 🥣 Soup

| Item | Veg | Price |
|---|---|---|
| Chicken Clear Soup | 🔴 | 159 |
| Veg Clear Soup | 🟢 | 139 |

---

### 🥞 Pancakes

| Item | Veg | Price |
|---|---|---|
| Plain Pancake | 🟢 | 289 |
| Nutella Pancake | 🟢 | 310 |
| Banana Pancake | 🟢 | 310 |

---

### 🍽️ Breakfast Plates

| Item | Veg | Price |
|---|---|---|
| English Veg | 🟢 | 399 |
| English Non-Veg | 🔴 | 449 |
| Mexican Veg | 🟢 | 349 |
| Mexican Non-Veg | 🔴 | 359 |
| Hummus with Feta Bread | 🟢 | 349 |

---

### 🍝 Pasta & Ramen

| Item | Veg | Price |
|---|---|---|
| Alfredo Pasta Veg | 🟢 | 279 |
| Alfredo Pasta Chicken | 🔴 | 329 |
| Arrabiata Pasta Veg | 🟢 | 279 |
| Arrabiata Pasta Chicken | 🔴 | 329 |
| Veg Ramen Bowl | 🟢 | 349 |
| Egg Ramen Bowl | 🔴 | 379 |
| Chicken Ramen Bowl | 🔴 | 479 |

---

### 🎂 Pastry

| Item | Price |
|---|---|
| DBC Pastry | 149 |
| Red Velvet Cake | 179 |
| Plain Cheesecake | 189 |
| Hazelnut Brownie | 169 |
| Walnut Brownie | 169 |

---

### 🍓 Falooda & Fruit Salad

| Item | Price |
|---|---|
| Rose Falooda | 149 |
| Bombay Falooda | 179 |
| Dry Fruit Falooda | 189 |
| Exotic Fruit Salad | 200 |
| Custard Mixed Fruit Salad | 230 |

---

### 🍨 Scoop Ice Cream

| Item | Price |
|---|---|
| Vanilla | 69 |
| Mango | 69 |
| Strawberry | 69 |
| Tender Coconut | 89 |
| Guava | 79 |

---

### 🍧 Sundae

| Item | Price |
|---|---|
| DBC Sundae | 260 |
| Brownie Sundae | 260 |
| Pista Sundae | 230 |

---

### 🧋 Boba

| Item | Price |
|---|---|
| Blueberry Boba | 70 |
| Strawberry Boba | 70 |
| Mango Boba | 70 |

---

#### UX Details
- **Search bar** at the top — "What are you craving?"
- **Dietary filters:** Veg Only | Non-Veg | Bestsellers | Under ₹150
- **Size toggle** for chai items — M / L selector inline on card
- Menu items with photos load lazily for performance
- "Chef's Picks" section at the top — suggested: *Masala Chai, Chicken Ramen Bowl, Oreo Thick Shake, Brownie Sundae*
- No prices on the hero — prices appear only when you engage with the item (keeps the experience non-transactional)
- **"From ₹59"** badge on Snack Bites to signal affordability to budget-conscious visitors

**Psychology used:** *Sensory marketing* — evocative descriptions activate imagination. "The chai your grandmother would approve of" > "Masala chai with ginger."

---

### 3.3 City Stories Blog `/stories`

**Purpose:** Content marketing + SEO + brand storytelling. Makes Chai Bar feel like a *place with soul*, not just a café.

#### Content Categories
- **The Space** — behind the scenes, design choices, the mural
- **Indiranagar Diaries** — local area spotlights, neighbourhood guides
- **Chai Culture** — chai history, recipes, rituals
- **People & Conversations** — customer spotlights, regulars, community

#### SEO Opportunity
Target long-tail searches like:
- "best chai café in Indiranagar"
- "things to do in Indiranagar Bangalore"
- "chai varieties in Bangalore"
- "cozy cafés in Bangalore for work"

#### Blog Post Layout
- Hero image (full-width)
- Title + author + read time
- Well-formatted prose (no cluttered sidebars)
- Related stories at the bottom
- Social share buttons (Instagram, WhatsApp)

---

### 3.4 About Page `/about`

**Purpose:** Humanize the brand. Make people feel connected before they arrive.

#### Sections
1. **Origin Story** — Why was Chai Bar started? What gap did it fill? What does it mean to the founders?
2. **The Space** — What went into designing it? The mural, the arches, the lanterns — intentional choices
3. **The Team** — Friendly photos + 1-line intros (optional, if founders are comfortable)
4. **Our Values** — Real food. Local ingredients. Community first. No rush.
5. **Press / Features** — Any media mentions (Zomato blog, local food blogs, etc.)

---

### 3.5 Visit Page `/visit`

**Purpose:** Frictionlessly get them to the door.

- Large Google Maps embed (interactive)
- Address, exact landmark hints ("opposite the auto stand, next to…")
- Hours by day (Mon–Sun, different weekend hours if applicable)
- Parking info
- "Reach By" section: auto, metro, walking from nearby landmarks
- **Reservation / Group Booking Form** — "Coming with a group of 8+? Let us know."
- Instagram link to see latest updates

---

## 4. Technical Stack Recommendations

### Recommended Approach: **Next.js + Tailwind CSS**
- Static site generation = blazing fast load times (important for mobile users in India)
- Easy to deploy on Vercel (free tier)
- Component-based — menu items, blog posts, reviews are all reusable components
- SEO-friendly by default

### CMS for Content
- **Sanity.io** or **Contentful** (free tier) for:
  - Menu items (editable by café staff without touching code)
  - Blog posts / City Stories
  - Customer reviews/testimonials
- This means the café can update their own menu without a developer

### Instagram Feed
- Use **Instagram Basic Display API** or a third-party embed like **ElfSight** (simple, plug-and-play)

### Maps
- **Google Maps Embed API** — free for static embeds

### Hosting
- **Vercel** (free for personal/small projects) — deploy from GitHub, auto-deploy on push

### Analytics
- **Google Analytics 4** — track page views, most viewed menu items, blog engagement
- **Microsoft Clarity** — free heatmaps to see where users scroll/click

---

## 5. Performance & SEO Requirements

### Core Web Vitals Targets
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1
- FID/INP: < 100ms

### SEO Essentials
- Meta title + description for every page
- Open Graph tags (for WhatsApp/social sharing previews)
- Local SEO: schema markup for `LocalBusiness`, including:
  - Name, address, phone, hours, cuisine type, price range
  - This helps Chai Bar appear in "cafés near me" searches
- Sitemap.xml auto-generated
- Image alt tags on every photo (accessibility + SEO)

### Mobile-First
- 70%+ of café discovery happens on mobile
- All interactions (menu filter, blog scroll, map) must be touch-optimized
- Font sizes minimum 16px on mobile
- Tap targets minimum 48x48px

---

## 6. Design System

> ⚠️ **IMPORTANT — Read before writing any UI code**
> Two skills govern all UI work. Use them in order — every time, no exceptions.

### Step 1 — Run `ui-ux-pro-max` FIRST (design system generator)

Before writing a single component, Claude Code must run the skill's search tool with the project context to get a systematically correct design recommendation:

```bash
# Install (once)
npm install -g uipro-cli
uipro init --ai claude

# Run at start of every UI session
uipro search "café warm cozy artisan indiranagar earthy local storytelling"
```

This queries 161 curated palettes, 57 font pairings, 99 UX rules, and 50+ style profiles to return the ideal design system for this exact product type. Use its output to override or confirm the defaults below.

**Why:** Systematic design intelligence before creative execution. Catches anti-patterns (wrong contrast ratio, inaccessible touch targets, wrong animation timing) before any code is written.

### Step 2 — Execute with `frontend-design` skill

Once the design system is defined, use `frontend-design` to write all components. This skill ensures:
- Visually distinctive, non-generic output (no "AI slop" aesthetics)
- Bold creative direction committed to fully
- Production-grade motion, typography, and spatial composition
- Consistent with Chai Bar's warm/earthy identity

**The relationship:** `ui-ux-pro-max` = *what* to build (system, rules, tokens). `frontend-design` = *how* to build it (creative execution, code quality).

---

### Baseline Design Tokens
*(These are starting defaults — `uipro search` output takes precedence)*

```css
/* Colors */
--chai-brown:    #5C3317   /* Deep warm brown — primary */
--cream:         #F5ECD7   /* Soft cream — backgrounds */
--terracotta:    #C1440E   /* Terracotta accent */
--muted-gold:    #C9A84C   /* Warm gold highlights */
--charcoal:      #2A2A2A   /* Text */
--warm-white:    #FAF6EF   /* Page background */

/* Typography (confirm or replace with uipro output) */
--font-brand:    'Playfair Display'  /* Headings, brand moments */
--font-script:   'Dancing Script'   /* Taglines, special labels */
--font-body:     'DM Sans'          /* Body text, UI elements */
```

### Component Library
- Use **shadcn/ui** as base for:
  - Tabs (menu categories)
  - Cards (menu items, blog posts)
  - Dialog (image lightbox)
  - Badge (veg/non-veg, category tags)
- Override all shadcn defaults with Chai Bar design tokens from above
- Never use default shadcn styling unskinned — it must feel like Chai Bar, not a SaaS dashboard

---

## 7. Claude Code Implementation Instructions

### Plugins to Use
| Plugin | When |
|---|---|
| `frontend-design` | Every UI component/page (Step 2 of design workflow) |
| `playwright` | Cross-browser testing + visual regression after each phase |
| `code-review` | After completing each major section |
| `security-guidance` | Before deployment — forms, API key exposure, env vars |

### Skills to Use
| Skill | When |
|---|---|
| `ui-ux-pro-max` | **Before any UI work** — run `uipro search "café warm cozy artisan indiranagar earthy"` |
| `superpowers:writing-plans` | Generate implementation plan before coding each phase |
| `superpowers:test-driven-development` | Write component tests before building |
| `superpowers:dispatching-parallel-agents` | Build menu + blog pages simultaneously (independent) |
| `superpowers:verification-before-completion` | Before marking any section done |
| `superpowers:requesting-code-review` | After completing each page |
| `superpowers:finishing-a-development-branch` | Before merging each phase |

### UI Skill Execution Order (MANDATORY)
```
For EVERY new page or component:
  1. uipro search "<component context>"   ← ui-ux-pro-max generates design spec
  2. Read uipro output carefully           ← palette, fonts, UX rules, anti-patterns
  3. Invoke frontend-design skill          ← creative execution using that spec
  4. Build component                       ← production-grade code
  5. playwright screenshot test            ← visual check mobile + desktop
  6. superpowers:requesting-code-review    ← quality gate
```

### Suggested Build Order
```
Phase 0 — Design System Bootstrap
  0a. Place these 3 files in project root before anything else:
        CLAUDE.md
        chai-bar-website-design.md
        claude-memory.md
  0b. npm install -g uipro-cli && uipro init --ai claude
  0c. uipro search "café warm cozy artisan indiranagar earthy local storytelling"
  0c. Capture output → update design tokens in globals.css
  0d. Project scaffold: Next.js 14 + Tailwind + shadcn/ui
  0e. Global layout: fonts, CSS variables, Navbar, Footer

Phase 1 — Core Experience
  1a. Homepage Hero section
  1b. "Why Chai Bar" 3-column section
  1c. Menu Teaser (6 items)
  1d. Photo Gallery strip

Phase 2 — Menu Page (high priority)
  2a. Category tab navigation
  2b. Menu item card component
  2c. Filter system (Veg/Non-veg, Under ₹150, Bestsellers)
  2d. Size toggle for Chai Specials (M/L)
  2e. Chef's Picks hero row

Phase 3 — Content Pages [parallel agents]
  Agent A → City Stories blog (list + single post)
  Agent B → About page + Visit page + Map embed

Phase 4 — Social & Trust
  4a. Reviews/Testimonials section
  4b. Instagram feed embed
  4c. Contact/Group booking form

Phase 5 — Polish & Ship
  5a. Mobile audit (playwright — all pages, iPhone + Android viewports)
  5b. LocalBusiness JSON-LD schema
  5c. Open Graph + WhatsApp share preview
  5d. Performance: next/image, lazy loading, font subsetting
  5e. Google Analytics 4 + Microsoft Clarity
  5f. security-guidance audit
  5g. Deploy to Vercel
```

---

## 8. Marketing Psychology Applied

These principles should be baked into the UX, not just copy:

| Principle | Where Applied |
|---|---|
| **Peak-End Rule** | Hero is the peak — use the absolute best image/video |
| **Social Proof** | Reviews section, Instagram wall, Google rating badge |
| **Curiosity Gap** | Blog teasers that don't give it all away |
| **Sensory Marketing** | Evocative menu descriptions that activate imagination |
| **Scarcity/Exclusivity** | "Seasonal Specials" label on limited items |
| **Belonging** | "City Stories" positions visitors as part of a community |
| **Reciprocity** | Free blog content (area guides, chai culture) builds goodwill |
| **Anchoring** | Show "Chef's Picks" first — sets quality expectation before price |

---

## 9. Future Features (Post-Launch, Phase 2)

These are intentionally left out of v1 to keep scope clean, but worth planning for:

- **Table Reservation System** — simple date/time/party-size form, email confirmation
- **Loyalty Program Info Page** — "Chai Club" stamp card explained digitally
- **Events Calendar** — open mic nights, chai tasting events, poetry evenings
- **WhatsApp Click-to-Chat** — floating button for quick queries
- **Multi-language** — Kannada version for local SEO boost
- **Push Notifications** — for new blog posts or special menu drops (PWA)

---

## 10. Content Needed from Chai Bar Team

Before development starts, gather:

- [ ] **High-res photos** — interior, food, drinks, mural close-ups, team (if willing)
- [x] **Complete menu** — all items, descriptions, prices, veg/non-veg tags ✅ (captured from physical menu above)
- [ ] **Brand story** — origin, founding year, what inspired it
- [ ] **Hours of operation** — weekday vs weekend
- [ ] **Instagram handle** and access for feed embed
- [ ] **Google Business Profile** access for review widget
- [ ] **Contact email/phone** for the website
- [ ] **3–5 seed blog post ideas** or drafts for City Stories launch

---

## 11. Success Metrics

How we know the website is working:

| Metric | Target |
|---|---|
| Google Maps click-throughs | +30% in 60 days |
| Average session duration | > 2.5 minutes |
| Menu page engagement | > 60% of visitors visit it |
| Blog return visitors | > 20% within 30 days |
| Mobile bounce rate | < 45% |
| Instagram follower growth | Measurable uplift after launch |

---

*This document is the single source of truth for the Chai Bar website project. Place it in the project root alongside `CLAUDE.md` and `claude-memory.md`. Claude Code reads all three at session start and knows exactly what to do.*
