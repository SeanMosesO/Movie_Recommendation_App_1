import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  tmdbId: Number,
  username: String,
  rating: { type: Number, min: 1, max: 10 },
  comment: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Review", reviewSchema);
