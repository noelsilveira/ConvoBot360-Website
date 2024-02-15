import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProductListingParamsType, ProductsType } from '@/types/products';
import ProductListImage from './ProductListImage';
import { cn } from '@/lib/utils';

const Products = ({
  products,
  params,
}: ProductListingParamsType & { products: ProductsType[] }) => {
  return (
    <div className='bg-white'>
      <div className='pb-8 pt-6 sm:pb-16'>
        {/* <Breadcrumbs items={breadcrumbs} /> */}
        <div>
          <div className='-mx-px grid grid-cols-2 border-l border-t border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4'>
            {/* {isLoading && <p>Loading products...</p>} */}
            {products &&
              products.map((product, index) => (
                // Single product item view
                <div
                  key={'product-id-' + product.id + index}
                  className='relative border-b border-r border-gray-200 p-4 sm:p-3'
                >
                  <Link
                    href={`/merchant/${params.merchant_id}/product/product-detail/${product.id}`}
                  >
                    <div className='aspect-h-1 aspect-w-1 group overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75'>
                      {/* Image with broken url */}
                      <ProductListImage product={product} />
                    </div>
                    <div className='pb-0 pt-4 text-start sm:pb-2'>
                      <h3 className='line-clamp-2 text-sm font-medium capitalize text-gray-900'>
                        <span>
                          <span
                            aria-hidden='true'
                            className='absolute inset-0'
                          />
                          {product.title}
                        </span>
                      </h3>

                      <p className='mt-2 text-sm font-semibold text-gray-900'>
                        {product.price} {product.currency}
                      </p>
                      {product.category && (
                        <p className='text-xs'>{product.category}</p>
                      )}
                    </div>
                  </Link>
                  <div className='flex w-full items-center justify-between'>
                    <p className='h-fit rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium capitalize text-emerald-700'>
                      {product?.availability}
                    </p>
                    <button
                      type='button'
                      disabled={!product.availability ? false : true}
                      className={cn(
                        'rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium duration-150 ease-out hover:border-gray-400 hover:bg-gray-100',
                        !product.availability
                          ? 'opacity-100'
                          : 'cursor-not-allowed opacity-40'
                      )}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
