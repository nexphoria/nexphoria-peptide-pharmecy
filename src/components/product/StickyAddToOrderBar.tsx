"use client";

import { useState, useEffect, useRef } from "react";
import { ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart";
import type { Product, ProductDosage } from "@/lib/products";

interface StickyAddToOrderBarProps {
  product: Product;
  selectedFormat: "vial" | "pen";
  selectedDosage?: ProductDosage;
  /** ref to the BuyBox element — bar appears once this scrolls out of view */
  buyBoxRef: React.RefObject<HTMLElement | null>;
  accentColor?: string;
}

export default function StickyAddToOrderBar({
  product,
  selectedFormat,
  selectedDosage,
  buyBoxRef,
  accentColor = "#B8A44C",
}: StickyAddToOrderBarProps) {
  const [visible, setVisible] = useState(false);
  const { addItem, openDrawer } = useCart();

  const price =
    selectedFormat === "pen" && product.penAvailable
      ? product.penPrice
      : selectedDosage?.price ?? product.price;

  // Watch for buyBox to scroll out of viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show the bar when the BuyBox is NOT intersecting (scrolled past)
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );

    const el = buyBoxRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [buyBoxRef]);

  const handleAddToCart = () => {
    addItem(product, selectedFormat, selectedDosage, 1);
    openDrawer();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
          className="fixed top-0 left-0 right-0 z-50 border-b shadow-lg"
          style={{
            backgroundColor: "#0F0F0E",
            borderColor: "#2A2A28",
          }}
        >
          <div className="container-nex">
            <div className="flex items-center justify-between gap-4 py-3">
              {/* Product info */}
              <div className="flex items-center gap-4 min-w-0">
                <div className="min-w-0">
                  <p
                    className="text-sm font-bold tracking-tight truncate"
                    style={{ color: "#FFFFFF", fontFamily: "var(--font-display)" }}
                  >
                    {product.name}
                  </p>
                  <p className="text-xs" style={{ color: "#8A8075" }}>
                    {selectedDosage?.size ?? product.size}
                    {selectedFormat === "pen" ? " · Pre-loaded Pen" : " · Lyophilized Vial"}
                  </p>
                </div>

                {/* Price */}
                <div
                  className="hidden sm:block text-lg font-bold flex-shrink-0"
                  style={{ color: accentColor }}
                >
                  ${price}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={handleAddToCart}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wide transition-all hover:opacity-90 flex-shrink-0"
                style={{
                  backgroundColor: accentColor,
                  color: "#0A0A08",
                }}
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden sm:inline">Add to Order</span>
                <span className="sm:hidden">Add</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
