import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from './products';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedDosage?: {
    size: string;
    price: number;
  };
  format: 'vial' | 'pen';
  subscriptionMonths: number; // 1, 3, or 6
  monthlyPrice: number; // price per month after discount
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;

  // Actions
  addItem: (product: Product, format?: 'vial' | 'pen', selectedDosage?: { size: string; price: number }, subscriptionMonths?: number) => void;
  removeItem: (productSlug: string, format: 'vial' | 'pen') => void;
  updateQuantity: (productSlug: string, format: 'vial' | 'pen', quantity: number) => void;
  clearCart: () => void;

  // Drawer controls
  openDrawer: () => void;
  closeDrawer: () => void;

  // Computed values
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getItemCount: (productSlug: string, format: 'vial' | 'pen') => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, format = 'vial', selectedDosage, subscriptionMonths = 1) => {
        const existingItemIndex = get().items.findIndex(
          item => item.product.slug === product.slug && item.format === format
        );

        // Determine the price to use
        let itemPrice = product.price;
        let dosageInfo = selectedDosage;

        // If no dosage selected but product has dosages, use the first (smallest) one
        if (!dosageInfo && product.dosages && product.dosages.length > 0) {
          dosageInfo = product.dosages[0];
        }

        // Use dosage price if available
        if (dosageInfo) {
          itemPrice = dosageInfo.price;
        }

        // If pen format selected, use pen price
        if (format === 'pen' && product.penAvailable) {
          itemPrice = product.penPrice;
        }

        // Apply subscription discount
        const discountMap: Record<number, number> = { 1: 0, 3: 14, 6: 28 };
        const discount = discountMap[subscriptionMonths] || 0;
        const monthlyPrice = Math.round(itemPrice * (1 - discount / 100));

        if (existingItemIndex >= 0) {
          // Update existing item
          set(state => ({
            items: state.items.map((item, index) =>
              index === existingItemIndex
                ? { ...item, quantity: item.quantity + 1, subscriptionMonths, monthlyPrice }
                : item
            )
          }));
        } else {
          // Add new item
          set(state => ({
            items: [...state.items, {
              product,
              quantity: 1,
              selectedDosage: dosageInfo,
              format,
              subscriptionMonths,
              monthlyPrice
            }]
          }));
        }
      },

      removeItem: (productSlug, format) => {
        set(state => ({
          items: state.items.filter(
            item => !(item.product.slug === productSlug && item.format === format)
          )
        }));
      },

      updateQuantity: (productSlug, format, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productSlug, format);
          return;
        }

        set(state => ({
          items: state.items.map(item =>
            item.product.slug === productSlug && item.format === format
              ? { ...item, quantity }
              : item
          )
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      openDrawer: () => {
        set({ isOpen: true });
      },

      closeDrawer: () => {
        set({ isOpen: false });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          return total + (item.monthlyPrice * item.quantity * item.subscriptionMonths);
        }, 0);
      },

      getItemCount: (productSlug, format) => {
        const item = get().items.find(
          item => item.product.slug === productSlug && item.format === format
        );
        return item ? item.quantity : 0;
      }
    }),
    {
      name: 'nexphoria-cart',
      storage: createJSONStorage(() => localStorage),
      // Only persist cart items, not drawer state
      partialize: (state) => ({ items: state.items }),
    }
  )
);

// Helper functions for formatting
export function formatPrice(price: number): string {
  return `$${price}`;
}

export function formatCartTotal(total: number): string {
  return `$${total.toFixed(2)}`;
}

// Get savings percentage for larger dosages
export function getSavingsPercentage(originalPrice: number, discountedPrice: number): number {
  if (originalPrice <= discountedPrice) return 0;
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}