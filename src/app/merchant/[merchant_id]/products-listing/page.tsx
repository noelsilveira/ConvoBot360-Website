import { API_BASE_URL } from '@/constants/urls';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';
import Pagination from '@/components/product/Pagination';
import ProductsListLayout from '@/components/layout/product-layout/ProductsListLayout';
import { ProductsType } from '@/types/products';
import React from 'react';
import TrendingProducts from '@/components/sections/products-listing/TrendingProducts';
import { cookies } from 'next/headers';
import ProductListingImage from './ProductListingImage';

const ProductsListingPage = async ({
  params,
}: {
  params: { merchant_id: string };
}) => {
  const cookieStore = cookies();
  const token = cookieStore.get('access_token');

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);
  var raw = JSON.stringify({
    branch_id: '95afc684-7ddf-491b-ae9c-226bd5e8932f',
    filters: {},
    sort: {
      price: 'asc',
      title: 'desc',
    },
  });

  const res = await fetch(API_BASE_URL + `/estore/catalog/${1}/${20}`, {
    method: 'POST',
    redirect: 'follow',
    body: raw,
    headers: myHeaders,
    next: {
      tags: ['estore-catalog'],
      revalidate: 40, //cache data for every 40 seconds
    },
  });

  const pro_obj = await res.json();
  const products: ProductsType[] = pro_obj.detail;
  console.log('products: ', products);
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
          <Breadcrumbs items={breadcrumbs} />
          <div>
            <h2 className='sr-only'>Products</h2>

            <ProductsListLayout>
              <div className='-mx-px grid grid-cols-2 border-l border-t border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4'>
                {products.map((product) => (
                  // Single product item view
                  <Link
                    href={`/merchant/${params.merchant_id}/product/product-detail/${product.id}`}
                    key={product.id}
                    className='group relative border-b border-r border-gray-200 p-4 sm:p-4'
                  >
                    <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75'>
                      {/* Product image extracted to client component  */}
                      <ProductListingImage />
                    </div>
                    <div className='pb-0 pt-4 text-start sm:pb-2'>
                      <h3 className='line-clamp-2 text-sm font-medium text-gray-900'>
                        <span>
                          <span
                            aria-hidden='true'
                            className='absolute inset-0'
                          />
                          {product.title}
                        </span>
                      </h3>
                      <p className='line-clamp-1 text-xs text-gray-500'>
                        {product.description}
                      </p>
                      {/* <div className='mt-2 flex flex-col items-start justify-center'>
                        <p className='sr-only'>
                          {product.rating} out of 5 stars
                        </p>
                        <div className='flex items-center'>
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={cn(
                                product.rating > rating
                                  ? 'text-yellow-400'
                                  : 'text-gray-200',
                                'h-4 w-4 flex-shrink-0'
                              )}
                              aria-hidden='true'
                            />
                          ))}
                        </div>
                        <p className='mt-1 text-xs text-gray-500'>
                          {product.reviewCount} reviews
                        </p>
                      </div> */}
                      <p className='mt-2 text-sm font-semibold text-gray-900'>
                        {product.price} {product.currency}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
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
