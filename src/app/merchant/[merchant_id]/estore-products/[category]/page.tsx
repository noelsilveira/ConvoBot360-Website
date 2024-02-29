import EProductList from '@/components/product/estore/EProductList';
import { ProductListingParamsType } from '@/types/products';
import { cookies } from 'next/headers';
import React from 'react';

export type SearchParamsType = { [key: string]: string | string[] | undefined };

const CategorizedProductsPage = async ({
  params,
  searchParams,
}: ProductListingParamsType & { searchParams: SearchParamsType }) => {
  const branch_id = cookies().get('branch_id');

  return (
    <>
      <EProductList
        branch_id={branch_id?.value}
        params={params}
        searchParams={searchParams}
      />
    </>
  );
};

export default CategorizedProductsPage;
