import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { MenuPage } from "../MenuPage";

describe("MenuPage", () => {
  it("renders the page heading", () => {
    render(<MenuPage />);
    expect(screen.getByText(/what.s your craving today/i)).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<MenuPage />);
    expect(
      screen.getByText(/100\+ things to love/i)
    ).toBeInTheDocument();
  });

  it("renders the All tab as default active", () => {
    render(<MenuPage />);
    const allTab = screen.getByRole("tab", { name: /all/i });
    expect(allTab).toHaveAttribute("aria-selected", "true");
  });

  it("renders Chef's Picks section", () => {
    render(<MenuPage />);
    expect(screen.getByText(/chef.s picks/i)).toBeInTheDocument();
  });

  it("renders search input", () => {
    render(<MenuPage />);
    expect(
      screen.getByPlaceholderText(/search chai, ramen/i)
    ).toBeInTheDocument();
  });

  it("renders filter pills", () => {
    render(<MenuPage />);
    expect(screen.getByText(/veg only/i)).toBeInTheDocument();
    expect(screen.getByText(/bestsellers/i)).toBeInTheDocument();
  });

  it("shows all categories in All view by default", () => {
    render(<MenuPage />);
    // Category names appear in tabs + chef's picks + section headings
    expect(screen.getAllByText("Chai Specials").length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText("Snack Bites").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Pasta & Ramen").length).toBeGreaterThanOrEqual(1);
  });

  it("switches to single category on tab click", async () => {
    const user = userEvent.setup();
    render(<MenuPage />);
    const chaiTab = screen.getByRole("tab", { name: /chai specials/i });
    await user.click(chaiTab);
    expect(chaiTab).toHaveAttribute("aria-selected", "true");
    // Items appear in both desktop grid and mobile compact (CSS hides one)
    expect(screen.getAllByText("Classic Chai").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Masala Chai").length).toBeGreaterThanOrEqual(1);
  });

  it("filters items by search", async () => {
    const user = userEvent.setup();
    render(<MenuPage />);
    await user.click(screen.getByRole("tab", { name: /snack bites/i }));
    await user.type(screen.getByRole("textbox"), "samosa");
    expect(screen.getAllByText("Samosa").length).toBeGreaterThanOrEqual(1);
  });

  it("renders the bottom CTA", () => {
    render(<MenuPage />);
    expect(
      screen.getByText(/come experience it in person/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /get directions/i })
    ).toHaveAttribute("href", "/visit");
  });

  it("shows no results message when search has no matches", async () => {
    const user = userEvent.setup();
    render(<MenuPage />);
    await user.click(screen.getByRole("tab", { name: /boba/i }));
    await user.type(screen.getByRole("textbox"), "xyznonexistent");
    expect(
      screen.getByText(/no items found/i)
    ).toBeInTheDocument();
  });
});
