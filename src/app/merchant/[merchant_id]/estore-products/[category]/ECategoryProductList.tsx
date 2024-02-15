import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProductsType } from '@/types/products';
import { getEStoreProductsListWithSort } from '../../products-listing/fetcher';
import { ProductListingParamsType } from '../../products-listing/page';
import { urlToStringParser } from '@/lib/format';
import { SearchParamsType } from './page';
import Products from '../Products';

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
