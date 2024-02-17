import { SearchParamsType } from '@/app/merchant/[merchant_id]/estore-products/[category]/page';
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
  options: ProductOptionsType[];
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

export type ProductOptionsType = {
  id: string;
  name: string;
  price: number;
  translation: {
    name: {
      ar: string;
      en: string;
    };
  };
};

export type ProductSearchTooShortType = {
  type: string;
  msg: string;
  input: string;
  url: string;
  ctx: {
    min_length: number;
  };
  loc: Array<string>;
};

export type ProductListingParamsType = {
  params: {
    product_id?: string;
    merchant_id?: string;
    sortBy?: SortOptions;
    category?: string;
  };
  searchParams?: SearchParamsType;
};
