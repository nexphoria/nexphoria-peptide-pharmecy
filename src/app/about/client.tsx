"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, FlaskConical, Shield } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: FlaskConical,
    title: "Manufacturing Excellence",
    description:
      "Every compound synthesized in ISO-certified, cGMP-compliant facilities. We impose pharmaceutical-grade controls on every production batch — not because we are required to, but because anything less is insufficient.",
  },
  {
    icon: Shield,
    title: "Scientific Integrity",
    description:
      "Independent third-party analytical testing is non-negotiable. HPLC, mass spectrometry, and NMR verification performed by accredited external laboratories on every lot. Certificate of Analysis available prior to shipment.",
  },
  {
    icon: Award,
    title: "Research Focus",
    description:
      "Our compounds are designed for qualified researchers, licensed professionals, and credentialed institutions. We do not manufacture consumer products. We manufacture research tools.",
  },
];

const standards = [
  { code: "cGMP", label: "Current Good Manufacturing Practice" },
  { code: "HPLC", label: "High-Performance Liquid Chromatography" },
  { code: "MS/NMR", label: "Mass Spectrometry & Nuclear Magnetic Resonance" },
  { code: "CoA", label: "Certificate of Analysis per batch" },
  { code: "MSDS", label: "Material Safety Data Sheet provided" },
  { code: "ISO", label: "ISO-compliant facility standards" },
];

export default function AboutClient() {
  return (
    <div className="bg-cream text-near-black">
      {/* Hero */}
      <section className="relative pt-36 pb-24">
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
                Our Mission
              </span>
            </div>
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tight mb-8 max-w-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Precision.
              <br />
              Purity.
              <br />
              <span className="text-stone">Purpose.</span>
            </h1>
            <p className="text-xl text-charcoal max-w-2xl leading-relaxed">
              Nexphoria was founded on a singular conviction: that research
              compounds should meet the same standards as pharmaceutical drugs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-24 bg-near-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <p
              className="text-2xl md:text-3xl text-white font-medium leading-relaxed"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We manufacture exclusively in cGMP-certified facilities, subject
              every batch to independent third-party analytical testing, and
              provide complete documentation with each order.{" "}
              <span className="text-brand-primary">
                No exceptions. No shortcuts.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-brand-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium">
                Core Principles
              </span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-medium leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative border border-stone/20 p-8"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 mb-6 flex items-center justify-center bg-cream border border-stone/20">
                  <v.icon className="w-6 h-6 text-charcoal" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-xl font-medium mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-charcoal leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder note */}
      <section className="py-24 bg-white border-y border-stone/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 mb-10">
              <div className="w-10 h-[2px] bg-brand-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium">
                Founder's Note
              </span>
            </div>

            <blockquote className="border-l-4 border-brand-primary pl-8">
              <p
                className="text-2xl md:text-3xl font-medium leading-relaxed text-near-black mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                "We built Nexphoria because we believed researchers deserve the
                same quality standards that pharmaceutical manufacturers apply
                to clinical drugs. Every compound we produce is a commitment
                to that belief."
              </p>
              <footer className="text-sm text-stone uppercase tracking-widest">
                — Nexphoria Founding Team
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Standards grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-brand-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium">
                Quality Framework
              </span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-medium leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Standards
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {standards.map((s, i) => (
              <motion.div
                key={s.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-white border border-stone/20"
              >
                <div className="text-xs font-mono font-medium text-brand-primary bg-near-black px-2 py-1 whitespace-nowrap mt-0.5">
                  {s.code}
                </div>
                <p className="text-sm text-charcoal leading-relaxed">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-near-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2
            className="text-3xl md:text-4xl font-medium text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to browse our catalog?
          </h2>
          <Link
            href="/products"
            className="group flex items-center gap-2 px-8 py-4 bg-brand-primary text-near-black font-medium rounded-sm hover:bg-brand-primary/90 transition-colors whitespace-nowrap"
          >
            Browse Compounds
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
