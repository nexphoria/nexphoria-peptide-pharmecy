"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Shield, FileCheck, Download } from "lucide-react";
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
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";

interface Props {
  product: Product;
  related: Product[];
}

export default function ProductDetailLaunch({ product, related }: Props) {
  const [selectedFormat, setSelectedFormat] = useState<"vial" | "pen">("vial");
  const [selectedDosage, setSelectedDosage] = useState<ProductDosage | undefined>(
    product.dosages?.[0] || undefined
  );
  const buyBoxRef = useRef<HTMLDivElement>(null);
  const hasPhoto = hasProductPhoto(product.slug);

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
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)"
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

              {/* Sample COA Download */}
              {COA_AVAILABLE_SLUGS.has(product.slug) && (
                <div className="mt-4 flex items-center gap-3 p-4 rounded-lg border border-[#D4DCC8] bg-[#F2F5ED]">
                  <FileCheck className="w-5 h-5 flex-shrink-0 text-[#6B8C5F]" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-[#3d5c35] mb-0.5">Certificate of Analysis Available</p>
                    <p className="text-xs text-[#666] leading-relaxed">
                      HPLC purity report, MS confirmation, batch documentation — sample COA for this compound.
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
                  Specifications
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
            <Prose title="Mechanism of Action">{product.mechanism}</Prose>
            <Prose title="Research Summary">{product.researchSummary}</Prose>

            {/* Research Applications */}
            {product.researchApplications && product.researchApplications.length > 0 && (
              <div>
                <h2 className="text-2xl font-medium mb-4 tracking-tight">
                  Research Applications
                </h2>
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
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                Recommended Protocol
              </h2>
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
                <h3 className="text-sm font-semibold mb-2 text-[#A4B08A]">
                  Storage &amp; Handling
                </h3>
                <p className="text-sm leading-relaxed text-[#555]">
                  {product.storage}
                </p>
              </div>
              <div className="p-5 rounded-lg bg-white card-shadow">
                <h3 className="text-sm font-semibold mb-2 text-[#A4B08A]">
                  Reconstitution
                </h3>
                <p className="text-sm leading-relaxed text-[#555]">
                  {product.reconstitution}
                </p>
              </div>
            </div>

            {product.features.length > 0 && (
              <div>
                <h2 className="text-2xl font-medium mb-6 tracking-tight">
                  Key Characteristics
                </h2>
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
              Frequently Researched Together
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
