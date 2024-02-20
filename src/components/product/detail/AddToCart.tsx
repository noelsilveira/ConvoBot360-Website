'use client';

import React from 'react';
import ProductAddToCartButtonWithModal from '../estore/ProductAddToCartButtonWithModal';
import { ProductsType } from '@/types/products';

const AddToCartForm = ({
  branch_id,
  product_id,
  product,
}: {
  branch_id: string;
  product: ProductsType;
  product_id: string;
}) => {
  return (
    <>
      <ProductAddToCartButtonWithModal
        branch_id={branch_id}
        size='large'
        product={product}
      />
    </>
  );
};

export default AddToCartForm;
