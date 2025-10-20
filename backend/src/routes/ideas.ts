import type { Request, Response } from "express";
import pool from "../db";

export async function createIdea(req: Request, res: Response) {
  try {
    const { name, email, idea } = req.body as {
      name?: string; email?: string; idea?: string;
    };
    if (!name || !email || !idea) {
      return res.status(400).json({ error: "Missing fields" });
    }

    await pool.query(
      "INSERT INTO ideas (name, email, idea) VALUES ($1, $2, $3)",
      [name, email, idea]
    );

    return res.status(201).json({ message: "Idea submitted successfully" });
  } catch (err) {
    console.error("Error inserting idea:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
