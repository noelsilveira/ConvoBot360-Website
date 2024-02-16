'use client';

import { ProductsType } from '@/types/products';
import Image from 'next/image';
import React, { useState } from 'react';

const ProductListingImage = ({
  image_link,
  title,
}: ProductsType['image_link']) => {
  const productIcon = '/assets/product/package-icon.png';
  const [errorImage, setErrorImage] = useState(productIcon);
  return (
    <Image
      loading='lazy'
      onError={() => setErrorImage(productIcon)}
      src={image_link == null ? errorImage : image_link}
      alt={title}
      height={500}
      width={250}
      className='h-40 w-full object-cover object-center sm:h-48'
    />
  );
};

export default ProductListingImage;
