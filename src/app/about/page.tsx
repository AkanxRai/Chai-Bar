import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Chai Bar — born in Indiranagar from a love of chai, conversation, and community. More than a café. A feeling.",
  openGraph: {
    title: "About | Chai Bar",
    description:
      "The story behind Chai Bar — born in Indiranagar from a love of chai, conversation, and community.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
};

export default function AboutRoute() {
  return <AboutPage />;
}
