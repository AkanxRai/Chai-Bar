export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "Chai Bar",
    description:
      "Crafted chai, warm vibes, and the soul of Bangalore. Chai, Chill & City Stories.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://chaibar.in",
    image: "/images/entrance.jpeg",
    telephone: "+91-XXXXXXXXXX",
    address: {
      "@type": "PostalAddress",
      streetAddress: "CMH Road",
      addressLocality: "Indiranagar",
      addressRegion: "Karnataka",
      postalCode: "560038",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9784,
      longitude: 77.6408,
    },
    priceRange: "₹59–₹479",
    servesCuisine: ["Chai", "Indian Snacks", "Desserts", "Shakes"],
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Card",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "15",
      bestRating: "5",
    },
    sameAs: ["https://www.instagram.com/chaibarindiranagar/"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
