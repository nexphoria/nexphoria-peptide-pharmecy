# Nexphoria Brand Style Guide
> Version 1.0 | June 2026
> The definitive reference for how Nexphoria looks, sounds, and feels across all touchpoints.

---

## BRAND ESSENCE

### One-Line Summary
Research-grade. Uncomprisingly documented. Built for the 1% who actually check the data.

### Brand Positioning
Nexphoria is the research peptide brand for people who don't trust marketing — including ours. We earn credibility through documentation, not decoration.

### Brand Archetype
**The Scientist + The Sage**
Not the showman. Not the hustler. The person in the lab at midnight who actually knows how this works and explains it honestly.

### Tone Pillars
1. **Precise** — Every word earns its place. No filler. Numbers over adjectives.
2. **Honest** — We say what the research shows. We say what we don't know. We don't oversell.
3. **Technical, not cold** — We respect the intelligence of the reader without lecturing or alienating.
4. **Confident without bravado** — We don't need to trash competitors. The data speaks.

---

## LOGO

### Primary Logo
**Wordmark:** NEXPHORIA
- Font: Custom or Cormorant Garamond Bold / Cormorant SC
- Letter spacing: +0.15em to +0.20em
- All uppercase
- Color: `#1A1A1A` (on light backgrounds) or `#F9F9F9` (on dark backgrounds)

### Logo Variants
| Variant | When to Use |
|---------|------------|
| Full wordmark, dark | Default for white/cream backgrounds |
| Full wordmark, light | Dark/black backgrounds |
| Wordmark + tagline | Marketing materials, social bio headers |
| Mark only (N glyph) | Favicon, app icon, 32×32 minimum usage |

### Clear Space
Minimum clear space around logo = cap-height of the "N" on all sides.

### Logo Don'ts
- ❌ Do not stretch or compress
- ❌ Do not rotate
- ❌ Do not apply gradients or drop shadows
- ❌ Do not place on busy photographic backgrounds without a solid overlay
- ❌ Do not use the logo in gold — wordmark is always near-black or white

---

## COLOR SYSTEM

### Primary Palette

| Token | Hex | Name | Usage |
|-------|-----|------|-------|
| `--color-gold` | `#B8A44C` | Brand Gold | Eyebrows, category badges, UI accents, borders, icons |
| `--color-dark` | `#0F0F0E` | Near Black | Hero backgrounds, dark sections |
| `--color-page-bg` | `#F9F9F9` | Cream | Default page background |
| `--color-text-primary` | `#1A1A1A` | Near Black Text | Body text on light backgrounds |

### Secondary Palette

| Token | Hex | Name | Usage |
|-------|-----|------|-------|
| `--color-dark-panel` | `#161614` | Dark Panel | Secondary dark sections |
| `--color-dark-card` | `#1C1C1A` | Dark Card | Cards within dark sections |
| `--color-dark-border` | `#2A2A28` | Dark Border | Borders within dark sections |
| `--color-card-bg` | `#F7F7F7` | Light Card | Cards on cream backgrounds |
| `--color-card-border` | `#E5E5E5` | Light Border | Borders on cream backgrounds |
| `--color-cream-warm` | `#EAE7E3` | Warm Cream | Featured sections, CTA backgrounds |

### Typography / Accessibility

| Token | Hex | Name | Usage |
|-------|-----|------|-------|
| `--color-gold-text` | `#7A6B2A` | Accessible Gold | Gold text on cream backgrounds (WCAG AA) |
| `--color-text-secondary` | `#666666` | Secondary Text | Supporting text, metadata |
| `--color-text-muted` | `#737373` | Muted Text | Captions, timestamps |

