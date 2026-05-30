import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Peptide Safety & Handling Guide: PPE, Sharps, Spills & BSL-1 Practices | Nexphoria",
  description:
    "Comprehensive peptide laboratory safety reference: PPE selection, aseptic technique, sharps and needlestick protocol, spill response, contamination control, waste disposal, and incident documentation for research-use peptides.",
  openGraph: {
    title: "Peptide Safety & Handling Guide — Nexphoria Research",
    description:
      "PPE, aseptic technique, sharps handling, spill response, and waste disposal for research peptides. Research use only.",
    url: "https://nexphoria.com/guides/safety-handling",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Safety & Handling Guide — Nexphoria",
    description:
      "Lab safety practices for research peptides: PPE, sharps, spills, and waste. Research use only.",
  },
};

const SECTIONS = [
  { id: "scope", title: "Scope & Research-Use Disclaimer" },
  { id: "ppe", title: "Personal Protective Equipment (PPE)" },
  { id: "workspace", title: "Workspace Setup & Aseptic Technique" },
  { id: "sharps", title: "Sharps & Needlestick Protocol" },
  { id: "spills", title: "Spill Response & Decontamination" },
  { id: "contamination", title: "Contamination Control" },
  { id: "waste", title: "Waste Disposal" },
  { id: "incident", title: "Incident Documentation" },
  { id: "checklists", title: "Quick-Reference Checklists" },
];

