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
