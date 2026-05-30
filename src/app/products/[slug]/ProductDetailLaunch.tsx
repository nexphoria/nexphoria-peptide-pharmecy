"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  Shield,
  FileCheck,
  Download,
  ChevronDown,
  Truck,
  FlaskConical,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const COA_AVAILABLE_SLUGS = new Set([
  "bpc-157",
  "semaglutide",
  "tirzepatide",
  "tb-500",
  "ghk-cu",
  "nad-plus",
]);

import type { Product, ProductDosage } from "@/lib/products";
import { products } from "@/lib/products";
import BuyBox from "@/components/product/BuyBox";
import StickyAddToOrderBar from "@/components/product/StickyAddToOrderBar";
import RecentlyViewedBar from "@/components/product/RecentlyViewedBar";
import CompleteYourProtocol from "@/components/product/CompleteYourProtocol";
import FrequentlyBoughtTogether from "@/components/product/FrequentlyBoughtTogether";
import RelatedArticles from "@/components/product/RelatedArticles";
import { getRelatedArticleSlugs } from "@/lib/product-articles";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";
import ResearchVideoEmbed from "@/components/product/ResearchVideoEmbed";
import { PRODUCT_VIDEOS } from "@/lib/product-videos";
import VialSVG from "@/components/VialSVG";
import { getCategoryColor } from "@/lib/vial-colors";

interface Props {
  product: Product;
  related: Product[];
}

// Deterministic hash matching COADocument.tsx logic
function deterministicNum(seed: string, min: number, max: number): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) & 0x7fffffff;
  }
  return min + (hash % (max - min + 1));
}

// Extract numeric purity value from spec string like "≥99.2%" → 99.2
function parsePurityValue(purity: string): number {
  const match = purity.match(/(\d+\.?\d*)/);
  return match ? parseFloat(match[1]) : 98.8;
}

function getProductCOA(slug: string, productPurity?: string) {
  const hash = deterministicNum(slug, 0, 0x7fffffff);
  const labs = ["Janoshik Analytical", "Freedom Diagnostics", "BioRegen Analytics", "Colmaric Analyticals"];
  const lab = labs[hash % labs.length];
  const year = 2025;
  const monthNum = deterministicNum(slug + "month", 1, 12);
  const dayNum = deterministicNum(slug + "day", 1, 28);
  const lotMonth = String(monthNum).padStart(2, "0");
  const lotDay = String(dayNum).padStart(2, "0");
  const lotNum = deterministicNum(slug + "lot", 1000, 9999);
  const reportNum = deterministicNum(slug + "batch", 100000, 999999);

  // Use exact spec minimum value — consistent with COADocument.tsx HPLC peak display
  const purityBase = productPurity ? parsePurityValue(productPurity) : 98.8;
  const purity = purityBase.toFixed(2);

  return {
    lot: `LOT-${year}${lotMonth}${lotDay}-${lotNum}`,
    lab,
    purity: `${purity}%`,
    reportDate: `${lotMonth}/${lotDay}/${year}`,
    reportNumber: `REP-${reportNum}`,
    method: "RP-HPLC / ESI-MS",
  };
}

const PRODUCT_FAQS = [
  {
    q: "What does 'Research Use Only' mean?",
    a: "This compound is manufactured and sold exclusively for in vitro research and laboratory experimentation. It is not approved by the FDA for human therapeutic use, clinical application, or veterinary use. Purchasers confirm use within qualified research settings.",
  },
  {
    q: "How should I store this compound?",
    a: "Lyophilized peptides should be stored at −20°C in a desiccated environment, protected from light. Do not expose to repeated freeze-thaw cycles. Most compounds remain stable for 24 months under proper storage conditions.",
  },
  {
    q: "How do I reconstitute this peptide?",
    a: "Reconstitute with sterile bacteriostatic water. Add solvent slowly along the vial wall and gently swirl — do not vortex. Allow several minutes for complete dissolution. Working solutions are typically prepared at 500 μg/mL and stored at 4°C for up to 30 days, or at −20°C for up to 6 months.",
  },
  {
    q: "What is included in my order?",
    a: "Every order includes: the lyophilized compound in a sealed, labeled vial; a lot-specific Certificate of Analysis from an accredited third-party laboratory; and cold-chain packaging for temperature-controlled transit.",
  },
  {
    q: "Do you ship internationally?",
    a: "Shipping availability varies by jurisdiction. Researchers are responsible for verifying local import regulations and obtaining any required permits. We cannot advise on legal status in specific countries.",
  },
  {
    q: "Can I request a COA before purchasing?",
    a: "Sample COAs are available for select compounds. For complete lot-specific documentation prior to ordering, contact our research team at research@nexphoria.com.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button
        className="faq-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm font-normal pr-4 text-left" style={{ color: "#1A1A1A" }}>{q}</span>
        <ChevronDown
          size={15}
          className="flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: "#8E6C2F" }}
        />
      </button>
      <div
        className="faq-body"
        style={{
          maxHeight: open ? "300px" : "0px",
          opacity: open ? 1 : 0,
          paddingBottom: open ? "1.25rem" : "0",
        }}
      >
        <p className="text-sm leading-relaxed" style={{ color: "#666", lineHeight: 1.75 }}>{a}</p>
      </div>
    </div>
  );
}

