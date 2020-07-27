import styled from "styled-components";

const MoviesList = ({ props }) => {
  console.log(props);
  return (
    <MoviesListWrapper>
      <h1>MoviesList</h1>
    </MoviesListWrapper>
  );
};

const MoviesListWrapper = styled.main`
  min-height: 90vh;
  padding: 24px 32px;

  display: flex;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    padding: 12px 8px;
  }
`;

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=eb1340ed9b9e6d049cad9a073a4a431b&language=en-EN&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default MoviesList;
