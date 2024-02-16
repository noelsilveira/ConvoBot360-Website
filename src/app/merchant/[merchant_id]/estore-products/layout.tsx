import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import React from 'react';
import EStoreProductsLayout from './EStoreProductsLayout';
import { ProductListingParamsType } from '../products-listing/page';
import { urlToStringParser } from '@/lib/format';
import SearchProduct from '@/components/product/SearchProduct';

const ProductsPageLayout = ({
  children,
  params,
}: ProductListingParamsType & { children: React.ReactNode }) => {
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
        <div className='pb-8 pt-4 sm:pb-16 sm:pt-6'>
          <Breadcrumbs items={breadcrumbs} />
          <div>
            <h2 className='sr-only'>Products</h2>

            <EStoreProductsLayout params={params}>
              {/* Products lists */}
              {children}
              {/* <EProductList params={params} /> */}
              {/* <Pagination /> */}
            </EStoreProductsLayout>
          </div>
        </div>
        {/* <TrendingProducts /> */}
      </div>
    </>
  );
};

export default ProductsPageLayout;
