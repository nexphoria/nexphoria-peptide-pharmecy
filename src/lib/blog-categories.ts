// Blog category slug/display-name mapping.
//
// This lives in lib rather than in the category route so that shared
// components (ArticleCard, the paginated index routes) can use it without
// importing from a page module, which would create a circular import.

// All valid categories — slug → display name
export const categoryMap: Record<string, string> = {
  "compound-profiles": "Compound Profiles",
  "gh-axis": "GH Axis",
  "handling-storage": "Handling & Storage",
  "immunology": "Immunology",
  "longevity": "Longevity",
  "nootropics": "Nootropics",
  "quality-testing": "Quality & Testing",
  "research-fundamentals": "Research Fundamentals",
  "cosmetic": "Cosmetic",
};

// Inverse: display name → slug
const categorySlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(categoryMap).map(([slug, name]) => [name, slug])
);

export function categoryToSlug(name: string): string {
  return categorySlugMap[name] ?? name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export const categoryColors: Record<string, string> = {
  "Research Fundamentals": "#B8A44C",
  "Quality & Testing": "#B8A44C",
  "Handling & Storage": "#B8A44C",
  "Compound Profiles": "#B8A44C",
};

// How many articles render per page on the blog index and category listings.
// The full library is ~2,660 articles; rendering them on one page produced a
// 9.4 MB document, so listings are paginated.
export const ARTICLES_PER_PAGE = 24;

export function totalPagesFor(count: number): number {
  return Math.max(1, Math.ceil(count / ARTICLES_PER_PAGE));
}
