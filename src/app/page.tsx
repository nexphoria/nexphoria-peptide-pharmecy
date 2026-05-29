import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";

const FEATURED_SLUGS = [
  "bpc-157",
  "tirzepatide",
  "ghk-cu",
  "ipamorelin",
  "retatrutide",
  "nad-plus",
];

function priceFor(slug: string): number {
  const p = products.find((x) => x.slug === slug);
  if (!p) return 0;
  return p.dosages && p.dosages.length > 0
    ? Math.min(...p.dosages.map((d) => d.price))
    : p.price;
}

export default function HomePage() {
  const featuredProducts = FEATURED_SLUGS.map((slug) =>
    products.find((p) => p.slug === slug)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      {/* HERO */}
      <section className="relative px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: copy */}
            <div>
              <p className="eyebrow mb-5">
                Research-Grade Peptides
              </p>
              <h1
                className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] mb-6 leading-[1.05] tracking-tight"
                style={{ fontWeight: 500 }}
              >
                Precision compounds,
                <br />
                independently verified.
              </h1>
              <p
                className="text-base md:text-lg mb-10 max-w-md leading-relaxed"
                style={{ color: "#555" }}
              >
                A curated catalog of research peptides. 99%+ purity,
                third-party tested, batch-tracked, and shipped cold-chain.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="btn-primary">
                  Browse Catalog
                </Link>
                <Link href="/science" className="btn-outline">
                  Our Standards
                </Link>
              </div>

              {/* Trust line */}
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-[#ECEAE4]">
                {[
                  { value: "99%+", label: "Purity" },
                  { value: "cGMP", label: "Manufactured" },
                  { value: "3rd Party", label: "Tested" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-lg font-semibold mb-0.5">{stat.value}</div>
                    <div className="text-xs text-[#888] uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: hero lineup image */}
            <div className="relative flex items-center">
              <Image
                src="/brand/hero-lineup.png"
                alt="Nexphoria peptide vial lineup"
                width={900}
                height={675}
                className="w-full h-auto"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <section className="py-10 px-6 border-t border-b border-[#ECEAE4]" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs uppercase tracking-widest text-[#999] mb-8 font-medium">
            Researchers Trust Nexphoria
          </p>
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {[
              {
                stat: "99.2%",
                label: "Average Purity",
                sub: "Across all lots, HPLC-verified",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <circle cx="14" cy="14" r="13" stroke="#A4B08A" strokeWidth="1.5"/>
                    <path d="M8 14.5l4 4 8-8" stroke="#A4B08A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                stat: "48-Hour",
                label: "Cold-Chain Shipping",
                sub: "Temperature-controlled transit",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <rect x="1.75" y="7" width="24.5" height="15" rx="2" stroke="#A4B08A" strokeWidth="1.5"/>
                    <path d="M7 7V5a2 2 0 012-2h10a2 2 0 012 2v2" stroke="#A4B08A" strokeWidth="1.5"/>
                    <path d="M9 14h10M14 11v6" stroke="#A4B08A" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                stat: "COA",
                label: "With Every Order",
                sub: "Batch-specific, always enclosed",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <rect x="5" y="2" width="18" height="24" rx="2" stroke="#A4B08A" strokeWidth="1.5"/>
                    <path d="M9 9h10M9 13h10M9 17h6" stroke="#A4B08A" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center px-4 py-6 md:py-8"
              >
                <div className="mb-4">{item.icon}</div>
                <div className="text-2xl md:text-3xl font-semibold tracking-tight mb-1">
                  {item.stat}
                </div>
                <div className="text-sm font-medium mb-1">{item.label}</div>
                <div className="text-xs text-[#888] leading-relaxed hidden md:block">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28 px-6" style={{ backgroundColor: "#F7F5F0" }}>
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-4">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-medium mb-14 tracking-tight">
            From catalog to bench in three steps.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                n: "01",
                title: "Choose compounds",
                body: "Browse a fully specified catalog. Every product page details sequence, purity, storage, and reconstitution.",
              },
              {
                n: "02",
                title: "Select your cycle",
                body: "Order once, or subscribe to a 3- or 6-month research cycle billed monthly for continuity.",
              },
              {
                n: "03",
                title: "Delivered cold-chain",
                body: "Shipped temperature-controlled with batch-specific Certificate of Analysis enclosed.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="bg-white rounded-lg p-8 card-shadow"
              >
                <div className="text-xs font-mono mb-5 text-[#A4B08A] font-semibold">
                  {step.n}
                </div>
                <h3 className="text-lg font-medium mb-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#555]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="eyebrow mb-4">Catalog</p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                Featured Compounds
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity"
            >
              View All <span aria-hidden>&#8594;</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => {
              const price = priceFor(product.slug);
              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group block"
                >
                  <div className="bg-white rounded-lg overflow-hidden card-shadow transition-all duration-200 hover:-translate-y-0.5">
                    {/* Image container */}
                    <div className="w-full h-56 overflow-hidden bg-[#f5f5f2]">
                      {hasProductPhoto(product.slug) ? (
                        <img
                          src={getProductImagePath(product.slug)}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "#F0EDE7" }}>
                          <span className="text-sm font-semibold text-[#A4B08A] text-center px-4">
                            {product.name}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Body */}
                    <div className="p-5">
                      <p className="text-[11px] uppercase tracking-wider text-[#888] mb-1.5">
                        {product.category}
                      </p>
                      <h3 className="text-base font-medium mb-1 group-hover:opacity-70 transition-opacity">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#888] mb-3">{product.size}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-[#ECEAE4]">
                        <span className="text-base font-semibold">${price}</span>
                        <span className="text-xs text-[#A4B08A] font-medium uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                          View
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link href="/products" className="btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* PACKAGING */}
      <section className="py-20 md:py-28 px-6" style={{ backgroundColor: "#F7F5F0" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/brand/packaging-unboxing.png"
                  alt="Nexphoria pharmaceutical-grade packaging"
                  width={700}
                  height={700}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>

            <div>
              <p className="eyebrow mb-4">What Arrives</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">
                Considered down to the seal.
              </h2>
              <p className="text-base leading-relaxed text-[#555] mb-8">
                Each order arrives in rigid, light-shielding packaging built to
                protect lyophilized material in transit. Vials are nested in
                cold-chain insulation, sealed, and labeled with batch identifiers.
              </p>

              <div className="space-y-3">
                {[
                  "Temperature-controlled cold-chain shipping",
                  "Lot-specific Certificate of Analysis enclosed",
                  "Discreet, rigid, light-shielding packaging",
                  "Batch IDs traceable to HPLC records",
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-[#A4B08A]" />
                    <p className="text-sm text-[#555]">{line}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="py-20 md:py-28 px-6" style={{ backgroundColor: "#1A1A18" }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="eyebrow mb-5" style={{ color: "#A4B08A" }}>Our Standards</p>
          <h2
            className="text-3xl md:text-4xl mb-14 max-w-3xl mx-auto font-medium tracking-tight"
            style={{ color: "#F5F5F0", lineHeight: 1.2 }}
          >
            Manufactured under pharmaceutical standards. Every lot independently verified.
          </h2>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12 text-left">
            {[
              {
                title: "cGMP Manufacturing",
                body: "Synthesized in certified facilities under current Good Manufacturing Practice.",
              },
              {
                title: "Independent Verification",
                body: "Third-party HPLC and mass spectrometry on every production lot.",
              },
              {
                title: "Research Use Only",
                body: "Supplied for qualified research applications. Not for human consumption.",
              },
            ].map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: "#A4B08A" }}>
                  {col.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#999" }}>
                  {col.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 md:py-28 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 tracking-tight">
            Ready to begin?
          </h2>
          <p className="text-base text-[#555] mb-8 leading-relaxed">
            Browse our full catalog of research-grade peptide compounds.
            Every product ships with a Certificate of Analysis.
          </p>
          <Link href="/products" className="btn-primary">
            Browse Full Catalog
          </Link>
        </div>
      </section>
    </>
  );
}
