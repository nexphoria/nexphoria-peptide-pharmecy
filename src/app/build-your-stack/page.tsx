"use client";

import { useState, useMemo } from "react";
import { products } from "@/lib/products";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

type CycleOption = "3-month" | "6-month" | "one-time";

type SelectedProduct = {
  slug: string;
  quantity: number;
  price: number;
};

const categories = [
  "All",
  "Recovery & Healing",
  "Longevity",
  "Growth Hormone",
  "Weight Management",
  "Cognitive",
];

const cycleOptions: {
  id: CycleOption;
  name: string;
  savings: string;
  description: string;
  eyebrow: string;
  discount: number;
}[] = [
  {
    id: "3-month",
    name: "3-Month Research Cycle",
    savings: "15% savings",
    description: "Ships every 4 weeks (3 shipments)",
    eyebrow: "Recommended for first-time researchers",
    discount: 0.15,
  },
  {
    id: "6-month",
    name: "6-Month Research Cycle",
    savings: "20% savings",
    description: "Ships every 4 weeks (6 shipments)",
    eyebrow: "For established research protocols",
    discount: 0.2,
  },
  {
    id: "one-time",
    name: "One-Time Purchase",
    savings: "No commitment",
    description: "Full price",
    eyebrow: "",
    discount: 0,
  },
];

const timeline = [
  {
    week: "Week 1-2",
    title: "Initial Phase",
    description:
      "Establishing baseline measurements and beginning compound integration",
  },
  {
    week: "Week 3-4",
    title: "Observation Window",
    description:
      "Primary data collection period. Most researchers note measurable changes",
  },
  {
    week: "Week 5-8",
    title: "Extended Protocol",
    description:
      "Continued observation with compound accumulation at steady-state levels",
  },
  {
    week: "Week 9-12",
    title: "Cycle Completion",
    description:
      "Full protocol complete. Comprehensive data set for analysis",
  },
];

