#!/bin/bash
# Deep Audit + Revision Loop for Nexphoria
# Runs 10 passes using Claude Code CLI (Opus via Max sub)
# Focus: product images, checkout flow, design consistency, mobile, subscription model

set -e
cd /Users/chiyayosopov/Projects/nexphoria

LOG_DIR="./audit-logs"
mkdir -p "$LOG_DIR"

PASS_TOPICS=(
  "Product images: Audit all product image paths. Ensure every product in lib/products.ts has a matching image in public/products/. Fix any broken image references. Ensure consistent image sizing and quality. Check that product cards display images correctly on both desktop and mobile."
  "Checkout flow: Audit the entire checkout experience from cart to payment. Check the CartDrawer component, checkout page, Stripe integration in workers/checkout.js. Ensure pricing displays correctly, cart updates work, and the checkout button properly redirects to Stripe. Fix any UX issues."
  "Design consistency: Audit typography, spacing, and color usage across ALL pages. Ensure the brand colors (#1B3A2D dark green, #F7F5F0 cream background, etc.) are used consistently. Check font weights, heading hierarchy, button styles, and spacing rhythm match throughout."
  "Mobile responsiveness: Open every page layout and audit for mobile breakpoints. Check that navigation works on mobile, text doesn't overflow, images scale properly, touch targets are adequate (min 44px), and no horizontal scroll exists. Fix all mobile layout issues."
  "Subscription model & pricing: Audit the subscription/pricing logic. Check that subscription options (one-time vs recurring) display correctly on product pages. Ensure the Stack Builder works properly. Verify pricing calculations are correct with subscription discounts applied."
  "Navigation & information architecture: Audit the site navigation, footer links, and page routing. Ensure all internal links work (no 404s for static export). Check breadcrumbs, back buttons, and user flow between pages is intuitive. Fix any dead links or confusing navigation."
  "Performance & SEO: Audit page load performance. Check image sizes (compress any over 500KB), ensure proper lazy loading, minimize unused CSS/JS. Check meta tags, Open Graph images, robots.txt, and sitemap.ts are correctly configured for all pages."
  "Product detail pages: Audit individual product pages for completeness. Ensure each product has: clear description, dosage info, pricing, image, add-to-cart functionality, related products, and proper schema markup. Fix any missing or broken elements."
  "Trust elements & social proof: Audit trust signals across the site. Check that COA badges, purity percentages, third-party testing mentions, and manufacturing credentials are prominently displayed. Ensure the science/clinical pages reinforce credibility."
  "Final polish & cross-page consistency: Do a final comprehensive pass. Check all animations work smoothly (framer-motion), hover states are consistent, loading states exist where needed, error states are handled, and the overall experience feels premium and cohesive."
)

for i in {1..10}; do
  PASS_NUM=$i
  TOPIC="${PASS_TOPICS[$((i-1))]}"
  TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
  LOG_FILE="$LOG_DIR/pass-${PASS_NUM}-${TIMESTAMP}.md"
  
  echo "============================================"
  echo "PASS $PASS_NUM / 10 — $(date)"
  echo "Topic: ${TOPIC:0:80}..."
  echo "============================================"
  
  # Run Claude Code audit + fix
  claude --model opus --permission-mode bypassPermissions --print \
    "You are doing pass $PASS_NUM of 10 deep audits on the Nexphoria peptide e-commerce site.

FOCUS FOR THIS PASS: $TOPIC

INSTRUCTIONS:
1. Read the relevant source files thoroughly
2. Identify ALL issues (list them)
3. Fix every issue you find — edit the actual source files
4. After fixes, run 'npm run build' to verify the build passes
5. If build fails, fix the errors and rebuild until it passes
6. Summarize what you fixed

IMPORTANT CONTEXT:
- This is a Next.js 16 static export site (output: 'export')
- Deployed to Cloudflare Pages (static files in /out)
- Stripe checkout handled by workers/checkout.js (Cloudflare Worker)
- Brand: dark green (#1B3A2D), cream (#F7F5F0), gold accents
- Product images in public/products/
- Uses Tailwind CSS v4, Framer Motion, shadcn components
- Target audience: researchers buying peptides
- Must feel premium, clinical, trustworthy

DO NOT:
- Remove any existing functionality
- Change the overall site structure/routing
- Modify environment variables or secrets
- Break the static export compatibility

After all fixes, run: npm run build
Report the build result." \
    2>&1 | tee "$LOG_FILE"
  
  # Check if build succeeded
  if [ -d "./out" ]; then
    echo ""
    echo "✅ Build succeeded for pass $PASS_NUM"
    
    # Deploy to Cloudflare Pages
    echo "Deploying to Cloudflare Pages..."
    npx wrangler pages deploy ./out --project-name=nexphoria --branch=main 2>&1 | tail -5
    
    # Git commit
    git add -A
    git commit -m "audit-pass-${PASS_NUM}: ${TOPIC:0:60}" --no-verify 2>/dev/null || true
    
    echo "✅ Pass $PASS_NUM complete and deployed"
  else
    echo "❌ Build may have failed for pass $PASS_NUM — checking..."
    npm run build 2>&1 | tail -20
    if [ -d "./out" ]; then
      npx wrangler pages deploy ./out --project-name=nexphoria --branch=main 2>&1 | tail -5
      git add -A
      git commit -m "audit-pass-${PASS_NUM}: ${TOPIC:0:60}" --no-verify 2>/dev/null || true
    fi
  fi
  
  echo ""
  echo "--- Pass $PASS_NUM finished at $(date) ---"
  echo ""
  
  # Small pause between passes to avoid rate limits
  sleep 10
done

echo ""
echo "🏁 ALL 10 PASSES COMPLETE — $(date)"
echo "Check audit-logs/ for detailed reports"
