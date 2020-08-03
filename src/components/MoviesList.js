import styled from "styled-components";
import Movie from "./Movie";

const MoviesList = ({ movies }) => {
  return (
    <MoviesListWrapper>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </MoviesListWrapper>
  );
};

const MoviesListWrapper = styled.main`
  min-height: 90vh;
  padding: 24px 32px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  justify-items: center;
  grid-gap: 16px 12px;
  @media (max-width: 640px) {
    padding: 12px 8px;
  }
`;

export default MoviesList;
