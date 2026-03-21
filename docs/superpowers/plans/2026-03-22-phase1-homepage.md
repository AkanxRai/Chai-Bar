# Phase 1: Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Chai Bar homepage with four emotional-impact sections — Hero, Why Chai Bar, Menu Teaser, and Gallery — using real café images to create desire and drive visits.

**Architecture:** Four independent section components composed in `src/app/page.tsx`. Each section is a self-contained React server component with its own test file. Next.js `Image` component used for all photos (optimized WebP, lazy loading, blur placeholders). Lucide React for icons (no emoji icons per design system rules). Mobile-first responsive design.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS 3, next/image, lucide-react, Vitest + React Testing Library

---

## File Structure

```
src/
├── app/
│   └── page.tsx                          (MODIFY — compose all 4 sections)
│
├── components/
│   └── home/
│       ├── HeroSection.tsx               (CREATE — full-screen hero with mural)
│       ├── WhyChaiBar.tsx                (CREATE — 3-column value props)
│       ├── MenuTeaser.tsx                (CREATE — featured menu items + CTA)
│       ├── GalleryStrip.tsx              (CREATE — photo gallery with captions)
│       └── __tests__/
│           ├── HeroSection.test.tsx      (CREATE — hero tests)
│           ├── WhyChaiBar.test.tsx       (CREATE — value props tests)
│           ├── MenuTeaser.test.tsx       (CREATE — menu teaser tests)
│           └── GalleryStrip.test.tsx     (CREATE — gallery tests)
│
public/
└── images/
    ├── entrance.jpeg                     (EXISTS — mural, hero background)
    ├── interior1.jpeg                    (EXISTS — lanterns & arches)
    ├── interior2.jpeg                    (EXISTS — neon sign angle)
    ├── caesar_salad.jpeg                 (EXISTS — food shot)
    └── chicken_bowl.jpeg                 (EXISTS — food shot)
```

---

## Available Images Reference

| File | Content | Best Use |
|---|---|---|
| `entrance.jpeg` (1207x1600) | "Chai, Chill & City Stories" mural, botanical line art | Hero background |
| `interior1.jpeg` (1096x1600) | Lanterns, arched doorways, wooden tables, black chairs | Gallery, Why Chai Bar |
| `interior2.jpeg` (899x1599) | Neon sign area, arched windows, warm lighting, patterned tiles | Gallery |
| `caesar_salad.jpeg` (1080x1264) | Caesar salad on wooden table | Menu Teaser |
| `chicken_bowl.jpeg` (1080x1328) | Bowl with eggs, greens, sauce | Menu Teaser |

**Note:** Only 5 images available. Spec calls for 8-10 gallery photos — we'll use all 5 and note that more photos are needed from client for a fuller gallery.

---

## Task 1: Hero Section Component (TDD)

**Files:**
- Create: `src/components/home/__tests__/HeroSection.test.tsx`
- Create: `src/components/home/HeroSection.tsx`

- [ ] **Step 0: Invoke frontend-design skill**

Invoke skill: `frontend-design` with context: "Full-screen hero section for Chai Bar café website. Background: entrance mural photo (botanical line art with 'Chai, Chill & City Stories'). Overlay: dark gradient from bottom, tagline in Dancing Script, subline in DM Sans, two CTA buttons ('See Our Menu' primary terracotta, 'Find Us' secondary outline). Subtle scroll indicator at bottom. Design tokens: chai-brown, cream, terracotta, warm-white, charcoal. Mobile-first. Nature Distilled style — earthy, organic, immersive."

Read output and apply creative direction to Step 3.

- [ ] **Step 1: Write the failing test**

```typescript
// src/components/home/__tests__/HeroSection.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HeroSection } from "../HeroSection";

describe("HeroSection", () => {
  it("renders the tagline", () => {
    render(<HeroSection />);
    expect(screen.getByText(/chai, chill & city stories/i)).toBeInTheDocument();
  });

  it("renders the subline", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/your corner of indiranagar/i)
    ).toBeInTheDocument();
  });

  it("renders the primary CTA linking to menu", () => {
    render(<HeroSection />);
    const cta = screen.getByRole("link", { name: /see our menu/i });
    expect(cta).toHaveAttribute("href", "/menu");
  });

  it("renders the secondary CTA linking to visit", () => {
    render(<HeroSection />);
    const cta = screen.getByRole("link", { name: /find us/i });
    expect(cta).toHaveAttribute("href", "/visit");
  });

  it("renders the hero background image", () => {
    render(<HeroSection />);
    const img = screen.getByRole("img", { name: /chai bar entrance/i });
    expect(img).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/home/__tests__/HeroSection.test.tsx`
