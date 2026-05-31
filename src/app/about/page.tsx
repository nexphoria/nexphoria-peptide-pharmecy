import type { Metadata } from "next";
import AboutClient from "./client";

export const metadata: Metadata = {
  title: "About Nexphoria — Research-Grade Peptide Compounds",
  description:
    "Who we are, what we stand for, and why we exist. Premium research peptides, independently verified, for qualified researchers.",
  openGraph: {
    title: "About Nexphoria — Research-Grade Peptide Compounds",
    description:
      "Who we are, what we stand for, and why we exist. Premium research peptides, independently verified, for qualified researchers.",
    url: "https://nexphoria.com/about",
    siteName: "Nexphoria",
    images: [{ url: "https://nexphoria.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
