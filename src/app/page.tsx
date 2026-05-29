import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";
import ProductVial from "@/components/ProductVial";

// Featured selection — pull real catalog entries that have photography for a
// clean, premium grid. Falls back to ProductVial within the card if needed.
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
      {/* HERO — product lineup */}
      <section
        className="relative flex items-center justify-center px-6 pt-32 pb-24 md:pt-40 md:pb-32"
        style={{ backgroundColor: "#010101" }}
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Left: copy */}
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-6"
                style={{ color: "#C9DD69" }}
              >
                Research-Grade Peptides
              </p>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-7"
                style={{
                  fontWeight: 200,
                  letterSpacing: "-0.02em",
                  lineHeight: 0.98,
                  color: "#FFFFF3",
                }}
              >
                Precision compounds,
                <br />
                independently verified.
              </h1>
              <p
                className="text-lg mb-10 max-w-md"
                style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
              >
                A curated catalog of research peptides. ≥99% purity,
                third-party tested, batch-tracked, and shipped cold-chain with a
                Certificate of Analysis.
              </p>

              <div
                className="flex flex-wrap items-center gap-6 mb-10 pb-8"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
              >
                {[
                  { value: "≥99%", label: "Purity" },
                  { value: "cGMP", label: "Certified" },
                  { value: "100%", label: "Third-Party Tested" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="text-2xl font-light mb-1"
                      style={{ color: "#C9DD69" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-xs uppercase tracking-wide"
                      style={{ color: "#7F7F7D" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="w-full sm:w-auto inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold uppercase tracking-wide text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#A4B08A", color: "#000000" }}
                >
                  Browse Compounds
                </Link>
                <Link
                  href="/protocols"
                  className="w-full sm:w-auto inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium uppercase tracking-wide text-sm transition-opacity hover:opacity-80"
                  style={{ color: "#C9DD69", border: "1px solid rgba(201,221,105,0.4)" }}
                >
                  Research Cycles
                </Link>
              </div>
            </div>

            {/* Right: hero lineup image */}
            <div className="relative">
              <Image
                src="/brand/hero-lineup.png"
                alt="Nexphoria research peptide vial lineup"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 3 steps */}
      <section className="relative bg-cream py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "#C9DD69" }} />
            <span className="text-xs uppercase tracking-widest" style={{ color: "#B8923A" }}>
              How It Works
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl mb-12 text-near-black max-w-2xl"
            style={{ fontWeight: 200 }}
          >
            Three steps from catalog to bench.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                n: "01",
                title: "Choose your compounds",
                body: "Select from a fully specified catalog — sequence, purity, storage, and reconstitution detailed on every page.",
              },
              {
                n: "02",
                title: "Select your research cycle",
                body: "Order once, or set a 3-Month or 6-Month Research Cycle billed monthly for continuity across a study window.",
              },
              {
                n: "03",
                title: "Delivered to your door",
                body: "Cold-chain shipped, batch-tracked, and accompanied by a lot-specific Certificate of Analysis.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="rounded-sm p-8 bg-white-card"
                style={{ border: "1px solid rgba(0,0,0,0.06)", borderTop: "2px solid #C9DD69" }}
              >
                <div
                  className="text-sm font-mono mb-5"
                  style={{ color: "#B8923A", letterSpacing: "0.1em" }}
                >
                  {step.n}
                </div>
                <h3 className="text-xl mb-3 text-near-black" style={{ fontWeight: 400 }}>
                  {step.title}
                </h3>
                <p className="text-sm text-stone" style={{ lineHeight: 1.7 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/protocols"
              className="inline-flex items-center gap-2 text-sm text-near-black hover:opacity-60 transition-opacity"
              style={{ letterSpacing: "0.08em" }}
            >
              Understand the research-cycle model
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="relative bg-white-card py-20 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "#C9DD69" }} />
            <span className="text-xs uppercase tracking-widest" style={{ color: "#B8923A" }}>
              Catalog
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl mb-12 text-near-black"
            style={{ fontWeight: 200 }}
          >
            Featured Compounds
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => {
              const price = priceFor(product.slug);
              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group block rounded-sm overflow-hidden transition-shadow hover:shadow-lg"
                  style={{ border: "1px solid rgba(0,0,0,0.08)", backgroundColor: "#FFFFFF" }}
                >
                  {/* Image */}
                  <div
                    className="relative w-full h-48 flex items-center justify-center p-6"
                    style={{
                      backgroundColor: hasProductPhoto(product.slug) ? "#F7F4EE" : "#1A1A18",
                    }}
                  >
                    {hasProductPhoto(product.slug) ? (
                      <img
                        src={getProductImagePath(product.slug)}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="h-full">
                        <ProductVial
                          productName={product.name}
                          dosage={product.size}
                          category={product.category}
                          accentColor={product.accentColor}
                        />
                      </div>
                    )}
                    <div
                      className="absolute top-3 right-3 px-2 py-1 rounded-sm text-[10px] font-medium"
                      style={{ backgroundColor: "rgba(201,221,105,0.15)", color: "#7a9c1a" }}
                    >
                      {product.purity}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <p
                      className="text-[10px] uppercase tracking-widest font-semibold mb-2"
                      style={{ color: "#B8923A" }}
                    >
                      {product.category}
                    </p>
                    <h3
                      className="text-xl mb-2 text-near-black group-hover:opacity-70 transition-opacity"
                      style={{ fontWeight: 400 }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="text-sm mb-5 line-clamp-2"
                      style={{ color: "#7F7F7D", lineHeight: 1.6 }}
                    >
                      {product.tagline}
                    </p>
                    <div
                      className="flex items-center justify-between pt-4"
                      style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
                    >
                      <span className="text-lg text-near-black" style={{ fontWeight: 400 }}>
                        ${price}
                      </span>
                      <span
                        className="text-xs uppercase"
                        style={{ color: "#7F7F7D", letterSpacing: "0.1em" }}
                      >
                        Add to Order →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-near-black hover:opacity-60 transition-opacity"
              style={{ letterSpacing: "0.1em" }}
            >
              View Full Catalog
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT ARRIVES — packaging */}
      <section className="relative bg-cream py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="relative">
              <Image
                src="/brand/packaging-unboxing.png"
                alt="Nexphoria pharmaceutical-grade packaging with research vials"
                width={700}
                height={700}
                className="w-full h-auto rounded-sm"
                unoptimized
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "#C9DD69" }} />
                <span className="text-xs uppercase tracking-widest" style={{ color: "#B8923A" }}>
                  What Arrives
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl mb-6 text-near-black"
                style={{ fontWeight: 200 }}
              >
                Considered down to the seal.
              </h2>
              <p className="text-base text-stone mb-8" style={{ lineHeight: 1.7 }}>
                Each order arrives in rigid, light-shielding packaging built to
                protect lyophilized material in transit. Vials are nested in
                cold-chain insulation, sealed, and labeled with batch identifiers
                that trace back to the analytical record for that lot.
              </p>

              <div className="space-y-4">
                {[
                  "Temperature-controlled shipping with insulated cold packs",
                  "Lot-specific Certificate of Analysis enclosed",
                  "Discreet, rigid, light-shielding packaging",
                  "Batch identifiers traceable to HPLC and MS records",
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: "#C9DD69" }}
                    />
                    <p className="text-sm text-stone">{line}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STANDARDS — dark statement */}
      <section className="relative py-20 md:py-24 px-6" style={{ backgroundColor: "#010101" }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#C9DD69" }}>
            Our Standards
          </p>
          <h2
            className="text-3xl md:text-4xl mb-14 max-w-4xl mx-auto"
            style={{ fontWeight: 200, color: "#EAE7E3", lineHeight: 1.25 }}
          >
            Manufactured under pharmaceutical standards. Every lot independently
            verified. No exceptions.
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
                <h3
                  className="text-sm uppercase tracking-wide mb-3"
                  style={{ color: "#C9DD69", fontWeight: 600 }}
                >
                  {col.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
                  {col.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE LAB — split image + science statement */}
      <section className="relative bg-near-black">
        <div className="grid md:grid-cols-2">
          <div className="relative h-[360px] md:h-[500px]">
            <Image
              src="/brand/lifestyle-lab.png"
              alt="Nexphoria laboratory environment"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
            />
          </div>
          <div
            className="flex flex-col justify-center px-8 md:px-16 py-16"
            style={{ backgroundColor: "#0A0A0A" }}
          >
            <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#C9DD69" }}>
              Science
            </p>
            <h3
              className="text-2xl md:text-3xl mb-6"
              style={{ fontWeight: 200, color: "#EAE7E3", lineHeight: 1.25 }}
            >
              Every compound begins and ends with data.
            </h3>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#A0A0A0" }}>
              From raw material qualification to final COA release, our process is
              designed to eliminate variability. No shortcuts. No exceptions.
            </p>
            <Link
              href="/science"
              className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
              style={{ color: "#C9DD69", letterSpacing: "0.1em" }}
            >
              View Testing Standards <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative w-full">
        <div className="relative h-[45vh] md:h-[60vh]">
          <Image
            src="/brand/poster-triptych.jpg"
            alt="Nexphoria research compound series"
            fill
            className="object-cover object-top"
            sizes="100vw"
            quality={90}
          />
          <div
            className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-6"
            style={{ background: "linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.78) 100%)" }}
          >
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#C9DD69" }}>
              Research-Grade Compounds
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold uppercase tracking-wide text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#A4B08A", color: "#000000" }}
            >
              Browse Full Catalog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
