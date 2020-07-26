import Head from "next/head";

import Header from "../components/Header";
import MoviesList from "../components/MoviesList";
import Footer from "../components/Footer";

export default function Home() {
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
      <MoviesList />
      <Footer />
    </div>
  );
}
