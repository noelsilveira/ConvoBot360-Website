'use client';

import { getEStoreProductsListWithSort } from '@/app/actions/product-fetcher';
import { ProductsType } from '@/types/products';
import { useParams, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Products from './Products';
import { SearchParamsType } from '@/app/merchant/[merchant_id]/estore-products/[category]/page';
import Link from 'next/link';

const InfiniteScrollProducts = ({
  initialProducts,
  searchParams,
}: {
  initialProducts: ProductsType[];
  searchParams: SearchParamsType | undefined;
}) => {
  const [products, setProducts] = useState(initialProducts);
  const [noProductsMessage, setNoProductsMessage] = useState('');
  const [page, setPage] = useState(1);
  const { ref, inView, entry } = useInView();
  const params = useParams();

  async function loadMoreProducts() {
    const next = page + 1;
    if (next > 1) {
      const productsResponse = await getEStoreProductsListWithSort({
        page: next,
        searchParams: searchParams,
      });

      if (
        productsResponse?.length &&
        String(productsResponse) !== 'No Items Found'
      ) {
        setPage(next);
        setProducts((prev: ProductsType[] | undefined) => [
          ...(prev?.length ? prev : []),
          ...productsResponse,
        ]);
      }
    }
  }
  const msgChecker = noProductsMessage == 'No Items Found';
  const lengthChecker = products.length;

  useEffect(() => {
    if (inView) {
      loadMoreProducts();
    }
    setNoProductsMessage(String(products));
  }, [inView, searchParams]);

  return (
    <>
      {!msgChecker && lengthChecker && (
        <Products params={params} products={products} />
      )}
      {msgChecker && (
        <div className='flex w-full items-center justify-center space-x-2 py-16'>
          <span className='text-center text-base font-medium text-gallery-500'>
            No more products
          </span>
          <Link href={'#e-store-heading'}>Go to top</Link>
        </div>
      )}
      {/* Loading spinner */}

      {!msgChecker ? (
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
