import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CategoryTabs } from "../CategoryTabs";

const categories = [
  { id: "chai-specials", name: "Chai Specials" },
  { id: "coffee-cold-coffee", name: "Coffee & Cold Coffee" },
  { id: "snack-bites", name: "Snack Bites" },
];

describe("CategoryTabs", () => {
  it("renders all category names", () => {
    render(<CategoryTabs categories={categories} activeId="chai-specials" onSelect={() => {}} />);
    expect(screen.getByText("Chai Specials")).toBeInTheDocument();
    expect(screen.getByText("Coffee & Cold Coffee")).toBeInTheDocument();
    expect(screen.getByText("Snack Bites")).toBeInTheDocument();
  });

  it("highlights the active category", () => {
    render(<CategoryTabs categories={categories} activeId="chai-specials" onSelect={() => {}} />);
    const activeButton = screen.getByRole("tab", { name: "Chai Specials" });
    expect(activeButton.className).toMatch(/bg-terracotta/);
  });

  it("calls onSelect when a tab is clicked", () => {
    const onSelect = vi.fn();
    render(<CategoryTabs categories={categories} activeId="chai-specials" onSelect={onSelect} />);
    fireEvent.click(screen.getByRole("tab", { name: "Snack Bites" }));
    expect(onSelect).toHaveBeenCalledWith("snack-bites");
  });

  it("inactive tabs do not have active styling", () => {
    render(<CategoryTabs categories={categories} activeId="chai-specials" onSelect={() => {}} />);
    const inactiveButton = screen.getByRole("tab", { name: "Snack Bites" });
    expect(inactiveButton.className).not.toMatch(/bg-terracotta/);
  });
});
