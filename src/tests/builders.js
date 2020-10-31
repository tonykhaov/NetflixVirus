const { build, fake, sequence } = require("@jackfranklin/test-data-bot");

export const movieBuilder = build("movie", {
  fields: {
    backdrop_path: fake((f) => f.random.image()),
    id: sequence(),
    overview: fake((f) => f.lorem.sentences()),
    title: fake((f) => f.name.title()),
    vote_average: fake((f) => f.random.number(10)),
    poster_path: fake((f) => f.random.image()),
  },
});
