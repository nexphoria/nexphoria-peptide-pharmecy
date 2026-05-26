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
    <div style={{ backgroundColor: "var(--ceramic)" }} className="min-h-screen">
      {/* Page Hero */}
      <div
        className="relative pt-36 pb-20 border-b overflow-hidden"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        {/* DNA pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/images/dna-pattern.png)",
            backgroundSize: "500px auto",
            backgroundRepeat: "repeat",
            opacity: 0.03,
          }}
        />
        <div className="container-nex relative">
          <span className="eyebrow mb-5 block">Research Compounds</span>
          <h1
            className="font-bold tracking-tight mb-4"
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "var(--charcoal)",
              lineHeight: 1.05,
            }}
          >
            Premium Peptide{" "}
            <em className="italic" style={{ color: "var(--gold)" }}>Products</em>
          </h1>
          <p className="max-w-xl leading-relaxed" style={{ color: "var(--grey-olive)" }}>
            cGMP-manufactured research compounds. Full Certificate of Analysis and technical
            documentation for every production lot. Available as lyophilized vials or custom-packaged
            for qualified distributors.
          </p>
        </div>
      </div>

      {/* Product Format Cards */}
      <div
        className="border-b py-10"
        style={{ backgroundColor: "var(--warm-stone)", borderColor: "var(--border-subtle)" }}
      >
        <div className="container-nex">
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                image: "/images/5-pills-mockup-copy.jpg",
                title: "Capsules & Vials",
                desc: "Lyophilized powder in pharmaceutical-grade sealed vials. Multiple delivery formats for every research need.",
              },
              {
                image: "/images/bendito_mockup-n-box-copy.jpg",
                title: "Custom Packaging",
                desc: "White-label solutions with your brand identity. Ready for qualified distributors and institutional partners.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex items-stretch border overflow-hidden group cursor-pointer transition-all duration-300 hover:border-[var(--gold)]"
                style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--ceramic)" }}
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
                  <div className="w-4 h-px mb-3" style={{ backgroundColor: "var(--gold)" }} />
                  <h3
                    className="text-base font-bold mb-1.5"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)", color: "var(--charcoal)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--grey-olive)" }}>
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
