import type { Metadata } from "next";
import UnitConverter from "./UnitConverter";

export const metadata: Metadata = {
  title: "Research Unit Converter | Nexphoria Tools",
  description:
    "Free research unit converter for peptide scientists: mcg ↔ mg ↔ IU conversions, BAC water mL ↔ insulin syringe units, nmol/L ↔ ng/mL for common peptides. No login required.",
  openGraph: {
    title: "Research Unit Converter — Nexphoria",
    description:
      "Convert mcg/mg/IU, BAC water mL to syringe units, and peptide concentration units. Free research tool.",
    url: "https://nexphoria.com/tools/unit-converter",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Unit Converter — Nexphoria",
    description:
      "mcg ↔ mg ↔ IU, mL ↔ syringe units, nmol/L ↔ ng/mL conversions for peptide researchers.",
  },
};

export default function UnitConverterPage() {
  return <UnitConverter />;
}
