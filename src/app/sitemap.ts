import { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { articles } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexphoria.com";

  const productUrls: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/clinical`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...productUrls,
    {
      url: `${baseUrl}/protocols`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compounds`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/build-your-stack`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/science`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/manufacturing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.70,
    },
    {
      url: `${baseUrl}/tools/reconstitution-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/tools/half-life-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/tools/bac-water-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/tools/unit-converter`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/guides/storage`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/guides/reconstitution`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/account/orders`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    },
    ...articles.map((a) => ({
      url: `${baseUrl}/blog/${a.slug}`,
      lastModified: new Date(a.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // COA pages for top 6 products
    ...(["bpc-157", "semaglutide", "tirzepatide", "tb-500", "ghk-cu", "nad-plus"].map((slug) => ({
      url: `${baseUrl}/coa/${slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    }))),
    {
      url: `${baseUrl}/legal/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/legal/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/shipping-returns`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
