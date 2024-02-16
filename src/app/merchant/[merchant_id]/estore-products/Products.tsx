import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProductListingParamsType, ProductsType } from '@/types/products';
import ProductListImage from './ProductListImage';
import { cn } from '@/lib/utils';
import { TbShoppingBagPlus } from 'react-icons/tb';

const Products = ({
  products,
  params,
}: ProductListingParamsType & { products: ProductsType[] }) => {
  return (
    <div className='bg-white'>
      <div>
        {/* <Breadcrumbs items={breadcrumbs} /> */}
        <div>
          <div className='mx-0 grid grid-cols-2 border-l border-t border-gray-200 md:-mx-px md:grid-cols-3 lg:grid-cols-4'>
            {/* {isLoading && <p>Loading products...</p>} */}
            {products &&
              products.map((product, index) => (
                // Single product item view
                <div
                  key={'product-id-' + product.id + index}
                  className='relative border-b border-r border-gray-200 p-3'
                >
                  <Link
                    href={`/merchant/${params.merchant_id}/product/product-detail/${product.id}`}
                  >
                    <div className='aspect-h-1 aspect-w-1 group overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75'>
                      {/* Image with broken url */}
                      <ProductListImage product={product} />
                    </div>
                    <div className='pb-0 pt-2 text-start sm:pb-2'>
                      <h3 className='line-clamp-2 text-sm font-medium capitalize text-gray-950'>
                        <span>{product.title}</span>
                      </h3>

                      <p className='mt-1 text-sm font-bold text-gray-900'>
                        {product.price} {product.currency}
                      </p>
                      {product.category && (
                        <p className='text-xs font-medium text-gallery-400'>
                          {product.category}
                        </p>
                      )}
                    </div>
                  </Link>
                  <div className='absolute right-4 top-4 rounded-full bg-gallery-900 px-2 py-0.5 text-[0.65rem] font-semibold text-white'>
                    <span className=''>{product.condition}</span>
                  </div>
                  <div className='absolute bottom-4 right-4'>
                    {/* <p className='h-fit rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium capitalize text-emerald-700'>
                      {product?.availability}
                    </p> */}
                    <button
                      type='button'
                      disabled={!product.availability ? false : true}
                      className={cn(
                        'cursor-pointer rounded-full bg-gallery-100 p-2 text-lg text-gallery-900 duration-150 ease-out hover:bg-gallery-200',
                        product.availability
                          ? 'opacity-100'
                          : 'cursor-not-allowed opacity-40'
                      )}
                    >
                      <TbShoppingBagPlus className='h-5 w-5' />
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
