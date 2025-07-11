import Favorite from "../models/favorite.js";

export const addFavorite = async (req, res) => {
  const { tmdbId, title, posterPath, releaseDate, voteAverage, overview } = req.body;
  try {
    const existing = await Favorite.findOne({ userId: req.user.id, tmdbId });
    if (existing) return res.status(409).json({ message: "Already added" });

    const favorite = new Favorite({ userId: req.user.id, tmdbId, title, posterPath, releaseDate, voteAverage, overview });
    await favorite.save();
    res.status(201).json(favorite);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getFavorites = async (req, res) => {
  const favorites = await Favorite.find({ userId: req.user.id });
  res.json(favorites);
};

export const removeFavorite = async (req, res) => {
  await Favorite.deleteOne({ userId: req.user.id, tmdbId: req.params.tmdbId });
  res.json({ message: "Removed" });
};
