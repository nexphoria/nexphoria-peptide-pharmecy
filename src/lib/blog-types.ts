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

/**
 * An article without its body — everything a listing or search result needs.
 * Client components should use this (via ./blog-index) so article bodies stay
 * out of the client bundle.
 */
export type BlogArticleMeta = Omit<BlogArticle, "body" | "ogImage">;

export interface BlogSection {
  type: "paragraph" | "heading" | "subheading" | "list" | "callout" | "divider" | "table" | "disclaimer";
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
}

