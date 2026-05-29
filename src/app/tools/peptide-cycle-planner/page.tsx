import type { Metadata } from "next";
import PeptideCyclePlanner from "./PeptideCyclePlanner";

export const metadata: Metadata = {
  title: "Peptide Cycle Planner | Nexphoria Research Tools",
  description:
    "Plan multi-compound peptide research cycles with a visual calendar. Set a 3-month or 6-month cycle, assign compounds to specific weeks, mark washout periods, and print your protocol. Calendar-based cycle planning for qualified researchers.",
  keywords: [
    "peptide cycle planner",
    "research cycle calendar",
    "peptide cycle schedule",
    "peptide washout period",
    "3 month peptide cycle",
    "6 month peptide cycle",
    "research protocol calendar",
    "peptide cycle chart",
    "compound cycle planner",
    "peptide research schedule",
  ],
  openGraph: {
    title: "Peptide Cycle Planner — Nexphoria",
    description:
      "Visual calendar planner for 3-month and 6-month research cycles. Assign compounds to weeks, mark washouts, and print your protocol.",
    url: "https://nexphoria.com/tools/peptide-cycle-planner",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Cycle Planner — Nexphoria",
    description:
      "Plan 3 or 6-month research cycles with a visual calendar. Assign compounds, mark washouts, and print your protocol.",
  },
};

export default function PeptideCyclePlannerPage() {
  return <PeptideCyclePlanner />;
}
