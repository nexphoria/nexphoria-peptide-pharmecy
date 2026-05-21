# Nexphoria — Project Config

## Project
Premium e-commerce storefront for Nexphoria, a peptide brand.
Aesthetic target: futuristic luxury lab. Clean, precise, high-end,
spec-forward, deeply educational. Restraint over hype.

## Brand (LOCKED — do not alter)
Colors:
- Primary yellow-green: #C9DD69
- Secondary olive: #A4B08A
- Near-black: #010101
- Off-white/cream backgrounds and stone/charcoal neutrals as supporting tones
Fonts:
- Display/headings: Roc Grotesk (Adobe Fonts)
- Body: Neue Haas Grotesk (Adobe Fonts)
Logo suite + chemical/molecular pattern: in ./brand-assets/
Use the chemical pattern as a recurring motif, sparingly.

## Voice
- Clinical, educational, precise. Sober luxury, not hype.
- Every product page is genuinely informative: structure, specs,
  storage, handling, third-party testing / COA references.
- Products are presented as research compounds. Do NOT write copy
  that promises personal health outcomes or implies approved use.
- Aspirational brand storytelling ("Find Your Focus" imagery) is
  allowed on brand/about pages only — not as product claims.

## Tech stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui for components
- Framer Motion for restrained, premium motion
- Commerce backend: TBD (payments handled separately by owner)

## Rules
- Performance is a feature: target fast loads, optimized images.
- No bloat. Few dependencies, used well.
- Build incrementally. After each major step, stop and summarize.
- Do not assume payment integration — leave commerce backend abstracted.
