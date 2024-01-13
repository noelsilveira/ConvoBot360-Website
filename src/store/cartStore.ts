import { ProductProps, ProductDetailProps } from '@/constants/products';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type CartItemProps = ProductDetailProps & {
  count: number;
};

type CartStore = {
  cart: CartItemProps[];
  countCart: () => number;
  addCartItem: (product: ProductDetailProps) => void;
  removeCartItem: (product_id: number) => void;
  removeAllCartItems: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      countCart: () => {
        const { cart } = get();
        if (cart.length) {
          return cart
            .map((item) => item.count)
            .reduce((prev, curr) => prev + curr);
        }
        return 0;
      },
      addCartItem: (product: ProductDetailProps) => {
        const { cart } = get();
        const updatedCart = updateCart(product, cart);
        set({ cart: updatedCart });
      },
      removeCartItem: (product_id: number) => {
        const { cart } = get();
        const updatedCart = removeCart(product_id, cart);
        set({ cart: updatedCart });
      },
      removeAllCartItems: () => set({ cart: [] }),
    }),
    {
      name: 'cart',
      storage: createJSONStorage(() => sessionStorage),
      skipHydration: true,
    }
  )
);

function updateCart(
  product: ProductDetailProps,
  cart: CartItemProps[]
): CartItemProps[] {
  const cartItem = { ...product, count: 1 } as CartItemProps;

  const productOnCart = cart.map((item) => item.id).includes(product.id);

  if (!productOnCart) cart.push(cartItem);
  else {
    return cart.map((item) => {
      if (item.id === product.id)
        return { ...item, count: item.count + 1 } as CartItemProps;
      return item;
    });
  }

  return cart;
}

function removeCart(
  product_id: number,
  cart: CartItemProps[]
): CartItemProps[] {
  return cart
    .map((item) => {
      if (item.id === product_id) return { ...item, count: item.count - 1 };
      return item;
    })
    .filter((item) => {
      return item.count;
    });
}
