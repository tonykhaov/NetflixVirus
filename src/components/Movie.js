import Link from "next/link";
import styled from "styled-components";

const IMG_PATH = "http://image.tmdb.org/t/p/w185/";

function Movie({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <Img src={`${IMG_PATH}${movie.poster_path}`} alt={movie.title} />
    </Link>
  );
}

export const Img = styled.img`
  box-shadow: 0 0 12px black;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0 0 3px black;
    transition: transform 0.1s linear;
  }
`;

export default Movie;
