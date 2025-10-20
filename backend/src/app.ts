import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { router } from "./routes";
// ⬆️ remove: import { fileURLToPath } from "url";

dotenv.config();

const app = express();

// ⬇️ remove these ESM-only lines:
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Security + logs + JSON
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({ limit: "1mb" }));

// CORS
const allowOrigins =
  process.env.NODE_ENV === "production"
    ? (process.env.FRONTEND_ORIGIN ? [process.env.FRONTEND_ORIGIN] : ["*"])
    : (process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : ["http://localhost:5173"]);

app.use(cors({ origin: allowOrigins, credentials: true }));

// Optional: serve any admin static files if you keep /public
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/health", (_req, res) => res.json({ ok: true }));

// API routes
app.use("/api", router);

export default app;
