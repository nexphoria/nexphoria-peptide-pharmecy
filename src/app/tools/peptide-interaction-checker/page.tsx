import type { Metadata } from "next";
import PeptideInteractionChecker from "./PeptideInteractionChecker";

export const metadata: Metadata = {
  title: "Peptide Interaction Checker | Nexphoria Research Tools",
  description:
    "Check receptor overlap risks, mechanism synergies, timing conflicts, and research warnings when combining 2–5 peptide compounds. 30-compound interaction database.",
  keywords: [
    "peptide interaction checker",
    "peptide combination research",
    "can I combine BPC-157 and TB-500",
    "peptide stack safety",
    "receptor overlap peptides",
    "peptide contraindications",
    "research peptide combinations",
    "GLP-1 GIP interaction",
    "peptide timing conflicts",
    "peptide synergy research",
  ],
  openGraph: {
    title: "Peptide Interaction Checker — Nexphoria Research Tools",
    description:
      "Receptor overlap, mechanism synergies, and timing conflict analysis for 30+ research peptides. Select 2–5 compounds and get a full compatibility matrix.",
    url: "https://nexphoria.com/tools/peptide-interaction-checker",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Interaction Checker — Nexphoria",
    description:
      "Select 2–5 compounds and check receptor overlap, synergies, timing conflicts, and research warnings.",
  },
};

export default function PeptideInteractionCheckerPage() {
  return <PeptideInteractionChecker />;
}
