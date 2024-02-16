export type OrderPayloadType = {
  branch_id: string;
  products: [
    {
      product_id: string;
      quantity: number;
      option_id: string;
    },
  ];
};

export type OrderProductType = {
  product_retailer_id: string;
  product_name: string;
  quantity: number;
  item_price: number;
  option_id: string;
  option_name: string;
  option_price: number;
  currency: string;
  add: [];
  deduct: string | null;
};

export type OrderType = {
  order_id: string;
  products: OrderProductType[];
  net_total: number;
  taxes: number;
  service_charges: number;
  delivery_charges: number;
  discounts: number;
  gross_total: number;
  currency: string;
  delivery_location: string | null;
  order_mode: string;
  order_status: string;
};
