import type { Metadata } from "next";
import Image from "next/image";
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
        className="relative pt-36 pb-20 border-b overflow-hidden"
        style={{ borderColor: "var(--dark-border)" }}
      >
        {/* Editorial hero background */}
        <Image
          src="/brand/editorial-hero.jpg"
          alt="Research Compounds — Nexphoria"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(10,10,8,0.85) 0%, rgba(26,26,24,0.75) 50%, rgba(10,10,8,0.85) 100%)"
        }} />

        <div className="container-nex relative z-10">
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

      {/* Product Format Cards */}
      <div
        className="border-b py-10"
        style={{ backgroundColor: "var(--dark-panel)", borderColor: "var(--dark-border)" }}
      >
        <div className="container-nex">
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                image: "/products/vial-hero-1.png",
                title: "Capsules & Vials",
                desc: "Lyophilized powder in pharmaceutical-grade sealed vials. Multiple delivery formats for every research need.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex items-stretch border overflow-hidden group cursor-pointer transition-all duration-300 hover:border-acid-green"
                style={{
                  borderColor: "var(--dark-border)",
                  backgroundColor: "var(--dark-card)"
                }}
              >
                {/* Image area */}
                <div className="w-36 flex-shrink-0 relative overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="144px"
                  />
                </div>
                {/* Text */}
                <div className="p-5 flex flex-col justify-center">
                  <div className="w-4 h-px mb-3" style={{ backgroundColor: "var(--acid-green)" }} />
                  <h3
                    className="text-base font-bold mb-1.5 text-primary"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
