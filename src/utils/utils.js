export async function getMovies() {
  const moviePages = getMoviePages();
  const res = await Promise.all(moviePages);
  const data = await Promise.all(res.map((response) => response.json()));
  const movies = data.flatMap((movie) => movie.results);

  return movies;
}

function getMoviePages(limit = 6) {
  if (limit < 1) limit = 2;
  const moviePages = [];
  for (let i = 1; i < limit; i++) {
    moviePages.push(fetch(fetchingUrl + i));
  }

  return moviePages;
}

const fetchingUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=eb1340ed9b9e6d049cad9a073a4a431b&language=en-EN&sort_by=vote_count.desc&include_adult=false&include_video=false&page=";
