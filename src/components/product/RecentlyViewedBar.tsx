"use client";

import Link from "next/link";
import { Clock } from "lucide-react";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import { products } from "@/lib/products";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";

interface Props {
  currentSlug: string;
}

export default function RecentlyViewedBar({ currentSlug }: Props) {
  const recentSlugs = useRecentlyViewed(currentSlug);

  // Resolve to product objects; filter out missing
  const recentProducts = recentSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 6);

  if (recentProducts.length === 0) return null;

  return (
    <section className="py-12 border-t" style={{ borderColor: "#ECEAE4" }}>
      <div className="container-nex">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-4 h-4 text-[#888]" />
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#888]">
            Recently Viewed
          </h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#ECEAE4] scrollbar-track-transparent">
          {recentProducts.map((product) => {
            const hasPhoto = hasProductPhoto(product.slug);
            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="flex-shrink-0 w-40 group"
              >
                <div className="rounded-lg overflow-hidden bg-[#F0EDE7] w-40 h-40 flex items-center justify-center mb-3 transition-all duration-200 group-hover:opacity-90">
                  {hasPhoto ? (
                    <img
                      src={getProductImagePath(product.slug)}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xs font-semibold text-[#A4B08A] text-center px-2">
                      {product.name}
                    </span>
                  )}
                </div>
                <p className="text-[10px] uppercase tracking-wider text-[#888] mb-0.5">
                  {product.category}
                </p>
                <p className="text-sm font-medium leading-tight group-hover:opacity-70 transition-opacity line-clamp-2">
                  {product.name}
                </p>
                <p className="text-xs text-[#888] mt-0.5">{product.size}</p>
                <p className="text-sm font-semibold mt-1">${product.price}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
