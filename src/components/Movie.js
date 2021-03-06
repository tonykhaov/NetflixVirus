import Link from "next/link";
import styled from "styled-components";

function Movie({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <a>
        <ImgStyled
          src={`${IMG_PATH}${movie.poster_path}`}
          alt={movie.title}
          onTouchStart={(e) => e.target.focus()}
          loading="lazy"
        />
      </a>
    </Link>
  );
}

const IMG_PATH = "https://image.tmdb.org/t/p/w185/";

export const ImgStyled = styled.img`
  box-shadow: 0 0 3px black;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.13, 0.47, 0.61, 0.88);
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export default Movie;
