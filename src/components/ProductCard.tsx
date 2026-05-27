"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useCart } from "@/lib/cart";
import { Product } from "@/lib/products";
import ProductVial from "./ProductVial";
import ProductPen from "./ProductPen";

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
  className?: string;
}

export default function ProductCard({
  product,
  showAddToCart = true,
  className = ""
}: ProductCardProps) {
  const { addItem, openDrawer } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    openDrawer();
  };

  // Use base price without discounts
  const basePrice = product.dosages && product.dosages.length > 0
    ? Math.min(...product.dosages.map(d => d.price))
    : product.price;

  return (
    <motion.div
      className={`group relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -4,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
      }}
    >
      <Link href={`/products/${product.slug}`} className="block h-full">
        <div
          className="product-card h-full overflow-hidden transition-all duration-300"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: isHovered ? "var(--border-medium)" : "var(--border-subtle)",
            transform: isHovered ? "scale(1.01)" : "scale(1)",
            boxShadow: isHovered
              ? "0 4px 24px rgba(0, 0, 0, 0.08), 0 0 0 1px var(--border-medium)"
              : "none"
          }}
        >
          {/* Price Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="badge-price text-xs font-semibold uppercase tracking-wide">
              ${basePrice}
            </span>
          </div>

          {/* Product Visual */}
          <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{
              height: "200px",
              backgroundColor: "#F5F3F0",
            }}
          >
            {/* Accent gradient background */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${product.accentColor}08 0%, transparent 70%)`,
              }}
            />

            {/* Product category initial or molecular icon */}
            <div
              className="relative z-10 flex items-center justify-center"
              style={{
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.3s ease"
              }}
            >
              <span
                className="font-bold uppercase tracking-tight"
                style={{
                  fontSize: "5rem",
                  fontFamily: "var(--font-display)",
                  color: `${product.accentColor}`,
                  opacity: 0.15,
                  lineHeight: 1,
                }}
              >
                {product.name.charAt(0)}
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-6">
            {/* Category */}
            <div className="mb-3">
              <span className="badge-category text-xs font-medium uppercase tracking-wide">
                {product.category}
              </span>
            </div>

            {/* Product Name */}
            <h3
              className="text-xl font-bold uppercase tracking-tight mb-2"
              style={{
                fontFamily: "var(--font-display)",
                lineHeight: "1.2",
                color: "#010101"
              }}
            >
              {product.name}
            </h3>

            {/* Tagline */}
            <p className="text-sm mb-4 line-clamp-2 leading-relaxed" style={{ color: "#7F7F7D" }}>
              {product.tagline}
            </p>

            {/* Purity Badge */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-acid-green"></div>
                <span className="text-xs font-medium" style={{ color: "#7F7F7D" }}>
                  {product.purity} Purity
                </span>
              </div>
              {product.penAvailable && (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-accent-growth"></div>
                  <span className="text-xs font-medium" style={{ color: "#7F7F7D" }}>
                    Pen Available
                  </span>
                </div>
              )}
            </div>

            {/* Add to Order Button */}
            {showAddToCart && (
              <button
                onClick={handleAddToCart}
                className="btn-acid w-full justify-center group-hover:shadow-lg transition-all duration-300"
              >
                <Plus className="w-4 h-4" />
                ADD TO ORDER
              </button>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}