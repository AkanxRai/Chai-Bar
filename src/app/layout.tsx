import type { Metadata } from "next";
import { playfairDisplay, dmSans, dancingScript } from "./fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Chai Bar — Chai, Chill & City Stories",
    template: "%s | Chai Bar",
  },
  description:
    "Your corner of Indiranagar. Come for the chai. Stay for the stories. Crafted chai, warm vibes, and the soul of Bangalore.",
  keywords: [
    "chai bar",
    "indiranagar cafe",
    "bangalore cafe",
    "chai cafe",
    "city stories",
    "indiranagar bangalore",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable} ${dancingScript.variable}`}
    >
      <body className="min-h-screen bg-warm-white font-body text-charcoal antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
