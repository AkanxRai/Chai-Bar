import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Navbar } from "../Navbar";

describe("Navbar", () => {
  it("renders the brand name", () => {
    render(<Navbar />);
    expect(screen.getByText("Chai Bar")).toBeInTheDocument();
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
});
