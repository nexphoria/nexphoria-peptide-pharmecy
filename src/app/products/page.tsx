import type { Metadata } from "next";
import ProductsClient from "./client";

export const metadata: Metadata = {
  title: "Peptide Catalog — Research Compounds",
  description:
    "Browse Nexphoria's research compound catalog. cGMP-manufactured peptides with full Certificate of Analysis. HPLC purity ≥99%. Research use only.",
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { cat?: string };
}) {
  return (
    <div className="min-h-screen bg-dark">
      {/* Page Hero */}
      <div
        className="pt-36 pb-16 border-b"
        style={{ backgroundColor: "var(--dark-bg)", borderColor: "var(--dark-border)" }}
      >
        <div className="container-nex">
          <span className="eyebrow mb-5 block">Research Compounds</span>
          <h1
            className="font-bold tracking-tight mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#FDFCF8",
              lineHeight: 1.05,
            }}
          >
            The Catalog
          </h1>
          <p className="max-w-xl leading-relaxed text-secondary">
            cGMP-manufactured research compounds. Full Certificate of Analysis and technical
            documentation for every production lot. Available as lyophilized vials ready for research.
          </p>
        </div>
      </div>

      {/* Research disclaimer */}
      <div className="border-b" style={{ backgroundColor: "#1A1A18", borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="container-nex py-3">
          <p className="text-xs font-mono text-center" style={{ color: "rgba(138,128,117,0.7)" }}>
            All compounds for qualified research use only. Not for human consumption, diagnostic, or therapeutic use.
          </p>
        </div>
      </div>

      <ProductsClient initialCategory={searchParams?.cat} />
    </div>
  );
}
