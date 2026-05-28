"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight, Package, X } from "lucide-react";
import { products } from "@/lib/products";
import ProductVial from "@/components/ProductVial";
import { useCart } from "@/lib/cart";

export default function BuildYourStackPage() {
  const router = useRouter();
  const { addItem } = useCart();
  const [stackItems, setStackItems] = useState<typeof products>([]);
  const [subscriptionCadence, setSubscriptionCadence] = useState<"one-time" | "4-week" | "8-week" | "12-week">("one-time");

  const addToStack = (product: typeof products[0]) => {
    setStackItems([...stackItems, product]);
  };

  const removeFromStack = (index: number) => {
    setStackItems(stackItems.filter((_, i) => i !== index));
  };

  const totalPrice = stackItems.reduce((sum, item) => sum + item.price, 0);

  // 15% off with subscription
  const subscriptionDiscount = subscriptionCadence !== "one-time" ? 0.15 : 0;
  const discountedPrice = totalPrice * (1 - subscriptionDiscount);

  // Free gifts
  const freeGifts = [];
  if (stackItems.length >= 3) freeGifts.push("Free bacteriostatic water");
  if (stackItems.length >= 5) freeGifts.push("Free shipping");
  if (stackItems.length >= 7) freeGifts.push("Free cold-pack");

  const handleCheckout = () => {
    // Add all stack items to cart
    stackItems.forEach(product => {
      const months = subscriptionCadence === "4-week" ? 1 : subscriptionCadence === "8-week" ? 2 : subscriptionCadence === "12-week" ? 3 : 1;
      addItem(product, "vial", undefined, months);
    });
    router.push("/checkout");
  };

  const cadenceOptions = [
    { value: "one-time", label: "One-Time Purchase", discount: 0 },
    { value: "4-week", label: "4-Week Cycle", discount: 15 },
    { value: "8-week", label: "8-Week Protocol", discount: 15 },
    { value: "12-week", label: "12-Week Protocol", discount: 15 },
  ] as const;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fffff3", paddingTop: "80px" }}>
      <div className="container-nex py-12 md:py-16">
        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "#010101", fontFamily: "var(--font-display)" }}
          >
            Build Your Stack
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#8A8075" }}>
            Select your peptides and create a custom research protocol. Save 15% with subscription.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left - Stack Box Visualization + Product Grid */}
          <div className="lg:col-span-7 space-y-8">
            {/* The Box - Visual Stack Builder */}
            <div
              className="relative rounded-lg border-2 overflow-hidden"
              style={{
                backgroundColor: "#1a1a18",
                borderColor: "#a4b08a",
                minHeight: "280px",
              }}
            >
              {/* DNA Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-10 pattern-bg-dark"
                style={{ pointerEvents: "none" }}
              />

              {/* Box Content */}
              <div className="relative p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Package className="w-5 h-5" style={{ color: "#a4b08a" }} />
                  <h2 className="text-lg font-bold" style={{ color: "#fffff3" }}>
                    Your Stack ({stackItems.length} {stackItems.length === 1 ? "item" : "items"})
                  </h2>
                </div>

                {stackItems.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-sm" style={{ color: "#8A8075" }}>
                      Your stack box is empty. Add products below to get started.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
                    <AnimatePresence>
                      {stackItems.map((item, index) => (
                        <motion.div
                          key={`${item.slug}-${index}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className="relative group"
                        >
                          <div
                            className="relative rounded-lg p-2"
                            style={{
                              backgroundColor: "#2a2a28",
                              border: `1px solid ${item.accentColor}40`,
                            }}
                          >
                            <ProductVial
                              productName={item.name}
                              dosage={item.size}
                              category={item.category}
                              accentColor={item.accentColor}
                              size="thumbnail"
                            />
                            <button
                              onClick={() => removeFromStack(index)}
                              className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                              style={{ backgroundColor: "#EF4444" }}
                            >
                              <X className="w-3 h-3 text-white" />
                            </button>
                          </div>
                          <p
                            className="text-[9px] text-center mt-1 truncate"
                            style={{ color: "#8A8075" }}
                          >
                            {item.name}
                          </p>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>

            {/* Product Grid */}
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#010101" }}>
                Add Products
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {products.map((product) => (
                  <div
                    key={product.slug}
                    className="rounded-lg border overflow-hidden hover:border-opacity-60 transition-all group"
                    style={{
                      backgroundColor: "#ffffff",
                      borderColor: "#D8D4CC",
                    }}
                  >
                    <div
                      className="p-3 flex items-center justify-center"
                      style={{
                        backgroundColor: `${product.accentColor}08`,
                        minHeight: "120px",
                      }}
                    >
                      <ProductVial
                        productName={product.name}
                        dosage={product.size}
                        category={product.category}
                        accentColor={product.accentColor}
                        size="thumbnail"
                      />
                    </div>
                    <div className="p-3">
                      <h4
                        className="text-xs font-semibold mb-1 truncate"
                        style={{ color: "#010101" }}
                      >
                        {product.name}
                      </h4>
                      <p className="text-xs mb-2" style={{ color: "#8A8075" }}>
                        ${product.price}
                      </p>
                      <button
                        onClick={() => addToStack(product)}
                        className="w-full py-1.5 px-3 rounded text-xs font-semibold flex items-center justify-center gap-1 transition-all hover:opacity-80"
                        style={{
                          backgroundColor: "#a4b08a",
                          color: "#000000",
                        }}
                      >
                        <Plus className="w-3 h-3" />
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Order Summary */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div
                className="rounded-lg border p-6"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#D8D4CC",
                }}
              >
                <h2 className="text-xl font-bold mb-6" style={{ color: "#010101" }}>
                  Order Summary
                </h2>

                {/* Subscription Cadence Selector */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-3" style={{ color: "#3A3A3A" }}>
                    Delivery Frequency
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {cadenceOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setSubscriptionCadence(option.value)}
                        className="relative p-3 rounded-lg border-2 text-left transition-all"
                        style={{
                          borderColor: subscriptionCadence === option.value ? "#a4b08a" : "#D8D4CC",
                          backgroundColor: subscriptionCadence === option.value ? "#a4b08a15" : "#ffffff",
                        }}
                      >
                        <div className="text-sm font-semibold" style={{ color: "#010101" }}>
                          {option.label}
                        </div>
                        {option.discount > 0 && (
                          <div className="text-xs font-bold" style={{ color: "#a4b08a" }}>
                            Save {option.discount}%
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-b" style={{ borderColor: "#EAE6DF" }}>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#8A8075" }}>Subtotal ({stackItems.length} items)</span>
                    <span style={{ color: "#3A3A3A" }}>${totalPrice.toFixed(2)}</span>
                  </div>
                  {subscriptionDiscount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span style={{ color: "#a4b08a" }}>Subscription discount (15%)</span>
                      <span style={{ color: "#a4b08a" }}>
                        -${(totalPrice * subscriptionDiscount).toFixed(2)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between pt-3 border-t" style={{ borderColor: "#EAE6DF" }}>
                    <span className="font-bold" style={{ color: "#010101" }}>
                      Total
                    </span>
                    <span className="text-2xl font-bold" style={{ color: "#010101" }}>
                      ${discountedPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Free Gifts */}
                {freeGifts.length > 0 && (
                  <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: "#c6f18420" }}>
                    <p className="text-sm font-semibold mb-2" style={{ color: "#3A3A3A" }}>
                      🎁 Included with your order:
                    </p>
                    <ul className="text-sm space-y-1" style={{ color: "#8A8075" }}>
                      {freeGifts.map((gift, idx) => (
                        <li key={idx}>• {gift}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Next Threshold Progress */}
                {stackItems.length > 0 && stackItems.length < 7 && (
                  <div className="mb-6 p-3 rounded" style={{ backgroundColor: "#EAE6DF" }}>
                    <p className="text-xs font-semibold" style={{ color: "#3A3A3A" }}>
                      {stackItems.length < 3 && `Add ${3 - stackItems.length} more for free bacteriostatic water`}
                      {stackItems.length >= 3 && stackItems.length < 5 && `Add ${5 - stackItems.length} more for free shipping`}
                      {stackItems.length >= 5 && stackItems.length < 7 && `Add ${7 - stackItems.length} more for free cold-pack`}
                    </p>
                  </div>
                )}

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={stackItems.length === 0}
                  className="w-full py-3 px-6 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
                  style={{
                    backgroundColor: "#a4b08a",
                    color: "#000000",
                  }}
                >
                  Add to Order & Checkout
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Trust Badges */}
                <div className="flex justify-center gap-4 text-xs mt-4" style={{ color: "#8A8075" }}>
                  <span>✓ 99.7% Purity</span>
                  <span>✓ COA Included</span>
                  <span>✓ Same-Day Ship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Summary */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 border-t mobile-sticky-cta">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs" style={{ color: "#8A8075" }}>
              {stackItems.length} items • Total
            </p>
            <p className="text-xl font-bold" style={{ color: "#010101" }}>
              ${discountedPrice.toFixed(2)}
            </p>
          </div>
          <button
            onClick={handleCheckout}
            disabled={stackItems.length === 0}
            className="py-3 px-6 rounded-lg font-semibold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              backgroundColor: "#a4b08a",
              color: "#000000",
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
