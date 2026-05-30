import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Best Sellers | Nexphoria Research",
  description:
    "The most popular research peptides at Nexphoria. Top-ranked by researcher demand — HPLC-verified, COA-confirmed, and trusted by the research community.",
  openGraph: {
    title: "Best Sellers | Nexphoria Research",
    description:
      "The most popular research peptides at Nexphoria. Top-ranked by researcher demand — HPLC-verified, COA-confirmed, and trusted by the research community.",
    url: "https://nexphoria.com/products/best-sellers",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Sellers | Nexphoria Research",
    description: "Top-ranked research peptides at Nexphoria, trusted by the research community.",
  },
};

const popularProducts = products.filter((p) => p.badge === "POPULAR" && !p.comingSoon);

const categories = Array.from(new Set(popularProducts.map((p) => p.category))).sort();

export default function BestSellersPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0A0A08" }}>
      {/* Hero */}
      <section
        className="relative pt-28 pb-16 px-6"
        style={{
          background: "linear-gradient(180deg, #0D0D0B 0%, #111110 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/products" },
              { label: "Best Sellers" },
            ]}
          />

          <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              {/* Eyebrow */}
              <p
                className="text-[11px] uppercase tracking-[0.25em] font-medium mb-3"
                style={{ color: "#C9A96E" }}
              >
                Researcher Favorites
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Best Sellers
              </h1>
              <p className="mt-3 text-[#888] text-sm max-w-xl leading-relaxed">
                The compounds researchers reach for most — proven purity, consistent batch quality,
                and independently tested at Janoshik Analytical before every release.
              </p>
            </div>

            {/* Stats strip */}
            <div className="flex gap-6 shrink-0">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{popularProducts.length}</p>
                <p className="text-[11px] uppercase tracking-widest text-[#666]">
                  Top compounds
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{categories.length}</p>
                <p className="text-[11px] uppercase tracking-widest text-[#666]">
                  {categories.length === 1 ? "Category" : "Categories"}
                </p>
              </div>
            </div>
          </div>

          {/* Category pills */}
          {categories.length > 1 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((cat) => {
                const count = popularProducts.filter((p) => p.category === cat).length;
                return (
                  <span
                    key={cat}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: "rgba(201,169,110,0.12)",
                      color: "#C9A96E",
                      border: "1px solid rgba(201,169,110,0.2)",
                    }}
                  >
                    {cat} ({count})
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {popularProducts.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-[#666] text-lg mb-4">No featured products at this time.</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              style={{ background: "#C9A96E", color: "#000" }}
            >
              Browse All Compounds
            </Link>
          </div>
        ) : (
          <>
            {/* Group by category if multiple */}
            {categories.length > 1 ? (
              <div className="space-y-12">
                {categories.map((cat) => {
                  const catProducts = popularProducts.filter((p) => p.category === cat);
                  return (
                    <div key={cat}>
                      <div className="flex items-center gap-3 mb-6">
                        <h2
                          className="font-semibold text-white uppercase tracking-widest"
                          style={{ fontSize: "11px" }}
                        >
                          {cat}
                        </h2>
                        <div
                          className="h-px flex-1"
                          style={{ background: "rgba(255,255,255,0.06)" }}
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {catProducts.map((product, idx) => (
                          <ProductCard key={product.slug} product={product} priority={idx < 4} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {popularProducts.map((product, idx) => (
                  <ProductCard key={product.slug} product={product} priority={idx < 4} />
                ))}
              </div>
            )}

            {/* Trust footer */}
            <div
              className="mt-14 rounded-xl px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div>
                <p className="text-sm font-medium text-white mb-1">
                  Popular for a reason
                </p>
                <p className="text-xs text-[#888]">
                  Every best-seller compound is batch-tested at Janoshik Analytical with HPLC +
                  MS confirmation. COA available on the product page or on request.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link
                  href="/products"
                  className="text-xs font-medium px-4 py-2 rounded-lg border transition-colors hover:bg-white/5"
                  style={{ borderColor: "rgba(255,255,255,0.15)", color: "#aaa" }}
                >
                  All Products
                </Link>
                <Link
                  href="/reviews"
                  className="text-xs font-medium px-4 py-2 rounded-lg transition-colors"
                  style={{ background: "#C9A96E", color: "#000" }}
                >
                  Researcher Reviews
                </Link>
              </div>
            </div>
          </>
        )}
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Best Sellers — Nexphoria Research",
            description:
              "Top-ranked research peptides at Nexphoria, independently tested and trusted by the research community.",
            url: "https://nexphoria.com/products/best-sellers",
            breadcrumb: {
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
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Best Sellers",
                  item: "https://nexphoria.com/products/best-sellers",
                },
              ],
            },
          }),
        }}
      />
    </main>
  );
}
