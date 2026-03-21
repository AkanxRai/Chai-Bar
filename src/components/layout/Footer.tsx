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
              Chai, Chill &amp; City Stories
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
                    className="text-sm text-cream/70 transition-colors duration-200 ease-out hover:text-warm-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-muted-gold focus-visible:ring-offset-2"
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
