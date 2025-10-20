import type { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { z } from "zod";

const LinkSchema = z.object({
  key: z.string().min(1),     // e.g. "join_now"
  label: z.string().min(1),   // e.g. "Join Now"
  url: z.string().url()       // e.g. "https://..."
});

// Public: list all links (frontend reads this to render dynamic CTAs)
export async function listLinks(_req: Request, res: Response) {
  const links = await prisma.link.findMany({ orderBy: { updatedAt: "desc" } });
  res.json(links);
}

// Admin: create or update a link by key
export async function upsertLink(req: Request, res: Response) {
  const { key, label, url } = LinkSchema.parse(req.body);
  const saved = await prisma.link.upsert({
    where: { key },
    update: { label, url },
    create: { key, label, url }
  });
  res.json(saved);
}
