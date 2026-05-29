import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import COADocument from "./COADocument";

const COA_SLUGS = new Set([
  "bpc-157",
  "semaglutide",
  "tirzepatide",
  "tb-500",
  "ghk-cu",
  "nad-plus",
]);

export function generateStaticParams() {
  return Array.from(COA_SLUGS).map((slug) => ({ slug }));
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
    title: `Certificate of Analysis — ${product.name} | Nexphoria`,
    description: `Sample COA for ${product.name} (CAS ${product.casNumber}). ${product.purity} purity by HPLC. Research-grade quality documentation.`,
    robots: { index: false },
  };
}

export default async function COAPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!COA_SLUGS.has(slug)) notFound();

  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return <COADocument product={product} />;
}
