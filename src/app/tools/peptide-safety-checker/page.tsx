import type { Metadata } from "next";
import PeptideSafetyChecker from "./PeptideSafetyChecker";

export const metadata: Metadata = {
  title: "Peptide Safety Checker | Nexphoria Research Tools",
  description:
    "Look up safety profiles, side effect data, contraindicated co-administration, and special handling warnings for 30+ research peptides. RUO reference tool.",
  keywords: [
    "peptide safety",
    "peptide side effects research",
    "peptide contraindications",
    "BPC-157 side effects",
    "GLP-1 nausea research",
    "GHK-Cu copper toxicity",
    "peptide handling warnings",
    "semaglutide side effects rodent",
    "research peptide safety checker",
    "peptide receptor profile",
  ],
  openGraph: {
    title: "Peptide Safety Checker — Nexphoria Research Tools",
    description:
      "Safety profiles, side effect data, contraindicated pairings, and special handling warnings for 30+ research peptides.",
    url: "https://nexphoria.com/tools/peptide-safety-checker",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Safety Checker — Nexphoria",
    description:
      "Research-grade safety reference: side effects, receptor profiles, contraindications, and special handling for 30+ compounds.",
  },
};

export default function PeptideSafetyCheckerPage() {
  return <PeptideSafetyChecker />;
}
