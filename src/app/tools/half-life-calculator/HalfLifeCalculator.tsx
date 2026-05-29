"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

// Peptide half-life reference data (in hours)
const COMPOUND_DATA = [
  // GLP-1 / Metabolic
  { name: "Semaglutide", halfLifeHours: 168, category: "GLP-1 / Metabolic", notes: "~7 days (subcutaneous, albumin-bound)" },
  { name: "Tirzepatide", halfLifeHours: 120, category: "GLP-1 / Metabolic", notes: "~5 days (subcutaneous)" },
  { name: "Retatrutide", halfLifeHours: 168, category: "GLP-1 / Metabolic", notes: "~7 days (estimated, GLP-1/GIP/Glucagon)" },
  // Recovery & Healing
  { name: "BPC-157", halfLifeHours: 4, category: "Recovery & Healing", notes: "~4 hours (subcutaneous/IM)" },
  { name: "TB-500 (Thymosin Beta-4)", halfLifeHours: 8, category: "Recovery & Healing", notes: "~8 hours (subcutaneous)" },
  { name: "AOD-9604", halfLifeHours: 0.5, category: "Recovery & Healing", notes: "~30 minutes (short-acting fragment)" },
  { name: "KPV", halfLifeHours: 1, category: "Recovery & Healing", notes: "~1 hour (tripeptide)" },
  // GH Peptides
  { name: "CJC-1295 w/DAC", halfLifeHours: 192, category: "GH Secretagogues", notes: "~8 days (DAC extended half-life)" },
  { name: "CJC-1295 No DAC (Mod GRF)", halfLifeHours: 0.5, category: "GH Secretagogues", notes: "~30 min (no drug affinity complex)" },
  { name: "Ipamorelin", halfLifeHours: 2, category: "GH Secretagogues", notes: "~2 hours (subcutaneous)" },
  { name: "GHRP-2", halfLifeHours: 1.5, category: "GH Secretagogues", notes: "~1.5 hours" },
  { name: "GHRP-6", halfLifeHours: 1.5, category: "GH Secretagogues", notes: "~1.5 hours" },
  { name: "Sermorelin", halfLifeHours: 0.2, category: "GH Secretagogues", notes: "~10-12 minutes (rapid cleavage)" },
  { name: "Tesamorelin", halfLifeHours: 0.13, category: "GH Secretagogues", notes: "~8 minutes (trans-3-hexenoic acid stabilized)" },
  { name: "MK-677 (Ibutamoren)", halfLifeHours: 24, category: "GH Secretagogues", notes: "~24 hours (oral non-peptide GHS)" },
  // Cognitive / Nootropic
  { name: "Selank", halfLifeHours: 0.13, category: "Cognitive / Nootropic", notes: "~8 minutes (rapid enzymatic degradation)" },
  { name: "Semax", halfLifeHours: 0.17, category: "Cognitive / Nootropic", notes: "~10 minutes" },
  { name: "DSIP", halfLifeHours: 0.5, category: "Cognitive / Nootropic", notes: "~30 minutes" },
  // Longevity / Anti-Aging
  { name: "Epitalon", halfLifeHours: 1, category: "Longevity / Anti-Aging", notes: "~1 hour (subcutaneous)" },
  { name: "MOTS-c", halfLifeHours: 0.5, category: "Longevity / Anti-Aging", notes: "~30 minutes (mitochondrial peptide)" },
  { name: "Humanin", halfLifeHours: 0.5, category: "Longevity / Anti-Aging", notes: "~30 minutes" },
  { name: "SS-31", halfLifeHours: 0.5, category: "Longevity / Anti-Aging", notes: "~30 minutes (mitochondria-targeted)" },
  { name: "GHK-Cu", halfLifeHours: 0.5, category: "Longevity / Anti-Aging", notes: "~30 minutes (rapid tissue distribution)" },
  // Hormonal / Endocrine
  { name: "Kisspeptin-10", halfLifeHours: 0.08, category: "Hormonal / Endocrine", notes: "~5 minutes (rapid GnRH pulse trigger)" },
  { name: "Oxytocin", halfLifeHours: 0.08, category: "Hormonal / Endocrine", notes: "~5 minutes (plasma half-life)" },
  { name: "PT-141 (Bremelanotide)", halfLifeHours: 2.7, category: "Hormonal / Endocrine", notes: "~2.7 hours (subcutaneous)" },
  { name: "Melanotan II", halfLifeHours: 1, category: "Hormonal / Endocrine", notes: "~1 hour (subcutaneous)" },
  // NAD+ / Metabolic
  { name: "NAD+ (IV)", halfLifeHours: 0.03, category: "NAD+ / Metabolic", notes: "~2 minutes (rapid conversion to metabolites)" },
  { name: "NMN (Precursor)", halfLifeHours: 1, category: "NAD+ / Metabolic", notes: "~1 hour to peak NAD+ elevation" },
  // Blends
  { name: "SS-31 Fragment", halfLifeHours: 0.5, category: "Recovery & Healing", notes: "~30 minutes" },
];

