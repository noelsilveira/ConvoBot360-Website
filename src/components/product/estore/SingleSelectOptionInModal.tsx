import { useQuantityHandler } from '@/hooks/useMultiSelect';
import { cn } from '@/lib/utils';
// import useProductModalOptionStore  from '@/store/productModalSelectStore';
import { SingleSelectQuantityStore } from '@/store/productQuantityStore';
import {
  ProductOptionsInGroupOptionsType,
  ProductsType,
} from '@/types/products';
import React, { useEffect, useState } from 'react';
import { TbCheck, TbMinus, TbPlus } from 'react-icons/tb';

const SingleSelectOptionInModal = ({
  variant,
  product,
  maxSelectable = 1,
  option_group,
}: {
  variant: ProductOptionsInGroupOptionsType;
  product: ProductsType;
  maxSelectable: number;
  option_group: string;
}) => {
  const [itemQuantity, setItemQuantity] = useState(0);

  return (
    <div className='flex w-full items-center justify-between border-b border-gallery-50'>
      <label htmlFor='option-radio' className='mb-4 flex flex-col gap-1'>
        <h2 className='line-clamp-1 text-base font-medium capitalize text-gallery-800'>
          {variant.name}
        </h2>
        <p className='text-sm font-medium text-gallery-500'>
          + {product.currency} {variant.price}
        </p>
        {/* <p className='text-sm text-gallery-500'>{product.category}</p> */}
      </label>
      <SelectableRadioButton
        option_group={option_group}
        product={product}
        variant={variant}
      />

      {/* <QuantityModifierButtons
        product={product}
        variant={variant}
        maxSelectable={maxSelectable}
        quantity={itemQuantity}
        setQuantity={setItemQuantity}
      /> */}
    </div>
  );
};

export default SingleSelectOptionInModal;

const SelectableRadioButton = ({
  product,
  variant,
  option_group,
}: {
  product: ProductsType;
  option_group: string;
  variant?: ProductOptionsInGroupOptionsType;
}) => {
  const [itemObject, setItemObject] = useState({
    product_id: product.id,
    quantity: 1,
    option_id: variant?.optionId,
  });

  // useEffect(() => {
  //   setItemObject({ ...itemObject, quantity: quantity });
  // }, [quantity]);

  return (
    <div className='inline-flex items-center'>
      <label
        className='relative flex cursor-pointer items-center rounded-full p-3'
        htmlFor='react'
      >
        <input
          type='hidden'
          name='items'
          defaultValue={JSON.stringify(itemObject)}
        />
        <input
          name={option_group}
          type='radio'
          className="before:content[''] border-blue-gray-200 before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border text-blue-500 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-8 before:w-8 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
          id='blue'
        />
        <span className='pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-3.5 w-3.5'
            viewBox='0 0 16 16'
            fill='currentColor'
          >
            <circle data-name='ellipse' cx='8' cy='8' r='8'></circle>
          </svg>
        </span>
      </label>
    </div>
  );
};

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
  const { productQuantity, increaseOptionQuantity, decreaseOptionQuantity } =
    SingleSelectQuantityStore();

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
      {maxSelectable + '--' + quantity}

      {quantity === 0 && (
        <button
          type='button'
          disabled={maxSelectable === productQuantity}
          onClick={() => handleUpdateQuantity('increase')}
          className={cn(
            'rounded-lg bg-gallery-100 p-1.5',
            maxSelectable === productQuantity
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
