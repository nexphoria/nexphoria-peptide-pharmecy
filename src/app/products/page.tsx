import type { Metadata } from "next";
import ProductsClient from "./client";

export const metadata: Metadata = {
  title: "Peptide Catalog — Research Compounds",
  description:
    "Browse Nexphoria's research compound catalog. cGMP-manufactured peptides with full Certificate of Analysis. HPLC purity ≥99%. Research use only.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}
