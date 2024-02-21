import EStoreProductsLayout from '@/components/product/estore/EStoreProductsLayout';
import { ProductListingParamsType } from '@/types/products';
import React from 'react';

const ProductsPageLayout = ({
  children,
  params,
}: Pick<ProductListingParamsType, 'params'> & {
  children: React.ReactNode;
}) => {
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
          <div id='e-store-heading'>
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
