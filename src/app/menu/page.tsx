import type { Metadata } from "next";

export const metadata: Metadata = { title: "Menu" };

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-brand text-4xl font-bold text-chai-brown">Our Menu</h1>
      <p className="mt-4 text-charcoal/70">Full menu coming soon.</p>
    </div>
  );
}
