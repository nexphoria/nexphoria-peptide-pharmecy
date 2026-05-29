import type { Metadata } from "next";
import ResearchLog from "./ResearchLog";

export const metadata: Metadata = {
  title: "Research Log | Nexphoria Research Tools",
  description:
    "A client-side research journal for tracking daily peptide observations. Log compounds, doses, routes, and free-text notes. Persists in localStorage. Export as CSV or print.",
  keywords: [
    "peptide research log",
    "research journal peptide",
    "peptide observation log",
    "peptide dose tracking",
    "research compound log",
    "peptide study journal",
    "research notes tracker",
  ],
  openGraph: {
    title: "Research Log — Nexphoria",
    description:
      "Track daily compound administrations, doses, and observations. Stored locally in your browser — no account needed. Export to CSV anytime.",
    url: "https://nexphoria.com/tools/research-log",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Log — Nexphoria",
    description:
      "Log peptide compound administrations, doses, and observations. Persists locally, exports as CSV.",
  },
};

export default function ResearchLogPage() {
  return <ResearchLog />;
}
