import EProductList from './EProductList';
import { ProductListingParamsType } from '@/types/products';
import React from 'react';
import { SearchParamsType } from './[category]/page';

const EStoreProductsPage = async ({ params, searchParams }: ProductListingParamsType) => {
  return (
    <>
      <EProductList params={params} searchParams={searchParams} />
      {/* <Pagination /> */}
    </>
  );
};

export default EStoreProductsPage;
