import {
  ProductListingParamsType,
  ProductSearchTooShortType,
  ProductsType,
} from '@/types/products';

import Products from './Products';
import React from 'react';
import { getEStoreProductsListWithSort } from '../../../(deprecated)/products-listing/fetcher';
import InfiniteScrollProducts from './InfiniteScrollProducts';

const EProductList = async ({
  params,
  searchParams,
}: ProductListingParamsType) => {
  const products: ProductsType[] | ProductSearchTooShortType[] | string =
    await getEStoreProductsListWithSort({
      queryParams: { params },
      searchParams: searchParams,
    });

  const filteredProducts = products as ProductsType[];

  return (
    <>
      <SearchProductsError products={products} />

      {filteredProducts.length > 1 ? (
        <>
          <Products params={params} products={filteredProducts} />
          <InfiniteScrollProducts
            searchParams={searchParams}
            initialProducts={filteredProducts}
          />
        </>
      ) : (
        <></>
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
  const noItemsMessage = 'No Items Found';

  const tooShortObject = products.at(0) as ProductSearchTooShortType;

  return (
    <>
      {products === noItemsMessage && (
        <div className='flex flex-col items-center justify-center py-6'>
          <p className='text-center text-sm text-gallery-500'>
            {noItemsMessage}
          </p>
        </div>
      )}
      {tooShortObject.type === 'string_too_short' && (
        <div className='flex flex-col items-center justify-center py-6'>
          <p className='text-center text-sm text-gallery-500'>
            {tooShortObject.msg}
          </p>
        </div>
      )}
    </>
  );
};
