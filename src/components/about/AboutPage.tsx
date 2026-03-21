import Image from "next/image";
import Link from "next/link";
import { UtensilsCrossed, MapPin, Clock, Users } from "lucide-react";

const values = [
  {
    icon: UtensilsCrossed,
    heading: "Real Food",
    description: "No shortcuts. No artificial flavours. Every dish made with care.",
  },
  {
    icon: MapPin,
    heading: "Local First",
    description:
      "We source locally whenever we can. Our chai leaves, our bread, our community.",
  },
  {
    icon: Clock,
    heading: "No Rush",
    description:
      "Sit as long as you want. Read. Talk. Stare at the wall. We don't mind.",
  },
  {
    icon: Users,
    heading: "Community",
    description: "Chai Bar is yours. It's the neighbourhood's living room.",
  },
] as const;

export function AboutPage() {
  return (
    <main>
      {/* Section 1: Hero / Origin Story */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/entrance.jpeg"
          alt="Chai Bar entrance mural reading Chai, Chill & City Stories"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-charcoal/20" />
        <div className="relative z-10 flex flex-col items-center px-4 text-center">
          <h1 className="font-script text-5xl text-warm-white drop-shadow-lg sm:text-6xl md:text-7xl">
            Our Story
          </h1>
          <p className="mt-4 font-body text-lg text-cream/90 drop-shadow-md sm:text-xl">
            More than a café. A feeling.
          </p>
        </div>
      </section>

      {/* Section 2: The Beginning */}
      <section className="bg-warm-white px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-brand text-3xl font-bold text-chai-brown sm:text-4xl">
            How It Started
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <p className="font-body text-base leading-relaxed text-charcoal/80">
                Chai Bar was born from a simple frustration — Indiranagar had no shortage of
                coffee shops, but finding a place where you could sit with a proper cup of
                chai, unhurried and unjudged, felt impossible. The founders wanted to build
                something that felt less like a transaction and more like an invitation.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/80">
                Chai is not just a beverage in this part of the world. It is a ritual. It is
                the thing you make when someone arrives at your door. It is what you drink
                before a difficult conversation and after a long day. Chai Bar was designed
                to hold all of that — the warmth, the pause, the quiet companionship of a
                cup you didn't rush through.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/80">
                The mural says it best: Chai, Chill &amp; City Stories. That's not a tagline.
                That's the whole brief. Come as you are. Stay as long as you like. Leave
                with a story worth telling.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/interior1.jpeg"
                alt="Chai Bar interior with arched doorways and warm lantern light"
                width={640}
                height={480}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Space */}
      <section className="bg-cream/30 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-brand text-3xl font-bold text-chai-brown sm:text-4xl">
            The Space
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-2xl shadow-lg lg:order-1">
              <Image
                src="/images/interior2.jpeg"
                alt="Chai Bar neon sign reading One cup away from happiness"
                width={640}
                height={480}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-5 lg:order-2">
              <p className="font-body text-base leading-relaxed text-charcoal/80">
                Every design choice at Chai Bar was intentional. The arched doorways slow
                you down — you can't rush through an arch. The lanterns cast the kind of
                warm, amber light that makes everything look a little more forgiving. The
                mural at the entrance, hand-painted in script, is the first thing you see
                and the last thing you photograph on the way out.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/80">
                And then there's the neon sign. "One cup away from happiness." It glows
                softly above the counter, equal parts promise and punchline. It works
                because it's true — a good cup of chai really does shift something.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/80">
                The space was designed to feel lived-in from day one. Not pristine. Not
                trying to impress. Just genuinely comfortable — the kind of place you return
                to because it already feels familiar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Values */}
      <section className="bg-warm-white px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-brand text-3xl font-bold text-chai-brown sm:text-4xl">
            What We Believe In
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map(({ icon: Icon, heading, description }) => (
              <div
                key={heading}
                className="rounded-xl bg-cream/40 p-6 shadow-sm transition-shadow duration-200 ease-out hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/10">
                  <Icon className="h-6 w-6 text-terracotta" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-brand text-xl font-semibold text-chai-brown">
                  {heading}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/70">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="bg-chai-brown px-4 py-20 text-center sm:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-script text-5xl text-warm-white drop-shadow-md sm:text-6xl">
            Come Say Hello
          </h2>
          <p className="mt-4 font-body text-base text-cream/80 sm:text-lg">
            We're at Indiranagar, Bangalore. The chai is always on.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/menu"
              className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-terracotta px-8 py-3 font-body text-sm font-semibold text-warm-white shadow-md transition-all duration-200 ease-out hover:bg-terracotta/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-white focus-visible:ring-offset-2"
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
      </section>
    </main>
  );
}
