import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BlogList } from "../BlogList";

// next/image and next/link need mocking in the jsdom test environment
vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

describe("BlogList", () => {
  it("renders the City Stories heading", () => {
    render(<BlogList />);
    expect(
      screen.getByRole("heading", { name: /city stories/i })
    ).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<BlogList />);
    expect(
      screen.getByText(/conversations, ideas, and the quiet hum of indiranagar/i)
    ).toBeInTheDocument();
  });

  it("renders all 3 seed blog posts", () => {
    render(<BlogList />);
    expect(
      screen.getByText("The Art on Our Wall — A Story in Strokes")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Why Indiranagar Needed a Chai Bar")
    ).toBeInTheDocument();
    expect(
      screen.getByText("5 Things to Do in Indiranagar on a Rainy Evening")
    ).toBeInTheDocument();
  });

  it("shows excerpt and read time for each post", () => {
    render(<BlogList />);
    // Excerpts
    expect(
      screen.getByText(/three days, two artists, and a mural/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/between the craft breweries and co-working spaces/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/when the bangalore rain hits/i)
    ).toBeInTheDocument();
    // Read times
    expect(screen.getByText("4 min read")).toBeInTheDocument();
    expect(screen.getByText("3 min read")).toBeInTheDocument();
    expect(screen.getByText("5 min read")).toBeInTheDocument();
  });

  it("each post card links to /stories/[slug]", () => {
    render(<BlogList />);
    const artLink = screen.getByRole("link", {
      name: /read: the art on our wall/i,
    });
    expect(artLink).toHaveAttribute("href", "/stories/the-art-on-our-wall");

    const indiraLink = screen.getByRole("link", {
      name: /read: why indiranagar needed a chai bar/i,
    });
    expect(indiraLink).toHaveAttribute(
      "href",
      "/stories/why-indiranagar-needed-a-chai-bar"
    );

    const rainyLink = screen.getByRole("link", {
      name: /read: 5 things to do in indiranagar/i,
    });
    expect(rainyLink).toHaveAttribute(
      "href",
      "/stories/5-things-to-do-in-indiranagar-on-a-rainy-evening"
    );
  });

  it("category filter shows only matching posts when 'The Space' is selected", () => {
    render(<BlogList />);

    // Click the "The Space" filter pill
    fireEvent.click(screen.getByRole("button", { name: "The Space" }));

    // Only the mural post belongs to "The Space"
    expect(
      screen.getByText("The Art on Our Wall — A Story in Strokes")
    ).toBeInTheDocument();

    // The other two are "Indiranagar Diaries" — they should be hidden
    expect(
      screen.queryByText("Why Indiranagar Needed a Chai Bar")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("5 Things to Do in Indiranagar on a Rainy Evening")
    ).not.toBeInTheDocument();
  });

  it("category filter shows all posts when 'All' is selected", () => {
    render(<BlogList />);

    // First narrow down
    fireEvent.click(screen.getByRole("button", { name: "The Space" }));
    // Then go back to All
    fireEvent.click(screen.getByRole("button", { name: "All" }));

    expect(
      screen.getByText("The Art on Our Wall — A Story in Strokes")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Why Indiranagar Needed a Chai Bar")
    ).toBeInTheDocument();
    expect(
      screen.getByText("5 Things to Do in Indiranagar on a Rainy Evening")
    ).toBeInTheDocument();
  });

  it("shows empty state when a category with no posts is selected", () => {
    render(<BlogList />);
    fireEvent.click(
      screen.getByRole("button", { name: "People & Conversations" })
    );
    expect(
      screen.getByText(/no stories in this category yet/i)
    ).toBeInTheDocument();
  });
});
