import { ProductListingParamsType, ProductsType } from '@/types/products';

import Products from './Products';
import React from 'react';
import { SearchParamsType } from './[category]/page';
import { getEStoreProductsListWithSort } from '../../../(deprecated)/products-listing/fetcher';

const EProductList = async ({ params, searchParams }: ProductListingParamsType) => {
  const products: ProductsType[] = await getEStoreProductsListWithSort({
    queryParams: { params },
    searchParams: searchParams
  });

  return <Products params={params} products={products} />;
};

export default EProductList;
