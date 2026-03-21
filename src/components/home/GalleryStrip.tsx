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
