"use client";

import { useState } from "react";
import { ShoppingCart, Shield, FlaskConical, Truck } from "lucide-react";
import { useCart } from "@/lib/cart";
import { Product, ProductDosage } from "@/lib/products";

interface BuyBoxProps {
  product: Product;
  className?: string;
  selectedFormat?: 'vial' | 'pen';
  onFormatChange?: (format: 'vial' | 'pen') => void;
  onDosageChange?: (dosage: ProductDosage | undefined) => void;
}

type VolumeOption = { qty: number; label: string; discount: number };

const VOLUME_OPTIONS: VolumeOption[] = [
  { qty: 1, label: "Buy 1", discount: 0 },
  { qty: 3, label: "Research Kit", discount: 0.05 },
  { qty: 6, label: "Lab Protocol", discount: 0.1 },
];

const CYCLE_OPTIONS = [
  { months: 1 as const, label: "One-Time" },
  { months: 3 as const, label: "3-Month Cycle" },
  { months: 6 as const, label: "6-Month Cycle" },
];

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
  const [selectedVolume, setSelectedVolume] = useState(VOLUME_OPTIONS[0]);
  const [selectedCycle, setSelectedCycle] = useState(CYCLE_OPTIONS[0]);

  const handleDosageChange = (d: ProductDosage | undefined) => {
    setSelectedDosage(d);
    onDosageChange?.(d);
  };

  const getBasePrice = () => {
    if (selectedFormat === 'pen' && product.penAvailable) {
      return product.penPrice;
    }
    return selectedDosage?.price || product.price;
  };

  const basePrice = getBasePrice();
  const unitPrice = selectedVolume.discount > 0
    ? +(basePrice * (1 - selectedVolume.discount)).toFixed(2)
    : basePrice;
  const totalPrice = +(unitPrice * selectedVolume.qty).toFixed(2);

  const handleAddToCart = () => {
    for (let i = 0; i < selectedVolume.qty; i++) {
      addItem(product, selectedFormat, selectedDosage, selectedCycle.months);
    }
    openDrawer();
  };

  return (
    <div className={className}>
      {/* Price */}
      <div className="mb-5">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-semibold">${basePrice}</span>
          <span className="text-sm text-[#888]">per vial</span>
        </div>
        {selectedVolume.discount > 0 && (
          <p className="text-sm text-[#A4B08A] font-medium mt-1">
            Save {Math.round(selectedVolume.discount * 100)}% &mdash; ${unitPrice}/vial
          </p>
        )}
      </div>

      {/* Volume Pricing Pills */}
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#888] mb-2">Volume</p>
        <div className="grid grid-cols-3 gap-2">
          {VOLUME_OPTIONS.map((opt) => {
            const active = selectedVolume.qty === opt.qty;
            return (
              <button
                key={opt.qty}
                onClick={() => setSelectedVolume(opt)}
                className="py-2.5 px-2 sm:px-3 rounded-lg border text-center transition-all duration-150"
                style={{
                  borderColor: active ? '#A4B08A' : '#ECEAE4',
                  backgroundColor: active ? '#A4B08A' : 'transparent',
                  color: active ? '#000' : '#555',
                }}
              >
                <div className="text-sm font-semibold">{opt.label}</div>
                <div className="text-[11px] mt-0.5" style={{ opacity: 0.7 }}>
                  {opt.qty} vial{opt.qty > 1 ? 's' : ''}
                  {opt.discount > 0 && ` · ${Math.round(opt.discount * 100)}% off`}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Subscription Cycle Toggle */}
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#888] mb-2">Subscription</p>
        <div className="flex gap-2">
          {CYCLE_OPTIONS.map((opt) => {
            const active = selectedCycle.months === opt.months;
            return (
              <button
                key={opt.months}
                onClick={() => setSelectedCycle(opt)}
                className="flex-1 py-2 px-2 rounded-lg border text-center text-sm transition-all duration-150"
                style={{
                  borderColor: active ? '#A4B08A' : '#ECEAE4',
                  backgroundColor: active ? '#A4B08A0D' : 'transparent',
                  color: active ? '#000' : '#888',
                  fontWeight: active ? 600 : 400,
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
        {selectedCycle.months > 1 && (
          <p className="text-xs text-[#888] mt-2">
            Billed ${totalPrice.toFixed(0)}/mo for {selectedCycle.months} months. Cancel anytime.
          </p>
        )}
      </div>

      {/* Format (only show if pen available) */}
      {product.penAvailable && (
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#888] mb-2">Format</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setSelectedFormat('vial')}
              className="py-2 px-3 rounded-lg border text-sm text-center transition-all"
              style={{
                borderColor: selectedFormat === 'vial' ? '#A4B08A' : '#ECEAE4',
                backgroundColor: selectedFormat === 'vial' ? '#A4B08A0D' : 'transparent',
                fontWeight: selectedFormat === 'vial' ? 600 : 400,
              }}
            >
              Vial
            </button>
            <button
              onClick={() => setSelectedFormat('pen')}
              className="py-2 px-3 rounded-lg border text-sm text-center transition-all"
              style={{
                borderColor: selectedFormat === 'pen' ? '#A4B08A' : '#ECEAE4',
                backgroundColor: selectedFormat === 'pen' ? '#A4B08A0D' : 'transparent',
                fontWeight: selectedFormat === 'pen' ? 600 : 400,
              }}
            >
              Pen (Rx)
            </button>
          </div>
        </div>
      )}

      {/* Dosage Selection */}
      {selectedFormat === 'vial' && product.dosages && product.dosages.length > 1 && (
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#888] mb-2">Dosage</p>
          <div className="flex gap-2">
            {product.dosages.map((dosage) => {
              const active = selectedDosage?.size === dosage.size;
              return (
                <button
                  key={dosage.size}
                  onClick={() => handleDosageChange(dosage)}
                  className="flex-1 py-2 px-3 rounded-lg border text-sm text-center transition-all"
                  style={{
                    borderColor: active ? '#A4B08A' : '#ECEAE4',
                    backgroundColor: active ? '#A4B08A0D' : 'transparent',
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  {dosage.size} &middot; ${dosage.price}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Total & Add to Order */}
      <div className="p-4 rounded-lg mb-4" style={{ backgroundColor: "#F7F5F0" }}>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#555]">
            {selectedCycle.months === 1 ? 'Total' : 'Monthly total'}
          </span>
          <span className="text-2xl font-semibold">${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full flex items-center justify-center gap-2 font-semibold uppercase tracking-wide transition-all rounded-lg hover:opacity-90"
        style={{
          height: "52px",
          fontSize: "14px",
          backgroundColor: "#A4B08A",
          color: "#000",
        }}
      >
        <ShoppingCart className="w-4 h-4" />
        Add to Order
      </button>

      {/* Trust Badges */}
      <div className="mt-4 flex items-center justify-center gap-4 text-xs text-[#888]">
        <div className="flex items-center gap-1.5">
          <FlaskConical className="w-3.5 h-3.5 text-[#A4B08A]" />
          <span>{product.purity}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-[#A4B08A]" />
          <span>HPLC Tested</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Truck className="w-3.5 h-3.5 text-[#A4B08A]" />
          <span>Cold Shipped</span>
        </div>
      </div>
    </div>
  );
}
