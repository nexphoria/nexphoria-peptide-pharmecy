import type { Metadata } from "next";
import ProtocolTemplateGenerator from "./ProtocolTemplateGenerator";

export const metadata: Metadata = {
  title: "Protocol Template Generator | Nexphoria Research Tools",
  description:
    "Generate a printable research protocol document for your peptide study. Select compounds, doses, routes, and cycle length — get a clean, printable protocol template with reconstitution notes, storage reminders, and biomarker tracking fields.",
  keywords: [
    "peptide protocol template",
    "research protocol generator",
    "peptide study design",
    "protocol template printable",
    "peptide dosing protocol document",
    "research cycle protocol",
    "peptide reconstitution protocol",
  ],
  openGraph: {
    title: "Protocol Template Generator — Nexphoria",
    description:
      "Generate a printable research protocol document for your peptide study. Select compounds, doses, and cycle length.",
    url: "https://nexphoria.com/tools/protocol-template-generator",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protocol Template Generator — Nexphoria",
    description:
      "Build a printable protocol document for peptide research studies.",
  },
};

export default function ProtocolTemplateGeneratorPage() {
  return <ProtocolTemplateGenerator />;
}
