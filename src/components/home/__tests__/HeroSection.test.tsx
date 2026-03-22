import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HeroSection } from "../HeroSection";

describe("HeroSection", () => {
  it("renders the headline", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/one cup away from happiness/i)
    ).toBeInTheDocument();
  });

  it("renders the subheadline", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/come find your corner/i)
    ).toBeInTheDocument();
  });

  it("renders the eyebrow label", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/favourite chai stop/i)
    ).toBeInTheDocument();
  });

  it("renders the primary CTA", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/see what.s brewing/i)
    ).toBeInTheDocument();
  });

  it("renders the secondary CTA linking to visit", () => {
    render(<HeroSection />);
    const cta = screen.getByRole("link", { name: /find us/i });
    expect(cta).toHaveAttribute("href", "/visit");
  });

  it("renders the hero background image with interior2", () => {
    render(<HeroSection />);
    const img = screen.getByRole("img", {
      name: /chai bar interior/i,
    });
    expect(img).toBeInTheDocument();
  });

  it("renders the scroll indicator", () => {
    render(<HeroSection />);
    expect(screen.getByText(/scroll/i)).toBeInTheDocument();
  });
});
