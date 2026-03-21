import type { Metadata } from "next";
import { BlogList } from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "City Stories",
  description:
    "Conversations, ideas, and the quiet hum of Indiranagar. Stories from the heart of Chai Bar.",
};

export default function StoriesPage() {
  return <BlogList />;
}
