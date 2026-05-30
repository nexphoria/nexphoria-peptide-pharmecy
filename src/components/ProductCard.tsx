"use client";

import Link from "next/link";
import { Product } from "@/lib/products";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";
import { useCart } from "@/lib/cart";
import VialSVG from "@/components/VialSVG";
import { getCategoryColor } from "@/lib/vial-colors";

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
  className?: string;
  compareMode?: boolean;
  isCompared?: boolean;
  onCompareToggle?: (slug: string) => void;
  compareDisabled?: boolean;
  priority?: boolean;
}

export default function ProductCard({
  product,
  className = "",
  compareMode = false,
  isCompared = false,
  onCompareToggle,
  compareDisabled = false,
  priority = false,
}: ProductCardProps) {
  const { addItem, openDrawer } = useCart();
  const basePrice =
    product.dosages && product.dosages.length > 0
      ? Math.min(...product.dosages.map((d) => d.price))
      : product.price;

  function handleAddToOrder(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, "vial", product.dosages?.[0], 1);
    openDrawer();
  }

  return (
    <div className={`group relative h-full flex flex-col ${className}`}>
      <div
        className="h-full bg-white overflow-hidden flex flex-col transition-all duration-500"
        style={{
          border: "1px solid #E5E5E5",
          borderRadius: "8px",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.07)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        }}
      >
        {/* Clickable area: image + text */}
        <Link href={`/products/${product.slug}`} className="flex flex-col flex-1 min-h-0">
          {/* Product Image */}
          <div
            className="w-full h-52 overflow-hidden relative flex-shrink-0 flex items-center justify-center"
            style={{ backgroundColor: "#F7F7F7" }}
          >
            {hasProductPhoto(product.slug) ? (
              <img
                src={getProductImagePath(product.slug)}
                alt={product.name}
                width={400}
                height={208}
                loading={priority ? "eager" : "lazy"}
                fetchPriority={priority ? "high" : "auto"}
                decoding="async"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-6" style={{ backgroundColor: "#1A1A18" }}>
                <VialSVG
                  name={product.name}
                  size={product.dosages?.[0]?.size || product.size || "5mg"}
                  capColor={getCategoryColor(product.category)}
                  className="max-h-full"
                />
              </div>
            )}

          </div>

          {/* Body */}
          <div className="p-5 flex flex-col flex-1 text-center">
            <p
              className="text-[10px] uppercase mb-2 font-medium"
              style={{ letterSpacing: "0.14em", color: "#B8A44C" }}
            >
              {product.category}
            </p>
            <h3 className="text-base font-normal mb-1 leading-snug" style={{ color: "#1A1A1A", fontWeight: 400 }}>
              {product.name}
            </h3>
            <p className="text-xs mb-3 leading-relaxed flex-1 line-clamp-2" style={{ color: "#888" }}>
              {product.tagline}
            </p>
          </div>
        </Link>

        {/* Price + Add to Order — outside Link */}
        <div className="px-5 pb-5">
          <div
            className="flex flex-col items-center gap-3 pt-4"
            style={{ borderTop: "1px solid #E5E5E5" }}
          >
            <div className="text-center">
              <span className="text-base font-medium" style={{ color: "#B8A44C" }}>
                {product.dosages && product.dosages.length > 1 ? "From " : ""}${basePrice}
              </span>
              <span className="text-xs ml-1.5" style={{ color: "#888" }}>
                {product.dosages && product.dosages.length > 1 ? product.dosages[0].size : product.size}
              </span>
            </div>
            <button
              onClick={handleAddToOrder}
              className="w-full text-[10px] font-medium uppercase py-2.5 transition-all duration-300"
              style={{
                letterSpacing: "0.15em",
                color: "#1A1A1A",
                border: "1px solid #1A1A1A",
                borderRadius: "999px",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1A1A1A";
                (e.currentTarget as HTMLButtonElement).style.color = "#F9F9F9";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "#1A1A1A";
              }}
              aria-label={`Add ${product.name} to order`}
            >
              Add to Order
            </button>
          </div>
        </div>
      </div>

      {/* Compare toggle */}
      {compareMode && onCompareToggle && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onCompareToggle(product.slug);
          }}
          disabled={compareDisabled}
          className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all z-10"
          style={{
            backgroundColor: isCompared ? "#1A1A1A" : "rgba(249,249,249,0.92)",
            color: isCompared ? "#F9F9F9" : "#555",
            border: isCompared ? "1px solid #1A1A1A" : "1px solid #E5E5E5",
            opacity: compareDisabled ? 0.4 : 1,
            cursor: compareDisabled ? "not-allowed" : "pointer",
            backdropFilter: "blur(4px)",
          }}
          aria-pressed={isCompared}
          aria-label={
            isCompared
              ? `Remove ${product.name} from comparison`
              : `Add ${product.name} to comparison`
          }
        >
          {isCompared ? (
            <>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <polyline points="1,5 4,8 9,2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Added
            </>
          ) : (
            <>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <line x1="5" y1="1" x2="5" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="1" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Compare
            </>
          )}
        </button>
      )}
    </div>
  );
}
