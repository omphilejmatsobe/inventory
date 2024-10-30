import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardController.js";

const router = Router();
router.get("/", getDashboardMetrics);

export default router;