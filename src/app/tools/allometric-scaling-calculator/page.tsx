import type { Metadata } from "next";
import AllometricScalingCalculator from "./AllometricScalingCalculator";

export const metadata: Metadata = {
  title: "Allometric Scaling Calculator | Nexphoria Research Tools",
  description:
    "Convert rodent study doses to human equivalent doses (HED) using FDA 2005 allometric scaling guidance. Based on body surface area Km factors. Cross-species comparison table for mice, rats, rabbits, monkeys, and more.",
  keywords: [
    "allometric scaling calculator",
    "human equivalent dose",
    "HED calculator",
    "FDA allometric scaling",
    "rodent to human dose conversion",
    "mg/kg HED",
    "Km factor",
    "body surface area dose conversion",
    "preclinical to clinical dose",
    "peptide dose scaling",
  ],
  openGraph: {
    title: "Allometric Scaling Calculator — Nexphoria",
    description:
      "Convert animal study doses to human equivalent doses using FDA 2005 Km-based allometric scaling. Mouse, rat, rabbit, monkey, and dog supported.",
    url: "https://nexphoria.com/tools/allometric-scaling-calculator",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Allometric Scaling Calculator — Nexphoria",
    description:
      "FDA-guided allometric scaling for research peptides. Instant HED from any animal species dose.",
  },
};

export default function AllometricScalingCalculatorPage() {
  return <AllometricScalingCalculator />;
}
