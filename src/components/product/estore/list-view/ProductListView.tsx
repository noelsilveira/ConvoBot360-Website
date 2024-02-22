import WhatsappProductListCard from '@/components/checkout/WhatsppProductListCard';
import { ProductListingParamsType, ProductsType } from '@/types/products';
import React from 'react';
import ProductListViewCard from './ProductListViewCard';

const ProductListView = ({
  products,
  params,
  branch_id,
}: ProductListingParamsType & {
  products: ProductsType[];
  branch_id?: string;
}) => {
  return (
    <div className='flex flex-col divide-y divide-gallery-50 px-4'>
      {products &&
        products.map((product, index) => (
          <div key={'product-list-view-id-' + product.id + index}>
            <ProductListViewCard product={product} branch_id={branch_id} />
          </div>
        ))}
    </div>
  );
};

export default ProductListView;
