"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { products } from "@/lib/products";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";

const STORAGE_KEY = "nexphoria_recently_viewed";
const MAX_DISPLAY = 8;

export default function HomepageContinueResearch() {
  const [recentProducts, setRecentProducts] = useState<typeof products>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const slugs = JSON.parse(raw) as string[];
      const resolved = slugs
        .slice(0, MAX_DISPLAY)
        .map((slug) => products.find((p) => p.slug === slug))
        .filter((p): p is NonNullable<typeof p> => Boolean(p));
      setRecentProducts(resolved);
    } catch {
      // ignore parse errors
    }
  }, []);

  // Don't render anything server-side or if no history
  if (!mounted || recentProducts.length === 0) return null;

  return (
    <section
      className="py-16 md:py-20 border-t"
      style={{ borderColor: "#E8E4DC", backgroundColor: "#F5F3EE" }}
    >
      <div className="container-nex">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#D4AF37" }}
            >
              <Clock className="w-4 h-4 text-white" />
            </div>
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.15em] font-semibold mb-0.5"
                style={{ color: "#D4AF37" }}
              >
                Welcome back
              </p>
              <h2
                className="text-lg md:text-xl font-semibold tracking-tight"
                style={{ color: "#1A1A1A" }}
              >
                Continue Your Research
              </h2>
            </div>
          </div>
          <Link
            href="/products"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "#D4AF37" }}
          >
            Browse all
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Product cards */}
        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-[#DEDAD3] scrollbar-track-transparent -mx-4 px-4 sm:mx-0 sm:px-0">
          {recentProducts.map((product) => {
            const hasPhoto = hasProductPhoto(product.slug);
            const price =
              product.dosages && product.dosages.length > 0
                ? Math.min(...product.dosages.map((d) => d.price))
                : product.price;

            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="flex-shrink-0 w-44 group"
              >
                {/* Image */}
                <div
                  className="rounded-xl overflow-hidden w-44 h-44 flex items-center justify-center mb-3 transition-all duration-200 group-hover:opacity-90 group-hover:shadow-md"
                  style={{ backgroundColor: "#EDE9E2" }}
                >
                  {hasPhoto ? (
                    <img
                      src={getProductImagePath(product.slug)}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-1 px-3 text-center">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center mb-1"
                        style={{ backgroundColor: "#D4AF37", opacity: 0.15 }}
                      />
                      <span
                        className="text-xs font-semibold leading-tight"
                        style={{ color: "#8A9070" }}
                      >
                        {product.name}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <p
                  className="text-[10px] uppercase tracking-wider font-medium mb-0.5"
                  style={{ color: "#A0957A" }}
                >
                  {product.category}
                </p>
                <p
                  className="text-sm font-semibold leading-tight group-hover:opacity-70 transition-opacity line-clamp-2 mb-1"
                  style={{ color: "#1A1A1A" }}
                >
                  {product.name}
                </p>
                <p className="text-xs" style={{ color: "#888" }}>
                  {product.size}
                </p>
                <p className="text-sm font-bold mt-1" style={{ color: "#1A1A1A" }}>
                  ${price}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Mobile "browse all" link */}
        <div className="mt-6 sm:hidden text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-medium"
            style={{ color: "#D4AF37" }}
          >
            Browse all compounds
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
