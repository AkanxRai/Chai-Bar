import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ChefsPicks } from "../ChefsPicks";

describe("ChefsPicks", () => {
  it("renders the Chef's Picks heading", () => {
    render(<ChefsPicks />);
    expect(screen.getByText(/chef.s picks/i)).toBeInTheDocument();
  });

  it("renders all 4 chef pick items", () => {
    render(<ChefsPicks />);
    expect(screen.getByText("Masala Chai")).toBeInTheDocument();
    expect(screen.getByText("Chicken Ramen Bowl")).toBeInTheDocument();
    expect(screen.getByText("Oreo Thick Shake")).toBeInTheDocument();
    expect(screen.getByText("Brownie Sundae")).toBeInTheDocument();
  });

  it("renders descriptions for chef picks", () => {
    render(<ChefsPicks />);
    expect(
      screen.getByText(/ginger, cardamom/i)
    ).toBeInTheDocument();
  });

  it("shows From ₹ prefix for sized items", () => {
    render(<ChefsPicks />);
    expect(screen.getByText(/from ₹79/i)).toBeInTheDocument();
  });

  it("shows direct price for non-sized items", () => {
    render(<ChefsPicks />);
    expect(screen.getByText("₹479")).toBeInTheDocument();
  });

  it("renders Chef's Pick badge on each card", () => {
    render(<ChefsPicks />);
    const badges = screen.getAllByText(/chef.s pick/i);
    expect(badges.length).toBe(4 + 1); // 4 badges + 1 heading
  });
});
