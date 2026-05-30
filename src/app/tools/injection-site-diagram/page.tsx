import type { Metadata } from "next";
import InjectionSiteDiagram from "./InjectionSiteDiagram";

export const metadata: Metadata = {
  title: "Injection Site Diagram | Nexphoria Research Tools",
  description:
    "Interactive subcutaneous and intramuscular injection site guide. Clickable body diagram with needle length, angle, volume limits, rotation advice, and common mistakes for each zone.",
  keywords: [
    "injection site diagram",
    "peptide injection sites",
    "subcutaneous injection guide",
    "intramuscular injection guide",
    "SC injection technique",
    "injection site rotation",
    "peptide administration guide",
    "research peptide injection",
  ],
  openGraph: {
    title: "Injection Site Diagram — Nexphoria",
    description:
      "Interactive body diagram for peptide injection site selection. Clickable zones with needle length, angle, volume limits, and rotation advice.",
    url: "https://nexphoria.com/tools/injection-site-diagram",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Injection Site Diagram — Nexphoria",
    description:
      "Interactive injection site guide for peptide researchers. Clickable zones with technique details, rotation advice, and common mistakes.",
  },
};

export default function InjectionSiteDiagramPage() {
  return <InjectionSiteDiagram />;
}
