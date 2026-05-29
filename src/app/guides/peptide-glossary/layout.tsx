import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peptide Research Glossary: 50+ Key Terms Defined | Nexphoria",
  description:
    "Comprehensive research peptide glossary covering 50+ terms: lyophilization, reconstitution, HPLC, COA, half-life, bioavailability, GHSR-1a, GLP-1R, receptor agonist/antagonist, and more. Alphabetically indexed with cross-references.",
  openGraph: {
    title: "Peptide Research Glossary — Nexphoria",
    description:
      "50+ research terms covering chemistry, pharmacology, quality control, reconstitution, and experimental methods. Alphabetically indexed with cross-references and resource links.",
    url: "https://nexphoria.com/guides/peptide-glossary",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Research Glossary — Nexphoria",
    description:
      "50+ definitions for peptide researchers: chemistry, pharmacology, QC methods, and reconstitution terms.",
  },
};

export default function GlossaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
