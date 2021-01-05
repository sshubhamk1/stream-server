import { Router } from "express";
import * as adminController from "../Controllers/adminLevelController";
const router = Router();

router.route("/users").get(adminController.getAllUser);

router.route("/video").get(adminController.getVideo);

export default router;
