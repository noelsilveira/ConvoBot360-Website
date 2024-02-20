import { create } from 'zustand';

type ProductQuantityStoreType = {
    productQuantity: number;
    setProductQuantity: (productQuantity: number) => void;
  };
  
  export const ProductQuantityStore = create<ProductQuantityStoreType>((set, get) => ({
    productQuantity: 0,
    setProductQuantity: (quantity) => set({ productQuantity: quantity }),
  }));