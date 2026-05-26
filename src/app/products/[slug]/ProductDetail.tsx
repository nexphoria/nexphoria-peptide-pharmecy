"use client";

import { useState } from "react";
import Link from "next/link";
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

// Mechanism Section Component
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
              <div className="w-16 h-1 bg-acid-green mt-6"></div>
            </motion.div>
          </div>

          {/* Right: Feature cards */}
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
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${product.accentColor}20` }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: product.accentColor }}></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {feature}
                    </h3>
                    <p className="text-secondary leading-relaxed text-sm">
                      {/* Extract relevant part of mechanism text for this feature */}
                      {product.mechanism.split('.')[index] || product.mechanism.substring(0, 150) + "..."}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail({ product, related }: Props) {
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

      {/* Hero Section (Split Layout) */}
      <section className="relative">
        <div className="grid lg:grid-cols-[60%_40%] min-h-[600px]">
          {/* Left: Product Info */}
          <div className="relative p-8 lg:p-16 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Category Badge */}
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide border border-dark-border-hover text-secondary rounded-full mb-4">
                {product.category}
              </span>

              {/* Product Name */}
              <h1
                className="text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-4"
                style={{ fontFamily: "var(--font-display)", lineHeight: "0.9" }}
              >
                {product.name}
              </h1>

              {/* Short Description */}
              <p className="text-xl text-secondary mb-8 max-w-lg leading-relaxed">
                {product.tagline}
              </p>

              {/* Research Disclaimer */}
              <div className="flex items-start gap-3 p-4 border border-dark-border rounded-lg" style={{ backgroundColor: "var(--dark-card)" }}>
                <Shield className="w-5 h-5 text-acid-green flex-shrink-0 mt-0.5" />
                <p className="text-sm text-secondary">
                  <strong className="text-primary">Research Use Only:</strong> This product is intended for qualified research use only. Not for human consumption, diagnostic, or therapeutic use.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Product Visual */}
          <div
            className="relative flex items-center justify-center p-8"
            style={{ backgroundColor: "var(--dark-bg)" }}
          >
            {/* Background Pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.02]"
              style={{
                backgroundImage: "url(/dna-pattern.png)",
                backgroundSize: "300px auto",
                backgroundRepeat: "repeat",
                filter: "invert(1)",
              }}
            />

            {/* Accent Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${product.accentColor}15 0%, transparent 70%)`,
              }}
            />

            {/* Large Product Vial */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                height: "400px",
                width: "200px",
                filter: `drop-shadow(0 20px 60px ${product.accentColor}30)`,
              }}
            >
              <ProductVial
                productName={product.name}
                dosage={product.dosages?.[0]?.size || product.size}
                category={product.category}
                accentColor={product.accentColor}
              />
            </motion.div>
          </div>
        </div>

        {/* Buy Box (Floating Right, Inside Hero) */}
        <div className="absolute top-8 right-8 w-80 hidden lg:block">
          <BuyBox product={product} />
        </div>
      </section>

      {/* Mobile Buy Box */}
      <div className="lg:hidden">
        <BuyBox product={product} className="mx-4 -mt-8 relative z-10" />
      </div>

      {/* Spec Grid (4-quadrant specs) */}
      <SpecGrid product={product} />

      {/* Timeline: "WHAT YOU CAN EXPECT" ⭐ KEY FEATURE */}
      <Timeline product={product} />

      {/* Mechanism Section */}
      <MechanismSection product={product} />

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
    </div>
  );
}
