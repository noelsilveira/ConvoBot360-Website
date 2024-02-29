import { create } from 'zustand';

// Define store type
type ProductQuantityStoreType = {
  productQuantity: number;
  setProductQuantity: (quantity: number) => void;
  increaseProductQuantity: () => void;
  decreaseProductQuantity: () => void;
  resetProductQuantity: () => void;
};

export const ProductQuantityStore = create<ProductQuantityStoreType>(
  (set, get) => ({
    productQuantity: 0,
    setProductQuantity: (quantity) => set({ productQuantity: quantity }),
    increaseProductQuantity: () =>
      set((state) => ({ productQuantity: state.productQuantity + 1 })),
    decreaseProductQuantity: () =>
      set((state) => ({ productQuantity: state.productQuantity - 1 })),
    resetProductQuantity: () => set({ productQuantity: 0 }),
  })
);
