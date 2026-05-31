import type { Metadata } from "next";
import FaqClient from "./client";

export const metadata: Metadata = {
  title: "FAQ — Peptide Research Questions Answered | Nexphoria",
  description:
    "Answers to the most common questions about Nexphoria research peptides: purity testing, COA documentation, shipping, cold-chain handling, payment, and researcher verification.",
  alternates: {
    canonical: "https://nexphoria.com/faq",
  },
  openGraph: {
    title: "FAQ — Peptide Research Questions Answered | Nexphoria",
    description:
      "Common questions about research peptides, purity testing, COA documentation, shipping, and researcher verification.",
    url: "https://nexphoria.com/faq",
    siteName: "Nexphoria",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexphoria FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — Peptide Research Questions Answered | Nexphoria",
    description:
      "Purity testing, COA documentation, shipping, and researcher verification questions answered.",
    images: ["/og-image.jpg"],
  },
};

export default function FaqPage() {
  return <FaqClient />;
}
