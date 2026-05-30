import type { Metadata } from "next";
import PeptideNewsFeed from "./PeptideNewsFeed";

export const metadata: Metadata = {
  title: "Peptide Research News Feed | Nexphoria Research Tools",
  description:
    "Curated high-impact peptide research papers from PubMed and preprint servers. Filter by compound, category, or journal. 20+ landmark papers on GLP-1, BPC-157, TB-500, NAD+, and more.",
  keywords: [
    "peptide research news",
    "peptide pubmed papers",
    "GLP-1 research 2024",
    "BPC-157 research papers",
    "semaglutide study",
    "tirzepatide research",
    "NAD+ longevity research",
    "peptide literature",
    "research peptide studies",
    "peptide science news",
  ],
  openGraph: {
    title: "Peptide Research News Feed — Nexphoria",
    description:
      "Curated landmark research papers on key peptides. Filter by compound or category. Updated each site build.",
    url: "https://nexphoria.com/tools/peptide-news-feed",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Research News Feed — Nexphoria",
    description:
      "Curated high-impact PubMed papers on research peptides — filter by compound or category.",
  },
};

export default function PeptideNewsFeedPage() {
  return <PeptideNewsFeed />;
}
