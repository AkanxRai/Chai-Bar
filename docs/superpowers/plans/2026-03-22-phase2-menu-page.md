# Phase 2 — Menu Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the full menu page with 100+ items across 20 categories, category tab navigation, veg/non-veg filters, search, M/L size toggle for chai, and Chef's Picks section.

**Architecture:** Client component (`"use client"`) for interactive filtering/search/toggle state. All menu data lives in a static TypeScript data file (no CMS yet). Category tabs scroll horizontally on mobile, sticky on desktop. Filter pills + search bar at top. Cards render in a responsive grid.

**Tech Stack:** Next.js 14, Tailwind CSS, lucide-react icons, React state (useState) for filters/search/size toggle.

---

## File Structure

```
src/
├── data/
│   └── menu.ts                          ← All menu data + TypeScript types
├── components/
│   └── menu/
│       ├── MenuPage.tsx                  ← Main client component (orchestrates everything)
│       ├── CategoryTabs.tsx              ← Horizontal scrollable category tab bar
│       ├── MenuItemCard.tsx              ← Individual menu item card
│       ├── MenuFilters.tsx               ← Search bar + filter pills (Veg, Non-Veg, Under ₹150)
│       ├── ChefsPicks.tsx                ← Chef's Picks hero row at top
│       └── __tests__/
│           ├── MenuPage.test.tsx
│           ├── CategoryTabs.test.tsx
│           ├── MenuItemCard.test.tsx
│           ├── MenuFilters.test.tsx
│           └── ChefsPicks.test.tsx
├── app/
│   └── menu/
│       └── page.tsx                      ← Route page (imports MenuPage)
```

---

### Task 1: Menu Data File

**Files:**
- Create: `src/data/menu.ts`

- [ ] **Step 1: Define TypeScript types**

```typescript
export type DietType = "veg" | "non-veg";

export interface MenuItem {
  name: string;
  diet: DietType;
  price: number;
  priceM?: number;  // Medium size (chai specials only)
  priceL?: number;  // Large size (chai specials only)
  hasSizes: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;       // lucide icon name
  items: MenuItem[];
}
```

- [ ] **Step 2: Populate all 20 categories with data from design spec**

All data comes from `chai-bar-website-design.md` lines 169-443. Categories:
1. Chai Specials (6 items, M/L pricing)
2. Coffee & Cold Coffee (11 items)
3. Thick Shakes & Smoothies (10 items)
4. Ice Tea (3 items)
5. Lassi (6 items)
6. Mojito (8 items)
7. Healthy Drinks (4 items)
8. Soda (3 items)
9. Snack Bites (12 items)
10. Omelette (4 items)
11. Maggi (3 items)
12. Burgers & Sandwiches (10 items)
13. Breakfast (4 items)
14. Soup (2 items)
15. Pancakes (3 items)
16. Breakfast Plates (5 items)
17. Pasta & Ramen (7 items)
18. Pastry (5 items)
19. Falooda & Fruit Salad (5 items)
20. Scoop Ice Cream (5 items)
21. Sundae (3 items)
22. Boba (3 items)

Note: Drinks without explicit veg/non-veg marking are all veg. Only food items have explicit markers.

- [ ] **Step 3: Export bestseller list and chef's picks**

```typescript
export const chefsPicks = ["Masala Chai", "Chicken Ramen Bowl", "Oreo Thick Shake", "Brownie Sundae"];
export const bestsellers = ["Classic Chai", "Masala Chai", "Chicken Ramen Bowl", "Oreo Thick Shake", "Crispy Chicken Burger", "Brownie Sundae", "Hazelnut Brownie", "Classic Cold Coffee"];
```

- [ ] **Step 4: Verify data count matches spec**

Run a quick count check — should be 100+ items total.

---

### Task 2: MenuItemCard Component (TDD)

**Files:**
- Create: `src/components/menu/__tests__/MenuItemCard.test.tsx`
- Create: `src/components/menu/MenuItemCard.tsx`

- [ ] **Step 1: Write failing tests**

Tests should cover:
- Renders item name and price (e.g. "Samosa" "₹59")
- Shows veg badge (green dot) for veg items
- Shows non-veg badge (red dot) for non-veg items
- Shows M/L size toggle when `hasSizes` is true
- Calls onSizeChange when toggle is clicked
- Displays correct price for selected size

- [ ] **Step 2: Run tests to verify they fail**

- [ ] **Step 3: Implement MenuItemCard**

Card layout:
```
┌──────────────────┐
│  Item Name       │
│  ● Veg           │  ← green/red dot + label
│                  │
│  [M] [L]         │  ← size toggle (chai only)
│          ₹79     │  ← price aligned right
└──────────────────┘
```

- Clean card with rounded-xl, warm-white bg, subtle shadow
- Veg: green-600 dot + "Veg" label; Non-veg: red-600 dot + "Non-Veg"
- Size toggle: two pill buttons, selected = terracotta bg
- Price in font-brand, chai-brown color
- No images on menu cards (spec says no photos on item level, just names + price)

