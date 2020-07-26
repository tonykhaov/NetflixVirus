import Head from "next/head";

import MoviesList from "../components/MoviesList";
import Header from "../components/Header";

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
    </div>
  );
}
