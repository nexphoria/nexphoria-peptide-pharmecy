import type { Metadata } from "next";
import DosingFrequencyPlanner from "./DosingFrequencyPlanner";

export const metadata: Metadata = {
  title: "Dosing Frequency Planner | Nexphoria Research Tools",
  description:
    "Plan your weekly injection schedule across multiple research compounds. Auto-distribute dosing days, avoid stacking conflicts, and export protocol summaries. Interactive weekly calendar for peptide research.",
  keywords: [
    "dosing frequency planner",
    "peptide dosing schedule",
    "injection schedule planner",
    "peptide stacking calendar",
    "weekly dosing plan",
    "research protocol planner",
    "peptide injection calendar",
  ],
  openGraph: {
    title: "Dosing Frequency Planner — Nexphoria",
    description:
      "Interactive weekly schedule planner for research peptides. Auto-distribute, stacking warnings, exportable protocol summary.",
    url: "https://nexphoria.com/tools/dosing-frequency-planner",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dosing Frequency Planner — Nexphoria",
    description:
      "Plan weekly injection schedules for multiple compounds with auto-distribution and stacking warnings.",
  },
};

export default function DosingFrequencyPlannerPage() {
  return <DosingFrequencyPlanner />;
}
