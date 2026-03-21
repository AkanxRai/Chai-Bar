import type { Metadata } from "next";
import { VisitPage } from "@/components/visit/VisitPage";

export const metadata: Metadata = { title: "Visit Us" };

export default function VisitRoute() {
  return <VisitPage />;
}
