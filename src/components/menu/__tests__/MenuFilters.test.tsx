import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MenuFilters } from "../MenuFilters";

describe("MenuFilters", () => {
  it("renders search input with placeholder", () => {
    render(<MenuFilters search="" filters={new Set()} onSearchChange={() => {}} onFilterToggle={() => {}} />);
    expect(screen.getByPlaceholderText("What are you craving?")).toBeInTheDocument();
  });

  it("renders filter pills", () => {
    render(<MenuFilters search="" filters={new Set()} onSearchChange={() => {}} onFilterToggle={() => {}} />);
    expect(screen.getByRole("button", { name: /veg only/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /non-veg/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /under ₹150/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /bestsellers/i })).toBeInTheDocument();
  });

  it("calls onSearchChange when typing", () => {
    const onSearchChange = vi.fn();
    render(<MenuFilters search="" filters={new Set()} onSearchChange={onSearchChange} onFilterToggle={() => {}} />);
    fireEvent.change(screen.getByPlaceholderText("What are you craving?"), { target: { value: "chai" } });
    expect(onSearchChange).toHaveBeenCalledWith("chai");
  });

  it("calls onFilterToggle when clicking a filter pill", () => {
    const onFilterToggle = vi.fn();
    render(<MenuFilters search="" filters={new Set()} onSearchChange={() => {}} onFilterToggle={onFilterToggle} />);
    fireEvent.click(screen.getByRole("button", { name: /veg only/i }));
    expect(onFilterToggle).toHaveBeenCalledWith("veg");
  });

  it("shows active styling on selected filter", () => {
    render(<MenuFilters search="" filters={new Set(["veg"])} onSearchChange={() => {}} onFilterToggle={() => {}} />);
    const vegButton = screen.getByRole("button", { name: /veg only/i });
    expect(vegButton.className).toMatch(/bg-terracotta/);
  });
});
