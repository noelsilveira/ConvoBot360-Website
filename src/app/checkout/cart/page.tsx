import React, { Suspense } from 'react';
import { getCartItems } from './fetch-cart';
import WhatsappProductListCard, {
  WhatsappProductListCardType,
} from './WhatsppProductListCard';
import OrderSummary from './OrderSummary';
import {
  AddToCartResponseType,
  generateOrderIDLink,
} from '@/app/merchant/[merchant_id]/product/product-detail/[product_id]/fetch-action';
import BackButton from '@/app/merchant/[merchant_id]/product/product-detail/[product_id]/BackButton';
import Link from 'next/link';

const CartPage = async () => {
  const cartDetailResponse: AddToCartResponseType['detail'] =
    await getCartItems();
  return (
    <>
      <div className='relative bg-white'>
        <div className='mt-2'>
          <BackButton />
        </div>
        <div className='mx-auto max-w-2xl px-4 pb-24 pt-2 sm:px-6 md:pt-8 lg:max-w-7xl lg:px-8'>
          <div className='flex items-baseline justify-between'>
            <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Shopping Cart
            </h1>
            <Link
              href={'#order-summary'}
              className='text-sm font-medium tracking-tight text-blue-700'
            >
              View summary
            </Link>
          </div>
          <form
            action={async () => {
              'use server';
              const link = await generateOrderIDLink(
                cartDetailResponse.order_id
              );
              if (link) {
                console.log('Whatsapp Link: ', link);
              }
            }}
            className='mt-4 md:mt-6 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16'
          >
            {/* <input hidden type='hidden' name='order_id' /> */}
            <section aria-labelledby='cart-heading' className='lg:col-span-7'>
              <h2 id='cart-heading' className='sr-only'>
                Items in your shopping cart
              </h2>

              <CartItemsList />
            </section>

            {/* Order summary */}

            <OrderSummary />
          </form>
        </div>
      </div>
    </>
  );
};

export default CartPage;

const CartItemsList = async () => {
  const cartDetailResponse: AddToCartResponseType['detail'] =
    await getCartItems();

  return (
    cartDetailResponse && (
      <ul
        role='list'
        className='divide-y divide-gallery-100 border-y border-gallery-100'
      >
        <Suspense fallback={<div>Loading summary...</div>}>
          {cartDetailResponse &&
            cartDetailResponse?.products?.map((product, index) => {
              const productCardProps: WhatsappProductListCardType = {
                product_retailer_id: product.product_retailer_id,
                title: product.product_name,
                option_id: product.option_id,
                currency: product.currency,
                price: product.item_price,
                quantity: product.quantity,
              };

              return (
                <li
                  key={'cart-item-' + product.product_retailer_id + index}
                  className='flex py-6 sm:py-10'
                >
                  <WhatsappProductListCard product={productCardProps} />
                </li>
              );
            })}
        </Suspense>
      </ul>
    )
  );
};
