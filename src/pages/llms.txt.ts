import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
  const base = site?.toString() ?? "https://vinelabs.de/";
  const projects = (await getCollection("projects"))
    .filter((project) => !project.data.draft)
    .sort((a, b) => a.data.order - b.data.order);

  const lines = [
    "# VineLabs",
    "",
    "> A personal, non-commercial open-source lab. CLI tools, web apps, browser extensions, AI agents, platform extensions, and design systems. Open by default, self-host friendly.",
    "",
    "Maintained by Vineeth N K. Each project links to its source repository.",
    "",
    "## Projects",
    "",
    ...projects.map((project) => {
      const { name, tagline, repo, language, license, status } = project.data;
      return `- [${name}](${repo}): ${tagline} (${language}, ${license}, ${status})`;
    }),
    "",
    "## Site",
    "",
    `- [Home](${new URL("/", base).toString()})`,
    `- [Support](${new URL("/support", base).toString()}): how to get help, report issues, security disclosure`,
    `- [Impressum](${new URL("/impressum", base).toString()})`,
    `- [Datenschutz](${new URL("/datenschutz", base).toString()})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
