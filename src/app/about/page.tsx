import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-brand text-4xl font-bold text-chai-brown">About Chai Bar</h1>
      <p className="mt-4 text-charcoal/70">Our story — coming soon.</p>
    </div>
  );
}
