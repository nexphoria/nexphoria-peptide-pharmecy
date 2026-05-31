"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  ShoppingBag,
  ArrowLeft,
  RefreshCw,
  Shield,
  Truck,
  FlaskConical,
} from "lucide-react";
import { useCart, getItemUnitPrice, getCadenceLabel } from "@/lib/cart";
import { getProductImagePath, hasProductPhoto } from "@/lib/product-images";
import ProductVial from "@/components/ProductVial";

function ProductThumb({
  slug,
  name,
  dosage,
  category,
  accentColor,
}: {
  slug: string;
  name: string;
  dosage: string;
  category: string;
  accentColor: string;
}) {
  if (hasProductPhoto(slug)) {
    return (
      <Image
        src={getProductImagePath(slug)}
        alt={name}
        width={72}
        height={72}
        loading="lazy"
        style={{ objectFit: "contain", width: "100%", height: "100%" }}
      />
    );
  }
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ProductVial
        productName={name}
        dosage={dosage}
        category={category}
        accentColor={accentColor}
        size="thumbnail"
      />
    </div>
  );
}

export default function CartPageClient() {
  const router = useRouter();
  const {
    items,
    removeItem,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
  } = useCart();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  // Free gift thresholds
  const thresholds = [
    { amount: 100, label: "Free reconstitution water" },
    { amount: 200, label: "Free shipping" },
    { amount: 300, label: "Free cold-pack upgrade" },
  ];
  const nextThreshold = thresholds.find((t) => totalPrice < t.amount);
  const progressToNext = nextThreshold
    ? (totalPrice / nextThreshold.amount) * 100
    : 100;

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#F9F9F9" }}>
        <div className="w-8 h-8 border-2 border-current border-t-transparent rounded-full animate-spin" style={{ color: "#B8A44C" }} />
      </div>
    );
  }

  // Empty cart state
  if (items.length === 0) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
        style={{ backgroundColor: "#F9F9F9", paddingTop: "80px" }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: "#F0EDE8" }}
        >
          <ShoppingBag className="w-10 h-10" style={{ color: "#B8A44C" }} />
        </div>
        <h1
          className="text-3xl font-light mb-3 tracking-tight"
          style={{ fontFamily: "var(--font-display)", color: "#1A1A1A" }}
        >
          Your order is empty.
        </h1>
        <p className="text-sm mb-8 max-w-xs" style={{ color: "#666" }}>
          Browse our research-grade compounds and begin your protocol.
        </p>
        <Link
          href="/products"
          className="btn-acid"
          style={{ minHeight: "52px", padding: "14px 40px" }}
        >
          View All Products
        </Link>
        <Link
          href="/research"
          className="mt-4 text-sm underline underline-offset-4 transition-opacity hover:opacity-60"
          style={{ color: "#7A6B2A" }}
        >
          Learn about peptides first
        </Link>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#F9F9F9", paddingTop: "80px" }}
    >
      <div className="container-nex py-10 md:py-14 pb-32 lg:pb-14">
        {/* Back link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-opacity hover:opacity-60"
          style={{ color: "#666" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Continue shopping
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* ── Cart Items ── */}
          <div className="lg:col-span-7">
            <div className="flex items-baseline justify-between mb-6">
              <h1
                className="text-2xl md:text-3xl font-light tracking-tight"
                style={{ fontFamily: "var(--font-display)", color: "#1A1A1A" }}
              >
                Your Order
              </h1>
              <span className="text-sm" style={{ color: "#666" }}>
                {totalItems} item{totalItems !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Free gift progress */}
            {nextThreshold && (
              <div
                className="mb-6 p-4 rounded-lg"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E5E5" }}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs font-medium" style={{ color: "#1A1A1A" }}>
                    ${(nextThreshold.amount - totalPrice).toFixed(0)} away from {nextThreshold.label}
                  </span>
                  <span className="text-xs" style={{ color: "#999" }}>
                    ${totalPrice.toFixed(0)} / ${nextThreshold.amount}
                  </span>
                </div>
                <div
                  className="relative h-1.5 rounded-full overflow-hidden"
                  style={{ backgroundColor: "#F0EDE8" }}
                >
                  <motion.div
                    className="absolute top-0 left-0 h-full rounded-full"
                    style={{ backgroundColor: "#B8A44C" }}
                    initial={{ width: 0 }}
                    animate={{ width: `${progressToNext}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            )}

            {/* Items list */}
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {items.map((item) => {
                  const dosageLabel = item.selectedDosage?.size || item.product.size;
                  const unitPrice = getItemUnitPrice(item);
                  const cadenceLabel = getCadenceLabel(item.subscriptionCadence);
                  const isSubscription = item.subscriptionCadence != null;

                  return (
                    <motion.div
                      key={`${item.product.slug}-${item.format}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex gap-4 p-4 rounded-lg"
                      style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E5E5" }}
                    >
                      {/* Product image */}
                      <div
                        className="flex-shrink-0 rounded overflow-hidden flex items-center justify-center"
                        style={{
                          width: "72px",
                          height: "72px",
                          backgroundColor: `${item.product.accentColor}12`,
                          border: `1px solid ${item.product.accentColor}30`,
                        }}
                      >
                        <ProductThumb
                          slug={item.product.slug}
                          name={item.product.name}
                          dosage={dosageLabel}
                          category={item.product.category}
                          accentColor={item.product.accentColor}
                        />
                      </div>

                      {/* Product info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="text-sm font-medium leading-snug truncate" style={{ color: "#1A1A1A" }}>
                              {item.product.name}
                            </h3>
                            <p className="text-xs mt-0.5" style={{ color: "#999" }}>
                              {dosageLabel} · {item.format === "pen" ? "Pen" : "Vial"}
                            </p>
                            {isSubscription && (
                              <div className="flex items-center gap-1 mt-1">
                                <RefreshCw className="w-3 h-3" style={{ color: "#B8A44C" }} />
                                <span className="text-[11px]" style={{ color: "#7A6B2A" }}>
                                  {cadenceLabel} · cancel anytime
                                </span>
                              </div>
                            )}
                          </div>
                          {/* Line price */}
                          <div className="text-right flex-shrink-0">
                            <p className="text-sm font-semibold" style={{ color: "#1A1A1A" }}>
                              ${(unitPrice * item.quantity).toFixed(2)}
                            </p>
                            {item.quantity > 1 && (
                              <p className="text-[11px]" style={{ color: "#999" }}>
                                ${unitPrice.toFixed(2)} ea
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Quantity + Remove */}
                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity controls */}
                          <div
                            className="flex items-center rounded-lg overflow-hidden"
                            style={{ border: "1px solid #E5E5E5" }}
                          >
                            <button
                              onClick={() =>
                                updateQuantity(item.product.slug, item.format, item.quantity - 1)
                              }
                              className="flex items-center justify-center transition-colors"
                              style={{
                                width: "44px",
                                height: "44px",
                                backgroundColor: "transparent",
                                opacity: item.quantity <= 1 ? 0.3 : 1,
                              }}
                              disabled={item.quantity <= 1}
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" style={{ color: "#1A1A1A" }} />
                            </button>
                            <span
                              className="text-sm font-medium text-center"
                              style={{ minWidth: "32px", color: "#1A1A1A" }}
                            >
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.slug, item.format, item.quantity + 1)
                              }
                              className="flex items-center justify-center transition-colors"
                              style={{ width: "44px", height: "44px", backgroundColor: "transparent" }}
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" style={{ color: "#1A1A1A" }} />
                            </button>
                          </div>

                          {/* Remove */}
                          <button
                            onClick={() => removeItem(item.product.slug, item.format)}
                            className="flex items-center gap-1.5 text-xs transition-opacity hover:opacity-60"
                            style={{ color: "#999", minHeight: "44px", padding: "0 4px" }}
                            aria-label={`Remove ${item.product.name} from order`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* ── Order Summary ── */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div
                className="p-6 rounded-lg"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E5E5" }}
              >
                <h2 className="text-lg font-medium mb-5" style={{ color: "#1A1A1A" }}>
                  Order Summary
                </h2>

                {/* Line items summary */}
                <div className="space-y-3 mb-5">
                  {items.map((item) => {
                    const dosageLabel = item.selectedDosage?.size || item.product.size;
                    const unitPrice = getItemUnitPrice(item);
                    return (
                      <div
                        key={`${item.product.slug}-${item.format}-sum`}
                        className="flex items-start justify-between gap-2 text-sm"
                      >
                        <span className="min-w-0 truncate" style={{ color: "#555", maxWidth: "65%" }}>
                          {item.product.name}
                          <span className="text-xs ml-1" style={{ color: "#999" }}>
                            ×{item.quantity}
                          </span>
                        </span>
                        <span className="font-medium flex-shrink-0" style={{ color: "#1A1A1A" }}>
                          ${(unitPrice * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Subtotal */}
                <div
                  className="pt-4 border-t space-y-2"
                  style={{ borderColor: "#E5E5E5" }}
                >
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#666" }}>Subtotal</span>
                    <span style={{ color: "#1A1A1A" }}>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#666" }}>Shipping</span>
                    <span style={{ color: "#666" }}>
                      {totalPrice >= 200 ? (
                        <span style={{ color: "#B8A44C" }}>Free</span>
                      ) : (
                        "Calculated at checkout"
                      )}
                    </span>
                  </div>
                </div>

                <div
                  className="pt-4 mt-4 border-t flex justify-between items-end"
                  style={{ borderColor: "#E5E5E5" }}
                >
                  <span className="font-semibold" style={{ color: "#1A1A1A" }}>
                    Estimated Total
                  </span>
                  <span
                    className="text-2xl font-light"
                    style={{ fontFamily: "var(--font-display)", color: "#1A1A1A" }}
                  >
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                {/* Checkout CTA */}
                <button
                  onClick={() => router.push("/checkout")}
                  className="w-full flex items-center justify-center gap-2 mt-6 font-medium uppercase transition-all duration-200 active:scale-[0.98]"
                  style={{
                    height: "52px",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    backgroundColor: "#1A1A1A",
                    color: "#F9F9F9",
                    borderRadius: "999px",
                    border: "1px solid #1A1A1A",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#333";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1A1A1A";
                  }}
                >
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Trust badges */}
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {[
                    { icon: <FlaskConical className="w-3.5 h-3.5" />, label: "99%+ Purity" },
                    { icon: <Shield className="w-3.5 h-3.5" />, label: "COA Included" },
                    { icon: <Truck className="w-3.5 h-3.5" />, label: "Cold-Chain" },
                  ].map((badge) => (
                    <div
                      key={badge.label}
                      className="flex flex-col items-center gap-1 py-2 rounded text-center"
                      style={{ backgroundColor: "#F9F9F9", border: "1px solid #F0EDE8" }}
                    >
                      <span style={{ color: "#B8A44C" }}>{badge.icon}</span>
                      <span className="text-[9px] uppercase font-medium" style={{ letterSpacing: "0.08em", color: "#666" }}>
                        {badge.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research disclaimer */}
        <p className="text-xs text-center mt-10 pb-4" style={{ color: "#999" }}>
          All products are for research use only. Not intended for human therapeutic use.
        </p>
      </div>

      {/* Mobile sticky checkout bar */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 p-4"
        style={{
          backgroundColor: "rgba(249,249,249,0.97)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderTop: "1px solid #E5E5E5",
          zIndex: 40,
        }}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs" style={{ color: "#666" }}>
              {totalItems} item{totalItems !== 1 ? "s" : ""}
            </p>
            <p
              className="text-xl font-light"
              style={{ fontFamily: "var(--font-display)", color: "#1A1A1A", lineHeight: 1.2 }}
            >
              ${totalPrice.toFixed(2)}
            </p>
          </div>
          <button
            onClick={() => router.push("/checkout")}
            className="flex items-center gap-2 flex-shrink-0 font-medium uppercase transition-all active:scale-[0.97]"
            style={{
              height: "48px",
              padding: "0 24px",
              fontSize: "11px",
              letterSpacing: "0.15em",
              backgroundColor: "#1A1A1A",
              color: "#F9F9F9",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Checkout <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
