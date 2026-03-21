import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "../Footer";

describe("Footer", () => {
  it("renders the brand name", () => {
    render(<Footer />);
    expect(screen.getByText("Chai Bar")).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    render(<Footer />);
    expect(screen.getByText(/chai, chill & city stories/i)).toBeInTheDocument();
  });

  it("renders location info", () => {
    render(<Footer />);
    expect(screen.getByText(/indiranagar, bangalore/i)).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /menu/i })).toHaveAttribute("href", "/menu");
    expect(screen.getByRole("link", { name: /stories/i })).toHaveAttribute("href", "/stories");
    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: /visit/i })).toHaveAttribute("href", "/visit");
  });

  it("renders the neon sign quote", () => {
    render(<Footer />);
    expect(screen.getByText(/one cup away from happiness/i)).toBeInTheDocument();
  });
});
