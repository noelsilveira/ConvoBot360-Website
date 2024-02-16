'use client';

import React from 'react';
import { addCartHandler } from './fetch-action';
import { useFormState } from 'react-dom';
import { usePathname, useRouter } from 'next/navigation';

// import { branch_id } from '@/constants/products'

const AddToCartForm = ({
  branch_id,
  product_id,
}: {
  branch_id: string;
  product_id: string;
}) => {
  const pathname = usePathname();

  return (
    <>
      <form action={addCartHandler}>
        <input type='hidden' value={branch_id} name='branch_id' />
        <input type='hidden' value={product_id} name='product_id' />
        <div className='mt-4 sm:mt-0 sm:pr-9'>
          <label htmlFor={`quantity`} className='sr-only'>
            Quantity
          </label>
          <select
            id={`quantity`}
            name={`quantity`}
            className='max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
          </select>
        </div>

        <div className='mt-4 sm:mt-0 sm:pr-9'>
          <label htmlFor={`option_id`} className='sr-only'>
            Variations
          </label>
          <select
            id={`option_id`}
            name={`option_id`}
            className='max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'
          >
            <option value={`69b9cb54-8720-487f-8158-9375ac72ac6b`}>
              Sample variant
            </option>
          </select>
        </div>

        <AddToCartButton />
      </form>
    </>
  );
};

export default AddToCartForm;

const AddToCartButton = () => {
  return (
    <button
      type='submit'
      // onClick={() => {
      //     addToCartHandler();
      // }}
      className='mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-brand-500 px-8 py-3 text-base font-medium text-white duration-200 ease-out hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'
    >
      Add to cart
    </button>
  );
};
