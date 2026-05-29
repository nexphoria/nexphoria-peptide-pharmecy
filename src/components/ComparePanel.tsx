"use client";

import { Product } from "@/lib/products";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";
import Link from "next/link";

interface ComparePanelProps {
  products: Product[];
  onRemove: (slug: string) => void;
  onClose: () => void;
}

const ROW_DEFS: { label: string; key: keyof Product | "basePrice" }[] = [
  { label: "Category", key: "category" },
  { label: "Size", key: "size" },
  { label: "Price (from)", key: "basePrice" },
  { label: "Molecular Weight", key: "molecularWeight" },
  { label: "Purity", key: "purity" },
  { label: "Storage", key: "storage" },
  { label: "Appearance", key: "appearance" },
];

function getCellValue(product: Product, key: keyof Product | "basePrice"): string {
  if (key === "basePrice") {
    const base =
      product.dosages && product.dosages.length > 0
        ? Math.min(...product.dosages.map((d) => d.price))
        : product.price;
    return `$${base}`;
  }
  const val = product[key as keyof Product];
  if (val === undefined || val === null) return "—";
  return String(val);
}

export default function ComparePanel({ products, onRemove, onClose }: ComparePanelProps) {
  if (products.length === 0) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed inset-x-4 inset-y-6 md:inset-x-8 md:inset-y-10 z-50 flex flex-col rounded-2xl overflow-hidden"
        style={{ backgroundColor: "#FFFFF3", boxShadow: "0 24px 64px rgba(0,0,0,0.22)" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b shrink-0"
          style={{ borderColor: "#ECEAE4", backgroundColor: "#F5F3F0" }}
        >
          <div>
            <h2 className="text-lg font-semibold tracking-tight">Compare Compounds</h2>
            <p className="text-xs mt-0.5" style={{ color: "#888" }}>
              {products.length} of 3 selected
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-black/8"
            style={{ color: "#666" }}
            aria-label="Close comparison"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-auto">
          <table className="w-full min-w-[540px] border-collapse">
            {/* Product header row */}
            <thead>
              <tr>
                <th
                  className="text-left text-xs font-medium uppercase tracking-wider px-6 py-4 sticky left-0"
                  style={{ color: "#888", backgroundColor: "#F5F3F0", width: "160px", borderBottom: "1px solid #ECEAE4" }}
                >
                  Attribute
                </th>
                {products.map((p) => (
                  <th
                    key={p.slug}
                    className="text-center px-4 py-4 relative"
                    style={{ borderBottom: "1px solid #ECEAE4", minWidth: "180px" }}
                  >
                    {/* Remove button */}
                    <button
                      onClick={() => onRemove(p.slug)}
                      className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center text-xs transition-colors"
                      style={{ backgroundColor: "#ECEAE4", color: "#666" }}
                      aria-label={`Remove ${p.name} from comparison`}
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <line x1="1" y1="1" x2="7" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="7" y1="1" x2="1" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                    {/* Product image */}
                    <div
                      className="w-16 h-16 rounded-xl overflow-hidden mx-auto mb-3"
                      style={{ backgroundColor: "#F0EDE7" }}
                    >
                      {hasProductPhoto(p.slug) ? (
                        <img
                          src={getProductImagePath(p.slug)}
                          alt={p.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-[10px] font-semibold text-center px-1" style={{ color: "#A4B08A" }}>
                            {p.name}
                          </span>
                        </div>
                      )}
                    </div>
                    <Link
                      href={`/products/${p.slug}`}
                      className="text-sm font-semibold hover:opacity-70 transition-opacity block"
                      style={{ color: "#010101" }}
                    >
                      {p.name}
                    </Link>
                    <p className="text-xs mt-0.5" style={{ color: "#888" }}>{p.tagline.slice(0, 48)}{p.tagline.length > 48 ? "…" : ""}</p>
                  </th>
                ))}
                {/* Empty placeholder columns */}
                {Array.from({ length: Math.max(0, 3 - products.length) }).map((_, i) => (
                  <th
                    key={`empty-${i}`}
                    className="text-center px-4 py-4"
                    style={{ borderBottom: "1px solid #ECEAE4", minWidth: "180px" }}
                  >
                    <div
                      className="w-16 h-16 rounded-xl mx-auto mb-3 border-2 border-dashed flex items-center justify-center"
                      style={{ borderColor: "#ECEAE4" }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <line x1="10" y1="4" x2="10" y2="16" stroke="#BFBBAF" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="4" y1="10" x2="16" y2="10" stroke="#BFBBAF" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <p className="text-xs" style={{ color: "#BFBBAF" }}>Add a compound</p>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Data rows */}
            <tbody>
              {ROW_DEFS.map((row, rowIdx) => (
                <tr
                  key={row.label}
                  style={{ backgroundColor: rowIdx % 2 === 0 ? "#FFFFF3" : "#F9F8F4" }}
                >
                  <td
                    className="px-6 py-3 text-xs font-medium sticky left-0"
                    style={{
                      color: "#888",
                      backgroundColor: rowIdx % 2 === 0 ? "#F5F3F0" : "#EEECE8",
                      borderBottom: "1px solid #ECEAE4",
                    }}
                  >
                    {row.label}
                  </td>
                  {products.map((p) => (
                    <td
                      key={p.slug}
                      className="px-4 py-3 text-sm text-center"
                      style={{
                        color: "#333",
                        borderBottom: "1px solid #ECEAE4",
                      }}
                    >
                      {row.key === "purity" ? (
                        <span
                          className="inline-block px-2 py-0.5 rounded-full text-xs font-medium"
                          style={{ backgroundColor: "#E8F5E9", color: "#2E7D32" }}
                        >
                          {getCellValue(p, row.key)}
                        </span>
                      ) : row.key === "basePrice" ? (
                        <span className="font-semibold text-base">{getCellValue(p, row.key)}</span>
                      ) : (
                        getCellValue(p, row.key)
                      )}
                    </td>
                  ))}
                  {/* Empty placeholders */}
                  {Array.from({ length: Math.max(0, 3 - products.length) }).map((_, i) => (
                    <td
                      key={`empty-${i}`}
                      className="px-4 py-3"
                      style={{ borderBottom: "1px solid #ECEAE4" }}
                    />
                  ))}
                </tr>
              ))}

              {/* CTA row */}
              <tr style={{ backgroundColor: "#F5F3F0" }}>
                <td
                  className="px-6 py-4 text-xs font-medium sticky left-0"
                  style={{ color: "#888", backgroundColor: "#EEECE8" }}
                >
                  &nbsp;
                </td>
                {products.map((p) => (
                  <td key={p.slug} className="px-4 py-4 text-center">
                    <Link
                      href={`/products/${p.slug}`}
                      className="inline-block px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
                      style={{ backgroundColor: "#010101", color: "#FFFFF3" }}
                    >
                      View Details
                    </Link>
                  </td>
                ))}
                {Array.from({ length: Math.max(0, 3 - products.length) }).map((_, i) => (
                  <td key={`empty-cta-${i}`} className="px-4 py-4" />
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
