import { create } from 'zustand';

type SingleSelectQuantityStoreType = {
  productQuantity: number;
  setProductQuantity: (productQuantity: number) => void;
  increaseOptionQuantity: () => void;
  decreaseOptionQuantity: () => void;
  reset: () => void;
};

export const SingleSelectQuantityStore = create<SingleSelectQuantityStoreType>(
  (set, get) => ({
    productQuantity: 0,
    setProductQuantity: (quantity) =>
      set((state) => ({ productQuantity: quantity })),
    increaseOptionQuantity: () =>
      set((state) => ({ productQuantity: state.productQuantity + 1 })),
    decreaseOptionQuantity: () =>
      set((state) => ({ productQuantity: state.productQuantity - 1 })),
    reset: () => {
      set((state) => ({ productQuantity: 0 }));
    },
  })
);
