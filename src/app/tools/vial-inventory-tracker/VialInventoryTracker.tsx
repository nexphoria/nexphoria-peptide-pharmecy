"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

// ─── Types ────────────────────────────────────────────────────────────────────

type VialStatus = "lyophilized" | "reconstituted";

interface VialEntry {
  id: string;
  compound: string;
  customCompound?: string;
  lotNumber: string;
  quantity: number; // number of vials
  size: string; // e.g. "5mg", "10mg"
  status: VialStatus;
  reconstitutionDate?: string; // YYYY-MM-DD, only when reconstituted
  expiryDays?: number; // days after reconstitution (custom override)
  storageLocation: string;
  notes: string;
  createdAt: number;
  updatedAt: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const STORAGE_KEY = "nexphoria_vial_inventory_v1";
const LOW_STOCK_THRESHOLD = 2; // vials

const COMPOUND_OPTIONS = [
  "BAC Water (3ml)",
  "BAC Water (10ml)",
  "Sterile Water (3ml)",
  "Sterile Water (10ml)",
  "BPC-157",
  "TB-500",
  "GHK-Cu",
  "Wolverine Blend",
  "Ipamorelin",
  "CJC-1295 No DAC",
  "CJC-1295 w/DAC",
  "Sermorelin",
  "Tesamorelin",
  "Hexarelin",
  "MK-677",
  "Semaglutide",
  "Tirzepatide",
  "Retatrutide",
  "AOD-9604",
  "PT-141",
  "Melanotan II",
  "Epitalon",
  "NAD+",
  "SS-31",
  "MOTS-c",
  "Thymosin Alpha-1",
  "LL-37",
  "Kisspeptin-10",
  "Oxytocin",
  "KPV",
  "Selank",
  "Semax",
  "DSIP",
  "Snap-8",
  "Cerebrolysin",
  "Follistatin 344",
  "Custom / Other",
];

// Default reconstituted stability in days per compound (at 4°C refrigerated)
const DEFAULT_STABILITY_DAYS: Record<string, number> = {
  "BPC-157": 30,
  "TB-500": 30,
  "GHK-Cu": 14,
  "Wolverine Blend": 28,
  "Ipamorelin": 28,
  "CJC-1295 No DAC": 21,
  "CJC-1295 w/DAC": 21,
  "Sermorelin": 21,
  "Tesamorelin": 14,
  "Hexarelin": 21,
  "MK-677": 30,
  "Semaglutide": 28,
  "Tirzepatide": 28,
  "Retatrutide": 21,
  "AOD-9604": 21,
  "PT-141": 28,
  "Melanotan II": 28,
  "Epitalon": 21,
  "NAD+": 7,
  "SS-31": 14,
  "MOTS-c": 21,
  "Thymosin Alpha-1": 21,
  "LL-37": 14,
  "Kisspeptin-10": 14,
  "Oxytocin": 21,
  "KPV": 21,
  "Selank": 21,
  "Semax": 21,
  "DSIP": 21,
  "Snap-8": 14,
  "Cerebrolysin": 30,
  "Follistatin 344": 14,
  "BAC Water (3ml)": 28,
  "BAC Water (10ml)": 28,
  "Sterile Water (3ml)": 7,
  "Sterile Water (10ml)": 7,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function genId(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function daysUntilExpiry(entry: VialEntry): number | null {
  if (entry.status !== "reconstituted" || !entry.reconstitutionDate) return null;
  const compound = entry.customCompound || entry.compound;
  const stabilityDays = entry.expiryDays ?? DEFAULT_STABILITY_DAYS[entry.compound] ?? 21;
  const recon = new Date(entry.reconstitutionDate);
  const expiry = new Date(recon);
  expiry.setDate(expiry.getDate() + stabilityDays);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.round((expiry.getTime() - now.getTime()) / 86_400_000);
}

function expiryStatusColor(days: number | null): string {
  if (days === null) return "#6b7280";
  if (days < 0) return "#ef4444";
  if (days <= 5) return "#f97316";
  if (days <= 14) return "#eab308";
  return "#4ade80";
}

function expiryLabel(days: number | null): string {
  if (days === null) return "—";
  if (days < 0) return `Expired ${Math.abs(days)}d ago`;
  if (days === 0) return "Expires today";
  return `${days}d remaining`;
}

function exportCSV(entries: VialEntry[]): void {
  const headers = [
    "Compound",
    "Lot Number",
    "Quantity (vials)",
    "Size",
    "Status",
    "Reconstitution Date",
    "Days Until Expiry",
    "Storage Location",
    "Notes",
  ];
  const rows = entries.map((e) => {
    const compound = e.compound === "Custom / Other" ? (e.customCompound || "Custom") : e.compound;
    const days = daysUntilExpiry(e);
    return [
      compound,
      e.lotNumber,
      e.quantity,
      e.size,
      e.status,
      e.reconstitutionDate || "",
      days !== null ? expiryLabel(days) : "N/A (lyophilized)",
      e.storageLocation,
      e.notes,
    ].map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",");
  });
  const csv = [headers.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `nexphoria-vial-inventory-${today()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ─── Main Component ───────────────────────────────────────────────────────────

type View = "list" | "add" | "edit";

export default function VialInventoryTracker() {
  const [entries, setEntries] = useState<VialEntry[]>([]);
  const [view, setView] = useState<View>("list");
  const [editTarget, setEditTarget] = useState<VialEntry | null>(null);
  const [filterCompound, setFilterCompound] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"name" | "expiry" | "qty" | "added">("added");
  const [search, setSearch] = useState("");

  // Load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {}
  }, [entries]);

  const saveEntry = useCallback((entry: VialEntry) => {
    setEntries((prev) => {
      const idx = prev.findIndex((e) => e.id === entry.id);
      if (idx >= 0) {
        const updated = [...prev];
        updated[idx] = entry;
        return updated;
      }
      return [entry, ...prev];
    });
    setView("list");
    setEditTarget(null);
  }, []);

  const deleteEntry = useCallback((id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const startEdit = useCallback((entry: VialEntry) => {
    setEditTarget(entry);
    setView("edit");
  }, []);

  const startAdd = useCallback(() => {
    setEditTarget(null);
    setView("add");
  }, []);

  // Filter + sort
  const allCompounds = Array.from(new Set(entries.map((e) =>
    e.compound === "Custom / Other" ? (e.customCompound || "Custom") : e.compound
  ))).sort();

  const filtered = entries
    .filter((e) => {
      const label = e.compound === "Custom / Other" ? (e.customCompound || "Custom") : e.compound;
      if (filterCompound !== "all" && label !== filterCompound) return false;
      if (filterStatus !== "all" && e.status !== filterStatus) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          label.toLowerCase().includes(q) ||
          e.lotNumber.toLowerCase().includes(q) ||
          e.storageLocation.toLowerCase().includes(q) ||
          e.notes.toLowerCase().includes(q)
        );
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "name") {
        const la = a.compound === "Custom / Other" ? (a.customCompound || "") : a.compound;
        const lb = b.compound === "Custom / Other" ? (b.customCompound || "") : b.compound;
        return la.localeCompare(lb);
      }
      if (sortBy === "expiry") {
        const da = daysUntilExpiry(a) ?? 99999;
        const db = daysUntilExpiry(b) ?? 99999;
        return da - db;
      }
      if (sortBy === "qty") return a.quantity - b.quantity;
      return b.createdAt - a.createdAt;
    });

  // Stats
  const totalVials = entries.reduce((s, e) => s + e.quantity, 0);
  const reconstitutedCount = entries.filter((e) => e.status === "reconstituted").length;
  const expiringCount = entries.filter((e) => {
    const d = daysUntilExpiry(e);
    return d !== null && d >= 0 && d <= 7;
  }).length;
  const lowStockCount = entries.filter((e) => e.quantity <= LOW_STOCK_THRESHOLD && e.quantity > 0).length;

  if (view === "add" || view === "edit") {
    return (
      <VialForm
        initial={editTarget}
        onSave={saveEntry}
        onCancel={() => { setView("list"); setEditTarget(null); }}
      />
    );
  }

  return (
    <div style={{ backgroundColor: "#010101", minHeight: "100vh" }}>
      {/* Hero */}
      <section className="px-6 pt-32 pb-12 md:pt-40 md:pb-16" style={{ backgroundColor: "#010101" }}>
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            variant="dark"
            className="mb-6"
            items={[
              { label: "Home", href: "/" },
              { label: "Tools", href: "/tools" },
              { label: "Vial Inventory Tracker" },
            ]}
          />
          <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "#C9DD69" }}>
            Research Tools
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1
                className="text-4xl md:text-5xl tracking-tight mb-4"
                style={{ fontWeight: 200, color: "#FFFFF3", lineHeight: 1.05 }}
              >
                Vial Inventory Tracker
              </h1>
              <p className="text-sm md:text-base max-w-xl" style={{ color: "#A0A0A0", fontWeight: 300, lineHeight: 1.65 }}>
                Track compound vials: lot numbers, quantities, reconstitution dates, and stability timelines.
                Stored locally in your browser — no account needed.
              </p>
            </div>
            <button
              onClick={startAdd}
              className="flex-shrink-0 px-6 py-3 text-sm font-medium rounded-sm transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#d4af37", color: "#000" }}
            >
              + Add Vial Entry
            </button>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { label: "Total Vials", value: totalVials, color: "#FFFFF3" },
              { label: "Reconstituted", value: reconstitutedCount, color: "#60a5fa" },
              {
                label: "Expiring ≤7d",
                value: expiringCount,
                color: expiringCount > 0 ? "#f97316" : "#4ade80",
              },
              {
                label: "Low Stock",
                value: lowStockCount,
                color: lowStockCount > 0 ? "#facc15" : "#4ade80",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-sm p-4"
                style={{ backgroundColor: "#111110", border: "1px solid #2A2A28" }}
              >
                <p className="text-2xl font-light mb-1" style={{ color: s.color }}>
                  {s.value}
                </p>
                <p className="text-xs uppercase tracking-widest" style={{ color: "#6b7280" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alerts */}
      {(expiringCount > 0 || lowStockCount > 0) && (
        <section className="px-6 pb-2">
          <div className="max-w-5xl mx-auto space-y-2">
            {expiringCount > 0 && (
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-sm text-sm"
                style={{ backgroundColor: "#1c0f00", border: "1px solid #f9731644", color: "#f97316" }}
              >
                <span className="text-base">⚠️</span>
                <span>
                  <strong>{expiringCount}</strong> reconstituted vial{expiringCount !== 1 ? "s" : ""} expiring within 7 days.
                  Sort by <button onClick={() => setSortBy("expiry")} className="underline">Expiry</button> to review.
                </span>
              </div>
            )}
            {lowStockCount > 0 && (
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-sm text-sm"
                style={{ backgroundColor: "#1a1600", border: "1px solid #facc1544", color: "#facc15" }}
              >
                <span className="text-base">📦</span>
                <span>
                  <strong>{lowStockCount}</strong> compound{lowStockCount !== 1 ? "s" : ""} at or below {LOW_STOCK_THRESHOLD} vials.{" "}
                  <Link href="/products" className="underline">Reorder →</Link>
                </span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Controls */}
      <section className="px-6 py-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-3 items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px]">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search compound, lot, location…"
                className="w-full px-4 py-2.5 text-sm rounded-sm bg-transparent"
                style={{
                  border: "1px solid #3A3A38",
                  color: "#FFFFF3",
                  outline: "none",
                }}
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs"
                  style={{ color: "#6b7280" }}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter compound */}
            <select
              value={filterCompound}
              onChange={(e) => setFilterCompound(e.target.value)}
              className="px-3 py-2.5 text-sm rounded-sm bg-transparent"
              style={{ border: "1px solid #3A3A38", color: "#FFFFF3", backgroundColor: "#010101" }}
            >
              <option value="all">All compounds</option>
              {allCompounds.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            {/* Filter status */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2.5 text-sm rounded-sm bg-transparent"
              style={{ border: "1px solid #3A3A38", color: "#FFFFF3", backgroundColor: "#010101" }}
            >
              <option value="all">All statuses</option>
              <option value="lyophilized">Lyophilized only</option>
              <option value="reconstituted">Reconstituted only</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-3 py-2.5 text-sm rounded-sm bg-transparent"
              style={{ border: "1px solid #3A3A38", color: "#FFFFF3", backgroundColor: "#010101" }}
            >
              <option value="added">Sort: Date Added</option>
              <option value="name">Sort: Compound Name</option>
              <option value="expiry">Sort: Expiry (soonest first)</option>
              <option value="qty">Sort: Quantity (low first)</option>
            </select>

            {/* Export */}
            {entries.length > 0 && (
              <button
                onClick={() => exportCSV(entries)}
                className="px-4 py-2.5 text-sm rounded-sm transition-opacity hover:opacity-80"
                style={{ border: "1px solid #3A3A38", color: "#A0A0A0" }}
              >
                Export CSV
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main table */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          {entries.length === 0 ? (
            <EmptyState onAdd={startAdd} />
          ) : filtered.length === 0 ? (
            <div
              className="rounded-sm p-12 text-center"
              style={{ border: "1px solid #2A2A28", color: "#6b7280" }}
            >
              <p className="text-base mb-2">No entries match your filters.</p>
              <button
                onClick={() => { setSearch(""); setFilterCompound("all"); setFilterStatus("all"); }}
                className="text-sm underline"
                style={{ color: "#d4af37" }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((entry) => (
                <VialCard
                  key={entry.id}
                  entry={entry}
                  onEdit={startEdit}
                  onDelete={deleteEntry}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info footer */}
      <section
        className="px-6 py-10"
        style={{ backgroundColor: "#0A0A09", borderTop: "1px solid #1A1A18" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Stability Reference",
                text: "Reconstituted stability defaults are based on published data for refrigerated storage (2–8°C) in BAC water. Actual stability varies by concentration, pH, freeze-thaw cycles, and container type.",
              },
              {
                title: "Low Stock Alert",
                text: `Any compound at ${LOW_STOCK_THRESHOLD} vials or fewer triggers a yellow alert. Adjust reorder timing based on your protocol cycle length and lead times.`,
              },
              {
                title: "Data Privacy",
                text: "All inventory data is stored in your browser's localStorage. Nothing is sent to Nexphoria servers. Export CSV regularly to back up your inventory.",
              },
            ].map((info) => (
              <div key={info.title}>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#d4af37" }}>
                  {info.title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                  {info.text}
                </p>
              </div>
            ))}
          </div>

          {/* Related tools */}
          <div
            className="rounded-sm p-5"
            style={{ backgroundColor: "#111110", border: "1px solid #2A2A28" }}
          >
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#6b7280" }}>
              Related Tools
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/tools/reconstitution-calculator", label: "Reconstitution Calculator" },
                { href: "/tools/half-life-calculator", label: "Half-Life Calculator" },
                { href: "/guides/storage", label: "Storage Guide" },
                { href: "/tools/research-log", label: "Research Log" },
                { href: "/tools/bac-water-guide", label: "BAC Water Guide" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs px-3 py-1.5 rounded-sm transition-opacity hover:opacity-70"
                  style={{
                    border: "1px solid #2A2A28",
                    color: "#A0A0A0",
                    textDecoration: "none",
                  }}
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>

          {/* RUO disclaimer */}
          <p className="text-xs mt-6 leading-relaxed" style={{ color: "#4b5563" }}>
            <strong style={{ color: "#6b7280" }}>Research Use Only.</strong> Nexphoria products are for in vitro and laboratory research purposes only. Not for human or veterinary use. Not for resale. This tool is for research inventory tracking only.
          </p>
        </div>
      </section>
    </div>
  );
}

// ─── Vial Card ────────────────────────────────────────────────────────────────

function VialCard({
  entry,
  onEdit,
  onDelete,
}: {
  entry: VialEntry;
  onEdit: (e: VialEntry) => void;
  onDelete: (id: string) => void;
}) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const label = entry.compound === "Custom / Other" ? (entry.customCompound || "Custom") : entry.compound;
  const days = daysUntilExpiry(entry);
  const expiryColor = expiryStatusColor(days);
  const isLowStock = entry.quantity <= LOW_STOCK_THRESHOLD;
  const isExpired = days !== null && days < 0;

  return (
    <div
      className="rounded-sm p-5 transition-colors"
      style={{
        backgroundColor: "#0D0D0C",
        border: `1px solid ${isExpired ? "#ef444433" : isLowStock ? "#facc1533" : "#2A2A28"}`,
      }}
    >
      <div className="flex flex-wrap items-start gap-4">
        {/* Main info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-base font-medium" style={{ color: "#FFFFF3" }}>
              {label}
            </h3>
            {entry.size && (
              <span
                className="text-xs px-2 py-0.5 rounded-sm"
                style={{
                  backgroundColor: "#1A1A18",
                  color: "#A0A0A0",
                  border: "1px solid #2A2A28",
                }}
              >
                {entry.size}
              </span>
            )}
            <span
              className="text-xs px-2 py-0.5 rounded-sm"
              style={{
                backgroundColor: entry.status === "reconstituted" ? "#1e3a5f" : "#1a2e1a",
                color: entry.status === "reconstituted" ? "#60a5fa" : "#4ade80",
                border: `1px solid ${entry.status === "reconstituted" ? "#60a5fa33" : "#4ade8033"}`,
              }}
            >
              {entry.status === "reconstituted" ? "Reconstituted" : "Lyophilized"}
            </span>
            {isLowStock && entry.quantity > 0 && (
              <span
                className="text-xs px-2 py-0.5 rounded-sm"
                style={{ backgroundColor: "#1a1600", color: "#facc15", border: "1px solid #facc1544" }}
              >
                Low Stock
              </span>
            )}
            {entry.quantity === 0 && (
              <span
                className="text-xs px-2 py-0.5 rounded-sm"
                style={{ backgroundColor: "#1c0f00", color: "#ef4444", border: "1px solid #ef444433" }}
              >
                Out of Stock
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm mt-2" style={{ color: "#6b7280" }}>
            <span>
              <span style={{ color: "#A0A0A0" }}>{entry.quantity}</span> vial{entry.quantity !== 1 ? "s" : ""}
            </span>
            {entry.lotNumber && (
              <span>
                Lot: <span style={{ color: "#A0A0A0", fontFamily: "monospace" }}>{entry.lotNumber}</span>
              </span>
            )}
            {entry.storageLocation && (
              <span>
                Storage: <span style={{ color: "#A0A0A0" }}>{entry.storageLocation}</span>
              </span>
            )}
            {entry.reconstitutionDate && (
              <span>
                Reconstituted: <span style={{ color: "#A0A0A0" }}>{entry.reconstitutionDate}</span>
              </span>
            )}
          </div>

          {entry.notes && (
            <p className="text-xs mt-2 leading-relaxed" style={{ color: "#4b5563" }}>
              {entry.notes}
            </p>
          )}
        </div>

        {/* Expiry + actions */}
        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          {days !== null ? (
            <div className="text-right">
              <p className="text-xs mb-0.5" style={{ color: "#4b5563" }}>Stability</p>
              <p className="text-sm font-medium" style={{ color: expiryColor }}>
                {expiryLabel(days)}
              </p>
              <StabilityBar days={days} entry={entry} />
            </div>
          ) : (
            <div className="text-right">
              <p className="text-xs" style={{ color: "#4b5563" }}>Lyophilized</p>
              <p className="text-xs" style={{ color: "#6b7280" }}>Stable −20°C</p>
            </div>
          )}

          {/* Quick quantity adjusters */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                if (entry.quantity > 0) {
                  // decrement
                  const updated = { ...entry, quantity: entry.quantity - 1, updatedAt: Date.now() };
                  onEdit(updated); // hack: just save directly
                }
              }}
              className="w-7 h-7 rounded-sm text-xs flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ border: "1px solid #2A2A28", color: "#A0A0A0" }}
              title="Use 1 vial"
            >
              −
            </button>
            <span
              className="w-8 text-center text-sm font-medium"
              style={{ color: "#FFFFF3" }}
            >
              {entry.quantity}
            </span>
            <button
              onClick={() => {
                const updated = { ...entry, quantity: entry.quantity + 1, updatedAt: Date.now() };
                onEdit(updated);
              }}
              className="w-7 h-7 rounded-sm text-xs flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ border: "1px solid #2A2A28", color: "#A0A0A0" }}
              title="Add 1 vial"
            >
              +
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onEdit(entry)}
              className="text-xs px-3 py-1.5 rounded-sm transition-opacity hover:opacity-70"
              style={{ border: "1px solid #2A2A28", color: "#A0A0A0" }}
            >
              Edit
            </button>
            {confirmDelete ? (
              <>
                <button
                  onClick={() => onDelete(entry.id)}
                  className="text-xs px-3 py-1.5 rounded-sm"
                  style={{ backgroundColor: "#ef444422", color: "#ef4444", border: "1px solid #ef444433" }}
                >
                  Confirm
                </button>
                <button
                  onClick={() => setConfirmDelete(false)}
                  className="text-xs px-3 py-1.5 rounded-sm"
                  style={{ border: "1px solid #2A2A28", color: "#6b7280" }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setConfirmDelete(true)}
                className="text-xs px-3 py-1.5 rounded-sm transition-opacity hover:opacity-70"
                style={{ border: "1px solid #2A2A28", color: "#6b7280" }}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Stability Bar ────────────────────────────────────────────────────────────

function StabilityBar({ days, entry }: { days: number; entry: VialEntry }) {
  const compound = entry.compound === "Custom / Other" ? "" : entry.compound;
  const totalDays = entry.expiryDays ?? DEFAULT_STABILITY_DAYS[compound] ?? 21;
  const pct = Math.max(0, Math.min(100, (days / totalDays) * 100));
  const color = expiryStatusColor(days);

  return (
    <div
      className="mt-1 rounded-sm overflow-hidden"
      style={{ width: 120, height: 4, backgroundColor: "#2A2A28" }}
    >
      <div
        className="h-full rounded-sm transition-all"
        style={{ width: `${pct}%`, backgroundColor: color }}
      />
    </div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────

function EmptyState({ onAdd }: { onAdd: () => void }) {
  return (
    <div
      className="rounded-sm p-16 text-center"
      style={{ border: "1px dashed #2A2A28" }}
    >
      {/* Vial icon */}
      <svg
        className="mx-auto mb-6"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3A3A38"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 3H15M9 3V6.5L6 14C5.5 16 6.5 19.5 12 20C17.5 20 18.5 16 18 14L15 6.5V3M9 3H15M9 12H15" />
      </svg>
      <p className="text-base mb-2" style={{ color: "#A0A0A0" }}>
        No vials tracked yet
      </p>
      <p className="text-sm mb-6 max-w-xs mx-auto leading-relaxed" style={{ color: "#4b5563" }}>
        Add your first vial entry to start tracking stock, reconstitution dates, and expiry timelines.
      </p>
      <button
        onClick={onAdd}
        className="px-6 py-2.5 text-sm font-medium rounded-sm transition-opacity hover:opacity-80"
        style={{ backgroundColor: "#d4af37", color: "#000" }}
      >
        Add First Vial
      </button>
    </div>
  );
}

// ─── Vial Form ────────────────────────────────────────────────────────────────

interface VialFormProps {
  initial: VialEntry | null;
  onSave: (entry: VialEntry) => void;
  onCancel: () => void;
}

const STORAGE_LOCATIONS = [
  "−20°C Freezer",
  "−80°C Ultra-Freezer",
  "4°C Refrigerator",
  "Room Temp (dark)",
  "Lab Bench (active)",
  "Custom",
];

function VialForm({ initial, onSave, onCancel }: VialFormProps) {
  const [compound, setCompound] = useState(initial?.compound ?? "BPC-157");
  const [customCompound, setCustomCompound] = useState(initial?.customCompound ?? "");
  const [lotNumber, setLotNumber] = useState(initial?.lotNumber ?? "");
  const [quantity, setQuantity] = useState(String(initial?.quantity ?? 1));
  const [size, setSize] = useState(initial?.size ?? "");
  const [status, setStatus] = useState<VialStatus>(initial?.status ?? "lyophilized");
  const [reconDate, setReconDate] = useState(initial?.reconstitutionDate ?? today());
  const [expiryDays, setExpiryDays] = useState(String(initial?.expiryDays ?? ""));
  const [storageLocation, setStorageLocation] = useState(initial?.storageLocation ?? "−20°C Freezer");
  const [customStorage, setCustomStorage] = useState("");
  const [notes, setNotes] = useState(initial?.notes ?? "");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const defaultStability = DEFAULT_STABILITY_DAYS[compound] ?? 21;
  const effectiveExpiry = expiryDays ? parseInt(expiryDays) : defaultStability;

  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (compound === "Custom / Other" && !customCompound.trim()) {
      errs.customCompound = "Enter compound name";
    }
    const qty = parseInt(quantity);
    if (isNaN(qty) || qty < 0) {
      errs.quantity = "Must be 0 or more";
    }
    if (status === "reconstituted" && !reconDate) {
      errs.reconDate = "Enter reconstitution date";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit() {
    if (!validate()) return;
    const storage = storageLocation === "Custom" ? customStorage : storageLocation;
    const entry: VialEntry = {
      id: initial?.id ?? genId(),
      compound,
      customCompound: compound === "Custom / Other" ? customCompound.trim() : undefined,
      lotNumber: lotNumber.trim(),
      quantity: parseInt(quantity),
      size: size.trim(),
      status,
      reconstitutionDate: status === "reconstituted" ? reconDate : undefined,
      expiryDays: expiryDays ? parseInt(expiryDays) : undefined,
      storageLocation: storage,
      notes: notes.trim(),
      createdAt: initial?.createdAt ?? Date.now(),
      updatedAt: Date.now(),
    };
    onSave(entry);
  }

  const inputClass = "w-full px-3 py-2.5 text-sm rounded-sm bg-transparent";
  const inputStyle = {
    border: "1px solid #3A3A38",
    color: "#FFFFF3",
    outline: "none",
    backgroundColor: "transparent",
  };
  const labelStyle = { color: "#A0A0A0", fontSize: "0.75rem", marginBottom: "0.5rem", display: "block", textTransform: "uppercase" as const, letterSpacing: "0.05em" };

  return (
    <div style={{ backgroundColor: "#010101", minHeight: "100vh" }}>
      <section className="px-6 pt-32 pb-12 md:pt-40 md:pb-16" style={{ backgroundColor: "#010101" }}>
        <div className="max-w-2xl mx-auto">
          <Breadcrumb
            variant="dark"
            className="mb-6"
            items={[
              { label: "Home", href: "/" },
              { label: "Tools", href: "/tools" },
              { label: "Vial Inventory Tracker", href: "/tools/vial-inventory-tracker" },
              { label: initial ? "Edit Entry" : "Add Entry" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl tracking-tight mb-2"
            style={{ fontWeight: 200, color: "#FFFFF3" }}
          >
            {initial ? "Edit Vial Entry" : "Add Vial Entry"}
          </h1>
          <p className="text-sm mb-10" style={{ color: "#6b7280" }}>
            All fields except compound are optional.
          </p>

          <div className="space-y-5">
            {/* Compound */}
            <div>
              <label style={labelStyle}>Compound *</label>
              <select
                value={compound}
                onChange={(e) => setCompound(e.target.value)}
                className={inputClass}
                style={{ ...inputStyle, backgroundColor: "#010101" }}
              >
                {COMPOUND_OPTIONS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {compound === "Custom / Other" && (
              <div>
                <label style={labelStyle}>Custom Compound Name *</label>
                <input
                  type="text"
                  value={customCompound}
                  onChange={(e) => setCustomCompound(e.target.value)}
                  placeholder="e.g. GLP-2, GHRP-1…"
                  className={inputClass}
                  style={inputStyle}
                />
                {errors.customCompound && (
                  <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.customCompound}</p>
                )}
              </div>
            )}

            {/* Row: lot + size */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label style={labelStyle}>Lot / Batch Number</label>
                <input
                  type="text"
                  value={lotNumber}
                  onChange={(e) => setLotNumber(e.target.value)}
                  placeholder="e.g. NXP-2026-0529"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Vial Size</label>
                <input
                  type="text"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  placeholder="e.g. 5mg, 10mg, 3ml"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label style={labelStyle}>Quantity (vials in stock) *</label>
              <input
                type="number"
                min="0"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className={inputClass}
                style={inputStyle}
              />
              {errors.quantity && (
                <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.quantity}</p>
              )}
            </div>

            {/* Status */}
            <div>
              <label style={labelStyle}>Vial Status *</label>
              <div className="flex gap-3">
                {(["lyophilized", "reconstituted"] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setStatus(s)}
                    className="flex-1 py-2.5 text-sm rounded-sm transition-all"
                    style={{
                      border: `1px solid ${status === s ? "#d4af37" : "#2A2A28"}`,
                      backgroundColor: status === s ? "#1a1500" : "transparent",
                      color: status === s ? "#d4af37" : "#6b7280",
                    }}
                  >
                    {s === "lyophilized" ? "Lyophilized (powder)" : "Reconstituted (solution)"}
                  </button>
                ))}
              </div>
            </div>

            {/* Reconstitution date (only if reconstituted) */}
            {status === "reconstituted" && (
              <div>
                <label style={labelStyle}>Reconstitution Date *</label>
                <input
                  type="date"
                  value={reconDate}
                  onChange={(e) => setReconDate(e.target.value)}
                  className={inputClass}
                  style={inputStyle}
                />
                {errors.reconDate && (
                  <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.reconDate}</p>
                )}
                <div
                  className="mt-3 p-3 rounded-sm text-xs leading-relaxed"
                  style={{ backgroundColor: "#0D0D0C", border: "1px solid #1A1A18", color: "#6b7280" }}
                >
                  <strong style={{ color: "#A0A0A0" }}>Default stability:</strong>{" "}
                  {compound !== "Custom / Other" ? (
                    <>Nexphoria reference = <strong style={{ color: "#d4af37" }}>{defaultStability} days</strong> at 2–8°C in BAC water. Override below if using different solvent or conditions.</>
                  ) : (
                    "Enter custom stability days below."
                  )}
                </div>
              </div>
            )}

            {/* Custom expiry override */}
            {status === "reconstituted" && (
              <div>
                <label style={labelStyle}>
                  Stability Override (days) — optional
                </label>
                <input
                  type="number"
                  min="1"
                  value={expiryDays}
                  onChange={(e) => setExpiryDays(e.target.value)}
                  placeholder={`Default: ${defaultStability} days`}
                  className={inputClass}
                  style={inputStyle}
                />
                <p className="text-xs mt-1" style={{ color: "#4b5563" }}>
                  Leave blank to use the default stability for {compound !== "Custom / Other" ? compound : "this compound"}.
                </p>
              </div>
            )}

            {/* Storage location */}
            <div>
              <label style={labelStyle}>Storage Location</label>
              <select
                value={storageLocation}
                onChange={(e) => setStorageLocation(e.target.value)}
                className={inputClass}
                style={{ ...inputStyle, backgroundColor: "#010101" }}
              >
                {STORAGE_LOCATIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {storageLocation === "Custom" && (
                <input
                  type="text"
                  value={customStorage}
                  onChange={(e) => setCustomStorage(e.target.value)}
                  placeholder="e.g. Rack A, Shelf 3"
                  className={`${inputClass} mt-2`}
                  style={inputStyle}
                />
              )}
            </div>

            {/* Notes */}
            <div>
              <label style={labelStyle}>Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Supplier, concentration, prep details, observations…"
                rows={3}
                className={inputClass}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleSubmit}
                className="flex-1 py-3 text-sm font-medium rounded-sm transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#d4af37", color: "#000" }}
              >
                {initial ? "Save Changes" : "Add to Inventory"}
              </button>
              <button
                onClick={onCancel}
                className="px-6 py-3 text-sm rounded-sm transition-opacity hover:opacity-70"
                style={{ border: "1px solid #2A2A28", color: "#A0A0A0" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
