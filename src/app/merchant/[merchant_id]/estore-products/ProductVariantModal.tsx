'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef, useState } from 'react'
import { ProductListingParamsType, ProductsType } from '@/types/products';
import { useParams, usePathname } from 'next/navigation';

import { CheckIcon } from '@heroicons/react/24/outline'
import { RadioGroup } from '@headlessui/react'
import { TbShoppingBagPlus } from 'react-icons/tb';
import { addCartHandler } from '../product/product-detail/[product_id]/fetch-action';
import { branch_id } from '@/constants/products';
import { cn } from '@/lib/utils';
import { useFormState } from 'react-dom';

const ProductVariantModal = ({ product }: { product: ProductsType }) => {
    const pathname = usePathname()

    const { product_id } = useParams()
    const initialSate = {
        message: '',
        link: pathname,
    };

    const [state, formAction] = useFormState(addCartHandler, initialSate);
    let [plan, setPlan] = useState(`69b9cb54-8720-487f-8158-9375ac72ac6b`)

    return (
        <Wrapper product={product}>

            <form action={formAction} className='flex justify-center items-center gap-2'>
                <div>
                    <input type='hidden' value={branch_id} name='branch_id' />
                    <input type='hidden' value={'2b1bcdec-a4e3-4b98-8bb3-2383ba5b4d57'} name='product_id' />
                    <input type='hidden' value={plan} name='option_id' />
                    <label htmlFor="quantity"> Quantity</label>
                    <input className='text-black border ' placeholder='quantity' type="number" name='quantity' id='quantity' /></div>
                <div>
                    <RadioGroup value={plan} onChange={setPlan}>
                        <RadioGroup.Label>Plan</RadioGroup.Label>
                        <RadioGroup.Option value="69b9cb54-8720-487f-8158-9375ac72ac6b">
                            {({ checked }: { checked: boolean }) => (
                                <span className={cn('px-3 py-2 rounded-lg', checked ? 'bg-blue-200' : '')}>Startup</span>
                            )}
                        </RadioGroup.Option>
                        <RadioGroup.Option value="69b9cb54-8720-487f-8158-9375ac72ac">
                            {({ checked }: { checked: boolean }) => (
                                <span className={cn('px-3 py-2 rounded-lg', checked ? 'bg-blue-200' : '')}>Business</span>
                            )}
                        </RadioGroup.Option>
                        <RadioGroup.Option value="69b9cb54-8720-487f-8158-9375ac72ac6">
                            {({ checked }: { checked: boolean }) => (
                                <span className={cn('px-3 py-2 rounded-lg', checked ? 'bg-blue-200' : '')}>Enterprise</span>
                            )}
                        </RadioGroup.Option>
                    </RadioGroup></div>
                <ProductVariantSubmitButton />
            </form>
        </Wrapper>

    )
}

export default ProductVariantModal

const Wrapper = ({ children, product }: { children: React.ReactNode; product: ProductsType }) => {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                type='button'
                // disabled={!product.availability ? false : true}
                className={cn(
                    'cursor-pointer rounded-full bg-gallery-100 p-2 text-lg text-gallery-900 duration-150 ease-out hover:bg-gallery-200',
                    product.availability
                        ? 'opacity-100'
                        : 'cursor-not-allowed opacity-40'
                )}
            >
                <TbShoppingBagPlus className='h-5 w-5' />
            </button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                    {children}

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

        </>
    )
}

const ProductVariantSubmitButton = () => {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)

    return (
        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
            <button
                type="submit"
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                onClick={() => setOpen(false)}
            >
                Continue
            </button>
            <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                onClick={() => setOpen(false)}
                ref={cancelButtonRef}
            >
                Cancel
            </button>
        </div>
    )
}