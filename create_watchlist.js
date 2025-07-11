import express from "express";
const router = express.Router();

import createWatchlistController from "../controllers/create_watchlist.js";
import isAuthenticated from "../auth/IsAuthenticated.js";
router.post('/create_watchlist', isAuthenticated, createWatchlist);

export default router;