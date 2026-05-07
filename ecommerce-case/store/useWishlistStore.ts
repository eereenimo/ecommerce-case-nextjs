import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types/product';

export interface WishlistState {
  items: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: number) => boolean;
  removeItem: (productId: number) => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      
      toggleWishlist: (product: Product) => {
        const items = get().items;
        const exists = items.some((item: Product) => item.id === product.id);

        if (exists) {
          set({ items: items.filter((item: Product) => item.id !== product.id) });
        } else {
          set({ items: [...items, product] });
        }
      },

      isInWishlist: (productId: number) => {
        return get().items.some((item: Product) => item.id === productId);
      },

      removeItem: (productId: number) => {
        set({ items: get().items.filter((item: Product) => item.id !== productId) });
      },
    }),
    {
      name: 'visio-wishlist-storage',
    }
  )
);
