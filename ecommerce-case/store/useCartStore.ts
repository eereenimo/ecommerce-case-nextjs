import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types/product';

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product: Product) => {
        const items = get().items;
        const existingItem = items.find((item: CartItem) => item.id === product.id);

        if (existingItem) {
          set({
            items: items.map((item: CartItem) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ items: [...items, { ...product, quantity: 1 }] });
        }
      },

      removeItem: (productId: number) => {
        set({
          items: get().items.filter((item: CartItem) => item.id !== productId),
        });
      },

      updateQuantity: (productId: number, quantity: number) => {
        if (quantity < 1) return;
        set({
          items: get().items.map((item: CartItem) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        return get().items.reduce((total: number, item: CartItem) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total: number, item: CartItem) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: 'visio-cart-storage',
    }
  )
);