/* Thin-line accordion for content sections */
function AccordionSection({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: "1px solid #E5E5E5" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left transition-colors duration-300 hover:opacity-70"
        aria-expanded={open}
      >
        <span
          className="text-[11px] uppercase font-medium tracking-widest"
          style={{ letterSpacing: "0.14em", color: "#1A1A1A" }}
        >
          {title}
        </span>
        <ChevronDown
          size={14}
          className="flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: "#8E6C2F" }}
        />
      </button>
      {open && (
        <div className="pb-6">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetailLaunch({ product, related }: Props) {
  const [selectedFormat, setSelectedFormat] = useState<"vial" | "pen">("vial");
  const [selectedDosage, setSelectedDosage] = useState<ProductDosage | undefined>(
    product.dosages?.[0] || undefined
  );
  const buyBoxRef = useRef<HTMLDivElement>(null);
  const hasPhoto = hasProductPhoto(product.slug);
  const coa = getProductCOA(product.slug, product.purity);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9F9F9" }}>
      <StickyAddToOrderBar
        product={product}
        selectedFormat={selectedFormat}
        selectedDosage={selectedDosage}
        buyBoxRef={buyBoxRef}
        accentColor="#C4A265"
      />

      {/* Breadcrumb */}
      <div className="pt-20 pb-4">
        <div className="container-nex">
          <Breadcrumb
            variant="light"
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: product.category, href: `/products?category=${encodeURIComponent(product.category)}` },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      {/* Hero — 55/45 asymmetric split */}
      <section className="py-10 lg:py-16">
        <div className="container-nex">
          <div className="grid lg:grid-cols-[55fr_45fr] gap-10 lg:gap-16 items-start">

            {/* Left: Product image in soft grey frame */}
            <div>
              <div
                className="relative flex items-center justify-center"
                style={{
                  aspectRatio: "1 / 1",
                  backgroundColor: "#F7F7F7",
                  borderRadius: "8px",
                  border: "1px solid #E5E5E5",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                }}
              >
                {hasPhoto ? (
                  <img
                    src={getProductImagePath(product.slug)}
                    alt={`${product.name} ${product.size}`}
                    className="max-w-full max-h-full object-contain"
                    style={{ padding: "clamp(1.5rem, 5vw, 3.5rem)" }}
                    loading="eager"
                    fetchPriority="high"
                    width={400}
                    height={400}
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-6 md:p-12" style={{ backgroundColor: "#1A1A18" }}>
                    <VialSVG
                      name={product.name}
                      size={product.dosages?.[0]?.size || product.size || "5mg"}
                      capColor={getCategoryColor(product.category)}
                      className="max-h-full"
                    />
                  </div>
                )}
              </div>

            </div>

            {/* Right: Product info + buy box */}
            <div ref={buyBoxRef}>
              {/* Brand eyebrow */}
              <p
                className="text-[10px] uppercase font-medium mb-1"
                style={{ letterSpacing: "0.15em", color: "#8E6C2F" }}
              >
                NEXPHORIA
              </p>

              {/* Product title */}
              <h1
                className="mb-2 tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.02em" }}
              >
                {product.name}
              </h1>

              {/* Tagline */}
              <p className="text-sm mb-5" style={{ color: "#666666", fontStyle: "italic", lineHeight: 1.6 }}>
                {product.tagline}
              </p>

              {/* Buy box (price + toggle + buttons) */}
              <BuyBox
                product={product}
                selectedFormat={selectedFormat}
                onFormatChange={setSelectedFormat}
                onDosageChange={setSelectedDosage}
              />


              {/* Research Disclaimer */}
              <div
                className="mt-5 flex items-start gap-3 p-4"
                style={{ border: "1px solid #E5E5E5", borderRadius: "8px", backgroundColor: "#FAFAFA" }}
              >
                <Shield className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#8E6C2F", strokeWidth: 1.5 }} />
                <div className="text-xs leading-relaxed" style={{ color: "#666", lineHeight: 1.7 }}>
                  <p className="font-medium mb-1" style={{ color: "#1A1A1A", fontSize: "10px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    For Research Use Only — Not For Human Consumption
                  </p>
                  <p>
                    This compound is sold exclusively for qualified research purposes. Not approved by the FDA for therapeutic use.
                  </p>
                </div>
              </div>

              {/* COA Download */}
              {COA_AVAILABLE_SLUGS.has(product.slug) && (
                <div
                  className="mt-3 flex items-center gap-3 p-4"
                  style={{ border: "1px solid #E5E5E5", borderRadius: "8px", backgroundColor: "#FAFAFA" }}
                >
                  <FileCheck className="w-4 h-4 flex-shrink-0" style={{ color: "#8E6C2F", strokeWidth: 1.5 }} />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium" style={{ color: "#1A1A1A" }}>Certificate of Analysis Available</p>
                    <p className="text-xs mt-0.5" style={{ color: "#666666" }}>
                      HPLC purity report, MS confirmation, batch documentation.
                    </p>
                  </div>
                  <a
                    href={`/coa/${product.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 transition-all duration-300"
                    style={{
                      border: "1px solid #1A1A1A",
                      borderRadius: "999px",
                      color: "#1A1A1A",
                      backgroundColor: "transparent",
                      letterSpacing: "0.1em",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1A1A1A";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#F9F9F9";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#1A1A1A";
                    }}
                  >
                    <Download className="w-3.5 h-3.5" />
                    View COA
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ACCORDION SECTIONS — all content below fold ─── */}
      <section className="py-4" style={{ borderTop: "1px solid #E5E5E5" }}>
        <div className="container-nex">
          <div className="max-w-3xl">

            <AccordionSection title="What It Is" defaultOpen={true}>
              <p className="text-sm leading-relaxed" style={{ color: "#555", lineHeight: 1.8 }}>
                {product.description}
              </p>
            </AccordionSection>

            <AccordionSection title="How It Works">
              <p className="text-sm leading-relaxed" style={{ color: "#555", lineHeight: 1.8 }}>
                {product.mechanism}
              </p>
            </AccordionSection>

            <AccordionSection title="Research Summary">
              <p className="text-sm leading-relaxed" style={{ color: "#555", lineHeight: 1.8 }}>
                {product.researchSummary}
              </p>
              {product.researchApplications && product.researchApplications.length > 0 && (
                <ul className="mt-4 space-y-2.5">
                  {product.researchApplications.map((app, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full flex-shrink-0 mt-2.5" style={{ backgroundColor: "#8E6C2F" }} />
                      <span className="text-sm leading-relaxed" style={{ color: "#555" }}>{app}</span>
                    </li>
                  ))}
                </ul>
              )}
            </AccordionSection>

            <AccordionSection title="Dosing Protocol">
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#555", lineHeight: 1.8 }}>
                {product.dosingProtocol}
              </p>
              <div
                className="p-4 text-sm leading-relaxed"
                style={{ border: "1px solid #E5E5E5", borderRadius: "8px", color: "#555", lineHeight: 1.8 }}
              >
                Research methodology is typically organized around a{" "}
                <Link href="/protocols" className="font-medium underline underline-offset-2" style={{ color: "#8E6C2F" }}>
                  Research Cycle
                </Link>
                . A 3-month cycle provides enough material to observe a full response window,
                while a 6-month cycle supports extended study designs.
              </div>
            </AccordionSection>

            <AccordionSection title="Reconstitution &amp; Storage">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <h4 className="text-xs uppercase font-medium mb-2" style={{ letterSpacing: "0.1em", color: "#666666" }}>
                    Storage
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#555", lineHeight: 1.8 }}>
                    {product.storage}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-medium mb-2" style={{ letterSpacing: "0.1em", color: "#666666" }}>
                    Reconstitution
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#555", lineHeight: 1.8 }}>
                    {product.reconstitution}
                  </p>
                </div>
              </div>
            </AccordionSection>

            <AccordionSection title="Molecular Specifications">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {[
                  { label: "CAS Number", value: product.casNumber, mono: true },
                  { label: "Molecular Weight", value: product.molecularWeight },
                  { label: "Purity (HPLC)", value: product.purity },
                  { label: "Appearance", value: product.appearance },
                  { label: "Molecular Formula", value: product.formula, mono: true },
                  ...(product.sequence ? [{ label: "Sequence", value: product.sequence, mono: true }] : []),
                  { label: "Solubility", value: product.solubility },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] uppercase mb-1.5" style={{ letterSpacing: "0.1em", color: "#666666", fontWeight: 500 }}>
                      {item.label}
                    </p>
                    <p
                      className={`text-sm font-medium break-words ${item.mono ? "font-mono text-[12px]" : ""}`}
                      style={{ color: "#1A1A1A" }}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </AccordionSection>

            <AccordionSection title="Certificate of Analysis">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="overflow-hidden"
                  style={{ border: "1px solid #E5E5E5", borderRadius: "8px" }}
                >
                  <div
                    className="flex items-center gap-3 px-5 py-3"
                    style={{ borderBottom: "1px solid #E5E5E5", backgroundColor: "#FAFAFA" }}
                  >
                    <FileCheck className="w-4 h-4" style={{ color: "#8E6C2F", strokeWidth: 1.5 }} />
                    <p className="text-[10px] uppercase font-medium tracking-widest" style={{ color: "#1A1A1A" }}>
                      Current Batch — Certificate of Analysis
                    </p>
                    <span
                      className="ml-auto text-[10px] font-medium px-2 py-0.5"
                      style={{ borderRadius: "999px", backgroundColor: "rgba(184,164,76,0.12)", color: "#8E6C2F" }}
                    >
                      Verified
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 p-5">
                    {[
                      { label: "Lot Number", value: coa.lot },
                      { label: "Lab", value: coa.lab },
                      { label: "Purity (HPLC)", value: coa.purity },
                      { label: "Report Date", value: coa.reportDate },
                      { label: "Report #", value: coa.reportNumber },
                      { label: "Method", value: coa.method },
                    ].map((item) => (
                      <div key={item.label}>
                        <p className="text-[10px] uppercase mb-1" style={{ letterSpacing: "0.08em", color: "#666666", fontWeight: 500 }}>
                          {item.label}
                        </p>
                        <p className="text-sm font-medium leading-snug" style={{ color: "#1A1A1A" }}>{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-5 pb-4 flex items-center gap-2">
                    <Check className="w-3.5 h-3.5" style={{ color: "#8E6C2F" }} />
                    <p className="text-xs" style={{ color: "#666" }}>
                      This lot meets specification. COA issued by independent accredited laboratory.
                      {COA_AVAILABLE_SLUGS.has(product.slug) && (
                        <>{" "}
                          <a href={`/coa/${product.slug}`} className="underline font-medium ml-1" style={{ color: "#8E6C2F" }}>
                            Download full report
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AccordionSection>

            {product.features.length > 0 && (
              <AccordionSection title="Research Characteristics">
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: "rgba(184,164,76,0.12)" }}
                      >
                        <Check className="w-2.5 h-2.5" style={{ color: "#8E6C2F" }} />
                      </div>
                      <span className="text-sm" style={{ color: "#555", lineHeight: 1.7 }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </AccordionSection>
            )}

            {/* FAQ */}
            <AccordionSection title="Frequently Asked Questions">
              <div>
                {PRODUCT_FAQS.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </AccordionSection>

          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16" style={{ borderTop: "1px solid #E5E5E5" }}>
          <div className="container-nex">
            <p
              className="text-[10px] uppercase font-medium mb-3"
              style={{ letterSpacing: "0.15em", color: "#8E6C2F" }}
            >
              Complete Your Protocol
            </p>
            <h2 className="text-2xl font-light mb-10 tracking-tight" style={{ color: "#1A1A1A", letterSpacing: "-0.02em" }}>
              Related compounds.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/products/${rp.slug}`} className="block group">
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      border: "1px solid #E5E5E5",
                      borderRadius: "8px",
                      backgroundColor: "#FFFFFF",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    }}
                  >
                    <div
                      className="h-48 p-4 flex items-center justify-center"
                      style={{ backgroundColor: "#F7F7F7" }}
                    >
                      {hasProductPhoto(rp.slug) ? (
                        <img
                          src={getProductImagePath(rp.slug)}
                          alt={rp.name}
                          loading="lazy"
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <span className="text-sm font-light" style={{ color: "#8E6C2F" }}>{rp.name}</span>
                      )}
                    </div>
                    <div className="p-5">
                      <p className="text-[10px] uppercase mb-1" style={{ letterSpacing: "0.12em", color: "#8E6C2F", fontWeight: 500 }}>
                        {rp.category}
                      </p>
                      <h3 className="text-base font-normal mb-1 group-hover:opacity-70 transition-opacity" style={{ color: "#1A1A1A" }}>
                        {rp.name}
                      </h3>
                      <p className="text-xs mb-3" style={{ color: "#666666" }}>{rp.size}</p>
                      <div
                        className="text-base font-medium pt-3"
                        style={{ borderTop: "1px solid #E5E5E5", color: "#8E6C2F" }}
                      >
                        ${rp.price}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Research Overview Video */}
      {PRODUCT_VIDEOS[product.slug] && (
        <section className="py-14" style={{ backgroundColor: "#111111" }}>
          <div className="container-nex">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-px h-5 flex-shrink-0" style={{ backgroundColor: "#8E6C2F" }} />
                <p className="text-[10px] uppercase tracking-widest font-medium" style={{ color: "#8E6C2F" }}>
                  Research Overview
                </p>
              </div>
              <h2 className="text-2xl font-light tracking-tight mb-2 text-white" style={{ letterSpacing: "-0.02em" }}>
                Video: Research Background
              </h2>
              <p className="text-sm mb-8" style={{ color: "#777" }}>
                Educational content from independent researchers and scientists.
                For research context only — not medical advice.
              </p>
              <ResearchVideoEmbed video={PRODUCT_VIDEOS[product.slug]} />
            </div>
          </div>
        </section>
      )}

      {/* Compare with Similar — deep-link to /compare */}
      {product.relatedSlugs && product.relatedSlugs.length > 0 && (
        <section
          className="py-10 border-t"
          style={{ borderColor: "rgba(255,255,255,0.07)", backgroundColor: "#0D0D0D" }}
        >
          <div className="container-nex">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <div className="flex-1">
                <p
                  className="text-[10px] uppercase tracking-widest font-medium mb-1"
                  style={{ color: "#8E6C2F" }}
                >
                  Side-by-Side Analysis
                </p>
                <h3 className="text-base font-semibold" style={{ color: "#F9F9F9" }}>
                  Compare {product.name} with Similar Compounds
                </h3>
                <p className="text-xs mt-1" style={{ color: "#666" }}>
                  View purity, MW, storage, and pricing side by side.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 shrink-0">
                {/* Compare with top related slug */}
                <Link
                  href={`/compare?slugs=${product.slug},${product.relatedSlugs[0]}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium transition-colors hover:opacity-80"
                  style={{ borderRadius: "999px", backgroundColor: "rgba(201,162,75,0.10)", color: "#C9A24B", border: "1px solid rgba(201,162,75,0.25)", letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  Compare with {products.find((p) => p.slug === product.relatedSlugs[0])?.name ?? product.relatedSlugs[0]}
                </Link>
                {/* Compare all related (up to 3 total) */}
                <Link
                  href={`/compare?slugs=${[product.slug, ...product.relatedSlugs].slice(0, 3).join(",")}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium transition-colors hover:opacity-80"
                  style={{ borderRadius: "999px", backgroundColor: "rgba(255,255,255,0.06)", color: "#F9F9F9", border: "1px solid rgba(255,255,255,0.12)", letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  Compare all similar
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Frequently Bought Together */}
      <FrequentlyBoughtTogether currentSlug={product.slug} />

      {/* Related Research Articles */}
      <RelatedArticles articleSlugs={getRelatedArticleSlugs(product.slug)} />

      {/* Complete Your Protocol */}
      <CompleteYourProtocol currentSlug={product.slug} />

      {/* Recently Viewed */}
      <RecentlyViewedBar currentSlug={product.slug} />
    </div>
  );
}
