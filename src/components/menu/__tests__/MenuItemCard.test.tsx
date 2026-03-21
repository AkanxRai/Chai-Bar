import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MenuItemCard } from "../MenuItemCard";

const vegItem = {
  name: "Samosa",
  diet: "veg" as const,
  price: 59,
  hasSizes: false,
};

const nonVegItem = {
  name: "Chicken Puff",
  diet: "non-veg" as const,
  price: 110,
  hasSizes: false,
};

const chaiItem = {
  name: "Masala Chai",
  diet: "veg" as const,
  price: 79,
  priceL: 129,
  hasSizes: true,
};

describe("MenuItemCard", () => {
  it("renders item name and price", () => {
    render(<MenuItemCard item={vegItem} />);
    expect(screen.getByText("Samosa")).toBeInTheDocument();
    expect(screen.getByText("₹59")).toBeInTheDocument();
  });

  it("shows veg badge for veg items", () => {
    render(<MenuItemCard item={vegItem} />);
    expect(screen.getByText("Veg")).toBeInTheDocument();
  });

  it("shows non-veg badge for non-veg items", () => {
    render(<MenuItemCard item={nonVegItem} />);
    expect(screen.getByText("Non-Veg")).toBeInTheDocument();
  });

  it("shows M/L size toggle for chai items", () => {
    render(<MenuItemCard item={chaiItem} />);
    expect(screen.getByRole("button", { name: /^M$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^L$/i })).toBeInTheDocument();
  });

  it("displays medium price by default for chai items", () => {
    render(<MenuItemCard item={chaiItem} />);
    expect(screen.getByText("₹79")).toBeInTheDocument();
  });

  it("switches to large price when L is clicked", () => {
    render(<MenuItemCard item={chaiItem} />);
    fireEvent.click(screen.getByRole("button", { name: /^L$/i }));
    expect(screen.getByText("₹129")).toBeInTheDocument();
  });

  it("does not show size toggle for non-chai items", () => {
    render(<MenuItemCard item={vegItem} />);
    expect(screen.queryByRole("button", { name: /^M$/i })).not.toBeInTheDocument();
  });
});
