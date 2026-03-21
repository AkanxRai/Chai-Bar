import { Star, ExternalLink } from "lucide-react";
import { reviews } from "@/data/reviews";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Chai+Bar/@12.9783669,77.6383216,17z/";

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className="fill-muted-gold text-muted-gold"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="bg-cream px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-center font-brand text-3xl font-bold text-chai-brown sm:text-4xl">
          What People Say Over a Second Cup
        </h2>
        <p className="mt-3 text-center font-body text-charcoal/60">
          Real reviews from real visitors.
        </p>

        {/* Google rating badge */}
        <div className="mt-6 flex justify-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream bg-warm-white px-5 py-2 shadow-sm transition-shadow duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-muted-gold focus:ring-offset-2"
            aria-label="5.0 on Google — opens Google Maps"
          >
            <Star
              size={18}
              className="fill-muted-gold text-muted-gold"
              aria-hidden="true"
            />
            <span className="font-body text-sm font-semibold text-charcoal">
              5.0
            </span>
            <span className="font-body text-sm text-charcoal/50">
              on Google
            </span>
          </a>
        </div>

        {/* Review cards — horizontal scroll on mobile, 3-col grid on desktop */}
        <div
          className="mt-12 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide
                     sm:gap-6
                     lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0"
          aria-label="Customer reviews"
        >
          {reviews.map((review) => (
            <article
              key={review.id}
              className="flex-none w-72 snap-center rounded-xl border border-cream bg-warm-white p-6 shadow-sm
                         transition-shadow duration-200 hover:shadow-md
                         lg:w-auto lg:flex-auto"
            >
              <StarRow count={review.rating} />
              <blockquote className="mt-4 font-body text-sm italic leading-relaxed text-charcoal/70">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <footer className="mt-4">
                <p className="font-body text-xs text-charcoal/40">
                  &mdash; {review.name}
                </p>
                <p className="mt-0.5 font-body text-xs text-charcoal/30">
                  {review.timeAgo}
                </p>
              </footer>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 font-body text-sm font-medium text-chai-brown underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-chai-brown focus:ring-offset-2 rounded"
            aria-label="Read more reviews on Google — opens Google Maps"
          >
            Read more reviews on Google
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
