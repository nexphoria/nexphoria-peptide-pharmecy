"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { CATEGORY_META, CompoundEntry } from "@/lib/compounds";

interface Props {
  grouped: Record<string, CompoundEntry[]>;
  categoryOrder: string[];
}

function MechanismBadge({ text, color }: { text: string; color: string }) {
  return (
    <span
      className="inline-block text-[11px] px-2 py-0.5 rounded-full mr-1.5 mb-1.5"
      style={{
        backgroundColor: `${color}18`,
        color: color,
        border: `1px solid ${color}30`,
        fontWeight: 500,
      }}
    >
      {text}
    </span>
  );
}

function CompoundCard({ compound, accentColor }: { compound: CompoundEntry; accentColor: string }) {
  const [expanded, setExpanded] = useState(false);

  // Extract top 3 mechanism keywords from features
  const mechanismTags = compound.features.slice(0, 3);

  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{
        border: "1px solid rgba(0,0,0,0.07)",
        borderLeft: `3px solid ${accentColor}`,
        backgroundColor: "#fff",
        transition: "box-shadow 0.2s",
      }}
    >
      {/* Card header */}
      <div className="p-5 pb-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3
                className="text-base font-semibold"
                style={{ color: "#010101", letterSpacing: "-0.01em" }}
              >
                {compound.name}
              </h3>
              {compound.badge && (
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: compound.badge === "POPULAR" ? "#C9A24B" : "#010101",
                    color: "#fff",
                  }}
                >
                  {compound.badge === "POPULAR" ? "Popular" : "New"}
                </span>
              )}
              {compound.comingSoon && (
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider"
                  style={{ backgroundColor: "#EEE", color: "#888" }}
                >
                  Coming Soon
                </span>
              )}
            </div>
            <p className="text-xs" style={{ color: "#888" }}>
              {compound.category}
              {compound.casNumber && compound.casNumber !== "Blend" && !compound.casNumber.startsWith("Blend") && (
                <span className="ml-2 font-mono" style={{ color: "#AAA" }}>
                  CAS {compound.casNumber.split("/")[0].trim()}
                </span>
              )}
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-sm font-semibold" style={{ color: "#010101" }}>
              from ${compound.price}
            </div>
            <div className="text-xs" style={{ color: "#AAA" }}>
              {compound.size}
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-sm mb-3" style={{ color: "#555", lineHeight: 1.55, fontWeight: 300 }}>
          {compound.tagline}
        </p>

        {/* Feature tags */}
        <div className="flex flex-wrap mb-1">
          {mechanismTags.map((tag) => (
            <MechanismBadge key={tag} text={tag} color={accentColor} />
          ))}
        </div>

        {/* MW + purity row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs" style={{ color: "#888" }}>
          {compound.molecularWeight && compound.molecularWeight !== "Blend" && (
            <span>
              <span className="font-medium" style={{ color: "#555" }}>MW:</span>{" "}
              {compound.molecularWeight}
            </span>
          )}
          <span>
            <span className="font-medium" style={{ color: "#555" }}>Purity:</span>{" "}
            {compound.purity}
          </span>
          <span>
            <span className="font-medium" style={{ color: "#555" }}>Storage:</span>{" "}
            {compound.storage.split(".")[0]}
          </span>
        </div>
      </div>

      {/* Expandable mechanism */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left px-5 py-3 flex items-center justify-between text-xs transition-opacity hover:opacity-70"
          style={{ color: accentColor, fontWeight: 500 }}
        >
          <span>Mechanism of action</span>
          <span aria-hidden style={{ fontSize: "14px" }}>
            {expanded ? "−" : "+"}
          </span>
        </button>

        {expanded && (
          <div
            className="px-5 pb-4"
            style={{ backgroundColor: `${accentColor}06` }}
          >
            <p className="text-sm" style={{ color: "#444", lineHeight: 1.7, fontWeight: 300 }}>
              {compound.mechanism}
            </p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div
        className="px-5 py-3.5 flex items-center justify-between gap-3"
        style={{ borderTop: "1px solid rgba(0,0,0,0.05)", backgroundColor: "#FAFAF8" }}
      >
        <div className="flex flex-wrap gap-2">
          {compound.relatedArticles.map((art) => (
            <Link
              key={art.slug}
              href={`/blog/${art.slug}`}
              className="text-[11px] transition-opacity hover:opacity-70 flex items-center gap-1"
              style={{ color: "#B8923A", fontWeight: 500 }}
            >
              <span aria-hidden>&#128196;</span> {art.title.split(":")[0]}
            </Link>
          ))}
        </div>
        <Link
          href={`/products/${compound.slug}`}
          className="text-xs px-3.5 py-1.5 rounded-lg transition-opacity hover:opacity-80 shrink-0"
          style={{
            backgroundColor: accentColor,
            color: "#fff",
            fontWeight: 500,
          }}
        >
          View Product →
        </Link>
      </div>
    </div>
  );
}

export default function CompoundsClient({ grouped, categoryOrder }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const allCompounds = useMemo(
    () => categoryOrder.flatMap((cat) => grouped[cat] || []),
    [grouped, categoryOrder]
  );

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    let result = activeCategory ? (grouped[activeCategory] || []) : allCompounds;
    if (q) {
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.tagline.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.casNumber?.toLowerCase().includes(q) ||
          c.features.some((f) => f.toLowerCase().includes(q)) ||
          c.mechanism.toLowerCase().includes(q)
      );
    }
    return result;
  }, [searchQuery, activeCategory, allCompounds, grouped]);

  // For grouped view (no search)
  const filteredGrouped = useMemo(() => {
    if (searchQuery.trim()) return null; // flat search results
    if (activeCategory) {
      return { [activeCategory]: filtered };
    }
    const result: Record<string, CompoundEntry[]> = {};
    for (const cat of categoryOrder) {
      if (grouped[cat]?.length) result[cat] = grouped[cat];
    }
    return result;
  }, [searchQuery, activeCategory, filtered, grouped, categoryOrder]);

  return (
    <section className="px-6 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Search + filter bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
              style={{ color: "#AAA" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search compounds, mechanisms, CAS..."
              className="w-full pl-10 pr-10 py-2.5 text-sm rounded-lg"
              style={{
                border: "1px solid #DDD",
                backgroundColor: "#fff",
                color: "#010101",
                outline: "none",
                fontWeight: 300,
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "#A4B08A")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "#DDD")
              }
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg leading-none"
              >
                ×
              </button>
            )}
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className="text-xs px-3 py-1.5 rounded-full transition-all"
              style={{
                backgroundColor: activeCategory === null ? "#010101" : "#EEE",
                color: activeCategory === null ? "#fff" : "#555",
                fontWeight: 500,
              }}
            >
              All
            </button>
            {categoryOrder.map((cat) => {
              const meta = CATEGORY_META[cat];
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(isActive ? null : cat)}
                  className="text-xs px-3 py-1.5 rounded-full transition-all"
                  style={{
                    backgroundColor: isActive ? (meta?.color || "#A4B08A") : "#EEE",
                    color: isActive ? "#fff" : "#555",
                    fontWeight: 500,
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results */}
        {filteredGrouped ? (
          // Grouped by category
          <div className="space-y-16">
            {Object.entries(filteredGrouped).map(([cat, entries]) => {
              const meta = CATEGORY_META[cat];
              const anchorId = cat.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
              return (
                <div key={cat} id={anchorId}>
                  {/* Category header */}
                  <div
                    className="flex items-start gap-4 mb-6 pb-5"
                    style={{ borderBottom: `2px solid ${meta?.color || "#CCC"}` }}
                  >
                    <div
                      className="w-1 h-12 rounded-full shrink-0"
                      style={{ backgroundColor: meta?.color || "#CCC" }}
                    />
                    <div>
                      <h2
                        className="text-xl font-semibold mb-1"
                        style={{ color: "#010101", letterSpacing: "-0.01em" }}
                      >
                        {cat}
                      </h2>
                      <p className="text-sm" style={{ color: "#888", fontWeight: 300 }}>
                        {meta?.description || ""}
                      </p>
                    </div>
                    <span
                      className="ml-auto text-xs px-2 py-1 rounded-full shrink-0"
                      style={{
                        backgroundColor: meta?.bg || "#EEE",
                        color: meta?.color || "#555",
                        fontWeight: 600,
                      }}
                    >
                      {entries.length} compound{entries.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Cards grid */}
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {entries.map((compound) => (
                      <CompoundCard
                        key={compound.slug}
                        compound={compound}
                        accentColor={compound.accentColor || meta?.color || "#A4B08A"}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Flat search results
          <div>
            <p className="text-sm mb-6" style={{ color: "#888" }}>
              {filtered.length} result{filtered.length !== 1 ? "s" : ""} for &ldquo;{searchQuery}&rdquo;
            </p>
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-4xl mb-4">&#128300;</p>
                <p className="text-lg font-medium mb-2" style={{ color: "#010101" }}>
                  No compounds found
                </p>
                <p className="text-sm mb-6" style={{ color: "#888" }}>
                  Try a different search term — compound name, category, or mechanism keyword.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-sm px-4 py-2 rounded-lg"
                  style={{ backgroundColor: "#010101", color: "#fff" }}
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((compound) => {
                  const meta = CATEGORY_META[compound.category];
                  return (
                    <CompoundCard
                      key={compound.slug}
                      compound={compound}
                      accentColor={compound.accentColor || meta?.color || "#A4B08A"}
                    />
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
