import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  tmdbId: { type: Number, required: true },
  title: String,
  posterPath: String,
  releaseDate: String,
  voteAverage: Number,
  overview: String,
});

export default mongoose.model("Favorite", favoriteSchema);
