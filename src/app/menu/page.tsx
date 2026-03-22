import type { Metadata } from "next";
import { MenuPage } from "@/components/menu/MenuPage";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the full Chai Bar menu — 100+ items from Masala Chai to Chicken Ramen Bowl. Chai specials, snacks, meals, shakes, and desserts. From ₹59.",
  openGraph: {
    title: "Menu | Chai Bar",
    description:
      "Explore the full Chai Bar menu — chai specials, snacks, meals, shakes, and desserts. From ₹59.",
    images: [{ url: "/images/og-menu.jpg", width: 1200, height: 630 }],
  },
};

export default function MenuRoute() {
  return <MenuPage />;
}
