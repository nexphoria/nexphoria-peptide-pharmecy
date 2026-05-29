// Category-specific accent colors for vial caps
const CATEGORY_COLORS: Record<string, string> = {
  "Recovery & Healing": "#8BA88A",
  "Growth Hormone": "#4A5D8A",
  "Metabolic": "#C49A6C",
  "Weight Management": "#C47A6C",
  "Cognitive": "#7A6CA4",
  "Longevity": "#B8A44C",
  "Neuropeptide": "#5A8A8A",
  "Immune": "#8A4A4A",
  "Dermatological": "#A47A8A",
  "Sexual Health": "#A44A6C",
  "Accessories": "#8A8A8A",
};

export function getCategoryColor(category: string): string {
  return CATEGORY_COLORS[category] ?? "#888888";
}
