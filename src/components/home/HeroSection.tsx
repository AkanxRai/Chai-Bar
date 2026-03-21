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

      {/* Dark overlay for text readability over black/white mural */}
      <div className="absolute inset-0 bg-charcoal/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-charcoal/20" />

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
