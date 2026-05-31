"use client";

import Link from "next/link";
import { products, type Product } from "@/lib/products";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";
import VialSVG from "@/components/VialSVG";
import { getCategoryColor } from "@/lib/vial-colors";

// Trending array — update weekly by editing slugs here
const TRENDING_SLUGS = [
  "bpc-157",
  "semaglutide",
  "cjc-1295-ipamorelin",
  "mk-677",
  "tirzepatide",
  "retatrutide",
];

function TrendingCard({ product, rank }: { product: Product; rank: number }) {
  const basePrice =
    product.dosages && product.dosages.length > 0
      ? Math.min(...product.dosages.map((d) => d.price))
      : product.price;
  const hasMultiDosage = product.dosages && product.dosages.length > 1;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex items-center gap-3 rounded-xl transition-all duration-200 hover:scale-[1.01]"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E8E5DF",
        padding: "12px 14px",
        textDecoration: "none",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {/* Rank number */}
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold"
        style={{
          backgroundColor: rank <= 3 ? "#B8A44C" : "#ECEAE4",
          color: rank <= 3 ? "#FFFFFF" : "#888",
        }}
      >
        {rank}
      </div>

      {/* Product thumbnail */}
      <div
        className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center"
        style={{ backgroundColor: hasProductPhoto(product.slug) ? "#F7F7F7" : "#1A1A18" }}
      >
        {hasProductPhoto(product.slug) ? (
          <img
            src={getProductImagePath(product.slug)}
            alt={product.name}
            width={40}
            height={40}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-8 h-8 flex items-center justify-center">
            <VialSVG
              name={product.name}
              size={product.dosages?.[0]?.size || product.size || "5mg"}
              capColor={getCategoryColor(product.category)}
            />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-0.5">
          <p
            className="font-semibold text-sm leading-tight truncate"
            style={{ color: "#1A1A1A" }}
          >
            {product.name}
          </p>
          {product.badge && (
            <span
              className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full flex-shrink-0"
              style={{
                backgroundColor: product.badge === "POPULAR" ? "#B8A44C" : "#1A1A1A",
                color: "#FFFFFF",
              }}
            >
              {product.badge === "POPULAR" ? "Hot" : "New"}
            </span>
          )}
        </div>
        <p
          className="text-[11px] truncate"
          style={{ color: "#666666" }}
        >
          {product.category}
        </p>
      </div>

      {/* Price */}
      <div className="flex-shrink-0 text-right">
        <p
          className="text-sm font-semibold"
          style={{ color: "#1A1A1A" }}
        >
          {hasMultiDosage ? "From " : ""}${basePrice}
        </p>
        <p className="text-[10px]" style={{ color: "#737373" }}>
          {product.dosages?.[0]?.size ?? product.size}
        </p>
      </div>

      {/* Arrow */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="flex-shrink-0 opacity-30 group-hover:opacity-80 transition-opacity"
        style={{ color: "#7A6B2A" }}
      >
        <path
          d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

export default function TrendingCompounds() {
  const trendingProducts = TRENDING_SLUGS
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p));

  if (trendingProducts.length === 0) return null;

  return (
    <div
      className="rounded-2xl mb-8 p-5"
      style={{
        backgroundColor: "#FAF9F6",
        border: "1px solid #E8E5DF",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          {/* Flame / trending icon */}
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#FFF3E0" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1C7 1 9.5 3.5 9.5 6C9.5 7.38 8.63 8.5 7.5 9C7.8 8.2 7.5 7.2 6.5 6.5C6.5 7.5 5.5 8.5 5 9C4.5 9.5 4 10.2 4 11C4 12.1 4.9 13 6 13H8C9.1 13 10 12.1 10 11C10 10.2 9.5 9.5 9 9C9 9 11 7.5 11 5.5C11 3 9 1 7 1Z"
                fill="#F4A636"
              />
            </svg>
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#7A6B2A", letterSpacing: "0.12em" }}
            >
              Trending
            </p>
            <p className="text-[11px]" style={{ color: "#666666" }}>
              Most researched this week
            </p>
          </div>
        </div>
        <Link
          href="/products"
          onClick={(e) => {
            // This link just scrolls to the full grid — no navigation needed if on same page
            e.preventDefault();
            document.getElementById("all-compounds")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-[11px] font-medium transition-opacity hover:opacity-60"
          style={{ color: "#7A6B2A", textDecoration: "none" }}
        >
          View all →
        </Link>
      </div>

      {/* Grid: 2 columns on md+, 1 column on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {trendingProducts.map((product, idx) => (
          <TrendingCard key={product.slug} product={product} rank={idx + 1} />
        ))}
      </div>
    </div>
  );
}
