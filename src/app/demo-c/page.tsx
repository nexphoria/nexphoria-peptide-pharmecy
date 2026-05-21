"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Beaker, FlaskConical, Microscope } from "lucide-react";

export default function DemoCPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - White with Near-Black Elements */}
      <section className="relative min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 w-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-12 left-6 md:left-12"
          >
            <Image
              src="/brand/logo-black.svg"
              alt="Nexphoria"
              width={160}
              height={54}
              className="h-11 w-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-12 h-[2px] bg-brand-primary" />
                <span className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium">
                  Research-Grade Compounds
                </span>
              </div>

              <h1
                className="text-7xl md:text-8xl font-medium mb-8 leading-[0.85]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-near-black">Scientific</span>
                <br />
                <span className="text-brand-primary">Precision</span>
              </h1>

              <p className="text-xl text-charcoal max-w-lg mb-12 leading-relaxed">
                Pharmaceutical-grade nootropics engineered for cognitive
                enhancement. Third-party tested. Research use only.
              </p>

              <div className="flex gap-4">
                <button
                  className="px-10 py-5 bg-near-black text-white font-medium
                           hover:bg-brand-primary hover:text-near-black transition-all duration-300"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Explore Compounds
                </button>
                <button
                  className="group px-10 py-5 border-2 border-near-black text-near-black font-medium
                           hover:border-brand-primary hover:text-brand-primary transition-all duration-300 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  View Research
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-near-black relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "url(/brand/dna-pattern.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-brand-primary text-9xl font-light opacity-80">
                    NX
                  </div>
                </div>
              </div>

              {/* Stats Overlay */}
              <div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-xl border-l-4 border-brand-primary">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-medium mb-1">99.9%</div>
                    <div className="text-xs uppercase tracking-wider text-stone">
                      Purity
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-medium mb-1">cGMP</div>
                    <div className="text-xs uppercase tracking-wider text-stone">
                      Certified
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-medium mb-1">100%</div>
                    <div className="text-xs uppercase tracking-wider text-stone">
                      Tested
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pattern Divider - Prominent Separator */}
      <div className="relative h-32 bg-near-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(/brand/chemical-pattern.svg)",
            backgroundSize: "400px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-50" />
          </div>
        </div>
      </div>

      {/* What We Do - Near-Black Section */}
      <section className="relative py-32 bg-near-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-[2px] bg-brand-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-brand-primary font-medium">
                Our Approach
              </span>
            </div>

            <h2
              className="text-6xl md:text-7xl font-medium mb-8 leading-tight max-w-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Engineered at the Intersection of
              <span className="text-brand-primary"> Science and Precision</span>
            </h2>

            <p className="text-xl text-stone max-w-3xl leading-relaxed">
              We develop nootropic compounds using pharmaceutical-grade processes
              and rigorous quality control. Every batch is third-party tested for
              identity, purity, and potency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                icon: Microscope,
                title: "Pharmaceutical cGMP Standards",
                description:
                  "Current Good Manufacturing Practice compliance ensures consistent quality and safety in every batch produced.",
              },
              {
                icon: FlaskConical,
                title: "Third-Party Verified",
                description:
                  "Independent laboratory analysis confirms molecular identity, purity levels, and active compound concentration.",
              },
              {
                icon: Beaker,
                title: "Research Use Only",
                description:
                  "All compounds are intended for qualified research purposes and are not for human consumption.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute top-0 left-0 w-1 h-16 bg-brand-primary" />
                <div className="pl-8">
                  <div className="w-12 h-12 mb-6 flex items-center justify-center">
                    <item.icon
                      className="w-12 h-12 text-brand-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3
                    className="text-2xl font-medium mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-stone leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pattern Divider */}
      <div className="relative h-32 bg-white overflow-hidden border-y border-stone/20">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "url(/brand/dna-pattern.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Product Showcase - White Background, High Contrast Cards */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-[2px] bg-brand-primary" />
                  <span className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium">
                    Featured Compounds
                  </span>
                </div>
                <h2
                  className="text-6xl font-medium"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Research-Grade
                  <br />
                  Nootropics
                </h2>
              </div>
              <button className="hidden md:flex items-center gap-2 text-near-black hover:text-brand-primary transition-colors font-medium">
                View All Compounds
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                code: "NXP-COGN-001",
                name: "Semax Acetate",
                category: "Cognitive Enhancement",
                sequence: "Met-Glu-His-Phe-Pro-Gly-Pro",
                purity: "≥99.2%",
                cas: "80714-61-0",
              },
              {
                code: "NXP-NEUR-007",
                name: "Cerebrolysin Analog",
                category: "Neuroprotection",
                sequence: "Proprietary Complex",
                purity: "≥98.8%",
                cas: "—",
              },
              {
                code: "NXP-MEMO-012",
                name: "Noopept",
                category: "Memory Support",
                sequence: "N-phenylacetyl-L-prolylglycine",
                purity: "≥99.6%",
                cas: "157115-85-0",
              },
            ].map((product, index) => (
              <motion.div
                key={product.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-near-black text-white overflow-hidden"
              >
                {/* Pattern Background */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: "url(/brand/chemical-pattern.svg)",
                    backgroundSize: "300%",
                    backgroundPosition: "center",
                  }}
                />

                {/* Yellow accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-brand-primary" />

                <div className="relative p-8">
                  <div className="text-xs uppercase tracking-[0.15em] text-brand-primary mb-6 font-medium">
                    {product.category}
                  </div>

                  <h3
                    className="text-3xl font-medium mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {product.name}
                  </h3>

                  <div className="text-xs uppercase tracking-wider text-stone/70 mb-8">
                    {product.code}
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="pb-4 border-b border-white/10">
                      <div className="text-xs uppercase tracking-wider text-stone/70 mb-2">
                        Sequence
                      </div>
                      <div className="text-sm leading-relaxed">
                        {product.sequence}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-stone/70 mb-2">
                          HPLC Purity
                        </div>
                        <div className="text-lg font-medium text-brand-primary">
                          {product.purity}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-stone/70 mb-2">
                          CAS
                        </div>
                        <div className="text-sm font-mono">{product.cas}</div>
                      </div>
                    </div>
                  </div>

                  <button
                    className="w-full py-4 bg-white text-near-black font-medium
                             hover:bg-brand-primary transition-all duration-300 text-sm uppercase tracking-wider"
                  >
                    View Specifications
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pattern Divider */}
      <div className="relative h-24 bg-near-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url(/brand/chemical-pattern.svg)",
            backgroundSize: "500px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Footer - Split Design */}
      <footer className="relative">
        <div className="bg-near-black text-white py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-4 gap-16 mb-16">
              <div>
                <Image
                  src="/brand/logo-primary.svg"
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
                <h4 className="text-xs font-medium uppercase tracking-[0.15em] mb-6 text-brand-primary">
                  Products
                </h4>
                <ul className="space-y-3 text-sm text-stone">
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Cognitive Enhancement
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Neuroprotection
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Memory Support
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    All Compounds
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-medium uppercase tracking-[0.15em] mb-6 text-brand-primary">
                  Research
                </h4>
                <ul className="space-y-3 text-sm text-stone">
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Clinical Studies
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    COA Reports
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Third-Party Testing
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Documentation
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-medium uppercase tracking-[0.15em] mb-6 text-brand-primary">
                  Company
                </h4>
                <ul className="space-y-3 text-sm text-stone">
                  <li className="hover:text-white transition-colors cursor-pointer">
                    About
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Quality Standards
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Contact
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Legal
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-8 border-t border-stone/20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone">
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
