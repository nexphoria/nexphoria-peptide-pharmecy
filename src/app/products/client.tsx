"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products, categories } from "@/lib/products";
import { bundles, getBundleProducts } from "@/lib/bundles";
import ProductCard from "@/components/ProductCard";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const allFilters = [...categories, "For Him", "For Her", "Bundles"];

export default function ProductsClient({ initialCategory }: { initialCategory?: string }) {
  const [activeFilter, setActiveFilter] = useState(initialCategory || "All");

  const showBundles = activeFilter === "Bundles";
  const showForHim = activeFilter === "For Him";
  const showForHer = activeFilter === "For Her";

  const filtered = showBundles ? [] :
    showForHim ? products.filter(p => p.forGender === "men-focus") :
    showForHer ? products.filter(p => p.forGender === "women-focus") :
    activeFilter === "All" ? products :
    products.filter(p => p.category === activeFilter);

  return (
    <>
      {/* Category Filter */}
      <div
        className="border-b sticky top-14 md:top-[calc(56px+36px)] backdrop-blur-md z-20"
        style={{
          backgroundColor: "rgba(10, 10, 10, 0.95)",
          borderColor: "var(--dark-border)"
        }}
      >
        <div className="container-nex">
          <div className="flex gap-0 overflow-x-auto py-4 -mb-px">
            {allFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex-shrink-0 px-4 py-2 text-[10px] font-medium border-b-2 transition-colors whitespace-nowrap uppercase tracking-[0.16em] ${
                  activeFilter === filter
                    ? "border-acid-green text-acid-green"
                    : "border-transparent text-secondary hover:text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* BUNDLES VIEW */}
      {showBundles && (
        <div className="py-16 md:py-24 bg-dark-panel">
          <div className="container-nex">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="mb-12">
              <span className="eyebrow mb-4 block">Stacks &amp; Bundles</span>
              <h2 className="font-bold tracking-tight text-primary text-3xl lg:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}>
                Curated for Your{" "}
                <em className="italic text-acid-green">Goals</em>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5">
              {bundles.map((bundle, i) => {
                const bundleProducts = getBundleProducts(bundle);
                const individualTotal = bundleProducts.reduce((sum, p) => sum + (p?.price || 0), 0);
                return (
                  <motion.div key={bundle.slug}
                    initial="hidden" animate="visible" variants={fadeUp} custom={i * 0.1}
                    className="border border-dark-border-hover bg-dark-card overflow-hidden rounded-xl">
                    <div className="p-7">
                      <div className="flex items-start justify-between mb-4">
                        <span className="eyebrow text-acid-green">{bundle.eyebrow}</span>
                        <span className="badge-savings">
                          Save ${bundle.savings}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight mb-3 text-primary"
                        style={{ fontFamily: "var(--font-display)" }}>
                        {bundle.name}
                      </h3>
                      <p className="text-sm leading-relaxed mb-5 text-secondary">{bundle.description}</p>
                      <div className="space-y-2 mb-6 border-t border-b border-dark-border py-5">
                        {bundleProducts.map((p) => p && (
                          <div key={p.slug} className="flex items-center justify-between">
                            <span className="text-sm text-primary">{p.name}</span>
                            <span className="text-sm line-through text-tertiary">${p.price}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-end justify-between mb-5">
                        <div>
                          <div className="text-xs mb-1 text-secondary">Bundle price</div>
                          <div className="text-3xl font-bold text-acid-green"
                            style={{ fontFamily: "var(--font-display)" }}>
                            ${bundle.totalPrice}
                          </div>
                          <div className="text-xs text-secondary">vs ${individualTotal} individually</div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 max-w-[180px]">
                          {bundle.tags.map((tag) => (
                            <span key={tag} className="badge-category text-[9px]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link href="/products" className="btn-acid w-full justify-center">
                        Build This Stack <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Products grid */}
      {!showBundles && (
        <div className="bg-dark min-h-screen">
          <div className="container-nex pt-14 pb-10">
            {/* Gender context banner */}
            {(showForHim || showForHer) && (
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}
                className="mb-8 p-5 border border-dark-border bg-dark-card rounded-lg">
                <p className="text-sm leading-relaxed text-secondary">
                  {showForHim
                    ? "Compounds particularly studied in the context of recovery, muscle growth, and GH optimization. Includes all research peptides tagged for men's health focus."
                    : "Compounds particularly studied in the context of weight management, skin health, anti-aging, and vitality. Includes research peptides tagged for women's health focus."}
                </p>
              </motion.div>
            )}

            <p className="text-label mb-8 text-secondary">
              {filtered.length} compound{filtered.length !== 1 ? "s" : ""}
              {showForHim ? " · For Him" : showForHer ? " · For Her" : activeFilter !== "All" ? ` · ${activeFilter}` : ""}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.slug}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={i * 0.04}
                >
                  <ProductCard product={product} showAddToCart={true} />
                </motion.div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="py-32 text-center">
                <p className="text-secondary">No compounds in this category.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bundles section at bottom of "All" view */}
      {!showBundles && activeFilter === "All" && (
        <div id="bundles" className="border-t border-dark-border py-20 md:py-28 bg-dark-panel">
          <div className="container-nex">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-12">
              <span className="eyebrow mb-4 block">Stacks &amp; Bundles</span>
              <h2 className="font-bold tracking-tight text-primary text-3xl lg:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}>
                Goal-Based <em className="italic text-acid-green">Stacks</em>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5">
              {bundles.map((bundle, i) => {
                const bundleProducts = getBundleProducts(bundle);
                const individualTotal = bundleProducts.reduce((sum, p) => sum + (p?.price || 0), 0);
                return (
                  <motion.div key={bundle.slug}
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}
                    className="border border-dark-border-hover bg-dark-card overflow-hidden rounded-xl">
                    <div className="p-7">
                      <div className="flex items-start justify-between mb-4">
                        <span className="eyebrow text-acid-green">{bundle.eyebrow}</span>
                        <span className="badge-savings">
                          Save ${bundle.savings}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight mb-2 text-primary"
                        style={{ fontFamily: "var(--font-display)" }}>
                        {bundle.name}
                      </h3>
                      <p className="text-sm mb-5 text-secondary">{bundle.description}</p>
                      <div className="space-y-2 mb-5 border-t border-b border-dark-border py-4">
                        {bundleProducts.map((p) => p && (
                          <div key={p.slug} className="flex justify-between text-sm">
                            <span className="text-primary">{p.name}</span>
                            <span className="line-through text-tertiary">${p.price}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <div className="text-2xl font-bold text-acid-green"
                            style={{ fontFamily: "var(--font-display)" }}>
                            ${bundle.totalPrice}
                          </div>
                          <div className="text-xs text-secondary">vs ${individualTotal}</div>
                        </div>
                        <div className="flex flex-wrap gap-1 max-w-[160px]">
                          {bundle.tags.map((tag) => (
                            <span key={tag} className="badge-category text-[9px]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button className="btn-acid w-full justify-center">
                        Build This Stack <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Custom synthesis CTA */}
      {!showBundles && (
        <div className="border-t border-dark-border py-20 bg-dark-panel">
          <div className="container-nex">
            <div className="max-w-2xl">
              <span className="eyebrow mb-4 block">Custom Synthesis</span>
              <h2 className="font-bold tracking-tight mb-5 text-primary text-3xl"
                style={{ fontFamily: "var(--font-display)" }}>
                Need a specific compound?
              </h2>
              <p className="leading-relaxed mb-8 max-w-xl text-secondary">
                We accept custom synthesis inquiries for defined peptide sequences not currently in
                our catalog. Submit a request with your target sequence, required quantity, and purity specification.
              </p>
              <Link href="/contact" className="btn-outline">
                Inquire About Custom Synthesis <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
