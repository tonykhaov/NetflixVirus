import Footer from "../Footer";
import { render } from "@testing-library/react";

test("<Footer/>", () => {
  const { getByTestId } = render(<Footer />);
  expect(getByTestId("social-message").textContent).toBe("We're also on social medias");
});
