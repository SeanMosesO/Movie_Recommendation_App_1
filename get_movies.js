import express from 'express';
import getOrAddLocalDb from '../services/get_movies.js'; 
import isAuthenticated from '../auth/IsAuthenticated.js'; 
// Middleware to check if the user is authenticated
const router = express.Router();
// Route to get movies
router.get('/movies', isAuthenticated, getMovies);
export default router;  
// This route is protected by the isAuthenticated middleware, which checks if the user is authenticated before allowing access to the getMovies function.
