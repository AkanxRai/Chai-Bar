import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { MenuItemCard } from "../MenuItemCard";
import type { MenuItem } from "@/data/menu";

const vegItem: MenuItem = {
  name: "Samosa",
  diet: "veg",
  price: 59,
  hasSizes: false,
  description: "The original. Still undefeated.",
};

const chaiItem: MenuItem = {
  name: "Masala Chai",
  diet: "veg",
  price: 79,
  priceL: 129,
  hasSizes: true,
  description: "Ginger, cardamom, and a Tuesday that feels like Friday.",
};

const nonVegItem: MenuItem = {
  name: "Chicken Ramen Bowl",
  diet: "non-veg",
  price: 479,
  hasSizes: false,
  description: "The bowl people come back for.",
};

describe("MenuItemCard", () => {
  it("renders item name and description", () => {
    render(<MenuItemCard item={vegItem} />);
    expect(screen.getByText("Samosa")).toBeInTheDocument();
    expect(screen.getByText(/still undefeated/i)).toBeInTheDocument();
  });

  it("renders veg badge with accessible label", () => {
    render(<MenuItemCard item={vegItem} />);
    expect(screen.getByText("Vegetarian")).toBeInTheDocument();
  });

  it("renders non-veg badge with accessible label", () => {
    render(<MenuItemCard item={nonVegItem} />);
    expect(screen.getByText("Non-Vegetarian")).toBeInTheDocument();
  });

  it("renders price for non-sized items", () => {
    render(<MenuItemCard item={vegItem} />);
    expect(screen.getByText("₹59")).toBeInTheDocument();
  });

  it("renders M/L size toggle with both prices for chai items", () => {
    render(<MenuItemCard item={chaiItem} />);
    expect(screen.getByText(/M ₹79/)).toBeInTheDocument();
    expect(screen.getByText(/L ₹129/)).toBeInTheDocument();
  });

  it("toggles size selection on click", async () => {
    const user = userEvent.setup();
    render(<MenuItemCard item={chaiItem} />);

    const lButton = screen.getByRole("button", { name: /large size/i });
    await user.click(lButton);
    expect(lButton).toHaveAttribute("aria-pressed", "true");

    const mButton = screen.getByRole("button", { name: /medium size/i });
    expect(mButton).toHaveAttribute("aria-pressed", "false");
  });

  it("renders compact mobile layout when compact prop is true", () => {
    render(<MenuItemCard item={vegItem} compact />);
    expect(screen.getByText("Samosa")).toBeInTheDocument();
    expect(screen.getByText("₹59")).toBeInTheDocument();
  });

  it("shows Bestseller badge for bestseller items", () => {
    render(<MenuItemCard item={chaiItem} />);
    expect(screen.getByText("Bestseller")).toBeInTheDocument();
  });
});
