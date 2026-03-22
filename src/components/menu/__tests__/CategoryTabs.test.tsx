import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { CategoryTabs } from "../CategoryTabs";

const categories = [
  { id: "all", name: "All", count: 122 },
  { id: "chai-specials", name: "Chai Specials", count: 6 },
  { id: "coffee-cold-coffee", name: "Coffee & Cold Coffee", count: 11 },
];

describe("CategoryTabs", () => {
  it("renders all tab buttons with counts", () => {
    render(
      <CategoryTabs categories={categories} activeId="all" onSelect={() => {}} />
    );
    expect(screen.getByRole("tab", { name: /all/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /chai specials/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /coffee/i })).toBeInTheDocument();
  });

  it("marks the active tab as selected", () => {
    render(
      <CategoryTabs categories={categories} activeId="chai-specials" onSelect={() => {}} />
    );
    const tab = screen.getByRole("tab", { name: /chai specials/i });
    expect(tab).toHaveAttribute("aria-selected", "true");
  });

  it("calls onSelect with category id on click", async () => {
    const onSelect = vi.fn();
    const user = userEvent.setup();
    render(
      <CategoryTabs categories={categories} activeId="all" onSelect={onSelect} />
    );
    await user.click(screen.getByRole("tab", { name: /coffee/i }));
    expect(onSelect).toHaveBeenCalledWith("coffee-cold-coffee");
  });

  it("dims tabs with 0 filtered items", () => {
    render(
      <CategoryTabs
        categories={categories}
        activeId="all"
        onSelect={() => {}}
        filteredCounts={{ "chai-specials": 6, "coffee-cold-coffee": 0 }}
      />
    );
    const coffeeTab = screen.getByRole("tab", { name: /coffee/i });
    expect(coffeeTab.className).toContain("text-chai-brown/30");
  });

  it("has tablist role and aria-label", () => {
    render(
      <CategoryTabs categories={categories} activeId="all" onSelect={() => {}} />
    );
    expect(screen.getByRole("tablist")).toHaveAttribute(
      "aria-label",
      "Menu categories"
    );
  });
});
