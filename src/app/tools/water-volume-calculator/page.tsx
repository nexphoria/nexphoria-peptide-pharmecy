import type { Metadata } from "next";
import WaterVolumeCalculator from "./WaterVolumeCalculator";

export const metadata: Metadata = {
  title: "BAC Water Volume Calculator | Nexphoria Research Tools",
  description:
    "Calculate exactly how much bacteriostatic water to add to your lyophilized peptide vial. Enter desired concentration and vial size — get precise mL volume instantly.",
  openGraph: {
    title: "BAC Water Volume Calculator — Nexphoria",
    description:
      "Instantly calculate the exact BAC water volume for any lyophilized peptide vial at your target concentration. Free research tool.",
    url: "https://nexphoria.com/tools/water-volume-calculator",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BAC Water Volume Calculator — Nexphoria",
    description:
      "Calculate exact BAC water volume for peptide reconstitution. Free research utility.",
  },
};

export default function WaterVolumeCalculatorPage() {
  return <WaterVolumeCalculator />;
}
