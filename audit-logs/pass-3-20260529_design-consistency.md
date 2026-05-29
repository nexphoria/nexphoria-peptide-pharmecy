# Audit Pass 3: Design Consistency — Typography, Spacing, Color

**Date:** 2026-05-29
**Focus:** Typography, spacing, and color usage consistency across ALL pages
**Build result:** PASS (all 72 pages generated successfully)

---

## Issues Found & Fixed

### 1. OFF-BRAND ACCENT COLORS (Critical)

The CSS variables in `globals.css` define the accent color as `#A4B08A` (olive), but several pages were using completely different accent colors:

| Page | Was Using | Should Be | Fixed |
|------|-----------|-----------|-------|
| Blog index | `#C9DD69` (acid-green) | `#A4B08A` (olive) | Yes |
| Blog index | `#B8923A` (gold) | `#A4B08A` (olive) | Yes |
| Blog article | `#C9DD69` (acid-green) | `#A4B08A` (olive) | Yes |
| Blog article | `#B8923A` (gold) | `#A4B08A` (olive) | Yes |
| FAQ page | `#B8923A` (gold) | `#A4B08A` (olive) | Yes |
| Products compare button | `#C9A24B` (gold) | `#A4B08A` (olive) | Yes |
| Products search focus | `#C9A24B` (gold) | `#A4B08A` (olive) | Yes |
| Blog `categoryColors` map | 4 different colors | All `#A4B08A` | Yes |
| Products compare banner | Gold (#FFF8E8, #F0D896) | Olive-tinted (#F4F7EE, #C8D4B4) | Yes |

### 2. HEADING WEIGHT INCONSISTENCIES (Major)

The site standard is `font-medium` (500) for headings. Several pages used conflicting weights:

| Page | Issue | Fix |
|------|-------|-----|
| Science h1 | `font-bold` class + `fontWeight: 200` inline (contradiction) | Removed `font-bold`, set `fontWeight` to 500 via `font-medium` |
| Science h2s | `font-bold` class + `fontWeight: 600` inline | Changed to `fontWeight: 500` |
| Science h3 | `font-bold` + `fontWeight: 600` | Changed to `fontWeight: 500` |
| Blog h1 | `fontWeight: 200` (too thin) | Changed to `fontWeight: 500` |
| Blog h2/h3 | `fontWeight: 300-400` | Changed to `fontWeight: 500` |
| Blog CTA h2 | `fontWeight: 200` | Changed to `font-medium tracking-tight` |
| FAQ h1 | `fontWeight: 200` | Changed to `font-medium tracking-tight` |
| FAQ CTA h3 | `fontWeight: 300` | Changed to `font-medium` |
| Build Your Stack h1/h2/h3 | `font-bold` (700) | Changed to `font-medium` (500) |

### 3. EYEBROW STYLE INCONSISTENCIES

The `.eyebrow` CSS class provides a standardized treatment, but several pages used custom inline styles:

| Page | Was | Fix |
|------|-----|-----|
| Science hero eyebrow | `text-[10px] font-semibold tracking-[0.22em]` | `.eyebrow` class |
| Science compound classes eyebrow | `text-[10px] font-semibold tracking-[0.22em]` | `.eyebrow` class |
| Science documentation eyebrow | `text-[10px] font-semibold tracking-[0.22em]` | `.eyebrow` class |
| Blog hero eyebrow | `text-xs uppercase tracking-widest` | `.eyebrow` class |
| FAQ hero eyebrow | `text-xs uppercase` with custom spacing | `.eyebrow` class |

### 4. BORDER RADIUS INCONSISTENCIES

| Page | Was | Fix |
|------|-----|-----|
| Blog featured card | `rounded-sm` (2px) | `rounded-lg` (8px) |
| Blog article cards | `rounded-sm` (2px) | `rounded-lg` (8px) |
| Blog CTA button | `rounded-sm` | `rounded-lg` |
| Blog article callout | `rounded-sm` | `rounded-lg` |
| Blog article disclaimer | `rounded-sm` | `rounded-lg` |

### 5. SECTION PADDING INCONSISTENCIES

| Page | Was | Fix |
|------|-----|-----|
| Blog index sections | `py-14 md:py-16` (112/128px) | `py-20 md:py-28` (160/224px) |
| Blog article sections | `py-14 md:py-16` | `py-20 md:py-28` |

### 6. TAILWIND GRAY UTILITIES vs SITE TOKENS

Build Your Stack page used generic Tailwind gray utilities instead of the site's color tokens:

| Was | Replaced With |
|-----|---------------|
| `text-gray-600` | `text-[#555]` |
| `text-gray-500` | `text-[#888]` |
| `text-gray-400` | `text-[#AAA]` |
| `text-gray-700` | `text-[#555]` |
| `bg-gray-200` | `bg-[#E8E5E0]` |

### 7. BLOG CTA BUTTONS

Blog pages used custom inline-styled buttons instead of the site's `btn-primary` class:

| Page | Was | Fix |
|------|-----|-----|
| Blog index CTA | Custom `px-7 py-3.5 rounded-sm bg-[#010101]` | `btn-primary` |
| Blog article CTA | Custom `px-6 py-3 rounded-sm bg-[#010101]` | `btn-primary` |

---

## Files Modified

1. `src/app/blog/page.tsx` — Color, typography, spacing, border-radius, button fixes
2. `src/app/blog/[slug]/page.tsx` — Color, typography, spacing, border-radius, button fixes
3. `src/app/faq/page.tsx` — Color, eyebrow, typography fixes
4. `src/app/products/client.tsx` — Compare mode accent color fixes
5. `src/app/science/client.tsx` — Typography weight conflicts, eyebrow standardization
6. `src/app/build-your-stack/page.tsx` — Tailwind gray→site tokens, heading weight normalization

## Not Changed (Intentional)

- **About page Georgia serif font**: The About and Contact pages intentionally use `Georgia, serif` for an editorial feel on dark-background pages. This is an intentional design choice for the brand storytelling sections, distinct from the product/utility pages.
- **About page `font-bold`**: The About page uses `font-bold` with Georgia, which works differently than with Inter. Left as-is since it's part of the editorial design system.
- **Homepage**: Already consistent — uses `font-medium` headings, `.eyebrow` class, `#A4B08A` olive accents throughout.
