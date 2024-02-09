export type ProductsType = {
  id: string
  title: string
  description: any
  availability: string
  condition: string
  price: number
  currency: string
  sale_price: any
  sale_effective_date: any
  item_group_id: any
  link: string
  image_link: any
  brand: string
  translation: Translation
  google_product_category: any
  fb_product_category: any
  category: any
  options: any[]
  is_active: boolean
}

export type Translation = {
  name: Name
  description: Description
}

export type Name = {
  ar: string
  en: string
}

export type Description = {
  ar: string
  en: string
}


// Previous product type
// export type ProductsType = {
//   id: string;
//   title: string;
//   description: string;
//   availability: Availability;
//   condition: Condition;
//   price: number;
//   currency: Currency;
//   sale_price: string;
//   sale_effective_date: null;
//   item_group_id: string;
//   link: string;
//   image_link: string;
//   brand: Brand;
//   translation: null;
//   google_product_category: GoogleProductCategory;
//   fb_product_category: FbProductCategory;
//   custom_label_0: string;
//   options: [];
//   is_active: boolean;
// };

// export type Availability = 'in stock' | 'out of stock';

// export type Brand = string;

// export type Condition = 'new';

// export type Currency = 'BHD';

// export type FbProductCategory = 'food & beverages' | string;

// export type GoogleProductCategory =
//   | 'Food, Beverages & Tobacco > Food Items'
//   | string;
