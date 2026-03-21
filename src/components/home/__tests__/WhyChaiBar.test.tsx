import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { WhyChaiBar } from "../WhyChaiBar";

describe("WhyChaiBar", () => {
  it("renders the section heading", () => {
    render(<WhyChaiBar />);
    expect(screen.getByRole("heading", { name: /why chai bar/i })).toBeInTheDocument();
  });

  it("renders three value propositions", () => {
    render(<WhyChaiBar />);
    expect(screen.getByText(/crafted chai/i)).toBeInTheDocument();
    expect(screen.getByText(/a space that feels like yours/i)).toBeInTheDocument();
    expect(screen.getByText(/city stories live here/i)).toBeInTheDocument();
  });

  it("renders descriptions for each value prop", () => {
    render(<WhyChaiBar />);
    expect(screen.getByText(/every cup made with intention/i)).toBeInTheDocument();
    expect(screen.getByText(/arched walls, warm light/i)).toBeInTheDocument();
    expect(screen.getByText(/conversations, ideas/i)).toBeInTheDocument();
  });
});
