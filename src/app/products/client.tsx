"use client";

import { useState } from "react";
import Link from "next/link";
import { products, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsClient({ initialCategory }: { initialCategory?: string }) {
  const [activeFilter, setActiveFilter] = useState(initialCategory || "All");

  const filtered = activeFilter === "All"
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <div className="py-12 px-6 md:px-12" style={{ backgroundColor: "#EAE7E3" }}>
      <div className="max-w-7xl mx-auto">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setActiveFilter("All")}
            className="px-4 py-2 text-xs uppercase rounded-sm transition-all"
            style={{
              letterSpacing: "0.1em",
              backgroundColor: activeFilter === "All" ? "#010101" : "transparent",
              color: activeFilter === "All" ? "#EAE7E3" : "#7F7F7D",
              border: activeFilter === "All" ? "none" : "1px solid rgba(0,0,0,0.1)",
            }}
          >
            All ({products.length})
          </button>
          {categories.map((cat) => {
            const count = products.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-4 py-2 text-xs uppercase rounded-sm transition-all"
                style={{
                  letterSpacing: "0.1em",
                  backgroundColor: activeFilter === cat ? "#010101" : "transparent",
                  color: activeFilter === cat ? "#EAE7E3" : "#7F7F7D",
                  border: activeFilter === cat ? "none" : "1px solid rgba(0,0,0,0.1)",
                }}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Product count */}
        <p className="text-sm mb-8" style={{ color: "#7F7F7D" }}>
          {filtered.length} compound{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* Custom Synthesis CTA */}
        <div
          className="mt-16 p-8 rounded-lg text-center"
          style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(0,0,0,0.06)" }}
        >
          <p className="text-xs uppercase mb-3" style={{ color: "#B8923A", letterSpacing: "0.2em" }}>
            Custom Synthesis
          </p>
          <h3 className="text-2xl mb-3" style={{ fontWeight: 200, color: "#010101" }}>
            Need a specific compound?
          </h3>
          <p className="text-sm mb-6 max-w-lg mx-auto" style={{ color: "#7F7F7D" }}>
            We accept custom synthesis inquiries for defined peptide sequences not currently
            in our catalog. Submit a request with your target sequence, required quantity,
            and purity specification.
          </p>
          <Link href="/contact" className="btn-primary">
            Inquire About Custom Synthesis
          </Link>
        </div>
      </div>
    </div>
  );
}
