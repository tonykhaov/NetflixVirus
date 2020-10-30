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
  res.json(pizzaduoReviews);
};
