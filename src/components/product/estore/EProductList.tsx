import {
  ProductListingParamsType,
  ProductSearchTooShortType,
  ProductsListResponseType,
  ProductsType,
} from '@/types/products';

import Products from './Products';
import React from 'react';
import InfiniteScrollProducts from './InfiniteScrollProducts';
import { getEStoreProductsListWithSort } from '@/app/actions/product-fetcher';

const EProductList = async ({
  params,
  searchParams,
  branch_id,
}: ProductListingParamsType & { branch_id?: string }) => {
  const productsResponse: ProductsListResponseType =
    await getEStoreProductsListWithSort({
      queryParams: { params },
      searchParams: searchParams,
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
          <Products
            branch_id={branch_id}
            params={params}
            productsResponse={filteredProducts}
          />
          <InfiniteScrollProducts
            searchParams={searchParams}
            initialProducts={filteredProducts}
          />
        </>
      ) : (
        <SearchProductsError products={products} />
      )}
    </>
  );
};

export default EProductList;

// Error component
const SearchProductsError = ({
  products,
}: {
  products: ProductsType[] | ProductSearchTooShortType[] | string;
}) => {
  function tooShortObject() {
    const msg = products.at(0) as ProductSearchTooShortType;
    if (msg?.type === 'string_too_short') {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      {products.length == 0 && (
        <div className='flex flex-col items-center justify-center py-6'>
          <p className='text-center text-sm text-gallery-500'>
            No items found!
          </p>
          <p className='mt-4 text-center text-sm text-gallery-500'>
            Try searching some other product
          </p>
        </div>
      )}
      {tooShortObject() && (
        <div className='flex flex-col items-center justify-center py-6'>
          <p className='text-center text-sm text-gallery-500'>
            Search should have at least 3 characters
          </p>
        </div>
      )}
    </>
  );
};
