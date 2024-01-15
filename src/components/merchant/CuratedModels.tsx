import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

const features = [
  {
    name: 'Implementation Partner',
    description:
      "As our Implementation Partner, you'll provide consulting and implementation services for companies using CB360. Represent us in your local area, provide strategic advice and educate about WhatsApp Business Automation. Earn commissions on every qualified deal.",
    href: '#!',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Reseller Partner',
    description:
      "As a CB360 Reseller, you'll use our marketing collaterals and co-marketing activities to attract customers and expand your reach with our marketing development fund.We allow partners to retain 100% of their Value Added Services.",
    href: '#!',
    icon: LockClosedIcon,
  },
  {
    name: 'Affiliate Partner',
    description:
      'As a CB360 Referral Partner, you get to earn a steady stream of income by promoting our product on your social handles and helping us reach prospective customers.',
    href: '#',
    icon: ArrowPathIcon,
  },
];

const CuratedModels = () => {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-brand-600'>
            Deploy faster
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Curated partner models, tailor-made for you!
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-6 gap-y-6 lg:max-w-none lg:grid-cols-3'>
            {features.map((feature) => (
              <div
                key={feature.name}
                className='flex flex-col rounded-xl bg-brand-50 px-6 py-8'
              >
                <dt className='flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900'>
                  <feature.icon
                    className='h-5 w-5 flex-none text-brand-600'
                    aria-hidden='true'
                  />
                  {feature.name}
                </dt>
                <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                  <p className='flex-auto'>{feature.description}</p>
                  <p className='mt-6'>
                    <a
                      href={feature.href}
                      className='text-sm font-semibold leading-6 text-brand-600'
                    >
                      Learn more <span aria-hidden='true'>→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default CuratedModels;
