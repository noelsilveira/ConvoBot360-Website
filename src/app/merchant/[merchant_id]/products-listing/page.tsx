import { CategoryType, ProductsType } from '@/types/products';
import React, { Suspense } from 'react';
import { getCategories, getProducts } from './fetcher';

import Pagination from '@/components/product/Pagination';
import ProductsList from './ProductsList';
import ProductsListLayout from '@/components/layout/product-layout/ProductsListLayout';

const ProductsListingPage = async ({
  params,
  searchParams
}: {
  params: { merchant_id: string };
  searchParams: { [key: string]: string | null }
}) => {

  // const products: ProductsType[] = await getProducts({ searchParams })

  const products: ProductsType[] = await getProducts({ filterParam: {} })
  const categories: CategoryType[] = await getCategories()
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
            {/* Products lists */}
            <Suspense fallback={<p>Loading feed...</p>}>
              <ProductsListLayout categories={categories}>
                <ProductsList filter={searchParams.filter} params={params} productList={products} />
                <Pagination />
              </ProductsListLayout>
            </Suspense>
          </div>
        </div>
      </div>


      {/* <TrendingProducts /> */}

    </>
  );
};

export default ProductsListingPage;
