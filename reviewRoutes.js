import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { addReview, getReviews } from "../controllers/reviewController.js";

const router = express.Router();

router.get("/:tmdbId", getReviews);
router.post("/", protect, addReview);

export default router;
