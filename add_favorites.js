import express from "express";
const router = express.Router();
import addFavoritesController from "../controllers/add_favorites.js";

import isAuthenticated from "../auth/IsAuthenticated.js";

// Route to add favorites
router.post("/favorites", isAuthenticated, addFavoritesController); 

// Export the router
export default router;