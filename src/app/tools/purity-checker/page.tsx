import type { Metadata } from "next";
import PurityChecker from "./PurityChecker";

export const metadata: Metadata = {
  title: "Peptide Purity Checker & COA Guide | Nexphoria Research Tools",
  description:
    "Look up typical HPLC purity specifications for 30+ research peptides. Learn how to read a Certificate of Analysis, what to check, and red flags that indicate a suspicious COA.",
  keywords: [
    "peptide purity checker",
    "HPLC purity peptide",
    "certificate of analysis guide",
    "how to read COA",
    "research peptide COA",
    "peptide purity specification",
    "COA red flags",
    "peptide quality verification",
    "HPLC chromatogram",
    "mass spectrometry peptide",
  ],
  openGraph: {
    title: "Peptide Purity Checker & COA Guide — Nexphoria",
    description:
      "Look up HPLC purity specs for research peptides and learn how to evaluate a Certificate of Analysis.",
    url: "https://nexphoria.com/tools/purity-checker",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Purity Checker & COA Guide — Nexphoria",
    description:
      "Typical HPLC purity specs + complete COA evaluation guide for research peptides.",
  },
};

export default function PurityCheckerPage() {
  return <PurityChecker />;
}
