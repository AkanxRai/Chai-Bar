import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { GalleryStrip } from "../GalleryStrip";

describe("GalleryStrip", () => {
  it("renders the section heading", () => {
    render(<GalleryStrip />);
    expect(screen.getByRole("heading", { name: /step inside/i })).toBeInTheDocument();
  });

  it("renders gallery images", () => {
    render(<GalleryStrip />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(3);
  });

  it("renders captions for images", () => {
    render(<GalleryStrip />);
    expect(screen.getByText(/the mural that started it all/i)).toBeInTheDocument();
  });
});
