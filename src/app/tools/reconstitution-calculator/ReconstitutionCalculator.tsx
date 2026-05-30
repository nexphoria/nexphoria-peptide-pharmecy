"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

// Common reconstitution presets
const PRESETS = [
  { label: "BPC-157 5mg vial @ 500 mcg/mL", vialMg: 5, concMcgPerMl: 500 },
  { label: "Semaglutide 5mg vial @ 1000 mcg/mL", vialMg: 5, concMcgPerMl: 1000 },
  { label: "Tirzepatide 10mg vial @ 2000 mcg/mL", vialMg: 10, concMcgPerMl: 2000 },
  { label: "TB-500 10mg vial @ 1000 mcg/mL", vialMg: 10, concMcgPerMl: 1000 },
  { label: "GHK-Cu 100mg vial @ 10000 mcg/mL", vialMg: 100, concMcgPerMl: 10000 },
  { label: "Ipamorelin 5mg vial @ 500 mcg/mL", vialMg: 5, concMcgPerMl: 500 },
];

function round4(n: number): number {
  return Math.round(n * 10000) / 10000;
}

export default function ReconstitutionCalculatorPage() {
  const [vialMg, setVialMg] = useState<string>("5");
  const [concMcgPerMl, setConcMcgPerMl] = useState<string>("500");
  const [doseMcg, setDoseMcg] = useState<string>("250");
  const [preset, setPreset] = useState<string>("");

  const applyPreset = useCallback((p: typeof PRESETS[0]) => {
    setVialMg(String(p.vialMg));
    setConcMcgPerMl(String(p.concMcgPerMl));
    setPreset(p.label);
  }, []);

  // Core calculations
  const vialMgNum = parseFloat(vialMg) || 0;
  const concNum = parseFloat(concMcgPerMl) || 0;
  const doseNum = parseFloat(doseMcg) || 0;

  const vialMcg = vialMgNum * 1000; // convert mg → mcg
  const bacWaterMl = concNum > 0 ? round4(vialMcg / concNum) : 0;
  const dosesPerVial = doseNum > 0 && concNum > 0 ? Math.floor(vialMcg / doseNum) : 0;
  const volumePerDoseMl = concNum > 0 && doseNum > 0 ? round4(doseNum / concNum) : 0;
  const volumePerDoseUnits = round4(volumePerDoseMl * 100); // units on 100-unit syringe (0.01 mL/unit)

  const isValid = vialMgNum > 0 && concNum > 0;

  return (
    <div style={{ backgroundColor: "#F9F9F9", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        className="relative px-6 pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ backgroundColor: "#010101" }}
      >
        <div className="max-w-3xl mx-auto">
          <Breadcrumb
            variant="dark"
            className="mb-8"
            items={[
              { label: "Home", href: "/" },
              { label: "Tools", href: "/tools" },
              { label: "Reconstitution Calculator" },
            ]}
          />
          <p
            className="text-xs uppercase tracking-widest mb-5"
            style={{ color: "#C9DD69" }}
          >
            Research Tool
          </p>
          <h1
            className="text-4xl md:text-5xl mb-5 tracking-tight"
            style={{ fontWeight: 200, color: "#F9F9F9", lineHeight: 1.05 }}
          >
            Reconstitution Calculator
          </h1>
          <p
            className="text-base md:text-lg max-w-xl"
            style={{ fontWeight: 300, color: "#A0A0A0", lineHeight: 1.65 }}
          >
            Calculate the exact volume of bacteriostatic water to add to your lyophilized peptide vial for a precise working concentration. Includes dose volume and doses-per-vial output.
          </p>
        </div>
      </section>

      {/* Calculator + Info */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">

          {/* Presets */}
          <div className="mb-8">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "#666666" }}
            >
              Quick Presets
            </p>
            <div className="flex flex-wrap gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p.label}
                  onClick={() => applyPreset(p)}
                  className="text-xs px-3 py-1.5 rounded-sm transition-all"
                  style={{
                    border: `1px solid ${preset === p.label ? "#B8A44C" : "#DDDBD5"}`,
                    backgroundColor: preset === p.label ? "#B8A44C22" : "transparent",
                    color: preset === p.label ? "#000" : "#555",
                    fontWeight: preset === p.label ? 600 : 400,
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input grid */}
          <div
            className="rounded-sm p-8 mb-6"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #ECEAE4",
              borderTop: "2px solid #B8A44C",
            }}
          >
            <h2
              className="text-lg mb-6"
              style={{ fontWeight: 500, color: "#000" }}
            >
              Inputs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Vial size */}
              <div>
                <label
                  htmlFor="vialMg"
                  className="block text-xs uppercase tracking-widest mb-2"
                  style={{ color: "#666666" }}
                >
                  Vial Size (mg)
                </label>
                <input
                  id="vialMg"
                  type="number"
                  min="0"
                  step="0.5"
                  value={vialMg}
                  onChange={(e) => { setVialMg(e.target.value); setPreset(""); }}
                  className="w-full px-4 py-3 rounded-sm text-sm"
                  style={{
                    border: "1px solid #DDDBD5",
                    backgroundColor: "#FAFAF8",
                    color: "#000",
                    outline: "none",
                  }}
                  placeholder="e.g. 5"
                />
                <p className="text-xs mt-1.5" style={{ color: "#737373" }}>
                  As labeled on vial
                </p>
              </div>

              {/* Desired concentration */}
              <div>
                <label
                  htmlFor="concMcgPerMl"
                  className="block text-xs uppercase tracking-widest mb-2"
                  style={{ color: "#666666" }}
                >
                  Desired Conc. (mcg/mL)
                </label>
                <input
                  id="concMcgPerMl"
                  type="number"
                  min="0"
                  step="50"
                  value={concMcgPerMl}
                  onChange={(e) => { setConcMcgPerMl(e.target.value); setPreset(""); }}
                  className="w-full px-4 py-3 rounded-sm text-sm"
                  style={{
                    border: "1px solid #DDDBD5",
                    backgroundColor: "#FAFAF8",
                    color: "#000",
                    outline: "none",
                  }}
                  placeholder="e.g. 500"
                />
                <p className="text-xs mt-1.5" style={{ color: "#737373" }}>
                  Per mL after reconstitution
                </p>
              </div>

              {/* Desired dose */}
              <div>
                <label
                  htmlFor="doseMcg"
                  className="block text-xs uppercase tracking-widest mb-2"
                  style={{ color: "#666666" }}
                >
                  Dose Per Administration (mcg)
                </label>
                <input
                  id="doseMcg"
                  type="number"
                  min="0"
                  step="50"
                  value={doseMcg}
                  onChange={(e) => setDoseMcg(e.target.value)}
                  className="w-full px-4 py-3 rounded-sm text-sm"
                  style={{
                    border: "1px solid #DDDBD5",
                    backgroundColor: "#FAFAF8",
                    color: "#000",
                    outline: "none",
                  }}
                  placeholder="e.g. 250"
                />
                <p className="text-xs mt-1.5" style={{ color: "#737373" }}>
                  Used for dose volume calc
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          {isValid ? (
            <div
              className="rounded-sm p-8 mb-10"
              style={{
                backgroundColor: "#010101",
                border: "1px solid #2A2A28",
              }}
            >
              <h2
                className="text-xs uppercase tracking-widest mb-6"
                style={{ color: "#C9DD69" }}
              >
                Results
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* BAC Water */}
                <div
                  className="p-5 rounded-sm"
                  style={{ backgroundColor: "#1C1C1A", border: "1px solid #2A2A28" }}
                >
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#666666" }}>
                    BAC Water to Add
                  </p>
                  <p className="text-3xl font-light mb-1" style={{ color: "#F9F9F9" }}>
                    {bacWaterMl} <span className="text-lg" style={{ color: "#A0A0A0" }}>mL</span>
                  </p>
                  <p className="text-xs" style={{ color: "#666" }}>
                    Add this volume of bacteriostatic water to the vial
                  </p>
                </div>

                {/* Volume per dose */}
                <div
                  className="p-5 rounded-sm"
                  style={{ backgroundColor: "#1C1C1A", border: "1px solid #2A2A28" }}
                >
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#666666" }}>
                    Volume Per Dose
                  </p>
                  <p className="text-3xl font-light mb-1" style={{ color: "#F9F9F9" }}>
                    {doseNum > 0 ? volumePerDoseMl : "—"}{" "}
                    <span className="text-lg" style={{ color: "#A0A0A0" }}>mL</span>
                  </p>
                  <p className="text-xs" style={{ color: "#666" }}>
                    {doseNum > 0 ? (
                      <>= {volumePerDoseUnits} units on a 100-unit insulin syringe</>
                    ) : (
                      "Enter dose to calculate"
                    )}
                  </p>
                </div>

                {/* Doses per vial */}
                <div
                  className="p-5 rounded-sm"
                  style={{ backgroundColor: "#1C1C1A", border: "1px solid #2A2A28" }}
                >
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#666666" }}>
                    Doses Per Vial
                  </p>
                  <p className="text-3xl font-light mb-1" style={{ color: "#F9F9F9" }}>
                    {doseNum > 0 ? dosesPerVial : "—"}{" "}
                    <span className="text-lg" style={{ color: "#A0A0A0" }}>doses</span>
                  </p>
                  <p className="text-xs" style={{ color: "#666" }}>
                    {doseNum > 0 ? `At ${doseNum} mcg per administration` : "Enter dose to calculate"}
                  </p>
                </div>

                {/* Summary */}
                <div
                  className="p-5 rounded-sm"
                  style={{ backgroundColor: "#1C1C1A", border: "1px solid #2A2A28" }}
                >
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#666666" }}>
                    Working Concentration
                  </p>
                  <p className="text-3xl font-light mb-1" style={{ color: "#C9DD69" }}>
                    {concNum.toLocaleString()}{" "}
                    <span className="text-lg" style={{ color: "#A0A0A0" }}>mcg/mL</span>
                  </p>
                  <p className="text-xs" style={{ color: "#666" }}>
                    {(concNum / 1000).toFixed(3)} mg/mL · {vialMgNum * 1000} mcg total
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="rounded-sm p-8 mb-10 text-center"
              style={{
                backgroundColor: "#F5F4F0",
                border: "1px solid #ECEAE4",
              }}
            >
              <p style={{ color: "#666666" }} className="text-sm">
                Enter vial size and desired concentration to see results.
              </p>
            </div>
          )}

          {/* How to reconstitute — educational */}
          <div
            className="rounded-sm p-8"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #ECEAE4",
            }}
          >
            <h2 className="text-lg mb-6 tracking-tight" style={{ fontWeight: 500 }}>
              Reconstitution Protocol
            </h2>
            <ol className="space-y-5">
              {[
                {
                  step: "1",
                  title: "Gather materials",
                  body: "You need the lyophilized vial, bacteriostatic water (BAC water), a 1 mL or 3 mL syringe, and a clean work surface. Bacteriostatic water contains 0.9% benzyl alcohol as a preservative — use this for multi-dose vials to prevent bacterial contamination.",
                },
                {
                  step: "2",
                  title: "Wipe vial tops",
                  body: "Clean both vial septa (the lyophilized peptide vial and the BAC water vial) with an alcohol swab. Let dry for 30 seconds before inserting a needle.",
                },
                {
                  step: "3",
                  title: "Draw BAC water",
                  body: `Using the calculator above, draw the calculated volume of BAC water (${isValid ? bacWaterMl + " mL" : "calculated amount"}) into your syringe. For small volumes (< 0.5 mL), a 1 mL insulin syringe is recommended for accuracy.`,
                },
                {
                  step: "4",
                  title: "Inject slowly — aim at the vial wall",
                  body: "Insert the needle into the lyophilized peptide vial. Direct the BAC water stream at the glass wall of the vial, not directly at the powder cake. This prevents foaming and maintains peptide integrity. Inject slowly.",
                },
                {
                  step: "5",
                  title: "Do not shake",
                  body: "Gently swirl or roll the vial between your palms until the powder is fully dissolved. Shaking can denature peptides. The solution should be clear (colorless to faint yellow). Cloudiness may indicate contamination or incomplete dissolution — do not use.",
                },
                {
                  step: "6",
                  title: "Label and store",
                  body: "Label your vial with the compound, concentration, date of reconstitution, and lot number. Store reconstituted peptides at 2–8°C (refrigerator). Most reconstituted peptides are stable for 4–8 weeks under cold storage. For longer storage, freeze at −20°C in aliquots.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5"
                    style={{ backgroundColor: "#B8A44C22", color: "#7A8A60", border: "1px solid #B8A44C44" }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: "#000" }}>
                      {item.title}
                    </p>
                    <p className="text-sm" style={{ color: "#555", lineHeight: 1.65 }}>
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Insulin syringe units reference */}
          <div
            className="rounded-sm p-6 mt-6"
            style={{
              backgroundColor: "#F5F4F0",
              border: "1px solid #ECEAE4",
            }}
          >
            <h3 className="text-sm font-semibold mb-3" style={{ color: "#000" }}>
              Insulin Syringe Units Reference
            </h3>
            <p className="text-xs mb-4" style={{ color: "#666", lineHeight: 1.6 }}>
              Standard 100-unit insulin syringes hold 1 mL. Each unit mark = 0.01 mL. This calculator shows both mL and units (U-100 scale) for easy drawing.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid #DDDBD5" }}>
                    <th className="text-left py-2 pr-4" style={{ color: "#666666", fontWeight: 500 }}>Volume (mL)</th>
                    <th className="text-left py-2 pr-4" style={{ color: "#666666", fontWeight: 500 }}>Units (U-100)</th>
                    <th className="text-left py-2" style={{ color: "#666666", fontWeight: 500 }}>Common use</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { ml: "0.05 mL", units: "5 U", use: "50 mcg @ 1000 mcg/mL" },
                    { ml: "0.10 mL", units: "10 U", use: "100 mcg @ 1000 mcg/mL" },
                    { ml: "0.25 mL", units: "25 U", use: "250 mcg @ 1000 mcg/mL" },
                    { ml: "0.50 mL", units: "50 U", use: "500 mcg @ 1000 mcg/mL" },
                    { ml: "1.00 mL", units: "100 U", use: "Full 1 mL draw" },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #F0EEEA" }}>
                      <td className="py-2 pr-4" style={{ color: "#000", fontFamily: "monospace" }}>{row.ml}</td>
                      <td className="py-2 pr-4" style={{ color: "#000", fontFamily: "monospace" }}>{row.units}</td>
                      <td className="py-2" style={{ color: "#666" }}>{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Disclaimer */}
          <div
            className="rounded-sm px-6 py-4 mt-6"
            style={{
              backgroundColor: "#FFF8ED",
              border: "1px solid #E8D5B0",
            }}
          >
            <p className="text-xs" style={{ color: "#7A6030", lineHeight: 1.6 }}>
              <strong>Research Use Only.</strong> This calculator is provided as a reference tool for qualified researchers working with lyophilized peptides in a laboratory setting. All compounds purchased from Nexphoria are for in vitro research use only. This tool does not constitute medical advice.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="btn-primary inline-block"
            >
              Browse Research Catalog
            </Link>
            <p className="text-xs mt-4" style={{ color: "#737373" }}>
              All compounds shipped as lyophilized powder with COA.{" "}
              <Link href="/faq#reconstitution" className="underline" style={{ color: "#666666" }}>
                FAQ: Reconstitution
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
