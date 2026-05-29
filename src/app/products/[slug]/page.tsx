import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ProductDetailLaunch from "./ProductDetailLaunch";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} ${product.size} — ${product.category}`,
    description: `${product.tagline} CAS ${product.casNumber}. ${product.purity} purity by HPLC. Research-grade peptides for qualified laboratories.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = product.relatedSlugs
    .map((s) => products.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return <ProductDetailLaunch product={product} related={related} />;
}
