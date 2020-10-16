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
  const [res1, res2, res3, res4] = await Promise.all([
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=eb1340ed9b9e6d049cad9a073a4a431b&language=en-EN&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1"
    ),
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=eb1340ed9b9e6d049cad9a073a4a431b&language=en-EN&sort_by=vote_count.desc&include_adult=false&include_video=false&page=2"
    ),
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=eb1340ed9b9e6d049cad9a073a4a431b&language=en-EN&sort_by=vote_count.desc&include_adult=false&include_video=false&page=3"
    ),
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=eb1340ed9b9e6d049cad9a073a4a431b&language=en-EN&sort_by=vote_count.desc&include_adult=false&include_video=false&page=4"
    ),
  ]);

  const [
    moviesPage1,
    moviesPage2,
    moviesPage3,
    moviesPage4,
  ] = await Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]);

  const movies = [
    ...moviesPage1.results,
    ...moviesPage2.results,
    ...moviesPage3.results,
    ...moviesPage4.results,
  ];

  return {
    props: {
      movies,
    },
  };
}

export default Home;
