import { Router } from "express";
import { isRoleUser } from "../Engine/Middleware/EntrustRoleMiddleware";

import adminRoutes from "./Routes/adminLevelRoutes";
const router = Router();

router.use(isRoleUser);

router.use("/admin", adminRoutes);
export default router;
