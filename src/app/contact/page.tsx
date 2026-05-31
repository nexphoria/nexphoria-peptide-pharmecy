import type { Metadata } from "next";
import ContactClient from "./client";

export const metadata: Metadata = {
  title: "Contact Nexphoria — Research Inquiries & Custom Synthesis",
  description:
    "Contact Nexphoria for compound inquiries, custom synthesis requests, bulk orders, or documentation questions. Response within 1–2 business days.",
  alternates: {
    canonical: "https://nexphoria.com/contact",
  },
  openGraph: {
    title: "Contact Nexphoria — Research Inquiries & Custom Synthesis",
    description:
      "Contact Nexphoria for compound inquiries, custom synthesis requests, bulk orders, or documentation questions. Response within 1–2 business days.",
    url: "https://nexphoria.com/contact",
    siteName: "Nexphoria",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Nexphoria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Nexphoria — Research Inquiries",
    description:
      "Compound inquiries, custom synthesis, bulk orders, and documentation questions.",
    images: ["/og-image.jpg"],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://nexphoria.com/contact",
  name: "Contact Nexphoria",
  url: "https://nexphoria.com/contact",
  description: "Contact page for Nexphoria Research, LLC",
  mainEntity: {
    "@type": "Organization",
    name: "Nexphoria Research, LLC",
    url: "https://nexphoria.com",
    logo: "https://nexphoria.com/brand/logo-black.svg",
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
      contactType: "customer support",
      email: "research@nexphoria.com",
      availableLanguage: "English",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactClient />
    </>
  );
}
