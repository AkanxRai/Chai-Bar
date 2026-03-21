"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/stories", label: "Stories" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cream/20 bg-warm-white/95 backdrop-blur supports-[backdrop-filter]:bg-warm-white/80">
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="cursor-pointer font-brand text-2xl font-bold tracking-tight text-chai-brown transition-colors duration-200 ease-out hover:text-chai-brown/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chai-brown focus-visible:ring-offset-2"
        >
          Chai Bar
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="cursor-pointer font-body text-sm font-medium text-charcoal/70 transition-colors duration-200 ease-out hover:text-chai-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chai-brown focus-visible:ring-offset-2 rounded-sm"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="inline-flex cursor-pointer items-center justify-center rounded-md p-2.5 text-charcoal transition-colors duration-200 ease-out hover:bg-cream/30 hover:text-chai-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chai-brown md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="border-t border-cream/20 bg-warm-white md:hidden">
          <ul className="flex flex-col px-4 py-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block cursor-pointer rounded-lg px-4 py-3 font-body text-base font-medium text-charcoal/70 transition-colors duration-200 ease-out hover:bg-cream/30 hover:text-chai-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chai-brown"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
