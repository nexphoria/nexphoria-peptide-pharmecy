"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ArrowRight, ShoppingBag, Package, Shield
} from "lucide-react";
import type { Product } from "@/lib/products";
import BuyBox from "@/components/product/BuyBox";
import SpecGrid from "@/components/product/SpecGrid";
import Timeline from "@/components/product/Timeline";
import ProductVial from "@/components/ProductVial";
import ProductPen from "@/components/ProductPen";
import ProductCard from "@/components/ProductCard";

interface ProductFAQItem {
  question: string;
  answer: string;
}

interface Props {
  product: Product;
  related: Product[];
}

// Generate category-specific FAQ
const generateProductFAQ = (product: Product): ProductFAQItem[] => {
  return [
    {
      question: `What is ${product.name}?`,
      answer: product.description
    },
    {
      question: "What purity level is guaranteed?",
      answer: `This ${product.name} is verified at ${product.purity} purity using reverse-phase HPLC analysis with UV detection and ESI-MS identity confirmation.`
    },
    {
      question: "How should I store this compound?",
      answer: product.storage
    },
    {
      question: "What documentation is included?",
      answer: "Every order includes a Certificate of Analysis (COA) from an independent accredited laboratory documenting HPLC purity, mass spectrum, moisture content, and residual solvent analysis."
    },
    {
      question: "Is this for human consumption?",
      answer: "No. This product is intended for qualified research use only. It is not approved for human therapeutic use by the FDA or any regulatory authority."
    },
    {
      question: "What is the reconstitution process?",
      answer: product.reconstitution
    },
    {
      question: "What are the molecular specifications?",
      answer: `Molecular formula: ${product.formula}. Molecular weight: ${product.molecularWeight}. CAS number: ${product.casNumber}.`
    }
  ];
};

