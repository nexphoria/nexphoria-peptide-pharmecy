import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  launchProducts,
  getLaunchProduct,
  getRelatedLaunchProducts,
} from "@/lib/products-launch";
import ProductDetailLaunch from "./ProductDetailLaunch";

export function generateStaticParams() {
  return launchProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getLaunchProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} ${product.dosage} — ${product.category} | Nexphoria`,
    description: `${product.tagline} CAS ${product.casNumber}. ${product.purity} purity by HPLC. Research-grade peptides for qualified laboratories.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getLaunchProduct(slug);
  if (!product) notFound();

  const related = getRelatedLaunchProducts(product.relatedSlugs);

  return <ProductDetailLaunch product={product} related={related} />;
}
