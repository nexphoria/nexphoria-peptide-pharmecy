"use client";

import { useState, useRef, useMemo } from "react";
import Link from "next/link";
import { products, categories } from "@/lib/products";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";
import ProductCard from "@/components/ProductCard";
import ComparePanel from "@/components/ComparePanel";
import { ChevronDown } from "lucide-react";

const MAX_COMPARE = 3;

type SortKey = "featured" | "price-asc" | "price-desc" | "name-az" | "newest";

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "featured", label: "Featured" },
  { key: "price-asc", label: "Price: Low to High" },
  { key: "price-desc", label: "Price: High to Low" },
  { key: "name-az", label: "Name A–Z" },
  { key: "newest", label: "Newest" },
];

function getBasePrice(p: (typeof products)[0]) {
  return p.dosages && p.dosages.length > 0
    ? Math.min(...p.dosages.map((d) => d.price))
    : p.price;
}

export default function ProductsClient({ initialCategory }: { initialCategory?: string }) {
  const [activeFilter, setActiveFilter] = useState(initialCategory || "All");
  const [searchQuery, setSearchQuery] = useState("");
  const [compareMode, setCompareMode] = useState(false);
  const [compareSlugs, setCompareSlugs] = useState<string[]>([]);
  const [showComparePanel, setShowComparePanel] = useState(false);
  const [sortKey, setSortKey] = useState<SortKey>("featured");
  const [sortOpen, setSortOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchesCategory = activeFilter === "All" || p.category === activeFilter;
      const matchesSearch =
        !normalizedQuery ||
        p.name.toLowerCase().includes(normalizedQuery) ||
        p.tagline.toLowerCase().includes(normalizedQuery) ||
        p.category.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesSearch;
    });

    if (sortKey === "price-asc") {
      list = [...list].sort((a, b) => getBasePrice(a) - getBasePrice(b));
    } else if (sortKey === "price-desc") {
      list = [...list].sort((a, b) => getBasePrice(b) - getBasePrice(a));
    } else if (sortKey === "name-az") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }
    // "featured" and "newest" use natural order

    return list;
  }, [activeFilter, normalizedQuery, sortKey]);

  function handleCompareToggle(slug: string) {
    setCompareSlugs((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, slug];
    });
  }

  function handleRemoveFromPanel(slug: string) {
    setCompareSlugs((prev) => prev.filter((s) => s !== slug));
  }

  function toggleCompareMode() {
    if (compareMode) {
      setCompareMode(false);
      setCompareSlugs([]);
      setShowComparePanel(false);
    } else {
      setCompareMode(true);
    }
  }

  const compareProducts = compareSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as (typeof products)[number][];

  const activeSortLabel = SORT_OPTIONS.find((o) => o.key === sortKey)?.label ?? "Sort";

  return (
    <div className="pb-20 px-6 md:px-10" style={{ backgroundColor: "#FFFFF3" }}>
      <div className="max-w-7xl mx-auto">
        {/* Page header */}
        <div className="pt-24 mb-8 flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="eyebrow mb-3">Catalog</p>
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
              All Compounds
            </h1>
            <p className="text-sm text-[#888] mt-2">
              {products.length} research-grade compounds
            </p>
          </div>

          <div className="flex items-center gap-3 mt-2">
            {/* Sort dropdown */}
            <div className="relative" ref={sortRef}>
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all border"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#333",
                  border: "1px solid #ECEAE4",
                }}
              >
                {activeSortLabel}
                <ChevronDown
                  size={14}
                  className="transition-transform"
                  style={{ transform: sortOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              {sortOpen && (
                <div
                  className="absolute right-0 top-full mt-1.5 w-48 rounded-xl border border-[#ECEAE4] bg-white shadow-lg z-30 py-1"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => { setSortKey(opt.key); setSortOpen(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-[#F7F5F0] transition-colors"
                      style={{
                        color: sortKey === opt.key ? "#A4B08A" : "#333",
                        fontWeight: sortKey === opt.key ? 600 : 400,
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Compare toggle */}
            <button
              onClick={toggleCompareMode}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
              style={{
                backgroundColor: compareMode ? "#010101" : "#F5F3F0",
                color: compareMode ? "#FFFFF3" : "#555",
                border: compareMode ? "none" : "1px solid #ECEAE4",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="1" width="5" height="12" rx="1" stroke="currentColor" strokeWidth="1.25" />
                <rect x="8" y="1" width="5" height="12" rx="1" stroke="currentColor" strokeWidth="1.25" />
              </svg>
              {compareMode ? "Exit Compare" : "Compare"}
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className="relative mb-4">
          <div className="relative flex items-center">
            <svg
              className="absolute left-4 pointer-events-none"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              style={{ color: "#999" }}
            >
              <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" />
              <line x1="10.5" y1="10.5" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search compounds by name, category..."
              className="w-full pl-10 pr-10 py-3 text-sm rounded-lg outline-none transition-all"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #ECEAE4",
                color: "#010101",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#A4B08A";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(164,176,138,0.12)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "#ECEAE4";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(""); inputRef.current?.focus(); }}
                className="absolute right-3 flex items-center justify-center w-6 h-6 rounded-full transition-colors"
                style={{ backgroundColor: "#ECEAE4", color: "#666" }}
                aria-label="Clear search"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <line x1="1.5" y1="1.5" x2="8.5" y2="8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="8.5" y1="1.5" x2="1.5" y2="8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Compare mode banner */}
        {compareMode && (
          <div
            className="flex items-center gap-3 rounded-xl px-5 py-3.5 mb-4 text-sm"
            style={{ backgroundColor: "#F4F7EE", border: "1px solid #C8D4B4" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, color: "#8A9A70" }}>
              <rect x="1" y="1" width="6" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" />
              <rect x="9" y="1" width="6" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <p style={{ color: "#4A5A3A" }}>
              <strong>Compare mode on.</strong> Select up to 3 compounds to compare side-by-side.
              {compareSlugs.length > 0 && (
                <> <span style={{ color: "#8A9A70" }}>{compareSlugs.length} selected.</span></>
              )}
            </p>
          </div>
        )}

        {/* Sticky filter tabs */}
        <div className="filter-bar-sticky -mx-6 md:-mx-10 px-6 md:px-10">
          <div className="flex gap-2" style={{ flexWrap: "wrap" }}>
            <button
              onClick={() => setActiveFilter("All")}
              className="px-4 py-2 text-xs uppercase rounded-md transition-all"
              style={{
                letterSpacing: "0.08em",
                backgroundColor: activeFilter === "All" ? "#000" : "transparent",
                color: activeFilter === "All" ? "#fff" : "#666",
                border: activeFilter === "All" ? "none" : "1px solid #ECEAE4",
                minHeight: "36px",
              }}
            >
              All ({products.length})
            </button>
            {categories.filter((cat) => cat !== "All").map((cat) => {
              const count = products.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className="px-4 py-2 text-xs uppercase rounded-md transition-all"
                  style={{
                    letterSpacing: "0.08em",
                    backgroundColor: activeFilter === cat ? "#000" : "transparent",
                    color: activeFilter === cat ? "#fff" : "#666",
                    border: activeFilter === cat ? "none" : "1px solid #ECEAE4",
                    minHeight: "36px",
                  }}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Product count */}
        <p className="text-sm mb-6 text-[#888]">
          Showing {filtered.length} compound{filtered.length !== 1 ? "s" : ""}
          {normalizedQuery && (
            <span> matching &ldquo;<span style={{ color: "#010101", fontWeight: 500 }}>{searchQuery.trim()}</span>&rdquo;</span>
          )}
        </p>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                compareMode={compareMode}
                isCompared={compareSlugs.includes(product.slug)}
                onCompareToggle={handleCompareToggle}
                compareDisabled={
                  !compareSlugs.includes(product.slug) && compareSlugs.length >= MAX_COMPARE
                }
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: "#F5F3F0" }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#BFBBAF" strokeWidth="2" />
                <line x1="19" y1="19" x2="26" y2="26" stroke="#BFBBAF" strokeWidth="2" strokeLinecap="round" />
                <line x1="9" y1="12" x2="15" y2="12" stroke="#BFBBAF" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">No compounds found</h3>
            <p className="text-sm mb-6" style={{ color: "#888", maxWidth: 360 }}>
              Try a different keyword or{" "}
              <button
                onClick={() => { setSearchQuery(""); setActiveFilter("All"); }}
                className="underline transition-colors"
                style={{ color: "#A4B08A" }}
              >
                browse all compounds
              </button>.
            </p>
          </div>
        )}

        {/* Custom Synthesis CTA */}
        <div className="mt-20 p-6 md:p-10 rounded-xl text-center bg-white card-shadow">
          <p className="eyebrow mb-3">Custom Synthesis</p>
          <h3 className="text-2xl font-medium mb-3">
            Need a specific compound?
          </h3>
          <p className="text-sm mb-6 max-w-lg mx-auto text-[#555] leading-relaxed">
            We accept custom synthesis inquiries for defined peptide sequences not currently
            in our catalog.
          </p>
          <Link href="/contact" className="btn-primary">
            Inquire About Custom Synthesis
          </Link>
        </div>
      </div>

      {/* Floating compare tray */}
      {compareMode && compareSlugs.length > 0 && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 rounded-2xl shadow-2xl"
          style={{
            backgroundColor: "#010101",
            color: "#FFFFF3",
            width: "calc(100vw - 32px)",
            maxWidth: "420px",
          }}
        >
          <div className="flex items-center gap-2">
            {compareProducts.map((p) => (
              <div
                key={p.slug}
                className="w-8 h-8 rounded-lg overflow-hidden shrink-0"
                style={{ backgroundColor: "#2a2a2a" }}
              >
                {hasProductPhoto(p.slug) ? (
                  <img src={getProductImagePath(p.slug)} alt={p.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-[8px] font-medium text-[#888] text-center leading-tight p-1 block">
                    {p.name}
                  </span>
                )}
              </div>
            ))}
            {Array.from({ length: MAX_COMPARE - compareProducts.length }).map((_, i) => (
              <div
                key={`slot-${i}`}
                className="w-8 h-8 rounded-lg border border-dashed shrink-0"
                style={{ borderColor: "#444" }}
              />
            ))}
          </div>

          <div className="flex-1 text-sm">
            <span className="font-medium">{compareSlugs.length}</span>
            <span style={{ color: "#888" }}> / {MAX_COMPARE} selected</span>
          </div>

          <button
            onClick={() => setShowComparePanel(true)}
            disabled={compareSlugs.length < 2}
            className="px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all"
            style={{
              backgroundColor: compareSlugs.length >= 2 ? "#A4B08A" : "#333",
              color: compareSlugs.length >= 2 ? "#010101" : "#666",
              cursor: compareSlugs.length < 2 ? "not-allowed" : "pointer",
            }}
          >
            {compareSlugs.length < 2 ? "Select 2+" : "Compare Now"}
          </button>

          <button
            onClick={() => setCompareSlugs([])}
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
            style={{ backgroundColor: "#1a1a1a", color: "#888" }}
            aria-label="Clear selection"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <line x1="1" y1="1" x2="9" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="9" y1="1" x2="1" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}

      {showComparePanel && (
        <ComparePanel
          products={compareProducts}
          onRemove={handleRemoveFromPanel}
          onClose={() => setShowComparePanel(false)}
        />
      )}
    </div>
  );
}
