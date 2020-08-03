import styled from "styled-components";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ImgStyled } from "../../components/Movie";

const IMG_PATH = "https://image.tmdb.org/t/p/w185/";
const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280/";

const MovieDetails = ({ movie }) => {
  return (
    <>
      <Header />
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <span>
            <ImgStyled src={`${IMG_PATH}${movie.poster_path}`} alt={movie.title} />
          </span>
          <div>
            <h1>{movie.title}</h1>
            <Vote>{movie.vote_average}/10</Vote>
            <Description>{movie.overview}</Description>
          </div>
        </MovieInfo>
      </MovieWrapper>
      <Footer />
    </>
  );
};

export default MovieDetails;

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=eb1340ed9b9e6d049cad9a073a4a431b&language=en-EN`
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
  min-height: 50vh;
  padding-top: 50vh;
  background: url(${(props) => props.backdrop}) no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    fill: white;
    margin: 24px 0 0 96px;
    background-color: rgba(0, 0, 0, 0.4);
  }
  svg:hover {
    fill: #f3f3f3;
  }
  @media (max-width: 1024px) {
    padding-top: 30vh;
    min-height: 70vh;
    svg {
      margin: 16px 0 0 48px;
    }
  }
`;

const MovieInfo = styled.div`
  background-color: white;
  position: absolute;
  min-height: 30vh;
  bottom: 0;
  text-align: left;
  padding: 2rem 10%;
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
  margin: 6px 0;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

const Description = styled.p`
  font-size: 24px;
`;
