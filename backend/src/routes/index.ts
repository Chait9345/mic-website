import { Router } from "express";
import { requireAdmin } from "../middlewares/auth";
import * as Links from "../controllers/links";
import * as Ideas from "../controllers/ideas";

export const router = Router();

// Public
router.get("/links", Links.listLinks);
router.post("/ideas", Ideas.createIdea);

// Admin (x-api-key header required)
router.post("/links", requireAdmin, Links.upsertLink);

export default router;
