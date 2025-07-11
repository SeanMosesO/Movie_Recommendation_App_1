import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createWatchlist, getWatchlists, addMovieToList, removeMovieFromList } from "../controllers/watchlistController.js";

const router = express.Router();
router.use(protect);

router.post("/", createWatchlist);
router.get("/", getWatchlists);
router.post("/:id/add", addMovieToList);
router.delete("/:id/:tmdbId", removeMovieFromList);

export default router;
