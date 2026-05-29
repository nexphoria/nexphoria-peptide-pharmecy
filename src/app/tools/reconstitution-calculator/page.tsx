import type { Metadata } from "next";
import ReconstitutionCalculator from "./ReconstitutionCalculator";

export const metadata: Metadata = {
  title: "Peptide Reconstitution Calculator | Nexphoria Research Tools",
  description:
    "Free peptide reconstitution calculator. Enter vial size (mg), desired concentration (mcg/mL), and dose to get exact BAC water volume, dose volume (mL + insulin units), and doses per vial.",
  openGraph: {
    title: "Peptide Reconstitution Calculator — Nexphoria",
    description:
      "Calculate BAC water volume, dose volume, and doses per vial for any lyophilized peptide. Research use only.",
    url: "https://nexphoria.com/tools/reconstitution-calculator",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Reconstitution Calculator — Nexphoria",
    description:
      "Free reconstitution calculator for lyophilized peptide vials.",
  },
};

export default function ReconstitutionCalculatorPage() {
  return <ReconstitutionCalculator />;
}
