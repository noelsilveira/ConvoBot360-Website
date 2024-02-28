import { cn } from '@/lib/utils';
import { MultiSelectQuantityStore } from '@/store/multiProductQuantityStore';
import { SingleSelectQuantityStore } from '@/store/productQuantityStore';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

export const ProductVariantSubmitButton = () => {
  const [open, setOpen] = useState(false);
  const { pending } = useFormStatus();
  // const { productQuantity } = SingleSelectQuantityStore();
  // const { productQuantity: multiProductQuantity } = MultiSelectQuantityStore();

  return (
    <div className='w-full grid-cols-1 gap-3 sm:grid sm:grid-cols-1'>
      <button
        aria-disabled={pending}
        disabled={pending}
        type='submit'
        className={cn(
          'mt-3 inline-flex w-full justify-center rounded-xl bg-blue-700 px-3 py-3 text-base font-semibold text-white shadow-sm duration-150 ease-out hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:mt-0',
          pending ? 'opacity-50' : 'opacity-100'
        )}
        onClick={() => setOpen(false)}
      >
        {pending ? 'Adding...' : 'Add to cart'}
      </button>
      {/* {productQuantity > 0 || multiProductQuantity > 0 ? (
        <button
          aria-disabled={pending}
          disabled={pending}
          type='submit'
          className={cn(
            'mt-3 inline-flex w-full justify-center rounded-xl bg-blue-700 px-3 py-3 text-base font-semibold text-white shadow-sm duration-150 ease-out hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:mt-0',
            pending ? 'opacity-50' : 'opacity-100'
          )}
          onClick={() => setOpen(false)}
        >
          {pending ? 'Adding...' : 'Add to cart'}
        </button>
      ) : (
        <button
          aria-disabled={pending}
          disabled={true}
          type='button'
          className='mt-3 inline-flex w-full justify-center rounded-xl bg-blue-700 px-3 py-3 text-base font-semibold text-white opacity-50 shadow-sm duration-150 ease-out hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:mt-0'
          onClick={() => setOpen(false)}
        >
          Select quantity
        </button>
      )} */}
    </div>
  );
};
