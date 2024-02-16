import { ProductListingParamsType, ProductsType } from '@/types/products';

import Products from './Products';
import React from 'react';
import { getEStoreProductsListWithSort } from '../../../(deprecated)/products-listing/fetcher';

const EProductList = async ({ params }: ProductListingParamsType) => {
  const products: ProductsType[] = await getEStoreProductsListWithSort({
    queryParams: { params },
  });

  return <Products params={params} products={products} />;
};

export default EProductList;
