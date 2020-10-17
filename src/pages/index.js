import styled from "styled-components";
import Movie from "../components/Movie";
import { getMovies } from "../utils/utils";

function Home({ movies }) {
  return (
    <MoviesListWrapper>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </MoviesListWrapper>
  );
}

export async function getStaticProps() {
  const movies = await getMovies();

  return {
    props: {
      movies,
    },
  };
}

const MoviesListWrapper = styled.main`
  min-height: 800px;
  padding: 24px 32px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  justify-items: center;
  grid-gap: 16px 12px;
  @media (max-width: 640px) {
    padding: 12px 8px;
  }
`;

export default Home;
