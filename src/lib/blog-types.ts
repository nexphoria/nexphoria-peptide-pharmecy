export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  readMinutes: number;
  publishedAt: string; // ISO date string
  ogImage?: string;
  body: BlogSection[];
}

export interface BlogSection {
  type: "paragraph" | "heading" | "subheading" | "list" | "callout" | "divider" | "table" | "disclaimer";
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
}

