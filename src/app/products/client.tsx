"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Download, Lock } from "lucide-react";
import Link from "next/link";

const products = [
  {
    code: "NXP-001",
    name: "Semax",
    category: "Peptide",
    sequence: "Met-Glu-His-Phe-Pro-Gly-Pro",
    formula: "C₃₇H₅₁N₉O₁₀S",
    mw: "813.92 g/mol",
    purity: "≥99.2%",
    cas: "80714-61-0",
    storage: "−20°C, desiccated",
    available: true,
  },
  {
    code: "NXP-007",
    name: "Selank",
    category: "Peptide",
    sequence: "Thr-Lys-Pro-Arg-Pro-Gly-Pro",
    formula: "C₃₃H₅₇N₁₁O₉",
    mw: "751.87 g/mol",
    purity: "≥98.8%",
    cas: "129954-34-3",
    storage: "2–8°C, protect from light",
    available: true,
  },
  {
    code: "NXP-012",
    name: "Noopept",
    category: "Small Molecule",
    sequence: "N-phenylacetyl-L-prolylglycine ethyl ester",
    formula: "C₁₇H₂₂N₂O₄",
    mw: "318.37 g/mol",
    purity: "≥99.6%",
    cas: "157115-85-0",
    storage: "RT, desiccated, dark",
    available: true,
  },
  { code: "NXP-013", name: null, category: "Peptide", available: false },
  { code: "NXP-014", name: null, category: "Peptide", available: false },
  { code: "NXP-015", name: null, category: "Small Molecule", available: false },
  { code: "NXP-016", name: null, category: "Peptide", available: false },
  { code: "NXP-017", name: null, category: "Custom", available: false },
  { code: "NXP-018", name: null, category: "Peptide", available: false },
  { code: "NXP-019", name: null, category: "Small Molecule", available: false },
  { code: "NXP-020", name: null, category: "Peptide", available: false },
  { code: "NXP-021", name: null, category: "Custom", available: false },
];

const categories = ["All", "Peptide", "Small Molecule", "Custom"];

export default function ProductsClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-cream text-near-black">
      {/* Hero */}
      <section className="relative pt-36 pb-20">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "url(/brand/chemical-pattern.svg)",
            backgroundSize: "500px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-10 h-[2px] bg-brand-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium">
                Research Compounds
              </span>
            </div>
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Peptide Catalog
            </h1>
            <p className="text-lg text-charcoal max-w-xl leading-relaxed">
              cGMP-manufactured research compounds. Full Certificate of Analysis
              and MSDS available for every lot.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer banner */}
      <div className="bg-near-black text-white py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs font-mono text-stone/80 text-center">
            All compounds are for qualified research use only. Not for human consumption, diagnostic, or therapeutic use.
            By accessing this catalog, you confirm you are a licensed researcher or qualified professional.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="sticky top-16 md:top-20 z-30 bg-cream/95 backdrop-blur-sm border-b border-stone/20 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs uppercase tracking-widest text-stone/60 mr-2">Filter:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 text-xs uppercase tracking-wider rounded-sm transition-colors ${
                  activeFilter === cat
                    ? "bg-near-black text-cream"
                    : "border border-stone/30 text-charcoal hover:border-near-black"
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-xs text-stone/60">
              {filtered.length} compound{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, index) => (
              <motion.div
                key={product.code}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-near-black text-white overflow-hidden"
              >
                {/* Pattern bg */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: "url(/brand/chemical-pattern.svg)",
                    backgroundSize: "300%",
                    backgroundPosition: "center",
                  }}
                />
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${product.available ? "bg-brand-primary" : "bg-stone/30"}`} />

                <div className="relative p-6">
                  {product.available ? (
                    <>
                      <div className="text-xs uppercase tracking-[0.15em] text-brand-primary mb-4 font-medium">
                        {product.category}
                      </div>
                      <h3
                        className="text-2xl font-medium mb-1"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {product.name}
                      </h3>
                      <div className="text-xs uppercase tracking-wider text-stone/60 mb-6">
                        {product.code}
                      </div>

                      <div className="space-y-3 mb-6 text-sm">
                        <div className="flex justify-between gap-4 py-2 border-b border-white/10">
                          <span className="text-stone/60 text-xs uppercase tracking-wider">Formula</span>
                          <span className="font-mono text-xs">{product.formula}</span>
                        </div>
                        <div className="flex justify-between gap-4 py-2 border-b border-white/10">
                          <span className="text-stone/60 text-xs uppercase tracking-wider">MW</span>
                          <span className="font-mono text-xs">{product.mw}</span>
                        </div>
                        <div className="flex justify-between gap-4 py-2 border-b border-white/10">
                          <span className="text-stone/60 text-xs uppercase tracking-wider">HPLC Purity</span>
                          <span className="text-brand-primary font-medium">{product.purity}</span>
                        </div>
                        <div className="flex justify-between gap-4 py-2 border-b border-white/10">
                          <span className="text-stone/60 text-xs uppercase tracking-wider">CAS</span>
                          <span className="font-mono text-xs">{product.cas}</span>
                        </div>
                        <div className="flex justify-between gap-4 py-2">
                          <span className="text-stone/60 text-xs uppercase tracking-wider">Storage</span>
                          <span className="text-xs text-right">{product.storage}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <button className="w-full py-3 bg-white text-near-black text-xs font-medium uppercase tracking-wider hover:bg-brand-primary transition-colors flex items-center justify-center gap-2">
                          <FileText className="w-3.5 h-3.5" />
                          View COA Report
                        </button>
                        <button className="w-full py-3 border border-white/20 text-white text-xs font-medium uppercase tracking-wider hover:border-brand-primary hover:text-brand-primary transition-colors flex items-center justify-center gap-2">
                          <Download className="w-3.5 h-3.5" />
                          Download MSDS
                        </button>
                      </div>
                    </>
                  ) : (
                    // Coming soon placeholder
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <Lock className="w-8 h-8 text-stone/30 mb-4" strokeWidth={1} />
                      <div className="text-xs uppercase tracking-wider text-stone/40 font-mono mb-2">
                        {product.code}
                      </div>
                      <div className="text-xs text-stone/30 uppercase tracking-widest">
                        Coming Soon
                      </div>
                      <div className="mt-4 text-xs text-stone/20 uppercase tracking-wider">
                        {product.category}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom synthesis CTA */}
      <section className="py-24 bg-white border-t border-stone/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-brand-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium">
                Custom Synthesis
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-medium mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Need a specific compound?
            </h2>
            <p className="text-charcoal leading-relaxed mb-8">
              We accept custom synthesis inquiries for defined peptide sequences
              not currently in our catalog. Submit a request with your target
              sequence, required quantity, and purity specification.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-near-black text-cream font-medium rounded-sm hover:bg-charcoal transition-colors"
            >
              Inquire About Custom Synthesis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
