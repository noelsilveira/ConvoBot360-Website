import {
  ProductListingParamsType,
  ProductsListResponseType,
  ProductsType,
} from '@/types/products';

import Link from 'next/link';
import ProductListImage from './ProductListImage';
import ProductAddToCartButtonWithModal from './ProductAddToCartButtonWithModal';
import React from 'react';

const Products = ({
  productsResponse,
  params,
}: ProductListingParamsType & {
  productsResponse: ProductsListResponseType;
}) => {
  const products = productsResponse.detail;
  console.log(
    'Products in Products component: ',
    productsResponse.detail.length
  );
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
                  </Link>

                  <div className='flex items-start justify-between pb-0 pt-2 sm:pb-2'>
                    <div className='flex w-full flex-col text-start'>
                      <h3 className='line-clamp-1 text-sm font-medium capitalize text-gray-950'>
                        <span>{product.title}</span>
                      </h3>

                      <p className='mt-1 text-xs font-semibold text-gallery-500'>
                        {product.currency} {product.price}
                      </p>
                      {product.category && (
                        <p className='text-xs font-medium text-gallery-400'>
                          {product.category}
                        </p>
                      )}
                    </div>

                    <div className='flex flex-1 flex-col items-end justify-end'>
                      <ProductAddToCartButtonWithModal product={product} />
                    </div>
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
