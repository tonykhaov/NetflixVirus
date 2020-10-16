import Header from "../components/Header";
import MoviesList from "../components/MoviesList";
import Footer from "../components/Footer";
import { getMovies } from "../utils/utils";

function Home({ movies }) {
  return (
    <>
      <Header />
      <MoviesList movies={movies} />
      <Footer />
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
