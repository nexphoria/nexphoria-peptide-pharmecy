import type { Metadata } from "next";
import ScienceClient from "./client";

export const metadata: Metadata = {
  title: "The Science of Peptides",
  description:
    "Educational overview of peptide biochemistry, analytical methods, and quality standards. HPLC, mass spectrometry, NMR, and cGMP manufacturing explained.",
};

export default function SciencePage() {
  return <ScienceClient />;
}
