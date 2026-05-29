"use client";

import { useState } from "react";
import { ShoppingCart, Shield, FlaskConical, Truck, RefreshCw, Info, ChevronDown, ChevronUp } from "lucide-react";
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

// Subscription tiers: months → discount
const SUBSCRIPTION_OPTIONS = [
  { months: 3, label: "3-Month Supply", discount: 0.08, note: "Ships monthly — 3 shipments" },
  { months: 6, label: "6-Month Supply", discount: 0.12, note: "Ships monthly — 6 shipments" },
] as const;

const VOLUME_OPTIONS = [
  { qty: 1, label: "Single", discount: 0 },
  { qty: 3, label: "Research Kit", discount: 0.05 },
  { qty: 6, label: "Lab Protocol", discount: 0.10 },
] as const;

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
  const [selectedSubscription, setSelectedSubscription] = useState<(typeof SUBSCRIPTION_OPTIONS)[number]>(SUBSCRIPTION_OPTIONS[0]);
  const [selectedVolume, setSelectedVolume] = useState<(typeof VOLUME_OPTIONS)[number]>(VOLUME_OPTIONS[0]);
  const [showSubscriptionInfo, setShowSubscriptionInfo] = useState(false);

  const handleDosageChange = (d: ProductDosage | undefined) => {
    setSelectedDosage(d);
    onDosageChange?.(d);
  };

  const getBasePrice = () => {
    if (selectedFormat === 'pen' && product.penAvailable) return product.penPrice;
    return selectedDosage?.price || product.price;
  };

  const basePrice = getBasePrice();

  // One-time pricing uses volume discount
  const volumeDiscount = purchaseMode === 'one-time' ? selectedVolume.discount : 0;
  const subscribeDiscount = purchaseMode === 'subscribe' ? selectedSubscription.discount : 0;
  const effectiveDiscount = volumeDiscount + subscribeDiscount;

  const unitPrice = effectiveDiscount > 0
    ? +(basePrice * (1 - effectiveDiscount)).toFixed(2)
    : basePrice;

  const qty = purchaseMode === 'one-time' ? selectedVolume.qty : 1;
  const totalPrice = +(unitPrice * qty).toFixed(2);
  const savingsAmount = purchaseMode === 'subscribe'
    ? +((basePrice - unitPrice)).toFixed(2)
    : selectedVolume.discount > 0
      ? +((basePrice - unitPrice) * qty).toFixed(2)
      : 0;

  const handleAddToOrder = () => {
    const subscriptionMonths = purchaseMode === 'subscribe' ? selectedSubscription.months : 1;
    if (purchaseMode === 'one-time') {
      for (let i = 0; i < selectedVolume.qty; i++) {
        addItem(product, selectedFormat, selectedDosage, 1);
      }
    } else {
      addItem(product, selectedFormat, selectedDosage, subscriptionMonths);
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
            per vial{purchaseMode === 'subscribe' ? ' / month' : qty > 1 ? ` · ${qty} vials` : ''}
          </span>
        </div>
        {savingsAmount > 0 && (
          <p className="text-sm font-medium mt-1" style={{ color: "#A4B08A" }}>
            You save ${savingsAmount.toFixed(2)}{purchaseMode === 'subscribe' ? ' per shipment' : ''}
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
            Subscribe &amp; Save
            <span
              className="ml-1.5 text-[10px] font-bold px-1 py-0.5 rounded"
              style={{
                backgroundColor: purchaseMode === 'subscribe' ? '#A4B08A' : '#A4B08A22',
                color: purchaseMode === 'subscribe' ? '#010101' : '#4A5E3A',
              }}
            >
              {Math.round(SUBSCRIPTION_OPTIONS[0].discount * 100)}%+
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
                    {opt.qty} vial{opt.qty > 1 ? 's' : ''}
                    {opt.discount > 0 && (
                      <span className="ml-1 font-semibold" style={{ color: "#A4B08A" }}>
                        −{Math.round(opt.discount * 100)}%
                      </span>
                    )}
                  </div>
                  {opt.discount > 0 && (
                    <div className="text-[10px] mt-0.5" style={{ color: "#888" }}>
                      ${optUnitPrice}/vial
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* SUBSCRIBE: Subscription options */}
      {purchaseMode === 'subscribe' && (
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#8A8075" }}>
              Subscription Length
            </p>
            <button
              onClick={() => setShowSubscriptionInfo(!showSubscriptionInfo)}
              className="flex items-center gap-1 text-xs transition-opacity hover:opacity-70"
              style={{ color: "#A4B08A" }}
              aria-expanded={showSubscriptionInfo}
            >
              <Info className="w-3.5 h-3.5" />
              How it works
              {showSubscriptionInfo ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>

          {/* How it works expandable */}
          {showSubscriptionInfo && (
            <div
              className="mb-3 p-4 rounded-lg border text-xs leading-relaxed space-y-2"
              style={{ borderColor: "#D4DCC8", backgroundColor: "#F5F9F2", color: "#555" }}
            >
              <p className="font-semibold" style={{ color: "#3A3A3A" }}>Subscription details:</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <RefreshCw className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: "#A4B08A" }} />
                  <span>One vial ships every 30 days to your address</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: "#A4B08A" }} />
                  <span>Cancel or pause anytime — no lock-in period</span>
                </li>
                <li className="flex items-start gap-2">
                  <FlaskConical className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: "#A4B08A" }} />
                  <span>Each shipment includes a fresh COA for the current batch</span>
                </li>
                <li className="flex items-start gap-2">
                  <Truck className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: "#A4B08A" }} />
                  <span>Cold-chain shipped with temperature monitoring on every delivery</span>
                </li>
              </ul>
            </div>
          )}

          <div className="space-y-2">
            {SUBSCRIPTION_OPTIONS.map((opt) => {
              const active = selectedSubscription.months === opt.months;
              const subUnitPrice = +(basePrice * (1 - opt.discount)).toFixed(2);
              const totalCost = +(subUnitPrice * opt.months).toFixed(2);
              const totalSaved = +((basePrice - subUnitPrice) * opt.months).toFixed(2);
              return (
                <button
                  key={opt.months}
                  onClick={() => setSelectedSubscription(opt)}
                  className="w-full flex items-center justify-between p-3.5 rounded-lg border transition-all text-left"
                  style={{
                    borderColor: active ? '#A4B08A' : '#ECEAE4',
                    backgroundColor: active ? '#A4B08A12' : 'transparent',
                  }}
                  aria-pressed={active}
                >
                  <div>
                    <div
                      className="text-sm font-semibold mb-0.5"
                      style={{ color: active ? '#1A1A1A' : '#555' }}
                    >
                      {opt.label}
                    </div>
                    <div className="text-[11px]" style={{ color: "#8A8075" }}>
                      {opt.note}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold" style={{ color: "#010101" }}>
                      ${subUnitPrice}<span className="text-xs font-normal text-[#888]">/mo</span>
                    </div>
                    <div className="text-[10px]" style={{ color: "#A4B08A" }}>
                      Save ${totalSaved}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Subscription summary */}
          <div
            className="mt-3 p-3 rounded-lg text-xs space-y-1"
            style={{ backgroundColor: "#F5F9F2", border: "1px solid #D4DCC8" }}
          >
            <div className="flex justify-between">
              <span style={{ color: "#666" }}>Per shipment</span>
              <span className="font-semibold" style={{ color: "#1A1A1A" }}>${unitPrice}</span>
            </div>
            <div className="flex justify-between">
              <span style={{ color: "#666" }}>Total cycle cost</span>
              <span className="font-semibold" style={{ color: "#1A1A1A" }}>
                ${(unitPrice * selectedSubscription.months).toFixed(2)}
              </span>
            </div>
            <div
              className="flex justify-between pt-1 border-t"
              style={{ borderColor: "#C8D9C0" }}
            >
              <span style={{ color: "#4A5E3A" }}>Total saved vs single</span>
              <span className="font-bold" style={{ color: "#4A5E3A" }}>
                ${((basePrice - unitPrice) * selectedSubscription.months).toFixed(2)}
              </span>
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
            Then ${unitPrice}/month for {selectedSubscription.months - 1} more shipment{selectedSubscription.months > 2 ? 's' : ''}.
            Cancel anytime.
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
        {purchaseMode === 'subscribe' ? 'Start Subscription' : 'Add to Order'}
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
