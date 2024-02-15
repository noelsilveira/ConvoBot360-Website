import { API_BASE_URL } from '@/constants/urls';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';
import Pagination from '@/components/product/Pagination';
import ProductsList from './ProductsList';
import ProductsListLayout from '@/components/layout/product-layout/ProductsListLayout';
import { ProductsType } from '@/types/products';
import React from 'react';
import TrendingProducts from '@/components/sections/products-listing/TrendingProducts';
import { cookies } from 'next/headers';
import { getProducts } from './fetcher';
import { setOTPHeaders } from '@/app/auth/set-headers';
import { SortOptions } from '@/components/product/SortProducts';

export type ProductListingParamsType = {
  params: {
    product_id?: string;
    merchant_id?: string;
    sortBy?: SortOptions;
    category?: string;
    searchParams?: { [key: string]: string | string[] | undefined };
  };
};

const ProductsListingPage = async ({ params }: ProductListingParamsType) => {
  const products: ProductsType[] = await getProducts({ filterParam: {} });

  // console.log('products: ', products);
  const baseMerchantPath = `/merchant/${params.merchant_id}`;
  const breadcrumbs = [
    {
      label: 'Merchant',
      path: baseMerchantPath,
    },
    {
      label: 'Products Listing',
      path: `${baseMerchantPath}/estore-products`,
    },
  ];
  return (
    <>
      <div className='bg-white'>
        <div className='pb-8 pt-6 sm:pb-16'>
          <Breadcrumbs items={breadcrumbs} />
          <div>
            <h2 className='sr-only'>Products</h2>

            <ProductsListLayout params={params}>
              {/* Products lists */}
              <ProductsList params={params} productList={products} />
              <Pagination />
            </ProductsListLayout>
          </div>
        </div>
        <TrendingProducts />
      </div>
    </>
  );
};

export default ProductsListingPage;
