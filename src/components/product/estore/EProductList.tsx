import {
  ProductListingParamsType,
  ProductSearchTooShortType,
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
  const products: ProductsType[] | ProductSearchTooShortType[] | string =
    await getEStoreProductsListWithSort({
      queryParams: { params },
      searchParams: searchParams,
    });

  const filteredProducts = products as ProductsType[];

  const noItemsMessage = JSON.stringify(filteredProducts);

  return (
    <>
      <SearchProductsError products={products} />

      {filteredProducts.length > 0 && noItemsMessage !== '"No Items Found"' ? (
        <>
          <Products
            branch_id={branch_id}
            params={params}
            products={filteredProducts}
          />
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
  const productResponse = JSON.stringify(products);
  const noItemsMessage = '"No Items Found"';

  const tooShortObject = products.at(0) as ProductSearchTooShortType;

  return (
    <>
      {productResponse === noItemsMessage && (
        <div className='flex flex-col items-center justify-center py-6'>
          <p className='text-center text-sm text-gallery-500'>
            No items found!
          </p>
          <p className='mt-4 text-center text-sm text-gallery-500'>
            Try searching some other product
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
