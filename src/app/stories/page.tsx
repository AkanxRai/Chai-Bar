import type { Metadata } from "next";
import { BlogList } from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "City Stories",
  description:
    "Conversations, ideas, and the quiet hum of Indiranagar. Stories from the heart of Chai Bar.",
  openGraph: {
    title: "City Stories | Chai Bar",
    description:
      "Conversations, ideas, and the quiet hum of Indiranagar. Stories from the heart of Chai Bar.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
};

export default function StoriesPage() {
  return <BlogList />;
}
