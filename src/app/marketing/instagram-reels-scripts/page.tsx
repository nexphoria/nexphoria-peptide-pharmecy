import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "30 Instagram Reels Scripts | Nexphoria",
  description:
    "Thirty short-form Instagram Reels scripts for Nexphoria — education-first hooks, research framing, trust-building angles, and clean calls to action.",
  openGraph: {
    title: "30 Instagram Reels Scripts — Nexphoria",
    description:
      "A full 30-Reels content system for education, trust, compound spotlights, and thought leadership.",
    url: "https://nexphoria.com/marketing/instagram-reels-scripts",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

type Reel = {
  number: number;
  title: string;
  hook: string;
  body: string[];
  cta: string;
};

type Batch = {
  title: string;
  subtitle: string;
  reels: Reel[];
};

const BATCHES: Batch[] = [
  {
    title: "Batch 1: Education & Awareness",
    subtitle: "Core explainers that make the brand useful before it ever sells.",
    reels: [
      {
        number: 1,
        title: "What Even Is a Peptide?",
        hook: "Most people have no idea what a peptide actually is.",
        body: [
          "A peptide is a short chain of amino acids — the building blocks of protein.",
          "Your body makes thousands of them; insulin is the classic example.",
          "Researchers study synthetic peptides because they target one pathway with precision.",
        ],
        cta: "Follow for more research-grade breakdowns. Link in bio → nexphoria.com",
      },
      {
        number: 2,
        title: "Why Purity Actually Matters",
        hook: "99% purity vs 95% purity. Here's what that 4% costs you.",
        body: [
          "At 95% purity, 1 in 20 molecules in your vial is not what you ordered.",
          "Impurities can create false results, so HPLC exists for a reason.",
          "Third-party verified COAs are the baseline — not a marketing flex.",
        ],
        cta: "See our COAs at nexphoria.com. Link in bio.",
      },
      {
        number: 3,
        title: "The Peptide Sciences Gap",
        hook: "A major research supplier shut down and left a real market gap.",
        body: [
          "Researchers lost a familiar source of high-purity supply overnight.",
          "That created demand for consistent, documented, research-grade alternatives.",
          "Nexphoria was built to fill that gap with stronger QC and clear documentation.",
        ],
        cta: "Switch today. nexphoria.com",
      },
      {
        number: 4,
        title: "BPC-157 in 60 Seconds",
        hook: "BPC-157 explained in under a minute.",
        body: [
          "It is a 15-amino-acid peptide studied heavily in preclinical repair models.",
          "Mechanisms under investigation include nitric oxide, VEGF, and EGFR signaling.",
          "Interesting because of broad tissue activity across musculoskeletal and GI research.",
        ],
        cta: "Full breakdown at nexphoria.com/blog",
      },
      {
        number: 5,
        title: "Cold Chain — Why Your Peptides Die in Shipping",
        hook: "Your peptides might be dead before they arrive.",
        body: [
          "Heat denatures proteins, and shipping vans can get brutally hot.",
          "Damage is often invisible — there is no color change or smell.",
          "Insulated packaging and tracked cold chain are worth paying for.",
        ],
        cta: "Our cold chain protocol → nexphoria.com/shipping",
      },
      {
        number: 6,
        title: "The HPLC Certificate Explained",
        hook: "This document either means everything — or nothing.",
        body: [
          "Look for compound name, lot number, purity percentage, graph, and lab name.",
          "Red flags: no graph, no lot traceability, or no third-party verification.",
          "Green flags: a real lab, a real chromatogram, and a matching batch number.",
        ],
        cta: "Check any batch → nexphoria.com/coa",
      },
      {
        number: 7,
        title: "GH Axis — The Longevity Target Researchers Focus On",
        hook: "Growth hormone drops with age — researchers care about what that means.",
        body: [
          "Lower GH correlates with reduced lean mass, higher fat mass, and weaker recovery.",
          "The real question is whether restoring the signaling pathway matters.",
          "That is why GHRH analogs and GHS compounds are heavily studied.",
        ],
        cta: "GH axis research guide → nexphoria.com/blog",
      },
      {
        number: 8,
        title: "NAD+ Is Not Optional After 40",
        hook: "NAD+ declines with age — here's why researchers care.",
        body: [
          "NAD+ supports DNA repair, sirtuins, and mitochondrial function.",
          "When levels drop, cellular maintenance slows and aging pathways worsen.",
          "NMN, NR, and direct NAD+ are all still under active investigation.",
        ],
        cta: "NAD+ vs NMN breakdown → nexphoria.com/blog",
      },
      {
        number: 9,
        title: "What Reconstitution Actually Means",
        hook: "Lyophilized peptide. Bacteriostatic water. Here's what that means.",
        body: [
          "Lyophilized means freeze-dried, which preserves stability in powder form.",
          "Reconstitute gently: inject against the vial wall and swirl, do not shake.",
          "After mixing, store refrigerated and use within the expected stability window.",
        ],
        cta: "Full reconstitution guide → nexphoria.com/guides",
      },
      {
        number: 10,
        title: "The 5 Peptides Longevity Researchers Study Most",
        hook: "If you could only research 5 peptides for longevity, start here.",
        body: [
          "Epithalon, BPC-157, GHK-Cu, MOTS-c, and CJC-1295 + Ipamorelin.",
          "Each compound maps to a different longevity-relevant pathway.",
          "None are supplements; all are research compounds with published preclinical data.",
        ],
        cta: "Longevity stack guide → nexphoria.com/blog",
      },
    ],
  },
  {
    title: "Batch 2: Social Proof & Trust",
    subtitle: "The trust layer: documentation, manufacturing, and batch consistency.",
    reels: [
      {
        number: 11,
        title: "Why Researchers Choose Nexphoria",
        hook: "Researchers do not actually care about the cheapest price.",
        body: [
          "They care about purity, documentation, and batch consistency.",
          "Nexphoria positions around HPLC verification, third-party COAs, and cold chain.",
          "We compete on trust, not hype.",
        ],
        cta: "nexphoria.com — research-grade, full stop.",
      },
      {
        number: 12,
        title: "Reading Our COA — A Walkthrough",
        hook: "Every product has a public Certificate of Analysis.",
        body: [
          "The COA shows compound, lot number, purity, and chromatography output.",
          "The lab is independent, so the verification is not self-authored.",
          "Researchers can verify the batch before ordering.",
        ],
        cta: "Check our COAs → nexphoria.com/coa",
      },
      {
        number: 13,
        title: "Batch Consistency — The Metric Most Vendors Ignore",
        hook: "You ordered the same peptide twice and got two different outcomes.",
        body: [
          "That is often a batch-quality problem, not a researcher problem.",
          "When purity swings, data is no longer apples-to-apples.",
          "Consistency demands the same synthesis process and QC every time.",
        ],
        cta: "Our quality standards → nexphoria.com",
      },
      {
        number: 14,
        title: "What 'US-Manufactured' Actually Means",
        hook: "Not all peptides labeled 'US-made' are actually made in the US.",
        body: [
          "Some vendors only repackage imported API and call it domestic.",
          "True US manufacturing means synthesis, QC, and custody inside the US.",
          "That matters for traceability, accountability, and oversight.",
        ],
        cta: "Nexphoria: manufactured in the USA. nexphoria.com",
      },
      {
        number: 15,
        title: "How to Verify a COA Is Real",
        hook: "A supplier sent you a COA. Here's how to spot a fake.",
        body: [
          "Verify the lab exists, the lot number matches, and the graph is included.",
          "Check the date — stale COAs for fresh product are a red flag.",
          "If any answer is no, find another supplier.",
        ],
        cta: "All Nexphoria COAs are public. nexphoria.com/coa",
      },
      {
        number: 16,
        title: "The Problem With 'Cheapest Price' Peptides",
        hook: "$25 BPC-157 vs $55 BPC-157 — what are you actually buying?",
        body: [
          "Real quality has real synthesis and verification costs.",
          "Low prices usually mean lower purity, no third-party testing, or weak oversight.",
          "For research, your data is only as good as the material you start with.",
        ],
        cta: "nexphoria.com — quality you can verify.",
      },
    ],
  },
  {
    title: "Batch 3: Compound Spotlights",
    subtitle: "High-interest compounds with an evidence-first framing.",
    reels: [
      {
        number: 17,
        title: "TB-500: The Repair Peptide Researchers Ignore",
        hook: "BPC-157 gets attention. TB-500 might be more interesting.",
        body: [
          "TB-500 is a synthetic analog of Thymosin beta-4.",
          "It helps regulate actin, which matters for cell movement and tissue repair.",
          "The combination with BPC-157 is compelling because the mechanisms differ.",
        ],
        cta: "TB-500 guide → nexphoria.com/blog",
      },
      {
        number: 18,
        title: "Epithalon: The Telomere Peptide",
        hook: "A four-amino-acid peptide with surprising longevity research.",
        body: [
          "Epithalon is one of the most studied longevity peptides in the literature.",
          "Research points to telomerase activation and replicative lifespan effects.",
          "Human data is limited, but the mechanism is real and the history is deep.",
        ],
        cta: "Epithalon research guide → nexphoria.com/blog",
      },
      {
        number: 19,
        title: "Selank vs. Benzos — What the Research Shows",
        hook: "A peptide with anxiolytic activity and a different tolerance profile.",
        body: [
          "Selank is a synthetic heptapeptide developed by Russian researchers.",
          "It modulates the GABA system and appears to avoid the tolerance issue seen with benzos.",
          "It is a research compound in the West, not a consumer supplement.",
        ],
        cta: "Selank research guide → nexphoria.com/blog",
      },
      {
        number: 20,
        title: "GHK-Cu: The Copper Peptide That Regulates 4,000 Genes",
        hook: "A tripeptide in your blood changes with age — and researchers care why.",
        body: [
          "GHK-Cu is studied for wound healing, collagen synthesis, angiogenesis, and repair.",
          "It is strongly associated with gene-regulation and tissue-repair signaling.",
          "Age-related decline is what makes it interesting for longevity and skin research.",
        ],
        cta: "GHK-Cu deep dive → nexphoria.com/blog",
      },
      {
        number: 21,
        title: "Semaglutide: What Researchers Are Actually Studying",
        hook: "Semaglutide is not just a weight-loss drug.",
        body: [
          "Research is expanding into cardiovascular outcomes, neurodegeneration, and liver health.",
          "The GLP-1 receptor is widespread, which is why the signal keeps getting wider.",
          "The science is still evolving, but the scope is enormous.",
        ],
        cta: "GLP-1 research landscape → nexphoria.com/blog",
      },
      {
        number: 22,
        title: "Ipamorelin: The Clean GHS",
        hook: "Researchers keep returning to this growth hormone secretagogue.",
        body: [
          "Ipamorelin stimulates GH release through ghrelin receptor signaling.",
          "It is favored because it does not strongly elevate cortisol or prolactin.",
          "Paired with CJC-1295, it creates a useful GH-axis research model.",
        ],
        cta: "Ipamorelin vs GHRP-6 comparison → nexphoria.com/blog",
      },
      {
        number: 23,
        title: "MOTS-c: Your Mitochondria Make Hormones Now",
        hook: "A mitochondria-derived peptide regulates metabolism and declines with age.",
        body: [
          "MOTS-c is encoded in mitochondrial DNA, not nuclear DNA.",
          "Research points to metabolic flexibility, exercise-mimetic effects, and insulin sensitivity.",
          "The preclinical story is compelling and still evolving.",
        ],
        cta: "MOTS-c research overview → nexphoria.com/blog",
      },
      {
        number: 24,
        title: "The BPC + TB Stack — Why Researchers Combine Them",
        hook: "The combination may cover more repair pathways than either compound alone.",
        body: [
          "BPC-157 is associated with vascular and GI repair signaling.",
          "TB-500 is associated with structural tissue healing and actin regulation.",
          "The overlap is small, which is why the stack concept makes sense.",
        ],
        cta: "BPC+TB stack guide → nexphoria.com/blog",
      },
    ],
  },
  {
    title: "Batch 4: Thought Leadership",
    subtitle: "High-level content that frames Nexphoria as the category expert.",
    reels: [
      {
        number: 25,
        title: "What Will Longevity Research Look Like in 2030?",
        hook: "Mouse lifespan extension is here. Human longevity is still catching up.",
        body: [
          "Senolytics, mitochondria-targeted peptides, and epigenetic reprogramming are moving fast.",
          "Peptides are one tool in the broader longevity toolbox.",
          "The real destination is understanding and adjusting aging biology.",
        ],
        cta: "Longevity research library → nexphoria.com/blog",
      },
      {
        number: 26,
        title: "The Problem With Most Research Peptide Marketing",
        hook: "Every vendor says 'highest quality.' Almost none prove it.",
        body: [
          "Proof means third-party COAs with lot traceability.",
          "Claims without independent lab verification are not proof.",
          "Nexphoria keeps the standard simple: document the batch or do not say it.",
        ],
        cta: "See the documentation → nexphoria.com/coa",
      },
      {
        number: 27,
        title: "Why Animal Data Matters — And Why It Isn't Enough",
        hook: "A peptide works in rats. That does not mean it works in humans.",
        body: [
          "Animal data shows mechanism potential and helps generate dosing hypotheses.",
          "The jump from 'works in rats' to 'proven in humans' is huge.",
          "Intellectual honesty is the difference between research and hype.",
        ],
        cta: "Evidence-based guides → nexphoria.com/blog",
      },
      {
        number: 28,
        title: "3 Questions Every Researcher Should Ask Their Supplier",
        hook: "Before you order, ask these three questions.",
        body: [
          "Can I see the batch COA? What lab ran it? How is it shipped?",
          "If the supplier stumbles on any of those, you have your answer.",
          "Nexphoria is designed to answer all three clearly.",
        ],
        cta: "Ask us → nexphoria.com | COAs publicly posted.",
      },
      {
        number: 29,
        title: "What 'Research Only' Actually Means",
        hook: "You've seen the label. Here's the real meaning.",
        body: [
          "Research-use-only means the product is sold for laboratory research, not treatment.",
          "It is not an FDA-approved drug or supplement.",
          "That framing is not a disclaimer; it is the actual category.",
        ],
        cta: "Our research philosophy → nexphoria.com",
      },
      {
        number: 30,
        title: "Why We Started Nexphoria",
        hook: "We built Nexphoria to replace a broken standard with a better one.",
        body: [
          "Real US manufacturing. Real third-party testing. Real cold-chain logistics.",
          "Researchers deserve a supplier they can cite in methodology, not just order from.",
          "That is the whole pitch.",
        ],
        cta: "Join us → nexphoria.com",
      },
    ],
  },
];

function ScriptCard({ reel }: { reel: Reel }) {
  return (
    <article className="rounded-3xl border border-white/8 bg-zinc-900 p-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#B8A44C] mb-2">
            Reel {reel.number}
          </p>
          <h3 className="text-xl font-semibold leading-snug">{reel.title}</h3>
        </div>
        <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 bg-zinc-800 px-2 py-1 rounded-full shrink-0">
          30–60s
        </span>
      </div>

      <div className="space-y-4 text-sm leading-6 text-zinc-300">
        <div className="rounded-2xl border border-white/8 bg-zinc-950 p-4">
          <p className="text-zinc-500 uppercase tracking-[0.16em] text-[11px] mb-2">Hook</p>
          <p>{reel.hook}</p>
        </div>

        <div>
          <p className="text-zinc-500 uppercase tracking-[0.16em] text-[11px] mb-2">Body</p>
          <ul className="space-y-2 list-disc list-inside">
            {reel.body.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-[#B8A44C]/20 bg-[#B8A44C]/10 p-4">
          <p className="text-zinc-500 uppercase tracking-[0.16em] text-[11px] mb-2">CTA</p>
          <p className="text-zinc-100">{reel.cta}</p>
        </div>
      </div>
    </article>
  );
}

export default function InstagramReelsScriptsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Marketing Hub", href: "/marketing" },
            { label: "30 Instagram Reels Scripts" },
          ]}
        />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Short Form</p>
          <h1 className="text-page-hero font-bold tracking-tight mb-5">30 Instagram Reels Scripts</h1>
          <p className="body-lg text-zinc-400 max-w-2xl">
            Use clean hooks, educational framing, and low-hype CTAs. The goal is simple: make Nexphoria
            feel like the research-grade brand in the category.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-10">
        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">Production notes</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 text-sm text-zinc-300">
            <div className="rounded-2xl border border-white/8 bg-zinc-950 p-4">Format: 9:16 vertical, 30–60 seconds each</div>
            <div className="rounded-2xl border border-white/8 bg-zinc-950 p-4">Brand colors: #010101, #B8A44C, white text</div>
            <div className="rounded-2xl border border-white/8 bg-zinc-950 p-4">Style: minimalist, scientific, lab-b-roll friendly</div>
            <div className="rounded-2xl border border-white/8 bg-zinc-950 p-4">No medical claims, no cure/treat language</div>
          </div>
        </article>

        {BATCHES.map((batch) => (
          <section key={batch.title} className="space-y-5">
            <div>
              <p className="eyebrow mb-2">{batch.subtitle}</p>
              <h2 className="text-3xl font-semibold">{batch.title}</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {batch.reels.map((reel) => (
                <ScriptCard key={reel.number} reel={reel} />
              ))}
            </div>
          </section>
        ))}

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/marketing"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-[#B8A44C]/40"
          >
            Back to hub
          </Link>
          <Link
            href="/marketing/customer-personas"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-[#B8A44C]/40"
          >
            Persona map
          </Link>
        </div>
      </section>
    </main>
  );
}
