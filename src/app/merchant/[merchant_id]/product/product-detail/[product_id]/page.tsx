import React, { useEffect, useState } from 'react';

import { API_BASE_URL } from '@/constants/urls';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import MainLayout from '@/components/layout/MainLayout';
import Perks from '@/components/product/Perks';
import { ProductsType } from '@/types/products';
import { RadioGroup } from '@headlessui/react';
import Reviews from '@/components/product/Reviews';
import { StarIcon } from '@heroicons/react/20/solid';
import { cn } from '@/lib/utils';
import { policies } from '@/constants/products';
import { randomProducts } from '@/constants/random-products';

// import { useRouter } from 'next/router';
// import { useCartStore } from '@/store/cartStore';




const breadcrumbs = [
  {
    label: 'Products Listing',
    path: '/products-listing',
  },
  {
    label: 'Basic Tee',
    path: '/product-detail/12',
    slug: '/product-detail/product-id-or-name',
  },
];

const ProductDetailPage = async ({ params }: { params: { product_id: string } }) => {

  const res = await fetch(`${API_BASE_URL}/estore/product-details/${params.product_id}`, {
    method: 'POST',
    redirect: 'follow',
    // body: raw,
    // headers: myHeaders,
    next: {
      revalidate: 5, //cache data for 5 second
    }
  });
  const product: ProductsType = await res.json();

  return (
    <>
      {/* <MainLayout title={`Buy ${product.name} | CB360 - Ultimate shopping`}> */}
      <div className='bg-white'>
        <div className='pb-16 pt-6 sm:pb-24'>
          <Breadcrumbs items={breadcrumbs} />
          <div className='mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8'>
              <div className='lg:col-span-5 lg:col-start-8'>
                <div className='flex justify-between'>
                  <h1 className='text-xl font-medium text-gray-900'>
                    {product.title}
                  </h1>
                  <p className='text-xl font-medium text-gray-900'>
                    {product.price}
                  </p>
                </div>
                {/* Reviews */}
                {/* <div className='mt-4'>
                  <h2 className='sr-only'>Reviews</h2>
                  <div className='flex items-center'>
                    <p className='text-sm text-gray-700'>
                      {product.rating}
                      <span className='sr-only'> out of 5 stars</span>
                    </p>
                    <div className='ml-1 flex items-center'>
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={cn(
                            product.rating > rating
                              ? 'text-yellow-400'
                              : 'text-gray-200',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden='true'
                        />
                      ))}
                    </div>
                    <div
                      aria-hidden='true'
                      className='ml-4 text-sm text-gray-300'
                    >
                      ·
                    </div>
                    <div className='ml-4 flex'>
                      <a
                        href='#'
                        className='text-sm font-medium text-brand-600 hover:text-brand-500'
                      >
                        See all {product.reviewCount} reviews
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Image gallery */}
              <div className='mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0'>
                <h2 className='sr-only'>Images</h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8'>
                  {/* {product.images.map((image) => ( */}
                  <img
                    // key={image.id}
                    src={product.image_link}
                    alt={product.title}
                    className={cn(
                      product.image_link
                        ? 'h-full max-h-[70vh] w-full lg:col-span-2 lg:row-span-2'
                        : 'hidden h-full lg:block',
                      'rounded-lg object-cover'
                    )}
                  />
                  {/* ))} */}
                </div>
              </div>

              <div className='mt-8 lg:col-span-5'>
                <form>
                  {/* Color picker */}
                  {/* <div>
                    <h2 className='text-sm font-medium text-gray-900'>Color</h2>

                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className='mt-2'
                    >
                      <RadioGroup.Label className='sr-only'>
                        Choose a color
                      </RadioGroup.Label>
                      <div className='flex items-center space-x-3'>
                        {product.colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                              cn(
                                color.selectedColor,
                                active && checked ? 'ring ring-offset-1' : '',
                                !active && checked ? 'ring-2' : '',
                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                              )
                            }
                          >
                            <RadioGroup.Label as='span' className='sr-only'>
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              aria-hidden='true'
                              className={cn(
                                color.bgColor,
                                'h-8 w-8 rounded-full border border-black border-opacity-10'
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div> */}

                  {/* Size picker */}
                  <div className='mt-8'>
                    <div className='flex items-center justify-between'>
                      <h2 className='text-sm font-medium text-gray-900'>
                        Size
                      </h2>
                      <a
                        href='#'
                        className='text-sm font-medium text-brand-600 hover:text-brand-500'
                      >
                        See sizing chart
                      </a>
                    </div>

                    {/* <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className='mt-2'
                    >
                      <RadioGroup.Label className='sr-only'>
                        Choose a size
                      </RadioGroup.Label>
                      <div className='grid grid-cols-3 gap-3 sm:grid-cols-6'>
                        {product.sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size}
                            className={({ active, checked }) =>
                              cn(
                                size.inStock
                                  ? 'cursor-pointer focus:outline-none'
                                  : 'cursor-not-allowed opacity-25',
                                active
                                  ? 'ring-2 ring-brand-500 ring-offset-2'
                                  : '',
                                checked
                                  ? 'border-transparent bg-brand-500 text-white hover:bg-brand-600'
                                  : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
                                'flex items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase sm:flex-1'
                              )
                            }
                            disabled={!size.inStock}
                          >
                            <RadioGroup.Label as='span'>
                              {size.name}
                            </RadioGroup.Label>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup> */}
                  </div>

                  <button
                    // type='submit'
                    // href={`/checkout/cart`}
                    // onClick={() => {
                    //   addCartItem(product);
                    // }}
                    className='mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-brand-500 px-8 py-3 text-base font-medium text-white hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'
                  >
                    Add to cart
                  </button>
                </form>

                {/* Product details */}
                <div className='mt-10'>
                  <h2 className='text-sm font-medium text-gray-900'>
                    Description
                  </h2>

                  <div
                    className='prose prose-sm mt-4 text-gray-500'
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>

                <div className='mt-8 border-t border-gray-200 pt-8'>
                  <h2 className='text-sm font-medium text-gray-900'>
                    Fabric &amp; Care
                  </h2>

                  {/* <div className='prose prose-sm mt-4 text-gray-500'>
                    <ul role='list'>
                      {product.details.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div> */}
                </div>

                {/* Policies */}
                <section aria-labelledby='policies-heading' className='mt-10'>
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

// export async function getServerSideProps(ctx: {
//   query: { productId: string };
// }) {
//   const { productId } = ctx.query;

//   return {
//     props: {
//       productId,
//     },
//   };
// }
