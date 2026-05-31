import type { Metadata } from "next";
import { Suspense } from "react";
import Script from "next/script";
import ProductsClient from "./client";
import Breadcrumb from "@/components/Breadcrumb";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Peptide Catalog — Research Compounds | Nexphoria",
  description:
    "Browse Nexphoria's research compound catalog. cGMP-manufactured peptides with full Certificate of Analysis and HPLC-verified purity. BPC-157, Semaglutide, Tirzepatide, GHK-Cu, and 30+ more. Research use only.",
  alternates: {
    canonical: "https://nexphoria.com/products",
  },
  openGraph: {
    title: "Peptide Catalog — Research Compounds | Nexphoria",
    description:
      "cGMP-manufactured peptides with full Certificate of Analysis and HPLC-verified purity. BPC-157, Semaglutide, Tirzepatide, GHK-Cu, and 30+ more.",
    url: "https://nexphoria.com/products",
    siteName: "Nexphoria",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Nexphoria Peptide Catalog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Catalog — Research Compounds | Nexphoria",
    description: "cGMP-manufactured peptides with HPLC-verified purity and Certificate of Analysis.",
    images: ["/og-image.jpg"],
  },
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { cat?: string };
}) {
  // ItemList JSON-LD for the catalog listing — gives every product a position
  // in a structured collection so search engines understand site hierarchy.
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Nexphoria Research Peptide Catalog",
    description:
      "Complete catalog of cGMP-manufactured research peptides with HPLC-verified purity and Certificate of Analysis.",
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://nexphoria.com/products/${p.slug}`,
      name: p.name,
      item: {
        "@type": "Product",
        name: p.name,
        sku: p.slug,
        mpn: p.casNumber,
        category: p.category,
        description: p.tagline,
        url: `https://nexphoria.com/products/${p.slug}`,
        brand: { "@type": "Brand", name: "Nexphoria" },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: (p.dosages?.[0]?.price ?? p.price).toFixed(2),
          availability: p.comingSoon
            ? "https://schema.org/PreOrder"
            : "https://schema.org/InStock",
          url: `https://nexphoria.com/products/${p.slug}`,
        },
      },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://nexphoria.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Shop",
        item: "https://nexphoria.com/products",
      },
    ],
  };

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Peptide Catalog — Research Compounds",
    description:
      "Browse Nexphoria's research compound catalog. cGMP-manufactured peptides with full Certificate of Analysis.",
    url: "https://nexphoria.com/products",
    isPartOf: { "@type": "WebSite", url: "https://nexphoria.com" },
    mainEntity: { "@id": "#catalog-itemlist" },
  };

  return (
    <div className="min-h-screen bg-cream">
      <Script
        id="products-itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <Script
        id="products-collection-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />
      <Script
        id="products-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* Page Hero */}
      <div
        className="pt-36 pb-16 border-b"
        style={{ backgroundColor: "#F5F3F0", borderColor: "var(--border-subtle)" }}
      >
        <div className="container-nex">
          <Breadcrumb items={[{label:"Home",href:"/"},{label:"Shop"}]} variant="light" className="mb-6" />
          <span className="eyebrow mb-5 block" style={{ color: "#C9A24B" }}>Research Compounds</span>
          <h1
            className="font-bold tracking-tight mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#010101",
              lineHeight: 1.05,
            }}
          >
            The Catalog
          </h1>
          <p className="leading-relaxed" style={{ color: "#7F7F7D", maxWidth: "520px" }}>
            cGMP-manufactured research compounds. Full Certificate of Analysis and technical
            documentation for every production lot. Available as lyophilized vials ready for research.
          </p>
        </div>
      </div>

      {/* Research disclaimer */}
      <div style={{ borderBottom: "1px solid #E8E5DF" }}>
        <div className="container-nex py-3">
          <p
            className="text-center"
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#737373",
            }}
          >
            All compounds for qualified research use only — not for human consumption, diagnostic, or therapeutic use.
          </p>
        </div>
      </div>

      <Suspense fallback={null}>
        <ProductsClient initialCategory={searchParams?.cat} />
      </Suspense>
    </div>
  );
}
