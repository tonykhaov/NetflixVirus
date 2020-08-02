import Footer from "../Footer";
import { render } from "@testing-library/react";
import { toHaveAttribute } from "@testing-library/jest-dom";

test("<Footer/>", () => {
  const { getByTestId } = render(<Footer />);
  expect(getByTestId("social-message")).toHaveTextContent("We're also on social medias");
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
