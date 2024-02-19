'use client';
import { FALLBACK_IMAGE } from '@/constants/urls';
import Image from 'next/image';
import React, { useEffect, useState, useTransition } from 'react';
import { TbMinus, TbPlus } from 'react-icons/tb';
import { updateCart } from '../../app/actions/fetch-cart';
import { cn } from '@/lib/utils';
import { AddToCartResponseType, ProductOptionsType } from '@/types/products';
import { useRouter } from 'next/navigation';

export type WhatsappProductListCardType = {
  product_retailer_id: string;
  option_id: string;
  title: string;
  currency: string;
  price: number;
  quantity: number;
};

const WhatsappProductListCard = ({
  product,
}: {
  product: WhatsappProductListCardType;
}) => {
  const [itemQuantity, setItemQuantity] = useState(product.quantity | 1);
  return (
    <div className='flex w-full items-start justify-start gap-3'>
      <div className='h-20 w-20 overflow-hidden rounded-xl bg-gallery-100'>
        <Image
          src={FALLBACK_IMAGE}
          alt='Fallback image'
          height={100}
          width={100}
          className='object-cover brightness-90'
        />
      </div>
      <div className='flex flex-1 items-start justify-between'>
        <div className='mb-4 flex flex-col gap-1'>
          <h2 className='line-clamp-1 text-lg font-semibold capitalize'>
            {product.title}
          </h2>
          <p className='text-sm font-medium text-gallery-500'>
            {product.currency} {product.price}
          </p>
          {/* <p className='text-sm text-gallery-500'>{product.category}</p> */}
        </div>
        <QuantityModifierButtons
          product={product}
          option_id={product.option_id}
          quantity={itemQuantity}
          setQuantity={setItemQuantity}
        />
      </div>
    </div>
  );
};

type QuantityModifierButtonsProps =
  React.InputHTMLAttributes<HTMLInputElement> & {
    quantity: number;
    setQuantity: (value: number) => void;
  };
type Operation = 'increase' | 'decrease';

const QuantityModifierButtons = ({
  quantity,
  setQuantity,
  product,
  option_id,
}: QuantityModifierButtonsProps & {
  product: WhatsappProductListCardType;
  option_id?: ProductOptionsType['id'];
}) => {
  const router = useRouter();
  let [isPending, startTransition] = useTransition();
  const [itemObject, setItemObject] = useState({
    product_id: product.product_retailer_id,
    quantity: quantity,
    option_id: option_id,
  });

  useEffect(() => {
    if (isPending) return;

    // THIS CODE WILL RUN AFTER THE SERVER ACTION
  }, [isPending]);
  // updated
  const backup_handleUpdateQuantity = (operation: Operation) => {
    if (operation === 'increase') {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    }
  };
  // backup
  const handleUpdateQuantity = async (operation: Operation) => {
    if (operation === 'increase') {
      const increaseQuantityResponse: AddToCartResponseType['detail'] =
        await updateCart({
          product_id: product.product_retailer_id,
          quantity: 1,
          option_id: product.option_id,
        });
      if (increaseQuantityResponse.order_id) {
        router.refresh();
        setQuantity(quantity + 1);
      }
    } else {
      if (quantity > 0) {
        const decreaseQuantityResponse: AddToCartResponseType['detail'] =
          await updateCart({
            product_id: product.product_retailer_id,
            quantity: -1,
            option_id: product.option_id,
          });
        if (decreaseQuantityResponse.order_id) {
          router.refresh();
          setQuantity(quantity - 1);
        }
      }
    }
  };

  const handleChangeOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setQuantity(newValue);
  };

  useEffect(() => {
    setItemObject({ ...itemObject, quantity: quantity });
  }, [quantity]);

  const handleItemObjectChange = () => {
    setItemObject({ ...itemObject, quantity: quantity });
  };
  return (
    <div
      className={cn(
        'flex items-center gap-1 font-medium text-gallery-950',
        isPending ? 'opacity-30' : 'opacity-100'
      )}
    >
      <button
        type='button'
        aria-disabled={isPending}
        disabled={isPending}
        onClick={async () => {
          await handleUpdateQuantity('decrease');
        }}
        className={cn('rounded-lg bg-gallery-100 p-2')}
      >
        <TbMinus />
      </button>

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
        aria-disabled={isPending}
        disabled={isPending}
        onClick={async () =>
          startTransition(() => {
            handleUpdateQuantity('increase');
          })
        }
        className={cn('rounded-lg bg-gallery-100 p-2')}
      >
        <TbPlus />
      </button>
    </div>
  );
};

export default WhatsappProductListCard;
