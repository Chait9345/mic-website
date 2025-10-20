import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { router } from "./routes";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// hardening + parsers + logs
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({ limit: "1mb" }));

// CORS only in dev (in prod we serve the frontend from same origin)
app.use(cors({
  origin: process.env.NODE_ENV === "production"
    ? false
    : (process.env.CORS_ORIGIN?.split(",") ?? "*"),
  credentials: true
}));

// serve admin.html
app.use(express.static(path.join(__dirname, "..", "public")));

// serve built frontend in prod
const FRONTEND_DIST = path.resolve(__dirname, "..", "..", "frontend", "dist");
app.use(express.static(FRONTEND_DIST));

// API
app.use("/api", router);

// SPA fallback
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(FRONTEND_DIST, "index.html"));
});

export default app;
