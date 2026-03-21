import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/chaibarindiranagar/";
const INSTAGRAM_HANDLE = "@chaibarindiranagar";

const tiles = [
  {
    src: "/images/entrance.jpeg",
    alt: "Chai Bar entrance with mural",
  },
  {
    src: "/images/interior1.jpeg",
    alt: "Cozy café interior with lanterns",
  },
  {
    src: "/images/interior2.jpeg",
    alt: "Warm seating area with neon sign",
  },
  {
    src: "/images/caesar_salad.jpeg",
    alt: "Fresh caesar salad from the kitchen",
  },
  {
    src: "/images/chicken_bowl.jpeg",
    alt: "Hearty chicken bowl with greens",
  },
  {
    src: "/images/entrance.jpeg",
    alt: "Chai Bar entrance by evening light",
  },
] as const;

export function InstagramSection() {
  return (
    <section className="bg-warm-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-center font-brand text-3xl font-bold text-chai-brown sm:text-4xl">
          Tag Us. Be Part of the Story.
        </h2>

        {/* Handle */}
        <p className="mt-3 text-center">
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-terracotta underline-offset-4 hover:underline focus:outline-none focus-visible:underline"
            aria-label={`Visit our Instagram profile ${INSTAGRAM_HANDLE}`}
          >
            {INSTAGRAM_HANDLE}
          </Link>
        </p>

        {/* Image Grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {tiles.map((tile, index) => (
            <Link
              key={`${tile.src}-${index}`}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl shadow-sm transition-shadow duration-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
              aria-label={`View our Instagram post: ${tile.alt}`}
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              {/* Hover overlay with Instagram icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal/40 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100">
                <Instagram
                  className="h-8 w-8 text-white/80"
                  strokeWidth={1.5}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 font-body text-sm font-medium text-terracotta underline-offset-4 hover:underline focus:outline-none focus-visible:underline"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.5} />
            Follow us on Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
