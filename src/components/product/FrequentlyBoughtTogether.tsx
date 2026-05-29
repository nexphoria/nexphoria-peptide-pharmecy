"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Plus, Check, Package } from "lucide-react";
import { useCart } from "@/lib/cart";
import { products, Product } from "@/lib/products";
import { PROTOCOL_PAIRINGS } from "@/lib/protocol-pairings";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";

interface Props {
  currentSlug: string;
}

/**
 * Build a 2-3 item bundle for the current product.
 * - Primary companion: from PROTOCOL_PAIRINGS (1 item)
 * - Optional secondary: from current product's relatedSlugs, excluding primary
 *
 * If no pairing exists we fall back to relatedSlugs[0] and relatedSlugs[1].
 */
function getBundleItems(currentSlug: string): { companion: Product; secondary?: Product } | null {
  const current = products.find((p) => p.slug === currentSlug);
  if (!current) return null;

  const pairing = PROTOCOL_PAIRINGS[currentSlug];
  let companionSlug: string | undefined = pairing?.slug;

  // Fallback to first relatedSlug
  if (!companionSlug) {
    companionSlug = current.relatedSlugs?.[0];
  }
  if (!companionSlug) return null;

  const companion = products.find((p) => p.slug === companionSlug);
  if (!companion) return null;

  // Find a secondary product: from relatedSlugs, not the companion, not self
  const secondarySlug = current.relatedSlugs?.find(
    (s) => s !== companionSlug && s !== currentSlug
  );
  const secondary = secondarySlug ? products.find((p) => p.slug === secondarySlug) : undefined;

  return { companion, secondary };
}

