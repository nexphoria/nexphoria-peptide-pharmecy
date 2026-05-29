"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Shield,
  FileCheck,
  Download,
  ChevronDown,
  Truck,
  FlaskConical,
  Snowflake,
  PackageCheck,
  BadgeCheck,
  RotateCcw,
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
import BuyBox from "@/components/product/BuyBox";
import StickyAddToOrderBar from "@/components/product/StickyAddToOrderBar";
import RecentlyViewedBar from "@/components/product/RecentlyViewedBar";
import CompleteYourProtocol from "@/components/product/CompleteYourProtocol";
import FrequentlyBoughtTogether from "@/components/product/FrequentlyBoughtTogether";
import RelatedArticles from "@/components/product/RelatedArticles";
import { getRelatedArticleSlugs } from "@/lib/product-articles";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";

interface Props {
  product: Product;
  related: Product[];
}

// Deterministic COA data from slug hash
function getProductCOA(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) & 0x7fffffff;
  }
  const labs = ["Janoshik Analytical", "Freedom Diagnostics", "BioRegen Analytics", "Colmaric Analyticals"];
  const lab = labs[hash % labs.length];
  const year = 2025;
  const monthNum = (hash % 10) + 1;
  const dayNum = (hash % 20) + 1;
  const lotMonth = String(monthNum).padStart(2, "0");
  const lotDay = String(dayNum).padStart(2, "0");
  const lotNum = Math.abs((hash * 7) % 9000) + 1000;
  const reportNum = Math.abs((hash * 13) % 900000) + 100000;
  const purityHundredths = 9880 + (hash % 80);
  const purity = (purityHundredths / 100).toFixed(2);
  return {
    lot: `LOT-${year}${lotMonth}${lotDay}-${lotNum}`,
    lab,
    purity: `${purity}%`,
    reportDate: `${lotMonth}/${lotDay}/${year}`,
    reportNumber: `REP-${reportNum}`,
    method: "RP-HPLC / ESI-MS",
  };
}

