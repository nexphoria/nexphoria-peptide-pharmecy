import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProduct, getRelatedProducts } from "@/lib/products";
import ProductDetail from "./ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} ${product.size} — ${product.category}`,
    description: `${product.tagline} CAS ${product.casNumber}. ${product.purity} purity by HPLC. cGMP-manufactured research compound.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.relatedSlugs);

  return <ProductDetail product={product} related={related} />;
}
