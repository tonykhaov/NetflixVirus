import Head from "next/head";
import MoviesList from "../components/MoviesList";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
      </Head>
      <MoviesList />
    </div>
  );
}
