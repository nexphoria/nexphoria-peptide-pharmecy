"use client";

import Link from "next/link";
import { Product } from "@/lib/products";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
  className?: string;
  // Compare feature
  compareMode?: boolean;
  isCompared?: boolean;
  onCompareToggle?: (slug: string) => void;
  compareDisabled?: boolean; // true when 3 selected and this one isn't in list
}

export default function ProductCard({
  product,
  className = "",
  compareMode = false,
  isCompared = false,
  onCompareToggle,
  compareDisabled = false,
}: ProductCardProps) {
  const basePrice =
    product.dosages && product.dosages.length > 0
      ? Math.min(...product.dosages.map((d) => d.price))
      : product.price;

  return (
    <div className={`group relative h-full ${className}`}>
      <Link href={`/products/${product.slug}`} className="block h-full">
        <div className="h-full bg-white rounded-lg overflow-hidden card-shadow transition-all duration-200 hover:-translate-y-0.5">
          {/* Product Image */}
          <div className="w-full h-52 overflow-hidden bg-[#f5f5f2] relative">
            {hasProductPhoto(product.slug) ? (
              <img
                src={getProductImagePath(product.slug)}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "#F0EDE7" }}>
                <span className="text-sm font-semibold text-[#A4B08A] text-center px-4">
                  {product.name}
                </span>
              </div>
            )}

            {/* Badge overlay — top-right corner of image */}
            {product.badge && (
              <span
                className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider leading-tight z-10 select-none"
                style={product.badge === "POPULAR" ? {
                  backgroundColor: "#C9A24B",
                  color: "#FFFFF3",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
                } : {
                  backgroundColor: "#010101",
                  color: "#FFFFF3",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
                }}
              >
                {product.badge === "POPULAR" ? "Popular" : "New"}
              </span>
            )}
          </div>

          {/* Body */}
          <div className="p-5">
            <p className="text-[11px] uppercase tracking-wider text-[#888] mb-1.5">
              {product.category}
            </p>
            <h3 className="text-base font-medium mb-1 group-hover:opacity-70 transition-opacity">
              {product.name}
            </h3>
            <p className="text-xs text-[#888] mb-3">{product.size}</p>

            <div className="flex items-center justify-between pt-3 border-t border-[#ECEAE4]">
              <span className="text-base font-semibold">${basePrice}</span>
              <span className="text-xs text-[#A4B08A] font-medium uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                View
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Compare toggle — shown when compareMode is active */}
      {compareMode && onCompareToggle && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onCompareToggle(product.slug);
          }}
          disabled={compareDisabled}
          className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all z-10"
          style={{
            backgroundColor: isCompared ? "#010101" : "rgba(255,255,251,0.92)",
            color: isCompared ? "#FFFFF3" : "#555",
            border: isCompared ? "none" : "1px solid #ECEAE4",
            opacity: compareDisabled ? 0.4 : 1,
            cursor: compareDisabled ? "not-allowed" : "pointer",
            backdropFilter: "blur(4px)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
          }}
          aria-pressed={isCompared}
          aria-label={isCompared ? `Remove ${product.name} from comparison` : `Add ${product.name} to comparison`}
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
