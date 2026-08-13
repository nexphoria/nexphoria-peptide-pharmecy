import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Glow Stack — GHK-Cu + PT-141 Radiance Protocol | Nexphoria",
  description:
    "GHK-Cu + PT-141 — the physician-guided peptide protocol for luminous skin, hair restoration, collagen synthesis, and deep cellular radiance. $219/mo.",
  alternates: { canonical: "https://nexphoria.com/stacks/glow" },
  openGraph: {
    title: "The Glow Stack — GHK-Cu + PT-141 | Nexphoria",
    description: "Skin, hair, collagen, radiance — from within. The Glow Stack protocol.",
    url: "https://nexphoria.com/stacks/glow",
    siteName: "Nexphoria",
    type: "website",
    images: [{ url: "https://nexphoria.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
