import type { Metadata } from "next";
import { MenuPage } from "@/components/menu/MenuPage";

export const metadata: Metadata = { title: "Menu" };

export default function MenuRoute() {
  return <MenuPage />;
}