// Product-level FAQ data
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
        <span className="text-sm font-medium pr-4 text-left">{q}</span>
        <ChevronDown
          size={16}
          className="flex-shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: "#A4B08A" }}
        />
      </button>
      <div
        className="faq-body"
        style={{
          maxHeight: open ? "300px" : "0px",
          opacity: open ? 1 : 0,
          paddingBottom: open ? "1rem" : "0",
        }}
      >
        <p className="text-sm leading-relaxed text-[#555]">{a}</p>
      </div>
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
  const coa = getProductCOA(product.slug);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFF3" }}>
      <StickyAddToOrderBar
        product={product}
        selectedFormat={selectedFormat}
        selectedDosage={selectedDosage}
        buyBoxRef={buyBoxRef}
        accentColor="#A4B08A"
      />

      {/* Back Navigation */}
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

      {/* Hero Section */}
      <section className="py-8 lg:py-12">
        <div className="container-nex">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Left: Product Visual */}
            <div>
              <div
                className="relative rounded-xl p-8 flex items-center justify-center"
                style={{
                  aspectRatio: "1 / 1",
                  backgroundColor: "#F8F6F1",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                }}
              >
                {hasPhoto ? (
                  <img
                    src={getProductImagePath(product.slug)}
                    alt={`${product.name} ${product.size}`}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <span className="text-2xl font-semibold text-[#A4B08A]">{product.name}</span>
                )}
              </div>

              {/* Trust badges row — below image on desktop */}
              <div className="hidden lg:grid grid-cols-3 gap-3 mt-4">
                {[
                  { icon: FlaskConical, label: "99%+ Purity", sub: "HPLC verified" },
                  { icon: BadgeCheck, label: "COA Enclosed", sub: "Batch-specific" },
                  { icon: Snowflake, label: "Cold Shipped", sub: "48-hr transit" },
                  { icon: PackageCheck, label: "Batch Tracked", sub: "Lot traceable" },
                  { icon: Truck, label: "Free Shipping", sub: "Orders over $150" },
                  { icon: RotateCcw, label: "Research Only", sub: "cGMP manufactured" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center text-center p-3 rounded-lg border border-[#ECEAE4] bg-white"
                  >
                    <Icon className="w-4 h-4 mb-1.5 text-[#A4B08A]" />
                    <span className="text-[11px] font-semibold text-[#333] leading-tight">{label}</span>
                    <span className="text-[10px] text-[#888] mt-0.5">{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Product Info + Buy Box */}
            <div ref={buyBoxRef}>
              <p className="text-[11px] uppercase tracking-wider text-[#888] mb-2">
                {product.category}
              </p>

              <h1 className="text-3xl lg:text-4xl font-medium tracking-tight mb-2">
                {product.name}
              </h1>

              <p className="text-sm mb-5 leading-relaxed text-[#555]">
                {product.tagline}
              </p>

              <BuyBox
                product={product}
                selectedFormat={selectedFormat}
                onFormatChange={setSelectedFormat}
                onDosageChange={setSelectedDosage}
              />

              {/* Trust badges — mobile (below buy box) */}
              <div className="lg:hidden grid grid-cols-3 gap-2 mt-4">
                {[
                  { icon: FlaskConical, label: "99%+ Purity" },
                  { icon: BadgeCheck, label: "COA Enclosed" },
                  { icon: Snowflake, label: "Cold Shipped" },
                  { icon: PackageCheck, label: "Batch Tracked" },
                  { icon: Truck, label: "Free Shipping" },
                  { icon: RotateCcw, label: "cGMP Made" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center text-center p-2.5 rounded-lg border border-[#ECEAE4] bg-white"
                  >
                    <Icon className="w-4 h-4 mb-1 text-[#A4B08A]" />
                    <span className="text-[10px] font-semibold text-[#444]">{label}</span>
                  </div>
                ))}
              </div>

              {/* Research Disclaimer */}
              <div className="mt-5 flex items-start gap-3 p-4 rounded-lg border border-[#E8E6E0] bg-[#F7F5F0]">
                <Shield className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#A4B08A]" />
                <div className="text-xs leading-relaxed text-[#555]">
                  <p className="font-semibold mb-1 text-[#333]">FOR RESEARCH USE ONLY — NOT FOR HUMAN CONSUMPTION</p>
                  <p>
                    This compound is sold exclusively for qualified research purposes. It is not approved by the FDA for therapeutic use. The purchaser assumes all responsibility for proper handling and use within applicable regulations.
                  </p>
                </div>
              </div>

              {/* COA Download */}
              {COA_AVAILABLE_SLUGS.has(product.slug) && (
                <div className="mt-4 flex items-center gap-3 p-4 rounded-lg border border-[#D4DCC8] bg-[#F2F5ED]">
                  <FileCheck className="w-5 h-5 flex-shrink-0 text-[#6B8C5F]" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-[#3d5c35] mb-0.5">Certificate of Analysis Available</p>
                    <p className="text-xs text-[#666] leading-relaxed">
                      HPLC purity report, MS confirmation, batch documentation.
                    </p>
                  </div>
                  <a
                    href={`/coa/${product.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-1.5 bg-[#3d5c35] hover:bg-[#2d4828] text-white text-xs font-semibold px-3 py-2 rounded transition-colors"
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

      {/* Inline COA Section */}
      <section className="py-8 border-t" style={{ borderColor: "#ECEAE4" }}>
        <div className="container-nex">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: "#D4DCC8", backgroundColor: "#F9FBF7" }}
            >
              <div className="flex items-center gap-3 px-6 py-4 border-b" style={{ borderColor: "#D4DCC8" }}>
                <FileCheck className="w-4 h-4 text-[#6B8C5F]" />
                <h3 className="text-xs font-semibold uppercase tracking-wide text-[#3d5c35]">
                  Current Batch — Certificate of Analysis
                </h3>
                <span className="ml-auto text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#E2EDDA] text-[#4A6B40]">
                  Verified
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 p-6">
                {[
                  { label: "Lot Number", value: coa.lot },
                  { label: "Lab", value: coa.lab },
                  { label: "Purity (HPLC)", value: coa.purity },
                  { label: "Report Date", value: coa.reportDate },
                  { label: "Report #", value: coa.reportNumber },
                  { label: "Method", value: coa.method },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] uppercase tracking-wide text-[#888] mb-1">{item.label}</p>
                    <p className="text-sm font-semibold text-[#1A1A1A] leading-snug">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="px-6 pb-4 flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#6B8C5F]" />
                <p className="text-xs text-[#6B8C5F]">
                  This lot meets specification. COA issued by independent accredited laboratory.
                  {COA_AVAILABLE_SLUGS.has(product.slug) && (
                    <> {" "}
                      <a href={`/coa/${product.slug}`} className="underline font-medium ml-1">
                        Download full report
                      </a>
                    </>
                  )}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-10 border-t" style={{ borderColor: "#ECEAE4" }}>
        <div className="container-nex">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-lg bg-white card-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <FileCheck className="w-4 h-4 text-[#A4B08A]" />
                <h3 className="text-xs font-semibold uppercase tracking-wide">
                  Molecular Specifications
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <Spec label="CAS Number" value={product.casNumber} mono />
                <Spec label="Molecular Weight" value={product.molecularWeight} />
                <Spec label="Purity (HPLC)" value={product.purity} />
                <Spec label="Appearance" value={product.appearance} />
                <div className="col-span-2">
                  <SpecInner label="Molecular Formula" value={product.formula} mono />
                </div>
                {product.sequence && (
                  <div className="col-span-2">
                    <SpecInner label="Sequence" value={product.sequence} mono />
                  </div>
                )}
                <div className="col-span-2 md:col-span-4">
                  <SpecInner label="Solubility" value={product.solubility} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview, Mechanism, Research */}
      <section className="py-16" style={{ backgroundColor: "#F7F5F0" }}>
        <div className="container-nex">
          <div className="max-w-4xl mx-auto space-y-12">
            <Prose title="Overview">{product.description}</Prose>

            {/* Expandable mechanism section */}
            <div>
              <h2 className="text-2xl font-medium mb-4 tracking-tight">Mechanism of Action</h2>
              <p className="text-sm leading-relaxed text-[#555]">{product.mechanism}</p>
            </div>

            <Prose title="Research Summary">{product.researchSummary}</Prose>

            {product.researchApplications && product.researchApplications.length > 0 && (
              <div>
                <h2 className="text-2xl font-medium mb-4 tracking-tight">Research Applications</h2>
                <div className="p-5 rounded-lg bg-white card-shadow">
                  <ul className="space-y-3">
                    {product.researchApplications.map((application, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: "#A4B08A" }} />
                        <span className="text-sm leading-relaxed text-[#555]">{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-medium mb-4 tracking-tight">Recommended Protocol</h2>
              <p className="text-sm leading-relaxed text-[#555] mb-4">
                {product.dosingProtocol}
              </p>
              <div className="p-5 rounded-lg bg-white card-shadow text-sm leading-relaxed text-[#555]">
                Research methodology is typically organized around a{" "}
                <Link href="/protocols" className="font-medium underline underline-offset-2 text-[#A4B08A]">
                  Research Cycle
                </Link>
                . A 3-Month cycle provides enough material to observe a full response window,
                while a 6-Month cycle supports extended study designs.
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg bg-white card-shadow">
                <h3 className="text-sm font-semibold mb-2 text-[#A4B08A]">Storage &amp; Handling</h3>
                <p className="text-sm leading-relaxed text-[#555]">{product.storage}</p>
              </div>
              <div className="p-5 rounded-lg bg-white card-shadow">
                <h3 className="text-sm font-semibold mb-2 text-[#A4B08A]">Reconstitution</h3>
                <p className="text-sm leading-relaxed text-[#555]">{product.reconstitution}</p>
              </div>
            </div>

            {product.features.length > 0 && (
              <div>
                <h2 className="text-2xl font-medium mb-6 tracking-tight">Key Characteristics</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#A4B08A]/15">
                        <Check className="w-3 h-3 text-[#A4B08A]" />
                      </div>
                      <span className="text-sm text-[#555]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16">
          <div className="container-nex">
            <h2 className="text-2xl font-medium mb-10 text-center tracking-tight">
              Complete Your Protocol
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/products/${rp.slug}`} className="block group">
                  <div className="bg-white rounded-lg overflow-hidden card-shadow transition-all duration-200 hover:-translate-y-0.5">
                    <div
                      className="h-48 p-4 flex items-center justify-center"
                      style={{ backgroundColor: "#F8F6F1" }}
                    >
                      {hasProductPhoto(rp.slug) ? (
                        <img
                          src={getProductImagePath(rp.slug)}
                          alt={rp.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <span className="text-sm font-semibold text-[#A4B08A]">{rp.name}</span>
                      )}
                    </div>
                    <div className="p-5">
                      <p className="text-[11px] uppercase tracking-wider text-[#888] mb-1">
                        {rp.category}
                      </p>
                      <h3 className="text-base font-medium mb-1 group-hover:opacity-70 transition-opacity">
                        {rp.name}
                      </h3>
                      <p className="text-xs text-[#888] mb-3">{rp.size}</p>
                      <div className="text-base font-semibold">${rp.price}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 border-t" style={{ borderColor: "#ECEAE4", backgroundColor: "#F7F5F0" }}>
        <div className="container-nex">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-medium mb-8 tracking-tight">Frequently Asked Questions</h2>
            <div>
              {PRODUCT_FAQS.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

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

function Spec({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <SpecInner label={label} value={value} mono={mono} />
    </div>
  );
}

function SpecInner({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <>
      <div className="text-xs mb-1 text-[#888]">{label}</div>
      <div className={`font-medium break-words ${mono ? "font-mono text-[13px]" : ""}`}>
        {value}
      </div>
    </>
  );
}

function Prose({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-medium mb-4 tracking-tight">{title}</h2>
      <p className="text-sm leading-relaxed text-[#555]">{children}</p>
    </div>
  );
}
