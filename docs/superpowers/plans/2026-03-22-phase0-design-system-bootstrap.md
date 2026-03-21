# Phase 0: Design System Bootstrap & Project Scaffold

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish the complete project foundation — Next.js 14, Tailwind CSS, shadcn/ui, design tokens, fonts, and global layout (Navbar + Footer) — so all future phases build on a consistent, themed base.

**Architecture:** App Router-based Next.js 14 with TypeScript. All pages under `src/app/`. Shared UI components in `src/components/`. Design tokens defined as CSS custom properties in `globals.css` and extended into Tailwind config. shadcn/ui provides accessible component primitives, restyled with Chai Bar tokens.

**Tech Stack:** Next.js 14.2.35, TypeScript, Tailwind CSS 3, shadcn/ui, Vitest + React Testing Library, Playwright

---

## File Structure

```
chai-bar/                              (project root — existing)
├── CLAUDE.md                          (keep — project instructions)
├── chai-bar-website-design.md         (keep — full spec)
├── claude-memory.md                   (keep — persistent learnings)
├── docs/superpowers/plans/            (this plan lives here)
│
├── package.json                       (CREATE — project manifest)
├── next.config.mjs                    (CREATE — Next.js config)
├── tailwind.config.ts                 (CREATE — Tailwind + Chai Bar tokens)
├── tsconfig.json                      (CREATE — TypeScript config)
├── postcss.config.mjs                 (CREATE — PostCSS for Tailwind)
├── components.json                    (CREATE — shadcn/ui config)
├── vitest.config.ts                   (CREATE — test runner)
├── .gitignore                         (CREATE — standard Next.js ignores)
│
├── src/
│   ├── app/
│   │   ├── globals.css                (CREATE — design tokens + Tailwind directives)
│   │   ├── layout.tsx                 (CREATE — root layout: fonts, Navbar, Footer)
│   │   ├── page.tsx                   (CREATE — homepage placeholder)
│   │   ├── menu/page.tsx              (CREATE — menu route placeholder)
│   │   ├── stories/page.tsx           (CREATE — blog route placeholder)
│   │   ├── about/page.tsx             (CREATE — about route placeholder)
│   │   └── visit/page.tsx             (CREATE — visit route placeholder)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             (CREATE — site navigation)
│   │   │   ├── Footer.tsx             (CREATE — site footer)
│   │   │   └── __tests__/
│   │   │       ├── Navbar.test.tsx     (CREATE — Navbar tests)
│   │   │       └── Footer.test.tsx     (CREATE — Footer tests)
│   │   └── ui/                        (CREATE — shadcn/ui components go here)
│   │
│   ├── lib/
│   │   └── utils.ts                   (CREATE — cn() utility for shadcn/ui)
│   │
│   └── test/
│       └── setup.ts                   (CREATE — Vitest + RTL setup)
│
└── public/
    └── (empty — static assets later)
```

---

## Task 1: Initialize Git Repository

**Files:**
- Create: `.gitignore`

- [ ] **Step 1: Initialize git repo**

Run: `git init`

- [ ] **Step 2: Create .gitignore**

```gitignore
# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

- [ ] **Step 3: Initial commit**

```bash
git add .gitignore CLAUDE.md chai-bar-website-design.md claude-memory.md docs/
git commit -m "chore: initial commit with project docs and Phase 0 plan"
```

---

## Task 2: Scaffold Next.js 14 Project

**Files:**
- Create: `package.json`, `next.config.mjs`, `tsconfig.json`, `postcss.config.mjs`

- [ ] **Step 1: Create package.json**

```json
{
  "name": "chai-bar",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "vitest",
    "test:run": "vitest run"
  },
  "dependencies": {
    "next": "14.2.35",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "typescript": "^5",
    "tailwindcss": "^3.4",
    "postcss": "^8",
    "autoprefixer": "^10",
    "eslint": "^8",
    "eslint-config-next": "14.2.35"
  }
}
```

- [ ] **Step 2: Create next.config.mjs**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
```

- [ ] **Step 3: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 4: Create postcss.config.mjs**

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

- [ ] **Step 5: Install dependencies**

Run: `npm install`
Expected: Clean install, no errors. `node_modules/` created.

- [ ] **Step 6: Commit scaffold**

```bash
git add package.json package-lock.json next.config.mjs tsconfig.json postcss.config.mjs
git commit -m "chore: scaffold Next.js 14 project with TypeScript and Tailwind"
```

---

## Task 3: Run ui-ux-pro-max for Design Tokens

**Files:**
- None created yet — this task captures design intelligence to inform Task 4

- [ ] **Step 1: Invoke ui-ux-pro-max skill**

