'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';
import { ProductsType } from '@/types/products';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { RadioGroup } from '@headlessui/react';
import { TbMinus, TbPlus } from 'react-icons/tb';
import { addCartHandler } from '../product/product-detail/[product_id]/fetch-action';
import { branch_id } from '@/constants/products';
import { cn } from '@/lib/utils';
import { useFormState, useFormStatus } from 'react-dom';

const static_variants = ['bbq', 'wasabi', 'sriracha', 'romesco', 'chipotlie'];
type Operation = 'increase' | 'decrease';

const ProductAddToCartButtonWithModal = ({
  product,
}: {
  product: ProductsType;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const { product_id } = useParams();

  let [plan, setPlan] = useState(`69b9cb54-8720-487f-8158-9375ac72ac6b`);

  return (
    <Wrapper product={product}>
      <form
        action={addCartHandler}
        className='flex flex-col items-start justify-center gap-2'
      >
        <div>
          <RadioGroup
            value={plan}
            onChange={setPlan}
            as='div'
            className='flex flex-col gap-2'
          >
            <>
              <RadioGroup.Label className={'text-sm text-gray-500'}>
                Choose option
              </RadioGroup.Label>
              <div className='flex flex-wrap items-center gap-2'>
                {static_variants.map((variant, index) => (
                  <RadioGroup.Option
                    key={'variant-option-' + variant + index}
                    value='69b9cb54-8720-487f-8158-9375ac72ac6b'
                  >
                    {({ active, checked }) => (
                      <span
                        className={cn(
                          'cursor-pointer rounded-full border px-2 py-1 text-xs font-medium duration-150 ease-out hover:border-gallery-600',
                          active
                            ? 'border-gallery-900 bg-gallery-950 text-gallery-50'
                            : ''
                        )}
                      >
                        {variant}
                      </span>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </>
          </RadioGroup>
        </div>
        {/*  */}
        <div className='mt-6 flex flex-col gap-2'>
          <input type='hidden' value={branch_id} name='branch_id' />
          <input
            type='hidden'
            value={'2b1bcdec-a4e3-4b98-8bb3-2383ba5b4d57'}
            name='product_id'
          />
          <input type='hidden' value={plan} name='option_id' />
          <label htmlFor='quantity' className='text-sm text-gray-500'>
            Quantity
          </label>

          {/* Quantity Modifier */}
          <QuantityModifierButtons
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
        {/* Submit button */}
        <ProductVariantSubmitButton />
      </form>
    </Wrapper>
  );
};

export default ProductAddToCartButtonWithModal;

type QuantityModifierButtonsProps =
  React.InputHTMLAttributes<HTMLInputElement> & {
    quantity: number;
    setQuantity: (value: number) => void;
  };

const QuantityModifierButtons = ({
  quantity,
  setQuantity,
}: QuantityModifierButtonsProps) => {
  const handleUpdateQuantity = (operation: Operation) => {
    if (operation === 'increase') {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    }
  };
  return (
    <div className='flex items-center gap-1 font-medium text-gallery-950'>
      <button
        type='button'
        onClick={() => handleUpdateQuantity('decrease')}
        className='rounded-lg bg-gallery-100 p-2'
      >
        <TbMinus />
      </button>
      <input
        value={quantity}
        name='quantity'
        className='w-6 text-center font-medium'
      />
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
const Wrapper = ({
  children,
  product,
}: {
  children: React.ReactNode;
  product: ProductsType;
}) => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        type='button'
        // disabled={!product.availability ? false : true}
        className={cn(
          'text-galley-900 cursor-pointer rounded-lg bg-gallery-100 p-2 text-lg duration-150 ease-out hover:bg-gallery-200',
          product.availability ? 'opacity-100' : 'cursor-not-allowed opacity-40'
        )}
      >
        <TbPlus className='h-5 w-5' />
        {/* <TbShoppingBagPlus className='h-5 w-5' /> */}
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel className='relative min-h-40 transform overflow-hidden rounded-2xl bg-white px-6 py-6 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

const ProductVariantSubmitButton = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const { pending } = useFormStatus();

  return (
    <div className='mt-5 w-full grid-cols-1 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3'>
      <button
        aria-disabled={pending}
        type='submit'
        className={cn(
          'inline-flex w-full justify-center rounded-xl bg-blue-700 px-3 py-2.5 text-base font-semibold text-white shadow-sm duration-150 ease-out hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:col-start-2',
          pending ? 'opacity-50' : 'opacity-100'
        )}
        onClick={() => setOpen(false)}
      >
        {pending ? 'Adding...' : 'Add to cart'}
      </button>
      <button
        type='button'
        className='mt-3 inline-flex w-full justify-center rounded-xl bg-gallery-100 px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50 sm:col-start-1 sm:mt-0'
        onClick={() => setOpen(false)}
        ref={cancelButtonRef}
      >
        View details
      </button>
    </div>
  );
};
