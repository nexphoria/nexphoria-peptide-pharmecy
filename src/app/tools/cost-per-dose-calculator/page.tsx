import type { Metadata } from "next";
import CostPerDoseCalculator from "./CostPerDoseCalculator";

export const metadata: Metadata = {
  title: "Cost Per Dose Calculator | Nexphoria Research Tools",
  description:
    "Calculate the true cost per dose, doses per vial, weekly cost, and monthly cost for any research peptide. Pre-populated with Nexphoria catalog pricing.",
  keywords: [
    "peptide cost per dose calculator",
    "research peptide cost",
    "doses per vial calculator",
    "peptide monthly cost",
    "peptide dosing cost",
    "weekly peptide cost",
    "semaglutide cost per dose",
    "BPC-157 cost per dose",
  ],
  openGraph: {
    title: "Cost Per Dose Calculator — Nexphoria",
    description:
      "Calculate cost per dose, doses per vial, weekly and monthly cost for any research compound. Pre-populated with catalog pricing.",
    url: "https://nexphoria.com/tools/cost-per-dose-calculator",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost Per Dose Calculator — Nexphoria",
    description:
      "Instantly calculate peptide research costs: cost per dose, doses per vial, weekly and monthly totals.",
  },
};

export default function CostPerDoseCalculatorPage() {
  return <CostPerDoseCalculator />;
}
