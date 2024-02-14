import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import ProductsListLayout from '@/components/layout/product-layout/ProductsListLayout';
import React from 'react';
import ProductsList from '../products-listing/ProductsList';
import Pagination from '@/components/product/Pagination';
import TrendingProducts from '@/components/sections/products-listing/TrendingProducts';
import { API_BASE_URL } from '@/constants/urls';
import { ProductsType } from '@/types/products';
import RefinementList from '@/components/product/RefinementList';
import { SortOptions } from '@/components/product/SortProducts';

export type ProductListingParamsType = {
  params: {
    product_id: string;
    merchant_id: string;
    sortBy?: SortOptions;
    searchParams?: { [key: string]: string | string[] | undefined };
  };
};

const getProducts = async ({ params }: ProductListingParamsType) => {
  const response = await fetch(
    `${API_BASE_URL}/estore/product-details/${params.product_id}`,
    {
      method: 'POST',
      redirect: 'follow',
      next: {
        revalidate: 5, //cache data for 5 second
      },
    }
  );
  const data = await response.json();
  return data;
};

const TestProductListingPage = async ({ params }: ProductListingParamsType) => {
  const product: ProductsType = await getProducts({ params });
  // console.log('detail: ', product);
  const baseMerchantPath = `/merchant/${params.merchant_id}`;
  const breadcrumbs = [
    {
      label: 'Merchant',
      path: baseMerchantPath,
    },
    {
      label: 'Products',
      path: `${baseMerchantPath}/products-listing`,
    },
    {
      label: `${product.title}`,
      path: `${baseMerchantPath}/product/product-detail/${product.id}`,
      slug: '/product-detail/product-id-or-name',
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
              <ProductsList />
              <Pagination />
            </ProductsListLayout>
          </div>
        </div>
        <TrendingProducts />
      </div>
    </>
  );
};

export default TestProductListingPage;
