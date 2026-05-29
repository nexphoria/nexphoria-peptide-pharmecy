import type { Metadata } from "next";
import BiomarkerReference from "./BiomarkerReference";

export const metadata: Metadata = {
  title: "Biomarker Reference Guide | Nexphoria Research Tools",
  description:
    "Comprehensive biomarker reference table for peptide researchers. 32 lab biomarkers with normal ranges, compound interactions, and optimal testing frequency guidance.",
  keywords: [
    "biomarker reference",
    "peptide biomarkers",
    "IGF-1 reference range",
    "growth hormone testing",
    "peptide lab work",
    "biomarker tracking",
    "research peptide labs",
    "peptide bloodwork",
  ],
  openGraph: {
    title: "Biomarker Reference Guide — Nexphoria",
    description:
      "32 lab biomarkers with normal ranges, compound interactions, and testing frequency. Track the right labs for your research protocol.",
    url: "https://nexphoria.com/tools/biomarker-reference",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biomarker Reference Guide — Nexphoria",
    description:
      "32 biomarkers with ranges, compound interactions, and testing frequency for peptide research.",
  },
};

export default function BiomarkerReferencePage() {
  return <BiomarkerReference />;
}
