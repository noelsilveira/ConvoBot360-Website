import {
  ProductListingParamsType,
  ProductSearchTooShortType,
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
  const products: ProductsType[] | ProductSearchTooShortType[] | string =
    await getEStoreProductsListWithSort({
      queryParams: { params },
      searchParams: searchParams,
    });

  const filteredProducts = products as ProductsType[];

  return (
    <>
      {/* Error component */}

      <EStoreSearchProductsError products={products} />

      {filteredProducts.length > 1 ? (
        <Products params={params} products={filteredProducts} />
      ) : (
        <></>
      )}
    </>
  );
};

export default EProductList;
