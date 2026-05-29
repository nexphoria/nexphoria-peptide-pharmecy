import type { Metadata } from "next";
import IGF1Calculator from "./IGF1Calculator";

export const metadata: Metadata = {
  title: "IGF-1 Response Estimator | GH Secretagogue Stack Calculator | Nexphoria",
  description:
    "Estimate IGF-1 % elevation from GHRH analog + GHRP combinations based on published clinical study data. Includes compound-specific reference ranges, synergy multipliers, and duration modifiers for research use only.",
  keywords: [
    "IGF-1 calculator",
    "IGF-1 response calculator",
    "GH secretagogue IGF-1",
    "sermorelin IGF-1 elevation",
    "CJC-1295 IGF-1 increase",
    "ipamorelin IGF-1 research",
    "GHRH peptide IGF-1",
    "growth hormone peptide research",
    "peptide IGF-1 estimator",
    "GH axis research tools",
  ],
  openGraph: {
    title: "IGF-1 Response Estimator — Nexphoria Research Tools",
    description:
      "Estimate IGF-1 % elevation from GHRH analog + GHRP stacking based on published study data. Research reference only.",
    url: "https://nexphoria.com/tools/igf-1-calculator",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IGF-1 Response Estimator — Nexphoria",
    description:
      "Estimate IGF-1 % elevation from GH secretagogue stacking using published pharmacology data.",
  },
};

export default function IGF1CalculatorPage() {
  return <IGF1Calculator />;
}
