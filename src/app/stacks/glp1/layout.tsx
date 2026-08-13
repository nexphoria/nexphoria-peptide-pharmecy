import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The GLP-1 Protocol — Semaglutide & Tirzepatide Body Composition | Nexphoria",
  description:
    "Physician-guided Semaglutide and Tirzepatide protocol for body composition, appetite control, and metabolic health. The most clinically validated weight intervention available. $399/mo.",
  alternates: { canonical: "https://nexphoria.com/stacks/glp1" },
  openGraph: {
    title: "The GLP-1 Protocol — Semaglutide & Tirzepatide | Nexphoria",
    description: "Body composition, appetite, metabolism. The most clinically validated weight protocol available.",
    url: "https://nexphoria.com/stacks/glp1",
    siteName: "Nexphoria",
    type: "website",
    images: [{ url: "https://nexphoria.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
