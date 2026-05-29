import type { Metadata } from "next";
import PeptideStabilityChecker from "./PeptideStabilityChecker";

export const metadata: Metadata = {
  title: "Peptide Stability Checker | Nexphoria Research Tools",
  description:
    "Check peptide shelf life and degradation risk by compound and storage condition. Get compound-specific stability data, risk factors, and storage recommendations for 34+ research peptides.",
  keywords: [
    "peptide stability",
    "peptide shelf life",
    "peptide storage conditions",
    "reconstituted peptide stability",
    "peptide degradation",
    "lyophilized peptide storage",
    "BPC-157 shelf life",
    "peptide stability checker",
    "research peptide storage",
  ],
  openGraph: {
    title: "Peptide Stability Checker — Nexphoria Research Tools",
    description:
      "Interactive stability reference for 34+ research peptides. Shelf life estimates, degradation risk levels, storage recommendations by compound and condition.",
    url: "https://nexphoria.com/tools/peptide-stability-checker",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Stability Checker — Nexphoria",
    description:
      "Compound-specific stability data, shelf life, and degradation risk for 34+ research peptides.",
  },
};

export default function PeptideStabilityCheckerPage() {
  return <PeptideStabilityChecker />;
}
