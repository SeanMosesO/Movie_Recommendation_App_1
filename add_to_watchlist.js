import express from 'express';
const router = express.Router();

import addToWatchlist from '../controllers/addToWatchlist.js';
import isAuthenticated from '../auth/IsAuthenticated.js';
router.post('/add_to_watchlist', isAuthenticated, addToWatchlist);

export default router;
// This code defines an Express router for handling requests to add items to a user's watchlist.
// It imports the necessary controller and authentication middleware, sets up a POST route for adding to the watchlist, and exports the router for use in the main application.
// The `addToWatchlist` controller will handle the logic for adding an item to the user's watchlist, while the `isAuthenticated` middleware ensures that only authenticated users can access this route.    
// The route is defined as `/add_to_watchlist`, and it expects a POST request with the necessary data to add an item to the watchlist.
// This setup is typical in applications that manage user-specific data, such as watchlists for movies, shows, or other items of interest.