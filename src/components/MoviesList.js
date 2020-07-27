import styled from "styled-components";

const MoviesList = ({ movies }) => {
  return (
    <MoviesListWrapper>
      {movies.map((movie) => (
        <h1>{movie.original_title}</h1>
      ))}
    </MoviesListWrapper>
  );
};

const MoviesListWrapper = styled.main`
  min-height: 90vh;
  padding: 24px 32px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 640px) {
    padding: 12px 8px;
  }
`;

export default MoviesList;
