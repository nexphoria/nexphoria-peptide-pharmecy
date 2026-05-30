import type { Metadata } from "next";
import { Suspense } from "react";
import ProductsClient from "./client";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Peptide Catalog — Research Compounds",
  description:
    "Browse Nexphoria's research compound catalog. cGMP-manufactured peptides with full Certificate of Analysis and HPLC-verified purity. Research use only.",
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { cat?: string };
}) {
  return (
    <div className="min-h-screen bg-cream">
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
              color: "#AAAAAA",
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
