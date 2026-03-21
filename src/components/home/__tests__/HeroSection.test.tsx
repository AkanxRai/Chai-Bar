import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HeroSection } from "../HeroSection";

describe("HeroSection", () => {
  it("renders the tagline", () => {
    render(<HeroSection />);
    expect(screen.getByText(/chai, chill & city stories/i)).toBeInTheDocument();
  });

  it("renders the subline", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/your corner of indiranagar/i)
    ).toBeInTheDocument();
  });

  it("renders the primary CTA linking to menu", () => {
    render(<HeroSection />);
    const cta = screen.getByRole("link", { name: /see our menu/i });
    expect(cta).toHaveAttribute("href", "/menu");
  });

  it("renders the secondary CTA linking to visit", () => {
    render(<HeroSection />);
    const cta = screen.getByRole("link", { name: /find us/i });
    expect(cta).toHaveAttribute("href", "/visit");
  });

  it("renders the hero background image", () => {
    render(<HeroSection />);
    const img = screen.getByRole("img", { name: /chai bar entrance/i });
    expect(img).toBeInTheDocument();
  });
});
