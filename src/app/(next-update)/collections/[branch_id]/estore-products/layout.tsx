import EStoreProductsLayout from './EStoreProductsLayout';
import React from 'react';
import { ProductListingParamsType } from '@/types/products';

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
        <div className='py-2 sm:pb-16 sm:pt-6'>
          <div>
            <h2 className='sr-only'>Products</h2>

            <EStoreProductsLayout params={params}>
              {/* Products lists */}
              {children}

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
