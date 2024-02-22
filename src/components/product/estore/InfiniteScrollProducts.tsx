'use client';

import { getEStoreProductsListWithSort } from '@/app/actions/product-fetcher';
import { ProductsListResponseType, ProductsType } from '@/types/products';
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
  initialProducts: ProductsListResponseType;
  searchParams: SearchParamsType | undefined;
}) => {
  const [products, setProducts] = useState(initialProducts);
  const [noProductsMessage, setNoProductsMessage] = useState('');
  const [page, setPage] = useState(initialProducts.current_page);
  const { ref, inView, entry } = useInView();
  const params = useParams();

  async function loadMoreProducts() {
    const next = page + 1;
    const last = products.last_page;
    const curr = products.current_page;
    if (next > 1 && next < last) {
      const productsResponse = await getEStoreProductsListWithSort({
        page: next,
        searchParams: searchParams,
      });

      if (
        productsResponse?.detail.length &&
        String(productsResponse) !== 'No Items Found'
      ) {
        setPage(next);
        setProducts((prev: ProductsListResponseType | undefined) => ({
          ...prev,
          total_products: productsResponse.total_products,
          current_page: productsResponse.current_page,
          last_page: productsResponse.last_page,
          detail: prev
            ? [...prev!.detail, ...productsResponse.detail]
            : productsResponse.detail,
        }));
      }
    }
  }

  useEffect(() => {
    setNoProductsMessage(String(products));
  }, [products]);

  useEffect(() => {
    if (inView) {
      loadMoreProducts();
    }
  }, [inView, searchParams]);

  return (
    <>
      {products.current_page < products.last_page && (
        <Products params={params} productsResponse={products} />
      )}
      {products.current_page === products.last_page && (
        <div className='flex w-full flex-col items-center justify-center space-y-2 py-16'>
          <span className='text-center text-base font-medium text-gallery-300'>
            No more products
          </span>
          <Link href={'#e-store-heading'} className='text-sm text-gallery-400'>
            Go to top
          </Link>
        </div>
      )}
      {/* Loading spinner */}
      {products.current_page < products.last_page && (
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
      )}
    </>
  );
};

export default InfiniteScrollProducts;
