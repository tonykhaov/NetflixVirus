import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import { movieBuilder } from "../tests/builders";
import MovieDetails, { IMG_PATH } from "../pages/movie/[movieId]";

test("Renders Movie Details with correct datas", () => {
  const movie = movieBuilder();
  const posterImgSrc = `${IMG_PATH}${movie.poster_path}`;
  render(<MovieDetails movie={movie} />);

  expect(screen.getByText(movie.title)).toBeInTheDocument();
  expect(screen.getByAltText(movie.title)).toHaveAttribute("src", posterImgSrc);
  expect(screen.getByAltText(movie.title).parentElement).toHaveAttribute(
    "href",
    "/"
  );
  expect(screen.getByText(movie.overview)).toBeInTheDocument();
  expect(screen.getByText(`${movie.vote_average}/10`)).toBeInTheDocument();
});
