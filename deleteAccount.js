import express from "express";
const router = express.Router();
import deleteAccountController from "../controllers/deleteAccount.js";
import isAuthenticated from "../auth/IsAuthenticated.js";

// Route to handle account deletion
router.delete("/account", isAuthenticated, deleteAccountController);

export default router;
// This code defines an Express router for handling user account deletion.