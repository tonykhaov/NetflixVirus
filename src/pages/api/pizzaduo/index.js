import pizzaduoReviews from "../../../db/pizzaduoReview";

export default (req, res) => {
  res.json(pizzaduoReviews);
};
