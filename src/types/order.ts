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
