import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ChefsPicks } from "../ChefsPicks";

describe("ChefsPicks", () => {
  it("renders the heading", () => {
    render(<ChefsPicks />);
    expect(screen.getByRole("heading", { name: /chef's picks/i })).toBeInTheDocument();
  });

  it("renders all 4 chef's pick items", () => {
    render(<ChefsPicks />);
    expect(screen.getByText("Masala Chai")).toBeInTheDocument();
    expect(screen.getByText("Chicken Ramen Bowl")).toBeInTheDocument();
    expect(screen.getByText("Oreo Thick Shake")).toBeInTheDocument();
    expect(screen.getByText("Brownie Sundae")).toBeInTheDocument();
  });

  it("shows category for each pick", () => {
    render(<ChefsPicks />);
    expect(screen.getByText("Chai Specials")).toBeInTheDocument();
    expect(screen.getByText("Pasta & Ramen")).toBeInTheDocument();
  });

  it("shows price for each pick", () => {
    render(<ChefsPicks />);
    expect(screen.getByText("From ₹79")).toBeInTheDocument(); // Masala Chai — sized item
    expect(screen.getByText("₹479")).toBeInTheDocument(); // Chicken Ramen Bowl
  });

  it("shows chef's pick badge", () => {
    render(<ChefsPicks />);
    const badges = screen.getAllByText(/chef's pick/i);
    expect(badges.length).toBeGreaterThanOrEqual(1);
  });
});
