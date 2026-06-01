import type { Metadata } from "next";
import PeptideLabelGenerator from "./PeptideLabelGenerator";

export const metadata: Metadata = {
  title: "Peptide Vial Label Generator | Nexphoria Research Tools",
  description:
    "Generate printable cryo-tube vial labels for research peptides. Enter compound name, concentration, lot number, reconstitution date, and storage condition. Preview and print standard 1\"×2.5\" cryo labels.",
  keywords: [
    "peptide vial label",
    "cryo label generator",
    "peptide label printable",
    "research peptide labeling",
    "vial label template",
    "peptide reconstitution label",
    "lab vial label generator",
    "cryogenic label peptide",
    "peptide storage label",
    "research compound label",
  ],
  openGraph: {
    title: "Peptide Vial Label Generator — Nexphoria",
    description:
      "Print standard 1\"×2.5\" cryo labels for your peptide vials. Enter compound, concentration, lot number, reconstitution date, storage temp, and researcher initials.",
    url: "https://nexphoria.com/tools/peptide-label-generator",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Vial Label Generator — Nexphoria",
    description:
      "Generate printable cryo vial labels for research peptides. Standard 1\"×2.5\" format.",
  },
};

export default function PeptideLabelGeneratorPage() {
  return <PeptideLabelGenerator />;
}
