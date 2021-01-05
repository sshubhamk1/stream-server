import { Router } from "express";

// importing different routes for public role
import authRoutes from "./Routes/authRoutes";

// importing video Routes
import videoRoutes from "./Routes/videoRoutes";

// creating router for public role
const router = Router();

// giving route path to different routes of public role
router.use("/auth", authRoutes);

router.use("/video", videoRoutes);

export default router;