- [ ] **Step 4: Run tests to verify they pass**

- [ ] **Step 5: Commit**

---

### Task 3: CategoryTabs Component (TDD)

**Files:**
- Create: `src/components/menu/__tests__/CategoryTabs.test.tsx`
- Create: `src/components/menu/CategoryTabs.tsx`

- [ ] **Step 1: Write failing tests**

Tests should cover:
- Renders all category names as buttons
- Highlights active category
- Calls onSelect when a tab is clicked
- Scrollable horizontally (has overflow-x-auto)

- [ ] **Step 2: Implement CategoryTabs**

- Horizontal scroll on mobile, wraps on desktop
- Each tab: pill shape, font-body text-sm
- Active tab: bg-terracotta text-warm-white
- Inactive: bg-cream/50 text-charcoal/70 hover:bg-cream
- Smooth scroll to active tab on selection

- [ ] **Step 3: Run tests, verify pass**

- [ ] **Step 4: Commit**

---

### Task 4: MenuFilters Component (TDD)

**Files:**
- Create: `src/components/menu/__tests__/MenuFilters.test.tsx`
- Create: `src/components/menu/MenuFilters.tsx`

- [ ] **Step 1: Write failing tests**

Tests should cover:
- Renders search input with placeholder "What are you craving?"
- Renders filter pills: "Veg Only", "Non-Veg", "Under ₹150"
- Calls onSearchChange when typing in search
- Calls onFilterChange when toggling a filter pill
- Active filter pill has different styling

- [ ] **Step 2: Implement MenuFilters**

- Search bar: full width, rounded-xl, magnifying glass icon, warm-white bg
- Filter pills row below search: toggle-able, pill shape
- Active pill: bg-terracotta text-warm-white
- Inactive pill: border border-cream text-charcoal/60

- [ ] **Step 3: Run tests, verify pass**

- [ ] **Step 4: Commit**

---

### Task 5: ChefsPicks Component (TDD)

**Files:**
- Create: `src/components/menu/__tests__/ChefsPicks.test.tsx`
- Create: `src/components/menu/ChefsPicks.tsx`

- [ ] **Step 1: Write failing tests**

Tests should cover:
- Renders "Chef's Picks" heading
- Renders the 4 chef's pick items
- Each pick shows item name and price
- Shows category tag for each pick

- [ ] **Step 2: Implement ChefsPicks**

- Horizontal scroll row of highlighted cards
- Slightly larger cards with chai-brown accent border or gradient bg
- Badge: "Chef's Pick" in muted-gold
- Shows item name, category, and price

- [ ] **Step 3: Run tests, verify pass**

- [ ] **Step 4: Commit**

---

### Task 6: MenuPage Orchestrator (TDD)

**Files:**
- Create: `src/components/menu/__tests__/MenuPage.test.tsx`
- Create: `src/components/menu/MenuPage.tsx`
- Modify: `src/app/menu/page.tsx`

- [ ] **Step 1: Write failing tests**

Tests should cover:
- Renders page heading "Our Menu"
- Renders ChefsPicks section
- Renders MenuFilters
- Renders CategoryTabs
- Renders menu items for selected category
- Filters items when "Veg Only" is active
- Filters items when search text is entered
- Shows "From ₹59" badge in Snack Bites section

- [ ] **Step 2: Implement MenuPage**

`"use client"` component with state:
```typescript
const [activeCategory, setActiveCategory] = useState<string>("chai-specials");
const [search, setSearch] = useState("");
const [filters, setFilters] = useState<Set<string>>(new Set());
const [chaiSize, setChaiSize] = useState<"M" | "L">("M");
```

Layout:
1. Page heading + subtitle
2. ChefsPicks (always visible at top)
3. MenuFilters (search + pills)
4. CategoryTabs (sticky)
5. Item grid for active category (filtered by search + diet filters)

- [ ] **Step 3: Update `src/app/menu/page.tsx`** to import and render MenuPage

- [ ] **Step 4: Run all tests**

- [ ] **Step 5: Commit**

---

### Task 7: Visual Verification + Polish

- [ ] **Step 1: Start dev server and verify in browser**

Run `npm run dev` and check:
- Category tabs scroll correctly on mobile
- Filters work (veg, search, under ₹150)
- Chai size toggle updates prices
- Chef's Picks render at top
- All 100+ items present

- [ ] **Step 2: Playwright screenshots (mobile 390x844 + desktop 1280x800)**

- [ ] **Step 3: Fix any visual issues**

- [ ] **Step 4: Commit**

---

### Task 8: Code Review + Phase Status Update

- [ ] **Step 1: Run full test suite**
- [ ] **Step 2: Code review**
- [ ] **Step 3: Fix any issues**
- [ ] **Step 4: Update CLAUDE.md Phase 2 status to [x]**
- [ ] **Step 5: Update claude-memory.md with Phase 2 completion entry**
- [ ] **Step 6: Commit and push**