export default function SafetyHandlingGuidePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F3] text-[#1A1A1A]">
      <Breadcrumb
        items={[
          { label: "Guides", href: "/guides" },
          { label: "Safety & Handling" },
        ]}
      />

      {/* Hero */}
      <section className="border-b border-[#1A1A1A0F]">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-12 lg:py-24">
          <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A99]">
            Research Reference · BSL-1 Practices
          </p>
          <h1 className="font-serif text-4xl leading-[1.1] tracking-[-0.02em] text-[#1A1A1A] sm:text-5xl lg:text-6xl">
            Peptide Safety &amp; Handling Guide
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-[1.7] text-[#1A1A1ACC] lg:text-lg">
            A working reference for laboratory handling of research peptides: personal protective equipment,
            aseptic technique, sharps protocol, spill response, contamination control, and waste disposal.
            Aligned with general BSL-1 practices and standard pharmaceutical-grade aseptic workflows.
          </p>

          {/* Research-use banner */}
          <div className="mt-8 rounded-sm border border-[#B8A44C40] bg-[#B8A44C0F] p-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#B8A44C]">
              For Research Use Only
            </p>
            <p className="mt-2 text-sm leading-[1.7] text-[#1A1A1ACC]">
              All Nexphoria peptides are sold for in&nbsp;vitro and laboratory research use only. Not for human
              consumption, therapeutic use, or veterinary application. This guide describes laboratory-handling
              practices appropriate for trained personnel in a controlled research environment.
            </p>
          </div>
        </div>
      </section>

      {/* TOC */}
      <section className="border-b border-[#1A1A1A0F] bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-8 lg:px-12">
          <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A99]">
            On this page
          </p>
          <ol className="grid grid-cols-1 gap-x-8 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {SECTIONS.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-[#1A1A1ACC] underline-offset-4 transition hover:text-[#B8A44C] hover:underline"
                >
                  <span className="text-[#1A1A1A66]">{String(i + 1).padStart(2, "0")}</span>{" "}
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-[860px] px-6 py-16 lg:px-0 lg:py-24">
        {/* 1. Scope */}
        <section id="scope" className="scroll-mt-24">
          <h2 className="font-serif text-3xl tracking-[-0.01em] text-[#1A1A1A] lg:text-4xl">
            01 · Scope &amp; Research-Use Disclaimer
          </h2>
          <div className="prose prose-neutral mt-6 max-w-none text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            <p>
              This guide covers laboratory handling of lyophilized and reconstituted research peptides at
              biosafety level 1 (BSL-1). It assumes a clean bench or laminar-flow workspace, trained personnel,
              and access to standard PPE, sharps containers, and biohazard-rated waste streams.
            </p>
            <p>
              It does not cover BSL-2/3 work with viable infectious agents, animal handling protocols, or
              regulated controlled substances. Where local institutional policies (IBC, EH&amp;S, IACUC) differ
              from this guide, institutional policy takes precedence.
            </p>
            <p>
              Nexphoria peptides are research compounds. Nothing in this document constitutes medical,
              veterinary, or clinical advice.
            </p>
          </div>
        </section>

        {/* 2. PPE */}
        <section id="ppe" className="mt-20 scroll-mt-24">
          <h2 className="font-serif text-3xl tracking-[-0.01em] text-[#1A1A1A] lg:text-4xl">
            02 · Personal Protective Equipment (PPE)
          </h2>
          <p className="mt-6 text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            PPE for peptide handling targets three exposure routes: skin/mucosal contact, accidental injection,
            and aerosolization during reconstitution.
          </p>

          <h3 className="mt-10 font-serif text-xl text-[#1A1A1A]">Minimum PPE — every session</h3>
          <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            <li>
              <strong>Nitrile gloves</strong> (powder-free, ≥4 mil). Double-glove for reconstitution and
              freeze-thaw work. Replace immediately after any contact with vial septum, BAC water, or biological
              material.
            </li>
            <li>
              <strong>Lab coat</strong> (long sleeve, knee length, buttoned). Dedicated to the wet-bench area —
              do not wear outside the lab.
            </li>
            <li>
              <strong>Safety glasses with side shields</strong> at minimum. Use full splash goggles for any
              process involving more than 1 mL of bacteriostatic water or when working with frozen vials that
              may fracture.
            </li>
            <li>
              <strong>Closed-toe shoes.</strong> No fabric uppers in active wet-bench zones.
            </li>
          </ul>

          <h3 className="mt-10 font-serif text-xl text-[#1A1A1A]">Add-on PPE by task</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#1A1A1A1A] text-left">
                  <th className="py-3 pr-4 font-medium text-[#1A1A1A]">Task</th>
                  <th className="py-3 pr-4 font-medium text-[#1A1A1A]">Add-on PPE</th>
                  <th className="py-3 font-medium text-[#1A1A1A]">Reason</th>
                </tr>
              </thead>
              <tbody className="text-[#1A1A1ACC]">
                <tr className="border-b border-[#1A1A1A0A]">
                  <td className="py-3 pr-4">Opening lyophilized vials with cake disturbance</td>
                  <td className="py-3 pr-4">N95 or surgical mask</td>
                  <td className="py-3">Aerosolized peptide dust on cake fracture</td>
                </tr>
                <tr className="border-b border-[#1A1A1A0A]">
                  <td className="py-3 pr-4">Reconstitution &gt;5 mL BAC water</td>
                  <td className="py-3 pr-4">Splash goggles + sleeve covers</td>
                  <td className="py-3">Septum kickback / pressurized vial</td>
                </tr>
                <tr className="border-b border-[#1A1A1A0A]">
                  <td className="py-3 pr-4">Handling −20°C / −80°C vials</td>
                  <td className="py-3 pr-4">Cryo gloves over nitrile</td>
                  <td className="py-3">Frostbite + vial fracture risk</td>
                </tr>
                <tr className="border-b border-[#1A1A1A0A]">
                  <td className="py-3 pr-4">Working with light-sensitive peptides (e.g., GHK-Cu)</td>
                  <td className="py-3 pr-4">Amber lighting / foil-wrapped vials</td>
                  <td className="py-3">UV-driven degradation</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Cleaning a needle-stick or biological spill</td>
                  <td className="py-3 pr-4">Double nitrile + full goggles</td>
                  <td className="py-3">Reduce secondary exposure</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-sm border-l-2 border-[#B8A44C] bg-[#B8A44C0A] p-5">
            <p className="text-[13px] uppercase tracking-[0.14em] text-[#B8A44C]">PPE Doff Order</p>
            <p className="mt-2 text-sm leading-[1.7] text-[#1A1A1ACC]">
              Gloves → goggles → coat → mask → hand-wash. Treat the outer surface of every layer as
              contaminated.
            </p>
          </div>
        </section>

        {/* 3. Workspace */}
        <section id="workspace" className="mt-20 scroll-mt-24">
          <h2 className="font-serif text-3xl tracking-[-0.01em] text-[#1A1A1A] lg:text-4xl">
            03 · Workspace Setup &amp; Aseptic Technique
          </h2>
          <div className="prose prose-neutral mt-6 max-w-none text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            <p>
              The default work surface is a non-porous bench (stainless or laminate), wiped with 70% IPA before
              and after every session. A horizontal laminar-flow hood is preferred for reconstitution but is not
              required if standard aseptic technique is followed.
            </p>
          </div>

          <h3 className="mt-10 font-serif text-xl text-[#1A1A1A]">Pre-session</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            <li>Clear bench. Remove anything not required for the session.</li>
            <li>Wipe bench with 70% IPA. Allow ≥30 s contact time before reuse.</li>
            <li>Lay out a fresh absorbent pad, plastic-backed side down.</li>
            <li>
              Arrange supplies left → right in workflow order: vials, BAC water, syringes, sharps container,
              waste container, log book.
            </li>
            <li>Don PPE (see §02). Wash hands before gloving.</li>
            <li>Disinfect vial septa with a fresh 70% IPA wipe. Hold 5 s, allow to air-dry.</li>
          </ol>

          <h3 className="mt-10 font-serif text-xl text-[#1A1A1A]">During session</h3>
          <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            <li>Never touch the needle, syringe tip, or vial septum with bare or gloved fingers.</li>
            <li>Keep the vial upright and the septum facing up except during draw.</li>
            <li>One needle, one vial. Replace the needle if it contacts any non-sterile surface.</li>
            <li>Move slowly. Most contamination events come from rushed transfers, not aerosols.</li>
            <li>If a sterile surface is touched or compromised, discard and restart that step.</li>
          </ul>

          <h3 className="mt-10 font-serif text-xl text-[#1A1A1A]">Post-session</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            <li>Cap and label every reconstituted vial. Date, compound, concentration, BAC water lot.</li>
            <li>Dispose of sharps directly into the sharps container — never into general waste.</li>
            <li>Wipe down the bench with 70% IPA.</li>
            <li>Doff PPE in the correct order (see §02).</li>
            <li>Log the session in the lab notebook (see §08).</li>
          </ol>
        </section>

        {/* 4. Sharps */}
        <section id="sharps" className="mt-20 scroll-mt-24">
          <h2 className="font-serif text-3xl tracking-[-0.01em] text-[#1A1A1A] lg:text-4xl">
            04 · Sharps &amp; Needlestick Protocol
          </h2>

          <h3 className="mt-8 font-serif text-xl text-[#1A1A1A]">Sharps handling rules</h3>
          <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            <li>
              <strong>No recapping.</strong> Do not recap used needles by hand. If recapping is unavoidable,
              use a one-handed scoop technique with the cap resting on the bench.
            </li>
            <li>
              <strong>Direct deposit.</strong> Drop used syringes into an FDA-listed sharps container at the
              point of use, within arm&apos;s reach of the bench.
            </li>
            <li>
              <strong>Fill to ¾ line.</strong> Replace sharps containers at the marked fill line — never push
              past it. Overfilled containers are the leading source of needlesticks during disposal.
            </li>
            <li>
              <strong>Single-use only.</strong> Never reuse needles or syringes, even for the same vial.
            </li>
          </ul>

          <h3 className="mt-10 font-serif text-xl text-[#1A1A1A]">Needlestick response — immediate</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            <li>
              <strong>Encourage bleeding.</strong> Do not squeeze the wound forcefully. Allow it to bleed
              passively for 30–60 seconds.
            </li>
            <li>
              <strong>Wash thoroughly.</strong> Soap and warm running water for at least 60 seconds. Do not
              scrub with brushes or solvents.
            </li>
            <li>
              <strong>Cover the wound</strong> with a clean dry dressing. Do not apply iodine or alcohol
              directly into a puncture wound.
            </li>
            <li>
              <strong>Secure the source.</strong> Photograph the vial label, log the compound, lot, and
              concentration. Place the sharp in the sharps container.
            </li>
            <li>
              <strong>Report.</strong> Notify the PI or lab manager immediately. File an institutional incident
              report within 24 hours (see §08).
            </li>
            <li>
              <strong>Medical evaluation.</strong> Seek occupational health or urgent care evaluation the same
              day — even though research peptides are not infectious agents, accidental injection of an
              unapproved substance is a reportable exposure.
            </li>
          </ol>

          <div className="mt-8 rounded-sm border border-[#1A1A1A1A] bg-[#1A1A1A05] p-5">
            <p className="text-[13px] uppercase tracking-[0.14em] text-[#1A1A1A99]">Note</p>
            <p className="mt-2 text-sm leading-[1.7] text-[#1A1A1ACC]">
              The risk of bloodborne pathogen transmission from a fresh, unused research vial is essentially
              zero. The medical concern is the unintended pharmacological exposure to an investigational
              peptide. Bring the vial label and a copy of the COA to the medical visit.
            </p>
          </div>
        </section>

        {/* 5. Spills */}
        <section id="spills" className="mt-20 scroll-mt-24">
          <h2 className="font-serif text-3xl tracking-[-0.01em] text-[#1A1A1A] lg:text-4xl">
            05 · Spill Response &amp; Decontamination
          </h2>

          <h3 className="mt-8 font-serif text-xl text-[#1A1A1A]">Liquid spill — small (&lt;25 mL)</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            <li>Alert anyone in the immediate area. Do not allow uninvolved personnel within 1 m.</li>
            <li>Don fresh nitrile gloves and goggles before approaching.</li>
            <li>Cover the spill with absorbent pads from the outside inward.</li>
            <li>Saturate with 70% IPA. Allow ≥10 minutes contact time.</li>
            <li>
              Wipe up working from the perimeter to the center. Place all absorbent material in a sealed
              biohazard bag.
            </li>
            <li>Re-clean the area with fresh IPA. Air-dry.</li>
            <li>Log the spill (see §08).</li>
          </ol>

          <h3 className="mt-10 font-serif text-xl text-[#1A1A1A]">Liquid spill — large (&gt;25 mL) or unknown</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            <li>Evacuate the immediate work area.</li>
            <li>Close doors. Post a &quot;Do not enter — spill in progress&quot; sign.</li>
            <li>Notify EH&amp;S or the institutional spill response team.</li>
            <li>Do not re-enter without full PPE (double gloves, N95, splash goggles, coat).</li>
            <li>Follow institutional spill protocol from this point.</li>
          </ol>

          <h3 className="mt-10 font-serif text-xl text-[#1A1A1A]">Lyophilized powder spill</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            <li>
              <strong>Do not sweep or blow.</strong> Both will aerosolize the powder.
            </li>
            <li>Don N95, double gloves, and goggles.</li>
            <li>Dampen the powder with a fine mist of 70% IPA from a spray bottle.</li>
            <li>Wipe up with damp absorbent pads.</li>
            <li>Wet-mop the surrounding area with IPA.</li>
            <li>Bag all waste as biohazard. Log the event.</li>
          </ol>

          <h3 className="mt-10 font-serif text-xl text-[#1A1A1A]">Broken glass vial</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            <li>Do not pick up glass with gloved hands directly.</li>
            <li>Use forceps, tongs, or a dust pan. Place fragments in the sharps container, not biohazard bag.</li>
            <li>Treat any residual liquid or powder per the procedures above.</li>
          </ol>
        </section>

        {/* 6. Contamination control */}
        <section id="contamination" className="mt-20 scroll-mt-24">
          <h2 className="font-serif text-3xl tracking-[-0.01em] text-[#1A1A1A] lg:text-4xl">
            06 · Contamination Control
          </h2>

          <div className="prose prose-neutral mt-6 max-w-none text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            <p>
              Reconstituted peptide vials are unpreserved against most bacterial growth unless bacteriostatic
              water (0.9% benzyl alcohol) is used. Contamination control protects both data integrity and
              personnel safety.
            </p>
          </div>

          <h3 className="mt-10 font-serif text-xl text-[#1A1A1A]">Vial hygiene</h3>
          <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            <li>Wipe the septum with a fresh IPA pad before every needle insertion. Allow 5 s contact time.</li>
            <li>
              Use a new needle for every draw if the vial will be revisited. Reused needles dull and core the
              septum, allowing ingress.
            </li>
            <li>Inspect the vial before every use. Discard if turbid, discolored, has visible particles, or has a damaged septum.</li>
            <li>
              Store reconstituted vials per the{" "}
              <Link href="/guides/storage" className="text-[#B8A44C] underline-offset-2 hover:underline">
                storage guide
              </Link>
              . Do not exceed the reconstituted shelf life printed on the label.
            </li>
          </ul>

          <h3 className="mt-10 font-serif text-xl text-[#1A1A1A]">Bench &amp; tool hygiene</h3>
          <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            <li>70% IPA wipe-down before and after every session.</li>
            <li>Replace absorbent pads at every session. Do not reuse.</li>
            <li>Dedicated reconstitution tools — do not share between peptide and microbiology workflows.</li>
            <li>Pipettes and tip boxes used for peptide work should be flagged and segregated.</li>
          </ul>

          <h3 className="mt-10 font-serif text-xl text-[#1A1A1A]">Cross-contamination prevention</h3>
          <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            <li>One needle per vial per draw. Never insert a used needle into a second compound.</li>
            <li>
              When working with multiple peptides in a single session, complete each compound fully — reconstitute,
              label, store — before opening the next.
            </li>
            <li>Use color-coded vial caps or label stickers to visually distinguish concurrent compounds.</li>
            <li>Glove change between distinct compound workflows.</li>
          </ul>
        </section>

        {/* 7. Waste */}
        <section id="waste" className="mt-20 scroll-mt-24">
          <h2 className="font-serif text-3xl tracking-[-0.01em] text-[#1A1A1A] lg:text-4xl">
            07 · Waste Disposal
          </h2>

          <p className="mt-6 text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            Research peptide waste streams in a BSL-1 lab fall into three categories. Follow institutional
            policy first; the framework below is a baseline.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#1A1A1A1A] text-left">
                  <th className="py-3 pr-4 font-medium text-[#1A1A1A]">Waste type</th>
                  <th className="py-3 pr-4 font-medium text-[#1A1A1A]">Container</th>
                  <th className="py-3 font-medium text-[#1A1A1A]">Disposal route</th>
                </tr>
              </thead>
              <tbody className="text-[#1A1A1ACC]">
                <tr className="border-b border-[#1A1A1A0A]">
                  <td className="py-3 pr-4">Used needles, syringes with attached needles, broken glass vials</td>
                  <td className="py-3 pr-4">FDA-listed rigid sharps container</td>
                  <td className="py-3">Medical / regulated sharps pickup</td>
                </tr>
                <tr className="border-b border-[#1A1A1A0A]">
                  <td className="py-3 pr-4">
                    Spent absorbent pads, gloves, IPA wipes, empty vials with residue
                  </td>
                  <td className="py-3 pr-4">Red biohazard bag (autoclavable if available)</td>
                  <td className="py-3">Biohazard / regulated medical waste stream</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">
                    Unused, unopened, expired peptide vials; reconstituted vials past shelf life
                  </td>
                  <td className="py-3 pr-4">Sealed secondary container, labeled</td>
                  <td className="py-3">EH&amp;S chemical / pharmaceutical waste pickup</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-sm border-l-2 border-[#B8A44C] bg-[#B8A44C0A] p-5">
            <p className="text-[13px] uppercase tracking-[0.14em] text-[#B8A44C]">Never</p>
            <p className="mt-2 text-sm leading-[1.7] text-[#1A1A1ACC]">
              Never pour reconstituted peptide or BAC water down the sink, into the trash, or into a sharps
              container loose. Never place naked sharps in a biohazard bag.
            </p>
          </div>
        </section>

        {/* 8. Incident docs */}
        <section id="incident" className="mt-20 scroll-mt-24">
          <h2 className="font-serif text-3xl tracking-[-0.01em] text-[#1A1A1A] lg:text-4xl">
            08 · Incident Documentation
          </h2>

          <p className="mt-6 text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            Every safety incident — needlestick, splash, spill, broken vial, suspected contamination — must be
            documented. Documentation protects the researcher and produces the data needed to correct the
            workflow.
          </p>

          <h3 className="mt-10 font-serif text-xl text-[#1A1A1A]">Minimum incident record</h3>
          <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            <li>Date, time, and location of the incident.</li>
            <li>Personnel involved (initials, role).</li>
            <li>Compound, lot number, concentration, vial source.</li>
            <li>Description of what happened — single sentence, no speculation.</li>
            <li>Immediate response taken (first aid, decon, vial photographed).</li>
            <li>PPE worn at the time of the incident.</li>
            <li>Notifications sent — PI, lab manager, EH&amp;S, occupational health.</li>
            <li>Follow-up actions and reviewer sign-off.</li>
          </ul>

          <h3 className="mt-10 font-serif text-xl text-[#1A1A1A]">Filing timeline</h3>
          <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] text-[#1A1A1ACC]">
            <li>Verbal notification to PI / lab manager: within 1 hour.</li>
            <li>Written incident note in lab notebook: end of the same session.</li>
            <li>Institutional incident report: within 24 hours.</li>
            <li>Post-incident review and corrective-action note: within 7 days.</li>
          </ul>
        </section>

        {/* 9. Checklists */}
        <section id="checklists" className="mt-20 scroll-mt-24">
          <h2 className="font-serif text-3xl tracking-[-0.01em] text-[#1A1A1A] lg:text-4xl">
            09 · Quick-Reference Checklists
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-sm border border-[#1A1A1A14] bg-white p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#B8A44C]">Pre-session</p>
              <ul className="mt-4 space-y-2 text-sm text-[#1A1A1ACC]">
                <li>☐ Bench cleared and IPA-wiped</li>
                <li>☐ Fresh absorbent pad down</li>
                <li>☐ PPE donned, hands washed under gloves</li>
                <li>☐ Sharps container within arm&apos;s reach</li>
                <li>☐ Lab notebook open</li>
                <li>☐ Vial septa wiped + air-dried</li>
              </ul>
            </div>

            <div className="rounded-sm border border-[#1A1A1A14] bg-white p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#B8A44C]">During session</p>
              <ul className="mt-4 space-y-2 text-sm text-[#1A1A1ACC]">
                <li>☐ One needle per vial per draw</li>
                <li>☐ No needle recapping</li>
                <li>☐ Sharps go straight to container</li>
                <li>☐ Slow, controlled transfers</li>
                <li>☐ Each new vial labeled before storage</li>
              </ul>
            </div>

            <div className="rounded-sm border border-[#1A1A1A14] bg-white p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#B8A44C]">Post-session</p>
              <ul className="mt-4 space-y-2 text-sm text-[#1A1A1ACC]">
                <li>☐ Reconstituted vials labeled + dated</li>
                <li>☐ Vials returned to correct storage temp</li>
                <li>☐ Sharps and waste in correct streams</li>
                <li>☐ Bench IPA-wiped</li>
                <li>☐ PPE doffed in order, hands washed</li>
                <li>☐ Notebook entry complete</li>
              </ul>
            </div>

            <div className="rounded-sm border border-[#1A1A1A14] bg-white p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#B8A44C]">Needlestick — first 5 min</p>
              <ul className="mt-4 space-y-2 text-sm text-[#1A1A1ACC]">
                <li>☐ Bleed passively 30–60 s</li>
                <li>☐ Wash with soap + warm water 60 s</li>
                <li>☐ Cover with dry dressing</li>
                <li>☐ Photograph vial label + COA</li>
                <li>☐ Notify PI / lab manager</li>
                <li>☐ Seek occupational health same day</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related guides */}
        <section className="mt-24 border-t border-[#1A1A1A14] pt-10">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A99]">Related references</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/guides/storage"
              className="group rounded-sm border border-[#1A1A1A14] bg-white p-5 transition hover:border-[#B8A44C]"
            >
              <p className="font-serif text-lg text-[#1A1A1A] group-hover:text-[#B8A44C]">Storage Guide</p>
              <p className="mt-2 text-sm text-[#1A1A1ACC]">
                Temperatures, freeze-thaw limits, and stability windows per compound.
              </p>
            </Link>
            <Link
              href="/guides/reconstitution"
              className="group rounded-sm border border-[#1A1A1A14] bg-white p-5 transition hover:border-[#B8A44C]"
            >
              <p className="font-serif text-lg text-[#1A1A1A] group-hover:text-[#B8A44C]">Reconstitution Guide</p>
              <p className="mt-2 text-sm text-[#1A1A1ACC]">
                BAC water selection, dilution math, and aseptic transfer steps.
              </p>
            </Link>
            <Link
              href="/guides/dosing-protocols"
              className="group rounded-sm border border-[#1A1A1A14] bg-white p-5 transition hover:border-[#B8A44C]"
            >
              <p className="font-serif text-lg text-[#1A1A1A] group-hover:text-[#B8A44C]">Dosing Protocols</p>
              <p className="mt-2 text-sm text-[#1A1A1ACC]">
                Loading vs. maintenance phases, cycle structure, and washout periods.
              </p>
            </Link>
          </div>
        </section>

        {/* Footer disclaimer */}
        <section className="mt-16 rounded-sm border border-[#1A1A1A14] bg-[#1A1A1A05] p-6">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A99]">Disclaimer</p>
          <p className="mt-3 text-sm leading-[1.7] text-[#1A1A1ACC]">
            This guide is provided as a general laboratory reference for research personnel handling Nexphoria
            research peptides. It does not replace institutional EH&amp;S policy, IBC review, or formal
            occupational health training. All Nexphoria peptides are for in&nbsp;vitro and laboratory research
            use only. Not for human consumption, therapeutic use, or veterinary application.
          </p>
        </section>
      </article>
    </main>
  );
}
