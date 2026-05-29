import type { Metadata } from "next";
import PeptideTimer from "./PeptideTimer";

export const metadata: Metadata = {
  title: "Peptide Injection Timer | Nexphoria Research Tools",
  description:
    "Track injection timing for multiple research peptides simultaneously. See time since last dose, time until next recommended injection, and dosing window status. Persists in localStorage.",
  keywords: [
    "peptide injection timer",
    "peptide dosing timer",
    "peptide injection tracking",
    "research peptide schedule",
    "peptide dose timing",
    "peptide injection reminder",
    "peptide administration tracker",
    "research compound timer",
  ],
  openGraph: {
    title: "Peptide Injection Timer — Nexphoria",
    description:
      "Track injection timing for multiple research peptides. Live countdown to next dose, dosing window status, and multi-compound tracking. Stored locally.",
    url: "https://nexphoria.com/tools/peptide-timer",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Injection Timer — Nexphoria",
    description:
      "Live injection timing tracker for multiple research peptides. Next dose countdown and dosing window status.",
  },
};

export default function PeptideTimerPage() {
  return <PeptideTimer />;
}
