import React from 'react';
import { getEStoreProductsListWithSort } from '../products-listing/fetcher';
import { ProductListingParamsType, ProductsType } from '@/types/products';
import Products from './Products';

const EProductList = async ({ params }: ProductListingParamsType) => {
  const products: ProductsType[] = await getEStoreProductsListWithSort({
    queryParams: { params },
  });

  return <Products params={params} products={products} />;
};

export default EProductList;
