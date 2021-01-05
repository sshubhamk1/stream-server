import { Router } from "express";
import * as adminController from "../Controllers/adminLevelController";
const router = Router();

router.route("/users").get(adminController.getAllUser);

export default router;
