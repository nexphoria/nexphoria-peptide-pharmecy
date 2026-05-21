"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Beaker, FlaskConical, Microscope } from "lucide-react";

export default function HomePage() {
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

      {/* Hero Section - Editorial Calm */}
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
                  Research-Grade Compounds
                </span>
              </div>

              <h1
                className="text-7xl md:text-8xl font-medium mb-8 leading-[0.9] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Precision Through
                <br />
                <span className="text-stone">Science</span>
              </h1>

              <p
                className="text-xl text-charcoal max-w-2xl mb-16 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Pharmaceutical-grade nootropic compounds manufactured under cGMP
                standards. Every batch third-party tested for identity, purity,
                and potency.
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

          {/* Large Molecular Diagram - Fine Linework */}
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

      {/* Pattern Divider - Bold Moment #1 */}
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
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-50" />
          </div>
        </div>
      </div>

      {/* What We Do - Bold Moment #2 (High-Contrast Black Section) */}
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
                Our Standards
              </span>
            </div>

            <h2
              className="text-6xl md:text-7xl font-medium mb-8 leading-tight max-w-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Engineered at the Intersection of
              <span className="text-brand-primary"> Research and Precision</span>
            </h2>

            <p className="text-xl text-stone max-w-3xl leading-relaxed">
              We develop nootropic compounds using pharmaceutical-grade processes
              and rigorous quality control protocols. Every batch undergoes
              third-party testing for molecular identity, purity, and potency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                icon: Microscope,
                title: "Pharmaceutical cGMP Standards",
                description:
                  "Manufactured in certified facilities adhering to current Good Manufacturing Practice regulations for consistent quality.",
              },
              {
                icon: FlaskConical,
                title: "Third-Party Verified",
                description:
                  "Independent laboratory analysis confirms molecular identity, HPLC purity levels, and active compound concentration.",
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

      {/* Pattern Divider - Return to Light */}
      <div className="relative h-32 bg-cream overflow-hidden border-y border-stone/20">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "url(/brand/dna-pattern.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Product Showcase - Light Base with High-Contrast Cards */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-brand-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium">
                Research Compounds
              </span>
            </div>
            <div className="flex items-end justify-between">
              <h2
                className="text-5xl md:text-6xl font-medium"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Featured Compounds
              </h2>
              <button className="hidden md:flex items-center gap-2 text-near-black hover:text-brand-primary transition-colors font-medium">
                View All
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                code: "NXP-001",
                name: "Semax Acetate",
                category: "Research Compound",
                sequence: "Met-Glu-His-Phe-Pro-Gly-Pro",
                purity: "≥99.2%",
                cas: "80714-61-0",
                storage: "−20°C, dessicated",
              },
              {
                code: "NXP-007",
                name: "Cerebrolysin Analog",
                category: "Research Compound",
                sequence: "Proprietary Peptide Complex",
                purity: "≥98.8%",
                cas: "—",
                storage: "2–8°C, protect from light",
              },
              {
                code: "NXP-012",
                name: "Noopept",
                category: "Research Compound",
                sequence: "N-phenylacetyl-L-prolylglycine ethyl ester",
                purity: "≥99.6%",
                cas: "157115-85-0",
                storage: "Room temp, dessicated",
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

                    <div>
                      <div className="text-xs uppercase tracking-wider text-stone/70 mb-2">
                        Storage
                      </div>
                      <div className="text-sm">{product.storage}</div>
                    </div>
                  </div>

                  <button
                    className="w-full py-4 bg-white text-near-black font-medium
                             hover:bg-brand-primary transition-all duration-300 text-sm uppercase tracking-wider"
                  >
                    View COA &amp; Specs
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Strip - Editorial Calm */}
      <section className="relative py-24 bg-cream border-y border-stone/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2
              className="text-4xl md:text-5xl font-medium mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Beyond Boundaries, Beyond Limits
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-8">
              Nexphoria develops research-grade nootropic compounds for qualified
              research institutions and licensed professionals. Our commitment to
              pharmaceutical-grade manufacturing and third-party verification
              ensures every compound meets the highest standards of purity and
              consistency.
            </p>
            <button
              className="inline-flex items-center gap-2 text-near-black hover:text-brand-primary transition-colors font-medium"
            >
              About Our Process
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer - Split Design (Bold Moment #3) */}
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
                  Research-grade compounds
                  <br />
                  for qualified professionals.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-medium uppercase tracking-[0.15em] mb-6 text-brand-primary">
                  Products
                </h4>
                <ul className="space-y-3 text-sm text-stone">
                  <li className="hover:text-white transition-colors cursor-pointer">
                    All Compounds
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Peptide Library
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Custom Synthesis
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Bulk Orders
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-medium uppercase tracking-[0.15em] mb-6 text-brand-primary">
                  Documentation
                </h4>
                <ul className="space-y-3 text-sm text-stone">
                  <li className="hover:text-white transition-colors cursor-pointer">
                    COA Reports
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    MSDS Sheets
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Handling Guidelines
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Storage Protocols
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
                    Terms of Use
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-8 border-t border-stone/20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone">
            <p>© 2024 Nexphoria. Research compounds only. Not for human consumption.</p>
            <p className="font-mono">
              These products have not been evaluated by the FDA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
