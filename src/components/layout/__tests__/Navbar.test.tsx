import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Navbar } from "../Navbar";

describe("Navbar", () => {
  it("renders logo images (desktop + mobile)", () => {
    render(<Navbar />);
    const logos = screen.getAllByRole("img", { name: /chai bar/i });
    expect(logos.length).toBe(2);
  });

  it("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /menu/i })).toHaveAttribute("href", "/menu");
    expect(screen.getByRole("link", { name: /stories/i })).toHaveAttribute("href", "/stories");
    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: /visit/i })).toHaveAttribute("href", "/visit");
  });

  it("renders the brand link pointing to home", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /chai bar/i })).toHaveAttribute("href", "/");
  });

  it("renders the mobile menu button with aria-label", () => {
    render(<Navbar />);
    expect(screen.getByRole("button", { name: /open menu/i })).toBeInTheDocument();
  });
});
