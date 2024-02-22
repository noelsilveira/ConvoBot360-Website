import {
  ProductListingParamsType,
  ProductSearchTooShortType,
  ProductsListResponseType,
  ProductsType,
} from '@/types/products';

import Products from './Products';
import React from 'react';
import { getEStoreProductsListWithSort } from '@/app/actions/product-fetcher';
import EStoreSearchProductsError from './EStoreSearchProductsError';

const EProductList = async ({
  params,
  searchParams,
}: ProductListingParamsType) => {
  const productsResponse: ProductsListResponseType =
    await getEStoreProductsListWithSort({
      queryParams: { params },
      searchParams: searchParams,
    });

  const filteredProducts = productsResponse;

  return (
    <>
      {/* Error component */}

      <EStoreSearchProductsError products={filteredProducts.detail} />

      {filteredProducts.total_products > 1 ? (
        <Products params={params} productsResponse={filteredProducts} />
      ) : (
        <></>
      )}
    </>
  );
};

export default EProductList;
