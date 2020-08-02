import Footer from "../Footer";
import { render } from "@testing-library/react";
import { toHaveAttribute } from "@testing-library/jest-dom";

describe("<Footer/>", function () {
  test("Message is We're also on social medias?", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("social-message")).toHaveTextContent("We're also on social medias");
  });

  test("Icons in the document?", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("instagram-icon")).toBeInTheDocument();
    expect(getByTestId("twitter-icon")).toBeInTheDocument();
    expect(getByTestId("facebook-icon")).toBeInTheDocument();
  });

  test("Links have valid href?", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("social-media--link__twitter")).toHaveAttribute(
      "href",
      "https://twitter.com/netflix"
    );

    expect(getByTestId("social-media--link__instagram")).toHaveAttribute(
      "href",
      "https://instagram.com/netflix"
    );

    expect(getByTestId("social-media--link__facebook")).toHaveAttribute(
      "href",
      "https://facebook.com/netflix"
    );
  });
});
