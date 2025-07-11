import express from 'express';
const router = express.Router();
import updateProfileController from '../controllers/updateProfile.js';
import isAuthenticated from '../auth/IsAuthenticated.js';
// Route to update user profile
router.put('/profile', isAuthenticated, updateProfileController);
export default router;
// This code defines an Express router for handling profile updates.
// It imports the necessary controllers and authentication middleware, sets up a PUT route for updating the user profile, and exports the router for use in the main application.