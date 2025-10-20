import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createIdea(req: Request, res: Response) {
  try {
    const { name, email, idea } = req.body as {
      name?: string; email?: string; idea?: string;
    };

    if (!name || !email || !idea) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // Map your form fields -> Prisma model fields
    const created = await prisma.ideaSubmission.create({
      data: {
        teamName: String(name),
        contactEmail: String(email),
        ideaTitle: String(idea).slice(0, 80) || "Idea", // short title from idea
        ideaSummary: String(idea),                       // full idea text
      },
    });

    return res.status(201).json({ ok: true, id: created.id });
  } catch (err) {
    console.error("Error inserting idea:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
