import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

test("renders Header with h1 and link tag", () => {
  render(<Header />);
  expect(screen.getByRole("heading")).toHaveClass("title");
  expect(screen.getByRole("link")).toHaveTextContent(/netflixvirus/i);
});
