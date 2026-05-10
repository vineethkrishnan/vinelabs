import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    language: z.string(),
    license: z.string(),
    status: z.enum(["stable", "beta", "alpha"]),
    categories: z
      .array(
        z.enum([
          "cli-tools",
          "web-apps",
          "browser-extensions",
          "ai-agents",
          "platform-extensions",
          "design-systems",
        ]),
      )
      .min(1)
      .max(4),
    highlights: z.array(z.string()).min(2).max(5),
    repo: z.string().url(),
    docs: z.string().url().optional(),
    install: z.string().optional(),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
