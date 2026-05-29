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
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#0F0F0E", minHeight: "92vh" }}
      >
        {/* Chemical pattern ghost — 2% opacity gives texture without distraction */}
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage: "url(/brand/chemical-pattern.svg)",
            backgroundSize: "560px 560px",
            backgroundRepeat: "repeat",
            opacity: 0.022,
          }}
        />

        {/* Desktop layout: asymmetric 2-col */}
        <div className="hidden md:grid h-full" style={{ gridTemplateColumns: "46% 54%", minHeight: "92vh" }}>

          {/* LEFT — editorial copy */}
          <div className="relative z-10 flex flex-col justify-between px-14 lg:px-20 py-28 lg:py-32">
            {/* Eyebrow */}
            <p
              className="text-[0.6875rem] font-medium uppercase tracking-[0.2em]"
              style={{ color: "#A4B08A" }}
            >
              Research-Grade Peptides
            </p>

            {/* Headline block */}
            <div>
              <h1
                className="leading-[0.9] tracking-tight mb-7"
                style={{
                  color: "#FAF9F6",
                  fontWeight: 500,
                  fontSize: "clamp(3.25rem, 5.5vw, 5.25rem)",
                }}
              >
                Precision<br />
                compounds,<br />
                <span style={{ color: "#A4B08A" }}>independently<br />verified.</span>
              </h1>
              <p
                className="text-[1rem] leading-relaxed mb-10 max-w-[26rem]"
                style={{ color: "#6A6A66" }}
              >
                A curated catalog of research peptides. 99%+ purity,
                third-party tested, batch-tracked, and shipped cold-chain.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="btn-primary">
                  Browse Catalog
                </Link>
                <Link
                  href="/science"
                  className="btn-outline-gold"
                  style={{ borderColor: "#3A3A38", color: "#FAF9F6" }}
                >
                  Our Standards
                </Link>
              </div>
            </div>

            {/* Stats — integrated at bottom */}
            <div
              className="grid grid-cols-3 gap-8 pt-8 border-t"
              style={{ borderColor: "#252523" }}
            >
              {[
                { value: "99%+", label: "Purity", sub: "HPLC verified" },
                { value: "cGMP", label: "Manufactured", sub: "Certified facilities" },
                { value: "COA", label: "Every Batch", sub: "Always enclosed" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-[1.4rem] font-semibold mb-0.5 tracking-tight"
                    style={{ color: "#FAF9F6" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-[0.625rem] uppercase tracking-widest font-medium"
                    style={{ color: "#A4B08A" }}
                  >
                    {s.label}
                  </div>
                  <div className="text-[0.6875rem] mt-0.5" style={{ color: "#4A4A48" }}>
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — full-bleed image collage */}
          <div className="relative overflow-visible">
            {/* Main: boxes-cascade full bleed */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/brand/boxes-cascade.jpg"
                alt="Nexphoria pharmaceutical-grade packaging"
                fill
                className="object-cover object-center"
                priority
                unoptimized
              />
              {/* Left-edge blend: dark → transparent */}
              <div
                className="absolute inset-y-0 left-0 w-32"
                style={{
                  background: "linear-gradient(to right, #0F0F0E 0%, transparent 100%)",
                }}
              />
              {/* Bottom blend */}
              <div
                className="absolute bottom-0 left-0 right-0 h-48"
                style={{
                  background: "linear-gradient(to top, #0F0F0E 0%, transparent 100%)",
                }}
              />
              {/* Subtle dark top vignette */}
              <div
                className="absolute top-0 left-0 right-0 h-24"
                style={{
                  background: "linear-gradient(to bottom, rgba(15,15,14,0.5) 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Floating: vials lineup — anchored bottom-left, partially over left column */}
            <div
              className="absolute z-20 transition-transform duration-700 hover:-translate-y-1"
              style={{
                bottom: "5rem",
                left: "-7%",
                width: "58%",
                filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.85))",
              }}
            >
              <Image
                src="/brand/hero-lineup.png"
                alt="Nexphoria peptide vials"
                width={700}
                height={525}
                className="w-full h-auto"
                unoptimized
              />
            </div>

            {/* Floating: box detail — top-right accent card */}
            {/* Outer handles position + rotation; inner handles hover lift */}
            <div
              className="absolute z-20"
              style={{ top: "2.5rem", right: "2rem", width: "9rem", transform: "rotate(1.5deg)" }}
            >
              <div
                className="rounded-xl overflow-hidden transition-transform duration-700 hover:-translate-y-1.5"
                style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.04)" }}
              >
                <Image
                  src="/brand/box-detail.jpg"
                  alt="Nexphoria box detail"
                  width={220}
                  height={260}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Floating: packaging mockup — lower-right accent */}
            <div
              className="absolute z-20"
              style={{ bottom: "9rem", right: "1.5rem", width: "7.5rem", transform: "rotate(-1deg)" }}
            >
              <div
                className="rounded-xl overflow-hidden transition-transform duration-700 hover:-translate-y-1.5"
                style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)" }}
              >
                <Image
                  src="/images/bendito_mockup-ss-cosmetic_box-01-copy.jpg"
                  alt="Nexphoria cosmetic box mockup"
                  width={200}
                  height={220}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout: stacked */}
        <div className="md:hidden flex flex-col" style={{ minHeight: "92vh" }}>
          {/* Copy */}
          <div className="flex flex-col justify-center flex-1 px-6 pt-24 pb-10">
            <p
              className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] mb-6"
              style={{ color: "#A4B08A" }}
            >
              Research-Grade Peptides
            </p>
            <h1
              className="leading-[0.92] tracking-tight mb-6"
              style={{ color: "#FAF9F6", fontWeight: 500, fontSize: "clamp(2.75rem, 11vw, 4rem)" }}
            >
              Precision<br />
              compounds,<br />
              <span style={{ color: "#A4B08A" }}>independently<br />verified.</span>
            </h1>
            <p
              className="text-[0.9375rem] leading-relaxed mb-8"
              style={{ color: "#6A6A66" }}
            >
              99%+ purity, third-party tested, batch-tracked, shipped cold-chain.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/products" className="btn-primary text-center">
                Browse Catalog
              </Link>
              <Link
                href="/science"
                className="btn-outline-gold text-center"
                style={{ borderColor: "#3A3A38", color: "#FAF9F6" }}
              >
                Our Standards
              </Link>
            </div>
          </div>

          {/* Image: boxes */}
          <div className="relative px-4 pb-4">
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/brand/boxes-cascade.jpg"
                alt="Nexphoria pharmaceutical-grade packaging"
                fill
                className="object-cover object-center"
                unoptimized
              />
              {/* Bottom fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-20"
                style={{
                  background: "linear-gradient(to top, #0F0F0E 0%, transparent 100%)",
                }}
              />
              {/* Vials overlay floating at bottom */}
              <div
                className="absolute bottom-0 left-0 z-10 w-2/3"
                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.9))" }}
              >
                <Image
                  src="/brand/hero-lineup.png"
                  alt="Nexphoria peptide vials"
                  width={500}
                  height={375}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Mobile stats */}
          <div
            className="grid grid-cols-3 gap-4 px-6 py-8 border-t mx-4 mb-6"
            style={{ borderColor: "#252523" }}
          >
            {[
              { value: "99%+", label: "Purity" },
              { value: "cGMP", label: "Manufactured" },
              { value: "COA", label: "Every Batch" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-lg font-semibold mb-0.5" style={{ color: "#FAF9F6" }}>
                  {s.value}
                </div>
                <div
                  className="text-[0.5625rem] uppercase tracking-wider font-medium"
                  style={{ color: "#A4B08A" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
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
