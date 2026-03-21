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
