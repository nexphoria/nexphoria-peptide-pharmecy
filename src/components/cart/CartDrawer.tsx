"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, ArrowRight, RefreshCw } from "lucide-react";
import { useCart, getItemUnitPrice, getCadenceLabel } from "@/lib/cart";
import { buildItem, trackViewCart, trackRemoveFromCart } from "@/lib/analytics";
import { products, getRelatedProducts } from "@/lib/products";
import { getProductImagePath, hasProductPhoto } from "@/lib/product-images";
import ProductVial from "@/components/ProductVial";
import Image from "next/image";

function ProductThumb({
  slug,
  name,
  dosage,
  category,
  accentColor,
  size = 48,
}: {
  slug: string;
  name: string;
  dosage?: string;
  category?: string;
  accentColor?: string;
  size?: number;
}) {
  if (hasProductPhoto(slug)) {
    return (
      <Image
        src={getProductImagePath(slug)}
        alt={name}
        width={size}
        height={size}
        loading="lazy"
        style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "4px" }}
      />
    );
  }

  return (
    <ProductVial
      productName={name}
      dosage={dosage || ""}
      category={category || ""}
      accentColor={accentColor}
      size="thumbnail"
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
    { amount: 200, label: "Free shipping" },
    { amount: 300, label: "Free cold-pack" },
  ];

  // Find next threshold
  const nextThreshold = thresholds.find(t => totalPrice < t.amount);
  const progressToNext = nextThreshold
    ? (totalPrice / nextThreshold.amount) * 100
    : 100;

  // Track view_cart when drawer opens
  useEffect(() => {
    if (isOpen && items.length > 0) {
      const ga4Items = items.map((item) =>
        buildItem({
          slug: item.product.slug,
          name: item.product.name,
          category: item.product.category,
          price: getItemUnitPrice(item),
          quantity: item.quantity,
          format: item.format,
        })
      );
      trackViewCart(ga4Items, totalPrice);
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

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
          const related = item.product.relatedSlugs.slice(0, 2);
          return [...acc, ...related];
        }, [] as string[]).slice(0, 3)
      ).filter(p => !items.some(item => item.product.slug === p.slug))
    : products.slice(0, 3);

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
            className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md flex flex-col overflow-hidden ${className}`}
            style={{ backgroundColor: "#F9F9F9", borderLeft: "1px solid #ECEAE4" }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-5 border-b"
              style={{ borderColor: "#ECEAE4" }}
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
                className="flex items-center justify-center min-w-[44px] min-h-[44px] hover:bg-[#F5F3F0] transition-colors rounded-md -mr-1"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" style={{ color: "#7F7F7D" }} />
              </button>
            </div>

            {/* Free Gift Progress Bar */}
            {items.length > 0 && (
              <div className="px-6 py-4 border-b" style={{ borderColor: "#ECEAE4" }}>
                {nextThreshold ? (
                  <>
                    <div className="flex items-baseline justify-between gap-2 mb-2 flex-wrap">
                      <span className="text-xs font-semibold min-w-0" style={{ color: "#3A3A3A" }}>
                        ${(nextThreshold.amount - totalPrice).toFixed(0)} away from {nextThreshold.label}
                      </span>
                      <span className="text-xs flex-shrink-0" style={{ color: "#8A8075" }}>
                        ${totalPrice.toFixed(0)} / ${nextThreshold.amount}
                      </span>
                    </div>
                    <div className="relative h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#EAE6DF" }}>
                      <motion.div
                        className="absolute top-0 left-0 h-full"
                        style={{ backgroundColor: "#B8A44C" }}
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
                          style={{ color: totalPrice >= threshold.amount ? "#B8A44C" : "#8A8075" }}
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
                    <div className="text-sm font-semibold mb-1" style={{ color: "#B8A44C" }}>
                      All rewards unlocked
                    </div>
                    <div className="text-xs" style={{ color: "#8A8075" }}>
                      Free recon water, free shipping, free cold-pack
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
                      {items.map((item) => {
                        const dosageLabel = item.selectedDosage?.size || item.product.size;
                        const cadenceLabel = getCadenceLabel(item.subscriptionCadence);
                        const unitPrice = getItemUnitPrice(item);
                        return (
                        <motion.div
                          key={`${item.product.slug}-${item.format}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-start gap-3 p-4 rounded-lg border"
                          style={{
                            borderColor: "#D8D4CC",
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
                            <ProductThumb
                              slug={item.product.slug}
                              name={item.product.name}
                              dosage={dosageLabel}
                              category={item.product.category}
                              accentColor={item.product.accentColor}
                            />
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start gap-2">
                              <h4 className="text-sm font-semibold text-near-black truncate">
                                {item.product.name}
                              </h4>
                            </div>
                            <p className="text-xs text-stone">
                              {dosageLabel} • {item.format === 'pen' ? 'Pen' : 'Vial'}
                            </p>
                            <p
                              className="text-[11px] mt-0.5"
                              style={{ color: item.subscriptionCadence != null ? "#B8A44C" : "#8A8075" }}
                            >
                              {cadenceLabel}
                              {item.subscriptionCadence != null ? " · billed monthly" : ""}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              {/* Quantity Controls */}
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => updateQuantity(item.product.slug, item.format, item.quantity - 1)}
                                  className="w-11 h-11 flex items-center justify-center border transition-colors rounded"
                                  style={{ borderColor: "#D8D4CC", opacity: item.quantity <= 1 ? 0.35 : 1 }}
                                  disabled={item.quantity <= 1}
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="w-3 h-3 text-stone" />
                                </button>
                                <span className="w-8 text-center text-sm font-medium text-near-black">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.product.slug, item.format, item.quantity + 1)}
                                  className="w-11 h-11 flex items-center justify-center border transition-colors rounded"
                                  style={{ borderColor: "#D8D4CC" }}
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="w-3 h-3 text-stone" />
                                </button>
                              </div>

                              {/* Price */}
                              <div className="text-right">
                                <div className="text-sm font-bold text-near-black">
                                  ${(unitPrice * item.quantity).toFixed(2)}
                                  {item.subscriptionCadence != null && (
                                    <span className="text-[10px] font-normal text-stone">/mo</span>
                                  )}
                                </div>
                                <button
                                  onClick={() => {
                                    trackRemoveFromCart(buildItem({
                                      slug: item.product.slug,
                                      name: item.product.name,
                                      category: item.product.category,
                                      price: unitPrice,
                                      quantity: item.quantity,
                                      format: item.format,
                                    }));
                                    removeItem(item.product.slug, item.format);
                                  }}
                                  className="text-xs text-tertiary hover:text-stone transition-colors inline-flex items-center justify-end"
                                  style={{ minHeight: "32px", padding: "4px 0" }}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>

                  {/* You Might Also Need - Research Supplies */}
                  <div
                    className="px-6 py-4 border-t"
                    style={{ borderColor: "#ECEAE4" }}
                  >
                    <h3 className="text-sm font-semibold text-near-black mb-3 uppercase tracking-wide">
                      You Might Also Need
                    </h3>
                    <div className="space-y-2">
                      {[
                        { name: "Bacteriostatic Water", desc: "For reconstitution", price: 12 },
                        { name: "Insulin Syringe Kit", desc: "31G × 0.5mL, 10-pack", price: 8 },
                      ].map((supply) => (
                        <div
                          key={supply.name}
                          className="flex items-center justify-between p-3 rounded-lg border"
                          style={{ borderColor: "#D8D4CC", backgroundColor: "#F7F4EE" }}
                        >
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-semibold text-near-black">
                              {supply.name}
                            </h4>
                            <p className="text-[10px]" style={{ color: "#8A8075" }}>
                              {supply.desc}
                            </p>
                          </div>
                          <span className="text-sm font-bold flex-shrink-0" style={{ color: "#B8A44C" }}>
                            ${supply.price}
                          </span>
                        </div>
                      ))}
                      <p className="text-[10px] mt-1" style={{ color: "#8A8075" }}>
                        Available at checkout. Free reconstitution water on orders over $100.
                      </p>
                    </div>
                  </div>

                  {/* Recommended Products */}
                  {recommendedProducts.length > 0 && (
                    <div
                      className="px-6 py-4 border-t"
                      style={{ borderColor: "#ECEAE4" }}
                    >
                      <h3 className="text-sm font-semibold text-near-black mb-3 uppercase tracking-wide">
                        Recommended For You
                      </h3>
                      <div className="space-y-3">
                        {recommendedProducts.map((product) => (
                          <button
                            key={product.slug}
                            type="button"
                            className="w-full flex items-center gap-3 p-3 rounded-lg border hover:border-[#B8A44C] transition-colors group text-left"
                            style={{ borderColor: "#ECEAE4" }}
                            onClick={() => addItem(product)}
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
                              <ProductThumb
                                slug={product.slug}
                                name={product.name}
                                dosage={product.size}
                                category={product.category}
                                accentColor={product.accentColor}
                                size={40}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs font-medium text-near-black truncate">
                                {product.name}
                              </h4>
                              <p className="text-xs text-stone">
                                ${product.price}
                              </p>
                            </div>
                            <span className="text-xs font-medium whitespace-nowrap flex-shrink-0" style={{ color: "#B8A44C" }}>
                              Add to Order
                            </span>
                          </button>
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
                className="px-6 pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] border-t flex-shrink-0"
                style={{ borderColor: "#ECEAE4" }}
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

                {/* Estimated delivery */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span style={{ color: "#8A8075" }}>Estimated delivery</span>
                  <span className="font-medium" style={{ color: "#3A3A3A" }}>
                    {(() => {
                      const d = new Date();
                      d.setDate(d.getDate() + 3);
                      return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
                    })()}
                    {" "}— cold-chain
                  </span>
                </div>

                {/* Trust badges */}
                <div className="flex justify-center gap-4 mb-4 text-xs text-tertiary">
                  <span>99%+ Purity</span>
                  <span>COA Included</span>
                  <span>Cold Shipped</span>
                </div>

                {/* Checkout Button */}
                <button
                  className="btn-acid w-full justify-center"
                  style={{ minHeight: "52px" }}
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
