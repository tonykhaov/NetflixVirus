import Link from "next/link";
import styled from "styled-components";

function Movie({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`} as={`/movie/${movie.id}`}>
      <a>
        <ImgStyled src={`${IMG_PATH}${movie.poster_path}`} alt={movie.title} />
      </a>
    </Link>
  );
}

const IMG_PATH = "http://image.tmdb.org/t/p/w185/";

export const ImgStyled = styled.img`
  box-shadow: 0 0 6px black;
  cursor: pointer;
  transition: box-shadow 0.1s linear;
  &:hover,
  &:focus {
    box-shadow: 0 0 3px black;
  }
`;

export default Movie;
