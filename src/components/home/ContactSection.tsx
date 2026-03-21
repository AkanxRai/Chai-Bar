"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate a brief async action before showing success
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  }

  return (
    <section className="bg-cream/30 px-4 py-16 sm:py-24">
      <div className="max-w-lg mx-auto">
        {/* Heading */}
        <h2 className="font-brand text-3xl text-chai-brown text-center">
          Get in Touch
        </h2>
        <p className="mt-2 font-body text-charcoal/60 text-center">
          For events, collaborations, or just to say hello.
        </p>

        {/* Success message */}
        {isSuccess ? (
          <p
            role="status"
            className="mt-8 text-center font-body text-sm font-medium text-green-600"
          >
            Thanks! We&apos;ll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5" noValidate>
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="font-body text-sm font-medium text-charcoal/80 mb-1.5 block"
              >
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-cream bg-warm-white px-4 py-3 font-body text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20 transition-colors duration-200"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="font-body text-sm font-medium text-charcoal/80 mb-1.5 block"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-cream bg-warm-white px-4 py-3 font-body text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20 transition-colors duration-200"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="font-body text-sm font-medium text-charcoal/80 mb-1.5 block"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                placeholder="Tell us what's on your mind..."
                className="w-full rounded-xl border border-cream bg-warm-white px-4 py-3 font-body text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20 transition-colors duration-200 resize-none"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-terracotta px-6 py-3 font-body text-sm font-semibold text-warm-white transition-colors duration-200 hover:bg-terracotta/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
