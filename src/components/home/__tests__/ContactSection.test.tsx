import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { ContactSection } from "../ContactSection";

describe("ContactSection", () => {
  it('renders "Get in Touch" heading', () => {
    render(<ContactSection />);
    expect(
      screen.getByRole("heading", { name: /get in touch/i })
    ).toBeInTheDocument();
  });

  it("renders the Name field with its label", () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
  });

  it("renders the Email field with its label", () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  });

  it("renders the Message field with its label", () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('submit button says "Send Message" by default', () => {
    render(<ContactSection />);
    expect(
      screen.getByRole("button", { name: /send message/i })
    ).toBeInTheDocument();
  });

  it("shows success message after form submission", async () => {
    const user = userEvent.setup({ delay: null });
    render(<ContactSection />);

    await user.type(screen.getByLabelText(/your name/i), "Akansha");
    await user.type(screen.getByLabelText(/email address/i), "a@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello there!");

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/thanks! we'll get back to you soon/i)
      ).toBeInTheDocument();
    });
  });

  it("disables the submit button while submitting", async () => {
    const user = userEvent.setup({ delay: null });
    render(<ContactSection />);

    await user.type(screen.getByLabelText(/your name/i), "Akansha");
    await user.type(screen.getByLabelText(/email address/i), "a@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello!");

    const button = screen.getByRole("button", { name: /send message/i });
    await user.click(button);

    // Immediately after click the button should be disabled (submitting state)
    expect(screen.getByRole("button", { name: /sending\.\.\./i })).toBeDisabled();
  });
});
