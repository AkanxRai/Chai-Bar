export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: "The Space" | "Indiranagar Diaries" | "Chai Culture" | "People & Conversations";
  author: string;
  readTime: string;
  publishedAt: string;
  content: string; // Simple markdown-ish content for now
}

export const blogPosts: BlogPost[] = [
  {
    slug: "the-art-on-our-wall",
    title: "The Art on Our Wall — A Story in Strokes",
    excerpt: "Three days, two artists, and a mural that became the soul of Chai Bar.",
    coverImage: "/images/entrance.jpeg",
    category: "The Space",
    author: "Chai Bar Team",
    readTime: "4 min read",
    publishedAt: "2026-03-15",
    content:
      "Every café has walls. Ours tell a story. When we first walked into the empty shell of what would become Chai Bar, the walls were bare concrete. But we saw something else — a canvas waiting for its story.\n\nThe mural you see today — 'Chai, Chill & City Stories' — took three days to complete. Two local artists from Indiranagar brought their own interpretation of what this space could mean to the neighbourhood.\n\nThe botanical line art represents growth, community, and the organic way conversations happen over a cup of chai. Every leaf, every stroke was intentional — much like the chai we serve.",
  },
  {
    slug: "why-indiranagar-needed-a-chai-bar",
    title: "Why Indiranagar Needed a Chai Bar",
    excerpt: "Between the craft breweries and co-working spaces, something was missing.",
    coverImage: "/images/interior1.jpeg",
    category: "Indiranagar Diaries",
    author: "Chai Bar Team",
    readTime: "3 min read",
    publishedAt: "2026-03-10",
    content:
      "Indiranagar has everything. Boutique stores, rooftop bars, artisan bakeries. But walk down 12th Main on a weekday evening and ask yourself — where do people go to just... sit?\n\nNot to network. Not to be seen. Just to sit with a cup of something warm and watch the world go by.\n\nThat's the gap we saw. Chai Bar isn't trying to compete with the coffee chains or the cocktail lounges. We're the place you come to when you want to feel like you belong somewhere.",
  },
  {
    slug: "5-things-to-do-in-indiranagar-on-a-rainy-evening",
    title: "5 Things to Do in Indiranagar on a Rainy Evening",
    excerpt:
      "When the Bangalore rain hits, Indiranagar transforms. Here's how to make the most of it.",
    coverImage: "/images/interior2.jpeg",
    category: "Indiranagar Diaries",
    author: "Chai Bar Team",
    readTime: "5 min read",
    publishedAt: "2026-03-05",
    content:
      "There's something about Bangalore rain that makes you want to slow down. The traffic stops, the street dogs find shelter under parked autos, and the chai stalls get their longest queues of the day.\n\nHere are five ways to spend a rainy Indiranagar evening:\n\n1. Start at Chai Bar (obviously) — grab a window seat, order a Masala Chai, and watch the rain paint the streets.\n\n2. Browse the bookshops on 12th Main — nothing pairs better with rain than finding a book you didn't know you needed.\n\n3. Walk through the quieter lanes — Indiranagar's residential streets look completely different in the rain.\n\n4. Try the street food — the samosas and pakoras hit different when it's pouring outside.\n\n5. End at the park — Defence Colony park after the rain stops is peak Bangalore magic.",
  },
];

export const blogCategories = [
  "The Space",
  "Indiranagar Diaries",
  "Chai Culture",
  "People & Conversations",
] as const;
