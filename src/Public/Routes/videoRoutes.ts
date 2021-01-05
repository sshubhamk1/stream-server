import { Router } from "express";

// importing all controllers of auths
import * as authController from "../Controllers/videoController";

// creating router for auths
const router = Router();

router.route("/video").get(authController.getVideo);
export default router;
