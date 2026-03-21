import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MenuPage } from "../MenuPage";

describe("MenuPage", () => {
  it("renders the page heading", () => {
    render(<MenuPage />);
    expect(
      screen.getByRole("heading", { name: /our menu/i })
    ).toBeInTheDocument();
  });

  it("renders the ChefsPicks section", () => {
    render(<MenuPage />);
    expect(
      screen.getByRole("heading", { name: /chef's picks/i })
    ).toBeInTheDocument();
  });

  it("renders the search input", () => {
    render(<MenuPage />);
    expect(
      screen.getByPlaceholderText("What are you craving?")
    ).toBeInTheDocument();
  });

  it("renders category tabs", () => {
    render(<MenuPage />);
    expect(screen.getByRole("tab", { name: "Chai Specials" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Snack Bites" })).toBeInTheDocument();
  });

  it("renders menu items for the default category (Chai Specials)", () => {
    render(<MenuPage />);
    expect(screen.getByText("Classic Chai")).toBeInTheDocument();
    // Masala Chai appears in both ChefsPicks and the grid
    expect(screen.getAllByText("Masala Chai").length).toBeGreaterThanOrEqual(2);
  });

  it("switches categories when a tab is clicked", () => {
    render(<MenuPage />);
    fireEvent.click(screen.getByRole("tab", { name: "Snack Bites" }));
    expect(screen.getByText("Samosa")).toBeInTheDocument();
    expect(screen.getByText("₹59")).toBeInTheDocument();
  });

  it("filters items by search text", () => {
    render(<MenuPage />);
    // Switch to Snack Bites first (has both veg and non-veg)
    fireEvent.click(screen.getByRole("tab", { name: "Snack Bites" }));
    fireEvent.change(screen.getByPlaceholderText("What are you craving?"), {
      target: { value: "chicken" },
    });
    expect(screen.getByText("Chicken Puff")).toBeInTheDocument();
    expect(screen.getByText("Chicken Nuggets")).toBeInTheDocument();
    expect(screen.queryByText("Samosa")).not.toBeInTheDocument();
  });

  it("filters items when Veg Only is active", () => {
    render(<MenuPage />);
    // Switch to Snack Bites (has both veg and non-veg items)
    fireEvent.click(screen.getByRole("tab", { name: "Snack Bites" }));
    fireEvent.click(screen.getByRole("button", { name: /veg only/i }));
    expect(screen.getByText("Samosa")).toBeInTheDocument();
    expect(screen.queryByText("Chicken Puff")).not.toBeInTheDocument();
  });

  it("filters items when Under ₹150 is active", () => {
    render(<MenuPage />);
    // Switch to Snack Bites
    fireEvent.click(screen.getByRole("tab", { name: "Snack Bites" }));
    fireEvent.click(screen.getByRole("button", { name: /under ₹150/i }));
    expect(screen.getByText("Samosa")).toBeInTheDocument(); // ₹59
    expect(screen.queryByText("Chicken Nuggets")).not.toBeInTheDocument(); // ₹249
  });

  it("shows item count for active category", () => {
    render(<MenuPage />);
    // Chai Specials has 6 items
    expect(screen.getByText(/6 items/i)).toBeInTheDocument();
  });

  it("shows 'From ₹59' badge when Snack Bites is active", () => {
    render(<MenuPage />);
    fireEvent.click(screen.getByRole("tab", { name: "Snack Bites" }));
    expect(screen.getByText("From ₹59")).toBeInTheDocument();
  });

  it("does not show 'From ₹59' badge for other categories", () => {
    render(<MenuPage />);
    expect(screen.queryByText("From ₹59")).not.toBeInTheDocument();
  });
});
