import { create } from 'zustand';

type MultiSelectQuantityStoreType = {
  multiProductQuantity: number;
  setProductQuantity: (productQuantity: number) => void;
  increaseOptionQuantity: () => void;
  decreaseOptionQuantity: () => void;
  resetAll: () => void;
};

export const MultiSelectQuantityStore = create<MultiSelectQuantityStoreType>(
  (set, get) => ({
    multiProductQuantity: 0,
    setProductQuantity: (quantity) =>
      set((state) => ({ multiProductQuantity: quantity })),
    increaseOptionQuantity: () =>
      set((state) => ({
        multiProductQuantity: state.multiProductQuantity + 1,
      })),
    decreaseOptionQuantity: () =>
      set((state) => ({
        multiProductQuantity: state.multiProductQuantity - 1,
      })),
    resetAll: () => {
      set((state) => ({ multiProductQuantity: 0 }));
    },
  })
);
