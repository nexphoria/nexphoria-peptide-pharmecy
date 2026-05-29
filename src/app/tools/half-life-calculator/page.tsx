import type { Metadata } from "next";
import HalfLifeCalculator from "./HalfLifeCalculator";

export const metadata: Metadata = {
  title: "Peptide Half-Life Calculator | Nexphoria Research Tools",
  description:
    "Calculate peptide plasma half-life, clearance times, and dosing frequency recommendations for 30+ research peptides. Includes decay curve visualization and dosing interval guidance.",
  keywords: [
    "peptide half life",
    "peptide half life calculator",
    "semaglutide half life",
    "BPC-157 half life",
    "peptide clearance time",
    "dosing frequency peptides",
    "peptide pharmacokinetics",
    "research peptide calculator",
  ],
  openGraph: {
    title: "Peptide Half-Life & Dosing Frequency Calculator — Nexphoria",
    description:
      "Interactive half-life calculator for 30+ research peptides. Clearance milestones, decay curve, dosing interval guidance. Research use only.",
    url: "https://nexphoria.com/tools/half-life-calculator",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Half-Life Calculator — Nexphoria",
    description:
      "Calculate half-life, clearance, and dosing frequency for 30+ research peptides.",
  },
};

export default function HalfLifeCalculatorPage() {
  return <HalfLifeCalculator />;
}
