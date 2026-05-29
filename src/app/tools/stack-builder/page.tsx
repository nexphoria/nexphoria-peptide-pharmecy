import type { Metadata } from "next";
import StackBuilder from "./StackBuilder";

export const metadata: Metadata = {
  title: "Research Stack Builder | Nexphoria Tools",
  description:
    "Build a synergistic peptide research stack by goal. Select recovery, GH axis, metabolic, longevity, or cognitive objectives and get compound recommendations with rationale, weekly schedules, and estimated monthly costs.",
  keywords: [
    "peptide stack builder",
    "research peptide stack",
    "peptide synergy",
    "BPC-157 TB-500 stack",
    "CJC-1295 ipamorelin stack",
    "peptide combination guide",
    "GH peptide stack",
    "longevity peptide stack",
    "nootropic peptide stack",
    "metabolic peptide stack",
  ],
  openGraph: {
    title: "Research Stack Builder — Nexphoria",
    description:
      "Select a research goal and get a synergistic peptide stack with rationale, weekly schedule, and monthly cost estimate.",
    url: "https://nexphoria.com/tools/stack-builder",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Stack Builder — Nexphoria",
    description:
      "Build a synergistic research stack by goal — recovery, GH axis, metabolic, longevity, or cognitive.",
  },
};

export default function StackBuilderPage() {
  return <StackBuilder />;
}
