import type { Metadata } from "next";
import AboutClient from "./client";

export const metadata: Metadata = {
  title: "About Nexphoria — Research-Grade Peptide Compounds",
  description:
    "Who we are, what we stand for, and why we exist. Nexphoria manufactures cGMP-compliant research peptides with full third-party analytical documentation for qualified researchers.",
  alternates: {
    canonical: "https://nexphoria.com/about",
  },
  openGraph: {
    title: "About Nexphoria — Research-Grade Peptide Compounds",
    description:
      "Nexphoria manufactures cGMP-compliant research peptides with full third-party analytical documentation. Precision. Purity. Purpose.",
    url: "https://nexphoria.com/about",
    siteName: "Nexphoria",
    type: "website",
    images: [{ url: "https://nexphoria.com/og-image.jpg", width: 1200, height: 630, alt: "About Nexphoria" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nexphoria — Research-Grade Peptide Compounds",
    description: "cGMP-compliant research peptides with full third-party analytical documentation.",
    images: ["https://nexphoria.com/og-image.jpg"],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://nexphoria.com/about",
  name: "About Nexphoria",
  url: "https://nexphoria.com/about",
  description: "About Nexphoria Research, LLC — manufacturer of research-grade peptide compounds under cGMP standards.",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://nexphoria.com/#organization",
    name: "Nexphoria Research, LLC",
    url: "https://nexphoria.com",
    logo: {
      "@type": "ImageObject",
      url: "https://nexphoria.com/brand/logo-black.svg",
    },
    description:
      "Research-grade peptide compounds manufactured under cGMP standards for qualified researchers and licensed professionals.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "30 N Gould St Ste R",
      addressLocality: "Sheridan",
      addressRegion: "WY",
      postalCode: "82801",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "research@nexphoria.com",
    },
    knowsAbout: [
      "Peptide synthesis",
      "cGMP manufacturing",
      "HPLC analytical testing",
      "Research chemicals",
      "BPC-157",
      "GHK-Cu",
      "Semaglutide",
      "Tirzepatide",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "cGMP Manufacturing Certification",
        description: "Current Good Manufacturing Practice compliance",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "ISO-Certified Facility",
        description: "ISO-compliant facility infrastructure and quality systems",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutClient />
    </>
  );
}
