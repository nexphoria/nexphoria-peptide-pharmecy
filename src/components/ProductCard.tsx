"use client";

import Link from "next/link";
import { Product } from "@/lib/products";
import ProductVial from "@/components/ProductVial";

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
  className?: string;
}

export default function ProductCard({
  product,
  className = "",
}: ProductCardProps) {
  const basePrice =
    product.dosages && product.dosages.length > 0
      ? Math.min(...product.dosages.map((d) => d.price))
      : product.price;

  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group block h-full ${className}`}
    >
      <div
        className="h-full rounded-lg p-6 transition-all duration-200 hover:shadow-md"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        {/* Product Vial */}
        <div
          className="relative w-full h-40 mb-5 rounded overflow-hidden flex items-center justify-center p-6"
          style={{
            backgroundColor: "#1A1A18",
            boxShadow: `0 0 40px -10px ${product.accentColor || "#C9A24B"}30`,
          }}
        >
          <div className="w-full h-full">
            <ProductVial
              productName={product.name}
              dosage={product.size}
              category={product.category}
              accentColor={product.accentColor}
            />
          </div>
          {/* Purity badge */}
          <div
            className="absolute top-3 right-3 px-2 py-1 rounded-sm text-[10px] font-medium"
            style={{ backgroundColor: "rgba(201,221,105,0.15)", color: "#7a9c1a" }}
          >
            {product.purity}
          </div>
        </div>

        {/* Category */}
        <p
          className="text-[10px] uppercase mb-2"
          style={{ color: "#B8923A", letterSpacing: "0.2em", fontWeight: 500 }}
        >
          {product.category}
        </p>

        {/* Name */}
        <h3
          className="text-lg mb-1 group-hover:opacity-70 transition-opacity"
          style={{ fontWeight: 400, color: "#010101" }}
        >
          {product.name}
        </h3>

        {/* Size */}
        <p className="text-xs mb-3" style={{ color: "#7F7F7D" }}>
          {product.size}
        </p>

        {/* Tagline */}
        <p
          className="text-sm mb-4 line-clamp-2"
          style={{ color: "#7F7F7D", lineHeight: 1.6 }}
        >
          {product.tagline}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
          <span className="text-lg" style={{ fontWeight: 400, color: "#010101" }}>
            ${basePrice}
          </span>
          <span
            className="text-xs uppercase"
            style={{ color: "#7F7F7D", letterSpacing: "0.1em" }}
          >
            Add to Order →
          </span>
        </div>
      </div>
    </Link>
  );
}
