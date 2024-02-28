'use client';
import { FALLBACK_IMAGE } from '@/constants/urls';
import { ProductsType } from '@/types/products';
import Image from 'next/image';
import React, { useEffect, useState, useTransition } from 'react';
import ProductAddToCartButtonWithModal from '../ProductAddToCartButtonWithModal';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export type ProductListViewCardType = {
  product_retailer_id: string;
  option_id: string;
  title: string;
  currency: string;
  price: number;
  quantity: number;
  option_name?: string;
};

const ProductListViewCard = ({
  product,
  branch_id,
}: {
  product: ProductsType;
  branch_id?: string;
}) => {
  const showImage = false;
  const params = useParams();
  return (
    <div className='flex w-full items-start justify-start gap-3 py-4'>
      <div className='h-16 w-16 overflow-hidden rounded-xl bg-gallery-100'>
        {product.image_link && showImage ? (
          <Image
            src={product.image_link}
            alt='ProductImage'
            height={100}
            width={100}
            className='object-cover brightness-90'
          />
        ) : (
          <Image
            src={FALLBACK_IMAGE}
            alt='Fallback image'
            height={100}
            width={100}
            className='object-cover brightness-90'
          />
        )}
      </div>
      <div className='flex flex-1 items-start justify-between'>
        <Link
          href={`/merchant/${params.merchant_id}/product/product-detail/${product.id}`}
          className='mb-4 flex flex-col gap-1'
        >
          <h2 className='line-clamp-1 text-base font-semibold capitalize'>
            {product.title}
          </h2>

          <h3 className='text-sm font-medium capitalize text-gallery-500'>
            {product.category}
          </h3>

          <p className='text-sm font-medium text-gallery-500'>
            {product.currency} {product.price}
          </p>
          {/* <p className='text-sm text-gallery-500'>{product.category}</p> */}
        </Link>
        <div className='flex flex-1 flex-col items-end justify-end pt-2'>
          <ProductAddToCartButtonWithModal
            branch_id={branch_id}
            product={product}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductListViewCard;
