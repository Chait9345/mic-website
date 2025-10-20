import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

// ✅ CORS configuration
const allowOrigins =
  process.env.NODE_ENV === "production"
    ? (process.env.FRONTEND_ORIGIN ? [process.env.FRONTEND_ORIGIN] : [])
    : (process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : ["http://localhost:5173"]);

const corsConfig: cors.CorsOptions = {
  origin: allowOrigins,
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "x-api-key"],
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig)); // ✅ handles preflight OPTIONS requests globally

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// ✅ health check route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// ✅ Example ideas POST route (keep your real logic here)
import ideasRouter from "./routes/ideas"; 
app.use("/api/ideas", ideasRouter);

// catch-all for 404
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

export default app;
