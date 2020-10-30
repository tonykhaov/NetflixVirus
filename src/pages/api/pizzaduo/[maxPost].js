import Cors from "cors";
import pizzaduoReviews from "../../../db/pizzaduoReview";

const cors = Cors({
  methods: ["GET", "HEAD"],
});

async function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async (req, res) => {
  await runMiddleware(req, res, cors);
  const { maxPost } = req.query;
  const numberedMaxPost = Number(maxPost);

  if (isNaN(numberedMaxPost) || numberedMaxPost > 118) {
    res.json({
      error:
        "Invalid maxPost query either it is greater than 118 or it is not a number",
    });
  }

  const slicedReviews = pizzaduoReviews.slice(0, numberedMaxPost);
  res.json(slicedReviews);
};