Expected: FAIL — `HeroSection` module not found

- [ ] **Step 3: Implement HeroSection**

```typescript
// src/components/home/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/entrance.jpeg"
        alt="Chai Bar entrance with Chai, Chill & City Stories mural"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <h1 className="font-script text-5xl text-warm-white drop-shadow-lg sm:text-6xl md:text-7xl">
          Chai, Chill & City Stories
        </h1>
        <p className="mt-4 max-w-lg font-body text-lg text-cream/90 drop-shadow-md sm:text-xl">
          Your corner of Indiranagar. Come for the chai. Stay for the stories.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/menu"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-terracotta px-8 py-3 font-body text-sm font-semibold text-warm-white shadow-lg transition-all duration-200 ease-out hover:bg-terracotta/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-white focus-visible:ring-offset-2"
          >
            See Our Menu
          </Link>
          <Link
            href="/visit"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg border-2 border-cream/60 px-8 py-3 font-body text-sm font-semibold text-cream transition-all duration-200 ease-out hover:border-cream hover:bg-cream/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-white focus-visible:ring-offset-2"
          >
            Find Us
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-cream/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/home/__tests__/HeroSection.test.tsx`
Expected: 5 tests PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/home/HeroSection.tsx src/components/home/__tests__/HeroSection.test.tsx
git commit -m "feat: add HeroSection with mural background and CTAs"
```

---

## Task 2: Why Chai Bar Section Component (TDD)

**Files:**
- Create: `src/components/home/__tests__/WhyChaiBar.test.tsx`
- Create: `src/components/home/WhyChaiBar.tsx`

- [ ] **Step 0: Invoke frontend-design skill**

Invoke skill: `frontend-design` with context: "3-column value proposition section for Chai Bar café. Title: 'Why Chai Bar'. Three cards with Lucide icons (Coffee, Home, BookOpen), headlines, and short descriptions. Warm-white or cream background, chai-brown headings, charcoal body text. Cards should feel organic and warm, not corporate. Design tokens: chai-brown, cream, terracotta, muted-gold, warm-white, charcoal. Nature Distilled style."

- [ ] **Step 1: Write the failing test**

```typescript
// src/components/home/__tests__/WhyChaiBar.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { WhyChaiBar } from "../WhyChaiBar";

