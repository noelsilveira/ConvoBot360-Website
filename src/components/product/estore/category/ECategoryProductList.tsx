import { ProductListingParamsType, ProductsType } from '@/types/products';
import React from 'react';
import { SearchParamsType } from '../../../../app/merchant/[merchant_id]/estore-products/[category]/page';
import { urlToStringParser } from '@/lib/format';
import { getEStoreProductsListWithSort } from '@/app/actions/product-fetcher';
import Products from '@/components/product/estore/Products';

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
