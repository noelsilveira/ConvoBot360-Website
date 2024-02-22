import {
  ProductListingParamsType,
  ProductsListResponseType,
} from '@/types/products';
import React from 'react';
import ProductListView from './list-view/ProductListView';
import ProductGridView from './grid-view/ProductGridView';

const Products = ({
  productsResponse,
  params,
  branch_id,
}: ProductListingParamsType & {
  productsResponse: ProductsListResponseType;
  branch_id?: string;
}) => {
  const products = productsResponse.detail;
  return (
    <div className='bg-white'>
      <div>
        {/* <Breadcrumbs items={breadcrumbs} /> */}

        <div className='block sm:hidden'>
          <ProductListView
            products={products}
            params={params}
            branch_id={branch_id}
          />
        </div>

        <div className='hidden sm:block'>
          {/*  Single product Grid item view */}
          <ProductGridView
            params={params}
            products={products}
            branch_id={branch_id}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
