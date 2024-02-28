'use server';

import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { ContinueInWhatsappButton } from './ContinueInWhatsappButton';
import { AddToCartResponseType } from '@/types/products';
import { getCartItems } from '@/app/actions/fetch-cart';

const OrderSummary = async ({
  details,
}: {
  details: AddToCartResponseType['detail'];
}) => {
  // const details: AddToCartResponseType['detail'] =
  //   await getCartItems();

  return (
    <section
      aria-labelledby='summary-heading'
      className='sticky top-12 mt-6 rounded-2xl bg-gallery-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'
    >
      <h2 id='summary-heading' className='text-lg font-medium text-gray-900'>
        Order summary
      </h2>

      <dl className='mt-6 space-y-4'>
        <div className='flex items-center justify-between'>
          <dt className='text-sm text-gray-600'>Net Total</dt>
          <dd className='text-sm font-medium text-gray-900'>
            {details.currency} {details.net_total}
          </dd>
        </div>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
          <dt className='flex items-center text-sm text-gray-600'>
            <span>Service charges</span>
            <a
              href='#!'
              className='ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>
                Learn more about how shipping is calculated
              </span>
              <QuestionMarkCircleIcon className='h-5 w-5' aria-hidden='true' />
            </a>
          </dt>
          <dd className='text-sm font-medium text-gray-900'>
            {details.currency} {details.service_charges}
          </dd>
        </div>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
          <dt className='flex text-sm text-gray-600'>
            <span>Taxes</span>
            <a
              href='#!'
              className='ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>
                Learn more about how tax is calculated
              </span>
              <QuestionMarkCircleIcon className='h-5 w-5' aria-hidden='true' />
            </a>
          </dt>
          <dd className='text-sm font-medium text-gray-900'>
            {details.currency} {details.taxes}
          </dd>
        </div>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
          <dt className='flex text-sm text-gray-600'>
            <span>Discounts</span>
          </dt>
          <dd className='text-sm font-medium text-gray-900'>
            {details.currency} {details.discounts}
          </dd>
        </div>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
          <dt className='text-base font-medium text-gray-900'>Order total</dt>
          <dd className='text-base font-medium text-gray-900'>
            {details.currency} {details.gross_total}
          </dd>
        </div>
      </dl>

      <ContinueInWhatsappButton />
    </section>
  );
};

export default OrderSummary;
