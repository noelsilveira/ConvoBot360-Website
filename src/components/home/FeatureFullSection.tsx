import React from 'react';
import Image from 'next/image';
import { DarkGradientSVG } from '@/components/about/GetNotified';

const features = [
  {
    name: 'Seamless POS Integration',
    description:
      'Easily integrate with your point-of-sale system for a smooth and efficient business operation.',
    // icon: CloudArrowUpIcon,
    icon: '/assets/animations/icons/1-Seamless.gif',
  },
  {
    name: 'Powerful Dashboard Insights',
    description:
      'Our visual dashboard empowers you to make data-driven decisions to grow your business and Stay updated with real-time updates on payments, order management, and deliveries.',
    // icon: LockClosedIcon,
    icon: '/assets/animations/icons/2-Powerful.gif',
  },
  {
    name: 'Plug-and-Play Payment Plugins',
    description:
      'Access ready-to-use plugins for all payment gateways – simply plug and connect for quick, hassle-free transactions.',
    // icon: ServerIcon,
    icon: '/assets/animations/icons/3-Plug-and-Play-v2.gif',
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
    <div className='px-0 py-6 lg:px-8 lg:py-12'>
      {/* FIXME */}
      <div className='mx-auto max-w-7xl rounded-3xl lg:py-6'>
        <div className='relative isolate overflow-hidden bg-gray-950 px-6 py-8 shadow-2xl lg:rounded-3xl lg:px-10 lg:py-16'>
          <div className=''>
            <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
              <div className='lg:my-auto lg:max-w-lg lg:py-2'>
                <Image
                  src={'/cb360-logo.svg'}
                  alt='cb360-logo'
                  width={200}
                  height={60}
                  className='h-12 object-contain object-left brightness-200 saturate-0'
                />
                <h2 className='mt-8 text-pretty text-left text-2xl font-bold tracking-tight text-gray-100 lg:text-5xl'>
                  Cutting Edge{' '}
                  <span className='font-serif italic text-brand-500'>
                    Technology
                  </span>{' '}
                  is Seamlessly Integrated with{' '}
                  <span className='font-serif italic text-emerald-500'>
                    leading POS
                  </span>
                  , Delivery Payment Partners
                </h2>
                <p className='mt-8 text-lg font-medium text-gallery-100 lg:text-2xl'>
                  Don&apos;t wait! Choose your plan and directly verify your
                  WhatsApp Business account through Meta now.
                </p>
              </div>
              <dl className='max-w-xl divide-y divide-dashed divide-brand-300/30 text-base leading-7 text-gray-300 lg:max-w-none'>
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className='group relative py-6 lg:py-8'
                  >
                    <dt className='inline text-2xl font-semibold text-gray-100'>
                      <Image
                        src={feature.icon}
                        alt='feature-icon'
                        height={20}
                        width={20}
                        className='h-20 w-20 object-contain object-left duration-300 sm:group-hover:-translate-y-2 sm:group-hover:-rotate-12 sm:group-hover:scale-150'
                      />
                      <p className='mt-2'>{feature.name}</p>
                    </dt>
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <DarkGradientSVG />
        </div>
      </div>
    </div>
  );
};

export default FeatureFullSection;
