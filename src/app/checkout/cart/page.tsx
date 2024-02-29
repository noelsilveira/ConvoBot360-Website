import React, { Suspense } from 'react';
import { generateOrderIDLink } from '@/app/actions/product-actions';
import BackButton from '@/components/product/detail/BackButton';
import Link from 'next/link';
import { AddToCartResponseType } from '@/types/products';
import OrderSummary from '@/components/checkout/OrderSummary';
import WhatsappProductListCard, {
  WhatsappProductListCardType,
} from '@/components/checkout/WhatsppProductListCard';
import { getCartItems } from '@/app/actions/fetch-cart';
import { cookies } from 'next/headers';

const CartPage = async () => {
  const response: AddToCartResponseType = await getCartItems();
  const order_id = cookies().get('order_id')?.value;
  const cartDetailResponse = response && response.detail;
  // console.log(cartDetailResponse);

  return (
    <>
      <div className='relative bg-white'>
        <div className='mt-2'>
          <BackButton />
        </div>
        {!response || response.status_code == 404 ? (
          <div className='flex min-h-[30svh] flex-col items-center justify-center text-center'>
            <p className='text-center text-sm text-gallery-400'>
              No items to show in cart
            </p>
          </div>
        ) : (
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
                {order_id && cartDetailResponse.products.length > 0 ? (
                  <CartItemsList cartItems={cartDetailResponse} />
                ) : (
                  <div className='flex min-h-[30svh] flex-col items-center justify-center text-center'>
                    <p className='text-center text-sm text-gallery-400'>
                      No items to show in cart
                    </p>
                  </div>
                )}
              </section>

              {/* Order summary */}

              {order_id && cartDetailResponse.products.length > 0 ? (
                <OrderSummary details={cartDetailResponse} />
              ) : (
                <></>
              )}
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;

const CartItemsList = async ({
  cartItems: cartDetailResponse,
}: {
  cartItems: AddToCartResponseType['detail'];
}) => {
  // const cartDetailResponse: AddToCartResponseType =
  //   await getCartItems();

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
                option_name: product.option_name,
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
