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

  // Subscribe: 5% off the unit price. Volume: 5%/10% off.
  const volumeDiscount = purchaseMode === 'one-time' ? selectedVolume.discount : 0;
  const subscribeDiscount = purchaseMode === 'subscribe' ? SUBSCRIBE_DISCOUNT : 0;
  const effectiveDiscount = purchaseMode === 'subscribe' ? subscribeDiscount : volumeDiscount;

  const unitPrice = effectiveDiscount > 0
    ? +(basePrice * (1 - effectiveDiscount)).toFixed(2)
    : basePrice;

  const qty = purchaseMode === 'one-time' ? selectedVolume.qty : 1;
  const totalPrice = +(unitPrice * qty).toFixed(2);
  const savingsAmount = effectiveDiscount > 0
    ? +((basePrice - unitPrice) * qty).toFixed(2)
    : 0;

  const monthlyAutoShipPrice = +(basePrice * (1 - SUBSCRIBE_DISCOUNT)).toFixed(2);
  const monthlyAutoShipSavings = +(basePrice - monthlyAutoShipPrice).toFixed(2);

  const handleAddToOrder = () => {
    if (purchaseMode === 'one-time') {
      for (let i = 0; i < selectedVolume.qty; i++) {
        addItem(product, selectedFormat, selectedDosage, 1);
      }
    } else {
      // subscription: passes subscriptionMonths=3 to signal recurring
      addItem(product, selectedFormat, selectedDosage, 3);
    }
    openDrawer();
  };

  return (
    <div className={className}>
      {/* Price header */}
      <div className="mb-5">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-semibold" style={{ color: "#010101" }}>
            ${unitPrice}
          </span>
          <span className="text-sm" style={{ color: "#8A8075" }}>
            {purchaseMode === 'subscribe'
              ? 'per vial / month'
              : qty > 1 ? `per vial · ${qty} vials` : 'per vial'}
          </span>
        </div>
        {savingsAmount > 0 && (
          <p className="text-sm font-medium mt-1" style={{ color: "#A4B08A" }}>
            Auto-ship savings: ${savingsAmount.toFixed(2)}{purchaseMode === 'subscribe' ? '/month' : ''}
          </p>
        )}
      </div>

      {/* Dosage Selection */}
      {selectedFormat === 'vial' && product.dosages && product.dosages.length > 1 && (
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#8A8075" }}>
            Size
          </p>
          <div className="flex gap-2">
            {product.dosages.map((dosage) => {
              const active = selectedDosage?.size === dosage.size;
              return (
                <button
                  key={dosage.size}
                  onClick={() => handleDosageChange(dosage)}
                  className="flex-1 py-2.5 px-3 rounded-lg border text-sm text-center transition-all"
                  style={{
                    borderColor: active ? '#A4B08A' : '#ECEAE4',
                    backgroundColor: active ? '#A4B08A15' : 'transparent',
                    fontWeight: active ? 600 : 400,
                    color: active ? '#1A1A1A' : '#666',
                  }}
                  aria-pressed={active}
                >
                  {dosage.size} <span style={{ color: "#8A8075", fontWeight: 400 }}>· ${dosage.price}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Format Toggle (only when pen available) */}
      {product.penAvailable && (
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#8A8075" }}>
            Format
          </p>
          <div className="grid grid-cols-2 gap-2">
            {(['vial', 'pen'] as const).map((fmt) => {
              const active = selectedFormat === fmt;
              return (
                <button
                  key={fmt}
                  onClick={() => setSelectedFormat(fmt)}
                  className="py-2 px-3 rounded-lg border text-sm text-center transition-all"
                  style={{
                    borderColor: active ? '#A4B08A' : '#ECEAE4',
                    backgroundColor: active ? '#A4B08A15' : 'transparent',
                    fontWeight: active ? 600 : 400,
                    color: active ? '#1A1A1A' : '#666',
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

      {/* Purchase Mode Toggle */}
      <div className="mb-5">
        <div
          className="grid grid-cols-2 rounded-lg overflow-hidden border"
          style={{ borderColor: "#ECEAE4" }}
        >
          <button
            onClick={() => setPurchaseMode('one-time')}
            className="py-3 text-sm font-medium text-center transition-all"
            style={{
              backgroundColor: purchaseMode === 'one-time' ? '#1A1A1A' : 'transparent',
              color: purchaseMode === 'one-time' ? '#FFFFF3' : '#555',
            }}
            aria-pressed={purchaseMode === 'one-time'}
          >
            One-Time
          </button>
          <button
            onClick={() => setPurchaseMode('subscribe')}
            className="py-3 text-sm font-medium text-center transition-all relative"
            style={{
              backgroundColor: purchaseMode === 'subscribe' ? '#1A1A1A' : 'transparent',
              color: purchaseMode === 'subscribe' ? '#FFFFF3' : '#555',
            }}
            aria-pressed={purchaseMode === 'subscribe'}
          >
            Subscribe
            <span
              className="ml-1.5 text-[10px] font-bold px-1 py-0.5 rounded"
              style={{
                backgroundColor: purchaseMode === 'subscribe' ? '#A4B08A' : '#A4B08A22',
                color: purchaseMode === 'subscribe' ? '#010101' : '#4A5E3A',
              }}
            >
              5% off
            </span>
          </button>
        </div>
      </div>

      {/* ONE-TIME: Volume options */}
      {purchaseMode === 'one-time' && (
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#8A8075" }}>
            Quantity
          </p>
          <div className="grid grid-cols-3 gap-2">
            {VOLUME_OPTIONS.map((opt) => {
              const active = selectedVolume.qty === opt.qty;
              const optUnitPrice = opt.discount > 0
                ? +(basePrice * (1 - opt.discount)).toFixed(2)
                : basePrice;
              const optTotal = +(optUnitPrice * opt.qty).toFixed(2);
              const optSavings = opt.discount > 0
                ? +((basePrice - optUnitPrice) * opt.qty).toFixed(2)
                : 0;
              return (
                <button
                  key={opt.qty}
                  onClick={() => setSelectedVolume(opt)}
                  className="py-2.5 px-2 rounded-lg border text-center transition-all"
                  style={{
                    borderColor: active ? '#A4B08A' : '#ECEAE4',
                    backgroundColor: active ? '#A4B08A15' : 'transparent',
                  }}
                  aria-pressed={active}
                >
                  <div
                    className="text-sm font-semibold"
                    style={{ color: active ? '#1A1A1A' : '#555' }}
                  >
                    {opt.label}
                  </div>
                  <div className="text-[11px] mt-0.5" style={{ color: "#8A8075" }}>
                    {opt.qty > 1 ? `${opt.qty} × $${optUnitPrice}` : `$${optUnitPrice}`}
                  </div>
                  {optSavings > 0 && (
                    <div className="text-[10px] mt-0.5 font-semibold" style={{ color: "#A4B08A" }}>
                      Save ${optSavings}
                    </div>
                  )}
                  {opt.qty > 1 && (
                    <div className="text-[10px] mt-0.5 font-bold" style={{ color: "#010101" }}>
                      ${optTotal}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* SUBSCRIBE: Auto-ship details */}
      {purchaseMode === 'subscribe' && (
        <div className="mb-5">
          <div
            className="p-4 rounded-lg border space-y-3"
            style={{ borderColor: "#D4DCC8", backgroundColor: "#F5F9F2" }}
          >
            <div className="flex items-start gap-2.5">
              <RefreshCw className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "#A4B08A" }} />
              <span className="text-xs" style={{ color: "#555" }}>
                Auto-ships every 30 days — cancel, skip, or pause anytime
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <Shield className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "#A4B08A" }} />
              <span className="text-xs" style={{ color: "#555" }}>
                No lock-in period. Manage your subscription from your account.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <FlaskConical className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "#A4B08A" }} />
              <span className="text-xs" style={{ color: "#555" }}>
                1 vial + current-batch COA + cold-chain packaging, every shipment
              </span>
            </div>
            <div
              className="pt-3 border-t flex items-center justify-between"
              style={{ borderColor: "#C8D9C0" }}
            >
              <span className="text-xs font-semibold" style={{ color: "#3A3A3A" }}>
                Auto-ship price
              </span>
              <div className="text-right">
                <span className="text-sm font-bold" style={{ color: "#010101" }}>
                  ${monthlyAutoShipPrice}/month
                </span>
                <div className="text-[10px]" style={{ color: "#A4B08A" }}>
                  Save ${monthlyAutoShipSavings}/month vs single order
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Total & Add to Order */}
      <div
        className="p-4 rounded-lg mb-4"
        style={{ backgroundColor: "#F7F5F0", border: "1px solid #ECEAE4" }}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm" style={{ color: "#555" }}>
            {purchaseMode === 'subscribe'
              ? 'First shipment today'
              : qty > 1 ? `${qty} vials — total` : 'Total'}
          </span>
          <span className="text-2xl font-semibold" style={{ color: "#010101" }}>
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        {purchaseMode === 'subscribe' && (
          <p className="text-[11px] mt-1" style={{ color: "#8A8075" }}>
            Then ${monthlyAutoShipPrice}/month. Cancel anytime.
          </p>
        )}
      </div>

      <button
        onClick={handleAddToOrder}
        className="w-full flex items-center justify-center gap-2 font-semibold uppercase tracking-wide transition-all rounded-lg hover:opacity-90 active:scale-[0.98]"
        style={{
          height: "52px",
          fontSize: "13px",
          backgroundColor: "#A4B08A",
          color: "#010101",
        }}
        aria-label={`Add ${product.name} to order`}
      >
        <ShoppingCart className="w-4 h-4" aria-hidden="true" />
        {purchaseMode === 'subscribe' ? 'Start Auto-Ship' : 'Add to Order'}
      </button>

      {/* Compact trust strip */}
      <div className="mt-4 flex items-center justify-center gap-4 text-[11px]" style={{ color: "#8A8075" }}>
        <div className="flex items-center gap-1.5">
          <FlaskConical className="w-3.5 h-3.5" style={{ color: "#A4B08A" }} aria-hidden="true" />
          <span>{product.purity}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5" style={{ color: "#A4B08A" }} aria-hidden="true" />
          <span>HPLC Verified</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Truck className="w-3.5 h-3.5" style={{ color: "#A4B08A" }} aria-hidden="true" />
          <span>Cold-Chain</span>
        </div>
      </div>
    </div>
  );
}
