import Watchlist from "../models/watchlist_schema.js";
import getorAddLocalDb from "../services/gettoaddLocaldb.js";

export const createWatchlist = async (req, res) => {
  const watchlist = new Watchlist({ userId: req.user.id, name: req.body.name });
  await watchlist.save();
  res.status(201).json(watchlist);
};

export const getWatchlists = async (req, res) => {
  const lists = await Watchlist.find({ userId: req.user.id });
  res.json(lists);
};

export const addMovieToList = async (req, res) => {
  const { tmdbId, title, posterPath, releaseDate } = req.body;
  const list = await Watchlist.findById(req.params.id);
  if (!list) return res.status(404).json({ message: "List not found" });

  list.movies.push({ tmdbId, title, posterPath, releaseDate });
  await list.save();
  res.json(list);
};

export const removeMovieFromList = async (req, res) => {
  const list = await Watchlist.findById(req.params.id);
  list.movies = list.movies.filter(m => m.tmdbId != req.params.tmdbId);
  await list.save();
  res.json(list);
};
