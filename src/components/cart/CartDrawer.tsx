"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart";
import { products, getRelatedProducts } from "@/lib/products";
import Image from "next/image";
// SVG components replaced with img tags for performance

// Helper: resolve product slug to image path
function resolveProductImage(slug: string): string {
  // Direct slug mapping
  const directMap: Record<string, string> = {
    'bpc-157': '/products/bpc-157.png',
    'tb-500': '/products/tb-500.png',
    'ipamorelin': '/products/ipamorelin.png',
    'cjc-1295': '/products/ipamorelin.png',
    'cjc-1295-ipamorelin': '/products/ipamorelin.png',
    'sermorelin': '/products/ipamorelin.png',
    'mk-677': '/products/ipamorelin.png',
    'semaglutide': '/products/tirzepatide.png',
    'tirzepatide': '/products/tirzepatide.png',
    'retatrutide': '/products/retatrutide.png',
    'aod-9604': '/products/aod-9604.png',
    'ghk-cu': '/products/ghk-cu.png',
    'epitalon': '/products/epitalon.png',
    'selank': '/products/epitalon.png',
    'semax': '/products/epitalon.png',
    'nad-plus': '/products/nad-plus.png',
    'pt-141': '/products/pt-141.png',
    'melanotan-ii': '/products/pt-141.png',
    'thymosin-alpha-1': '/products/bpc-157.png',
    'll-37': '/products/bpc-157.png',
    'mots-c': '/products/mots-c.png',
  };
  return directMap[slug] || `/products/${slug}.png`;
}

