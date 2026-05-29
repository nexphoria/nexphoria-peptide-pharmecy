"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Shield, FileCheck } from "lucide-react";
import type { Product } from "@/lib/products";
import ProductVial from "@/components/ProductVial";
import BuyBox from "@/components/product/BuyBox";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";

interface Props {
  product: Product;
  related: Product[];
}

export default function ProductDetailLaunch({ product, related }: Props) {
  const [selectedFormat, setSelectedFormat] = useState<"vial" | "pen">("vial");
  const hasPhoto = hasProductPhoto(product.slug);
  const accent = product.accentColor || "#A4B08A";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Back Navigation */}
      <div className="pt-20 pb-4 border-b" style={{ borderColor: "#D8D4CC" }}>
        <div className="container-nex">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm transition-colors hover:text-near-black"
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
            {/* Left: Product Visual */}
            <div>
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: "#0F0F0E",
                  aspectRatio: "4 / 5",
                }}
              >
                {/* Subtle accent glow */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 50% 45%, ${accent}22, transparent 65%)`,
                  }}
                />
                {hasPhoto ? (
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={getProductImagePath(product.slug)}
                      alt={`${product.name} ${product.size}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="h-full max-h-[480px]">
                      <ProductVial
                        productName={product.name}
                        dosage={product.size}
                        category={product.category}
                        accentColor={accent}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Specification Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 p-6 rounded-lg border"
                style={{ backgroundColor: "#F7F4EE", borderColor: "#D8D4CC" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <FileCheck className="w-5 h-5" style={{ color: accent }} />
                  <h3
                    className="text-sm font-bold uppercase tracking-wide"
                    style={{ color: "#3A3A3A" }}
                  >
                    Specifications
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <Spec label="CAS Number" value={product.casNumber} mono />
                  <Spec label="Molecular Weight" value={product.molecularWeight} />
                  <div className="col-span-2">
                    <SpecInner label="Molecular Formula" value={product.formula} mono />
                  </div>
                  <Spec label="Purity (HPLC)" value={product.purity} accent={accent} />
                  <Spec label="Appearance" value={product.appearance} />
                  {product.sequence && (
                    <div className="col-span-2">
                      <SpecInner label="Sequence" value={product.sequence} mono />
                    </div>
                  )}
                  <div className="col-span-2">
                    <SpecInner label="Solubility" value={product.solubility} />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Product Info + Buy Box */}
            <div>
              <span
                className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full mb-4"
                style={{ backgroundColor: `${accent}20`, color: accent }}
              >
                {product.category}
              </span>

              <h1
                className="text-4xl lg:text-5xl font-bold mb-3"
                style={{ color: "#000000", fontFamily: "var(--font-display)" }}
              >
                {product.name}
              </h1>

              <div className="text-xl mb-4" style={{ color: "#8A8075" }}>
                {product.size}
              </div>

              <p className="text-lg mb-8 leading-relaxed" style={{ color: "#3A3A3A" }}>
                {product.tagline}
              </p>

              <BuyBox
                product={product}
                selectedFormat={selectedFormat}
                onFormatChange={setSelectedFormat}
              />

              {/* Research Disclaimer */}
              <div
                className="mt-6 flex items-start gap-3 p-4 rounded-lg border"
                style={{ backgroundColor: "#FFFFF3", borderColor: "#D8D4CC" }}
              >
                <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                <p className="text-xs leading-relaxed" style={{ color: "#3A3A3A" }}>
                  <strong>Research Use Only:</strong> This product is intended for qualified
                  research use only. Not for human consumption, diagnostic, or therapeutic use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview, Mechanism, Research */}
      <section className="py-16" style={{ backgroundColor: "#F7F4EE" }}>
        <div className="container-nex">
          <div className="max-w-4xl mx-auto space-y-12">
            <Prose title="Overview">{product.description}</Prose>
            <Prose title="Mechanism of Action">{product.mechanism}</Prose>
            <Prose title="Research Summary">{product.researchSummary}</Prose>

            {/* Recommended Protocol */}
            <div>
              <h2
                className="text-2xl lg:text-3xl font-bold mb-4"
                style={{ color: "#000000", fontFamily: "var(--font-display)" }}
              >
                Recommended Protocol
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#3A3A3A" }}>
                {product.dosingProtocol}
              </p>
              <div
                className="p-5 rounded-lg border text-sm leading-relaxed"
                style={{ backgroundColor: "#FFFFFF", borderColor: "#D8D4CC", color: "#3A3A3A" }}
              >
                Research methodology is typically organized around a{" "}
                <Link
                  href="/protocols"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: accent }}
                >
                  Research Cycle
                </Link>
                . A 3-Month cycle provides enough material to observe a full response window,
                while a 6-Month cycle supports extended longevity and recovery study designs that
                run across two cycles. Cadence and dosing should follow the relevant institutional
                protocol. This compound is supplied for laboratory research use only and is not
                approved for human therapeutic use.
              </div>
            </div>

            {/* Storage & Reconstitution */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div
                className="p-5 rounded-lg border"
                style={{ backgroundColor: "#FFFFFF", borderColor: "#D8D4CC" }}
              >
                <h3 className="font-semibold mb-2" style={{ color: accent }}>
                  Storage &amp; Handling
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#3A3A3A" }}>
                  {product.storage}
                </p>
              </div>
              <div
                className="p-5 rounded-lg border"
                style={{ backgroundColor: "#FFFFFF", borderColor: "#D8D4CC" }}
              >
                <h3 className="font-semibold mb-2" style={{ color: accent }}>
                  Reconstitution
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#3A3A3A" }}>
                  {product.reconstitution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            {product.features.length > 0 && (
              <div>
                <h2
                  className="text-2xl lg:text-3xl font-bold mb-6"
                  style={{ color: "#000000", fontFamily: "var(--font-display)" }}
                >
                  Key Characteristics
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${accent}20` }}
                      >
                        <Check className="w-3 h-3" style={{ color: accent }} />
                      </div>
                      <span className="text-sm" style={{ color: "#3A3A3A" }}>
                        {feature}
                      </span>
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
            <h2
              className="text-2xl lg:text-3xl font-bold mb-12 text-center"
              style={{ color: "#000000", fontFamily: "var(--font-display)" }}
            >
              Frequently Researched Together
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rp) => {
                const rpAccent = rp.accentColor || "#A4B08A";
                return (
                  <Link
                    key={rp.slug}
                    href={`/products/${rp.slug}`}
                    className="block group"
                  >
                    <div
                      className="p-6 rounded-xl border-2 transition-all hover:border-[#A4B08A]"
                      style={{ borderColor: "#D8D4CC", backgroundColor: "#FFFFFF" }}
                    >
                      <div
                        className="aspect-square rounded-lg mb-4 flex items-center justify-center p-6 overflow-hidden"
                        style={{ backgroundColor: "#0F0F0E" }}
                      >
                        {hasProductPhoto(rp.slug) ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={getProductImagePath(rp.slug)}
                            alt={rp.name}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <div className="h-full">
                            <ProductVial
                              productName={rp.name}
                              dosage={rp.size}
                              category={rp.category}
                              accentColor={rpAccent}
                            />
                          </div>
                        )}
                      </div>
                      <div className="text-xs mb-2" style={{ color: "#8A8075" }}>
                        {rp.category}
                      </div>
                      <h3
                        className="text-lg font-bold mb-2"
                        style={{ color: "#000000", fontFamily: "var(--font-display)" }}
                      >
                        {rp.name}
                      </h3>
                      <p className="text-xs mb-4 leading-relaxed" style={{ color: "#8A8075" }}>
                        {rp.size} • {rp.purity}
                      </p>
                      <div className="text-xl font-bold" style={{ color: rpAccent }}>
                        ${rp.price}
                      </div>
                    </div>
                  </Link>
                );
              })}
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

function Spec({
  label,
  value,
  mono,
  accent,
}: {
  label: string;
  value: string;
  mono?: boolean;
  accent?: string;
}) {
  return (
    <div>
      <SpecInner label={label} value={value} mono={mono} accent={accent} />
    </div>
  );
}

function SpecInner({
  label,
  value,
  mono,
  accent,
}: {
  label: string;
  value: string;
  mono?: boolean;
  accent?: string;
}) {
  return (
    <>
      <div className="text-xs mb-1" style={{ color: "#8A8075" }}>
        {label}
      </div>
      <div
        className={`font-semibold break-words ${mono ? "font-mono text-[13px]" : ""}`}
        style={{ color: accent || "#3A3A3A" }}
      >
        {value}
      </div>
    </>
  );
}

function Prose({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2
        className="text-2xl lg:text-3xl font-bold mb-4"
        style={{ color: "#000000", fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      <p className="text-sm leading-relaxed" style={{ color: "#3A3A3A" }}>
        {children}
      </p>
    </div>
  );
}
