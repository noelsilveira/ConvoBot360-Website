import { SortOptions } from '@/components/product/SortProducts';

export type ProductsType = {
  id: string;
  title: string;
  description: any;
  availability: string;
  condition: string;
  price: number;
  currency: string;
  sale_price: any;
  sale_effective_date: any;
  item_group_id: any;
  link: string;
  image_link: any;
  brand: string;
  translation: Translation;
  google_product_category: any;
  fb_product_category: any;
  category: any;
  options: any[];
  is_active: boolean;
};

export type Translation = {
  name: Name;
  description: Description;
};

export type Name = {
  ar: string;
  en: string;
};

export type Description = {
  ar: string;
  en: string;
};

export type CategoryType = {
  title: string;
  description: string;
};

export type ProductListingParamsType = {
  params: {
    product_id?: string;
    merchant_id?: string;
    sortBy?: SortOptions;
    category?: string;
    searchParams?: { [key: string]: string | string[] | undefined };
  };
};