function ProductThumb({
  slug,
  name,
  accentColor,
  size = 44,
}: {
  slug: string;
  name: string;
  accentColor: string;
  size?: number;
}) {
  const [imgError, setImgError] = useState(false);
  const src = resolveProductImage(slug);

  if (imgError) {
    return (
      <span
        style={{
          fontSize: size > 36 ? "1.25rem" : "1rem",
          fontWeight: "bold",
          fontFamily: "var(--font-display)",
          color: accentColor,
          opacity: 0.9,
        }}
      >
        {name.charAt(0)}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      width={size}
      height={size}
      style={{ objectFit: "contain", width: "100%", height: "100%" }}
      onError={() => setImgError(true)}
    />
  );
}

interface CartDrawerProps {
  className?: string;
}

export default function CartDrawer({ className = "" }: CartDrawerProps) {
  const router = useRouter();
  const {
    items,
    isOpen,
    closeDrawer,
    updateQuantity,
    removeItem,
    addItem,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  // Free gift thresholds
  const thresholds = [
    { amount: 100, label: "Free recon water" },
    { amount: 150, label: "Free shipping" },
    { amount: 250, label: "Free cold-pack" },
  ];

  // Find next threshold
  const nextThreshold = thresholds.find(t => totalPrice < t.amount);
  const currentThreshold = thresholds.filter(t => totalPrice >= t.amount).pop();
  const progressToNext = nextThreshold
    ? (totalPrice / nextThreshold.amount) * 100
    : 100;

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeDrawer();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeDrawer]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Get recommended products (from related products of items in cart)
  const recommendedProducts = items.length > 0
    ? getRelatedProducts(
        items.reduce((acc, item) => {
          const related = item.product.relatedSlugs.slice(0, 2); // Limit to prevent too many
          return [...acc, ...related];
        }, [] as string[]).slice(0, 3) // Max 3 recommendations
      ).filter(p => !items.some(item => item.product.slug === p.slug))
    : products.slice(0, 3); // Default recommendations if cart empty

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={closeDrawer}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
              mass: 0.8
            }}
            className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md flex flex-col ${className}`}
            style={{ backgroundColor: "#FFFFFF", borderLeft: "1px solid var(--border-subtle)" }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-5 border-b"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <div>
                <h2 className="text-lg font-bold" style={{ color: "#010101" }}>
                  Cart ({totalItems})
                </h2>
                <p className="text-sm" style={{ color: "#7F7F7D" }}>
                  {totalItems === 0 ? "No items" : `$${totalPrice.toFixed(2)} total`}
                </p>
              </div>
              <button
                onClick={closeDrawer}
                className="p-2 hover:bg-off-white transition-colors rounded-md"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" style={{ color: "#7F7F7D" }} />
              </button>
            </div>

            {/* Free Gift Progress Bar */}
            {items.length > 0 && (
              <div className="px-6 py-4 border-b" style={{ borderColor: "var(--border-subtle)" }}>
                {nextThreshold ? (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold" style={{ color: "#3A3A3A" }}>
                        ${(nextThreshold.amount - totalPrice).toFixed(0)} away from {nextThreshold.label}
                      </span>
                      <span className="text-xs" style={{ color: "#8A8075" }}>
                        ${totalPrice.toFixed(0)} / ${nextThreshold.amount}
                      </span>
                    </div>
                    <div className="relative h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#EAE6DF" }}>
                      <motion.div
                        className="absolute top-0 left-0 h-full"
                        style={{ backgroundColor: "#A4B08A" }}
                        initial={{ width: 0 }}
                        animate={{ width: `${progressToNext}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      {thresholds.map((threshold) => (
                        <div
                          key={threshold.amount}
                          className={`flex items-center gap-1 text-xs ${
                            totalPrice >= threshold.amount ? "opacity-100" : "opacity-40"
                          }`}
                          style={{ color: totalPrice >= threshold.amount ? "#A4B08A" : "#8A8075" }}
                        >
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 2.5L3.75 7.5L1.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-[10px]">{threshold.label.replace("Free ", "")}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-2">
                    <div className="text-sm font-semibold mb-1" style={{ color: "#A4B08A" }}>
                      All rewards unlocked
                    </div>
                    <div className="text-xs" style={{ color: "#8A8075" }}>
                      Free recon water • Free shipping • Free cold-pack
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                // Empty Cart State
                <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#F5F3F0" }}
                  >
                    <ShoppingBag className="w-8 h-8" style={{ color: "#A0A0A0" }} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "#010101" }}>
                    Your cart is empty
                  </h3>
                  <p className="text-sm mb-6 max-w-xs" style={{ color: "#7F7F7D" }}>
                    Start building your stack with research-grade peptides
                  </p>
                  <button
                    onClick={closeDrawer}
                    className="btn-acid"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="px-6 py-4 space-y-4">
                    <AnimatePresence mode="popLayout">
                      {items.map((item) => (
                        <motion.div
                          key={`${item.product.slug}-${item.format}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-start gap-3 p-4 rounded-lg border"
                          style={{
                            borderColor: "var(--border-subtle)",
                            backgroundColor: "#F5F3F0"
                          }}
                        >
                          {/* Product Thumbnail */}
                          <div
                            className="flex-shrink-0 flex items-center justify-center rounded overflow-hidden"
                            style={{
                              width: "48px",
                              height: "48px",
                              backgroundColor: `${item.product.accentColor}12`,
                              border: `1px solid ${item.product.accentColor}30`
                            }}
                          >
                            <ProductThumb slug={item.product.slug} name={item.product.name} accentColor={item.product.accentColor} />
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm font-semibold text-near-black truncate">
                                {item.product.name}
                              </h4>
                              {item.subscriptionMonths > 1 && (
                                <span
                                  className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase"
                                  style={{ backgroundColor: "#A4B08A", color: "#FFFFFF" }}
                                >
                                  Subscription
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-stone">
                              {item.selectedDosage?.size || item.product.size} • {item.format === 'pen' ? 'Pen' : 'Vial'}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              {/* Quantity Controls */}
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => updateQuantity(item.product.slug, item.format, item.quantity - 1)}
                                  className="w-7 h-7 flex items-center justify-center border border-dark-border-hover hover:bg-dark-border transition-colors rounded"
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="w-3 h-3 text-stone" />
                                </button>
                                <span className="w-8 text-center text-sm font-medium text-near-black">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.product.slug, item.format, item.quantity + 1)}
                                  className="w-7 h-7 flex items-center justify-center border border-dark-border-hover hover:bg-dark-border transition-colors rounded"
                                >
                                  <Plus className="w-3 h-3 text-stone" />
                                </button>
                              </div>

                              {/* Price */}
                              <div className="text-right">
                                <div className="text-sm font-bold text-near-black">
                                  ${((item.selectedDosage?.price ||
                                      (item.format === 'pen' && item.product.penAvailable ? item.product.penPrice : item.product.price)) *
                                      item.quantity).toFixed(0)}
                                </div>
                                <button
                                  onClick={() => removeItem(item.product.slug, item.format)}
                                  className="text-xs text-tertiary hover:text-stone transition-colors"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* You Might Also Need - Research Supplies */}
                  <div
                    className="px-6 py-4 border-t"
                    style={{ borderColor: "var(--dark-border)" }}
                  >
                    <h3 className="text-sm font-semibold text-near-black mb-3 uppercase tracking-wide">
                      You Might Also Need
                    </h3>
                    <div className="space-y-2">
                      {[
                        { name: "Bacteriostatic Water", desc: "For reconstitution", price: 12 },
                        { name: "Insulin Syringe Kit", desc: "31G × 0.5mL, 10-pack", price: 8 },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center justify-between p-3 rounded-lg border hover:border-[#A4B08A] transition-colors cursor-pointer group"
                          style={{ borderColor: "var(--dark-border)", backgroundColor: "#F7F4EE" }}
                        >
                          <div className="flex-1">
                            <h4 className="text-xs font-semibold text-near-black">
                              {item.name}
                            </h4>
                            <p className="text-[10px]" style={{ color: "#8A8075" }}>
                              {item.desc}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold" style={{ color: "#A4B08A" }}>
                              ${item.price}
                            </span>
                            <button className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#A4B08A" }}>
                              Add
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Products */}
                  {recommendedProducts.length > 0 && (
                    <div
                      className="px-6 py-4 border-t"
                      style={{ borderColor: "var(--dark-border)" }}
                    >
                      <h3 className="text-sm font-semibold text-near-black mb-3 uppercase tracking-wide">
                        Recommended For You
                      </h3>
                      <div className="space-y-3">
                        {recommendedProducts.map((product) => (
                          <div
                            key={product.slug}
                            className="flex items-center gap-3 p-3 rounded-lg border hover:border-dark-border-hover transition-colors cursor-pointer group"
                            style={{ borderColor: "var(--dark-border)" }}
                            onClick={() => {
                              addItem(product);
                            }}
                          >
                            <div
                              className="flex items-center justify-center rounded overflow-hidden"
                              style={{
                                width: "40px",
                                height: "40px",
                                flexShrink: 0,
                                backgroundColor: `${product.accentColor}12`,
                                border: `1px solid ${product.accentColor}30`
                              }}
                            >
                              <ProductThumb slug={product.slug} name={product.name} accentColor={product.accentColor} size={32} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs font-medium text-near-black truncate">
                                {product.name}
                              </h4>
                              <p className="text-xs text-stone">
                                ${product.price}
                              </p>
                            </div>
                            <button className="text-xs text-acid-green font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                              Add
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Footer - Checkout */}
            {items.length > 0 && (
              <div
                className="px-6 py-5 border-t"
                style={{ borderColor: "var(--dark-border)" }}
              >
                {/* Total */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-stone">
                    Subtotal
                  </span>
                  <span className="text-xl font-bold text-near-black">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                {/* Trust badges */}
                <div className="flex justify-center gap-4 mb-4 text-xs text-tertiary">
                  <span>✓ 99.7% Purity</span>
                  <span>✓ COA Included</span>
                  <span>✓ Same-Day Ship</span>
                </div>

                {/* Checkout Button */}
                <button
                  className="btn-acid w-full justify-center"
                  onClick={() => {
                    closeDrawer();
                    router.push('/checkout');
                  }}
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}