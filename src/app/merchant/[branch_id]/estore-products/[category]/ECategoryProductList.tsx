import Image from 'next/image';
import Link from 'next/link';
import { ProductListingParamsType } from '../../../../(deprecated)/products-listing/page';
import Products from '../Products';
import { ProductsType } from '@/types/products';
import React from 'react';
import { SearchParamsType } from './page';
import { getEStoreProductsListWithSort } from '../../../../(deprecated)/products-listing/fetcher';
import { urlToStringParser } from '@/lib/format';

type CategoriesParams = ProductListingParamsType & {
  params: { category?: string };
};

const ECategoryProductList = async ({
  params,
  searchParams,
}: CategoriesParams & { searchParams: SearchParamsType }) => {
  const { category } = params;
  const parsed_category = urlToStringParser(category as string);

  const products: ProductsType[] = await getEStoreProductsListWithSort({
    queryParams: { params },
    categoryParams: parsed_category,
    searchParams,
  });

  return <Products products={products} params={params} />;
};

export default ECategoryProductList;
