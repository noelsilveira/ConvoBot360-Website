import React from 'react';
import {
  ChartBarIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  UsersIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';

const features = [
  {
    name: 'Seamless POS Integration',
    description:
      'Easily integrate with your point-of-sale system for a smooth and efficient business operation.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Powerful Dashboard Insights',
    description:
      'Our visual dashboard empowers you to make data-driven decisions to grow your business and Stay updated with real-time updates on payments, order management, and deliveries.',
    icon: LockClosedIcon,
  },
  {
    name: 'Plug-and-Play Payment Plugins',
    description:
      'Access ready-to-use plugins for all payment gateways – simply plug and connect for quick, hassle-free transactions.',
    icon: ServerIcon,
  },
  // {
  //   name: 'Unlimited Operations, Direct Payments',
  //   description:
  //     'Enjoy unlimited orders, deliveries, and payment options directly deposited into your bank account.',
  //   icon: UsersIcon,
  // },
];

const FeatureFullSection = () => {
  return (
    <div className='bg-white py-24'>
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='relative isolate overflow-hidden bg-brand-100 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24'>
          <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0'>
            <div className='lg:row-start-2 lg:max-w-md'>
              <h2 className='text-3xl font-bold tracking-tight text-black sm:text-5xl'>
                Cutting Edge{' '}
                <span className='font-serif italic text-brand-500'>
                  Technology
                </span>{' '}
                is Seamlessly{' '}
                <span className='font-serif italic text-emerald-500'>
                  Integrated with
                </span>{' '}
                leading POS, Delivery Payment Partners
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-700'>
                Don&apos;t wait! Choose your plan and directly verify your
                WhatsApp Business account through Meta now.
              </p>
            </div>
            <Image
              src={'/assets/mockups/your-brand.png'}
              blurDataURL={'/assets/mockups/your-brand.png'}
              placeholder='blur'
              alt='Product screenshot'
              className='relative -z-20 min-w-full max-w-xl rounded-3xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none'
              width={2432}
              height={1442}
              quality={95}
            />
            <div className='max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10'>
              <dl className='max-w-xl space-y-8 text-base leading-7 text-gray-700 lg:max-w-none'>
                {features.map((feature) => (
                  <div key={feature.name} className='relative'>
                    <dt className='ml-9 inline-block font-semibold text-black'>
                      <feature.icon
                        className='absolute left-1 top-1 h-5 w-5 text-brand-600'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div
            className='pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu'
            aria-hidden='true'
          >
            <div
              className='aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ffdb80] to-[#ff3e61] opacity-25'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureFullSection;
