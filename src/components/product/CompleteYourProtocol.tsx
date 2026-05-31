"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Layers, ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart";
import { products, Product } from "@/lib/products";
import { PROTOCOL_PAIRINGS } from "@/lib/protocol-pairings";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";

interface Props {
  currentSlug: string;
}

export default function CompleteYourProtocol({ currentSlug }: Props) {
  const { addItem, openDrawer } = useCart();

  const pairing = PROTOCOL_PAIRINGS[currentSlug];
  if (!pairing) return null;

  const companion = products.find((p) => p.slug === pairing.slug);
  const current = products.find((p) => p.slug === currentSlug);
  if (!companion || !current) return null;

  const hasCompanionPhoto = hasProductPhoto(companion.slug);
  const hasCurrentPhoto = hasProductPhoto(current.slug);

  const handleAddBoth = () => {
    addItem(current, "vial");
    addItem(companion, "vial");
    openDrawer();
  };

  const handleAddCompanion = () => {
    addItem(companion, "vial");
    openDrawer();
  };

  const combinedPrice = current.price + companion.price;

  return (
    <section className="py-16 border-t" style={{ borderColor: "#ECEAE4" }}>
      <div className="container-nex">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4 text-[#B8A44C]" />
            <p className="text-[11px] uppercase tracking-wider text-[#B8A44C] font-semibold">
              Complete Your Protocol
            </p>
          </div>
          <h2 className="text-2xl font-medium tracking-tight mb-2">
            {pairing.label}
          </h2>
          <p className="text-sm text-[#777] mb-8 max-w-xl leading-relaxed">
            {pairing.rationale}
          </p>

          {/* Stack visual */}
          <div className="bg-white rounded-2xl card-shadow overflow-hidden max-w-2xl">
            {/* Products row */}
            <div className="p-6">
              <div className="flex items-center gap-4">
                {/* Current product */}
                <ProductMini product={current} hasPhoto={hasCurrentPhoto} isCurrent />

                {/* Plus connector */}
                <div className="flex-shrink-0 flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-full bg-[#B8A44C]/15 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#B8A44C]">+</span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-[#CCCCC0]" />
                  <span className="text-[9px] uppercase tracking-widest text-[#999]">stack</span>
                </div>

                {/* Companion product */}
                <ProductMini product={companion} hasPhoto={hasCompanionPhoto} />

                {/* Pricing */}
                <div className="ml-auto text-right flex-shrink-0 hidden sm:block">
                  <div className="text-2xl font-semibold tracking-tight">
                    ${combinedPrice}
                  </div>
                </div>
              </div>

              {/* Mobile pricing */}
              <div className="sm:hidden mt-4 flex items-center justify-between">
                <div>
                  <div className="text-xl font-semibold">${combinedPrice}</div>
                </div>
              </div>
            </div>

            {/* Action row */}
            <div className="border-t px-6 py-4 flex flex-col sm:flex-row gap-3" style={{ borderColor: "#ECEAE4", backgroundColor: "#FAFAF5" }}>
              <button
                onClick={handleAddBoth}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-sm text-white transition-all hover:opacity-90 active:scale-[0.98]"
                style={{ backgroundColor: "#B8A44C" }}
              >
                <ShoppingCart className="w-4 h-4" />
                Add Both to Order
              </button>
              <Link
                href={`/products/${companion.slug}`}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-sm border transition-all hover:bg-white"
                style={{ borderColor: "#DDDDD5", color: "#444" }}
              >
                View {companion.name}
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Add companion only — subtle link */}
          <button
            onClick={handleAddCompanion}
            className="mt-4 text-xs text-[#999] hover:text-[#555] transition-colors underline underline-offset-2"
          >
            Just add {companion.name} to my order
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function ProductMini({
  product,
  hasPhoto,
  isCurrent,
}: {
  product: Product;
  hasPhoto: boolean;
  isCurrent?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 min-w-0">
      {/* Thumbnail */}
      <div
        className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center"
        style={{ backgroundColor: "#F0EDE7" }}
      >
        {hasPhoto ? (
          <img
            src={getProductImagePath(product.slug)}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="text-[10px] font-semibold text-[#B8A44C] text-center px-1 leading-tight">
            {product.name}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="min-w-0">
        {isCurrent && (
          <span className="text-[9px] uppercase tracking-widest text-[#B8A44C] font-semibold block mb-0.5">
            Current
          </span>
        )}
        <p className="text-xs text-[#666666] mb-0.5">{product.category}</p>
        <p className="text-sm font-medium leading-tight truncate max-w-[120px]">
          {product.name}
        </p>
        <p className="text-xs text-[#666666]">{product.size}</p>
        <p className="text-sm font-semibold mt-0.5">${product.price}</p>
      </div>
    </div>
  );
}
