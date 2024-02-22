import Image from 'next/image';
import Link from 'next/link';
import Products from '../Products';
import {
  ProductListingParamsType,
  ProductsListResponseType,
  ProductsType,
} from '@/types/products';
import React from 'react';
import { SearchParamsType } from './page';
import { urlToStringParser } from '@/lib/format';
import { getEStoreProductsListWithSort } from '@/app/actions/product-fetcher';

type CategoriesParams = ProductListingParamsType & {
  params: { category?: string };
};

const ECategoryProductList = async ({
  params,
  searchParams,
}: CategoriesParams & { searchParams: SearchParamsType }) => {
  const { category } = params;
  const parsed_category = urlToStringParser(category as string);

  const productsResponse: ProductsListResponseType =
    await getEStoreProductsListWithSort({
      queryParams: { params },
      categoryParams: parsed_category,
      searchParams,
    });

  return <Products productsResponse={productsResponse} params={params} />;
};

export default ECategoryProductList;
