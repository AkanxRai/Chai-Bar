import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AboutPage } from "../AboutPage";

describe("AboutPage", () => {
  it("renders the Our Story heading", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", { name: /our story/i })
    ).toBeInTheDocument();
  });

  it("renders the subtitle under the hero", () => {
    render(<AboutPage />);
    expect(screen.getByText(/more than a café\. a feeling\./i)).toBeInTheDocument();
  });

  it("renders the How It Started section", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", { name: /how it started/i })
    ).toBeInTheDocument();
  });

  it("renders origin story copy", () => {
    render(<AboutPage />);
    expect(screen.getByText(/indiranagar had no shortage/i)).toBeInTheDocument();
  });

  it("renders the The Space section", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", { name: /the space/i })
    ).toBeInTheDocument();
  });

  it("renders The Space body copy mentioning the neon sign", () => {
    render(<AboutPage />);
    expect(screen.getByText(/one cup away from happiness/i)).toBeInTheDocument();
  });

  it("renders the What We Believe In section heading", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", { name: /what we believe in/i })
    ).toBeInTheDocument();
  });

  it("renders all 4 value card headings", () => {
    render(<AboutPage />);
    expect(screen.getByRole("heading", { name: /real food/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /local first/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /no rush/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /community/i })).toBeInTheDocument();
  });

  it("renders descriptions for all 4 value cards", () => {
    render(<AboutPage />);
    expect(screen.getByText(/no shortcuts\. no artificial flavours/i)).toBeInTheDocument();
    expect(screen.getByText(/we source locally whenever we can/i)).toBeInTheDocument();
    expect(screen.getByText(/sit as long as you want/i)).toBeInTheDocument();
    expect(screen.getByText(/chai bar is yours\. it's the neighbourhood/i)).toBeInTheDocument();
  });

  it("renders the CTA section with Come Say Hello heading", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", { name: /come say hello/i })
    ).toBeInTheDocument();
  });

  it("renders the CTA location copy", () => {
    render(<AboutPage />);
    expect(
      screen.getByText(/we're at indiranagar, bangalore\. the chai is always on\./i)
    ).toBeInTheDocument();
  });

  it("renders the See Our Menu link pointing to /menu", () => {
    render(<AboutPage />);
    const menuLinks = screen.getAllByRole("link", { name: /see our menu/i });
    expect(menuLinks.length).toBeGreaterThanOrEqual(1);
    expect(menuLinks[0]).toHaveAttribute("href", "/menu");
  });

  it("renders the Find Us link pointing to /visit", () => {
    render(<AboutPage />);
    const findUsLinks = screen.getAllByRole("link", { name: /find us/i });
    expect(findUsLinks.length).toBeGreaterThanOrEqual(1);
    expect(findUsLinks[0]).toHaveAttribute("href", "/visit");
  });

  it("renders images with descriptive alt text", () => {
    render(<AboutPage />);
    expect(
      screen.getByAltText(/chai bar entrance mural/i)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(/arched doorways and warm lantern light/i)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(/neon sign reading one cup away from happiness/i)
    ).toBeInTheDocument();
  });
});
