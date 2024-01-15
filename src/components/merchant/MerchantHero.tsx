import React from 'react';

const MerchantHero = () => {
  return (
    <div className='relative isolate overflow-hidden bg-gradient-to-b from-brand-100/20 pt-4'>
      <div
        className='absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-brand-600/30 ring-1 ring-brand-50 sm:-mr-80 lg:-mr-96'
        aria-hidden='true'
      />
      <div className='mx-auto max-w-7xl px-6 py-16 sm:py-40 lg:px-8 lg:py-32'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8'>
          <h1 className='max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto'>
            Amplify your earning potential with our marketplace
          </h1>
          <div className='mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1'>
            <p className='text-lg leading-8 text-gray-600'>
              Get a steady stream of revenue by encouraging clients to interact
              with their customers on WhatsApp to amplify their customer
              experience, sales efforts, and marketing campaigns.
            </p>
            <div className='mt-10 flex items-center gap-x-6'>
              <a
                href='#'
                className='rounded-md bg-brand-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500'
              >
                Become a partner
              </a>
              <a
                href='#'
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
          <img
            src='https://images.unsplash.com/photo-1516201580490-33550d32de5c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9yYW5nZSUyMG1vbmV5fGVufDB8fDB8fHww'
            alt='merchant-about-header'
            className='mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36'
          />
        </div>
      </div>
      <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
    </div>
  );
};

export default MerchantHero;
