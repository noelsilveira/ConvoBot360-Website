'use client';

import { getEStoreProductsListWithSort } from '@/app/(deprecated)/products-listing/fetcher';
import { ProductsType } from '@/types/products';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { SearchParamsType } from './[category]/page';
import Products from './Products';

const InfiniteScrollProducts = ({
  initialProducts,
  searchParams,
}: {
  initialProducts: ProductsType[];
  searchParams: SearchParamsType | undefined;
}) => {
  const [products, setProducts] = useState(initialProducts);
  const [page, setPage] = useState(1);
  const { ref, inView, entry } = useInView();
  const params = useParams();

  async function loadMoreProducts() {
    const next = page + 1;
    const products = await getEStoreProductsListWithSort({
      page: next,
      searchParams,
    });
    if (products?.length) {
      setPage(next);
      setProducts((prev: ProductsType[] | undefined) => [
        ...(prev?.length ? prev : []),
        ...products,
      ]);
    }
  }

  useEffect(() => {
    if (inView) {
      loadMoreProducts();
    }
  }, [inView]);

  return (
    <>
      <Products params={params} products={products} />
      {/* Loading spinner */}
      {products.length < 1000 ? (
        <div
          ref={ref}
          aria-label='Loading...'
          role='status'
          className='flex w-full items-center justify-center space-x-2 py-16'
        >
          <svg
            className='h-6 w-6 animate-spin stroke-gray-500'
            viewBox='0 0 256 256'
          >
            <line
              x1='128'
              y1='32'
              x2='128'
              y2='64'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></line>
            <line
              x1='195.9'
              y1='60.1'
              x2='173.3'
              y2='82.7'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></line>
            <line
              x1='224'
              y1='128'
              x2='192'
              y2='128'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></line>
            <line
              x1='195.9'
              y1='195.9'
              x2='173.3'
              y2='173.3'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></line>
            <line
              x1='128'
              y1='224'
              x2='128'
              y2='192'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></line>
            <line
              x1='60.1'
              y1='195.9'
              x2='82.7'
              y2='173.3'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></line>
            <line
              x1='32'
              y1='128'
              x2='64'
              y2='128'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></line>
            <line
              x1='60.1'
              y1='60.1'
              x2='82.7'
              y2='82.7'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></line>
          </svg>
          <span className='text-center text-base font-medium text-gallery-500'>
            Loading products...
          </span>
        </div>
      ) : (
        <div className='flex w-full items-center justify-center space-x-2 py-16'>
          <span className='text-center text-base font-medium text-gallery-500'>
            No more products
          </span>
        </div>
      )}
    </>
  );
};

export default InfiniteScrollProducts;
