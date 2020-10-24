import pizzaduoReviews from "../../../db/pizzaduoReview";

export default (req, res) => {
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
