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

  // Determine the "from" price (lowest available price)
  const fromPrice = product.dosages && product.dosages.length > 0
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
            borderColor: isHovered ? "var(--dark-border-hover)" : "var(--dark-border)",
            transform: isHovered ? "scale(1.02)" : "scale(1)",
            boxShadow: isHovered
              ? "0 8px 32px rgba(0, 0, 0, 0.8), 0 0 0 1px var(--dark-border-hover)"
              : "none"
          }}
        >
          {/* Price Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="badge-price text-xs font-semibold uppercase tracking-wide">
              FROM ${fromPrice}
            </span>
          </div>

          {/* Product Visual */}
          <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{
              height: "200px",
              backgroundColor: "var(--dark-bg)",
            }}
          >
            {/* Subtle pattern background */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.02]"
              style={{
                backgroundImage: "url(/dna-pattern.png)",
                backgroundSize: "300px auto",
                backgroundRepeat: "repeat",
                filter: "invert(1)",
              }}
            />

            {/* Accent glow behind product */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 60% 50% at 50% 55%, ${product.accentColor}15 0%, transparent 70%)`,
              }}
            />

            {/* Product Image */}
            <div
              style={{
                height: "160px",
                width: "120px",
                position: "relative",
                zIndex: 1,
                filter: `drop-shadow(0 8px 20px ${product.accentColor}25)`,
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.3s ease"
              }}
            >
              <img
                src="/products/vial-hero-1.png"
                alt={product.name}
                className="w-full h-full object-contain"
                style={{
                  filter: `drop-shadow(0 0 20px ${product.accentColor}30)`
                }}
              />
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
              className="text-xl font-bold uppercase tracking-tight mb-2 text-primary"
              style={{
                fontFamily: "var(--font-display)",
                lineHeight: "1.2"
              }}
            >
              {product.name}
            </h3>

            {/* Tagline */}
            <p className="text-sm text-secondary mb-4 line-clamp-2 leading-relaxed">
              {product.tagline}
            </p>

            {/* Purity Badge */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-acid-green"></div>
                <span className="text-xs font-medium text-secondary">
                  {product.purity} Purity
                </span>
              </div>
              {product.penAvailable && (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-accent-growth"></div>
                  <span className="text-xs font-medium text-secondary">
                    Pen Available
                  </span>
                </div>
              )}
            </div>

            {/* Add to Cart Button */}
            {showAddToCart && (
              <button
                onClick={handleAddToCart}
                className="btn-acid w-full justify-center group-hover:shadow-lg transition-all duration-300"
              >
                <Plus className="w-4 h-4" />
                ADD TO CART
              </button>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}