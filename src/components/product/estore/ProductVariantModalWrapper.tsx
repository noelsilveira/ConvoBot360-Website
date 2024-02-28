import { cn } from '@/lib/utils';
import { MultiSelectQuantityStore } from '@/store/multiProductQuantityStore';
import { SingleSelectQuantityStore } from '@/store/productQuantityStore';
import { ProductsType } from '@/types/products';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { TbPlus } from 'react-icons/tb';

export const ProductVariantModalWrapper = ({
  children,
  product,
  open,
  setOpen,
  size = 'small',
}: {
  children: React.ReactNode;
  product: ProductsType;
  open: boolean;
  setOpen: (value: boolean) => void;
  size?: 'small' | 'large';
}) => {
  // const [open, setOpen] = useState(false);
  const { resetAll } = MultiSelectQuantityStore();
  const { reset } = SingleSelectQuantityStore();
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    reset();
    resetAll();
  }, [product.id]);

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
