"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Shield, FlaskConical, FileCheck } from "lucide-react";

/**
 * DEMO A: Dark Lab Direction
 *
 * Theme: Moody biotech laboratory
 * - Near-black (#010101) canvas
 * - #C9DD69 as glowing accents (precise highlights)
 * - Molecular pattern as ambient background element
 * - Clinical, precise, shadowy atmosphere
 */

export default function DemoAPage() {
  return (
    <div className="min-h-screen bg-near-black text-cream antialiased">
      {/* Ambient Molecular Pattern - Large Scale Background */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url(/brand/chemical-pattern.svg)",
          backgroundSize: "1200px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* DNA Pattern Overlay - Right Side */}
      <div
        className="fixed top-0 right-0 w-1/3 h-full opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: "url(/brand/dna-pattern.png)",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Atmospheric Glow Effects */}
      <div
        className="fixed top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{ backgroundColor: "#C9DD69" }}
      />
      <div
        className="fixed bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full blur-[120px] opacity-5 pointer-events-none"
        style={{ backgroundColor: "#A4B08A" }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full py-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <Image
              src="/brand/logo-primary.svg"
              alt="Nexphoria"
              width={200}
              height={67}
              className="h-14 w-auto"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="mb-6">
                <span
                  className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium"
                  style={{
                    backgroundColor: "rgba(201, 221, 105, 0.1)",
                    border: "1px solid rgba(201, 221, 105, 0.2)",
                    color: "#C9DD69",
                  }}
                >
                  Pharmaceutical Grade Nootropics
                </span>
              </div>

              <h1
                className="text-6xl lg:text-7xl xl:text-8xl font-medium mb-8 leading-[0.95]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Precision
                <br />
                Engineered
                <br />
                <span style={{ color: "#C9DD69" }}>Cognition</span>
              </h1>

              <p className="text-lg text-stone max-w-lg mb-8 leading-relaxed">
                Clinical-grade peptide compounds synthesized for cognitive
                enhancement. Each formulation undergoes rigorous third-party
                testing for purity, potency, and safety.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="group px-8 py-4 font-medium rounded-sm transition-all duration-300 flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: "#C9DD69",
                    color: "#010101",
                  }}
                >
                  View Research Compounds
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  className="px-8 py-4 font-medium rounded-sm transition-all duration-300 border"
                  style={{
                    borderColor: "rgba(127, 127, 125, 0.3)",
                    color: "#EAE7E3",
                  }}
                >
                  Request COA Reports
                </button>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6 pt-12 border-t border-stone/10">
                <div>
                  <div
                    className="text-3xl font-medium mb-1"
                    style={{ color: "#C9DD69" }}
                  >
                    99.9%
                  </div>
                  <div className="text-sm text-stone">Avg. Purity</div>
                </div>
                <div>
                  <div
                    className="text-3xl font-medium mb-1"
                    style={{ color: "#C9DD69" }}
                  >
                    <span className="text-2xl">cGMP</span>
                  </div>
                  <div className="text-sm text-stone">Certified</div>
                </div>
                <div>
                  <div
                    className="text-3xl font-medium mb-1"
                    style={{ color: "#C9DD69" }}
                  >
                    3rd
                  </div>
                  <div className="text-sm text-stone">Party Tested</div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual - Molecular Structure */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square">
                {/* Glowing border effect */}
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: `linear-gradient(135deg, rgba(201, 221, 105, 0.1) 0%, rgba(164, 176, 138, 0.05) 100%)`,
                    border: "1px solid rgba(201, 221, 105, 0.15)",
                  }}
                />
                {/* Molecular pattern */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <Image
                    src="/brand/chemical-pattern.svg"
                    alt="Molecular Structure"
                    width={400}
                    height={400}
                    className="opacity-30"
                    style={{ filter: "brightness(1.5)" }}
                  />
                </div>
                {/* Center glow */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full blur-[80px] opacity-20"
                  style={{ backgroundColor: "#C9DD69" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-32 px-6 md:px-12 border-t border-stone/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2
              className="text-5xl md:text-6xl font-medium mb-6 max-w-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Research-Grade Peptide Synthesis
            </h2>
            <p className="text-xl text-stone max-w-2xl">
              Engineered at the intersection of neuroscience and pharmaceutical chemistry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FlaskConical,
                title: "Pharmaceutical cGMP Standards",
                description:
                  "Manufactured in FDA-registered facilities following current Good Manufacturing Practices. Every batch documented with complete chain-of-custody.",
              },
              {
                icon: FileCheck,
                title: "Third-Party Verified",
                description:
                  "Independent laboratory analysis for each production run. HPLC/MS verification, heavy metals screening, microbiological testing.",
              },
              {
                icon: Shield,
                title: "Research Use Only",
                description:
                  "Supplied as research compounds for qualified institutions. Not intended for human consumption. Full regulatory compliance documentation.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-sm transition-all duration-300"
                style={{
                  backgroundColor: "rgba(45, 45, 45, 0.3)",
                  border: "1px solid rgba(127, 127, 125, 0.1)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at top, rgba(201, 221, 105, 0.05) 0%, transparent 70%)",
                  }}
                />

                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-sm mb-6 flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(201, 221, 105, 0.1)",
                      color: "#C9DD69",
                    }}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3
                    className="text-xl font-medium mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-stone leading-relaxed text-[15px]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="relative py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2
              className="text-5xl md:text-6xl font-medium mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Research Compounds
            </h2>
            <p className="text-stone text-lg">Batch-verified peptide synthesis</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
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
                sequence: "Proprietary Peptide Complex",
                purity: "≥98.8%",
                cas: "Research Grade",
              },
              {
                code: "NXP-MEMO-012",
                name: "Noopept",
                category: "Memory & Learning",
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
                className="group relative rounded-sm overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: "#2D2D2D",
                  border: "1px solid rgba(127, 127, 125, 0.15)",
                }}
              >
                {/* Molecular pattern overlay */}
                <div
                  className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none"
                  style={{
                    backgroundImage: "url(/brand/chemical-pattern.svg)",
                    backgroundSize: "200%",
                    backgroundPosition: "top right",
                  }}
                />

                {/* Product Header */}
                <div className="relative p-6 border-b border-stone/10">
                  <div
                    className="text-xs uppercase tracking-widest mb-2 font-medium"
                    style={{ color: "#C9DD69" }}
                  >
                    {product.category}
                  </div>
                  <h3
                    className="text-2xl font-medium mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {product.name}
                  </h3>
                  <div className="text-xs font-mono text-stone">{product.code}</div>
                </div>

                {/* Product Details */}
                <div className="relative p-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-stone">Sequence</span>
                    <span className="text-xs font-mono text-cream text-right max-w-[60%]">
                      {product.sequence}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone">Purity (HPLC)</span>
                    <span style={{ color: "#C9DD69" }}>{product.purity}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone">CAS Number</span>
                    <span className="font-mono text-xs text-cream">{product.cas}</span>
                  </div>

                  <button
                    className="w-full mt-4 py-3 rounded-sm text-sm font-medium transition-all duration-300"
                    style={{
                      border: "1px solid rgba(127, 127, 125, 0.2)",
                      color: "#EAE7E3",
                    }}
                  >
                    Request COA & Specification Sheet
                  </button>
                </div>

                {/* Hover effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, rgba(201, 221, 105, 0.03) 0%, transparent 50%)",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-stone/10 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <Image
                src="/brand/logo-primary.svg"
                alt="Nexphoria"
                width={160}
                height={53}
                className="h-12 w-auto mb-4"
              />
              <p className="text-sm text-stone leading-relaxed">
                Pharmaceutical-grade peptide synthesis for qualified research institutions.
              </p>
            </div>

            <div>
              <h4
                className="text-sm font-medium uppercase tracking-wider mb-4"
                style={{ color: "#C9DD69" }}
              >
                Compounds
              </h4>
              <ul className="space-y-2 text-sm text-stone">
                <li className="hover:text-cream transition-colors cursor-pointer">
                  Cognitive Enhancement
                </li>
                <li className="hover:text-cream transition-colors cursor-pointer">
                  Neuroprotection
                </li>
                <li className="hover:text-cream transition-colors cursor-pointer">
                  Memory & Learning
                </li>
              </ul>
            </div>

            <div>
              <h4
                className="text-sm font-medium uppercase tracking-wider mb-4"
                style={{ color: "#C9DD69" }}
              >
                Documentation
              </h4>
              <ul className="space-y-2 text-sm text-stone">
                <li className="hover:text-cream transition-colors cursor-pointer">COA Reports</li>
                <li className="hover:text-cream transition-colors cursor-pointer">
                  Safety Data Sheets
                </li>
                <li className="hover:text-cream transition-colors cursor-pointer">
                  Analytical Methods
                </li>
              </ul>
            </div>

            <div>
              <h4
                className="text-sm font-medium uppercase tracking-wider mb-4"
                style={{ color: "#C9DD69" }}
              >
                Compliance
              </h4>
              <ul className="space-y-2 text-sm text-stone">
                <li className="hover:text-cream transition-colors cursor-pointer">
                  Regulatory Status
                </li>
                <li className="hover:text-cream transition-colors cursor-pointer">
                  Quality Standards
                </li>
                <li className="hover:text-cream transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-stone/10 text-sm text-stone">
            <p className="mb-2">
              © 2024 Nexphoria. Research compounds only. Not for human consumption.
            </p>
            <p className="text-xs">
              These products are sold for research purposes only and are not intended to diagnose,
              treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
