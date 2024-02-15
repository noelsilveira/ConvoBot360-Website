import { branch_id, policies } from '@/constants/products';

import { API_BASE_URL } from '@/constants/urls';
import AddToCartForm from './AddToCart';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';
import Perks from '@/components/product/Perks';
import { ProductsType } from '@/types/products';
import React from 'react';
import Reviews from '@/components/product/Reviews';
import { cn } from '@/lib/utils';
import ProductDetailImage from './ProductDetailImage';

const ProductDetailPage = async ({
  params,
}: {
  params: { product_id: string; merchant_id: string };
}) => {
  const res = await fetch(
    `${API_BASE_URL}/estore/product-details/${params.product_id}`,
    {
      method: 'POST',
      redirect: 'follow',
      next: {
        revalidate: 5, //cache data for 5 second
      },
    }
  );
  const product: ProductsType = await res.json();
  // console.log('detail: ', product);
  const baseMerchantPath = `/merchant/${params.merchant_id}`;

  const breadcrumbs = [
    {
      label: 'Merchant',
      path: baseMerchantPath,
    },
    {
      label: 'Products',
      path: `${baseMerchantPath}/estore-products`,
    },
    {
      label: `${product.title}`,
      path: `${baseMerchantPath}/product/product-detail/${product.id}`,
      slug: '/product-detail/product-id-or-name',
    },
  ];

  return (
    <>
      {/* <MainLayout title={`Buy ${product.name} | CB360 - Ultimate shopping`}> */}
      <div className='bg-white'>
        <div className='pb-8 pt-6 sm:pb-6'>
          <Breadcrumbs items={breadcrumbs} />
          <div className='mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8'>
              <div className='lg:col-span-5 lg:col-start-8'>
                <div className='flex justify-between'>
                  <div className='flex flex-col justify-start gap-2'>
                    <h1 className='text-2xl font-medium capitalize text-gray-900'>
                      {product.title}
                    </h1>
                    <p className='text-sm text-neutral-400'>
                      {product.google_product_category}
                    </p>
                    {/* <span className='w-fit rounded bg-neutral-200 px-2 py-1 text-xs'>
                      {product.custom_label_0}
                    </span> */}
                  </div>
                  <p className='text-xl font-medium text-gray-900'>
                    {`${product.currency}${' '}${product.price}`}
                  </p>
                </div>
              </div>

              {/* Image gallery */}
              <div className='mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0'>
                <h2 className='sr-only'>Images</h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8'>
                  {/* Image with backup view */}
                  <ProductDetailImage product={product} />
                </div>
              </div>

              <div className='mt-0 lg:col-span-5'>
                {/* Size picker */}
                <div className='mt-6'>
                  <div className='flex items-center justify-between'>
                    <h2 className='text-sm font-medium text-gray-900'>
                      Availability:
                      <span className='ml-1 text-sm font-medium capitalize text-brand-600 hover:text-brand-500'>
                        {product.availability}
                      </span>
                    </h2>

                    {/* <a
                        href='#'
                        className='text-sm font-medium capitalize text-brand-600 hover:text-brand-500'
                      >
                        {product.availability}
                      </a> */}
                  </div>
                </div>
                <AddToCartForm
                  branch_id={branch_id}
                  product_id={params.product_id}
                />

                {/* Product details */}
                <div className='mt-8'>
                  <h2 className='text-sm font-medium text-gray-900'>
                    Description
                  </h2>

                  <div
                    className='prose prose-sm mt-4 text-gray-500'
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                  <div className='mt-6 flex flex-col justify-start gap-2 border-t border-gray-200 pt-6'>
                    <p className='text-sm capitalize text-gray-500'>
                      Condition: {product.condition}
                    </p>
                    <p className='text-sm capitalize text-gray-500'>
                      Brand: {product.brand}
                    </p>
                    <Link
                      href={product.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sm text-blue-500'
                    >
                      See more: {product.link}
                    </Link>
                  </div>
                </div>

                <div className='mt-6 border-t border-gray-200 pt-6'>
                  <h2 className='text-sm font-medium capitalize text-gray-900'>
                    {product.fb_product_category}
                  </h2>
                </div>

                {/* Policies */}
                <section aria-labelledby='policies-heading' className='mt-6'>
                  <h2 id='policies-heading' className='sr-only'>
                    Our Policies
                  </h2>

                  <dl className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'>
                    {policies.map((policy) => (
                      <div
                        key={policy.name}
                        className='rounded-lg border border-gray-200 bg-gray-50 p-6 text-center'
                      >
                        <dt>
                          <policy.icon
                            className='mx-auto h-6 w-6 flex-shrink-0 text-gray-400'
                            aria-hidden='true'
                          />
                          <span className='mt-4 text-sm font-medium text-gray-900'>
                            {policy.name}
                          </span>
                        </dt>
                        <dd className='mt-1 text-sm text-gray-500'>
                          {policy.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              </div>
            </div>
          </div>
        </div>
        <Perks />
        <Reviews />
      </div>
    </>
  );
};

export default ProductDetailPage;
