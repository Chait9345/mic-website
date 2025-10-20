import { Router } from "express";
import { createIdea } from "../controllers/ideas";

const router = Router();
router.post("/", createIdea);

export default router;
