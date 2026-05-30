import type { Metadata } from "next";
import PeptideDoseResponsePlanner from "./PeptideDoseResponsePlanner";

export const metadata: Metadata = {
  title: "Peptide Dose-Response Planner | Nexphoria Research Tools",
  description:
    "Design multi-dose preclinical study arms with log-spaced dose groups, statistically powered group sizes, expected effect sizes from literature, total compound requirements, and IACUC protocol export.",
  keywords: [
    "peptide dose response study design",
    "dose response curve calculator",
    "preclinical study group size",
    "statistical power peptide research",
    "IACUC protocol calculator",
    "log-spaced dose groups",
    "peptide study design",
    "compound requirement calculator",
    "rodent study power calculation",
    "peptide research planner",
  ],
  openGraph: {
    title: "Dose-Response Study Planner — Nexphoria",
    description:
      "Plan multi-dose preclinical studies: log-spaced dose arms, group size power calculations, expected effect sizes, and total compound requirements.",
    url: "https://nexphoria.com/tools/peptide-dose-response-planner",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dose-Response Study Planner — Nexphoria",
    description:
      "Design multi-dose preclinical studies with log-spaced arms, power-calculated group sizes, and compound requirements.",
  },
};

export default function PeptideDoseResponsePlannerPage() {
  return <PeptideDoseResponsePlanner />;
}
