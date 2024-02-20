import EProductList from '@/components/product/estore/EProductList';
import { ProductListingParamsType } from '@/types/products';
import { cookies } from 'next/headers';
import React from 'react';

const EStoreProductsPage = async ({
  params,
  searchParams,
}: ProductListingParamsType) => {
  const branch_id = cookies().get('branch_id');

  return (
    <>
      <EProductList
        branch_id={branch_id?.value}
        params={params}
        searchParams={searchParams}
      />
      {/* <Pagination /> */}
    </>
  );
};

export default EStoreProductsPage;
