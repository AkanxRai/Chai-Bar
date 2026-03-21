import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MenuTeaser } from "../MenuTeaser";

describe("MenuTeaser", () => {
  it("renders the section heading", () => {
    render(<MenuTeaser />);
    expect(screen.getByRole("heading", { name: /a taste of chai bar/i })).toBeInTheDocument();
  });

  it("renders featured menu items", () => {
    render(<MenuTeaser />);
    expect(screen.getByText(/irani cutting chai/i)).toBeInTheDocument();
    expect(screen.getByText(/caesar salad/i)).toBeInTheDocument();
  });

  it("renders poetic descriptions", () => {
    render(<MenuTeaser />);
    expect(screen.getByText(/the original\. unchanged for a reason/i)).toBeInTheDocument();
  });

  it("renders the CTA link to full menu", () => {
    render(<MenuTeaser />);
    const cta = screen.getByRole("link", { name: /explore the full menu/i });
    expect(cta).toHaveAttribute("href", "/menu");
  });
});
