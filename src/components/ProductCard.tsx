"use client";

import Link from "next/link";
import { Product } from "@/lib/products";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";
import { useCart } from "@/lib/cart";
import ProductVial from "@/components/ProductVial";

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
  className?: string;
  compareMode?: boolean;
  isCompared?: boolean;
  onCompareToggle?: (slug: string) => void;
  compareDisabled?: boolean;
}

/** Deterministic rating 4.70–5.00 from slug hash */
function getProductRating(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) & 0x7fffffff;
  }
  return 4.70 + (hash % 31) / 100;
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const partial = rating - full;

  return (
    <div className="star-rating">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = i < full ? 1 : i === full ? partial : 0;
        return (
          <svg key={i} width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id={`star-${i}-${rating.toFixed(2)}`} x1="0" x2="1" y1="0" y2="0">
                <stop offset={`${fill * 100}%`} stopColor="#C9A24B" />
                <stop offset={`${fill * 100}%`} stopColor="#DDD" />
              </linearGradient>
            </defs>
            <path
              d="M5.5 1l1.18 2.39 2.64.38-1.91 1.86.45 2.63L5.5 7l-2.36 1.26.45-2.63-1.91-1.86 2.64-.38z"
              fill={`url(#star-${i}-${rating.toFixed(2)})`}
            />
          </svg>
        );
      })}
    </div>
  );
}


export default function ProductCard({
  product,
  className = "",
  compareMode = false,
  isCompared = false,
  onCompareToggle,
  compareDisabled = false,
}: ProductCardProps) {
  const { addItem, openDrawer } = useCart();
  const basePrice =
    product.dosages && product.dosages.length > 0
      ? Math.min(...product.dosages.map((d) => d.price))
      : product.price;
  const rating = getProductRating(product.slug);

  function handleAddToOrder(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, "vial", product.dosages?.[0], 1);
    openDrawer();
  }

  return (
    <div className={`group relative h-full flex flex-col ${className}`}>
      <div className="h-full bg-white rounded-xl overflow-hidden card-shadow transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col">
        {/* Clickable area: image + text */}
        <Link href={`/products/${product.slug}`} className="flex flex-col flex-1 min-h-0">
          {/* Product Image */}
          <div className="w-full h-52 overflow-hidden relative flex-shrink-0" style={{ backgroundColor: "#F5F3EE" }}>
            {hasProductPhoto(product.slug) ? (
              <img
                src={getProductImagePath(product.slug)}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-4" style={{ backgroundColor: "#1A1A18" }}>
                <ProductVial
                  productName={product.name}
                  dosage={product.dosages?.[0]?.size || product.size || "5mg"}
                  category={product.category}
                  accentColor={product.accentColor}
                  size="thumbnail"
                />
              </div>
            )}

            {/* Badge */}
            {product.badge && (
              <span
                className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider leading-tight z-10 select-none"
                style={
                  product.badge === "POPULAR"
                    ? { backgroundColor: "#C9A24B", color: "#FFFFF3", boxShadow: "0 1px 4px rgba(0,0,0,0.18)" }
                    : { backgroundColor: "#010101", color: "#FFFFF3", boxShadow: "0 1px 4px rgba(0,0,0,0.18)" }
                }
              >
                {product.badge === "POPULAR" ? "Popular" : "New"}
              </span>
            )}
          </div>

          {/* Body */}
          <div className="p-5 flex flex-col flex-1">
            <p className="text-[10px] uppercase tracking-widest text-[#999] mb-1.5 font-medium">
              {product.category}
            </p>
            <h3 className="text-base font-semibold mb-1 group-hover:opacity-70 transition-opacity leading-snug">
              {product.name}
            </h3>
            <p className="text-xs text-[#888] mb-3 leading-snug line-clamp-2 flex-1">
              {product.tagline}
            </p>

            {/* Rating row */}
            <div className="flex items-center gap-2">
              <StarRating rating={rating} />
              <span className="text-xs text-[#888]">{rating.toFixed(2)}</span>
            </div>
          </div>
        </Link>

        {/* Price + Add to Order — outside Link so it doesn't trigger navigation */}
        <div className="px-5 pb-5">
          <div className="flex items-center justify-between pt-3 border-t border-[#ECEAE4]">
            <div>
              <span className="text-base font-bold">
                ${basePrice}
              </span>
              <span className="text-xs text-[#999] ml-1">
                {product.dosages && product.dosages.length > 1 ? product.dosages[0].size : product.size}
              </span>
            </div>
            <button
              onClick={handleAddToOrder}
              className="text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-md transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#A4B08A", color: "#010101", letterSpacing: "0.06em" }}
              aria-label={`Add ${product.name} to order`}
            >
              + Add
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