const categories = ["All", ...Array.from(new Set(COMPOUND_DATA.map(c => c.category)))];

function round3(n: number) { return Math.round(n * 1000) / 1000; }

function formatHours(h: number): string {
  if (h < 1/60) return `${round3(h * 60 * 60)} seconds`;
  if (h < 1) {
    const mins = round3(h * 60);
    return `${mins} minute${mins !== 1 ? "s" : ""}`;
  }
  if (h < 24) {
    const hrs = round3(h);
    return `${hrs} hour${hrs !== 1 ? "s" : ""}`;
  }
  const days = round3(h / 24);
  return `${days} day${days !== 1 ? "s" : ""}`;
}

// Generate SVG decay curve points
function decayCurvePoints(halfLifeHours: number, width: number, height: number): string {
  const totalTime = halfLifeHours * 5; // 5 half-lives
  const points: [number, number][] = [];
  const steps = 100;
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * totalTime;
    const fraction = Math.pow(0.5, t / halfLifeHours);
    const x = (i / steps) * width;
    const y = height - fraction * (height - 10) - 5;
    points.push([x, y]);
  }
  return points.map(([x, y]) => `${x},${y}`).join(" ");
}

export default function HalfLifeCalculator() {
  const [mode, setMode] = useState<"preset" | "custom">("preset");
  const [selectedCompound, setSelectedCompound] = useState<string>("BPC-157");
  const [customHalfLife, setCustomHalfLife] = useState<string>("4");
  const [customUnit, setCustomUnit] = useState<"minutes" | "hours" | "days">("hours");
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [doseAmount, setDoseAmount] = useState<string>("250");
  const [doseUnit, setDoseUnit] = useState<"mcg" | "mg">("mcg");

  const compound = COMPOUND_DATA.find(c => c.name === selectedCompound);

  const halfLifeHours = useMemo(() => {
    if (mode === "preset" && compound) return compound.halfLifeHours;
    const val = parseFloat(customHalfLife) || 0;
    if (customUnit === "minutes") return val / 60;
    if (customUnit === "days") return val * 24;
    return val;
  }, [mode, compound, customHalfLife, customUnit]);

  const results = useMemo(() => {
    if (halfLifeHours <= 0) return null;
    return {
      t50: halfLifeHours,           // 50% remaining
      t25: halfLifeHours * 2,       // 25% remaining (2 half-lives)
      t12: halfLifeHours * 3,       // 12.5% remaining
      t10: halfLifeHours * Math.log2(10), // 10% remaining
      t5: halfLifeHours * Math.log2(20),  // 5% remaining (near-clearance)
      t1: halfLifeHours * Math.log2(100), // 1% remaining (full clearance estimate)
      minDosingInterval: halfLifeHours * 0.5, // reasonable minimum (redose at ~75% cleared)
      recommendedInterval: halfLifeHours * 1.0, // one half-life interval
    };
  }, [halfLifeHours]);

  const filteredCompounds = useMemo(() =>
    filterCategory === "All"
      ? COMPOUND_DATA
      : COMPOUND_DATA.filter(c => c.category === filterCategory),
    [filterCategory]
  );

  const SVG_W = 560;
  const SVG_H = 160;
  const curvePoints = halfLifeHours > 0 ? decayCurvePoints(halfLifeHours, SVG_W, SVG_H) : "";

  return (
    <div style={{ backgroundColor: "#FFFFF3", minHeight: "100vh" }}>
      {/* Hero */}
      <section className="relative px-6 pt-32 pb-16 md:pt-40 md:pb-20" style={{ backgroundColor: "#010101" }}>
        <div className="max-w-3xl mx-auto">
          <Breadcrumb
            variant="dark"
            className="mb-8"
            items={[
              { label: "Home", href: "/" },
              { label: "Tools", href: "/tools" },
              { label: "Half-Life Calculator" },
            ]}
          />
          <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "#C9DD69" }}>
            Research Tool
          </p>
          <h1
            className="text-4xl md:text-5xl mb-5 tracking-tight"
            style={{ fontWeight: 200, color: "#FFFFF3", lineHeight: 1.05 }}
          >
            Half-Life &amp; Dosing<br />Frequency Calculator
          </h1>
          <p className="text-base md:text-lg max-w-xl" style={{ fontWeight: 300, color: "#A0A0A0", lineHeight: 1.65 }}>
            Calculate compound clearance times, dosing frequency recommendations, and visualize decay curves for 30+ research peptides. Based on published pharmacokinetic data.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 space-y-8">

        {/* Mode toggle */}
        <div className="flex gap-2">
          {(["preset", "custom"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className="px-4 py-2 text-sm rounded transition-colors"
              style={{
                backgroundColor: mode === m ? "#010101" : "#ECEAE4",
                color: mode === m ? "#FFFFF3" : "#010101",
                fontWeight: mode === m ? 600 : 400,
              }}
            >
              {m === "preset" ? "Select Compound" : "Enter Custom Half-Life"}
            </button>
          ))}
        </div>

        {mode === "preset" ? (
          <div className="space-y-4">
            {/* Category filter */}
            <div>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#9A9A8A" }}>
                Filter by Category
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className="px-3 py-1.5 text-xs rounded transition-colors"
                    style={{
                      backgroundColor: filterCategory === cat ? "#C9DD69" : "#ECEAE4",
                      color: filterCategory === cat ? "#010101" : "#555",
                      fontWeight: filterCategory === cat ? 600 : 400,
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            {/* Compound select */}
            <div>
              <label className="text-xs uppercase tracking-widest block mb-2" style={{ color: "#9A9A8A" }}>
                Compound
              </label>
              <select
                value={selectedCompound}
                onChange={e => setSelectedCompound(e.target.value)}
                className="w-full px-4 py-3 rounded text-sm outline-none"
                style={{ backgroundColor: "#F5F4EE", border: "1.5px solid #D8D6D0", color: "#010101" }}
              >
                {filteredCompounds.map(c => (
                  <option key={c.name} value={c.name}>
                    {c.name} — {c.category}
                  </option>
                ))}
              </select>
              {compound && (
                <p className="text-xs mt-2" style={{ color: "#9A9A8A" }}>
                  {compound.notes}
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="text-xs uppercase tracking-widest block mb-2" style={{ color: "#9A9A8A" }}>
                Half-Life Value
              </label>
              <div className="flex gap-3">
                <input
                  type="number"
                  min="0.01"
                  step="any"
                  value={customHalfLife}
                  onChange={e => setCustomHalfLife(e.target.value)}
                  className="flex-1 px-4 py-3 rounded text-sm outline-none"
                  style={{ backgroundColor: "#F5F4EE", border: "1.5px solid #D8D6D0", color: "#010101" }}
                  placeholder="e.g. 4"
                />
                <select
                  value={customUnit}
                  onChange={e => setCustomUnit(e.target.value as "minutes" | "hours" | "days")}
                  className="px-4 py-3 rounded text-sm outline-none"
                  style={{ backgroundColor: "#F5F4EE", border: "1.5px solid #D8D6D0", color: "#010101" }}
                >
                  <option value="minutes">Minutes</option>
                  <option value="hours">Hours</option>
                  <option value="days">Days</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Dose input (optional) */}
        <div>
          <label className="text-xs uppercase tracking-widest block mb-2" style={{ color: "#9A9A8A" }}>
            Starting Dose (optional — for residual amount tracking)
          </label>
          <div className="flex gap-3">
            <input
              type="number"
              min="0"
              step="any"
              value={doseAmount}
              onChange={e => setDoseAmount(e.target.value)}
              className="flex-1 px-4 py-3 rounded text-sm outline-none"
              style={{ backgroundColor: "#F5F4EE", border: "1.5px solid #D8D6D0", color: "#010101" }}
              placeholder="e.g. 250"
            />
            <select
              value={doseUnit}
              onChange={e => setDoseUnit(e.target.value as "mcg" | "mg")}
              className="px-4 py-3 rounded text-sm outline-none"
              style={{ backgroundColor: "#F5F4EE", border: "1.5px solid #D8D6D0", color: "#010101" }}
            >
              <option value="mcg">mcg</option>
              <option value="mg">mg</option>
            </select>
          </div>
        </div>

        {/* Results */}
        {results && halfLifeHours > 0 && (
          <>
            {/* Decay curve */}
            <div className="rounded-lg p-5 overflow-hidden" style={{ backgroundColor: "#010101" }}>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#C9DD69" }}>
                Plasma Decay Curve
              </p>
              <div style={{ overflowX: "auto" }}>
                <svg
                  viewBox={`0 0 ${SVG_W} ${SVG_H + 30}`}
                  width="100%"
                  preserveAspectRatio="xMidYMid meet"
                  style={{ display: "block", minWidth: "280px" }}
                >
                  {/* Grid lines */}
                  {[100, 75, 50, 25, 10].map((pct) => {
                    const y = SVG_H - (pct / 100) * (SVG_H - 10) - 5;
                    return (
                      <g key={pct}>
                        <line x1={0} y1={y} x2={SVG_W} y2={y} stroke="#2A2A2A" strokeWidth="1" />
                        <text x={4} y={y - 3} fontSize="9" fill="#555">
                          {pct}%
                        </text>
                      </g>
                    );
                  })}
                  {/* Half-life markers (vertical lines) */}
                  {[1, 2, 3].map((n) => {
                    const totalTime = halfLifeHours * 5;
                    const x = (n / 5) * SVG_W;
                    const label = formatHours(halfLifeHours * n);
                    return (
                      <g key={n}>
                        <line x1={x} y1={0} x2={x} y2={SVG_H} stroke="#333" strokeWidth="1" strokeDasharray="3,3" />
                        <text x={x + 3} y={SVG_H + 16} fontSize="8" fill="#666">
                          {label}
                        </text>
                      </g>
                    );
                  })}
                  {/* Decay curve */}
                  <polyline
                    points={curvePoints}
                    fill="none"
                    stroke="#C9DD69"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* 50% dot */}
                  {(() => {
                    const totalTime = halfLifeHours * 5;
                    const x = (halfLifeHours / totalTime) * SVG_W;
                    const y = SVG_H - 0.5 * (SVG_H - 10) - 5;
                    return <circle cx={x} cy={y} r={4} fill="#C9DD69" />;
                  })()}
                  {/* X-axis label */}
                  <text x={SVG_W / 2} y={SVG_H + 28} fontSize="9" fill="#666" textAnchor="middle">
                    Time →
                  </text>
                </svg>
              </div>
            </div>

            {/* Clearance milestones */}
            <div>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#9A9A8A" }}>
                Clearance Milestones
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: "50% Remaining", time: results.t50, pct: 50, highlight: true },
                  { label: "25% Remaining", time: results.t25, pct: 25 },
                  { label: "12.5% Remaining", time: results.t12, pct: 12.5 },
                  { label: "10% Remaining", time: results.t10, pct: 10 },
                  { label: "5% Remaining", time: results.t5, pct: 5 },
                  { label: "~1% (Clearance)", time: results.t1, pct: 1 },
                ].map(({ label, time, pct, highlight }) => {
                  const doseAmt = parseFloat(doseAmount) || 0;
                  const doseMcgVal = doseUnit === "mg" ? doseAmt * 1000 : doseAmt;
                  const residual = doseMcgVal > 0 ? round3((pct / 100) * doseMcgVal) : null;
                  return (
                    <div
                      key={label}
                      className="rounded p-3"
                      style={{
                        backgroundColor: highlight ? "#010101" : "#F5F4EE",
                        border: highlight ? "1.5px solid #C9DD69" : "none",
                      }}
                    >
                      <p
                        className="text-xs uppercase tracking-wider mb-1"
                        style={{ color: highlight ? "#C9DD69" : "#9A9A8A" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-lg font-semibold"
                        style={{ color: highlight ? "#FFFFF3" : "#010101" }}
                      >
                        {formatHours(time)}
                      </p>
                      {residual !== null && (
                        <p
                          className="text-xs mt-1"
                          style={{ color: highlight ? "#A0A0A0" : "#9A9A8A" }}
                        >
                          ≈ {residual} mcg remaining
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dosing interval recommendations */}
            <div className="rounded-lg p-5" style={{ backgroundColor: "#F5F4EE" }}>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#9A9A8A" }}>
                Research Dosing Interval Guidance
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-start py-2 border-b border-[#ECEAE4]">
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#010101" }}>Minimum interval (75% cleared)</p>
                    <p className="text-xs" style={{ color: "#9A9A8A" }}>Approximate minimum between doses to avoid accumulation</p>
                  </div>
                  <p className="text-sm font-semibold ml-4 flex-shrink-0" style={{ color: "#010101" }}>
                    {formatHours(results.minDosingInterval)}
                  </p>
                </div>
                <div className="flex justify-between items-start py-2 border-b border-[#ECEAE4]">
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#010101" }}>Standard interval (1 half-life)</p>
                    <p className="text-xs" style={{ color: "#9A9A8A" }}>50% cleared — steady state reached in 4–5 doses</p>
                  </div>
                  <p className="text-sm font-semibold ml-4 flex-shrink-0" style={{ color: "#010101" }}>
                    {formatHours(results.recommendedInterval)}
                  </p>
                </div>
                <div className="flex justify-between items-start py-2">
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#010101" }}>Wash-out period</p>
                    <p className="text-xs" style={{ color: "#9A9A8A" }}>Time to near-full clearance (~5 half-lives, &lt;5% remaining)</p>
                  </div>
                  <p className="text-sm font-semibold ml-4 flex-shrink-0" style={{ color: "#010101" }}>
                    {formatHours(results.t5)}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Reference table */}
        <div>
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#9A9A8A" }}>
            Half-Life Reference Table — All Compounds
          </p>
          <div className="overflow-x-auto rounded-lg" style={{ border: "1px solid #ECEAE4" }}>
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#F5F4EE" }}>
                  {["Compound", "Half-Life", "Category", "Notes"].map(h => (
                    <th key={h} className="text-left px-4 py-3 text-xs uppercase tracking-wider" style={{ color: "#9A9A8A", borderBottom: "1px solid #ECEAE4" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPOUND_DATA.map((c, i) => (
                  <tr key={c.name} style={{ backgroundColor: i % 2 === 0 ? "#FFFFF3" : "#FAFAF8" }}>
                    <td className="px-4 py-2.5 font-medium" style={{ color: "#010101", borderBottom: "1px solid #F0EEE8" }}>
                      {c.name}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs" style={{ color: "#010101", borderBottom: "1px solid #F0EEE8" }}>
                      {formatHours(c.halfLifeHours)}
                    </td>
                    <td className="px-4 py-2.5" style={{ color: "#555", borderBottom: "1px solid #F0EEE8" }}>
                      <span
                        className="px-2 py-0.5 rounded text-xs"
                        style={{ backgroundColor: "#ECEAE4", color: "#555" }}
                      >
                        {c.category}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-xs" style={{ color: "#9A9A8A", borderBottom: "1px solid #F0EEE8" }}>
                      {c.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="rounded p-4 text-xs" style={{ backgroundColor: "#F5F4EE", color: "#9A9A8A", lineHeight: 1.7 }}>
          <strong style={{ color: "#555" }}>Research Use Only.</strong> Half-life values are based on published pharmacokinetic studies and scientific literature. Values may vary based on route of administration, subject characteristics, and experimental conditions. This calculator is intended for qualified researchers only and does not constitute medical advice. All compounds sold by Nexphoria are for in vitro and preclinical research only.
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Link
            href="/tools/reconstitution-calculator"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#C9DD69", color: "#010101" }}
          >
            Reconstitution Calculator →
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#ECEAE4", color: "#010101" }}
          >
            Browse Compounds →
          </Link>
        </div>
      </div>
    </div>
  );
}
