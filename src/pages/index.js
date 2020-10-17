import MoviesList from "../components/MoviesList";
import { getMovies } from "../utils/utils";

function Home({ movies }) {
  return (
    <>
      <MoviesList movies={movies} />
    </>
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

export default Home;