describe("WhyChaiBar", () => {
  it("renders the section heading", () => {
    render(<WhyChaiBar />);
    expect(screen.getByRole("heading", { name: /why chai bar/i })).toBeInTheDocument();
  });

  it("renders three value propositions", () => {
    render(<WhyChaiBar />);
    expect(screen.getByText(/crafted chai/i)).toBeInTheDocument();
    expect(screen.getByText(/a space that feels like yours/i)).toBeInTheDocument();
    expect(screen.getByText(/city stories live here/i)).toBeInTheDocument();
  });

  it("renders descriptions for each value prop", () => {
    render(<WhyChaiBar />);
    expect(screen.getByText(/every cup made with intention/i)).toBeInTheDocument();
    expect(screen.getByText(/arched walls, warm light/i)).toBeInTheDocument();
    expect(screen.getByText(/conversations, ideas/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/home/__tests__/WhyChaiBar.test.tsx`
Expected: FAIL — `WhyChaiBar` module not found

- [ ] **Step 3: Implement WhyChaiBar**

```typescript
// src/components/home/WhyChaiBar.tsx
import { Coffee, Home, BookOpen } from "lucide-react";

const valueProps = [
  {
    icon: Coffee,
    headline: "Crafted Chai",
    description: "Every cup made with intention. Not a chain. Not rushed.",
  },
  {
    icon: Home,
    headline: "A Space That Feels Like Yours",
    description: "Arched walls, warm light, no judgment. Just you.",
  },
  {
    icon: BookOpen,
    headline: "City Stories Live Here",
    description: "Conversations, ideas, and the quiet hum of Indiranagar.",
  },
] as const;

export function WhyChaiBar() {
  return (
    <section className="bg-warm-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-brand text-3xl font-bold text-chai-brown sm:text-4xl">
          Why Chai Bar
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {valueProps.map(({ icon: Icon, headline, description }) => (
            <div
              key={headline}
              className="flex flex-col items-center rounded-2xl bg-cream/40 p-8 text-center transition-shadow duration-200 ease-out hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-terracotta/10">
                <Icon className="h-7 w-7 text-terracotta" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-brand text-xl font-semibold text-chai-brown">
                {headline}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/home/__tests__/WhyChaiBar.test.tsx`
Expected: 3 tests PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/home/WhyChaiBar.tsx src/components/home/__tests__/WhyChaiBar.test.tsx
git commit -m "feat: add WhyChaiBar section with 3-column value props"
```

---

## Task 3: Menu Teaser Section Component (TDD)

**Files:**
- Create: `src/components/home/__tests__/MenuTeaser.test.tsx`
- Create: `src/components/home/MenuTeaser.tsx`

- [ ] **Step 0: Invoke frontend-design skill**

Invoke skill: `frontend-design` with context: "Menu teaser section for Chai Bar café homepage. Shows 4 featured menu items as cards — 2 with food photography (caesar_salad.jpeg, chicken_bowl.jpeg) and 2 text-only with decorative backgrounds. Each card: item name, poetic one-line description, category tag pill. CTA link at bottom: 'Explore the Full Menu →' pointing to /menu. Cream/warm-white background. Cards with soft shadows, rounded corners. Nature Distilled style — earthy, organic."

- [ ] **Step 1: Write the failing test**

```typescript
// src/components/home/__tests__/MenuTeaser.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MenuTeaser } from "../MenuTeaser";

describe("MenuTeaser", () => {
  it("renders the section heading", () => {
    render(<MenuTeaser />);
    expect(screen.getByRole("heading", { name: /a taste of chai bar/i })).toBeInTheDocument();
  });

  it("renders featured menu items", () => {
    render(<MenuTeaser />);
    expect(screen.getByText(/irani cutting chai/i)).toBeInTheDocument();
    expect(screen.getByText(/caesar salad/i)).toBeInTheDocument();
  });

  it("renders poetic descriptions", () => {
    render(<MenuTeaser />);
    expect(screen.getByText(/the original\. unchanged for a reason/i)).toBeInTheDocument();
  });

  it("renders the CTA link to full menu", () => {
    render(<MenuTeaser />);
    const cta = screen.getByRole("link", { name: /explore the full menu/i });
    expect(cta).toHaveAttribute("href", "/menu");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/home/__tests__/MenuTeaser.test.tsx`
Expected: FAIL — `MenuTeaser` module not found

- [ ] **Step 3: Implement MenuTeaser**

```typescript
// src/components/home/MenuTeaser.tsx
import Image from "next/image";
import Link from "next/link";
import { Coffee } from "lucide-react";

const featuredItems = [
  {
    name: "Irani Cutting Chai",
    description: "The original. Unchanged for a reason.",
    category: "Chai Specials",
    image: null,
  },
  {
    name: "Caesar Salad",
    description: "Crisp greens, golden croutons, and a sun-kissed afternoon.",
    category: "Salads",
    image: "/images/caesar_salad.jpeg",
  },
  {
    name: "Chicken Bowl",
    description: "Hearty, honest, and everything your afternoon needs.",
    category: "Bowls",
    image: "/images/chicken_bowl.jpeg",
  },
  {
    name: "Masala Chai",
    description: "Warm spice meets cold evening energy.",
    category: "Chai Specials",
    image: null,
  },
] as const;

export function MenuTeaser() {
  return (
    <section className="bg-cream/30 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-brand text-3xl font-bold text-chai-brown sm:text-4xl">
          A Taste of Chai Bar
        </h2>
        <p className="mt-3 text-center font-body text-charcoal/60">
          A few favourites to get you curious.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {featuredItems.map((item) => (
            <div
              key={item.name}
              className="group overflow-hidden rounded-2xl bg-warm-white shadow-sm transition-shadow duration-200 ease-out hover:shadow-md"
            >
              {item.image ? (
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <div className="flex h-56 items-center justify-center bg-gradient-to-br from-chai-brown/5 to-terracotta/5 sm:h-64">
                  <Coffee className="h-12 w-12 text-chai-brown/20" strokeWidth={1.5} />
                </div>
              )}
              <div className="p-6">
                <span className="inline-block rounded-full bg-terracotta/10 px-3 py-1 font-body text-xs font-medium text-terracotta">
                  {item.category}
                </span>
                <h3 className="mt-3 font-brand text-xl font-semibold text-chai-brown">
                  {item.name}
                </h3>
                <p className="mt-2 font-body text-sm italic text-charcoal/60">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="inline-flex cursor-pointer items-center gap-2 font-body text-base font-semibold text-terracotta transition-colors duration-200 ease-out hover:text-chai-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
          >
            Explore the Full Menu
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/home/__tests__/MenuTeaser.test.tsx`
Expected: 4 tests PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/home/MenuTeaser.tsx src/components/home/__tests__/MenuTeaser.test.tsx
git commit -m "feat: add MenuTeaser section with featured items and CTA"
```

---

## Task 4: Gallery Strip Section Component (TDD)

**Files:**
- Create: `src/components/home/__tests__/GalleryStrip.test.tsx`
- Create: `src/components/home/GalleryStrip.tsx`

- [ ] **Step 0: Invoke frontend-design skill**

Invoke skill: `frontend-design` with context: "Photo gallery strip for Chai Bar café homepage. Horizontal scrolling container showing café photos with caption overlays on hover. 5 photos available (entrance mural, 2 interiors, 2 food shots). Captions are short evocative phrases. Section heading: 'Step Inside'. Cream background. Photos with rounded corners and soft shadows. Scroll with CSS overflow-x, snap points. Nature Distilled style — earthy, organic warmth."

- [ ] **Step 1: Write the failing test**

```typescript
// src/components/home/__tests__/GalleryStrip.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { GalleryStrip } from "../GalleryStrip";

describe("GalleryStrip", () => {
  it("renders the section heading", () => {
    render(<GalleryStrip />);
    expect(screen.getByRole("heading", { name: /step inside/i })).toBeInTheDocument();
  });

  it("renders gallery images", () => {
    render(<GalleryStrip />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(3);
  });

  it("renders captions for images", () => {
    render(<GalleryStrip />);
    expect(screen.getByText(/the mural that started it all/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/home/__tests__/GalleryStrip.test.tsx`
Expected: FAIL — `GalleryStrip` module not found

- [ ] **Step 3: Implement GalleryStrip**

```typescript
// src/components/home/GalleryStrip.tsx
import Image from "next/image";

const galleryItems = [
  {
    src: "/images/entrance.jpeg",
    alt: "Chai Bar mural wall with botanical line art",
    caption: "The mural that started it all.",
  },
  {
    src: "/images/interior1.jpeg",
    alt: "Café interior with lanterns and arched doorways",
    caption: "Lanterns, arches, and warm light.",
  },
  {
    src: "/images/caesar_salad.jpeg",
    alt: "Fresh caesar salad on a wooden table",
    caption: "Fresh from the kitchen.",
  },
  {
    src: "/images/interior2.jpeg",
    alt: "Cozy seating area with neon sign glow",
    caption: "One cup away from happiness.",
  },
  {
    src: "/images/chicken_bowl.jpeg",
    alt: "Hearty chicken bowl with greens and egg",
    caption: "Made with love. Always.",
  },
] as const;

export function GalleryStrip() {
  return (
    <section className="bg-warm-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-brand text-3xl font-bold text-chai-brown sm:text-4xl">
          Step Inside
        </h2>
        <p className="mt-3 text-center font-body text-charcoal/60">
          A little look at what awaits you.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-7xl">
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.src}
              className="group relative flex-none snap-center"
            >
              <div className="relative h-72 w-64 overflow-hidden rounded-2xl shadow-sm transition-shadow duration-200 ease-out group-hover:shadow-lg sm:h-80 sm:w-72">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  sizes="288px"
                />
                {/* Caption overlay on hover */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100">
                  <p className="p-4 font-script text-base text-cream">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/home/__tests__/GalleryStrip.test.tsx`
Expected: 3 tests PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/home/GalleryStrip.tsx src/components/home/__tests__/GalleryStrip.test.tsx
git commit -m "feat: add GalleryStrip with horizontal scroll and hover captions"
```

---

## Task 5: Compose Homepage

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Update page.tsx to compose all sections**

```typescript
// src/app/page.tsx
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChaiBar } from "@/components/home/WhyChaiBar";
import { MenuTeaser } from "@/components/home/MenuTeaser";
import { GalleryStrip } from "@/components/home/GalleryStrip";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChaiBar />
      <MenuTeaser />
      <GalleryStrip />
    </>
  );
}
```

- [ ] **Step 2: Add scrollbar-hide utility to globals.css**

Add to `src/app/globals.css` after the existing `@layer base` blocks:

```css
@layer utilities {
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
```

- [ ] **Step 3: Run all tests**

Run: `npx vitest run`
Expected: All tests pass (9 existing + 15 new = 24 total)

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx src/app/globals.css
git commit -m "feat: compose homepage with Hero, WhyChaiBar, MenuTeaser, GalleryStrip"
```

---

## Task 6: Verify Everything Works

- [ ] **Step 1: Run all tests**

Run: `npx vitest run`
Expected: All 24 tests pass

- [ ] **Step 2: Run production build**

Run: `npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 3: Start dev server**

Run: `npm run dev`
Verify at `http://localhost:3000`:
- Hero section fills viewport with mural background
- CTAs visible and clickable
- Scroll reveals Why Chai Bar section
- Menu Teaser shows 4 cards (2 with images)
- Gallery strip scrolls horizontally

- [ ] **Step 4: Playwright visual check (mobile + desktop)**

Take screenshots of:
- Homepage at 1280x800 (desktop) — full page
- Homepage at 390x844 (iPhone 14 — mobile) — full page
- Gallery section hover state (desktop)

Verify:
- Hero image fills viewport, text is legible over gradient
- Why Chai Bar cards are 3-col on desktop, stacked on mobile
- Menu Teaser cards show images properly, 2-col on desktop
- Gallery scrolls horizontally, captions appear on hover
- All fonts rendering correctly (Playfair, Dancing Script, DM Sans)
- Mobile: everything stacked, touch-friendly, no horizontal overflow

- [ ] **Step 5: Commit verification screenshots**

```bash
git add screenshots/
git commit -m "chore: Phase 1 verification screenshots"
```

---

## Task 7: Code Review

- [ ] **Step 1: Invoke superpowers:requesting-code-review**

Review all Phase 1 work — HeroSection, WhyChaiBar, MenuTeaser, GalleryStrip, page composition. Check:
- Image optimization (next/image used correctly, sizes prop accurate)
- Accessibility (alt text, focus states, keyboard navigation)
- Responsive design (mobile-first, no horizontal overflow)
- Design token usage (consistent with Chai Bar palette)
- Test coverage (all sections tested)
- No emoji icons in production code (Lucide for WhyChaiBar)

- [ ] **Step 2: Address any review findings**

---

## Task 8: Update Phase Status + Push

- [ ] **Step 1: Update CLAUDE.md phase tracker**

Change:
```
- [ ] **Phase 1** — Homepage (Hero, Why Chai Bar, Menu Teaser, Gallery)
```
To:
```
- [x] **Phase 1** — Homepage (Hero, Why Chai Bar, Menu Teaser, Gallery)
```

- [ ] **Step 2: Append to claude-memory.md**

Add entry:
```
### 2026-03-22 — Phase 1 Complete
- Homepage built with 4 sections: Hero, Why Chai Bar, Menu Teaser, Gallery Strip
- Real café images used: entrance mural (hero), 2 interiors + 2 food shots (gallery/teaser)
- 24 total tests passing (9 Phase 0 + 15 Phase 1)
- Lucide React icons used (no emoji icons)
- Note: Only 5 images available — gallery needs more photos from client for full 8-10 image strip
- Ready for Phase 2 (Menu page)
```

- [ ] **Step 3: Commit and push**

```bash
git add CLAUDE.md claude-memory.md
git commit -m "docs: mark Phase 1 complete, update memory"
git push
```