export default function BuildYourStackPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProducts, setSelectedProducts] = useState<
    Map<string, SelectedProduct>
  >(new Map());
  const [selectedCycle, setSelectedCycle] = useState<CycleOption | null>(null);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products.filter(p => !p.comingSoon);
    return products.filter(
      (p) => p.category === selectedCategory && !p.comingSoon
    );
  }, [selectedCategory]);

  const addProduct = (slug: string) => {
    const product = products.find((p) => p.slug === slug);
    if (!product) return;

    const newMap = new Map(selectedProducts);
    const existing = newMap.get(slug);

    if (existing) {
      newMap.set(slug, {
        ...existing,
        quantity: existing.quantity + 1,
      });
    } else {
      newMap.set(slug, {
        slug,
        quantity: 1,
        price: product.price,
      });
    }

    setSelectedProducts(newMap);
  };

  const removeProduct = (slug: string) => {
    const newMap = new Map(selectedProducts);
    const existing = newMap.get(slug);

    if (existing && existing.quantity > 1) {
      newMap.set(slug, {
        ...existing,
        quantity: existing.quantity - 1,
      });
    } else {
      newMap.delete(slug);
    }

    setSelectedProducts(newMap);
  };

  const subtotal = useMemo(() => {
    let total = 0;
    selectedProducts.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }, [selectedProducts]);

  const cycleDiscount = useMemo(() => {
    if (!selectedCycle) return 0;
    const option = cycleOptions.find((o) => o.id === selectedCycle);
    return option ? option.discount : 0;
  }, [selectedCycle]);

  const discountedSubtotal = subtotal * (1 - cycleDiscount);

  const shipments = useMemo(() => {
    if (selectedCycle === "3-month") return 3;
    if (selectedCycle === "6-month") return 6;
    return 1;
  }, [selectedCycle]);

  const totalCyclePrice = discountedSubtotal * shipments;

  const selectedCount = selectedProducts.size;
  const totalItems = useMemo(() => {
    let count = 0;
    selectedProducts.forEach((item) => {
      count += item.quantity;
    });
    return count;
  }, [selectedProducts]);

  const benefits = useMemo(() => {
    return [
      {
        text: "Bacteriostatic water included",
        earned: totalItems >= 3,
      },
      {
        text: "Express shipping included",
        earned: totalItems >= 5,
      },
      {
        text: "Cold-chain packaging included",
        earned: subtotal >= 300,
      },
    ];
  }, [totalItems, subtotal]);

  const currentStep = useMemo(() => {
    if (selectedProducts.size === 0) return 1;
    if (!selectedCycle) return 2;
    return 3;
  }, [selectedProducts, selectedCycle]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9F9F9", paddingTop: "72px" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Build Your Stack" },
          ]}
        />
      </div>
      {/* Step Progress */}
      <div
        className="border-b"
        style={{ borderColor: "#E8E5E0", backgroundColor: "#fff" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {[1, 2, 3].map((step, idx) => {
              const labels = ["Choose", "Cycle", "What to Expect"];
              const isActive = step === currentStep;
              const isComplete = step < currentStep;

              return (
                <div key={step} className="flex items-center flex-1">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                        isComplete
                          ? "bg-[#B8A44C] text-white"
                          : isActive
                          ? "bg-[#B8A44C] text-white"
                          : "bg-[#E8E5E0] text-[#8A8075]"
                      }`}
                    >
                      {isComplete ? (
                        <svg
                          width="14"
                          height="11"
                          viewBox="0 0 14 11"
                          fill="none"
                        >
                          <path
                            d="M1 5.5L5 9.5L13 1.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        step
                      )}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        isActive || isComplete
                          ? "text-black"
                          : "text-[#8A8075]"
                      }`}
                    >
                      {labels[idx]}
                    </span>
                  </div>
                  {idx < 2 && (
                    <div
                      className="flex-1 h-px mx-4"
                      style={{
                        backgroundColor:
                          step < currentStep ? "#B8A44C" : "#E8E5E0",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1">
            {/* Step 1: Choose Compounds */}
            <section className="mb-20">
              <h1 className="text-4xl md:text-5xl font-medium text-black mb-4 tracking-tight">
                Choose Your Compounds
              </h1>
              <p className="text-lg text-[#555] mb-10">
                Select the research peptides for your protocol. Start with one
                or build a comprehensive stack.
              </p>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 mb-10">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === cat
                        ? "bg-[#B8A44C] text-white border border-[#B8A44C]"
                        : "bg-white text-[#555] border border-[#E8E5E0] hover:border-[#B8A44C]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((product) => {
                  const selected = selectedProducts.get(product.slug);
                  const quantity = selected?.quantity || 0;

                  return (
                    <motion.div
                      key={product.slug}
                      layout
                      className={`bg-white rounded-lg p-6 transition-all ${
                        quantity > 0
                          ? "border-2 border-[#B8A44C] bg-[#B8A44C]/5"
                          : "border border-[#E8E5E0] hover:border-[#B8A44C]"
                      }`}
                      style={{
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      }}
                    >
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <div
                          className="w-20 h-20 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
                          style={{ backgroundColor: "#F7F4EE" }}
                        >
                          {hasProductPhoto(product.slug) ? (
                            <Image
                              src={getProductImagePath(product.slug)}
                              alt={product.name}
                              width={64}
                              height={64}
                              className="object-contain"
                            />
                          ) : (
                            <span className="text-sm font-medium text-[#8A8075]">{product.name}</span>
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-medium text-black mb-1">
                            {product.name}
                          </h3>
                          <p className="text-sm text-[#555] mb-2">
                            {product.size}
                          </p>
                          <p className="text-xl font-medium text-black">
                            ${product.price}
                          </p>
                        </div>

                        {/* Add/Remove Buttons */}
                        <div className="flex flex-col items-end justify-between">
                          {quantity === 0 ? (
                            <button
                              onClick={() => addProduct(product.slug)}
                              className="w-10 h-10 rounded-full bg-[#B8A44C] text-white flex items-center justify-center hover:bg-[#8A9570] transition-colors"
                              aria-label="Add product"
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  d="M8 3V13M3 8H13"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </button>
                          ) : (
                            <div className="flex flex-col items-center gap-2">
                              <button
                                onClick={() => addProduct(product.slug)}
                                className="w-8 h-8 rounded-full bg-[#B8A44C] text-white flex items-center justify-center hover:bg-[#8A9570] transition-colors"
                                aria-label="Add more"
                              >
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <path
                                    d="M8 3V13M3 8H13"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </button>
                              <span className="text-lg font-bold text-[#B8A44C]">
                                {quantity}
                              </span>
                              <button
                                onClick={() => removeProduct(product.slug)}
                                className="w-8 h-8 rounded-full border-2 border-[#B8A44C] text-[#B8A44C] flex items-center justify-center hover:bg-[#B8A44C] hover:text-white transition-colors"
                                aria-label="Remove one"
                              >
                                <svg
                                  width="12"
                                  height="2"
                                  viewBox="0 0 12 2"
                                  fill="none"
                                >
                                  <path
                                    d="M1 1H11"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            {/* Step 2: Select Cycle */}
            <AnimatePresence>
              {selectedProducts.size > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-20"
                >
                  <h2 className="text-3xl md:text-4xl font-medium text-black mb-4 tracking-tight">
                    Select Your Cycle
                  </h2>
                  <p className="text-lg text-[#555] mb-10">
                    Choose a research duration that aligns with your protocol
                    objectives.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cycleOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSelectedCycle(option.id)}
                        className={`bg-white rounded-lg p-6 text-left transition-all ${
                          selectedCycle === option.id
                            ? "border-2 border-[#B8A44C] bg-[#B8A44C]/5"
                            : "border border-[#E8E5E0] hover:border-[#B8A44C]"
                        }`}
                        style={{
                          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                        }}
                      >
                        <h3 className="text-xl font-medium text-black mb-2">
                          {option.name}
                        </h3>
                        <p className="text-lg font-semibold text-[#B8A44C] mb-3">
                          {option.savings}
                        </p>
                        <p className="text-sm text-[#555] mb-2">
                          {option.description}
                        </p>
                        {option.eyebrow && (
                          <p className="text-xs text-[#888] italic">
                            {option.eyebrow}
                          </p>
                        )}
                        {selectedCycle === option.id && (
                          <div className="mt-4 pt-4 border-t border-[#E8E5E0]">
                            <p className="text-sm text-[#555]">
                              Per shipment:
                            </p>
                            <p className="text-2xl font-medium text-black">
                              ${discountedSubtotal.toFixed(0)}
                            </p>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>

            {/* Step 3: What to Expect */}
            <AnimatePresence>
              {selectedCycle && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-20"
                >
                  <h2 className="text-3xl md:text-4xl font-medium text-black mb-4 tracking-tight">
                    What to Expect
                  </h2>
                  <p className="text-lg text-[#555] mb-10">
                    A typical research protocol timeline with key observation
                    windows.
                  </p>

                  <div className="relative">
                    {/* Timeline Line */}
                    <div
                      className="absolute left-4 top-0 bottom-0 w-px"
                      style={{ backgroundColor: "#E8E5E0" }}
                    />

                    {/* Timeline Items */}
                    <div className="space-y-8">
                      {timeline.map((item, idx) => (
                        <div key={idx} className="relative pl-12">
                          {/* Dot */}
                          <div
                            className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: "#B8A44C" }}
                          >
                            <div className="w-3 h-3 rounded-full bg-white" />
                          </div>

                          {/* Content */}
                          <div>
                            <p className="text-sm font-semibold text-[#B8A44C] mb-1">
                              {item.week}
                            </p>
                            <h3 className="text-xl font-medium text-black mb-2">
                              {item.title}
                            </h3>
                            <p className="text-[#555]">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <div
                className="bg-white rounded-lg p-6 border border-[#E8E5E0]"
                style={{
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <h3 className="text-2xl font-medium text-black mb-6">
                  Your Protocol
                </h3>

                {selectedProducts.size === 0 ? (
                  <p className="text-[#888] text-sm">
                    No compounds selected yet. Choose from the grid above to
                    build your stack.
                  </p>
                ) : (
                  <>
                    {/* Selected Products */}
                    <div className="space-y-4 mb-6">
                      {Array.from(selectedProducts.values()).map((item) => {
                        const product = products.find(
                          (p) => p.slug === item.slug
                        );
                        if (!product) return null;

                        return (
                          <div
                            key={item.slug}
                            className="flex items-start justify-between"
                          >
                            <div className="flex-1">
                              <p className="font-medium text-black">
                                {product.name}
                              </p>
                              <p className="text-sm text-[#555]">
                                Qty: {item.quantity} × ${item.price}
                              </p>
                            </div>
                            <p className="font-bold text-black">
                              ${(item.price * item.quantity).toFixed(0)}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Selected Cycle */}
                    {selectedCycle && (
                      <div className="mb-6 pb-6 border-b border-[#E8E5E0]">
                        <p className="text-sm text-[#555] mb-1">
                          Selected Cycle:
                        </p>
                        <p className="font-semibold text-black">
                          {
                            cycleOptions.find((o) => o.id === selectedCycle)
                              ?.name
                          }
                        </p>
                      </div>
                    )}

                    {/* Benefits */}
                    <div className="mb-6 pb-6 border-b border-[#E8E5E0]">
                      <p className="text-sm font-semibold text-black mb-3">
                        Benefits Earned:
                      </p>
                      <div className="space-y-2">
                        {benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div
                              className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${
                                benefit.earned
                                  ? "bg-[#B8A44C]"
                                  : "bg-[#E8E5E0]"
                              }`}
                            >
                              {benefit.earned && (
                                <svg
                                  width="12"
                                  height="10"
                                  viewBox="0 0 14 11"
                                  fill="none"
                                >
                                  <path
                                    d="M1 5.5L5 9.5L13 1.5"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </div>
                            <p
                              className={`text-sm ${
                                benefit.earned
                                  ? "text-black font-medium"
                                  : "text-[#737373]"
                              }`}
                            >
                              {benefit.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-[#555]">
                        <span>Subtotal per shipment:</span>
                        <span className="font-semibold">
                          ${subtotal.toFixed(0)}
                        </span>
                      </div>
                      {cycleDiscount > 0 && (
                        <div className="flex justify-between text-[#B8A44C]">
                          <span>Cycle discount ({cycleDiscount * 100}%):</span>
                          <span className="font-semibold">
                            -${(subtotal * cycleDiscount).toFixed(0)}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between text-[#555]">
                        <span>Discounted per shipment:</span>
                        <span className="font-semibold">
                          ${discountedSubtotal.toFixed(0)}
                        </span>
                      </div>
                      <div className="pt-3 border-t border-[#E8E5E0]">
                        <div className="flex justify-between">
                          <span className="font-bold text-black">
                            Total for full cycle:
                          </span>
                          <span className="font-bold text-black text-xl">
                            ${totalCyclePrice.toFixed(0)}
                          </span>
                        </div>
                        {shipments > 1 && (
                          <p className="text-xs text-[#888] mt-1">
                            {shipments} shipments × ${discountedSubtotal.toFixed(0)}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <button
                      disabled={!selectedCycle}
                      className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${
                        selectedCycle
                          ? "bg-[#B8A44C] text-black hover:bg-[#8A9570]"
                          : "bg-[#E8E5E0] text-[#737373] cursor-not-allowed"
                      }`}
                    >
                      Proceed to Checkout
                    </button>
                    <p className="text-xs text-[#888] text-center mt-3">
                      Modify or cancel anytime
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
