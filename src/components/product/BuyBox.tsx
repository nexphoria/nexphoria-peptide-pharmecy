"use client";

import { useState } from "react";
import { ShoppingCart, Shield, FlaskConical, Truck, RefreshCw } from "lucide-react";
import { useCart } from "@/lib/cart";
import { Product, ProductDosage } from "@/lib/products";

interface BuyBoxProps {
  product: Product;
  className?: string;
  selectedFormat?: 'vial' | 'pen';
  onFormatChange?: (format: 'vial' | 'pen') => void;
  onDosageChange?: (dosage: ProductDosage | undefined) => void;
}

type PurchaseMode = 'one-time' | 'subscribe';

const VOLUME_OPTIONS = [
  { qty: 1, label: "1 Vial", discount: 0 },
  { qty: 3, label: "Research Kit", discount: 0.05 },
  { qty: 6, label: "Lab Protocol", discount: 0.10 },
] as const;

const SUBSCRIBE_DISCOUNT = 0.05;

export default function BuyBox({
  product,
  className = "",
  selectedFormat: externalFormat,
  onFormatChange,
  onDosageChange,
}: BuyBoxProps) {
  const { addItem, openDrawer } = useCart();
  const [internalFormat, setInternalFormat] = useState<'vial' | 'pen'>('vial');
  const selectedFormat = externalFormat !== undefined ? externalFormat : internalFormat;
  const setSelectedFormat = onFormatChange || setInternalFormat;

  const [selectedDosage, setSelectedDosage] = useState<ProductDosage | undefined>(
    product.dosages?.[0] || undefined
  );
  const [purchaseMode, setPurchaseMode] = useState<PurchaseMode>('one-time');
  const [selectedVolume, setSelectedVolume] = useState<(typeof VOLUME_OPTIONS)[number]>(VOLUME_OPTIONS[0]);

  const handleDosageChange = (d: ProductDosage | undefined) => {
    setSelectedDosage(d);
    onDosageChange?.(d);
  };

  const getBasePrice = () => {
    if (selectedFormat === 'pen' && product.penAvailable) return product.penPrice;
    return selectedDosage?.price || product.price;
  };

  const basePrice = getBasePrice();

  const volumeDiscount = selectedVolume.discount;
  const effectiveDiscount = purchaseMode === 'subscribe'
    ? Math.min(volumeDiscount + SUBSCRIBE_DISCOUNT, 0.20)
    : volumeDiscount;

  const unitPrice = effectiveDiscount > 0
    ? +(basePrice * (1 - effectiveDiscount)).toFixed(2)
    : basePrice;

  const qty = selectedVolume.qty;
  const totalPrice = +(unitPrice * qty).toFixed(2);
  const subscribeSavings = +(basePrice * SUBSCRIBE_DISCOUNT * qty).toFixed(2);

  const handleAddToOrder = () => {
    const subscriptionMonths = purchaseMode === 'subscribe' ? 3 : 1;
    for (let i = 0; i < selectedVolume.qty; i++) {
      addItem(product, selectedFormat, selectedDosage, subscriptionMonths, effectiveDiscount);
    }
    openDrawer();
  };

  return (
    <div className={className}>
      {/* Price — with thin rules above/below (Niance style) */}
      <div style={{ borderTop: "1px solid #E5E5E5", paddingTop: "1.25rem", marginBottom: "1.25rem" }}>
        <div className="flex items-baseline gap-2">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.25rem",
              fontWeight: 300,
              color: "#8E6C2F",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            ${unitPrice.toFixed(2)}
          </span>
          <span className="text-sm" style={{ color: "#666666" }}>
            {purchaseMode === 'subscribe'
              ? 'per vial / month'
              : qty > 1 ? `per vial · ${qty} vials` : 'per vial'}
          </span>
        </div>
      </div>
      <div style={{ borderBottom: "1px solid #E5E5E5", marginBottom: "1.5rem" }} />

      {/* Purchase Mode Toggle */}
      <div className="mb-5">
        <p
          className="text-[10px] uppercase mb-3"
          style={{ letterSpacing: "0.12em", color: "#666666", fontWeight: 500 }}
        >
          Purchase Type
        </p>
        <div className="flex gap-6">
          {(['one-time', 'subscribe'] as const).map((mode) => {
            const active = purchaseMode === mode;
            return (
              <button
                key={mode}
                onClick={() => setPurchaseMode(mode)}
                className="text-[11px] uppercase transition-all"
                style={{
                  letterSpacing: "0.14em",
                  color: active ? "#1A1A1A" : "#888",
                  background: "none",
                  border: "none",
                  borderBottom: active ? "1px solid #C4A265" : "1px solid transparent",
                  fontWeight: active ? 500 : 400,
                  cursor: "pointer",
                  padding: "0 0 3px 0",
                }}
                aria-pressed={active}
              >
                {mode === 'one-time' ? 'One-time' : 'Subscribe'}
              </button>
            );
          })}
        </div>
        {purchaseMode === 'subscribe' && (
          <p className="text-[11px] mt-2 leading-relaxed" style={{ color: "#666666" }}>
            3-month research cycle · cancel anytime · saves ${subscribeSavings.toFixed(2)} this order
          </p>
        )}
      </div>

      {/* Dosage Selection */}
      {selectedFormat === 'vial' && product.dosages && product.dosages.length > 1 && (
        <div className="mb-5">
          <p
            className="text-[10px] uppercase mb-2.5"
            style={{ letterSpacing: "0.12em", color: "#666666", fontWeight: 500 }}
          >
            Size
          </p>
          <div className="flex flex-wrap gap-2">
            {product.dosages.map((dosage) => {
              const active = selectedDosage?.size === dosage.size;
              return (
                <button
                  key={dosage.size}
                  onClick={() => handleDosageChange(dosage)}
                  className="flex-1 py-3 px-3 text-sm text-center transition-all duration-300"
                  style={{
                    minHeight: "44px",
                    borderRadius: "999px",
                    border: active ? "1px solid #C4A265" : "1px solid #E5E5E5",
                    backgroundColor: "transparent",
                    fontWeight: active ? 500 : 400,
                    color: active ? "#1A1A1A" : "#666",
                  }}
                  aria-pressed={active}
                >
                  {dosage.size}{" "}
                  <span style={{ color: "#666666", fontWeight: 400 }}>· ${dosage.price}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Format Toggle (only when pen available) */}
      {product.penAvailable && (
        <div className="mb-5">
          <p
            className="text-[10px] uppercase mb-3"
            style={{ letterSpacing: "0.12em", color: "#666666", fontWeight: 500 }}
          >
            Format
          </p>
          <div className="flex gap-6">
            {(['vial', 'pen'] as const).map((fmt) => {
              const active = selectedFormat === fmt;
              return (
                <button
                  key={fmt}
                  onClick={() => setSelectedFormat(fmt)}
                  className="text-[11px] uppercase transition-all"
                  style={{
                    letterSpacing: "0.14em",
                    color: active ? "#1A1A1A" : "#888",
                    background: "none",
                    border: "none",
                    borderBottom: active ? "1px solid #C4A265" : "1px solid transparent",
                    fontWeight: active ? 500 : 400,
                    cursor: "pointer",
                    padding: "0 0 3px 0",
                  }}
                  aria-pressed={active}
                >
                  {fmt === 'vial' ? 'Vial' : `Pen · $${product.penPrice}`}
                </button>
              );
            })}
          </div>
        </div>
      )}


      {/* Volume options — wine-list columns */}
      <div className="mb-5">
        <p
          className="text-[10px] uppercase mb-3"
          style={{ letterSpacing: "0.12em", color: "#666666", fontWeight: 500 }}
        >
          Quantity
        </p>
        <div className="flex" style={{ borderTop: "1px solid #C4A265" }}>
          {VOLUME_OPTIONS.map((opt, i) => {
            const active = selectedVolume.qty === opt.qty;
            const optUnitPrice = opt.discount > 0
              ? +(basePrice * (1 - opt.discount)).toFixed(2)
              : basePrice;
            return [
              i > 0 ? (
                <div
                  key={`divider-${opt.qty}`}
                  style={{ width: "1px", flexShrink: 0, backgroundColor: "#8E6C2F", margin: "4px 0" }}
                />
              ) : null,
              <button
                key={opt.qty}
                onClick={() => setSelectedVolume(opt)}
                className="flex-1 py-4 px-1 text-center transition-all min-w-0"
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: active ? "1px solid #C4A265" : "1px solid transparent",
                  cursor: "pointer",
                }}
                aria-pressed={active}
              >
                <div
                  className="text-xs sm:text-sm leading-tight"
                  style={{ color: active ? "#1A1A1A" : "#666", fontWeight: active ? 500 : 400 }}
                >
                  {opt.label}
                </div>
                <div
                  className="text-[10px] mt-1.5 uppercase"
                  style={{
                    letterSpacing: "0.09em",
                    color: active ? "#C4A265" : "#AAA",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  ${optUnitPrice.toFixed(2)} / vial
                </div>
              </button>,
            ];
          })}
        </div>
      </div>

      {/* Total */}
      <div
        className="py-4 mb-4"
        style={{ borderTop: "1px solid #C4A265", borderBottom: "1px solid #E5E5E5" }}
      >
        <div className="flex items-baseline justify-between">
          <span
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#666666",
              fontWeight: 500,
            }}
          >
            {qty > 1 ? `${qty} vials` : 'Total'}
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              fontWeight: 300,
              color: "#1A1A1A",
              letterSpacing: "-0.02em",
            }}
          >
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Add to Order button */}
      <button
        onClick={handleAddToOrder}
        className="w-full flex items-center justify-center gap-2 font-medium uppercase transition-all duration-300 active:scale-[0.98]"
        style={{
          height: "52px",
          fontSize: "11px",
          letterSpacing: "0.15em",
          backgroundColor: "#1A1A1A",
          color: "#F9F9F9",
          borderRadius: "999px",
          border: "1px solid #1A1A1A",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#333";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1A1A1A";
        }}
        aria-label={`Add ${product.name} to order`}
      >
        <ShoppingCart className="w-4 h-4" aria-hidden="true" />
        Add to Order
      </button>

      {/* Compact trust strip */}
      <div className="mt-4 flex items-center justify-center gap-4 text-[11px]" style={{ color: "#666666" }}>
        <div className="flex items-center gap-1.5">
          <FlaskConical className="w-3.5 h-3.5" style={{ color: "#8E6C2F" }} aria-hidden="true" />
          <span>{product.purity}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5" style={{ color: "#8E6C2F" }} aria-hidden="true" />
          <span>HPLC Verified</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Truck className="w-3.5 h-3.5" style={{ color: "#8E6C2F" }} aria-hidden="true" />
          <span>Cold-Chain</span>
        </div>
      </div>
    </div>
  );
}
