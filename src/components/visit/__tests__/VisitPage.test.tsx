import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { VisitPage } from "../VisitPage";

describe("VisitPage", () => {
  it('renders "Find Us" heading', () => {
    render(<VisitPage />);
    expect(
      screen.getByRole("heading", { name: /find us/i })
    ).toBeInTheDocument();
  });

  it("renders the map iframe with correct title", () => {
    render(<VisitPage />);
    const iframe = screen.getByTitle("Chai Bar location map");
    expect(iframe).toBeInTheDocument();
  });

  it('renders address info with "Indiranagar"', () => {
    render(<VisitPage />);
    const matches = screen.getAllByText(/Indiranagar/i);
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it('renders hours table with "Mon–Fri"', () => {
    render(<VisitPage />);
    expect(screen.getByText(/Mon–Fri/i)).toBeInTheDocument();
  });

  it("renders all 3 transport options", () => {
    render(<VisitPage />);
    expect(screen.getByText("By Metro")).toBeInTheDocument();
    expect(screen.getByText("By Auto/Cab")).toBeInTheDocument();
    expect(screen.getByText("By Walk")).toBeInTheDocument();
  });

  it('renders group booking CTA with "Coming with a Group?"', () => {
    render(<VisitPage />);
    expect(
      screen.getByRole("heading", { name: /coming with a group/i })
    ).toBeInTheDocument();
  });

  it('"Get in Touch" link exists', () => {
    render(<VisitPage />);
    const link = screen.getByRole("link", { name: /get in touch/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "mailto:hello@chaibar.in");
  });
});
