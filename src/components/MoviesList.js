import styled from "styled-components";

const MoviesList = () => {
  return (
    <MoviesListWrapper>
      <h1>MoviesList</h1>
    </MoviesListWrapper>
  );
};

const MoviesListWrapper = styled.main`
  min-height: 90vh;
  padding: 24px 32px;

  @media (max-width: 640px) {
    padding: 12px 8px;
  }
`;
export default MoviesList;
