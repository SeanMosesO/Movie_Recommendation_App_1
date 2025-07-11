import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getProfile, updateProfile } from "../controllers/userController.js";

const router = express.Router();
router.use(protect);

router.get("/me", getProfile);
router.put("/me", updateProfile);

export default router;
