import { cn } from '@/lib/utils';
import { MultiSelectQuantityStore } from '@/store/multiProductQuantityStore';
import {
  ProductOptionsInGroupOptionsType,
  ProductsType,
} from '@/types/products';
import React, { useEffect, useState } from 'react';
import { TbCheck, TbMinus, TbPlus } from 'react-icons/tb';

const MultipleSelectOptionInModal = ({
  variant,
  product,
  maxSelectable,
}: {
  variant: ProductOptionsInGroupOptionsType;
  product: ProductsType;
  maxSelectable: number;
}) => {
  const [itemQuantity, setItemQuantity] = useState(0);

  return (
    <div className='flex w-full items-center justify-between border-b border-gallery-50'>
      <div className='mb-4 flex flex-col gap-1'>
        <h2 className='line-clamp-1 text-base font-medium capitalize text-gallery-800'>
          {variant.name}
        </h2>
        <p className='text-sm font-medium text-gallery-500'>
          + {product.currency} {variant.price}
        </p>
        {/* <p className='text-sm text-gallery-500'>{product.category}</p> */}
      </div>

      <QuantityModifierButtons
        product={product}
        variant={variant}
        maxSelectable={maxSelectable}
        quantity={itemQuantity}
        setQuantity={setItemQuantity}
      />
    </div>
  );
};

export default MultipleSelectOptionInModal;

type Operation = 'increase' | 'decrease';

type QuantityModifierButtonsProps =
  React.InputHTMLAttributes<HTMLInputElement> & {
    quantity: number;
    setQuantity: (value: number) => void;
  };

const QuantityModifierButtons = ({
  quantity,
  setQuantity,
  product,
  variant,
  maxSelectable,
}: QuantityModifierButtonsProps & {
  product: ProductsType;
  maxSelectable: number;
  variant?: ProductOptionsInGroupOptionsType;
}) => {
  const {
    multiProductQuantity,
    increaseOptionQuantity,
    decreaseOptionQuantity,
  } = MultiSelectQuantityStore();

  const handleUpdateQuantity = (operation: Operation) => {
    if (operation === 'increase') {
      setQuantity(quantity + 1);
      increaseOptionQuantity();
    } else {
      if (quantity > 0) {
        setQuantity(quantity - 1);
        decreaseOptionQuantity();
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
    option_id: variant?.optionId,
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
        <input
          type='hidden'
          name='items'
          onChange={() => handleItemObjectChange()}
          value={JSON.stringify(itemObject)}
        />
      )}

      {quantity === 0 && (
        <button
          type='button'
          disabled={maxSelectable === multiProductQuantity}
          onClick={() => handleUpdateQuantity('increase')}
          className={cn(
            'rounded-lg bg-gallery-100 p-1.5',
            maxSelectable === multiProductQuantity
              ? 'cursor-not-allowed opacity-40'
              : 'cursor-pointer'
          )}
        >
          <TbPlus />
        </button>
      )}
      {quantity === 1 && (
        <button
          type='button'
          onClick={() => handleUpdateQuantity('decrease')}
          className='rounded-lg bg-blue-200 p-1.5 text-blue-700'
        >
          <TbCheck />
        </button>
      )}
    </div>
  );
};
