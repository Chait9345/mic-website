import type { Request, Response } from "express";
import pool from "../db";

export async function listLinks(_req: Request, res: Response) {
  try {
    const { rows } = await pool.query("SELECT id, title, url FROM links ORDER BY id DESC");
    return res.json(rows);
  } catch (err) {
    console.error("Error listing links:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function upsertLink(req: Request, res: Response) {
  try {
    const { id, title, url } = req.body as { id?: number; title?: string; url?: string };
    if (!title || !url) return res.status(400).json({ error: "Missing fields" });

    if (id) {
      await pool.query("UPDATE links SET title=$1, url=$2 WHERE id=$3", [title, url, id]);
    } else {
      await pool.query("INSERT INTO links (title, url) VALUES ($1, $2)", [title, url]);
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Error upserting link:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
