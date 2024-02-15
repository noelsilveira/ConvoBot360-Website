'use client';
import { ProductsType } from '@/types/products';
import Image from 'next/image';
import React, { useState } from 'react';

const ProductListImage = ({ product }: { product: ProductsType }) => {
  const [backupImage, setBackupImage] = useState(product.image_link);
  const image = '/assets/product/package-icon.png';
  const noImage =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';
  return (
    <Image
      onError={() => setBackupImage(noImage)}
      src={backupImage == null ? noImage : backupImage}
      alt={product.title}
      height={500}
      width={250}
      className='h-40 w-full object-cover object-center sm:h-48'
    />
  );
};

export default ProductListImage;
