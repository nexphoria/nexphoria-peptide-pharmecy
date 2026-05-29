"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight, Package, X, Search, Filter } from "lucide-react";
import { products, categories } from "@/lib/products";
import ProductVial from "@/components/ProductVial";
import { useCart } from "@/lib/cart";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";

// Filter out accessories and "coming soon" products from stack builder
const stackableProducts = products.filter(
  (p) => p.category !== "Accessories" && !p.comingSoon
);

export default function BuildYourStackPage() {
  const router = useRouter();
  const { addItem } = useCart();
  const [stackItems, setStackItems] = useState<typeof products>([]);
  const [subscriptionCadence, setSubscriptionCadence] = useState<"one-time" | "3-month" | "6-month">("one-time");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const addToStack = (product: typeof products[0]) => {
    setStackItems([...stackItems, product]);
  };

  const removeFromStack = (index: number) => {
    setStackItems(stackItems.filter((_, i) => i !== index));
  };

  const totalPrice = stackItems.reduce((sum, item) => sum + item.price, 0);

  // 10% off 3-month cycle, 15% off 6-month cycle
  const subscriptionDiscount = subscriptionCadence === "6-month" ? 0.15 : subscriptionCadence === "3-month" ? 0.10 : 0;
  const discountedPrice = totalPrice * (1 - subscriptionDiscount);

  // Free gifts
  const freeGifts = [];
  if (stackItems.length >= 3) freeGifts.push("Free bacteriostatic water");
  if (stackItems.length >= 5) freeGifts.push("Free shipping");
  if (stackItems.length >= 7) freeGifts.push("Free cold-pack");

  const handleCheckout = () => {
    stackItems.forEach(product => {
      const months = subscriptionCadence === "3-month" ? 3 : subscriptionCadence === "6-month" ? 6 : 1;
      addItem(product, "vial", undefined, months);
    });
    router.push("/checkout");
  };

  const cadenceOptions = [
    { value: "one-time", label: "One-Time Purchase", discount: 0, desc: "Ships once" },
    { value: "3-month", label: "3-Month Research Cycle", discount: 10, desc: "Monthly billing x 3" },
    { value: "6-month", label: "6-Month Research Cycle", discount: 15, desc: "Monthly billing x 6" },
  ] as const;

  // Category filter options — exclude Accessories from the builder
  const builderCategories = ["All", ...categories.filter(c => c !== "All" && c !== "Accessories")];

  // Filtered product list
  const filteredProducts = useMemo(() => {
    return stackableProducts.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesSearch = searchQuery === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Check if a product is already in the stack
  const stackSlugs = stackItems.map((i) => i.slug);

  return (
    <div className="min-h-screen pb-24 lg:pb-0" style={{ backgroundColor: "#fffff3", paddingTop: "80px" }}>
      <div className="container-nex py-12 md:py-16">
        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "#010101", fontFamily: "var(--font-display)" }}
          >
            Build Your Stack
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#8A8075" }}>
            Select your peptides and create a custom research protocol. Save up to 15% with a research cycle.
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
                minHeight: "260px",
              }}
            >
              {/* DNA Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-10 pattern-bg-dark"
                style={{ pointerEvents: "none" }}
              />

              {/* Branded Box SVG - Background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                <svg
                  viewBox="0 0 300 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-md h-auto"
                >
                  <path
                    d="M 50 60 L 250 60 L 270 80 L 270 160 L 250 180 L 50 180 L 30 160 L 30 80 Z"
                    fill="none"
                    stroke="#a4b08a"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                  />
                  <text
                    x="150"
                    y="110"
                    textAnchor="middle"
                    fontFamily="system-ui, sans-serif"
                    fontSize="24"
                    fontWeight="700"
                    letterSpacing="4"
                    fill="#a4b08a"
                  >
                    NEXPHORIA
                  </text>
                  <line x1="80" y1="130" x2="220" y2="130" stroke="#a4b08a" strokeWidth="2" />
                </svg>
              </div>

              {/* Box Content */}
              <div className="relative p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Package className="w-5 h-5" style={{ color: "#a4b08a" }} />
                  <h2 className="text-lg font-bold" style={{ color: "#fffff3" }}>
                    Your Stack ({stackItems.length} {stackItems.length === 1 ? "item" : "items"})
                  </h2>
                </div>

                {stackItems.length === 0 ? (
                  <div className="text-center py-10">
                    <p className="text-sm" style={{ color: "#8A8075" }}>
                      Your stack is empty. Add compounds below to get started.
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
                              backgroundColor: hasProductPhoto(item.slug) ? "#F7F4EE" : "#2a2a28",
                              border: `1px solid ${item.accentColor}40`,
                            }}
                          >
                            {hasProductPhoto(item.slug) ? (
                              <img
                                src={getProductImagePath(item.slug)}
                                alt={item.name}
                                className="w-full h-auto object-contain"
                                style={{ maxHeight: "80px" }}
                              />
                            ) : (
                              <ProductVial
                                productName={item.name}
                                dosage={item.size}
                                category={item.category}
                                accentColor={item.accentColor}
                                size="thumbnail"
                              />
                            )}
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

            {/* Search + Category Filter Row */}
            <div className="space-y-3">
              {/* Search */}
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                  style={{ color: "#8A8075" }}
                />
                <input
                  type="text"
                  placeholder="Search compounds..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "#D8D4CC",
                    color: "#010101",
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <X className="w-4 h-4" style={{ color: "#8A8075" }} />
                  </button>
                )}
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {builderCategories.map((cat) => {
                  const count = cat === "All"
                    ? stackableProducts.length
                    : stackableProducts.filter((p) => p.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                      style={{
                        backgroundColor: activeCategory === cat ? "#a4b08a" : "#EAE6DF",
                        color: activeCategory === cat ? "#000000" : "#8A8075",
                      }}
                    >
                      {cat} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Product Grid */}
            <div>
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-sm" style={{ color: "#8A8075" }}>
                    No compounds found. Try a different search or category.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {filteredProducts.map((product) => {
                    const alreadyInStack = stackSlugs.includes(product.slug);
                    return (
                      <div
                        key={product.slug}
                        className="rounded-lg border overflow-hidden transition-all group"
                        style={{
                          backgroundColor: "#ffffff",
                          borderColor: alreadyInStack ? "#a4b08a" : "#D8D4CC",
                          boxShadow: alreadyInStack ? "0 0 0 2px #a4b08a40" : "none",
                        }}
                      >
                        <div
                          className="p-3 flex items-center justify-center"
                          style={{
                            backgroundColor: hasProductPhoto(product.slug) ? "#F7F4EE" : `${product.accentColor}08`,
                            minHeight: "110px",
                          }}
                        >
                          {hasProductPhoto(product.slug) ? (
                            <img
                              src={getProductImagePath(product.slug)}
                              alt={product.name}
                              className="w-full h-auto object-contain"
                              style={{ maxHeight: "90px" }}
                            />
                          ) : (
                            <ProductVial
                              productName={product.name}
                              dosage={product.size}
                              category={product.category}
                              accentColor={product.accentColor}
                              size="thumbnail"
                            />
                          )}
                        </div>
                        <div className="p-3">
                          <p
                            className="text-[10px] uppercase tracking-wider mb-0.5"
                            style={{ color: product.accentColor }}
                          >
                            {product.category}
                          </p>
                          <h4
                            className="text-xs font-semibold mb-1 truncate"
                            style={{ color: "#010101" }}
                          >
                            {product.name}
                          </h4>
                          <p className="text-xs mb-2" style={{ color: "#8A8075" }}>
                            {product.size} &middot; ${product.price}
                          </p>
                          <button
                            onClick={() => addToStack(product)}
                            className="w-full py-1.5 px-3 rounded text-xs font-semibold flex items-center justify-center gap-1 transition-all hover:opacity-80"
                            style={{
                              backgroundColor: alreadyInStack ? "#E8EDE2" : "#a4b08a",
                              color: "#000000",
                            }}
                          >
                            <Plus className="w-3 h-3" />
                            {alreadyInStack ? "Add Again" : "Add"}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
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
                  <div className="grid grid-cols-1 gap-2">
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
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-semibold" style={{ color: "#010101" }}>
                              {option.label}
                            </div>
                            <div className="text-xs" style={{ color: "#8A8075" }}>
                              {option.desc}
                            </div>
                          </div>
                          {option.discount > 0 && (
                            <div className="text-xs font-bold ml-3 flex-shrink-0" style={{ color: "#a4b08a" }}>
                              Save {option.discount}%
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stack Item Summary */}
                {stackItems.length > 0 && (
                  <div className="mb-4 max-h-48 overflow-y-auto space-y-2 pr-1">
                    {stackItems.map((item, index) => (
                      <div key={`${item.slug}-${index}`} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeFromStack(index)}
                            className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 hover:opacity-80"
                            style={{ backgroundColor: "#EAE6DF" }}
                          >
                            <X className="w-2.5 h-2.5" style={{ color: "#8A8075" }} />
                          </button>
                          <span style={{ color: "#3A3A3A" }} className="truncate max-w-[140px]">
                            {item.name} <span style={{ color: "#8A8075" }}>({item.size})</span>
                          </span>
                        </div>
                        <span style={{ color: "#3A3A3A" }} className="flex-shrink-0">${item.price}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-b" style={{ borderColor: "#EAE6DF" }}>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#8A8075" }}>Subtotal ({stackItems.length} items)</span>
                    <span style={{ color: "#3A3A3A" }}>${totalPrice.toFixed(2)}</span>
                  </div>
                  {subscriptionDiscount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span style={{ color: "#a4b08a" }}>
                        Cycle discount ({subscriptionCadence === "6-month" ? "15" : "10"}%)
                      </span>
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
                      Included with your order:
                    </p>
                    <ul className="text-sm space-y-1" style={{ color: "#8A8075" }}>
                      {freeGifts.map((gift, idx) => (
                        <li key={idx}>+ {gift}</li>
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
                  <span>99.7% Purity</span>
                  <span>COA Included</span>
                  <span>Same-Day Ship</span>
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
              {stackItems.length} items &middot; Total
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
