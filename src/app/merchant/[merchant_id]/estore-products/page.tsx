import { ProductsType } from '@/types/products';
import React from 'react';
import { getProducts } from '../products-listing/fetcher';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import ProductsListLayout from '@/components/layout/product-layout/ProductsListLayout';
import ProductsList from '../products-listing/ProductsList';
import TrendingProducts from '@/components/sections/products-listing/TrendingProducts';
import EProductList from './EProductList';
import EStoreProductsLayout from './EStoreProductsLayout';

const EStoreProductsPage = async ({
  params,
}: {
  params: { merchant_id: string };
}) => {
  return (
    <>
      <EProductList params={params} />
      {/* <Pagination /> */}
    </>
  );
};

export default EStoreProductsPage;
