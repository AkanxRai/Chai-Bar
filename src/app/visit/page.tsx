import type { Metadata } from "next";
import { VisitPage } from "@/components/visit/VisitPage";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Find Chai Bar on CMH Road, Indiranagar — right next to the metro station. Directions, hours, and group booking info.",
  openGraph: {
    title: "Visit Us | Chai Bar",
    description:
      "Find Chai Bar on CMH Road, Indiranagar — right next to the metro station.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
};

export default function VisitRoute() {
  return <VisitPage />;
}
