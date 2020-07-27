import Head from "next/head";

import Header from "../components/Header";
import MoviesList from "../components/MoviesList";
import Footer from "../components/Footer";

function Home({ movies }) {
  return (
    <div>
      <Head>
        <title>NetflixVirus</title>
        <link
          rel="shortcut icon"
          href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
        />
      </Head>
      <Header />
      <MoviesList movies={movies} />
      <Footer />
    </div>
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
