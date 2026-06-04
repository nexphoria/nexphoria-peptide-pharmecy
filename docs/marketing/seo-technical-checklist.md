# Nexphoria SEO Technical Checklist & Google Search Console Setup Guide

**Last Updated:** June 2026  
**Platform:** Shopify  
**Product Category:** Peptide Store / E-commerce  
**Purpose:** Complete technical SEO setup for search visibility and indexing

---

## Table of Contents
1. [Google Search Console Setup](#google-search-console-setup)
2. [Robots.txt Configuration](#robotstxt-configuration)
3. [Sitemap Submission](#sitemap-submission)
4. [Meta Title & Description Templates](#meta-title--description-templates)
5. [Schema Markup (JSON-LD)](#schema-markup-json-ld)
6. [Open Graph Tags](#open-graph-tags)
7. [Page Speed Optimization](#page-speed-optimization)
8. [Internal Linking Strategy](#internal-linking-strategy)
9. [Canonical URLs](#canonical-urls)
10. [301 Redirect Plan](#301-redirect-plan)

---

## Google Search Console Setup

### Step 1: Add Your Property
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **"Add Property"** (top left dropdown)
3. Choose **"URL prefix"** property type
4. Enter: `https://www.nexphoria.com` (or your actual domain)
5. Click **Continue**

### Step 2: Verify Domain Ownership (Choose One Method)

#### **Method A: HTML File Upload (Recommended)**
1. Download the HTML verification file from GSC
2. In Shopify Admin:
   - Go to **Settings → Files**
   - Upload the verification file
   - Note the full URL: `https://cdn.shopify.com/s/files/[ID]/[filename]`
   - Return to GSC and paste this URL in the verification field
3. Click **Verify** (may take 24-48 hours)

#### **Method B: DNS TXT Record (Fastest)**
1. Copy the TXT record from GSC
2. In Cloudflare (if DNS hosted there):
   - Go to **DNS Records**
   - Click **+ Add record**
   - Type: `TXT`
   - Name: `@` (for root domain)
   - Content: Paste the verification code
   - Proxy status: **DNS only** (gray cloud)
   - Click **Save**
3. Return to GSC, click **Verify** (usually instant)

#### **Method C: HTML Meta Tag (Alternative)**
1. Copy the meta tag from GSC
2. In Shopify Theme:
   - Go to **Online Store → Themes**
   - Click **Edit Code**
   - Open `theme.liquid`
   - Paste in the `<head>` section:
   ```liquid
   <!-- Google Search Console Verification -->
   <meta name="google-site-verification" content="VERIFICATION_CODE_HERE">
   ```
3. Click **Save** and publish
4. Return to GSC, click **Verify**

### Step 3: Verify XML Sitemap
1. After primary verification, go to **Sitemaps** (left sidebar)
2. Enter: `https://www.nexphoria.com/sitemap.xml`
3. Click **Submit**
4. Status should show "Success" within 1-2 hours

### Step 4: Link Google Analytics
1. Go to **Settings** (gear icon, bottom left)
2. Click **Google Analytics**
3. Link your GA4 property (if you have one)
4. This enables Performance reports and page insights

### Step 5: Set Preferred Domain
1. Go to **Settings**
2. Under "Preferred domain," select `www` or non-www consistently
3. Shopify default: Usually `www` version

---

## Robots.txt Configuration

### Why It Matters for Peptide Stores
- **Prevent indexing of:** Admin pages, cart, checkout, duplicate params
- **Allow crawling of:** Product pages, collection pages, blog
- **Disallow bots:** Aggressive scrapers, bad actors

### Optimal Robots.txt for Shopify Peptide Store

**Location:** `https://www.nexphoria.com/robots.txt`

```
# Nexphoria Robots.txt
# Updated: June 2026

# All search engines
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /cart
Disallow: /checkout
Disallow: /account/
Disallow: /api/
Disallow: /?*sort_by=
Disallow: /?*filter=
Disallow: /*?*currency=
Disallow: /*?*_=
Disallow: /search?
Disallow: /pages/shipping*
Disallow: /pages/returns*
Disallow: /pages/privacy*
Disallow: /*+*
Disallow: /*%2B*
Disallow: /cdn/shop/
Disallow: /collections/all*
Disallow: /blogs/*/comments

# Yandex (Russian search, optional)
User-agent: Yandex
Allow: /
Disallow: /admin/
Disallow: /cart

# Crawl delay (optional - tells bots to wait 1 second between requests)
Crawl-delay: 1

# Sitemap
Sitemap: https://www.nexphoria.com/sitemap.xml
```

### How to Add Robots.txt to Shopify

**Option 1: Using Shopify App**
1. Install "[Robots.txt Editor](https://apps.shopify.com)" or similar app
2. Paste content above
3. Save and deploy

**Option 2: Manual URL Handling (No App)**
1. Go to **Settings → Files**
2. Create a `.txt` file with robots.txt content
3. Upload and note URL
4. Go to **Settings → Domains**
5. Use redirect or DNS to serve at `/robots.txt`

**Option 3: Netlify/Cloudflare Worker (If on Headless)**
```javascript
// Cloudflare Worker
export default {
  async fetch(request) {
    if (new URL(request.url).pathname === '/robots.txt') {
      return new Response(`User-agent: *
Allow: /
Disallow: /admin/
Disallow: /cart
Sitemap: https://www.nexphoria.com/sitemap.xml`, {
        headers: { 'Content-Type': 'text/plain' }
      });
    }
    return fetch(request);
  }
};
```

---

## Sitemap Submission

### Shopify Auto-Generated Sitemap

Shopify **automatically generates** and updates your sitemap at:

```
https://www.nexphoria.com/sitemap.xml
```

**What's Included:**
- All published products
- All collections
- All pages
- Blog posts (if enabled)

**What's NOT Included:**
- Cart, checkout, admin pages (correctly excluded)
- Draft products
- Unpublished collections

### Submit to Google Search Console

**Already covered above**, but summary:

1. **In GSC Dashboard:**
   - Click **Sitemaps** (left sidebar)
   - Enter: `https://www.nexphoria.com/sitemap.xml`
   - Click **Submit**

2. **Verify Submission:**
   - Status page shows indexed URLs
   - Check back after 24-48 hours
   - Green checkmark = successful

3. **Monitor Indexing Coverage:**
   - Go to **Coverage** report
   - Track "Valid," "Excluded," "Error" URLs
   - Investigate red/yellow items

### View Your Sitemap
- Open `https://www.nexphoria.com/sitemap.xml` in browser
- XML shows all indexed URLs and last modified dates
- Max 50,000 URLs per sitemap (Shopify handles pagination)

### Index Supplementary Collections Manually (If Needed)
If you have alternate sitemaps for images, news, videos:

```xml
<!-- Sitemap Index (sitemap_index.xml) -->
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.nexphoria.com/sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://www.nexphoria.com/sitemap-images.xml</loc>
  </sitemap>
</sitemapindex>
```

---

## Meta Title & Description Templates

### Why Metadata Matters
- **Meta Title:** Appears in search results (50-60 chars ideal)
- **Meta Description:** Preview text in SERPs (150-160 chars ideal)
- **Click-through rate** heavily influenced by compelling titles/descriptions

### Homepage

**Meta Title:**
```liquid
{{ shop.name }} - Premium Peptides & Performance Supplements | Nexphoria
```

**Meta Description:**
```liquid
Shop high-quality peptide supplements for muscle growth, recovery, and performance. Science-backed formulations trusted by athletes. Free shipping on orders $50+.
```

**In Shopify:**
1. Go to **Online Store → Themes → Customize**
2. Select **Home page**
3. In **Settings → SEO**, fill:
   - Title: `Nexphoria - Premium Peptides & Performance Supplements`
   - Description: (as above)

---

### Product Pages

**Meta Title Template (Dynamic with Liquid):**
```liquid
{{ product.title }} | Buy Online at Nexphoria
```

**Example Output:**
```
Creatine Monohydrate 5G Powder | Buy Online at Nexphoria
```

**Meta Description Template:**
```liquid
{{ product.title }} - {{ product.description | strip_html | truncatewords: 15 }}. Verified quality, fast shipping. Buy at Nexphoria.
```

**In Shopify Liquid (theme.liquid):**
```liquid
<title>{{ product.title }} | Buy Online at Nexphoria</title>
<meta name="description" content="{{ product.description | strip_html | truncatewords: 15 | strip }}">
```

**Manual Overrides (Per Product):**
1. Go to **Products → [Product Name]**
2. Scroll to **SEO**
3. Fill custom title/description:
   - Title: `Creatine Monohydrate 5G - Premium Grade | Nexphoria`
   - Description: `Lab-tested creatine monohydrate for muscle strength and endurance. Pharmaceutical grade, 5G servings. Ships in 24 hours.`

---

### Collection Pages

**Meta Title Template:**
```liquid
{{ collection.title }} | Premium Supplements at Nexphoria
```

**Examples:**
```
Pre-Workout Supplements | Premium Supplements at Nexphoria
Peptides & Growth Factors | Premium Supplements at Nexphoria
```

**Meta Description Template:**
```liquid
Browse our collection of {{ collection.title | downcase }}. Premium quality, science-backed formulations. Free shipping on $50+ orders.
```

**In Shopify:**
1. Go to **Products → Collections → [Collection]**
2. Scroll to **SEO**
3. Add custom title/description

---

### Blog Posts

**Meta Title Template:**
```liquid
{{ article.title }} | Nexphoria Blog - Peptide & Performance Insights
```

**Example:**
```
How Peptides Boost Athletic Recovery | Nexphoria Blog
```

**Meta Description Template:**
```liquid
{{ article.excerpt | strip_html | truncatewords: 15 }} Learn more about peptides and performance enhancement on the Nexphoria blog.
```

**In Shopify:**
1. Go to **Online Store → Blog Posts → [Post]**
2. Scroll to **SEO**
3. Fill title/description

**Recommended Blog Topics (for SEO):**
- "How Peptides Work: Science Explained"
- "Peptide vs. Protein: Key Differences"
- "Pre-Workout Supplements Buyer's Guide"
- "Top 10 Peptides for Muscle Growth"

---

## Schema Markup (JSON-LD)

### Why Schema Matters
- Rich snippets in search results
- Increased CTR (click-through rate)
- Google better understands your content
- Required for voice search optimization

### Schema 1: Product Schema

**Use For:** Product pages

**Copy-Paste Ready (Shopify Liquid):**
```liquid
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "{{ product.title }}",
  "description": "{{ product.description | strip_html }}",
  "image": "{{ product.featured_image | image_url: width: 800 }}",
  "sku": "{{ product.selected_or_first_available_variant.sku }}",
  "brand": {
    "@type": "Brand",
    "name": "Nexphoria"
  },
  "offers": {
    "@type": "Offer",
    "price": "{{ product.selected_or_first_available_variant.price | money_without_currency }}",
    "priceCurrency": "USD",
    "availability": "{% if product.selected_or_first_available_variant.available %}InStock{% else %}OutOfStock{% endif %}",
    "url": "{{ product.url | absolute_url }}"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "{{ product.metafields.reviews.count | default: 0 }}"
  }
}
</script>
```

**Where to Add (Shopify):**
1. Go to **Online Store → Themes → Edit Code**
2. Open `product.liquid` (or `product-template.liquid`)
3. Paste in the `<head>` or just before `</head>` tag
4. Click **Save**

**Alternative (If Using Shopify Apps):**
- Use **Hextom: Schema Markup** or **JSON-LD Schema**
- These auto-populate schema from product data

---

### Schema 2: Article Schema

**Use For:** Blog posts

**Copy-Paste Ready (Shopify Liquid):**
```liquid
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{{ article.title }}",
  "description": "{{ article.excerpt | strip_html }}",
  "image": "{{ article.image | image_url: width: 1200 }}",
  "datePublished": "{{ article.published_at | date: '%Y-%m-%dT%H:%M:%SZ' }}",
  "dateModified": "{{ article.updated_at | date: '%Y-%m-%dT%H:%M:%SZ' }}",
  "author": {
    "@type": "Person",
    "name": "{{ article.author }}"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Nexphoria",
    "logo": {
      "@type": "ImageObject",
      "url": "{{ 'logo.png' | asset_url }}"
    }
  },
  "mainEntity": {
    "@type": "Article",
    "headline": "{{ article.title }}",
    "articleBody": "{{ article.content | strip_html }}"
  }
}
</script>
```

**Where to Add (Shopify):**
1. Go to **Online Store → Themes → Edit Code**
2. Open `article.liquid` (or `article-template.liquid`)
3. Paste in the `<head>` section
4. Click **Save**

---

### Schema 3: Organization Schema

**Use For:** Homepage (site-wide identity)

**Copy-Paste Ready (Shopify Liquid):**
```liquid
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nexphoria",
  "url": "{{ shop.url }}",
  "logo": "{{ 'logo-512.png' | asset_url | absolute_url }}",
  "sameAs": [
    "https://www.instagram.com/nexphoria",
    "https://www.tiktok.com/@nexphoria",
    "https://www.facebook.com/nexphoria",
    "https://www.twitter.com/nexphoria"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "email": "support@nexphoria.com",
    "telephone": "+1-XXX-XXX-XXXX"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Science Lane",
    "addressLocality": "Portland",
    "addressRegion": "OR",
    "postalCode": "97201",
    "addressCountry": "US"
  },
  "description": "Premium peptide supplements and performance enhancers for athletes and fitness enthusiasts."
}
</script>
```

**Where to Add (Shopify):**
1. Go to **Online Store → Themes → Edit Code**
2. Open `theme.liquid` (main layout)
3. Paste in the `<head>` section
4. Update placeholder values (address, phone, social links)
5. Click **Save**

---

### Schema 4: FAQPage Schema (Optional but Recommended)

**Use For:** FAQ collection pages or blog posts with FAQs

```liquid
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are peptides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Peptides are short chains of amino acids that support muscle growth, recovery, and performance."
      }
    },
    {
      "@type": "Question",
      "name": "Are Nexphoria peptides safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all Nexphoria products are lab-tested and verified for purity and potency."
      }
    },
    {
      "@type": "Question",
      "name": "How long does shipping take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard shipping is 3-5 business days. Express shipping available for 24-48 hour delivery."
      }
    }
  ]
}
</script>
```

---

### Validate Schema

**Google Rich Results Test:**
1. Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Paste your product/blog URL
3. Click **Test URL**
4. Review "Valid" items and fix any errors
5. Repeat after publishing changes

---

## Open Graph Tags

### Why Open Graph Matters
- Controls how your content appears on social media (Facebook, Instagram, LinkedIn, Pinterest)
- Improves click-through rates from social shares
- Increases brand perception

### Global Open Graph Template

**Add to theme.liquid (in `<head>`):**

```liquid
<!-- Open Graph Tags -->
<meta property="og:type" content="website">
<meta property="og:url" content="{{ canonical_url | default: request.url }}">
<meta property="og:title" content="{% if page.title %}{{ page.title }}{% else %}{{ shop.name }}{% endif %}">
<meta property="og:description" content="{% if page.description %}{{ page.description | strip_html | strip }}{% else %}Premium peptide supplements and performance enhancers for athletes.{% endif %}">
<meta property="og:image" content="{% if page.image %}{{ page.image | image_url: width: 1200 }}{% else %}{{ 'og-image-default.png' | asset_url }}{% endif %}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{% if page.title %}{{ page.title }}{% else %}{{ shop.name }}{% endif %}">
<meta name="twitter:description" content="{% if page.description %}{{ page.description | strip_html | strip }}{% else %}Premium peptide supplements and performance enhancers for athletes.{% endif %}">
<meta name="twitter:image" content="{% if page.image %}{{ page.image | image_url: width: 1200 }}{% else %}{{ 'og-image-default.png' | asset_url }}{% endif %}">
<meta name="twitter:site" content="@nexphoria">
```

### Product-Specific Open Graph

**Add to product.liquid:**

```liquid
<meta property="og:type" content="product">
<meta property="og:url" content="{{ product.url | absolute_url }}">
<meta property="og:title" content="{{ product.title }}">
<meta property="og:description" content="{% if product.metafields.custom.short_description %}{{ product.metafields.custom.short_description }}{% else %}{{ product.description | strip_html | truncatewords: 15 }}{% endif %}">
<meta property="og:image" content="{{ product.featured_image | image_url: width: 1200 }}">
<meta property="og:price:amount" content="{{ product.selected_or_first_available_variant.price | money_without_currency }}">
<meta property="og:price:currency" content="USD">
<meta property="og:availability" content="{% if product.available %}in stock{% else %}out of stock{% endif %}">
```

### Article-Specific Open Graph

**Add to article.liquid:**

```liquid
<meta property="og:type" content="article">
<meta property="og:url" content="{{ article.url | absolute_url }}">
<meta property="og:title" content="{{ article.title }}">
<meta property="og:description" content="{{ article.excerpt | strip_html | strip }}">
<meta property="og:image" content="{{ article.image | image_url: width: 1200 }}">
<meta property="article:published_time" content="{{ article.published_at | date: '%Y-%m-%dT%H:%M:%SZ' }}">
<meta property="article:modified_time" content="{{ article.updated_at | date: '%Y-%m-%dT%H:%M:%SZ' }}">
<meta property="article:author" content="{{ article.author }}">
```

### Test Open Graph Tags

**Facebook Sharing Debugger:**
1. Go to [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Paste product/article URL
3. Review preview and fix missing/broken images

---

## Page Speed Optimization

### Why Speed Matters
- Core Web Vitals ranking factor (June 2024+ update)
- Every 1s delay = ~7% bounce rate increase
- Mobile users especially affected

### Optimization Checklist

#### 1. **Image Compression**

**Shopify Native:**
- Shopify auto-compresses upon upload
- Use **Pixel Union** or **TinyIMG** apps for batch optimization

**Recommended Image Sizes:**
```
Homepage hero:    1600x600 or 1920x1080 (max 150KB)
Product images:   800x800 (max 100KB per image)
Blog featured:    1200x630 (max 120KB)
Thumbnails:       300x300 (max 30KB)
```

**Manual Optimization (Before Upload):**
```bash
# Using ImageMagick (command line)
convert product.jpg -resize 800x800 -quality 80 product-optimized.jpg

# Using online tools:
# - tinypng.com
# - squoosh.app
# - compressor.io
```

#### 2. **Lazy Loading for Images**

**Shopify Liquid Implementation:**

```liquid
<!-- In product.liquid or collection.liquid -->
<img 
  src="{{ product.featured_image | image_url: width: 100 }}"
  srcset="{{ product.featured_image | image_url: width: 100 }} 100w,
          {{ product.featured_image | image_url: width: 200 }} 200w,
          {{ product.featured_image | image_url: width: 400 }} 400w,
          {{ product.featured_image | image_url: width: 800 }} 800w"
  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
  loading="lazy"
  alt="{{ product.featured_image.alt }}"
  width="800"
  height="800">
```

**For Background Images:**
```css
/* CSS - Load on scroll with IntersectionObserver */
.product-image {
  background-image: url('placeholder-small.jpg');
}

.product-image.loaded {
  background-image: url('full-res-image.jpg');
}
```

#### 3. **Font Loading Strategy**

**Recommended Approach (System Fonts Fast):**

```liquid
<!-- In theme.liquid <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Use font-display: swap for faster text visibility -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

**CSS for Font Loading:**
```css
/* Avoid FOIT (Flash of Invisible Text) */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

/* Custom fonts load as supplement */
h1, h2, h3 {
  font-family: 'Inter', sans-serif;
}

/* Fallback chain ensures fast rendering */
```

#### 4. **Minify CSS & JavaScript**

**Shopify Apps:**
- **TinyIMG** (includes CSS/JS minification)
- **Minify** (dedicated minification app)

**Manual (If Using Custom Code):**
```liquid
<!-- Before: Unminified -->
<style>
  .product-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>

<!-- After: Minified -->
<style>.product-card{display:flex;flex-direction:column;gap:1rem}</style>
```

#### 5. **Enable Gzip Compression**

**Shopify:** Automatic (no action needed)

**Verify:**
```bash
curl -I https://www.nexphoria.com
# Look for: Content-Encoding: gzip
```

#### 6. **Reduce Render-Blocking Resources**

**Move Non-Critical CSS to End of Body:**
```liquid
<!-- In theme.liquid, move below content -->
<link rel="stylesheet" href="{{ 'secondary.css' | asset_url }}">
```

**Defer Non-Critical JavaScript:**
```liquid
<script defer src="{{ 'secondary.js' | asset_url }}"></script>
```

#### 7. **Preload Critical Resources**

```liquid
<!-- In theme.liquid <head> -->
<link rel="preload" as="font" href="https://fonts.gstatic.com/s/inter/font.woff2" crossorigin>
<link rel="preload" as="image" href="{{ 'hero-image.jpg' | asset_url }}">
<link rel="preload" as="style" href="{{ 'critical.css' | asset_url }}">
```

#### 8. **Content Delivery Network (CDN)**

**Shopify CDN:** Built-in (Shopify uses Fastly)

**Cloudflare (Additional Layer):**
1. Set up Cloudflare (free tier available)
2. Create CNAME for `www.nexphoria.com` → Shopify DNS
3. Enable:
   - Auto Minify (CSS, HTML, JS)
   - Brotli Compression
   - Page Rules for caching

#### 9. **Enable Browser Caching**

**Shopify:** Automatic for static assets (CSS, JS, images)

**Meta Tags for Cache Control:**
```liquid
<!-- In theme.liquid -->
<meta http-equiv="cache-control" content="max-age=3600">
```

#### 10. **Google PageSpeed Insights Target**

- **Mobile:** 90+
- **Desktop:** 95+

**Test URL:**
```
https://pagespeed.web.dev/
```

**Monthly Monitoring:**
1. Test 5 key pages (homepage, product, collection, blog, checkout)
2. Track improvements in Core Web Vitals
3. Document in spreadsheet for trending

---

## Internal Linking Strategy

### Why Internal Linking Matters
- Distributes page authority throughout site
- Helps Google understand content relationships
- Improves time on site and reduces bounce rate
- **Anchors must be descriptive** (not "click here")

### Site Architecture Map

```
Homepage (nexphoria.com)
├── Products (nexphoria.com/products)
│   ├── Peptides Collection (nexphoria.com/collections/peptides)
│   ├── Pre-Workouts (nexphoria.com/collections/pre-workouts)
│   ├── Creatine (nexphoria.com/collections/creatine)
│   └── Individual Product Pages (nexphoria.com/products/*)
├── Blog (nexphoria.com/blogs/news)
│   └── Individual Articles
├── About (nexphoria.com/pages/about)
├── FAQ (nexphoria.com/pages/faq)
└── Contact (nexphoria.com/pages/contact)
```

### Linking Strategy by Page Type

#### **Homepage → Key Collection Pages**

```liquid
<!-- theme.liquid or homepage.liquid -->
<nav class="internal-links">
  <h2>Shop By Category</h2>
  <ul>
    <li>
      <a href="{{ collection.url }}" title="Browse {{ collection.title }}">
        {{ collection.title }}
      </a>
    </li>
  </ul>
</nav>
```

#### **Collection Pages → Product Pages**

**Already automatic in Shopify**, but ensure:
```liquid
<!-- In collection template -->
<a href="{{ product.url }}" title="Buy {{ product.title }}">
  {{ product.title }}
</a>
```

#### **Product Pages → Related Products**

```liquid
<!-- In product.liquid -->
{% if product.collections.size > 0 %}
  <aside class="related-products">
    <h3>Related Products</h3>
    {% for related_product in product.collections.first.products limit: 4 %}
      {% unless related_product.id == product.id %}
        <div class="product-card">
          <a href="{{ related_product.url }}">
            <img src="{{ related_product.featured_image | image_url: width: 300 }}" alt="{{ related_product.title }}">
            <p>{{ related_product.title }}</p>
          </a>
        </div>
      {% endunless %}
    {% endfor %}
  </aside>
{% endif %}
```

#### **Blog Posts → Relevant Products**

```liquid
<!-- In article.liquid -->
{% if article.metafields.custom.related_product %}
  <div class="article-product-link">
    <h4>Featured Product</h4>
    <a href="/products/{{ article.metafields.custom.related_product }}">
      View {{ article.metafields.custom.related_product | capitalize }} →
    </a>
  </div>
{% endif %}
```

#### **Blog → Blog Category Pages**

```liquid
<!-- In blog navigation -->
<a href="/blogs/news?tag=peptides">
  Peptide Research & Updates
</a>
```

#### **Product Description → Blog References**

```liquid
<!-- In product description (WYSIWYG editor) -->
<p>
  Learn more about peptide science in our 
  <a href="/blogs/news/how-peptides-work">
    beginner's guide to peptides
  </a>.
</p>
```

### Best Practices

1. **Use descriptive anchor text:**
   - ✅ "View our creatine supplements"
   - ❌ "Click here"

2. **Link contextually:**
   - Link from blog posts to relevant products
   - Link product pages to related blog content
   - Link collections back to homepage

3. **Limit internal links per page:**
   - Homepage: 10-15 main links
   - Product pages: 5-8 links
   - Blog posts: 3-5 links
   - Avoid over-linking

4. **Use keyword-rich anchor text (but natural):**
   - ✅ "best pre-workout supplements"
   - ❌ "best pre-workout supplements that we sell"

---

## Canonical URLs

### Why Canonical URLs Matter
- **Prevent duplicate content issues**
- Tell Google which version to index
- Consolidate authority when multiple URLs exist

### Canonical URL Implementation

#### **In Shopify (Automatic)**

Shopify automatically adds canonical tags to all pages:

```liquid
<link rel="canonical" href="{{ canonical_url }}">
```

**Verify in Page Source:**
1. Open any product/collection page
2. Right-click → **View Page Source**
3. Search for `<link rel="canonical"`
4. Should show: `https://www.nexphoria.com/products/[product-handle]`

#### **Manual Canonical Setup (If Needed)**

```liquid
<!-- In theme.liquid, after default canonical -->
{% if page.url contains '?sort_by=' or page.url contains '?filter=' %}
  <!-- Remove query parameters for pagination -->
  <link rel="canonical" href="{{ page.url | split: '?' | first }}">
{% endif %}
```

#### **Common Duplicate Content Scenarios & Fixes**

**Scenario 1: www vs non-www**
- Set preferred domain in GSC
- Shopify default: `www` version preferred
- All non-www requests 301 redirect to www

**Scenario 2: Protocol (http vs https)**
- Shopify forces HTTPS
- No action needed

**Scenario 3: Query Parameters (sorting, filtering)**
- Shopify canonical already strips params
- Products with sort: `?sort_by=price-ascending`
- Canonical: `/products/[product]` (no params)

**Scenario 4: Cross-Domain Duplicates (Cloudflare Pages → Shopify)**
- Handled in [301 Redirect Plan section](#301-redirect-plan)

---

## 301 Redirect Plan

### Current Situation
- **Old Domain:** Cloudflare Pages (nexphoria.pages.dev or old domain)
- **New Domain:** Shopify (www.nexphoria.com)
- **Goal:** Preserve SEO authority, redirect all old URLs → new URLs

### Step 1: Create Redirect Mapping

**Map old URLs to new Shopify URLs:**

| Old URL (Cloudflare Pages) | New URL (Shopify) | Type |
|---|---|---|
| nexphoria.pages.dev/ | nexphoria.com/ | Homepage |
| nexphoria.pages.dev/products | nexphoria.com/collections/all | Product collection |
| nexphoria.pages.dev/products/creatine | nexphoria.com/products/creatine-monohydrate | Product |
| nexphoria.pages.dev/about | nexphoria.com/pages/about | About page |
| nexphoria.pages.dev/blog | nexphoria.com/blogs/news | Blog index |
| nexphoria.pages.dev/blog/peptides-guide | nexphoria.com/blogs/news/peptides-guide | Blog post |

### Step 2: Implement 301 Redirects at Cloudflare Pages

**Option A: Cloudflare _redirects File** (Recommended)

1. In your Cloudflare Pages git repo, create `public/_redirects`:

```
# Cloudflare Pages _redirects file
# Format: [old-path] [new-path] [status-code]

/                                    https://nexphoria.com/           301
/products                            https://nexphoria.com/collections/all  301
/products/creatine                   https://nexphoria.com/products/creatine-monohydrate  301
/products/whey-protein               https://nexphoria.com/products/whey-protein-isolate   301
/about                               https://nexphoria.com/pages/about       301
/contact                             https://nexphoria.com/pages/contact     301
/blog                                https://nexphoria.com/blogs/news        301
/blog/peptides-guide                 https://nexphoria.com/blogs/news/peptides-guide  301
/blog/pre-workout-science            https://nexphoria.com/blogs/news/pre-workout-science  301

# Catch-all for any unmapped old URLs
/*                                   https://nexphoria.com/           301
```

2. Push to git repo
3. Cloudflare Pages auto-deploys
4. Test: `curl -I https://nexphoria.pages.dev/about` → Should show 301

**Option B: Cloudflare Workers (If Not Using Pages Build)**

```javascript
// Cloudflare Worker script
const redirects = {
  '/': 'https://nexphoria.com/',
  '/products': 'https://nexphoria.com/collections/all',
  '/about': 'https://nexphoria.com/pages/about',
  '/blog': 'https://nexphoria.com/blogs/news',
};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (redirects[path]) {
      return Response.redirect(redirects[path], 301);
    }

    // Catch-all redirect
    if (path !== '/' && !redirects[path]) {
      return Response.redirect('https://nexphoria.com/', 301);
    }

    return fetch(request);
  }
};
```

### Step 3: Update DNS to Point to New Domain

1. **In Cloudflare DNS** (if managing old domain):
   - If keeping old domain, add CNAME redirect to Shopify
   - If retiring old domain, add CNAME to Shopify's DNS

2. **Shopify Setup:**
   - Go to **Settings → Domains**
   - Primary: `nexphoria.com`
   - Secondary: `old-domain.com` (if keeping)
   - Both should 301 to primary

### Step 4: Verify Redirects

**Test in terminal:**
```bash
# Should return 301 with Location header
curl -I https://nexphoria.pages.dev/
# HTTP/1.1 301 Moved Permanently
# Location: https://nexphoria.com/

curl -I https://nexphoria.pages.dev/about
# HTTP/1.1 301 Moved Permanently
# Location: https://nexphoria.com/pages/about
```

**Test in Browser:**
1. Open `https://nexphoria.pages.dev/about`
2. Should automatically redirect to `https://nexphoria.com/pages/about`
3. Watch browser URL bar for redirect

### Step 5: Monitor Redirect Health

**In Google Search Console:**
1. Add old domain as property (if applicable)
2. Go to **Coverage** report
3. Track:
   - "Valid" URLs (now pointing to new domain)
   - "Excluded" (if any redirects fail)
4. After 30 days, should show 0 crawl errors

**Timeline:**
- 🟢 Immediate: 301 redirects active
- 🟡 1-7 days: Google notices redirects
- 🟡 7-30 days: Authority transfers to new domain
- 🟢 30+ days: Old URLs stop appearing in SERPs

### Step 6: Gradual Retirement of Old Domain

**Week 1-4:**
- 301 redirects active
- Old domain still resolves
- Monitor redirects in Analytics

**Week 5+:**
- Check GSC for remaining old domain URLs
- If minimal traffic, can keep indefinitely
- Or remove DNS after 90 days if confident

---

## Monitoring & Maintenance

### Monthly SEO Audit Checklist

- [ ] Check GSC Coverage report for new errors
- [ ] Test Core Web Vitals with PageSpeed Insights
- [ ] Verify meta titles/descriptions render correctly in SERPs
- [ ] Check for broken internal links (tool: Screaming Frog)
- [ ] Monitor keyword rankings (tools: Semrush, Ahrefs trial)
- [ ] Review blog indexing (should see new articles in 24-48h)
- [ ] Check for search console security issues

### Tools & Resources

**Essential (Free):**
- Google Search Console: https://search.google.com/search-console
- PageSpeed Insights: https://pagespeed.web.dev/
- Google Rich Results Test: https://search.google.com/test/rich-results
- Google Mobile-Friendly Test: https://search.google.com/mobile-friendly

**Recommended (Paid Tiers Available):**
- Semrush: https://semrush.com (keyword tracking, audits)
- Ahrefs: https://ahrefs.com (backlink analysis)
- Screaming Frog: https://www.screamingfrog.co.uk/seo-spider/ (site audits)

**Shopify Apps:**
- Hextom: Schema Markup
- Minify (CSS/JS optimization)
- TinyIMG (Image compression)

---

## Implementation Checklist

**Priority 1 (Do First - 1 Day):**
- [ ] Add Google Search Console property
- [ ] Verify domain ownership (DNS method recommended)
- [ ] Submit sitemap
- [ ] Add Organization schema to theme.liquid
- [ ] Set preferred domain in GSC

**Priority 2 (Within 1 Week):**
- [ ] Add robots.txt (via app or file upload)
- [ ] Add meta titles/descriptions to homepage
- [ ] Add Product schema to all product pages
- [ ] Add Article schema to blog posts
- [ ] Add Open Graph tags to theme.liquid

**Priority 3 (Within 2 Weeks):**
- [ ] Implement image optimization strategy
- [ ] Add lazy loading to collection/product pages
- [ ] Set up 301 redirects from old domain
- [ ] Audit internal linking structure
- [ ] Test Core Web Vitals and optimize slow pages

**Priority 4 (Ongoing - Monthly):**
- [ ] Monitor GSC Coverage & Search Analytics
- [ ] Check PageSpeed Insights scores
- [ ] Review new keywords in Search Analytics
- [ ] Update blog with content targeting new keywords
- [ ] Monitor keyword rankings

---

## Quick Reference: Copy-Paste Blocks

### Add to theme.liquid `<head>`:

```liquid
<!-- Google Search Console Verification -->
<meta name="google-site-verification" content="VERIFICATION_CODE_HERE">

<!-- Organization Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nexphoria",
  "url": "{{ shop.url }}",
  "logo": "{{ 'logo-512.png' | asset_url | absolute_url }}",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "email": "support@nexphoria.com"
  }
}
</script>

<!-- Open Graph & Twitter Tags -->
<meta property="og:type" content="website">
<meta property="og:url" content="{{ canonical_url }}">
<meta property="og:title" content="{% if page.title %}{{ page.title }}{% else %}{{ shop.name }}{% endif %}">
<meta property="og:description" content="Premium peptide supplements for athletes and fitness enthusiasts.">
<meta property="og:image" content="{{ 'og-image-default.png' | asset_url }}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@nexphoria">
```

### Add to product.liquid:

```liquid
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "{{ product.title }}",
  "image": "{{ product.featured_image | image_url: width: 800 }}",
  "offers": {
    "@type": "Offer",
    "price": "{{ product.selected_or_first_available_variant.price | money_without_currency }}",
    "priceCurrency": "USD",
    "availability": "{% if product.available %}InStock{% else %}OutOfStock{% endif %}"
  }
}
</script>
```

---

## Document Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | June 2026 | Initial comprehensive guide for Nexphoria |

**Document Owner:** Nexphoria SEO Team  
**Last Updated:** June 4, 2026  
**Next Review:** August 4, 2026

---

## Need Help?

For questions on implementing this checklist:
1. Reference the specific section above
2. Check Shopify Help Center: https://help.shopify.com
3. Test code blocks at: https://search.google.com/test/rich-results
4. Monitor progress in Google Search Console