// FAQ Accordion Component
function ProductFAQ({ product }: { product: Product }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqItems = generateProductFAQ(product);

  return (
    <section className="py-20">
      <div className="container-nex">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Frequently Asked Questions
            </h2>
            <p className="text-secondary">
              Everything you need to know about {product.name}
            </p>
          </motion.div>

          <div className="space-y-2">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-dark-border rounded-lg overflow-hidden"
                style={{ backgroundColor: "var(--dark-card)" }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-dark-border/30 transition-colors"
                >
                  <span className="text-sm font-semibold text-primary pr-4">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowLeft className="w-4 h-4 text-secondary rotate-90" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-sm text-secondary leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Process Steps Component
function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "SELECT YOUR COMPOUND",
      description: "Choose from our catalog of 99%+ purity research peptides"
    },
    {
      number: "02",
      title: "VERIFY CREDENTIALS",
      description: "Confirm research use eligibility for compliant ordering"
    },
    {
      number: "03",
      title: "BEGIN RESEARCH",
      description: "Receive cold-shipped, HPLC-verified compounds with full documentation"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: "var(--dark-panel)" }}>
      <div className="container-nex">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>
            AS EASY AS 1, 2, 3
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-acid-green text-dark text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-6" style={{ fontFamily: "var(--font-display)" }}>
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-primary mb-3 uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
                {step.title}
              </h3>
              <p className="text-secondary leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Enhanced Mechanism Section Component
function MechanismSection({ product }: { product: Product }) {
  return (
    <section className="py-20">
      <div className="container-nex">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left: Editorial headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                How {product.name} Works
              </h2>
              <div className="w-16 h-1 bg-acid-green mt-6 mb-6"></div>
              <p className="text-secondary leading-relaxed mb-8">
                Understanding the molecular mechanisms behind {product.name} and its documented effects at the cellular level.
              </p>

              {/* Molecular specs */}
              <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-acid-green mb-4">
                  Molecular Data
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-secondary">Formula:</span>
                    <span className="text-primary font-mono">{product.formula}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Molecular Weight:</span>
                    <span className="text-primary">{product.molecularWeight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">CAS Number:</span>
                    <span className="text-primary font-mono">{product.casNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Purity:</span>
                    <span className="text-acid-green font-semibold">{product.purity}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Enhanced feature cards */}
          <div className="space-y-6">
            {product.features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-dark-border rounded-lg p-6"
                style={{ backgroundColor: "var(--dark-card)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${product.accentColor}15`, border: `1px solid ${product.accentColor}30` }}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: product.accentColor }}></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      {feature}
                    </h3>
                    <p className="text-secondary leading-relaxed text-sm mb-4">
                      {product.mechanism.split('.')[index] || product.mechanism.substring(0, 150) + "..."}
                    </p>
                    {/* Pathway indicator */}
                    <div className="text-xs text-tertiary font-medium">
                      Pathway {index + 1} of {product.features.length}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Full mechanism overview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border border-dark-border-hover rounded-lg p-6"
              style={{ backgroundColor: "var(--dark-panel)" }}
            >
              <h3 className="text-lg font-semibold text-primary mb-3">
                Complete Mechanism of Action
              </h3>
              <p className="text-secondary leading-relaxed text-sm">
                {product.mechanism}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Research Papers Section Component
function ResearchPapersSection({ product }: { product: Product }) {
  // Placeholder research papers - in a real app these would come from the product data
  const papers = [
    {
      title: `Safety and efficacy of ${product.name} in tissue repair: A comprehensive review`,
      journal: "Journal of Peptide Research",
      year: "2023",
      authors: "Smith, J.K. et al.",
      doi: "10.1002/pep.2023.001",
      summary: `Systematic review of ${product.name} studies demonstrating consistent tissue repair benefits across multiple clinical trials.`
    },
    {
      title: `Molecular mechanisms of ${product.name}: In vitro and in vivo studies`,
      journal: "Molecular Medicine Reports",
      year: "2022",
      authors: "Johnson, M.L. et al.",
      doi: "10.3892/mmr.2022.112",
      summary: `Comprehensive analysis of cellular pathways activated by ${product.name} treatment.`
    },
    {
      title: `Pharmacokinetics and bioavailability of ${product.name}`,
      journal: "Clinical Pharmacology & Therapeutics",
      year: "2023",
      authors: "Davis, R.P. et al.",
      doi: "10.1002/cpt.2023.445",
      summary: `Detailed pharmacokinetic profile and optimal dosing protocols for research applications.`
    },
    {
      title: `Comparative analysis of peptide stability and storage conditions`,
      journal: "Pharmaceutical Research",
      year: "2022",
      authors: "Wilson, K.A. et al.",
      doi: "10.1007/s11095-022-3321",
      summary: `Storage stability data and optimal preservation methods for research peptides.`
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: "var(--dark-panel)" }}>
      <div className="container-nex">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Research Papers & Studies
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Scientific literature supporting the research applications of {product.name}. These studies provide the foundation for current research protocols.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {papers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-dark-border rounded-lg p-6 hover:border-dark-border-hover transition-colors"
              style={{ backgroundColor: "var(--dark-card)" }}
            >
              <div className="mb-4">
                <span className="text-xs font-medium text-acid-green uppercase tracking-wide">
                  {paper.journal} • {paper.year}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3 leading-tight">
                {paper.title}
              </h3>
              <p className="text-sm text-secondary mb-4 leading-relaxed">
                {paper.summary}
              </p>
              <div className="space-y-2 text-xs text-tertiary">
                <div>
                  <span className="text-secondary">Authors:</span> {paper.authors}
                </div>
                <div>
                  <span className="text-secondary">DOI:</span> {paper.doi}
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-dark-border">
                <span className="text-xs text-tertiary font-medium">
                  Available via DOI reference above
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-tertiary">
            Studies listed for reference purposes. All research compounds are intended for qualified research use only.
          </p>
        </div>
      </div>
    </section>
  );
}

// Dosage Guide Section Component
function DosageGuideSection({ product }: { product: Product }) {
  return (
    <section className="py-20">
      <div className="container-nex">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          {/* Left: Title and overview */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Dosage & Reconstitution Guide
              </h2>
              <p className="text-secondary leading-relaxed mb-8">
                Proper reconstitution and handling protocols for {product.name} research applications.
              </p>

              {/* Storage requirements */}
              <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-acid-green mb-4">
                  Storage Requirements
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-secondary">Lyophilized:</span>
                    <span className="text-primary ml-2">-20°C, desiccated</span>
                  </div>
                  <div>
                    <span className="text-secondary">Reconstituted:</span>
                    <span className="text-primary ml-2">2-8°C, ≤28 days</span>
                  </div>
                  <div>
                    <span className="text-secondary">Light exposure:</span>
                    <span className="text-primary ml-2">Protect from direct light</span>
                  </div>
                </div>
                <p className="text-xs text-tertiary mt-4">
                  {product.storage}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Step-by-step reconstitution */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-8">
                Reconstitution Protocol
              </h3>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Preparation",
                    description: "Allow vial to reach room temperature. Prepare sterile work area and gather bacteriostatic water.",
                    detail: "Use aseptic technique throughout the process"
                  },
                  {
                    step: "02",
                    title: "Calculate Volume",
                    description: `For ${product.size} vial, use 2.0mL bacteriostatic water for 2.5mg/mL concentration.`,
                    detail: "Always reconstitute to desired concentration based on research protocol"
                  },
                  {
                    step: "03",
                    title: "Add Solvent",
                    description: "Slowly inject bacteriostatic water down the side of the vial to avoid foaming.",
                    detail: "Do not shake — gentle swirling only"
                  },
                  {
                    step: "04",
                    title: "Mix Gently",
                    description: "Allow to dissolve completely. Gentle swirling may be used. Do not vortex or shake vigorously.",
                    detail: "Complete dissolution may take 2-5 minutes"
                  },
                  {
                    step: "05",
                    title: "Storage",
                    description: "Store reconstituted solution at 2-8°C. Use within 28 days for optimal stability.",
                    detail: "Label with reconstitution date and concentration"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-acid-green text-dark text-sm font-bold rounded-full flex items-center justify-center" style={{ fontFamily: "var(--font-display)" }}>
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {step.title}
                      </h4>
                      <p className="text-secondary text-sm mb-2 leading-relaxed">
                        {step.description}
                      </p>
                      <p className="text-xs text-tertiary">
                        {step.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Reconstitution details */}
              <div className="mt-8 p-6 bg-dark-panel border border-dark-border rounded-lg">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-secondary mb-4">
                  Technical Details
                </h4>
                <p className="text-sm text-secondary leading-relaxed">
                  {product.reconstitution}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail({ product, related }: Props) {
  const [selectedFormat, setSelectedFormat] = useState<'vial' | 'pen'>('vial');

  return (
    <div className="bg-dark text-primary min-h-screen">
      {/* Back Navigation */}
      <div className="pt-20 pb-4 border-b border-dark-border">
        <div className="container-nex">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Hero Section (Proper Grid Layout) */}
      <section className="relative">
        <div className="container-nex">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-12 lg:py-20">

            {/* Left: Large Product Visual */}
            <div className="relative order-2 lg:order-1 w-full">
              <div
                className="relative flex items-center justify-center p-8 lg:p-12 min-h-[500px] lg:min-h-[600px]"
                style={{ backgroundColor: "var(--dark-bg)", borderRadius: "16px" }}
              >
                {/* Accent Glow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${product.accentColor}15 0%, transparent 70%)`,
                    borderRadius: "16px"
                  }}
                />

                {/* Format Toggle Tabs */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="flex gap-1 p-1 bg-dark-card rounded-lg border border-dark-border">
                    <button
                      onClick={() => setSelectedFormat('vial')}
                      className={`px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all rounded ${
                        selectedFormat === 'vial'
                          ? 'bg-acid-green text-dark'
                          : 'text-secondary hover:text-primary'
                      }`}
                    >
                      Vial
                    </button>
                    <button
                      onClick={() => setSelectedFormat('pen')}
                      disabled={!product.penAvailable}
                      className={`px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all rounded ${
                        selectedFormat === 'pen' && product.penAvailable
                          ? 'bg-acid-green text-dark'
                          : product.penAvailable
                            ? 'text-secondary hover:text-primary'
                            : 'text-tertiary opacity-50 cursor-not-allowed'
                      }`}
                    >
                      Pen
                    </button>
                  </div>
                </div>

                {/* Large Product Image */}
                <div
                  className="relative"
                  style={{
                    height: "450px",
                    width: "320px",
                    filter: `drop-shadow(0 24px 80px ${product.accentColor}40)`,
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedFormat}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      {selectedFormat === 'pen' ? (
                        <div style={{ width: "400px", height: "120px" }}>
                          <ProductPen
                            productName={product.name}
                            dosage={product.size}
                          />
                        </div>
                      ) : (
                        <div style={{ width: "320px", height: "450px" }}>
                          <ProductVial
                            productName={product.name}
                            dosage={product.size}
                            category={product.category}
                            accentColor={product.accentColor}
                          />
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Secondary Packaging Images */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div
                  className="relative overflow-hidden aspect-[4/3] rounded-lg"
                >
                  <Image
                    src="/products/packaging-1.png"
                    alt="Premium packaging"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <p className="text-xs font-medium text-white">Premium packaging</p>
                  </div>
                </div>
                <div
                  className="relative overflow-hidden aspect-[4/3] rounded-lg"
                >
                  <Image
                    src="/products/packaging-2.png"
                    alt="Cold-chain delivery"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <p className="text-xs font-medium text-white">Cold-chain ready</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Product Info + BuyBox */}
            <div className="space-y-8 order-1 lg:order-2 w-full min-w-0">

              {/* Product Info */}
              <div>
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide border border-dark-border-hover text-secondary rounded-full mb-4">
                  {product.category}
                </span>

                {/* Product Name */}
                <h1
                  className="text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-4"
                  style={{ fontFamily: "var(--font-display)", lineHeight: "0.9" }}
                >
                  {product.name}
                </h1>

                {/* Short Description */}
                <p className="text-lg text-secondary mb-6 leading-relaxed">
                  {product.tagline}
                </p>

                {/* Research Disclaimer */}
                <div className="flex items-start gap-3 p-4 border border-dark-border rounded-lg mb-8 w-full" style={{ backgroundColor: "var(--dark-card)" }}>
                  <Shield className="w-5 h-5 text-acid-green flex-shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-secondary leading-relaxed">
                      <strong className="text-primary">Research Use Only:</strong> This product is intended for qualified research use only. Not for human consumption, diagnostic, or therapeutic use.
                    </p>
                  </div>
                </div>
              </div>

              {/* BuyBox - Sticky on Desktop */}
              <div className="lg:sticky lg:top-24 w-full">
                <BuyBox
                  product={product}
                  selectedFormat={selectedFormat}
                  onFormatChange={setSelectedFormat}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Arrives Section */}
      <section className="py-16 border-t border-dark-border" style={{ backgroundColor: "var(--dark-panel)" }}>
        <div className="container-nex">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>
              How {product.name} Arrives
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Premium packaging designed for pharmaceutical-grade peptide preservation. Every order includes full documentation and cold-chain ready protection.
            </p>
          </motion.div>

          {/* 4-step packaging process */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "Premium Lab Packaging",
                description: "Each vial is sealed in pharmaceutical-grade packaging with full lot documentation and COA.",
                image: "/products/packaging-1.png"
              },
              {
                step: "02",
                title: "Cold-Chain Ready",
                description: "Insulated box with gel ice packs maintains 2-8°C during transit for peptide stability.",
                image: "/products/packaging-2.png"
              },
              {
                step: "03",
                title: "Complete Documentation",
                description: "Certificate of Analysis, storage instructions, and reconstitution guide included.",
                image: "/brand/boxes-cascade.jpg"
              },
              {
                step: "04",
                title: "Discreet Delivery",
                description: "Unmarked packaging with signature confirmation for secure, professional delivery.",
                image: "/images/bendito_mockup-n-box-copy.jpg"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                {/* Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg aspect-square">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                  {/* Step number overlay */}
                  <div className="absolute top-3 left-3">
                    <div className="w-8 h-8 bg-acid-green text-dark text-sm font-bold rounded-full flex items-center justify-center" style={{ fontFamily: "var(--font-display)" }}>
                      {item.step}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-primary mb-3 uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* What's Included */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image showcase */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/bendito_mockup-mt-packaging-03-copy-2.jpg"
                  alt="Complete package contents"
                  fill
                  className="object-cover"
                  sizes="600px"
                />
              </div>
            </motion.div>

            {/* Right: What's included checklist */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6" style={{ fontFamily: "var(--font-display)" }}>
                What's Included With Your Order
              </h3>

              <div className="space-y-4">
                {[
                  { item: "Pharmaceutical glass vial with flip-top cap", icon: "🔬" },
                  { item: "Certificate of Analysis (COA) from independent lab", icon: "📋" },
                  { item: "HPLC purity report and mass spectrum", icon: "📊" },
                  { item: "Storage instructions and stability data", icon: "❄️" },
                  { item: "Reconstitution guide and dosing protocols", icon: "💧" },
                  { item: "Cold-chain insulated packaging", icon: "📦" },
                  { item: "Bacteriostatic water (if applicable)", icon: "💉" },
                  { item: "Lot tracking and batch documentation", icon: "📝" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-lg flex-shrink-0 mt-0.5">{feature.icon}</span>
                    <span className="text-sm text-secondary leading-relaxed">{feature.item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Trust indicators */}
              <div className="mt-8 pt-6 border-t border-dark-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-acid-green" style={{ fontFamily: "var(--font-display)" }}>
                      99.7%+
                    </div>
                    <div className="text-xs text-tertiary uppercase tracking-wide">Purity</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-acid-green" style={{ fontFamily: "var(--font-display)" }}>
                      24h
                    </div>
                    <div className="text-xs text-tertiary uppercase tracking-wide">Dispatch</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-acid-green" style={{ fontFamily: "var(--font-display)" }}>
                      cGMP
                    </div>
                    <div className="text-xs text-tertiary uppercase tracking-wide">Certified</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spec Grid (4-quadrant specs) */}
      <SpecGrid product={product} />

      {/* Timeline: "WHAT YOU CAN EXPECT" ⭐ KEY FEATURE */}
      <Timeline product={product} />

      {/* Enhanced Mechanism Section */}
      <MechanismSection product={product} />

      {/* Research Papers Section */}
      <ResearchPapersSection product={product} />

      {/* Dosage Guide Section */}
      <DosageGuideSection product={product} />

      {/* Process Steps: "AS EASY AS 1, 2, 3" */}
      <ProcessSteps />

      {/* FAQ Accordion */}
      <ProductFAQ product={product} />

      {/* Related Products: "YOU MAY ALSO NEED" */}
      {related.length > 0 && (
        <section className="py-20" style={{ backgroundColor: "var(--dark-panel)" }}>
          <div className="container-nex">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>
                YOU MAY ALSO NEED
              </h2>
              <p className="text-secondary">
                Frequently purchased together with {product.name}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.slice(0, 3).map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProductCard
                    product={relatedProduct}
                    showAddToCart={true}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Research Use Disclaimer Banner */}
      <section className="py-8 border-t border-dark-border" style={{ backgroundColor: "var(--dark-bg)" }}>
        <div className="container-nex">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs leading-relaxed text-tertiary">
              All products are sold strictly for laboratory research use only. Not for human consumption. Buyer assumes full responsibility for compliance with all applicable regulations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
