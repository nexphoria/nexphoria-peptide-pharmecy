import type { Metadata } from "next";
import MolarityCalculator from "./MolarityCalculator";

export const metadata: Metadata = {
  title: "Molarity Calculator for Research Peptides | Nexphoria Tools",
  description:
    "Convert between molar concentration (nM/μM/mM/M) and mass concentration (mg/mL/μg/mL) for peptides and small molecules. Enter molecular weight or select a compound — instant unit conversion.",
  openGraph: {
    title: "Peptide Molarity Calculator — Nexphoria Research Tools",
    description:
      "Convert molar ↔ mass concentration for any peptide or small molecule. Select compound for automatic MW, or enter custom MW. Free tool for in vitro assay and cell culture research.",
    url: "https://nexphoria.com/tools/molarity-calculator",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Molarity Calculator — Nexphoria",
    description:
      "Instantly convert between molar and mass concentration for research peptides. Free utility.",
  },
};

export default function MolarityCalculatorPage() {
  return <MolarityCalculator />;
}
