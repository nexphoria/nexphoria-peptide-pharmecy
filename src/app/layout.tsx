import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import CartDrawer from "@/components/cart/CartDrawer";
import AgeVerificationModal from "@/components/AgeVerificationModal";
import LiveChatWidget from "@/components/LiveChatWidget";
import SearchModal from "@/components/SearchModal";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nexphoria.com/#website",
  name: "Nexphoria",
  url: "https://nexphoria.com",
  description:
    "Research-grade peptide compounds manufactured under cGMP standards for qualified researchers.",
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://nexphoria.com/products?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://nexphoria.com/#navigation",
  name: "Site Navigation",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "Shop",
      description: "Browse all research-grade peptide compounds",
      url: "https://nexphoria.com/products",
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "Protocol Finder Quiz",
      description: "Find the right research protocol for your goals",
      url: "https://nexphoria.com/quiz",
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "Research Journal",
      description: "Peer-reviewed peptide research articles and compound profiles",
      url: "https://nexphoria.com/blog",
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "Research Tools",
      description: "Peptide calculators, planners, and reference tools",
      url: "https://nexphoria.com/tools",
    },
    {
      "@type": "SiteNavigationElement",
      position: 5,
      name: "Research Hub",
      description: "All Nexphoria resources in one place",
      url: "https://nexphoria.com/resources",
    },
    {
      "@type": "SiteNavigationElement",
      position: 6,
      name: "Compounds Index",
      description: "Reference index of all research compounds with mechanism summaries",
      url: "https://nexphoria.com/compounds",
    },
    {
      "@type": "SiteNavigationElement",
      position: 7,
      name: "Build Your Stack",
      description: "Customize a multi-compound research protocol",
      url: "https://nexphoria.com/build-your-stack",
    },
    {
      "@type": "SiteNavigationElement",
      position: 8,
      name: "FAQ",
      description: "Frequently asked questions about research peptides",
      url: "https://nexphoria.com/faq",
    },
    {
      "@type": "SiteNavigationElement",
      position: 9,
      name: "About",
      description: "About Nexphoria research peptide company",
      url: "https://nexphoria.com/about",
    },
  ],
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
    <html lang="en" className={`h-full antialiased ${inter.variable} ${cormorant.variable}`}>
      <head>
        {/* Next.js font/google self-hosts fonts, so no external googleapis preconnect needed */}
        <link rel="preconnect" href="https://nexphoria-checkout.chiya-b60.workers.dev" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://nexphoria-checkout.chiya-b60.workers.dev" />
        {/* Preload LCP images for fast discovery - desktop uses packaging-unboxing.webp, mobile too */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preload" as="image" href="/brand/packaging-unboxing.webp" type="image/webp"
          media="(min-width: 769px)"
        />
        <link rel="preload" as="image" href="/brand/packaging-unboxing-mobile.webp" type="image/webp"
          media="(max-width: 768px)"
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
        />
      </head>
      <body className="min-h-full" style={{ backgroundColor: "#FAF8F5" }}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
        <AgeVerificationModal />
        <LiveChatWidget />
        <SearchModal />
        <BackToTop />
      </body>
    </html>
  );
}
