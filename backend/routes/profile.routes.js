import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { getProfile, updateProfile } from "../controllers/profile.controller.js";

const router = Router();

router.get("/", auth, getProfile);
router.put("/", auth, updateProfile);

export default router;
