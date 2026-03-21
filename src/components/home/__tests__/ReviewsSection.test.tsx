import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ReviewsSection } from "../ReviewsSection";
import { reviews } from "@/data/reviews";

describe("ReviewsSection", () => {
  it("renders the section heading", () => {
    render(<ReviewsSection />);
    expect(
      screen.getByRole("heading", {
        name: /what people say over a second cup/i,
      })
    ).toBeInTheDocument();
  });

  it("renders all 6 review cards", () => {
    render(<ReviewsSection />);
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(reviews.length);
    expect(articles).toHaveLength(6);
  });

  it("each review card shows star icons", () => {
    render(<ReviewsSection />);
    // Each card has a StarRow with 5 stars, plus the rating badge star = 6*5 + 1 = 31 total
    // We check that there are star aria-labels on each article
    const articles = screen.getAllByRole("article");
    articles.forEach((article) => {
      // StarRow renders with aria-label "5 out of 5 stars"
      const starLabel = article.querySelector("[aria-label='5 out of 5 stars']");
      expect(starLabel).not.toBeNull();
    });
  });

  it("shows 'Read more reviews on Google' CTA link", () => {
    render(<ReviewsSection />);
    const ctaLink = screen.getByRole("link", {
      name: /read more reviews on google/i,
    });
    expect(ctaLink).toBeInTheDocument();
  });

  it("CTA link points to the correct Google Maps URL", () => {
    render(<ReviewsSection />);
    const ctaLink = screen.getByRole("link", {
      name: /read more reviews on google/i,
    });
    expect(ctaLink).toHaveAttribute(
      "href",
      "https://www.google.com/maps/place/Chai+Bar/@12.9783669,77.6383216,17z/"
    );
  });

  it("renders the overall Google rating badge linking to Google Maps", () => {
    render(<ReviewsSection />);
    const badgeLink = screen.getByRole("link", { name: /5\.0 on google/i });
    expect(badgeLink).toBeInTheDocument();
    expect(badgeLink).toHaveAttribute(
      "href",
      "https://www.google.com/maps/place/Chai+Bar/@12.9783669,77.6383216,17z/"
    );
  });
});
