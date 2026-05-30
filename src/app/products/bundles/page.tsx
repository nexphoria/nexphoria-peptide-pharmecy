import type { Metadata } from "next";
import BundlesClient from "./BundlesClient";

export const metadata: Metadata = {
  title: "Compound Bundles — Research Protocol Stacks | Nexphoria",
  description:
    "Curated peptide research bundles: Recovery Stack (BPC-157 + TB-500), GH Pulse Stack (CJC-1295 + Ipamorelin), Longevity Pack (NAD+ + Epitalon + GHK-Cu), Metabolic Research Kit (Semaglutide + Tirzepatide). Protocol-matched compound stacks with 5–8% bundle savings.",
  openGraph: {
    title: "Compound Bundles | Nexphoria Research",
    description:
      "Protocol-matched peptide research stacks. Recovery, GH Axis, Longevity, and Metabolic bundles with 5–8% savings vs individual pricing.",
    url: "https://nexphoria.com/products/bundles",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compound Bundles | Nexphoria Research",
    description: "Protocol-matched peptide research stacks with bundle savings.",
  },
};

export default function BundlesPage() {
  return <BundlesClient />;
}
