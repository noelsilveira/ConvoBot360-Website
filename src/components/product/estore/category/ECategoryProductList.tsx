import {
  ProductListingParamsType,
  ProductsListResponseType,
  ProductsType,
} from '@/types/products';
import React from 'react';
import { SearchParamsType } from '../../../../app/merchant/[merchant_id]/estore-products/[category]/page';
import { urlToStringParser } from '@/lib/format';
import { getEStoreProductsListWithSort } from '@/app/actions/product-fetcher';
import Products from '@/components/product/estore/Products';
import InfiniteScrollProducts from '../InfiniteScrollProducts';
import EStoreSearchProductsError from '@/app/(next-update)/collections/[branch_id]/estore-products/EStoreSearchProductsError';

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

  const products = productsResponse.detail;
  const filteredProducts = productsResponse;

  const noItemsMessage = filteredProducts.detail.length
    ? String(filteredProducts)
    : 'No Items Found';

  return (
    <>
      {filteredProducts &&
      filteredProducts.total_products > 0 &&
      noItemsMessage !== 'No Items Found' ? (
        <>
          <Products productsResponse={productsResponse} params={params} />
          <InfiniteScrollProducts
            searchParams={searchParams}
            initialProducts={filteredProducts}
          />
        </>
      ) : (
        <EStoreSearchProductsError products={products} />
      )}
    </>
  );
};

export default ECategoryProductList;
