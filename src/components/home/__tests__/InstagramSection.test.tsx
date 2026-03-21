import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { InstagramSection } from "../InstagramSection";

const INSTAGRAM_URL = "https://www.instagram.com/chaibarindiranagar/";

describe("InstagramSection", () => {
  it('renders the heading "Tag Us. Be Part of the Story."', () => {
    render(<InstagramSection />);
    expect(
      screen.getByRole("heading", { name: /tag us\. be part of the story\./i })
    ).toBeInTheDocument();
  });

  it('shows the Instagram handle "@chaibarindiranagar"', () => {
    render(<InstagramSection />);
    expect(screen.getByText("@chaibarindiranagar")).toBeInTheDocument();
  });

  it("handle links to the correct Instagram URL", () => {
    render(<InstagramSection />);
    const handleLink = screen.getByText("@chaibarindiranagar").closest("a");
    expect(handleLink).toHaveAttribute("href", INSTAGRAM_URL);
  });

  it("renders 6 image tiles", () => {
    render(<InstagramSection />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(6);
  });

  it('"Follow us on Instagram" CTA is present', () => {
    render(<InstagramSection />);
    const cta = screen.getByText(/follow us on instagram/i);
    expect(cta).toBeInTheDocument();
  });

  it('"Follow us on Instagram" CTA links to the Instagram URL', () => {
    render(<InstagramSection />);
    const cta = screen.getByText(/follow us on instagram/i).closest("a");
    expect(cta).toHaveAttribute("href", INSTAGRAM_URL);
  });
});
