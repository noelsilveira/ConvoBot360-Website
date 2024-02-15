import React from 'react';
import EProductList from './EProductList';
import { ProductListingParamsType } from '@/types/products';

const EStoreProductsPage = async ({ params }: ProductListingParamsType) => {
  return (
    <>
      <EProductList params={params} />
      {/* <Pagination /> */}
    </>
  );
};

export default EStoreProductsPage;
