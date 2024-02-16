'use client';
import { ProductsType } from '@/types/products';
import Image from 'next/image';
import React, { useState } from 'react';

const ProductListImage = ({ product }: { product: ProductsType }) => {
  const [backupImage, setBackupImage] = useState(product.image_link);
  const image = '/assets/product/package-icon.png';
  const noImage = 'https://cdn.convobot360.com/images/fallback.png';

  return (
    <Image
      onError={() => setBackupImage(noImage)}
      src={backupImage == null ? noImage : backupImage}
      alt={product.title || 'product list image'}
      height={500}
      width={250}
      className='h-40 w-full object-cover object-center sm:h-48'
    />
  );
};

export default ProductListImage;
