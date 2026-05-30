import type { Metadata } from "next";
import PeptideResearchPlanner from "./PeptideResearchPlanner";

export const metadata: Metadata = {
  title: "Peptide Research Planner | Nexphoria Research Tools",
  description:
    "The all-in-one peptide research planning wizard. Select your goal and compounds, set a 3 or 6-month cycle, assign doses and frequency, then generate a full printable protocol with reconstitution notes, weekly schedule, and biomarker tracking.",
  keywords: [
    "peptide research planner",
    "peptide protocol generator",
    "research cycle planner",
    "peptide dosing schedule",
    "peptide study design wizard",
    "peptide protocol template",
    "peptide stack planner",
    "research compound planner",
    "peptide cycle generator",
    "peptide research protocol",
  ],
  openGraph: {
    title: "Peptide Research Planner — Nexphoria",
    description:
      "4-step wizard: choose goal + compounds → set cycle dates → assign doses + frequency → generate printable protocol.",
    url: "https://nexphoria.com/tools/peptide-research-planner",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Research Planner — Nexphoria",
    description:
      "Generate a complete peptide research protocol in 4 steps. Doses, cycle, schedule, reconstitution notes — all in one printable document.",
  },
};

export default function PeptideResearchPlannerPage() {
  return <PeptideResearchPlanner />;
}
