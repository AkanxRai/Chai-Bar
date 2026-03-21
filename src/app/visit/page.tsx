import type { Metadata } from "next";

export const metadata: Metadata = { title: "Visit Us" };

export default function VisitPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-brand text-4xl font-bold text-chai-brown">Visit Us</h1>
      <p className="mt-4 text-charcoal/70">Find us in Indiranagar, Bangalore — details coming soon.</p>
    </div>
  );
}
