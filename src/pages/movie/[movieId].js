import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import { ImgStyled } from "../../components/Movie";
import { getMovies } from "../../utils/utils";

const MovieDetails = ({ movie }) => {
  return (
    <>
      <Head>
        <title>NetflixVirus - {movie.title}</title>
      </Head>
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <span>
            <Link href="/">
              <a>
                <ImgStyled
                  src={`${IMG_PATH}${movie.poster_path}`}
                  alt={movie.title}
                />
              </a>
            </Link>
          </span>
          <div>
            <h1>{movie.title}</h1>
            <Vote>{movie.vote_average}/10</Vote>
            <Description>{movie.overview}</Description>
          </div>
        </MovieInfo>
      </MovieWrapper>
    </>
  );
};

export const IMG_PATH = "https://image.tmdb.org/t/p/w185/";
const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280/";

export default MovieDetails;

export async function getStaticPaths() {
  const movies = await getMovies();

  const paths = movies.map((movie) => ({
    params: { movieId: String(movie.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params.movieId}?api_key=eb1340ed9b9e6d049cad9a073a4a431b&language=en-EN`
  );
  const data = await res.json();
  return {
    props: {
      movie: data,
    },
  };
}

const MovieWrapper = styled.div`
  position: relative;
  min-height: 400px;
  padding-top: 400px;
  background: url(${(props) => props.backdrop}) no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  @media (max-width: 1024px) {
    padding-top: 256px;
    min-height: 640px;
  }
`;

const MovieInfo = styled.div`
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: left;
  padding: 1rem 48px;
  display: grid;
  grid-template-columns: 185px 1fr;
  > div {
    margin-left: 32px;
    h1 {
      font-size: 36px;
    }
  }
  img {
    position: relative;
    top: -5rem;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    > div {
      margin: -9rem 0 0 0;
    }
    h1 {
      font-size: 32px;
    }
    img {
      top: -10rem;
    }
  }
`;

const Vote = styled.p`
  font-size: 18px;
  margin: 8px 0;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

const Description = styled.p`
  font-size: 24px;
`;
