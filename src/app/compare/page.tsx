import type { Metadata } from "next";
import { Suspense } from "react";
import ComparePageClient from "./ComparePageClient";

export const metadata: Metadata = {
  title: "Compare Research Compounds — Nexphoria",
  description:
    "Side-by-side comparison of Nexphoria research peptides. Compare purity, molecular weight, storage, pricing, and category for up to 3 compounds at once.",
  openGraph: {
    title: "Compare Research Compounds — Nexphoria",
    description:
      "Side-by-side comparison table for research peptides. Purity, MW, storage, pricing, and more.",
    images: [{ url: "https://nexphoria.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ComparePage({
  searchParams,
}: {
  searchParams?: { slugs?: string };
}) {
  const slugsParam = searchParams?.slugs ?? "";
  return (
    <Suspense fallback={<div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }} />}>
      <ComparePageClient initialSlugs={slugsParam} />
    </Suspense>
  );
}
