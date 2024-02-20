'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ProductDetailProps, branch_id } from '@/constants/products';
import { ProductOptionsType, ProductsType } from '@/types/products';
import WhatsappProductListInModal, {
  WhatsappProductVariantListInModal,
} from './WhatsappProductListModal';

import { ProductQuantityStore } from '@/store/productQuantityStore';
import { TbPlus } from 'react-icons/tb';
import { addToCartModalAction } from '../../../actions/product-actions';
import { cn } from '@/lib/utils';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';

const ProductAddToCartButtonWithModal = ({
  product,
  size = 'small',
  branch_id: large_branch_id,
}: {
  product: ProductsType;
  branch_id?: string;
  size?: 'small' | 'large';
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
    <Wrapper product={product} size={size}>
      <form
        action={async (formData: FormData) => {
          const response = await addToCartModalAction(formData);
          if (response?.order_id) {
            const params = new URLSearchParams(
              JSON.stringify(response.order_id)
            );
            router.push('/checkout/cart');
          }
        }}
        className='flex flex-col'
      >
        <div className='w-full'>
          <WhatsappProductListInModal product={product} />
        </div>
        {product.options?.length > 0 && (
          <div className='py-1'>
            <label
              htmlFor='variants'
              className='text-xs font-medium uppercase text-gallery-400'
            >
              Choose Options ({product.options.length} options)
            </label>
          </div>
        )}
        <div className='no-scrollbar max-h-[50svh] overflow-y-auto'>
          <div className='flex w-full flex-col items-center justify-center gap-2'>
            {product.options?.map((variant, index) => (
              <WhatsappProductVariantListInModal
                key={'variant-item-' + variant.id + index}
                product={product}
                variant={variant}
              />
            ))}
          </div>
        </div>

        <div className='mt-6 flex flex-col gap-2'>
          {size === 'large' ? (
            <input
              type='hidden'
              defaultValue={large_branch_id}
              name='branch_id'
            />
          ) : (
            <input type='hidden' defaultValue={branch_id} name='branch_id' />
          )}
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
  size = 'small',
}: {
  children: React.ReactNode;
  product: ProductsType;
  size?: 'small' | 'large';
}) => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <>
      {size === 'large' ? (
        <button
          type='submit'
          onClick={() => setOpen(true)}
          className='mt-8 flex w-full items-center justify-center rounded-xl border border-transparent bg-blue-600 px-8 py-3 text-base font-semibold text-white duration-200 ease-out hover:bg-blue-700 focus:outline-none'
        >
          Add to cart
        </button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          type='button'
          className={cn(
            'text-galley-900 cursor-pointer rounded-lg bg-gallery-100 p-2 text-lg duration-150 ease-out hover:bg-gallery-200',
            product.availability
              ? 'opacity-100'
              : 'cursor-not-allowed opacity-40'
          )}
        >
          <TbPlus className='h-5 w-5' />
          {/* <TbShoppingBagPlus className='h-5 w-5' /> */}
        </button>
      )}

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
                <Dialog.Panel className='relative w-full transform rounded-3xl bg-white px-6 py-6 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
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
  const { productQuantity } = ProductQuantityStore()


  return (
    <div className='w-full grid-cols-1 gap-3 sm:grid sm:grid-cols-1'>
      {productQuantity > 0 ?
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
        :
        <button
          aria-disabled={pending}
          disabled={true}
          type='button'
          className=
          'mt-3 inline-flex w-full justify-center rounded-xl bg-blue-700 px-3 py-3 text-base font-semibold text-white shadow-sm duration-150 ease-out hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:mt-0 opacity-50'

          onClick={() => setOpen(false)}
        >
          Increase quantity
        </button>
      }
    </div>
  );
};
