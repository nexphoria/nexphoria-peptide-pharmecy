import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "nexphoria-design-language-research-brand-identity",
  title: "Nexphoria Design Language: Why a Peptide Vendor Looks Like a Science Journal",
  description:
    "The thinking behind Nexphoria's visual identity — editorial typography, documentation-first UX, and why the brand deliberately avoids fitness culture aesthetics.",
  category: "About Nexphoria",
  readMinutes: 6,
  publishedAt: "2026-06-18",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Most research peptide brands look like supplement companies. Aggressive color palettes, before-and-after imagery, product shots with protein shakers. Nexphoria was built to look like neither of those things — and the visual choices reflect the same reasoning as the documentation standards: researchers don't want to feel like they're shopping at GNC.",
    },
    {
      type: "heading",
      text: "The Visual Brief: Science Over Supplement Culture",
    },
    {
      type: "paragraph",
      text: "The brief for Nexphoria's visual identity came down to a single constraint: every design decision should signal precision, not lifestyle. The site should feel more like a well-designed scientific journal or pharma preclinical reference than an e-commerce supplement storefront.",
    },
    {
      type: "paragraph",
      text: "This drove three core choices: editorial typography, a restricted color palette built around neutrals with a single scientific accent, and a photography direction that is cold, clinical, and documentation-oriented.",
    },
    {
      type: "heading",
      text: "Typography: Cormorant Garamond + Inter",
    },
    {
      type: "subheading",
      text: "Display Typeface: Cormorant Garamond",
    },
    {
      type: "paragraph",
      text: "Cormorant Garamond is a refined serif typeface used for all headings and display text on the Nexphoria site. Its character is formal without being stiff — it carries the visual weight of printed scientific literature while remaining legible on screen. At weight 500 (Medium), it reads as precise and considered rather than decorative. The tracking is kept tight at display sizes (-0.02em for H1) to reinforce cohesion and seriousness.",
    },
    {
      type: "paragraph",
      text: "The choice of a serif for display text is deliberate counter-programming against the sans-serif-everything aesthetic of most D2C brands. Cormorant reads like authority — like a paper, a reference text, a COA header — not like a startup landing page.",
    },
    {
      type: "subheading",
      text: "Body and UI: Inter",
    },
    {
      type: "paragraph",
      text: "Inter at weight 300 (Light) handles body copy. The light weight creates an editorial feel — confident and readable without visual density. Heavier weights (400, 500) appear in UI elements, labels, navigation, and functional text. The combination of Cormorant for authority and Inter for precision reflects the dual nature of what Nexphoria publishes: editorial research content and functional ordering/documentation interfaces.",
    },
    {
      type: "heading",
      text: "Color System: Precision, Not Excitement",
    },
    {
      type: "paragraph",
      text: "The Nexphoria color palette is deliberately narrow. Two background tones — near-black (#0F0F0E) and warm cream (#F9F9F9) — anchor all layouts. Text is near-black (#1A1A1A) or secondary grey (#666666). The single accent color is gold (#B8A44C for decorative/dark-background use; #7A6B2A for accessible gold text on cream).",
    },
    {
      type: "table",
      headers: ["Token", "Hex", "Use Case"],
      rows: [
        ["Background (cream)", "#F9F9F9", "Default page background"],
        ["Background (dark)", "#0F0F0E", "Hero, dark sections"],
        ["Text (primary)", "#1A1A1A", "Body text, headings on light bg"],
        ["Text (secondary)", "#666666", "Supporting text, metadata"],
        ["Gold (decorative)", "#B8A44C", "Borders, badges, icons, accents"],
        ["Gold (accessible text)", "#7A6B2A", "Gold text on cream (WCAG AA)"],
        ["Warm section", "#EAE7E3", "Featured sections, CTA areas"],
      ],
    },
    {
      type: "paragraph",
      text: "The gold accent carries the brand's single gesture toward warmth and craft. It appears in category badges, eyebrow labels, border accents, and navigation highlights — but never in body text on cream backgrounds (where contrast fails WCAG AA). The accessible gold variant (#7A6B2A) satisfies contrast requirements while maintaining the palette. This kind of specificity in color application reflects the same attention to standards that appears in the documentation practices.",
    },
    {
      type: "heading",
      text: "Photography Direction: Cold, Clinical, Credible",
    },
    {
      type: "paragraph",
      text: "Nexphoria's photography brief explicitly prohibits gym shots, fitness selfies, shirtless product promotion, and before-and-after body imagery. The research peptide market is already saturated with that aesthetic; it's the visual language of the supplement industry, and it communicates 'fitness product' rather than 'research compound.'",
    },
    {
      type: "paragraph",
      text: "What works for Nexphoria: single-vial product shots on matte black or concrete surfaces with scientific lighting. Hands in gloves handling vials. Close-ups of lot numbers and COA printouts. Lab environments with clinical precision. Cool color temperature throughout — no warm orange-yellow tones. The target emotional response to Nexphoria imagery is 'this is what it looks like when people who know what they're doing work' — not 'this will make you look better in six weeks.'",
    },
    {
      type: "heading",
      text: "The Grain Texture",
    },
    {
      type: "paragraph",
      text: "The Nexphoria site uses a subtle noise/grain texture overlay at approximately 6% opacity applied via a full-bleed pseudo-element. The purpose is tactility: it prevents the design from feeling like a sterile tech product and adds a slight physical quality — like paper, like a printed document. This is intentional. Removing it makes the site feel clinical in the wrong direction — cold and digital rather than precise and trustworthy.",
    },
    {
      type: "heading",
      text: "Motion: Measured, Not Bouncy",
    },
    {
      type: "paragraph",
      text: "Animations on the site follow a strict principle: they should be measured, not bouncy. Element entrance animations use opacity fades and subtle translate-Y shifts (20px to 0) at 300–600ms with ease-out timing. No spring physics, no elastic transitions, no looping animated backgrounds. Hover states shift in 150–200ms. The reduced motion preference is respected globally.",
    },
    {
      type: "paragraph",
      text: "The reasoning: animation should guide attention, not perform. Bouncy, elastic, or exuberant animation signals 'consumer product.' Measured, precise animation signals 'precision tool.' Every interface choice in Nexphoria's design is a communication about what kind of vendor this is.",
    },
    {
      type: "heading",
      text: "The Language Rules",
    },
    {
      type: "paragraph",
      text: "The brand voice follows the same precision principle as the visual system. A few specific rules: 'pharmaceutical-grade' is never used without a verified cGMP facility certification behind it. 'Healing,' 'treatment,' 'therapy,' and 'cure' are not used for compound descriptions. 'Proven to' is replaced by 'research indicates' or 'studies show.' 'Researchers' is preferred over 'customers' in content contexts.",
    },
    {
      type: "paragraph",
      text: "Call-to-action copy reflects this too. 'Browse the Catalog →' instead of 'Shop Now!' 'View Lot COAs →' instead of 'Buy With Confidence!' 'Read the Research →' instead of 'See the Results!' Every word is chosen to reinforce the research context and avoid the consumer supplement register.",
    },
    {
      type: "callout",
      text: "The goal of Nexphoria's design is to communicate: this vendor thinks the way you think. They check the data. They show the work. They don't oversell. If the visual design is doing its job, a researcher should feel that before they read a single word of copy.",
    },
    {
      type: "disclaimer",
      text: "Nexphoria compounds are sold exclusively for in vitro and laboratory research purposes. Not for human consumption. Not evaluated or approved by the FDA for any medical use.",
    },
  ],
};
