import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Clarity Stack — Semax + Selank Cognitive Protocol | Nexphoria",
  description:
    "Semax + Selank — the physician-guided nootropic peptide stack for cognitive enhancement, laser focus, and anxiety reduction. $249/mo.",
  alternates: { canonical: "https://nexphoria.com/stacks/clarity" },
  openGraph: {
    title: "The Clarity Stack — Semax + Selank | Nexphoria",
    description: "Sharper cognition, deeper focus, calmer mind. The Clarity Stack protocol.",
    url: "https://nexphoria.com/stacks/clarity",
    siteName: "Nexphoria",
    type: "website",
    images: [{ url: "https://nexphoria.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
