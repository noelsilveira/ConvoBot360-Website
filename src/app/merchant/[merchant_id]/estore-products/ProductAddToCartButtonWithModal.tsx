'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ProductOptionsType, ProductsType } from '@/types/products';
import { RadioGroup } from '@headlessui/react';
import { TbMinus, TbPlus, TbX } from 'react-icons/tb';
import { addCartHandler } from '../product/product-detail/[product_id]/fetch-action';
import { branch_id } from '@/constants/products';
import { cn } from '@/lib/utils';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';

type Operation = 'increase' | 'decrease';
const ProductAddToCartButtonWithModal = ({
  product,
}: {
  product: ProductsType;
}) => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const [activeOption, setActiveOption] = useState();
  const [activeOptionPrice, setActiveOptionPrice] = useState<number>(
    product.price
  );

  const findOptionPrice = (): ProductOptionsType['price'] => {
    const optionPrice = product.options
      .filter((x) => x.id === activeOption)
      .map((x) => x.price)
      ?.at(0);
    return optionPrice || 0;
  };

  useEffect(() => {
    if (
      activeOptionPrice !== undefined ||
      activeOptionPrice !== product.price
    ) {
      setActiveOptionPrice((product.price + findOptionPrice()) * quantity);
    }
  }, [activeOption, quantity]);

  return (
    <Wrapper product={product}>
      <form
        action={async (formData: FormData) => {
          const response = await addCartHandler(formData);
          if (response?.order_id) {
            const params = new URLSearchParams(
              JSON.stringify(response.order_id)
            );
            window.history.pushState(
              null,
              '',
              `/checkout/cart?${params.toString()}`
            );
          }
        }}
        className='flex flex-col items-start justify-center gap-2'
      >
        <div className='flex w-full items-start justify-between'>
          <div className='mb-4 flex flex-col gap-1'>
            <h2 className='text-xl font-semibold capitalize'>
              {product.title}
            </h2>
            <p className='text-sm font-medium text-gallery-500'>
              {product.currency} {product.price}
            </p>
            {/* <p className='text-sm text-gallery-500'>{product.category}</p> */}
          </div>

          <QuantityModifierButtons
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>

        <div>
          <RadioGroup
            value={activeOption}
            onChange={setActiveOption}
            name='option_id'
            defaultValue={activeOption}
            as='div'
            className='flex flex-col gap-2'
          >
            {product.options?.length > 0 && (
              <>
                <div className='flex gap-4'>
                  <RadioGroup.Label className={'text-sm text-gray-500'}>
                    Choose option
                  </RadioGroup.Label>

                  <button
                    onClick={() => setActiveOption(undefined)}
                    type='button'
                    className={cn(
                      'inline-flex cursor-pointer items-center justify-center rounded-full border border-gallery-100 bg-gallery-100 px-2 py-1 text-xs font-semibold text-gallery-600 duration-150 ease-out hover:bg-gallery-200',
                      activeOption ? 'visible' : 'invisible'
                    )}
                  >
                    clear <TbX />
                  </button>
                </div>
                <div className='flex flex-wrap items-center gap-2'>
                  {product.options?.map((variant, index) => (
                    <RadioGroup.Option
                      key={'variant-option-' + variant.id + index}
                      value={variant.id}
                    >
                      {({ active, checked }) => (
                        <span
                          className={cn(
                            'cursor-pointer rounded-full border px-2 py-1 text-xs font-medium capitalize duration-150 ease-out hover:border-gallery-600',
                            checked && activeOption
                              ? 'bg-gallery-950 text-gallery-50'
                              : 'bg-white text-gallery-500'
                          )}
                        >
                          {variant.name}
                        </span>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </>
            )}
          </RadioGroup>
        </div>
        {/*  */}
        <div className='mt-6 flex flex-col gap-2'>
          <input type='hidden' value={branch_id} name='branch_id' />
          <input type='hidden' value={product.id} name='product_id' />
          {/* <input type='hidden' value={activeOption} name='option_id' /> */}

          <div className='mb-4 flex flex-col gap-1'>
            <label htmlFor='total' className='text-sm text-gray-500'>
              Total
            </label>
            <p className='font-semibold text-gallery-900'>
              {product.currency} {activeOptionPrice}
            </p>
          </div>
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
                <Dialog.Panel className='relative min-h-40 w-full transform overflow-hidden rounded-3xl bg-white px-6 py-6 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
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
  const router = useRouter();

  return (
    <div className=' w-full grid-cols-1 gap-3 sm:grid sm:grid-cols-2'>
      {/* <button
        type='button'
        className='inline-flex w-full justify-center rounded-xl bg-gallery-100 px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50 sm:mt-0'
        onClick={() => {setOpen(false)}}
      >
        View details
      </button> */}
      <button
        aria-disabled={pending}
        type='submit'
        className={cn(
          'mt-3 inline-flex w-full justify-center rounded-xl bg-blue-700 px-3 py-2.5 text-base font-semibold text-white shadow-sm duration-150 ease-out hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:mt-0',
          pending ? 'opacity-50' : 'opacity-100'
        )}
        onClick={() => setOpen(false)}
      >
        {pending ? 'Adding...' : 'Add to cart'}
      </button>
    </div>
  );
};
