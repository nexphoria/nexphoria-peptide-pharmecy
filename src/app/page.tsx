import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { articles } from "@/lib/blog";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";
import HomepageContinueResearch from "@/components/HomepageContinueResearch";
import HeroParallaxImage from "@/components/HeroParallaxImage";
import SectionReveal from "@/components/SectionReveal";

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

const RESEARCH_CATEGORIES = [
  {
    label: "Recovery & Healing",
    slug: "Recovery & Healing",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4v20M4 14h20" stroke="#C4A265" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="12" stroke="#C4A265" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    label: "Weight Management",
    slug: "Weight Management",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M6 22l4-8 4 4 4-12 4 6" stroke="#C4A265" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Cognitive",
    slug: "Cognitive",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <ellipse cx="14" cy="13" rx="9" ry="8" stroke="#C4A265" strokeWidth="1.5"/>
        <path d="M9 10c0-2.761 2.239-5 5-5" stroke="#C4A265" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 18c-.667 1.333-1 2.5-.667 3.5" stroke="#C4A265" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 18c.667 1.333 1 2.5.667 3.5" stroke="#C4A265" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Immune Support",
    slug: "Immune Support",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4l7 4v6c0 5-3.5 9-7 10C10.5 23 7 19 7 14V8l7-4z" stroke="#C4A265" strokeWidth="1.5"/>
        <path d="M10.5 14l2.5 2.5 5-5" stroke="#C4A265" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Longevity",
    slug: "Longevity",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="#C4A265" strokeWidth="1.5"/>
        <path d="M14 8v6l4 2" stroke="#C4A265" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Growth Hormone",
    slug: "Growth Hormone",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M7 22V12l7-8 7 8v10" stroke="#C4A265" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="11" y="16" width="6" height="6" rx="0.5" stroke="#C4A265" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: "Anti-Aging",
    slug: "Anti-Aging",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M7 16c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#C4A265" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11 20c0-1.657 1.343-3 3-3s3 1.343 3 3" stroke="#C4A265" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 5v2" stroke="#C4A265" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 9l1.5 1.5M20.5 10.5L22 9" stroke="#C4A265" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Dermatological",
    slug: "Dermatological",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M8 22c0-5.523 2.686-9.333 6-9.333S20 16.477 20 22" stroke="#C4A265" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 12c0-2.5 1.5-5.5 2-8 .5 2.5 2 5.5 2 8" stroke="#C4A265" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const recentArticles = [...articles]
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  .slice(0, 3);

export default function HomePage() {
  const featuredProducts = FEATURED_SLUGS.map((slug) =>
    products.find((p) => p.slug === slug)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#FAF6F0", minHeight: "100vh" }}
      >

        {/* ── DESKTOP ── */}
        <div className="hidden md:block" style={{ minHeight: "100vh", position: "relative" }}>

          {/* Main packaging shot — parallax, right side */}
          <HeroParallaxImage />

          {/* Left-edge cream fade */}
          <div
            style={{
              position: "absolute",
              left: "28%",
              top: 0,
              bottom: 0,
              width: "14%",
              background: "linear-gradient(to right, #FAF6F0 0%, transparent 100%)",
              zIndex: 3,
              pointerEvents: "none",
            }}
          />

          {/* Vials lineup — peeks from bottom edge */}
          <div
            style={{
              position: "absolute",
              bottom: "-3%",
              right: "1%",
              width: "26vw",
              maxWidth: "340px",
              zIndex: 4,
              opacity: 0.65,
              filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.14))",
            }}
          >
            <Image
              src="/brand/hero-lineup.png"
              alt="Nexphoria vials"
              width={600}
              height={450}
              className="w-full h-auto"
              unoptimized
            />
          </div>

          {/* Box detail — accent card */}
          <div
            style={{
              position: "absolute",
              bottom: "14%",
              left: "32%",
              width: "110px",
              zIndex: 5,
              transform: "rotate(-2.5deg)",
            }}
          >
            <div
              className="hero-detail-hover rounded-xl overflow-hidden"
              style={{
                boxShadow: "0 18px 48px rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.04)",
              }}
            >
              <Image
                src="/brand/box-detail.jpg"
                alt="Nexphoria box detail"
                width={200}
                height={240}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Text block — left side, vertically centered */}
          <div
            style={{
              position: "absolute",
              left: "6%",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              maxWidth: "440px",
            }}
          >
            <p
              className="hero-eyebrow-animate"
              style={{
                fontSize: "0.6875rem",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#C4A265",
                marginBottom: "2rem",
              }}
            >
              Research-Grade Peptides
            </p>

            <h1
              className="hero-text-animate"
              style={{
                fontSize: "clamp(3.75rem, 6.25vw, 7.25rem)",
                lineHeight: 0.91,
                letterSpacing: "-0.035em",
                color: "#1A1A1A",
                marginBottom: "2rem",
              }}
            >
              <span style={{ fontWeight: 300 }}>Precision,</span>
              <br />
              <span style={{ fontWeight: 700, color: "#1A1A1A" }}>delivered.</span>
            </h1>

            <p
              className="hero-sub-animate"
              style={{
                fontSize: "0.9375rem",
                color: "#777",
                lineHeight: 1.75,
                maxWidth: "320px",
                marginBottom: "2.75rem",
              }}
            >
              Pharmaceutical-grade compounds. 99%+ purity.
              Cold-chain shipped with Certificate of Analysis.
            </p>

            <div className="hero-cta-animate flex items-center gap-5">
              <Link
                href="/products"
                className="btn-primary"
              >
Discover the Collection
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/quiz"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  color: "#C4A265",
                  textDecoration: "none",
                  transition: "opacity 150ms",
                }}
                className="hover:opacity-60"
              >
                Find Your Protocol →
              </Link>
            </div>
          </div>

          {/* Bottom gradient — seamless transition to social proof */}
          <div className="hero-bottom-fade" />

          {/* Fine editorial rule */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "6%",
              right: "6%",
              height: "1px",
              backgroundColor: "#E8E5DF",
              zIndex: 10,
            }}
          />
        </div>

        {/* ── MOBILE ── */}
        <div
          className="md:hidden flex flex-col"
          style={{ minHeight: "100vh", paddingTop: "88px" }}
        >
          <div className="px-6 pt-8 pb-6">
            <p
              style={{
                fontSize: "0.6875rem",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#C4A265",
                marginBottom: "1.5rem",
              }}
            >
              Research-Grade Peptides
            </p>

            <h1
              style={{
                fontSize: "clamp(2.75rem, 11.5vw, 3.75rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                color: "#1A1A1A",
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ fontWeight: 300 }}>Precision,</span>
              <br />
              <span style={{ fontWeight: 700 }}>delivered.</span>
            </h1>

            <p
              style={{
                fontSize: "0.9375rem",
                color: "#777",
                lineHeight: 1.7,
                marginBottom: "2.25rem",
                maxWidth: "300px",
              }}
            >
              Research-grade compounds. 99%+ purity.
              Cold-chain shipped with COA.
            </p>

            <Link
              href="/products"
              className="btn-primary"
            >
