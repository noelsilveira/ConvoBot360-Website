import React from 'react';

const stats = [
  { label: 'Conversations on the platform', value: '196M+ Million' },
  { label: 'Rated 4+ stars on the marketplace', value: '94%' },
  { label: 'Happy customers', value: '1,000+' },
  { label: 'Automatic Payment Collection', value: '$40,000+' },
];

const MerchantStats = () => {
  return (
    <div className='bg-white py-12'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Numbers Don’t Lie 🤥
          </h2>
          <div className='mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row'>
            <div className='lg:w-full lg:max-w-2xl lg:flex-auto'>
              <p className='text-xl leading-8 text-gray-600'>
                At CB360, we believe that strong partner and alliance relations
                are based on the foundations of mutual respect, trust, and
                shared goals. Here are six reasons why you need to become a
                CB360 partner today!
              </p>
              <p className='mt-10 max-w-xl text-base leading-7 text-gray-700'>
                We help leading brands in 125 countries, from Dubai to Riyadh,
                London or New York. Wherever you are, we’re here to help you
                delight your customers and grow sustainably
              </p>
              <p className='mt-10 max-w-xl text-base leading-7 text-gray-700'>
                Keep 100% of the revenue for the value-added services you offer
                to clients whenever you provide CB360 consultation or
                implementation.
              </p>
            </div>
            <div className='lg:flex lg:flex-auto lg:justify-center'>
              <dl className='w-64 space-y-8 xl:w-80'>
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className='flex flex-col-reverse gap-y-4'
                  >
                    <dt className='text-base leading-7 text-gray-600'>
                      {stat.label}
                    </dt>
                    <dd className='text-5xl font-semibold tracking-tight text-gray-900'>
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantStats;
