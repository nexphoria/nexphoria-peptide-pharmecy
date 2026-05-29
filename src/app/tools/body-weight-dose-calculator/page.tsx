import type { Metadata } from "next";
import BodyWeightDoseCalculator from "./BodyWeightDoseCalculator";

export const metadata: Metadata = {
  title: "Body Weight Dose Calculator | Nexphoria Research Tools",
  description:
    "Convert mg/kg and mcg/kg rodent study dosing protocols to absolute doses for any subject weight. Flip mode calculates mg/kg from absolute dose. Pre-populated with published research dosing data for 30+ peptides.",
  keywords: [
    "peptide body weight dose calculator",
    "mg/kg dose calculator",
    "mcg/kg dose calculator",
    "rodent study dose conversion",
    "peptide research dosing",
    "mouse dose calculator",
    "rat dose calculator",
    "peptide dosing protocol",
    "preclinical dose conversion",
    "research peptide calculator",
  ],
  openGraph: {
    title: "Body Weight Dose Calculator — Nexphoria",
    description:
      "Convert mg/kg or mcg/kg study dosing to absolute doses for mice, rats, and other subjects. Pre-populated with 30+ research peptide protocols.",
    url: "https://nexphoria.com/tools/body-weight-dose-calculator",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Weight Dose Calculator — Nexphoria",
    description:
      "Convert mg/kg or mcg/kg research dosing to absolute doses. 30+ pre-loaded peptide protocols.",
  },
};

export default function BodyWeightDoseCalculatorPage() {
  return <BodyWeightDoseCalculator />;
}
