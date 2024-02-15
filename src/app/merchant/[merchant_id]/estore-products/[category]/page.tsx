import React from 'react';

import ECategoryProductList from './ECategoryProductList';
import { ProductListingParamsType } from '@/types/products';

export type SearchParamsType = { [key: string]: string | string[] | undefined };

const CategorizedProductsPage = async ({
  params,
  searchParams,
}: ProductListingParamsType & { searchParams: SearchParamsType }) => {
  return (
    <>
      <ECategoryProductList params={params} searchParams={searchParams} />
    </>
  );
};

export default CategorizedProductsPage;
