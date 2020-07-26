import Head from "next/head";

import MoviesList from "../components/MoviesList";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <MoviesList />
    </div>
  );
}
