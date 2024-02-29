'use client';

import { cn } from '@/lib/utils';
import { ProductsType } from '@/types/products';
import Image from 'next/image';
import React, { useState } from 'react';

const ProductDetailImage = ({ product }: { product: ProductsType }) => {
  const [backupImage, setBackupImage] = useState(product.image_link);
  const noImage = 'https://cdn.convobot360.com/images/fallback.png';
  return (
    <Image
      height={800}
      width={800}
      onError={() => setBackupImage(noImage)}
      src={backupImage == null ? noImage : backupImage}
      alt={product.title}
      className={cn(
        'h-full max-h-[30vh] w-full rounded-3xl object-cover lg:col-span-2 lg:row-span-2 lg:block'
      )}
    />
  );
};

export default ProductDetailImage;