> **Note:** Never use `#B8A44C` for body text on cream (#F9F9F9) — it fails WCAG AA (contrast ratio ~2.1:1). Use `#7A6B2A` instead. Gold brand color IS used for accents, borders, and decorative elements where accessibility doesn't apply.

### Color Application Rules

**On dark backgrounds (#0F0F0E):**
- Primary text: `#F9F9F9`
- Secondary text: `#A0A0A0`
- Eyebrow/accent text: `#B8A44C` (gold — passes AA on dark)
- Borders: `rgba(255,255,255,0.07)` to `rgba(255,255,255,0.15)`
- Cards: `#1C1C1A` with `#2A2A28` borders

**On cream backgrounds (#F9F9F9):**
- Primary text: `#1A1A1A`
- Secondary text: `#666666`
- Eyebrow text: `#7A6B2A` (accessible gold)
- Accents/badges: `#B8A44C` background with `#010101` text
- Borders: `rgba(0,0,0,0.06)` to `#E5E5E5`

---

## TYPOGRAPHY

### Typefaces

**Display / Headings: Cormorant Garamond**
- Source: Google Fonts (`Cormorant_Garamond`)
- Weights used: 300 (Light), 400 (Regular), 700 (Bold)
- CSS variable: `--font-display`
- Character: Refined, editorial, slightly formal. Creates intellectual credibility without stiffness.
- Used for: All H1–H6, hero statements, pull quotes

**Body / UI: Inter**
- Source: Google Fonts (`Inter`)
- Weights used: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold)
- CSS variable: `--font-sans`
- Character: Clean, readable at small sizes. Scientific precision without personality.
- Used for: Body copy, navigation, labels, buttons, metadata, tables

---

### Type Scale

| Element | Size | Weight | Font | Line Height | Letter Spacing |
|---------|------|--------|------|-------------|----------------|
| H1 (hero) | 48–72px / `text-4xl md:text-5xl` | 500 | Cormorant | 1.05 | -0.02em |
| H1 (page) | 40–56px / `text-4xl` | 500 | Cormorant | 1.1 | -0.02em |
| H2 (section) | 32–40px / `text-3xl md:text-4xl` | 500 | Cormorant | 1.15 | -0.01em |
| H2 (article) | 24–32px / `text-xl md:text-2xl` | 500 | Cormorant | 1.25 | -0.01em |
| H3 | 20–24px / `text-lg md:text-xl` | 500 | Cormorant | 1.3 | -0.01em |
| Body (large) | 17–18px | 300 | Inter | 1.8 | 0 |
| Body (default) | 15–16px | 300–400 | Inter | 1.7 | 0 |
| Body (small) | 13–14px | 400 | Inter | 1.6 | 0 |
| Eyebrow | 11px | 500 | Inter | 1.0 | +0.1em |
| Caption | 12px | 400 | Inter | 1.5 | 0 |
| Button | 11px | 500 | Inter | 1.0 | +0.02em |
| Navigation | 13px | 400–500 | Inter | 1.0 | 0 |

### Typography Rules

**Eyebrow labels:**
```css
.eyebrow {
  font-size: 0.6875rem; /* 11px */
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: var(--font-sans);
}
```
Color: `#7A6B2A` on cream, `#B8A44C` on dark.

**Body text philosophy:**
Inter weight 300 (Light) is default for body paragraphs. The light weight reads as editorial and confident rather than heavy. Weight 400 used for UI elements and functional text (buttons, nav, labels). Never use weight 700 in body text blocks.

**Heading philosophy:**
Cormorant at weight 500 (Medium) is the sweet spot — present enough to read on screen, refined enough to signal quality. Long headlines (H1) track tight (-0.02em) for cohesion. Subheadings can relax to -0.01em.

---

## SPACING & LAYOUT

### Grid
- Max content width: `80rem` (1280px)
- Container padding (mobile): `1.5rem` (24px) each side
- Container padding (desktop): `3rem` (48px) each side

### Section Vertical Rhythm
| Section type | Padding (mobile) | Padding (desktop) |
|-------------|-----------------|------------------|
| Hero | `pt-32 pb-16` (128px/64px) | `pt-40 pb-20` (160px/80px) |
| Standard section | `py-20` (80px) | `py-28` (112px) |
| Compact section (filter bars, nav strips) | `py-5` (20px) | `py-5` (20px) |
| CTA sections | `py-20` (80px) | `py-28` (112px) |

### Border Radius
- Cards: `rounded-lg` (8px)
- Buttons: `rounded-full` (pill)
- Badges/tags: `rounded-full` (pill)
- Inputs: `rounded-lg` (8px)

### Card Border Treatment
Cards always have a slightly elevated top border that reflects the section's accent color:
```css
border: 1px solid rgba(0,0,0,0.06);
border-top: 2px solid #B8A44C; /* or category color */
background-color: #fff;
```

---

## COMPONENTS

### Buttons

**Primary Button (`btn-primary`)**
```css
background-color: #1A1A1A;
color: #F9F9F9;
font-size: 11px;
font-weight: 500;
border: 1px solid #1A1A1A;
padding: 12px 28px;
border-radius: 9999px; /* pill */
letter-spacing: 0.02em;
transition: opacity 0.2s;

&:hover {
  opacity: 0.85;
}
```

**Secondary Button (`btn-secondary`)**
```css
background-color: transparent;
color: #1A1A1A;
font-size: 11px;
font-weight: 500;
border: 1px solid #1A1A1A;
padding: 12px 28px;
border-radius: 9999px;

&:hover {
  background-color: rgba(0,0,0,0.04);
}
```

**Ghost Link Button (inline CTA)**
```css
color: #B8923A; /* or gold-text #7A6B2A on cream */
font-size: 14px;
font-weight: 500;
display: inline-flex;
align-items: center;
gap: 8px;

/* Arrow suffix: → */
```

**Dark Surface Button**
```css
/* Outlined on dark backgrounds */
background-color: transparent;
color: #F9F9F9;
border: 1px solid rgba(255,255,255,0.25);
padding: 12px 28px;
border-radius: 9999px;

&:hover {
  border-color: rgba(255,255,255,0.5);
}
```

---

### Eyebrow + Heading Pattern
Every major section starts with this 3-element stack:
```html
<p class="eyebrow mb-5" style="color: #B8A44C">
  Section Label
</p>
<h2 class="text-3xl md:text-4xl mb-5" 
    style="font-weight: 500; color: [dark or cream]; letter-spacing: -0.01em; line-height: 1.1">
  The headline.
</h2>
<p class="text-base max-w-2xl"
   style="font-weight: 300; line-height: 1.7; color: [secondary]">
  Supporting description.
</p>
```

---

### Breadcrumb
Dark variant: gold separator, `#A0A0A0` inactive, white active
Light variant: `#999` separator, `#555` inactive, `#1A1A1A` active

---

### Tags / Category Badges
```css
background-color: #B8A44C;
color: #010101;
font-size: 11px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.05em;
padding: 3px 10px;
border-radius: 9999px;
```

---

## PHOTOGRAPHY & IMAGERY DIRECTION

### What Works for Nexphoria

**Product Photography**
- Clean, minimal surfaces: matte black, raw concrete, frosted glass
- Single vial compositions — don't cluster products
- Cold, scientific lighting — no warm Instagram glow
- Background: flat white or very dark (#0F0F0E) only
- Reflections acceptable if they look lab-surface (not lifestyle)
- Depth of field: razor-thin on the vial, everything else soft

**Lifestyle / Context**
- No: gym shots, fitness selfies, shirtless males, before/after bodies
- Yes: Lab settings, research environments, notebooks + data, microscopes, clean workspaces
- Yes: Hands in gloves handling vials — clinical precision aesthetic
- Yes: Close-ups of labels, lot numbers, COA printouts
- Target feeling: "This is what it looks like when people who know what they're doing work."

**Content Imagery**
- Article headers: abstract science imagery — protein structure renders, molecular graphics in dark blue/grey palette
- Data visualization: clean black-on-white or white-on-dark charts
- NO stock photos of generic scientists smiling in labs

### Color Temperature in Photos
All imagery skews cool to neutral. If an image looks warm (orange, yellow tones), it doesn't belong in Nexphoria's feed.

### Aspect Ratios
- Product cards: 1:1 square or 4:3
- Hero images: 16:9 or 3:1 cinematic
- Instagram feed: 1:1 square (consistent grid)
- Instagram Reels/Stories: 9:16
- Blog headers: 16:9 or 3:1

---

## ICONOGRAPHY

- **Style:** Line icons, 1.5px stroke weight, rounded ends
- **Size system:** 16px / 20px / 24px / 32px
- **Color:** Match the text color of the context. Never standalone gold icons in body content.
- **Source:** Lucide React (consistent with Next.js codebase) or custom SVG set

---

## MOTION & ANIMATION

### Principles
- Animations should feel **measured, not bouncy**
- Nothing should distract from content
- Reduced motion preferences must be respected (`prefers-reduced-motion` query is implemented globally)

### Timing
| Motion type | Duration | Easing |
|------------|---------|--------|
| Hover state (color/opacity) | 150–200ms | ease |
| Element entrance | 300–500ms | ease-out |
| Page transitions | 300ms | ease |
| Scroll-triggered reveals | 400–600ms | ease-out |

### What's Appropriate
- ✅ Opacity fade-in on section entrance
- ✅ Subtle translate-Y (20px → 0) on element entrance
- ✅ Border color shifts on card hover
- ❌ Bouncing, elastic, or spring animations
- ❌ Parallax effects on mobile
- ❌ Looping animated backgrounds (performance + distraction)

---

## TEXTURE

The Nexphoria site has a **subtle grain texture overlay** (6% opacity noise filter on `body::before`). This adds tactility and warmth to what would otherwise feel like a sterile tech site. This is intentional — do not remove it.

On dark sections, a very faint diagonal line texture may be added to surface depth.

---

## BRAND VOICE GUIDE

### Core Voice: The Expert Who Explains, Not Performs

Nexphoria doesn't "hype." It informs. The voice is that of a knowledgeable colleague — direct, technical, honest about uncertainty.

### Tone by Context

| Context | Tone Calibration | Example |
|---------|-----------------|---------|
| Product descriptions | Clinical-precise, evidence-referenced | "BPC-157 is a synthetic pentadecapeptide derived from Body Protection Compound, studied for its role in angiogenesis and connective tissue repair in rodent models." |
| Blog articles | Technical but human | "Here's what the data shows — and where the data runs out." |
| Email subject lines | Direct, informational | "Lot 2406-BPC157 COA posted" or "New: Retatrutide in stock" |
| Social captions | Same precision, shorter | "HPLC doesn't tell you what the compound is. Mass spec does. Both on every lot." |
| Error states / 404 | Dry wit, still precise | "This compound doesn't exist in our catalog. Try the search — we stock 50+ peptides." |
| Crisis communications | Transparent, accountable | "Here's what happened. Here's the COA. Here's what we're doing." |

### Words We Use

**Do say:**
- "research-grade" / "≥99% HPLC" / "lot-specific COA"
- "researchers" (not "customers" in content)
- "protocol" / "reconstitution" / "lyophilized"
- "documented" / "verifiable" / "independent testing"
- "cold-chain" / "US-synthesized"
- Numbers: "≥99% purity" beats "ultra-pure"

**Don't say:**
- "pharmaceutical grade" unless cGMP facility is verified (legal risk)
- "healing" / "treatment" / "cure" / "therapy" / "for use in humans"
- "proven to" (say "studied for" or "research indicates")
- "the best" without a specific differentiator attached
- "amazing" / "incredible" / "premium" without data behind it
- "guaranteed results" — never

### Boilerplate Disclaimer
All content that touches compound properties must include or link to:
> *For Research Use Only. Not for human consumption. Nexphoria compounds are sold exclusively for in vitro and laboratory research purposes. Not approved by the FDA for any medical use.*

---

## SOCIAL MEDIA STYLE

### Instagram
- **Grid aesthetic:** Alternating: dark product shot / light clinical info graphic / dark / light
- **Caption length:** 1–3 sentences. No emoji chains. One relevant hashtag max per post (if any).
- **Hashtag strategy:** Avoid #peptides #gains #bodybuilding. Use: #researchpeptides #peptideresearch or none.
- **Bio:** "Research-grade peptides. COAs on every lot. For qualified researchers only. nexphoria.com"

### Reddit
- **Account:** u/nexphoria or u/nexphoria_research (clearly disclosed as brand account)
- **Contribution type:** Answer real questions with real data. Post COA comparisons. Respond in crisis. Never promotional-first.
- **Rule:** Never post "hey check out our deal" — contribute value, earn trust, let the link to the site flow from credibility.

### Email
- **From name:** Nexphoria Research (not "The Nexphoria Team" — too many words)
- **Subject line style:** Lowercase, functional: "new: retatrutide in stock" or "lot 2406 COAs posted"
- **Email design:** Plain-text-style or minimal HTML. No heavy image-first templates. This audience finds marketing HTML juvenile.

---

## LEGAL + COMPLIANCE VOICE ELEMENTS

The "Research Use Only" positioning must be consistent everywhere:

**Header banner:**
> "Research Use Only — Not for Human Consumption"

**Product page footer note:**
> "This compound is sold exclusively for in vitro and laboratory research. Not intended for human consumption, medical use, or veterinary use. Not evaluated or approved by the FDA."

**Blog article footer:**
> "This article is for informational and research reference purposes only. It does not constitute medical advice. Nexphoria compounds are for laboratory research use only."

---

## WHAT NEXPHORIA IS NOT

| Not This | This Instead |
|----------|-------------|
| A supplement brand | A research compound supplier |
| "Premium" or "luxury" | Rigorous and documented |
| Community/lifestyle | Precision and evidence |
| Aggressive direct response ("BUY NOW") | Informed purchase decision support |
| Fitness culture | Research culture |
| Claims-heavy | Data-heavy |

---

## QUICK REFERENCE CARD

```
COLORS:
  Background:    #F9F9F9 (cream) / #0F0F0E (dark)
  Text:          #1A1A1A (primary) / #666666 (secondary)
  Gold accent:   #B8A44C (decorative) / #7A6B2A (text, accessible)
  Warm section:  #EAE7E3

FONTS:
  Display/Heads: Cormorant Garamond, weight 300/400/700
  Body/UI:       Inter, weight 300/400/500/700

VOICE:
  Precise. Honest. Technical-not-cold. Evidence-first.
  Never: hype, therapy claims, "cure," "guaranteed"

CTA COPY:
  "Browse the Catalog →"
  "View Lot COAs →"
  "Read the Research →"
  Never: "Shop Now!" or "Get Yours Today!"
```
