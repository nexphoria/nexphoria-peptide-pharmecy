"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Beaker, FlaskConical, Microscope } from "lucide-react";

export default function DemoBPage() {
  return (
    <div className="min-h-screen bg-cream text-near-black">
      {/* Fine Chemical Pattern Overlay - Editorial Style */}
      <div
        className="fixed inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "url(/brand/chemical-pattern.svg)",
          backgroundSize: "600px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Hero Section - Abundant White Space */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-48">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <Image
              src="/brand/logo-black.svg"
              alt="Nexphoria"
              width={160}
              height={54}
              className="h-11 w-auto"
            />
          </motion.div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-stone/20 rounded-sm mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                <span className="text-xs uppercase tracking-widest text-charcoal font-medium">
                  Research-Grade Nootropics
                </span>
              </div>

              <h1
                className="text-7xl md:text-8xl font-medium mb-8 leading-[0.9] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Clarity Through
                <br />
                <span className="text-stone">Precision</span>
              </h1>

              <p
                className="text-xl text-charcoal max-w-2xl mb-16 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Pharmaceutical-grade cognitive enhancers developed through
                rigorous clinical research. Every compound third-party tested for
                purity and potency.
              </p>

              <div className="flex gap-4">
                <button
                  className="px-8 py-4 bg-near-black text-cream font-medium rounded-sm
                           hover:bg-charcoal transition-colors duration-300"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Browse Compounds
                </button>
                <button
                  className="group px-8 py-4 border border-stone/30 text-near-black font-medium rounded-sm
                           hover:border-brand-primary transition-all duration-300 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  View Research
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Editorial Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-16 pt-16 border-t border-stone/20"
            >
              <div>
                <div className="text-4xl font-medium mb-2">99.9%</div>
                <div className="text-sm text-stone uppercase tracking-wider">
                  Average Purity
                </div>
              </div>
              <div>
                <div className="text-4xl font-medium mb-2">cGMP</div>
                <div className="text-sm text-stone uppercase tracking-wider">
                  Certified Facility
                </div>
              </div>
              <div>
                <div className="text-4xl font-medium mb-2">100%</div>
                <div className="text-sm text-stone uppercase tracking-wider">
                  Third-Party Tested
                </div>
              </div>
            </motion.div>
          </div>

          {/* Large Molecular Diagram - Line Art Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute top-32 right-12 w-[500px] h-[500px] hidden xl:block"
          >
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "url(/brand/dna-pattern.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* What We Do - Editorial Grid */}
      <section className="relative py-32 border-t border-stone/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-24 mb-32"
          >
            <div>
              <h2
                className="text-5xl font-medium mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Engineered for
                <br />
                <span className="text-brand-secondary">Peak Performance</span>
              </h2>
            </div>
            <div>
              <p className="text-lg text-charcoal leading-relaxed mb-6">
                We develop nootropic compounds at the intersection of
                neuroscience and pharmaceutical chemistry. Every formula is
                backed by peer-reviewed research and manufactured to exacting
                standards.
              </p>
              <p className="text-base text-stone leading-relaxed">
                Our compounds undergo rigorous third-party testing for identity,
                purity, and potency. We publish complete Certificate of Analysis
                reports for every batch.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Microscope,
                title: "Pharmaceutical cGMP Standards",
                description:
                  "Manufactured in certified facilities adhering to current Good Manufacturing Practice regulations.",
              },
              {
                icon: FlaskConical,
                title: "Third-Party Verified",
                description:
                  "Independent laboratory testing confirms identity, purity, and potency for every production batch.",
              },
              {
                icon: Beaker,
                title: "Research Use Only",
                description:
                  "Compounds are intended for qualified research purposes. Not for human consumption.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="w-10 h-10 mb-6 flex items-center justify-center">
                  <item.icon className="w-10 h-10 text-near-black" strokeWidth={1} />
                </div>
                <h3
                  className="text-xl font-medium mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-stone leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase - Clean Editorial Layout */}
      <section className="relative py-32 border-t border-stone/20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2
              className="text-5xl font-medium mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Featured Compounds
            </h2>
            <p className="text-stone text-lg">
              Research-grade nootropics with complete analytical documentation
            </p>
          </motion.div>

          <div className="space-y-24">
            {[
              {
                code: "NXP-COGN-001",
                name: "Semax Acetate",
                category: "Cognitive Enhancement",
                sequence: "Met-Glu-His-Phe-Pro-Gly-Pro",
                structure: "C₃₇H₅₁N₉O₁₀S",
                purity: "≥99.2%",
                cas: "80714-61-0",
                description:
                  "Synthetic heptapeptide derived from ACTH(4-10). Demonstrated nootropic and neuroprotective properties in preclinical models.",
              },
              {
                code: "NXP-NEUR-007",
                name: "Cerebrolysin Analog",
                category: "Neuroprotection",
                sequence: "Proprietary Complex",
                structure: "Mixed Peptide Fraction",
                purity: "≥98.8%",
                cas: "—",
                description:
                  "Brain-derived peptide complex. Multiple preclinical studies demonstrate neuroprotective and neurotrophic activity.",
              },
              {
                code: "NXP-MEMO-012",
                name: "Noopept",
                category: "Memory Support",
                sequence: "N-phenylacetyl-L-prolylglycine ethyl ester",
                structure: "C₁₇H₂₂N₂O₄",
                purity: "≥99.6%",
                cas: "157115-85-0",
                description:
                  "Dipeptide-based compound. Research indicates potential cognitive-enhancing effects via modulation of AMPA receptor activity.",
              },
            ].map((product, index) => (
              <motion.div
                key={product.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group grid md:grid-cols-[1fr,2fr] gap-12 pb-24 border-b border-stone/20 last:border-0"
              >
                {/* Product Visual */}
                <div className="relative aspect-square bg-cream border border-stone/10 rounded-sm overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: "url(/brand/chemical-pattern.svg)",
                      backgroundSize: "200%",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl font-light text-near-black/5">
                      {product.code.split("-")[2]}
                    </div>
                  </div>
                  <div className="absolute top-6 left-6">
                    <div className="text-xs uppercase tracking-widest text-brand-primary font-medium">
                      {product.category}
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-center space-y-8">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-stone mb-3 font-medium">
                      {product.code}
                    </div>
                    <h3
                      className="text-4xl font-medium mb-4"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-base text-charcoal leading-relaxed max-w-xl">
                      {product.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-stone/20">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-stone mb-2">
                        Sequence
                      </div>
                      <div className="text-sm font-medium">{product.sequence}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-stone mb-2">
                        Structure
                      </div>
                      <div className="text-sm font-medium font-mono">
                        {product.structure}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-stone mb-2">
                        HPLC Purity
                      </div>
                      <div className="text-sm font-medium text-brand-primary">
                        {product.purity}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-stone mb-2">
                        CAS Number
                      </div>
                      <div className="text-sm font-medium">{product.cas}</div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      className="px-6 py-3 bg-near-black text-cream text-sm font-medium rounded-sm
                               hover:bg-charcoal transition-colors duration-300"
                    >
                      View Specifications
                    </button>
                    <button
                      className="px-6 py-3 border border-stone/30 text-near-black text-sm font-medium rounded-sm
                               hover:border-brand-primary transition-all duration-300"
                    >
                      Download COA
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Clean and Editorial */}
      <footer className="relative border-t border-stone/20 py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div>
              <Image
                src="/brand/logo-black.svg"
                alt="Nexphoria"
                width={140}
                height={48}
                className="h-10 w-auto mb-6"
              />
              <p className="text-sm text-stone leading-relaxed">
                Beyond Boundaries,
                <br />
                Beyond Limits.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider mb-6 text-near-black">
                Products
              </h4>
              <ul className="space-y-3 text-sm text-stone">
                <li className="hover:text-near-black transition-colors cursor-pointer">
                  Cognitive Enhancement
                </li>
                <li className="hover:text-near-black transition-colors cursor-pointer">
                  Neuroprotection
                </li>
                <li className="hover:text-near-black transition-colors cursor-pointer">
                  Memory Support
                </li>
                <li className="hover:text-near-black transition-colors cursor-pointer">
                  All Compounds
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider mb-6 text-near-black">
                Research
              </h4>
              <ul className="space-y-3 text-sm text-stone">
                <li className="hover:text-near-black transition-colors cursor-pointer">
                  Clinical Studies
                </li>
                <li className="hover:text-near-black transition-colors cursor-pointer">
                  COA Reports
                </li>
                <li className="hover:text-near-black transition-colors cursor-pointer">
                  Third-Party Testing
                </li>
                <li className="hover:text-near-black transition-colors cursor-pointer">
                  Documentation
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider mb-6 text-near-black">
                Company
              </h4>
              <ul className="space-y-3 text-sm text-stone">
                <li className="hover:text-near-black transition-colors cursor-pointer">
                  About
                </li>
                <li className="hover:text-near-black transition-colors cursor-pointer">
                  Quality Standards
                </li>
                <li className="hover:text-near-black transition-colors cursor-pointer">
                  Contact
                </li>
                <li className="hover:text-near-black transition-colors cursor-pointer">
                  Legal
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-stone/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone">
            <p>© 2024 Nexphoria. Research compounds only.</p>
            <p className="font-mono">
              These statements have not been evaluated by the FDA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
