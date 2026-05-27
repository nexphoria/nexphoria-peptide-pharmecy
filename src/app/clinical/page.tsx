import type { Metadata } from "next";
import ClinicalClient from "./client";

export const metadata: Metadata = {
  title: "Clinical — Physician-Guided Peptide Therapy | Nexphoria",
  description:
    "Physician-guided peptide therapy. Compounded. Clinical-grade. Delivered. Telehealth consultation, licensed prescriber, 503A compounding pharmacy. Programs starting at $149/month.",
};

export default function ClinicalPage() {
  return <ClinicalClient />;
}
