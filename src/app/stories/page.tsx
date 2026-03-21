import type { Metadata } from "next";

export const metadata: Metadata = { title: "City Stories" };

export default function StoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-brand text-4xl font-bold text-chai-brown">City Stories</h1>
      <p className="mt-4 text-charcoal/70">Stories from the heart of Indiranagar — coming soon.</p>
    </div>
  );
}
