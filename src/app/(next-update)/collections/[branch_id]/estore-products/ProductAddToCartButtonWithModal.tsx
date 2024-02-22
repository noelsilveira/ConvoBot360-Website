'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ProductOptionsType, ProductsType } from '@/types/products';
import { RadioGroup } from '@headlessui/react';
import { TbMinus, TbPlus, TbX } from 'react-icons/tb';
import {
  addCartHandler,
  addToCartModalAction,
} from '../product/product-detail/[product_id]/fetch-action';
import { branch_id } from '@/constants/products';
import { cn } from '@/lib/utils';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import WhatsappProductListInModal, {
  WhatsappProductVariantListInModal,
} from './WhatsappProductListModal';

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
          const response = await addToCartModalAction(formData);
          if (response?.order_id) {
            const params = new URLSearchParams(
              JSON.stringify(response.order_id)
            );
            router.refresh();
          }
        }}
        className='relative flex flex-col items-start justify-center'
      >
        <div className='w-full border-b border-gallery-50'>
          <WhatsappProductListInModal product={product} />
        </div>
        <div className='py-1'>
          <label
            htmlFor='variants'
            className='text-xs font-medium uppercase text-gallery-400'
          >
            Choose Options
          </label>
        </div>
        <div className='no-scrollbar relative flex max-h-[50svh] w-full flex-col items-start justify-center gap-2 overflow-y-scroll py-4 first:mt-4'>
          {product.options?.map((variant, index) => (
            <WhatsappProductVariantListInModal
              key={'variant-item-' + variant.id + index}
              product={product}
              variant={variant}
            />
          ))}
        </div>

        <div className='mt-6 flex flex-col gap-2'>
          <input type='hidden' defaultValue={branch_id} name='branch_id' />
          <input type='hidden' defaultValue={product.id} name='product_id' />

          <div className='mb-4 hidden flex-col gap-1'>
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
  const { pending } = useFormStatus();

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
    </div>
  );
};
