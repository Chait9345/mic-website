import { Router } from "express";
import pool from "../db";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, idea } = req.body;
    if (!name || !email || !idea) {
      return res.status(400).json({ error: "Missing fields" });
    }

    await pool.query(
      "INSERT INTO ideas (name, email, idea) VALUES ($1, $2, $3)",
      [name, email, idea]
    );

    res.status(201).json({ ok: true });
  } catch (err) {
    console.error("Error inserting idea:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;   // <-- default export
