import { render, screen } from "@testing-library/react";
import { movieBuilder } from "../tests/builders";
import Home from "../pages";

const movies = Array(10)
  .fill(null)
  .map(() => movieBuilder());

test("All the movies are visible with their images and they are clickable", () => {
  const firstMovie = movies[0];
  const lastMovie = movies[movies.length - 1];
  const middleMovie = movies[movies.length / 2 - 1];
  render(<Home movies={movies} />);

  expect(screen.getByAltText(firstMovie.title)).toBeInTheDocument();
  expect(screen.getByAltText(firstMovie.title).parentElement).toHaveAttribute(
    "href",
    `/movie/${firstMovie.id}`
  );

  // Test edge cases
  expect(screen.getByAltText(middleMovie.title)).toBeInTheDocument();
  expect(screen.getByAltText(middleMovie.title).parentElement).toHaveAttribute(
    "href",
    `/movie/${middleMovie.id}`
  );

  expect(screen.getByAltText(lastMovie.title)).toBeInTheDocument();
  expect(screen.getByAltText(lastMovie.title).parentElement).toHaveAttribute(
    "href",
    `/movie/${lastMovie.id}`
  );
});
