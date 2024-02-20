import { ProductsType } from '@/types/products';
import { create } from 'zustand';
import { getProducts } from '@/app/actions/product-fetcher';

type ProductStoreType = {
  products: ProductsType[];
  setProducts: (products: ProductsType[]) => void;
};

export const ProductStore = create<ProductStoreType>((set, get) => ({
  products: [],
  setProducts: (products) => set({ products: products }),
}));

type CategoryStoreType = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  clearCategories: () => void;
};

export const categoryStore = create<CategoryStoreType>((set, get) => ({
  activeCategory: '',
  setActiveCategory: (category) => set({ activeCategory: category }),
  clearCategories: () => {
    const setProducts = ProductStore.getState().setProducts;
    const setActiveCategory = categoryStore.getState().setActiveCategory;
    setActiveCategory('');
    async () => {
      const data = await getProducts({
        filterParam: {},
      });

      setProducts(data);
    };
  },
}));
