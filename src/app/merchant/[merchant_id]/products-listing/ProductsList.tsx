'use client'

import { useParams, useSearchParams } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link'
import { ProductsType } from '@/types/products'
import React from 'react'
import { getProducts } from './fetcher'
import useSWR from 'swr'

const ProductsList = () => {
    const searchParams = useSearchParams()
    const filter = searchParams.get('filter')
    const params = useParams()
    const { data, isLoading, error } = useSWR('products', () => getProducts(filter))
    const products: ProductsType[] = data

    return (
        <div className='-mx-px grid grid-cols-2 border-l border-t border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4'>
            {isLoading && <p>Loading products...</p>}
            {products && products.map((product) => (
                // Single product item view
                <Link
                    href={`/merchant/${params.merchant_id}/product/product-detail/${product.id}`}
                    key={product.id}
                    className='group relative border-b border-r border-gray-200 p-4 sm:p-4'
                >
                    <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75'>
                        <Image
                            src={product.image_link == null ? '' : product.image_link}
                            alt={product.title}
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
                                {product.title}
                            </span>
                        </h3>
                        {/* <p className='line-clamp-1 text-xs text-gray-500'>
                            {product.description}
                        </p> */}
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
                            {product.price}
                        </p>
                        <p>{product.category}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductsList