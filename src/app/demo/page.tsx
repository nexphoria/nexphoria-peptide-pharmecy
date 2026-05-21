"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Beaker, FlaskConical, Microscope } from "lucide-react";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-near-black text-cream">
      {/* Chemical Pattern Background */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "url(/brand/chemical-pattern.svg)",
          backgroundSize: "800px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Glow Effect */}
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ backgroundColor: "#C9DD69" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:px-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Image
              src="/brand/logo-primary.svg"
              alt="Nexphoria"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-medium mb-6 leading-[0.95]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Transform,
                <br />
                Transcend,
                <br />
                <span className="text-brand-primary">Triumph</span>
              </h1>
              <p
                className="text-lg text-stone max-w-lg mb-8 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Cutting-edge nootropics engineered for those who refuse to
                accept limits. Backed by science. Fueled by precision.
              </p>
              <div className="flex gap-4">
                <button
                  className="group px-8 py-4 bg-brand-primary text-near-black font-medium rounded-sm
                           hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  className="px-8 py-4 border border-stone/30 text-cream font-medium rounded-sm
                           hover:border-brand-primary/50 hover:bg-brand-primary/5 transition-all duration-300"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden border border-stone/10">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(201, 221, 105, 0.1) 0%, rgba(164, 176, 138, 0.05) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-brand-primary/20 text-9xl font-light">
                    NX
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-stone uppercase tracking-widest">
              Scroll
            </span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-stone/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-32 border-t border-stone/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2
              className="text-5xl md:text-6xl font-medium mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Peak Potential,
              <br />
              <span className="text-brand-secondary">Pinnacle Performance</span>
            </h2>
            <p className="text-lg text-stone max-w-2xl leading-relaxed">
              We engineer nootropic compounds at the intersection of cutting-edge
              research and pharmaceutical precision. Every formula is designed to
              enhance cognitive function through rigorously tested pathways.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Microscope,
                title: "Research-Backed",
                description:
                  "Every compound undergoes rigorous clinical validation. We publish COA reports and third-party testing for complete transparency.",
              },
              {
                icon: FlaskConical,
                title: "Pharmaceutical Grade",
                description:
                  "Manufactured in certified facilities with pharmaceutical-grade standards. Purity and potency guaranteed batch-to-batch.",
              },
              {
                icon: Beaker,
                title: "Precise Formulation",
                description:
                  "Engineered ratios based on peer-reviewed research. Each ingredient serves a documented mechanism of action.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 border border-stone/10 rounded-sm hover:border-brand-primary/30
                         hover:bg-brand-primary/[0.02] transition-all duration-300"
              >
                <div
                  className="w-12 h-12 mb-6 flex items-center justify-center rounded-sm
                           bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary/20
                           transition-colors duration-300"
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <h3
                  className="text-xl font-medium mb-3"
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

      {/* Product Showcase */}
      <section className="relative py-32 border-t border-stone/10">
        {/* Subtle glow */}
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
          style={{ backgroundColor: "#A4B08A" }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 flex items-end justify-between"
          >
            <div>
              <h2
                className="text-5xl md:text-6xl font-medium mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Featured Compounds
              </h2>
              <p className="text-stone">
                Research-grade nootropics for cognitive enhancement
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-brand-primary hover:gap-4 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "NXP-001",
                category: "Focus Enhancement",
                structure: "C₁₅H₂₁NO₃",
                purity: "99.8%",
              },
              {
                name: "NXP-007",
                category: "Neuroprotection",
                structure: "C₂₂H₃₂N₂O₄",
                purity: "99.6%",
              },
              {
                name: "NXP-012",
                category: "Memory Support",
                structure: "C₁₈H₂₄N₄O₂",
                purity: "99.9%",
              },
            ].map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-charcoal border border-stone/10 rounded-sm overflow-hidden
                         hover:border-brand-primary/30 transition-all duration-300"
              >
                {/* Product Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 flex items-center justify-center border-b border-stone/10">
                  <div className="text-6xl font-light text-brand-primary/20">
                    {product.name.split("-")[1]}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs text-brand-primary uppercase tracking-widest mb-2">
                    {product.category}
                  </div>
                  <h3
                    className="text-2xl font-medium mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {product.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-stone">Structure</span>
                      <span className="font-mono text-xs">{product.structure}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-stone">Purity</span>
                      <span className="text-brand-primary">{product.purity}</span>
                    </div>
                  </div>
                  <button
                    className="w-full py-3 border border-stone/20 rounded-sm text-sm font-medium
                             group-hover:border-brand-primary/50 group-hover:text-brand-primary
                             transition-all duration-300"
                  >
                    View Specifications
                  </button>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(201, 221, 105, 0.03) 0%, transparent 70%)",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-stone/10 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <Image
                src="/brand/logo-primary.svg"
                alt="Nexphoria"
                width={140}
                height={48}
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm text-stone leading-relaxed">
                Beyond Boundaries,
                <br />
                Beyond Limits.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-brand-primary">
                Products
              </h4>
              <ul className="space-y-2 text-sm text-stone">
                <li className="hover:text-cream transition-colors cursor-pointer">
                  Focus Enhancement
                </li>
                <li className="hover:text-cream transition-colors cursor-pointer">
                  Neuroprotection
                </li>
                <li className="hover:text-cream transition-colors cursor-pointer">
                  Memory Support
                </li>
                <li className="hover:text-cream transition-colors cursor-pointer">
                  All Compounds
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-brand-primary">
                Research
              </h4>
              <ul className="space-y-2 text-sm text-stone">
                <li className="hover:text-cream transition-colors cursor-pointer">
                  Clinical Studies
                </li>
                <li className="hover:text-cream transition-colors cursor-pointer">
                  COA Reports
                </li>
                <li className="hover:text-cream transition-colors cursor-pointer">
                  Third-Party Testing
                </li>
                <li className="hover:text-cream transition-colors cursor-pointer">
                  Documentation
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-brand-primary">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-stone">
                <li className="hover:text-cream transition-colors cursor-pointer">
                  About
                </li>
                <li className="hover:text-cream transition-colors cursor-pointer">
                  Quality Standards
                </li>
                <li className="hover:text-cream transition-colors cursor-pointer">
                  Contact
                </li>
                <li className="hover:text-cream transition-colors cursor-pointer">
                  Legal
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-stone/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone">
            <p>© 2024 Nexphoria. Research compounds only.</p>
            <p className="font-mono text-xs">
              These statements have not been evaluated by the FDA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
