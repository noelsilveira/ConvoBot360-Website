import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// type CartProduct = {
//     product_id: string;
//     quantity: number;
//     option_id?: string;
//   };
type CartStoreType = {
  cart_count: number;
  updateCartCount: (cart_count: number) => void;
};

const getInitialCartCount = () => {
  const cart_count = sessionStorage.getItem('cart-count') || false;
  return cart_count;
};

export const useCartStore = create<CartStoreType>()(
  persist(
    (set, get) => ({
      cart_count: 0,
      updateCartCount: (cartCount) =>
        set((state) => ({
          cart_count: cartCount,
        })),
    }),
    {
      name: 'cart-count',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
