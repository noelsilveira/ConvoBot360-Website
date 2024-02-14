import { ProductsType } from "@/types/products";
import { create } from "zustand";

type ProductStoreType = {
    products: ProductsType[];
    setProducts: (products: ProductsType[]) => void;
  }
  
  export const ProductStore = create<ProductStoreType>(
    (set, get) => ({
        products: [],
        setProducts: (products) => set({ products: products }),
    })
  );