import express from "express";
const router = express.Router();
import logout from "../controllers/logout.js";
import isAuthenticated from "../auth/IsAuthenticated.js";   
// Route to handle user logout
router.post("/logout", isAuthenticated, logout);
export default router;
// This code defines an Express router for handling user logout.