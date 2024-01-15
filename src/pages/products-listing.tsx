import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import MainLayout from '@/components/layout/MainLayout';
import ProductsListLayout from '@/components/layout/product-layout/ProductsListLayout';
import Pagination from '@/components/product/Pagination';
import TrendingProducts from '@/components/sections/products-listing/TrendingProducts';
import { products } from '@/constants/products';
import { randomProducts } from '@/constants/random-products';
import { cn } from '@/lib/utils';
import { StarIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const breadcrumbs = [
  {
    label: 'Products Listing',
    path: '/products-listing',
  },
];

const ProductsListingPage = () => {
  return (
    <MainLayout>
      <div className='bg-white'>
        <div className='pb-8 pt-6 sm:pb-16'>
          <Breadcrumbs items={breadcrumbs} />
          <div>
            <h2 className='sr-only'>Products</h2>

            <ProductsListLayout
              title='New Arrivals🔥'
              description='Checkout out the latest release of Tees, new and improved with four openings!'
            >
              <div className='-mx-px grid grid-cols-2 border-l border-t border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4'>
                {randomProducts.map((product) => (
                  // Single product item view
                  <Link
                    href={`/product-detail/${product.id}`}
                    key={product.id}
                    className='group relative border-b border-r border-gray-200 p-4 sm:p-4'
                  >
                    <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75'>
                      <Image
                        src={product.images[0].imageSrc}
                        alt={product.images[0].imageAlt}
                        height={500}
                        width={250}
                        className='h-40 w-full object-cover object-center sm:h-48'
                      />
                    </div>
                    <div className='pb-0 pt-4 text-start sm:pb-2'>
                      <h3 className='line-clamp-2 text-sm font-medium text-gray-900'>
                        <span>
                          <span
                            aria-hidden='true'
                            className='absolute inset-0'
                          />
                          {product.name}
                        </span>
                      </h3>
                      <p className='line-clamp-1 text-xs text-gray-500'>
                        {product.description}
                      </p>
                      <div className='mt-2 flex flex-col items-start justify-center'>
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
                      </div>
                      <p className='mt-2 text-sm font-semibold text-gray-900'>
                        {product.price}
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
    </MainLayout>
  );
};

export default ProductsListingPage;
