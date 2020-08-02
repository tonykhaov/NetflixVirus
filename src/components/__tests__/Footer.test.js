import Footer from "../Footer";
import { render, screen } from "@testing-library/react";
import { toHaveAttribute } from "@testing-library/jest-dom";

describe("<Footer/>", function () {
  beforeEach(() => {
    render(<Footer />);
  });

  test("Message is We're also on social medias?", () => {
    expect(screen.getByTestId("social-message")).toHaveTextContent("We're also on social medias");
  });

  test("Icons in the document?", () => {
    expect(screen.getByTestId("instagram-icon")).toBeInTheDocument();
    expect(screen.getByTestId("twitter-icon")).toBeInTheDocument();
    expect(screen.getByTestId("facebook-icon")).toBeInTheDocument();
  });

  test("Links have valid href?", () => {
    expect(screen.getByTestId("social-media--link__twitter")).toHaveAttribute(
      "href",
      "https://twitter.com/netflix"
    );

    expect(screen.getByTestId("social-media--link__instagram")).toHaveAttribute(
      "href",
      "https://instagram.com/netflix"
    );

    expect(screen.getByTestId("social-media--link__facebook")).toHaveAttribute(
      "href",
      "https://facebook.com/netflix"
    );
  });
});
