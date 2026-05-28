"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  ShoppingBag,
  Shield,
  Truck,
  Clock,
  Award,
  FileCheck,
} from "lucide-react";
import type { LaunchProduct } from "@/lib/products-launch";
import ProductVial from "@/components/ProductVial";

interface Props {
  product: LaunchProduct;
  related: LaunchProduct[];
}

export default function ProductDetailLaunch({ product, related }: Props) {
  const [selectedQty, setSelectedQty] = useState<1 | 3 | 6>(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [isSubscription, setIsSubscription] = useState(false);
  const [subscriptionCadence, setSubscriptionCadence] = useState<30 | 60 | 90>(30);

  const selectedPricing = product.volumePricing.find((p) => p.qty === selectedQty);

  // Calculate subscription discount (15% off)
  const subscriptionDiscount = 0.15;
  const finalPrice = selectedPricing?.totalPrice || 0;
  const subscriptionPrice = isSubscription ? finalPrice * (1 - subscriptionDiscount) : finalPrice;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Back Navigation */}
      <div className="pt-20 pb-4 border-b" style={{ borderColor: "#D8D4CC" }}>
        <div className="container-nex">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm hover:text-near-black transition-colors"
            style={{ color: "#8A8075" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container-nex">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Product Image */}
            <div>
              <div
                className="relative aspect-square rounded-2xl overflow-hidden"
                style={{ backgroundColor: "#F7F4EE" }}
              >
                {/* Molecular structure subtle bg pattern */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: "60px 60px",
                  }}
                />
                {/* Product Vial */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="w-full max-w-[280px] h-full max-h-[520px]">
                    <ProductVial
                      productName={product.name}
                      dosage={product.dosage}
                      category={product.category}
                    />
                  </div>
                </div>
              </div>

              {/* COA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 p-6 rounded-lg border"
                style={{ backgroundColor: "#F7F4EE", borderColor: "#D8D4CC" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <FileCheck className="w-5 h-5" style={{ color: "#A4B08A" }} />
                  <h3
                    className="text-sm font-bold uppercase tracking-wide"
                    style={{ color: "#3A3A3A" }}
                  >
                    Certificate of Analysis
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-xs mb-1" style={{ color: "#8A8075" }}>
                      Batch Number
                    </div>
                    <div className="font-mono font-semibold" style={{ color: "#3A3A3A" }}>
                      {product.coa.batchNumber}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs mb-1" style={{ color: "#8A8075" }}>
                      Report Number
                    </div>
                    <div className="font-mono font-semibold" style={{ color: "#3A3A3A" }}>
                      {product.coa.reportNumber}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs mb-1" style={{ color: "#8A8075" }}>
                      Purity (HPLC)
                    </div>
                    <div className="font-semibold" style={{ color: "#A4B08A" }}>
                      {product.coa.purityPercent}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs mb-1" style={{ color: "#8A8075" }}>
                      Date Tested
                    </div>
                    <div className="font-semibold" style={{ color: "#3A3A3A" }}>
                      {new Date(product.coa.dateTested).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Product Info + Buy Box */}
            <div>
              {/* Category Badge */}
              <span
                className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full mb-4"
                style={{ backgroundColor: "#A4B08A20", color: "#A4B08A" }}
              >
                {product.category}
              </span>

              {/* Product Name */}
              <h1
                className="text-4xl lg:text-5xl font-bold mb-4"
                style={{ color: "#000000", fontFamily: "var(--font-display)" }}
              >
                {product.name}
              </h1>

              {/* Dosage */}
              <div className="text-xl mb-4" style={{ color: "#8A8075" }}>
                {product.dosage}
              </div>

              {/* Tagline */}
              <p className="text-lg mb-8 leading-relaxed" style={{ color: "#3A3A3A" }}>
                {product.tagline}
              </p>

              {/* Dosage Selector (Pill Buttons) */}
              <div className="mb-6">
                <label className="text-sm font-semibold mb-3 block" style={{ color: "#3A3A3A" }}>
                  SELECT QUANTITY
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.volumePricing.map((pricing) => (
                    <button
                      key={pricing.qty}
                      onClick={() => setSelectedQty(pricing.qty)}
                      className={`flex-1 min-w-[140px] px-4 py-4 rounded-lg border-2 transition-all ${
                        selectedQty === pricing.qty
                          ? "border-[#A4B08A] bg-[#A4B08A10]"
                          : "border-[#D8D4CC] hover:border-[#A4B08A50]"
                      }`}
                    >
                      <div className="text-sm font-bold mb-1" style={{ color: "#3A3A3A" }}>
                        {pricing.label}
                      </div>
                      <div className="text-lg font-bold" style={{ color: "#A4B08A" }}>
                        ${pricing.pricePerUnit}
                        {pricing.qty > 1 && <span className="text-sm">/each</span>}
                      </div>
                      {pricing.qty > 1 && (
                        <div className="text-xs mt-1" style={{ color: "#8A8075" }}>
                          Total: ${pricing.totalPrice}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subscription Toggle */}
              <div className="mb-6">
                <label className="text-sm font-semibold mb-3 block" style={{ color: "#3A3A3A" }}>
                  PURCHASE TYPE
                </label>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button
                    onClick={() => setIsSubscription(false)}
                    className={`px-4 py-3 rounded-lg border-2 transition-all ${
                      !isSubscription
                        ? "border-[#A4B08A] bg-[#A4B08A10]"
                        : "border-[#D8D4CC] hover:border-[#A4B08A50]"
                    }`}
                  >
                    <div className="text-sm font-bold" style={{ color: "#3A3A3A" }}>
                      One-time
                    </div>
                  </button>
                  <button
                    onClick={() => setIsSubscription(true)}
                    className={`px-4 py-3 rounded-lg border-2 transition-all ${
                      isSubscription
                        ? "border-[#A4B08A] bg-[#A4B08A10]"
                        : "border-[#D8D4CC] hover:border-[#A4B08A50]"
                    }`}
                  >
                    <div className="text-sm font-bold mb-1" style={{ color: "#3A3A3A" }}>
                      Subscribe
                    </div>
                    <div className="text-xs" style={{ color: "#A4B08A" }}>
                      Save 15%
                    </div>
                  </button>
                </div>

                {/* Cadence Selector (only show when subscription is selected) */}
                <AnimatePresence>
                  {isSubscription && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <label className="text-xs font-semibold mb-2 block" style={{ color: "#8A8075" }}>
                        DELIVERY FREQUENCY
                      </label>
                      <div className="flex gap-2">
                        {[30, 60, 90].map((days) => (
                          <button
                            key={days}
                            onClick={() => setSubscriptionCadence(days as 30 | 60 | 90)}
                            className={`flex-1 px-3 py-2 rounded-lg border transition-all ${
                              subscriptionCadence === days
                                ? "border-[#A4B08A] bg-[#A4B08A10]"
                                : "border-[#D8D4CC] hover:border-[#A4B08A50]"
                            }`}
                          >
                            <div className="text-xs font-bold" style={{ color: "#3A3A3A" }}>
                              {days} days
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Price Display */}
              <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: "#F7F4EE" }}>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-sm font-semibold" style={{ color: "#8A8075" }}>
                    TOTAL PRICE
                  </span>
                  <div className="flex items-baseline gap-2">
                    {isSubscription && (
                      <div className="text-lg line-through" style={{ color: "#8A8075" }}>
                        ${finalPrice.toFixed(0)}
                      </div>
                    )}
                    <div className="text-3xl font-bold" style={{ color: "#000000" }}>
                      ${subscriptionPrice.toFixed(0)}
                    </div>
                  </div>
                </div>
                {selectedQty > 1 && (
                  <div className="text-xs mb-1" style={{ color: "#8A8075" }}>
                    {selectedQty} vials × ${selectedPricing?.pricePerUnit} each
                  </div>
                )}
                {isSubscription && (
                  <div className="text-xs font-semibold" style={{ color: "#A4B08A" }}>
                    Subscription saves ${(finalPrice * subscriptionDiscount).toFixed(0)} (15% off) • Delivered every {subscriptionCadence} days
                  </div>
                )}
              </div>

              {/* Add to Order Button */}
              <button
                className="w-full py-4 rounded-lg font-bold uppercase tracking-wide text-sm transition-opacity hover:opacity-90 mb-8"
                style={{ backgroundColor: "#A4B08A", color: "#000000" }}
              >
                Add to Order
              </button>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Shield, label: "Money Back" },
                  { icon: Truck, label: "Free Ship $150+" },
                  { icon: Clock, label: "2-Day Ship" },
                  { icon: Award, label: "3rd Party Tested" },
                  { icon: FileCheck, label: "Batch Tracked" },
                ].map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg border"
                    style={{ borderColor: "#D8D4CC" }}
                  >
                    <badge.icon className="w-4 h-4 flex-shrink-0" style={{ color: "#A4B08A" }} />
                    <span className="text-xs font-medium" style={{ color: "#3A3A3A" }}>
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Research Disclaimer */}
              <div
                className="flex items-start gap-3 p-4 rounded-lg border"
                style={{ backgroundColor: "#FFFFF3", borderColor: "#D8D4CC" }}
              >
                <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#A4B08A" }} />
                <p className="text-xs leading-relaxed" style={{ color: "#3A3A3A" }}>
                  <strong>Research Use Only:</strong> This product is intended for qualified
                  research use only. Not for human consumption, diagnostic, or therapeutic use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expandable Accordion Section */}
      <section className="py-16" style={{ backgroundColor: "#F7F4EE" }}>
        <div className="container-nex">
          <div className="max-w-4xl mx-auto">
            {/* About This Peptide */}
            <AccordionItem
              title="About This Peptide"
              isOpen={openAccordion === "about"}
              onToggle={() => setOpenAccordion(openAccordion === "about" ? null : "about")}
            >
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#3A3A3A" }}>
                <p>{product.description}</p>
                <div className="grid grid-cols-2 gap-4 p-4 rounded-lg" style={{ backgroundColor: "#FFFFFF" }}>
                  <div>
                    <div className="text-xs mb-1" style={{ color: "#8A8075" }}>
                      CAS Number
                    </div>
                    <div className="font-mono font-semibold">{product.casNumber}</div>
                  </div>
                  <div>
                    <div className="text-xs mb-1" style={{ color: "#8A8075" }}>
                      Molecular Weight
                    </div>
                    <div className="font-semibold">{product.molecularWeight}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-xs mb-1" style={{ color: "#8A8075" }}>
                      Molecular Formula
                    </div>
                    <div className="font-mono font-semibold">{product.formula}</div>
                  </div>
                  <div>
                    <div className="text-xs mb-1" style={{ color: "#8A8075" }}>
                      Purity
                    </div>
                    <div className="font-semibold" style={{ color: "#A4B08A" }}>
                      {product.purity}
                    </div>
                  </div>
                </div>
              </div>
            </AccordionItem>

            {/* Research Applications */}
            <AccordionItem
              title="Research Applications"
              isOpen={openAccordion === "research"}
              onToggle={() => setOpenAccordion(openAccordion === "research" ? null : "research")}
            >
              <div className="space-y-3">
                {product.researchApplications.map((app, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "#A4B08A20" }}
                    >
                      <Check className="w-3 h-3" style={{ color: "#A4B08A" }} />
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#3A3A3A" }}>
                      {app}
                    </p>
                  </div>
                ))}
              </div>
            </AccordionItem>

            {/* Storage */}
            <AccordionItem
              title="Storage & Reconstitution"
              isOpen={openAccordion === "storage"}
              onToggle={() => setOpenAccordion(openAccordion === "storage" ? null : "storage")}
            >
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#3A3A3A" }}>
                <div>
                  <div className="font-semibold mb-2" style={{ color: "#A4B08A" }}>
                    Storage Requirements
                  </div>
                  <p>{product.storage}</p>
                </div>
                <div>
                  <div className="font-semibold mb-2" style={{ color: "#A4B08A" }}>
                    Reconstitution Protocol
                  </div>
                  <p>{product.reconstitution}</p>
                </div>
              </div>
            </AccordionItem>

            {/* FAQ */}
            <AccordionItem
              title="Frequently Asked Questions"
              isOpen={openAccordion === "faq"}
              onToggle={() => setOpenAccordion(openAccordion === "faq" ? null : "faq")}
            >
              <div className="space-y-6">
                {product.faq.map((item, index) => (
                  <div key={index}>
                    <div className="font-semibold mb-2" style={{ color: "#A4B08A" }}>
                      {item.question}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#3A3A3A" }}>
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </AccordionItem>
          </div>
        </div>
      </section>

      {/* Frequently Researched Together */}
      {related.length > 0 && (
        <section className="py-16">
          <div className="container-nex">
            <h2
              className="text-2xl lg:text-3xl font-bold mb-12 text-center"
              style={{ color: "#000000", fontFamily: "var(--font-display)" }}
            >
              Frequently Researched Together
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((relatedProduct) => (
                <Link
                  key={relatedProduct.slug}
                  href={`/products/${relatedProduct.slug}`}
                  className="block group"
                >
                  <div
                    className="p-6 rounded-xl border-2 transition-all hover:border-[#A4B08A]"
                    style={{ borderColor: "#D8D4CC", backgroundColor: "#FFFFFF" }}
                  >
                    {/* Product vial thumbnail */}
                    <div
                      className="aspect-square rounded-lg mb-4 flex items-center justify-center p-8"
                      style={{ backgroundColor: "#F7F4EE" }}
                    >
                      <ProductVial
                        productName={relatedProduct.name}
                        dosage={relatedProduct.dosage}
                        category={relatedProduct.category}
                      />
                    </div>
                    <div className="text-xs mb-2" style={{ color: "#8A8075" }}>
                      {relatedProduct.category}
                    </div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: "#000000", fontFamily: "var(--font-display)" }}
                    >
                      {relatedProduct.name}
                    </h3>
                    <p className="text-xs mb-4 leading-relaxed" style={{ color: "#8A8075" }}>
                      {relatedProduct.dosage} • {relatedProduct.purity}
                    </p>
                    <div className="text-xl font-bold" style={{ color: "#A4B08A" }}>
                      ${relatedProduct.basePrice}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Disclaimer Footer */}
      <section className="py-8 border-t" style={{ borderColor: "#D8D4CC", backgroundColor: "#1A1A18" }}>
        <div className="container-nex">
          <p className="text-xs text-center leading-relaxed" style={{ color: "#8A8075" }}>
            All products are sold strictly for laboratory research use only. Not for human
            consumption. Buyer assumes full responsibility for compliance with all applicable
            regulations.
          </p>
        </div>
      </section>
    </div>
  );
}

// Accordion Item Component
interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function AccordionItem({ title, isOpen, onToggle, children }: AccordionItemProps) {
  return (
    <div className="border-b" style={{ borderColor: "#D8D4CC" }}>
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
      >
        <h3 className="text-lg font-bold" style={{ color: "#000000" }}>
          {title}
        </h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5" style={{ color: "#8A8075" }} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
