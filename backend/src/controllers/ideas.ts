import type { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { z } from "zod";

// Frontend form sends exactly 3 fields
const IdeaSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  idea: z.string().min(5),
});

// Public: accept idea submissions
export async function createIdea(req: Request, res: Response) {
  const { name, email, idea } = IdeaSchema.parse(req.body);

  // derive a short title for DB from the idea text
  const ideaTitle = idea.length > 60 ? idea.slice(0, 60) + "…" : idea;

  const saved = await prisma.ideaSubmission.create({
    data: {
      teamName: name,
      contactEmail: email,
      ideaTitle,
      ideaSummary: idea
    }
  });

  res.status(201).json({ ok: true, id: saved.id });
}