Discover Collection
            </Link>
          </div>

          <div className="px-4 pb-8 flex-1 flex flex-col justify-end">
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 24px 56px rgba(0,0,0,0.10)",
                backgroundColor: "#F5F3EE",
              }}
            >
              <Image
                src="/brand/packaging-unboxing.png"
                alt="Nexphoria premium peptide presentation"
                width={800}
                height={800}
                className="w-full h-auto"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF STRIP — subtle ─── */}
      <section className="py-8 px-6" style={{ borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {[
              {
                stat: "99.2%",
                label: "Average Purity",
                sub: "Across all lots, HPLC-verified",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <circle cx="14" cy="14" r="13" stroke="#C4A265" strokeWidth="1.5"/>
                    <path d="M8 14.5l4 4 8-8" stroke="#C4A265" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                stat: "48-Hour",
                label: "Cold-Chain Shipping",
                sub: "Temperature-controlled transit",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <rect x="1.75" y="7" width="24.5" height="15" rx="2" stroke="#C4A265" strokeWidth="1.5"/>
                    <path d="M7 7V5a2 2 0 012-2h10a2 2 0 012 2v2" stroke="#C4A265" strokeWidth="1.5"/>
                    <path d="M9 14h10M14 11v6" stroke="#C4A265" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                stat: "COA",
                label: "With Every Order",
                sub: "Batch-specific, always enclosed",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <rect x="5" y="2" width="18" height="24" rx="2" stroke="#C4A265" strokeWidth="1.5"/>
                    <path d="M9 9h10M9 13h10M9 17h6" stroke="#C4A265" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center px-4 py-5"
              >
                <div className="mb-3">{item.icon}</div>
                <div
                  className="text-xl md:text-2xl tracking-tight mb-0.5"
                  style={{ fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.02em" }}
                >
                  {item.stat}
                </div>
                <div className="text-xs font-medium mb-1" style={{ color: "#666" }}>{item.label}</div>
                <div className="text-[11px] leading-relaxed hidden md:block" style={{ color: "#888" }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SHOP BY RESEARCH CATEGORY ─── */}
      <SectionReveal>
        <section className="py-20 md:py-28 px-6" style={{ backgroundColor: "#FAF6F0" }}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <p className="eyebrow mb-4">Shop by Research Category</p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                Find your compound.
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {RESEARCH_CATEGORIES.map((cat, i) => {
                const count = products.filter((p) =>
                  p.category === cat.slug ||
                  (cat.slug === "Immune Support" && (p.category === "Immune" || p.category === "Immune Support")) ||
                  (cat.slug === "Longevity" && (p.category === "Longevity" || p.category === "Wellness"))
                ).length;
                return (
                  <Link
                    key={cat.slug}
                    href={`/products?category=${encodeURIComponent(cat.label)}`}
                    className="category-card block bg-white p-5"
                    style={{ animationDelay: `${i * 0.05}s`, border: "1px solid #E5E5E5", borderRadius: "8px" }}
                  >
                    <div className="mb-3">{cat.icon}</div>
                    <h3 className="text-sm font-semibold mb-1 leading-snug">{cat.label}</h3>
                    <p className="text-xs text-[#888]">
                      {count > 0 ? `${count} compound${count !== 1 ? "s" : ""}` : "Browse"}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ─── FEATURED PRODUCTS ─── */}
      <SectionReveal>
        <section className="py-20 md:py-28 px-6" style={{ backgroundColor: "#F7F7F7" }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="eyebrow mb-4">Bestsellers</p>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                  Most researched compounds.
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
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E5E5", borderRadius: "8px" }}
                    >
                      <div className="w-full h-56 overflow-hidden relative" style={{ backgroundColor: "#F7F7F7" }}>
                        {hasProductPhoto(product.slug) ? (
                          <img
                            src={getProductImagePath(product.slug)}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "#F0EDE7" }}>
                            <span className="text-sm font-semibold text-[#B8A44C] text-center px-4">
                              {product.name}
                            </span>
                          </div>
                        )}
                        {/* Badges removed — luxury doesn't label itself */}
                      </div>
                      <div className="p-5">
                        <p
                          className="text-[10px] uppercase mb-1.5 font-medium"
                          style={{ letterSpacing: "0.2em", color: "#C4A265" }}
                        >
                          {product.category}
                        </p>
                        <h3 className="text-base font-normal mb-1 group-hover:opacity-70 transition-opacity" style={{ color: "#1A1A1A", fontWeight: 400 }}>
                          {product.name}
                        </h3>
                        <p className="text-xs mb-3 leading-snug" style={{ color: "#888" }}>{product.tagline}</p>
                        <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid #E5E5E5" }}>
                          <span className="text-base font-medium" style={{ color: "#C4A265" }}>${price}</span>
                          <span
                            className="text-[10px] font-medium uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ letterSpacing: "0.1em", color: "#888" }}
                          >
                            View →
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
      </SectionReveal>

      {/* ─── THE NEXPHORIA STANDARD ─── */}
      <SectionReveal>
        <section className="py-20 md:py-28 px-6" style={{ backgroundColor: "#1A1A18" }}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 text-center">
              <p className="eyebrow mb-4">The Nexphoria Standard</p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight" style={{ color: "#F5F5F0" }}>
                Manufactured under pharmaceutical standards.
                <br className="hidden md:block" /> Every lot independently verified.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "Purity Testing",
                  body: "Every production lot undergoes HPLC analysis and ESI-MS identity confirmation by accredited third-party laboratories. Purity threshold: 98.0% minimum for catalog compounds, 99.0%+ for COA certification. Raw chromatographic data retained on file.",
                  detail: "Janoshik Analytical / Freedom Diagnostics",
                },
                {
                  num: "02",
                  title: "Cold-Chain Logistics",
                  body: "Lyophilized compounds are packed in temperature-controlled, light-shielding containers for 48-hour cold-chain transit. Each shipment includes gel packs rated to maintain sub-8°C for the full delivery window, regardless of ambient temperature.",
                  detail: "Temperature-controlled 48-hour delivery",
                },
                {
                  num: "03",
                  title: "Batch Tracking",
                  body: "Every vial carries a unique lot identifier traceable back to synthesis, purification, and QC records. Certificate of Analysis is issued per batch — not per compound class. Order documentation includes the full COA for your specific lot.",
                  detail: "Lot-specific COA enclosed with every order",
                },
              ].map((block) => (
                <div
                  key={block.num}
                  className="p-8 rounded-xl border"
                  style={{ borderColor: "#2A2A28", backgroundColor: "#1C1C1A" }}
                >
                  <div className="text-xs font-mono mb-5 font-semibold" style={{ color: "#C4A265" }}>
                    {block.num}
                  </div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: "#F5F5F0" }}>
                    {block.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#888" }}>
                    {block.body}
                  </p>
                  <p className="text-xs font-medium" style={{ color: "#C4A265" }}>
                    {block.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ─── PACKAGING ─── */}
      <SectionReveal>
        <section className="py-20 md:py-28 px-6">
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
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-[#C4A265]" />
                      <p className="text-sm text-[#555]">{line}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ─── LATEST FROM THE JOURNAL ─── */}
      <SectionReveal>
        <section className="py-20 md:py-28 px-6" style={{ backgroundColor: "#F7F7F7" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="eyebrow mb-4">Research Journal</p>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                  Latest from the Journal.
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity"
              >
                View All <span aria-hidden>&#8594;</span>
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="blog-card block bg-white rounded-lg overflow-hidden card-shadow"
                >
                  <div className="p-6">
                    <p className="text-[11px] uppercase tracking-wider text-[#C4A265] mb-3 font-medium" style={{ letterSpacing: "0.2em" }}>
                      {article.category}
                    </p>
                    <h3 className="text-base font-medium mb-3 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-[#888] leading-relaxed mb-4 line-clamp-2">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-[#E5E5E5]">
                      <span className="text-xs text-[#888]">
                        {new Date(article.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-xs text-[#CCC]">·</span>
                      <span className="text-xs text-[#888]">{article.readMinutes} min read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 md:hidden">
              <Link href="/blog" className="btn-outline">
                View All Articles
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ─── CONTINUE YOUR RESEARCH ─── */}
      <HomepageContinueResearch />

      {/* ─── CLOSING CTA ─── */}
      <SectionReveal>
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
View Collection
            </Link>
          </div>
        </section>
      </SectionReveal>
    </>
  );
}
