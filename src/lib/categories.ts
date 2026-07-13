export const CATEGORY_SLUGS = [
  "cli-tools",
  "web-apps",
  "mobile-apps",
  "browser-extensions",
  "ai-agents",
  "platform-extensions",
  "design-systems",
  "web-libraries",
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export interface Category {
  slug: CategorySlug;
  name: string;
  blurb: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  {
    slug: "cli-tools",
    name: "CLI tools",
    blurb: "Single-binary tools that respect your terminal.",
    icon: "M4 7h16M4 12h10M4 17h7",
  },
  {
    slug: "web-apps",
    name: "Web apps",
    blurb: "Self-hostable, audit-friendly web software.",
    icon: "M3 6h18M3 6v12h18V6M7 10h4M7 14h6",
  },
  {
    slug: "mobile-apps",
    name: "Mobile apps",
    blurb: "Expo and React Native apps for iOS and Android.",
    icon: "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2ZM11 18h2",
  },
  {
    slug: "browser-extensions",
    name: "Browser extensions",
    blurb: "MV3 extensions for Chrome, Firefox, Edge.",
    icon: "M9 4l3 3 3-3M12 7v10M5 14a4 4 0 0 0 14 0",
  },
  {
    slug: "ai-agents",
    name: "AI agents",
    blurb: "Pragmatic agents and SDK glue. No hype.",
    icon: "M12 3a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V7a4 4 0 0 1 4-4ZM5 21a7 7 0 0 1 14 0",
  },
  {
    slug: "platform-extensions",
    name: "Platform extensions",
    blurb: "Plugins for Shopware, TYPO3, WordPress, more.",
    icon: "M14 4h4v4M10 20H6v-4M20 10v4M4 14v-4M14 14l6-6M10 10 4 4",
  },
  {
    slug: "design-systems",
    name: "Design systems",
    blurb: "Tokens, components, docs you can copy.",
    icon: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  },
  {
    slug: "web-libraries",
    name: "Web libraries",
    blurb: "Drop-in libraries and plugins for the browser.",
    icon: "M3 12h18M12 3v18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4",
  },
];

export function getCategory(slug: CategorySlug): Category {
  const found = CATEGORIES.find((category) => category.slug === slug);
  if (!found) throw new Error(`Unknown category slug: ${slug}`);
  return found;
}
