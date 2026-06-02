"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "@/lib/cart";
import { products, SUBSCRIPTION_CADENCE_CONFIG } from "@/lib/products";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";
import ProductVial from "@/components/ProductVial";
import { priceProtocol, round2 } from "@/lib/advisor/pricing";
import type { Protocol } from "@/lib/advisor/types";

const GOLD = "#B8A44C";
const MONTHLY_CADENCE_DISCOUNT = SUBSCRIPTION_CADENCE_CONFIG.monthly.discount;

function Thumb({
  slug,
  name,
  size,
  category,
  accentColor,
}: {
  slug: string;
  name: string;
  size: string;
  category: string;
  accentColor: string;
}) {
  if (hasProductPhoto(slug)) {
    return (
      <Image
        src={getProductImagePath(slug)}
        alt={name}
        width={56}
        height={56}
        loading="lazy"
        style={{ objectFit: "contain", width: "100%", height: "100%" }}
      />
    );
  }
  return (
    <ProductVial
      productName={name}
      dosage={size}
      category={category}
      accentColor={accentColor}
      size="thumbnail"
    />
  );
}

export default function ProtocolRxCard({ protocol }: { protocol: Protocol }) {
  const { addItem, openDrawer } = useCart();
  const [cycle, setCycle] = useState<3 | 6>(protocol.recommendedCycle);
  const [added, setAdded] = useState(false);

  const msrps = useMemo(() => protocol.items.map((i) => i.msrp), [protocol.items]);
  const pricing = useMemo(() => priceProtocol(msrps, cycle), [msrps, cycle]);

  const today = useMemo(
    () =>
      new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    [],
  );

  const handleStart = (months: 3 | 6) => {
    setCycle(months);
    const cyclePricing = priceProtocol(msrps, months);

    protocol.items.forEach((item, idx) => {
      const product = products.find((p) => p.slug === item.slug);
      if (!product) return;

      const finalUnit = cyclePricing.monthlyPerItem[idx];
      // The cart's monthly cadence applies a built-in reduction; gross the base
      // up so the charged subscription price equals the advisor's quoted price.
      const base = round2(finalUnit / (1 - MONTHLY_CADENCE_DISCOUNT));

      addItem(
        product,
        "vial",
        { size: item.size, price: base },
        SUBSCRIPTION_CADENCE_CONFIG.monthly.intervalDays,
        0,
        "monthly",
      );
    });

    setAdded(true);
    openDrawer();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl"
      style={{
        backgroundColor: "#111110",
        border: `1px solid ${GOLD}55`,
        boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
      }}
    >
      {/* Gold top accent */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${GOLD}, ${GOLD}33)` }} />

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.22em] mb-2"
              style={{ color: GOLD }}
            >
              Nexphoria · Research Protocol
            </p>
            <h3
              className="text-2xl sm:text-3xl leading-tight"
              style={{ fontFamily: "var(--font-cormorant)", color: "#F4F1E8", fontWeight: 500 }}
            >
              Your {protocol.goalLabel} Protocol
            </h3>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-[11px]" style={{ color: "#8d877d" }}>
              {today}
            </p>
            <p className="text-[11px] mt-1" style={{ color: "#8d877d" }}>
              {protocol.items.length}{" "}
              {protocol.items.length === 1 ? "compound" : "compounds"}
            </p>
          </div>
        </div>

        {/* Product lines */}
        <div className="space-y-3 mb-6">
          {protocol.items.map((item, idx) => (
            <div
              key={item.slug}
              className="flex gap-4 rounded-xl p-4"
              style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-lg overflow-hidden"
                style={{
                  width: 56,
                  height: 56,
                  backgroundColor: `${item.accentColor}1A`,
                  border: `1px solid ${item.accentColor}40`,
                }}
              >
                <Thumb
                  slug={item.slug}
                  name={item.name}
                  size={item.size}
                  category={item.category}
                  accentColor={item.accentColor}
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="text-[15px] font-semibold truncate" style={{ color: "#F4F1E8" }}>
                    {idx + 1}. {item.name}
                    <span className="ml-2 text-[12px] font-normal" style={{ color: "#8d877d" }}>
                      {item.size}
                    </span>
                  </h4>
                  <div className="text-right flex-shrink-0">
                    <span className="text-[15px] font-semibold" style={{ color: GOLD }}>
                      ${pricing.monthlyPerItem[idx].toFixed(0)}
                      <span className="text-[11px] font-normal" style={{ color: "#8d877d" }}>
                        /mo
                      </span>
                    </span>
                    <p className="text-[10px]" style={{ color: "#6f6a61" }}>
                      or ${pricing.oneTimePerItem[idx].toFixed(0)} one-time
                    </p>
                  </div>
                </div>
                <p className="text-[12.5px] mt-1.5 leading-snug" style={{ color: "#b7b1a6" }}>
                  {item.why}
                </p>
                <p className="text-[11.5px] mt-1.5" style={{ color: "#8d877d" }}>
                  {item.dose}
                </p>
                <Link
                  href={`/products/${item.slug}`}
                  className="inline-flex items-center gap-1 text-[11px] mt-2 transition-opacity hover:opacity-70"
                  style={{ color: GOLD }}
                >
                  View full protocol
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Monthly investment */}
        <div
          className="flex items-baseline justify-between rounded-xl px-4 py-3.5 mb-6"
          style={{ backgroundColor: `${GOLD}14`, border: `1px solid ${GOLD}33` }}
        >
          <div>
            <p className="text-[11px] uppercase tracking-wider" style={{ color: "#b7b1a6" }}>
              Monthly investment
            </p>
            <p className="text-[11px] mt-0.5" style={{ color: "#8d877d" }}>
              Ships monthly · cold-chain
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl" style={{ fontFamily: "var(--font-cormorant)", color: "#F4F1E8", fontWeight: 600 }}>
              ${pricing.monthlyTotal.toFixed(0)}
              <span className="text-[12px] font-normal" style={{ color: "#8d877d" }}>
                /mo
              </span>
            </p>
            <p className="text-[10px]" style={{ color: "#6f6a61" }}>
              or ${pricing.oneTimeTotal.toFixed(0)} one-time
            </p>
          </div>
        </div>

        {/* Expected timeline */}
        <div className="mb-6">
          <p className="text-[10px] uppercase tracking-[0.18em] mb-3" style={{ color: GOLD }}>
            Expected timeline
          </p>
          <div className="space-y-2.5">
            {protocol.timeline.map((phase) => (
              <div key={phase.week} className="flex gap-3">
                <span
                  className="flex-shrink-0 text-[11px] font-semibold pt-0.5"
                  style={{ color: "#F4F1E8", width: 72 }}
                >
                  {phase.week}
                </span>
                <span className="text-[12px] leading-snug" style={{ color: "#9a948a" }}>
                  {phase.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cycle recommendation */}
        <div className="mb-5">
          <div
            className="flex items-start gap-2.5 rounded-lg px-3.5 py-3 mb-4"
            style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <span
              className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5"
              style={{ backgroundColor: GOLD }}
            />
            <p className="text-[12px] leading-snug" style={{ color: "#b7b1a6" }}>
              <span style={{ color: "#F4F1E8", fontWeight: 600 }}>
                Recommended: {protocol.recommendedCycle}-month cycle.{" "}
              </span>
              {protocol.cycleReason}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {([3, 6] as const).map((months) => {
              const isRecommended = months === protocol.recommendedCycle;
              const isSelected = months === cycle;
              return (
                <button
                  key={months}
                  type="button"
                  onClick={() => handleStart(months)}
                  className="flex flex-col items-center justify-center rounded-xl px-4 py-3.5 transition-all duration-200 active:scale-[0.98]"
                  style={{
                    minHeight: "60px",
                    backgroundColor: isRecommended ? GOLD : "transparent",
                    color: isRecommended ? "#0a0a0a" : "#F4F1E8",
                    border: `1px solid ${isSelected || isRecommended ? GOLD : "rgba(184,164,76,0.4)"}`,
                  }}
                >
                  <span className="text-[13px] font-semibold uppercase tracking-wider">
                    Start {months}-Month
                  </span>
                  <span
                    className="text-[11px] mt-0.5"
                    style={{ color: isRecommended ? "rgba(10,10,10,0.7)" : "#8d877d" }}
                  >
                    ${priceProtocol(msrps, months).cycleTotal.toFixed(0)} total
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Added confirmation */}
        {added && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between gap-3 rounded-lg px-4 py-3 mb-2"
            style={{ backgroundColor: `${GOLD}1A`, border: `1px solid ${GOLD}44` }}
          >
            <p className="text-[12.5px]" style={{ color: "#F4F1E8" }}>
              Your {cycle}-month protocol was added as a monthly auto-ship.
            </p>
            <Link
              href="/cart"
              className="flex-shrink-0 text-[12px] font-semibold whitespace-nowrap"
              style={{ color: GOLD }}
            >
              View cart →
            </Link>
          </motion.div>
        )}

        {/* Disclaimer */}
        <p className="text-[10px] leading-relaxed mt-4" style={{ color: "#6f6a61" }}>
          For research purposes only. Not for human consumption. Recommendations are generated
          from published preclinical literature for in vitro and research use.
        </p>
      </div>
    </motion.div>
  );
}
