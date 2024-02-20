'use client';
import { WhatsappProductListCardType } from '@/components/checkout/WhatsppProductListCard';
import { ProductOptionsType, ProductsType } from '@/types/products';
import React, { useEffect, useState } from 'react';
import { TbMinus, TbPlus } from 'react-icons/tb';

const WhatsappProductListInModal = ({ product }: { product: ProductsType }) => {
  const [itemQuantity, setItemQuantity] = useState(0);
  return (
    <div className='flex w-full items-center justify-between'>
      <div className='mb-4 flex flex-col gap-1'>
        <h2 className='line-clamp-1 text-xl font-semibold capitalize'>
          {product.title}
        </h2>
        <p className='text-sm font-medium text-gallery-500'>
          {product.currency} {product.price}
        </p>
        {/* <p className='text-sm text-gallery-500'>{product.category}</p> */}
      </div>
      <div className='mb-2'>
        <QuantityModifierButtons
          product={product}
          quantity={itemQuantity}
          setQuantity={setItemQuantity}
        />
      </div>
    </div>
  );
};

export default WhatsappProductListInModal;

export const WhatsappProductVariantListInModal = ({
  variant,
  product,
}: {
  variant: ProductOptionsType;
  product: ProductsType;
}) => {
  const [itemQuantity, setItemQuantity] = useState(0);

  return (
    <div className='flex w-full items-center justify-between border-b border-gallery-50'>
      <div className='mb-4 flex flex-col gap-1'>
        <h2 className='line-clamp-1 text-lg font-semibold capitalize text-gallery-900'>
          {variant.name}
        </h2>
        <p className='text-sm font-medium text-gallery-500'>
          {product.currency} {variant.price}
        </p>
        {/* <p className='text-sm text-gallery-500'>{product.category}</p> */}
      </div>
      <QuantityModifierButtons
        product={product}
        variant={variant}
        quantity={itemQuantity}
        setQuantity={setItemQuantity}
      />
    </div>
  );
};

type Operation = 'increase' | 'decrease';

export type QuantityModifierButtonsProps =
  React.InputHTMLAttributes<HTMLInputElement> & {
    quantity: number;
    setQuantity: (value: number) => void;
  };

export const QuantityModifierButtons = ({
  quantity,
  setQuantity,
  product,
  variant,
}: QuantityModifierButtonsProps & {
  product: ProductsType;
  variant?: ProductOptionsType;
}) => {
  const handleUpdateQuantity = (operation: Operation) => {
    if (operation === 'increase') {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    }
  };
  const handleChangeOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setQuantity(newValue);
  };
  const [itemObject, setItemObject] = useState({
    product_id: product.id,
    quantity: quantity,
    option_id: variant?.id,
  });

  useEffect(() => {
    setItemObject({ ...itemObject, quantity: quantity });
  }, [quantity]);

  const handleItemObjectChange = () => {
    setItemObject({ ...itemObject, quantity: quantity });
  };
  return (
    <div className='flex items-center gap-1 font-medium text-gallery-950'>
      {quantity > 0 && (
        <button
          type='button'
          onClick={() => handleUpdateQuantity('decrease')}
          className='rounded-lg bg-gallery-100 p-2'
        >
          <TbMinus />
        </button>
      )}
      <input
        type='hidden'
        name='items'
        onChange={() => handleItemObjectChange()}
        value={JSON.stringify(itemObject)}
      />

      {quantity > 0 && (
        <input
          value={quantity}
          onChange={handleChangeOnInput}
          name='quantity'
          type='number'
          className='w-6 text-center font-medium'
        />
      )}
      <button
        type='button'
        onClick={() => handleUpdateQuantity('increase')}
        className='rounded-lg bg-gallery-100 p-2'
      >
        <TbPlus />
      </button>
    </div>
  );
};
