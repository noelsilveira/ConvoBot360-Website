import React from 'react';

import MainLayout from '@/components/layout/MainLayout';
import ContactInformation from '@/components/checkout/ContactInformation';
import OrderSummary from '@/components/checkout/OrderSummary';

const BillingPage = () => {
  return (
    <>
      {/* <MainLayout title={`Billing | CB360 - Ultimate shopping`}> */}
      <main className='mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <h1 className='sr-only'>Checkout</h1>

          <form className='lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16'>
            {/* Contact information */}
            <ContactInformation />

            {/* Order summary */}
            {/* <OrderSummary /> */}
          </form>
        </div>
      </main>
    </>
  );
};

export default BillingPage;
