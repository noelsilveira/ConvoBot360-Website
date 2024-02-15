import React from 'react';
import { ProductListingParamsType } from '../../products-listing/page';
import ECategoryProductList from './ECategoryProductList';

type CategoriesParams = ProductListingParamsType & {
  params: { category?: string };
};
const CategorizedProductsPage = async ({ params }: CategoriesParams) => {
  return (
    <>
      <ECategoryProductList params={params} />
    </>
  );
};

export default CategorizedProductsPage;
