import { CategoryType, ProductsType } from '@/types/products';
import React, { Suspense } from 'react';
import { getCategories, getProducts } from './fetcher';

import Pagination from '@/components/product/Pagination';
import ProductsList from './ProductsList';
import ProductsListLayout, {
  ProductListingParamsType,
} from '@/components/layout/product-layout/ProductsListLayout';
import TrendingProducts from '@/components/sections/products-listing/TrendingProducts';
import { cookies } from 'next/headers';
import { setHeaders } from '@/app/auth/set-headers';

const ProductsListingPage = async ({
  params,
  // searchParams
}: ProductListingParamsType) => {
  // const products: ProductsType[] = await getProducts({ searchParams })

  const products: ProductsType[] = await getProducts({ filterParam: {} });
  const categories: CategoryType[] = await getCategories();
  // console.log('products: ', products);
  const baseMerchantPath = `/merchant/${params.merchant_id}`;
  const breadcrumbs = [
    {
      label: 'Merchant',
      path: baseMerchantPath,
    },
    {
      label: 'Products Listing',
      path: `${baseMerchantPath}/products-listing`,
    },
  ];
  return (
    <>
      <div className='bg-white'>
        <div className='pb-8 pt-6 sm:pb-16'>
          {/* <Breadcrumbs items={breadcrumbs} /> */}
          <div>
            <h2 className='sr-only'>Products</h2>

            <ProductsListLayout categories={categories} params={params}>
              {/* Products lists */}
              <ProductsList params={params} productList={products} />
              <Pagination />
            </ProductsListLayout>
          </div>
        </div>
      </div>

      {/* <TrendingProducts /> */}
    </>
  );
};

export default ProductsListingPage;