Invoke skill: `ui-ux-pro-max`
Query context: "café warm cozy artisan indiranagar earthy local storytelling chai indian warm-toned experience-first mobile-first"

Read the output carefully. It will recommend:
- Color palette (may confirm or adjust the baseline tokens in CLAUDE.md)
- Font pairings (may confirm Playfair + Dancing Script + DM Sans or suggest alternatives)
- UX rules, spacing, animation timing
- Anti-patterns to avoid

- [ ] **Step 2: Document token decisions**

Compare uipro output against CLAUDE.md baseline tokens. If uipro suggests changes, note them. The uipro output takes precedence per CLAUDE.md rules.

Record final token decisions before proceeding to Task 4.

---

## Task 4: Configure Tailwind + Design Tokens

**Files:**
- Create: `tailwind.config.ts`, `src/app/globals.css`

- [ ] **Step 1: Create tailwind.config.ts with Chai Bar tokens**

```typescript
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "chai-brown": "var(--chai-brown)",
        cream: "var(--cream)",
        terracotta: "var(--terracotta)",
        "muted-gold": "var(--muted-gold)",
        charcoal: "var(--charcoal)",
        "warm-white": "var(--warm-white)",
      },
      fontFamily: {
        brand: ["var(--font-brand)"],
        script: ["var(--font-script)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
```

**Note:** Update color values if ui-ux-pro-max (Task 3) recommended different tokens.

- [ ] **Step 2: Create globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Chai Bar Design Tokens */
    --chai-brown: #5C3317;
    --cream: #F5ECD7;
    --terracotta: #C1440E;
    --muted-gold: #C9A84C;
    --charcoal: #2A2A2A;
    --warm-white: #FAF6EF;

    --background: var(--warm-white);
    --foreground: var(--charcoal);
  }
}

@layer base {
  body {
    background-color: var(--background);
    color: var(--foreground);
    font-family: var(--font-body);
  }
}
```

**Note:** Update hex values if ui-ux-pro-max suggested different colors.

- [ ] **Step 3: Install tailwindcss-animate**

Run: `npm install tailwindcss-animate`

- [ ] **Step 4: Commit design tokens**

```bash
git add tailwind.config.ts src/app/globals.css
git commit -m "feat: add Chai Bar design tokens and Tailwind config"
```

---

## Task 5: Install and Configure shadcn/ui

**Files:**
- Create: `components.json`, `src/lib/utils.ts`

- [ ] **Step 1: Install shadcn/ui dependencies**

Run: `npm install class-variance-authority clsx tailwind-merge lucide-react`

- [ ] **Step 2: Create src/lib/utils.ts**

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 3: Create components.json**

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

- [ ] **Step 4: Commit shadcn/ui setup**

```bash
git add components.json src/lib/utils.ts
git commit -m "chore: configure shadcn/ui with Chai Bar aliases"
```

---

## Task 6: Set Up Fonts via next/font

**Files:**
- Create: `src/app/fonts.ts`

- [ ] **Step 1: Create fonts.ts**

```typescript
import { Playfair_Display, DM_Sans, Dancing_Script } from "next/font/google";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-brand",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});
```

- [ ] **Step 2: Commit fonts config**

```bash
git add src/app/fonts.ts
git commit -m "feat: configure brand fonts (Playfair Display, DM Sans, Dancing Script)"
```

---

## Task 7: Set Up Testing Infrastructure

**Files:**
- Create: `vitest.config.ts`, `src/test/setup.ts`

- [ ] **Step 1: Install test dependencies**

Run: `npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event`

- [ ] **Step 2: Create vitest.config.ts**

```typescript
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    globals: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

- [ ] **Step 3: Create src/test/setup.ts**

```typescript
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 4: Verify test runner works**

Run: `npx vitest run`
Expected: "No test files found" (no tests yet) — confirms runner is configured correctly.

- [ ] **Step 5: Commit test setup**

```bash
git add vitest.config.ts src/test/setup.ts
git commit -m "chore: set up Vitest + React Testing Library"
```

---

## Task 8: Build Navbar Component (TDD)

**Files:**
- Create: `src/components/layout/__tests__/Navbar.test.tsx`
- Create: `src/components/layout/Navbar.tsx`

- [ ] **Step 0: Invoke frontend-design skill**

Invoke skill: `frontend-design` with context: "Navbar for Chai Bar café website — warm earthy tones, sticky header, brand logo left, nav links right (Menu, Stories, About, Visit), mobile hamburger menu. Design tokens: chai-brown, cream, warm-white, charcoal. Fonts: Playfair Display (brand name), DM Sans (nav links)."

Read output and apply creative direction to the implementation in Step 3.

- [ ] **Step 1: Write the failing test**

```typescript
// src/components/layout/__tests__/Navbar.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Navbar } from "../Navbar";