export default function FrequentlyBoughtTogether({ currentSlug }: Props) {
  const { addItem, openDrawer } = useCart();
  const current = products.find((p) => p.slug === currentSlug);
  const bundle = current ? getBundleItems(currentSlug) : null;

  const [addedState, setAddedState] = useState<"idle" | "adding" | "done">("idle");
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    [currentSlug]: true,
    ...(bundle?.companion ? { [bundle.companion.slug]: true } : {}),
    ...(bundle?.secondary ? { [bundle.secondary.slug]: true } : {}),
  });

  if (!current || !bundle) return null;

  const { companion, secondary } = bundle;

  const allItems = [
    current,
    companion,
    ...(secondary ? [secondary] : []),
  ];

  const selectedItems = allItems.filter((p) => checkedItems[p.slug]);
  const totalPrice = selectedItems.reduce((sum, p) => sum + p.price, 0);
  const originalPrice = selectedItems.reduce((sum, p) => sum + p.price, 0);
  // Bundle discount: 5% for 2 items, 8% for 3 items
  const discountPct = selectedItems.length >= 3 ? 0.08 : selectedItems.length === 2 ? 0.05 : 0;
  const savings = Math.round(originalPrice * discountPct);
  const finalPrice = originalPrice - savings;

  const handleToggle = (slug: string) => {
    // Always keep at least 2 items checked
    const currentChecked = Object.entries(checkedItems).filter(([, v]) => v).length;
    if (currentChecked <= 2 && checkedItems[slug]) return;
    setCheckedItems((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  const handleAddBundle = () => {
    setAddedState("adding");
    selectedItems.forEach((p) => addItem(p, "vial"));
    setTimeout(() => {
      setAddedState("done");
      openDrawer();
      setTimeout(() => setAddedState("idle"), 2000);
    }, 400);
  };

  return (
    <section
      className="py-14 border-t"
      style={{ borderColor: "#ECEAE4", backgroundColor: "#FAFAF6" }}
    >
      <div className="container-nex">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex items-center gap-2 mb-2">
            <Package className="w-4 h-4 text-[#A4B08A]" />
            <p className="text-[11px] uppercase tracking-wider text-[#A4B08A] font-semibold">
              Frequently Bought Together
            </p>
          </div>
          <h2 className="text-2xl font-medium tracking-tight mb-1">
            Bundle &amp; Save
          </h2>
          <p className="text-sm text-[#777] mb-8 max-w-lg leading-relaxed">
            Researchers commonly order these compounds together.{" "}
            {secondary ? "Save 8% when you add all three." : "Save 5% when you add both."}
          </p>

          <div className="max-w-2xl">
            {/* Product rows */}
            <div className="bg-white rounded-2xl card-shadow overflow-hidden">
              <div className="divide-y" style={{ borderColor: "#F0EDE8" }}>
                {allItems.map((product, idx) => {
                  const isChecked = checkedItems[product.slug];
                  const hasPhoto = hasProductPhoto(product.slug);
                  const isCurrent = product.slug === currentSlug;

                  return (
                    <div
                      key={product.slug}
                      className="flex items-center gap-4 px-5 py-4 transition-colors"
                      style={{
                        backgroundColor: isChecked ? "#FFFFFF" : "#F8F7F3",
                      }}
                    >
                      {/* Checkbox — can't uncheck current product if it would leave <2 */}
                      <button
                        onClick={() => handleToggle(product.slug)}
                        className="flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all"
                        style={{
                          borderColor: isChecked ? "#A4B08A" : "#D0CEC8",
                          backgroundColor: isChecked ? "#A4B08A" : "transparent",
                        }}
                        aria-label={`${isChecked ? "Remove" : "Add"} ${product.name}`}
                      >
                        {isChecked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                      </button>

                      {/* Product image */}
                      <div
                        className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center"
                        style={{ backgroundColor: "#F0EDE7" }}
                      >
                        {hasPhoto ? (
                          <img
                            src={getProductImagePath(product.slug)}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-[9px] font-semibold text-[#A4B08A] text-center px-1 leading-tight">
                            {product.name}
                          </span>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="text-xs text-[#888] truncate">{product.category}</p>
                          {isCurrent && (
                            <span className="text-[9px] uppercase tracking-widest text-white font-semibold px-1.5 py-0.5 rounded bg-[#A4B08A]">
                              This item
                            </span>
                          )}
                          {idx === 1 && (
                            <span className="text-[9px] uppercase tracking-widest text-[#A4B08A] font-semibold px-1.5 py-0.5 rounded border border-[#A4B08A]">
                              Recommended
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-medium leading-tight truncate">{product.name}</p>
                        <p className="text-xs text-[#888] mt-0.5">{product.size}</p>
                      </div>

                      {/* Price */}
                      <div className="flex-shrink-0 text-right">
                        <p className="text-sm font-semibold">${product.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Connector */}
              <div
                className="flex items-center gap-3 px-5 py-3 border-t"
                style={{ borderColor: "#F0EDE8", backgroundColor: "#F8F7F2" }}
              >
                <div className="flex items-center gap-1.5">
                  {allItems.map((p, i) => (
                    <span key={p.slug} className="flex items-center gap-1.5">
                      <span
                        className="text-xs font-medium text-[#444] transition-opacity"
                        style={{ opacity: checkedItems[p.slug] ? 1 : 0.35 }}
                      >
                        {p.name}
                      </span>
                      {i < allItems.length - 1 && (
                        <Plus className="w-3 h-3 text-[#BBBAB4]" />
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing + CTA */}
              <div className="px-5 py-4 border-t" style={{ borderColor: "#F0EDE8" }}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-[#888] mb-0.5">
                      {selectedItems.length} item{selectedItems.length !== 1 ? "s" : ""} selected
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-semibold tracking-tight">
                        ${finalPrice}
                      </span>
                      {savings > 0 && (
                        <>
                          <span className="text-sm text-[#AAA] line-through">${originalPrice}</span>
                          <span
                            className="text-xs font-semibold px-1.5 py-0.5 rounded"
                            style={{ backgroundColor: "#EDF5E8", color: "#4A7A3F" }}
                          >
                            Save ${savings} ({Math.round(discountPct * 100)}% off)
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleAddBundle}
                  disabled={addedState !== "idle" || selectedItems.length < 1}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
                  style={{
                    backgroundColor: addedState === "done" ? "#6B8C5F" : "#A4B08A",
                  }}
                >
                  {addedState === "done" ? (
                    <>
                      <Check className="w-4 h-4" strokeWidth={2.5} />
                      Added to Order
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      Add {selectedItems.length} Item{selectedItems.length !== 1 ? "s" : ""} to Order
                      {savings > 0 && ` — Save $${savings}`}
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Sub-note */}
            <p className="text-[11px] text-[#AAA] mt-3 text-center">
              Uncheck any item to customize your bundle. Discount applied automatically at checkout.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
