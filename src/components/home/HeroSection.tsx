"use client";

import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const handleScrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const menuTeaser = document.getElementById("menu-teaser");
    if (menuTeaser) {
      menuTeaser.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/menu";
    }
  };

  return (
    <section
      className="relative min-h-[90vh] overflow-hidden sm:min-h-[100dvh]"
      aria-label="Chai Bar hero"
    >
      {/* Background image */}
      <Image
        src="/images/interior2.jpeg"
        alt="Chai Bar interior — warm seating area with rattan chairs and arched windows"
        fill
        className="object-cover"
        style={{ objectPosition: "center 30%" }}
        priority
        sizes="100vw"
      />

      {/* Warm gradient overlay — warm-dark tint, NOT grey */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(30, 18, 8, 0.55) 0%,
            rgba(30, 18, 8, 0.20) 50%,
            rgba(30, 18, 8, 0.60) 100%
          )`,
        }}
        aria-hidden="true"
      />
      {/* Mobile: darker overlay for phone screen brightness */}
      <div
        className="absolute inset-0 sm:hidden"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(30, 18, 8, 0.65) 0%,
            rgba(30, 18, 8, 0.30) 50%,
            rgba(30, 18, 8, 0.70) 100%
          )`,
        }}
        aria-hidden="true"
      />

      {/* Content — left-aligned on desktop, centered on mobile */}
      <div className="relative z-10 flex min-h-[90vh] items-end sm:min-h-[100dvh]">
        <div
          className="mx-auto w-full max-w-[600px] px-6 pb-28 text-center sm:mx-0 sm:text-left"
          style={{ paddingLeft: "clamp(1.5rem, 6vw, 6rem)" }}
        >
          {/* Eyebrow */}
          <p
            className="hero-eyebrow font-body text-xs font-medium uppercase tracking-[0.12em] opacity-0 motion-safe:animate-fade-up"
            style={{
              color: "#C9A84C",
              animationDelay: "0.2s",
              fontSize: "0.8rem",
            }}
          >
            Indiranagar&rsquo;s favourite chai stop
          </p>

          {/* Headline */}
          <h1
            className="hero-headline mt-4 font-script font-bold leading-[1.15] tracking-tight opacity-0 motion-safe:animate-fade-up-slow"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 5.5rem)",
              color: "#F5ECD7",
              textShadow: "0 2px 20px rgba(30, 18, 8, 0.6)",
              animationDelay: "0.5s",
              letterSpacing: "-0.01em",
            }}
          >
            One cup away from happiness.
          </h1>

          {/* Subheadline */}
          <p
            className="hero-sub mt-5 font-brand font-normal opacity-0 motion-safe:animate-fade-up"
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.4rem)",
              color: "rgba(245, 236, 215, 0.85)",
              letterSpacing: "0.04em",
              animationDelay: "0.8s",
            }}
          >
            Chai Bar, Indiranagar. Come find your corner.
          </p>

          {/* CTA buttons */}
          <div
            className="hero-ctas mt-8 flex flex-col gap-4 opacity-0 motion-safe:animate-fade-up sm:flex-row"
            style={{ animationDelay: "1.0s" }}
          >
            {/* Primary CTA — gold */}
            <a
              href="#menu-teaser"
              onClick={handleScrollToMenu}
              className="inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.06em] transition-all duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2"
              style={{
                backgroundColor: "#C9A84C",
                color: "#2A2A2A",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#D4B85C")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#C9A84C")
              }
            >
              See What&rsquo;s Brewing &rarr;
            </a>

            {/* Secondary CTA — ghost */}
            <Link
              href="/visit"
              className="inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded border-2 px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.06em] transition-all duration-200 ease-out hover:bg-[rgba(245,236,215,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5ECD7] focus-visible:ring-offset-2"
              style={{
                borderColor: "rgba(245, 236, 215, 0.6)",
                color: "#F5ECD7",
              }}
            >
              Find Us
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator — delayed fade-in */}
      <div
        className="hero-scroll absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 motion-safe:animate-fade-up"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="flex flex-col items-center gap-1">
          <span
            className="font-body text-[0.7rem] uppercase tracking-widest"
            style={{ color: "rgba(245, 236, 215, 0.5)" }}
          >
            scroll
          </span>
          <svg
            className="h-5 w-5 animate-bounce"
            style={{ color: "rgba(245, 236, 215, 0.5)" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
