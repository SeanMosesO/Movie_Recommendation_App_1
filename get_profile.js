import express from 'express';
import getProfileController from '../controllers/getProfile.js';
import isAuthenticated from '../auth/IsAuthenticated.js';

const router = express.Router();
// Route to get user profile
router.get('/profile', isAuthenticated, getProfileController);

export default router;
// This route handles GET requests to retrieve a user's profile.