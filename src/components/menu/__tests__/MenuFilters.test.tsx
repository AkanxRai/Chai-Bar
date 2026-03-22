import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { MenuFilters } from "../MenuFilters";

const defaultProps = {
  search: "",
  filters: new Set<string>(),
  onSearchChange: vi.fn(),
  onFilterToggle: vi.fn(),
  resultCount: 122,
  totalCount: 122,
};

describe("MenuFilters", () => {
  it("renders the search input with placeholder", () => {
    render(<MenuFilters {...defaultProps} />);
    expect(
      screen.getByPlaceholderText(/search chai, ramen/i)
    ).toBeInTheDocument();
  });

  it("renders all 4 filter pills", () => {
    render(<MenuFilters {...defaultProps} />);
    expect(screen.getByText(/veg only/i)).toBeInTheDocument();
    expect(screen.getByText(/non-veg/i)).toBeInTheDocument();
    expect(screen.getByText(/under ₹150/i)).toBeInTheDocument();
    expect(screen.getByText(/bestsellers/i)).toBeInTheDocument();
  });

  it("calls onFilterToggle when a filter pill is clicked", async () => {
    const onFilterToggle = vi.fn();
    const user = userEvent.setup();
    render(<MenuFilters {...defaultProps} onFilterToggle={onFilterToggle} />);
    await user.click(screen.getByText(/veg only/i));
    expect(onFilterToggle).toHaveBeenCalledWith("veg");
  });

  it("calls onSearchChange when typing", async () => {
    const onSearchChange = vi.fn();
    const user = userEvent.setup();
    render(<MenuFilters {...defaultProps} onSearchChange={onSearchChange} />);
    await user.type(screen.getByRole("textbox"), "chai");
    expect(onSearchChange).toHaveBeenCalled();
  });

  it("shows result count when filters active", () => {
    render(
      <MenuFilters
        {...defaultProps}
        filters={new Set(["veg"])}
        resultCount={85}
      />
    );
    expect(screen.getByText(/showing 85 of 122/i)).toBeInTheDocument();
  });

  it("shows clear button when search has text", () => {
    render(<MenuFilters {...defaultProps} search="chai" />);
    expect(screen.getByLabelText(/clear search/i)).toBeInTheDocument();
  });
});
