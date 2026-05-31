import type { Metadata } from "next";
import BuildYourStackClient from "./client";

export const metadata: Metadata = {
  title: "Build Your Research Stack | Nexphoria",
  description:
    "Customize a multi-compound peptide research protocol. Select compounds, dosages, and cycle lengths to build a tailored research stack with full COA documentation.",
  alternates: {
    canonical: "https://nexphoria.com/build-your-stack",
  },
  openGraph: {
    title: "Build Your Research Stack | Nexphoria",
    description:
      "Customize a multi-compound peptide research protocol. Select compounds, dosages, and cycle lengths.",
    url: "https://nexphoria.com/build-your-stack",
    siteName: "Nexphoria",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Build Your Peptide Research Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Your Research Stack | Nexphoria",
    description: "Customize a multi-compound peptide research protocol.",
    images: ["/og-image.jpg"],
  },
};

export default function BuildYourStackPage() {
  return <BuildYourStackClient />;
}
