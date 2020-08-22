import Header from "../components/Header";
import MoviesList from "../components/MoviesList";
import Footer from "../components/Footer";

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
  const res = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=eb1340ed9b9e6d049cad9a073a4a431b&language=en-EN&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1"
  );
  const data = await res.json();

  return {
    props: {
      movies: data.results,
    },
  };
}

export default Home;
