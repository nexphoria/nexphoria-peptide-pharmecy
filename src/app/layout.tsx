import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import CartDrawer from "@/components/cart/CartDrawer";
import AgeVerificationModal from "@/components/AgeVerificationModal";
import LiveChatWidget from "@/components/LiveChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://nexphoria.com"
  ),
  title: {
    default: "Nexphoria — Research-Grade Peptide Compounds",
    template: "%s | Nexphoria",
  },
  description:
    "Pharmaceutical-grade peptide compounds manufactured under cGMP standards. Third-party tested for identity, purity, and potency. For qualified research use only.",
  keywords: [
    "research peptides",
    "cGMP peptides",
    "HPLC tested compounds",
    "research chemicals",
    "peptide synthesis",
    "pharmaceutical grade",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexphoria.com",
    siteName: "Nexphoria",
    title: "Nexphoria — Research-Grade Peptide Compounds",
    description:
      "Pharmaceutical-grade peptide compounds manufactured under cGMP standards. Third-party tested for identity, purity, and potency.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexphoria — Research-Grade Peptide Compounds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexphoria — Research-Grade Peptide Compounds",
    description:
      "Pharmaceutical-grade peptide compounds manufactured under cGMP standards.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://nexphoria.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexphoria",
  url: "https://nexphoria.com",
  logo: "https://nexphoria.com/brand/logo-black.svg",
  description:
    "Research-grade peptide compounds manufactured under cGMP standards for qualified researchers and licensed professionals.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "research@nexphoria.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full" style={{ backgroundColor: "#FFFFF3" }}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
        <AgeVerificationModal />
        <LiveChatWidget />
      </body>
    </html>
  );
}
