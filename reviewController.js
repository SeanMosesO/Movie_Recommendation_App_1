import Review from "../models/Review.js";

export const addReview = async (req, res) => {
  const { tmdbId, rating, comment } = req.body;
  const review = new Review({
    userId: req.user.id,
    username: req.user.username,
    tmdbId,
    rating,
    comment,
  });
  await review.save();
  res.status(201).json(review);
};

export const getReviews = async (req, res) => {
  const reviews = await Review.find({ tmdbId: req.params.tmdbId });
  res.json(reviews);
};
