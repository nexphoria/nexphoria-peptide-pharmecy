import type { Metadata } from "next";
import PeptideROICalculator from "./PeptideROICalculator";

export const metadata: Metadata = {
  title: "Peptide Research ROI Calculator | Nexphoria Research Tools",
  description:
    "Estimate the total compound cost for your peptide research study — by study type, subject count, and compounds needed. Compare vs commercial CRO pricing. Ideal for grant budget planning.",
  keywords: [
    "peptide research cost calculator",
    "research grant budget peptides",
    "CRO cost comparison peptides",
    "peptide study cost estimate",
    "how much does peptide research cost",
    "preclinical study budget peptides",
    "animal study peptide cost",
    "peptide ROI calculator",
  ],
  openGraph: {
    title: "Peptide Research ROI Calculator — Nexphoria",
    description:
      "Estimate total compound costs, cost per group, cost per endpoint, and compare vs commercial CRO pricing for peptide research studies.",
    url: "https://nexphoria.com/tools/peptide-roi-calculator",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Research ROI Calculator — Nexphoria",
    description:
      "Plan peptide study budgets: total compound cost, cost per group, CRO comparison. Free research tool.",
  },
};

export default function PeptideROICalculatorPage() {
  return <PeptideROICalculator />;
}
