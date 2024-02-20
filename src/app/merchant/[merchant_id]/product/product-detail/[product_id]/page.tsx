import { API_BASE_URL } from '@/constants/urls';
import Link from 'next/link';

import { ProductsType } from '@/types/products';
import React from 'react';
import BackButton from '@/components/product/detail/BackButton';
import ProductDetailImage from '@/components/product/detail/ProductDetailImage';
import AddToCartForm from '@/components/product/detail/AddToCart';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const ProductDetailPage = async ({
  params,
}: {
  params: { product_id: string; merchant_id: string };
}) => {
  const branch_id = cookies().get('branch_id');

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

  return (
    <>
      <div className='bg-white'>
        <div className='pb-8 pt-2 sm:pb-6'>
          <BackButton />
          <div className='mx-auto mt-2 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8'>
              {/* Image gallery */}
              <div className='mt-2 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0'>
                <h2 className='sr-only'>Images</h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8'>
                  {/* Image with backup view */}
                  <ProductDetailImage product={product} />
                </div>
              </div>

              {/* Title and price */}
              <article className='mt-4 lg:col-span-5 lg:col-start-8'>
                <div className='flex justify-between'>
                  <div className='flex flex-col justify-start gap-1'>
                    <h1 className='line-clamp-1 text-xl font-semibold capitalize text-gallery-900 md:text-2xl'>
                      {product.title}
                    </h1>
                    <p className='text-base font-semibold text-gallery-500 md:text-xl'>
                      {`${product.currency}${' '}${product.price}`}
                    </p>
                    <h3 className='text-sm text-gallery-500'>
                      {product.category}
                    </h3>
                  </div>
                </div>
              </article>

              <div className='mt-0 lg:col-span-5'>
                {/* Size picker */}
                <div className='mt-2'>
                  <div className='flex items-center justify-between'>
                    <h2 className='text-sm font-medium text-gray-900'>
                      Availability:
                      <span className='ml-1 text-sm font-medium capitalize text-brand-600 hover:text-brand-500'>
                        {product.availability}
                      </span>
                    </h2>
                  </div>
                </div>
                {branch_id?.value && (
                  <AddToCartForm
                    product={product}
                    branch_id={branch_id.value}
                    product_id={params.product_id}
                  />
                )}

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
