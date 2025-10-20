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

// Security + logs + JSON
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({ limit: "1mb" }));

/**
 * CORS:
 * - In prod, allow only your Vercel domain (set FRONTEND_ORIGIN env)
 * - In dev, allow localhost:5173 (set CORS_ORIGIN=... in .env)
 */
const allowOrigins =
  process.env.NODE_ENV === "production"
    ? (process.env.FRONTEND_ORIGIN ? [process.env.FRONTEND_ORIGIN] : [])
    : (process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : ["http://localhost:5173"]);

app.use(cors({ origin: allowOrigins, credentials: true }));

// Optional: serve any admin static files if you keep /public
app.use(express.static(path.join(__dirname, "..", "public")));

// Health check
app.get("/health", (_req, res) => res.json({ ok: true }));

// API routes
app.use("/api", router);

export default app;