describe("Navbar", () => {
  it("renders the brand name", () => {
    render(<Navbar />);
    expect(screen.getByText("Chai Bar")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /menu/i })).toHaveAttribute("href", "/menu");
    expect(screen.getByRole("link", { name: /stories/i })).toHaveAttribute("href", "/stories");
    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: /visit/i })).toHaveAttribute("href", "/visit");
  });

  it("renders the brand link pointing to home", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /chai bar/i })).toHaveAttribute("href", "/");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/layout/__tests__/Navbar.test.tsx`
Expected: FAIL — `Navbar` module not found

- [ ] **Step 3: Implement Navbar**

```typescript
// src/components/layout/Navbar.tsx
import Link from "next/link";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/stories", label: "Stories" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-cream/20 bg-warm-white/95 backdrop-blur supports-[backdrop-filter]:bg-warm-white/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-brand text-2xl font-bold tracking-tight text-chai-brown"
        >
          Chai Bar
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="font-body text-sm font-medium text-charcoal/70 transition-colors hover:text-chai-brown"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button — enhanced in Phase 1 */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-charcoal md:hidden"
          aria-label="Open menu"
          type="button"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/layout/__tests__/Navbar.test.tsx`
Expected: 3 tests PASS

- [ ] **Step 5: Commit Navbar**

```bash
git add src/components/layout/Navbar.tsx src/components/layout/__tests__/Navbar.test.tsx
git commit -m "feat: add Navbar component with navigation links"
```

---

## Task 9: Build Footer Component (TDD)

**Files:**
- Create: `src/components/layout/__tests__/Footer.test.tsx`
- Create: `src/components/layout/Footer.tsx`

- [ ] **Step 0: Invoke frontend-design skill**

Invoke skill: `frontend-design` with context: "Footer for Chai Bar café website — dark chai-brown background, cream text. Three columns: brand + tagline (Dancing Script), nav links, neon sign quote. Design tokens: chai-brown, cream, warm-white, muted-gold, charcoal. Fonts: Playfair Display (brand), Dancing Script (tagline + quote), DM Sans (links)."

Read output and apply creative direction to the implementation in Step 3.

- [ ] **Step 1: Write the failing test**

```typescript
// src/components/layout/__tests__/Footer.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "../Footer";

describe("Footer", () => {
  it("renders the brand name", () => {
    render(<Footer />);
    expect(screen.getByText("Chai Bar")).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    render(<Footer />);
    expect(screen.getByText(/chai, chill & city stories/i)).toBeInTheDocument();
  });

  it("renders location info", () => {
    render(<Footer />);
    expect(screen.getByText(/indiranagar, bangalore/i)).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /menu/i })).toHaveAttribute("href", "/menu");
    expect(screen.getByRole("link", { name: /stories/i })).toHaveAttribute("href", "/stories");
    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: /visit/i })).toHaveAttribute("href", "/visit");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/layout/__tests__/Footer.test.tsx`
Expected: FAIL — `Footer` module not found

- [ ] **Step 3: Implement Footer**

```typescript
// src/components/layout/Footer.tsx
import Link from "next/link";

const footerLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/stories", label: "Stories" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-cream/30 bg-chai-brown text-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="font-brand text-2xl font-bold text-warm-white">
              Chai Bar
            </h2>
            <p className="mt-2 font-script text-lg text-muted-gold">
              Chai, Chill & City Stories
            </p>
            <p className="mt-4 text-sm text-cream/70">
              Indiranagar, Bangalore
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-muted-gold">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-cream/70 transition-colors hover:text-warm-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Neon sign quote */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-script text-xl text-muted-gold/80">
              &ldquo;One cup away from happiness&rdquo;
            </p>
            <p className="mt-6 text-xs text-cream/50">
              &copy; {new Date().getFullYear()} Chai Bar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/layout/__tests__/Footer.test.tsx`
Expected: 4 tests PASS

- [ ] **Step 5: Commit Footer**

```bash
git add src/components/layout/Footer.tsx src/components/layout/__tests__/Footer.test.tsx
git commit -m "feat: add Footer component with brand, nav, and tagline"
```

---

## Task 10: Create Root Layout + Placeholder Pages

**Files:**
- Create: `src/app/layout.tsx`, `src/app/page.tsx`
- Create: `src/app/menu/page.tsx`, `src/app/stories/page.tsx`, `src/app/about/page.tsx`, `src/app/visit/page.tsx`

- [ ] **Step 1: Create root layout**

```typescript
// src/app/layout.tsx
import type { Metadata } from "next";
import { playfairDisplay, dmSans, dancingScript } from "./fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Chai Bar — Chai, Chill & City Stories",
    template: "%s | Chai Bar",
  },
  description:
    "Your corner of Indiranagar. Come for the chai. Stay for the stories. Crafted chai, warm vibes, and the soul of Bangalore.",
  keywords: [
    "chai bar",
    "indiranagar cafe",
    "bangalore cafe",
    "chai cafe",
    "city stories",
    "indiranagar bangalore",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable} ${dancingScript.variable}`}
    >
      <body className="min-h-screen bg-warm-white font-body text-charcoal antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Create homepage placeholder**

```typescript
// src/app/page.tsx
export default function HomePage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-brand text-5xl font-bold text-chai-brown sm:text-6xl">
        Chai Bar
      </h1>
      <p className="mt-4 font-script text-2xl text-muted-gold">
        Chai, Chill & City Stories
      </p>
      <p className="mt-6 max-w-md font-body text-charcoal/70">
        Your corner of Indiranagar. Come for the chai. Stay for the stories.
      </p>
    </div>
  );
}
```

- [ ] **Step 3: Create route placeholders**

Create 4 placeholder pages, each with a heading and brief text:

```typescript
// src/app/menu/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Menu" };

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-brand text-4xl font-bold text-chai-brown">Our Menu</h1>
      <p className="mt-4 text-charcoal/70">Full menu coming soon.</p>
    </div>
  );
}
```

```typescript
// src/app/stories/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = { title: "City Stories" };

export default function StoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-brand text-4xl font-bold text-chai-brown">City Stories</h1>
      <p className="mt-4 text-charcoal/70">Stories from the heart of Indiranagar — coming soon.</p>
    </div>
  );
}
```

```typescript
// src/app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-brand text-4xl font-bold text-chai-brown">About Chai Bar</h1>
      <p className="mt-4 text-charcoal/70">Our story — coming soon.</p>
    </div>
  );
}
```

```typescript
// src/app/visit/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Visit Us" };

export default function VisitPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-brand text-4xl font-bold text-chai-brown">Visit Us</h1>
      <p className="mt-4 text-charcoal/70">Find us in Indiranagar, Bangalore — details coming soon.</p>
    </div>
  );
}
```

- [ ] **Step 4: Commit layout + pages**

```bash
git add src/app/
git commit -m "feat: add root layout with Navbar/Footer and placeholder route pages"
```

---

## Task 11: Verify Everything Works

- [ ] **Step 1: Run all tests**

Run: `npx vitest run`
Expected: All 7 tests pass (3 Navbar + 4 Footer)

- [ ] **Step 2: Run the dev server**

Run: `npm run dev`
Expected: Compiles without errors, accessible at `http://localhost:3000`

- [ ] **Step 3: Run production build**

Run: `npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 4: Playwright visual check (mobile + desktop)**

Take screenshots of:
- Homepage at 1280x800 (desktop)
- Homepage at 390x844 (iPhone 14 — mobile)
- `/menu` at 390x844

Verify:
- Chai Bar brand fonts rendering
- Warm-white background applied
- Navbar visible with all 4 links
- Footer visible with brand, tagline, nav, quote
- Mobile: hamburger icon visible, nav links hidden

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "chore: Phase 0 complete — design system bootstrap and project scaffold"
```

---

## Task 12: Code Review

- [ ] **Step 1: Invoke superpowers:requesting-code-review**

Review all Phase 0 work — scaffold config, design tokens, fonts, Navbar, Footer, layout, placeholder pages. Confirm adherence to design spec and CLAUDE.md rules.

- [ ] **Step 2: Address any review findings before proceeding**

---

## Task 13: Update Phase Status

- [ ] **Step 1: Update CLAUDE.md phase tracker**

Change:
```
- [ ] **Phase 0** — Design system bootstrap + project scaffold
```
To:
```
- [x] **Phase 0** — Design system bootstrap + project scaffold
```

- [ ] **Step 2: Append to claude-memory.md**

Add entry:
```
### 2026-03-22 — Phase 0 Complete
- Next.js 14.2.35 + TypeScript + Tailwind 3 + shadcn/ui scaffolded
- Design tokens: [record final palette — baseline or uipro-modified]
- Fonts: Playfair Display (brand), Dancing Script (script), DM Sans (body)
- Navbar + Footer built with TDD (7 passing tests)
- All 5 routes created: /, /menu, /stories, /about, /visit
- Vitest + React Testing Library configured
- Ready for Phase 1 (Homepage)
```

- [ ] **Step 3: Commit status updates**

```bash
git add CLAUDE.md claude-memory.md
git commit -m "docs: mark Phase 0 complete, update memory"
```
