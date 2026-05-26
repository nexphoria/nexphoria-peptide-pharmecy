import type { Metadata } from "next";
import ScienceClient from "./client";

export const metadata: Metadata = {
  title: "Testing & Analytical Methods",
  description:
    "Educational overview of Nexphoria's analytical standards: HPLC purity testing, ESI-MS identity confirmation, cGMP manufacturing, and COA documentation.",
};

export default function SciencePage() {
  return <ScienceClient />;
}
