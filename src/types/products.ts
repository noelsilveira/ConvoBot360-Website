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
  optionsGroups: ProductOptionsGroupsType[] | [];
  is_active: boolean;
};

export type ProductsListResponseType = {
  total_products: number;
  current_page: number;
  last_page: number;
  detail: ProductsType[];
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

export type ProductOptionsInGroupOptionsType = {
  optionId: string;
  name: string;
  price: number;
  translation: {
    name: {
      ar: string;
      en: string;
    };
  };
};

export type ProductOptionsGroupsType = {
  id: string;
  title: string;
  minSelectable: number;
  maxSelectable: number;
  options:
    | {
        index: string;
        optionId: string;
        name: string;
        price: number;
        translation: {
          name: {
            ar: string;
            en: string;
          };
        };
      }[]
    | [];
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

export type AddToCartObjectType = {
  branch_id: FormDataEntryValue | null;
  products:
    | {
        product_id: FormDataEntryValue | null;
        quantity: FormDataEntryValue | null;
        option_id: FormDataEntryValue | null;
      }[]
    | FormDataEntryValue[];
};

export type AddToCartProductResponseType = {
  product_retailer_id: string;
  product_name: string;
  quantity: number;
  item_price: number;
  option_id: string;
  option_name: string;
  option_price: number;
  currency: string;
  add: [
    {
      type: string;
      description: string;
      percent: number;
      amount: number;
    },
  ];
  deduct: null | number;
};

export type AddToCartResponseType = {
  status_code: number;
  detail: {
    timestamp: string;
    order_id: string;
    products: AddToCartProductResponseType[];
    net_total: number;
    taxes: number;
    service_charges: number;
    delivery_charges: number;
    discounts: number;
    gross_total: number;
    currency: string;
    delivery_location: null | string;
    order_mode: string;
    order_status: string;
  };
};
