import React from 'react';
import Image from 'next/image';
import {
  TbAutomaticGearbox,
  TbBusinessplan,
  TbMessage2Bolt,
  TbReportMoney,
  TbTruckDelivery,
  TbUserBolt,
} from 'react-icons/tb';

const secondaryFeatures = [
  {
    name: 'Instant WhatsApp Business Store Launch.',
    description:
      'Launch your store in minutes, instantly broadcasting catalogs and menus directly to customers.',
    icon: TbMessage2Bolt,
  },
  {
    name: 'AI-Powered Automation.',
    description:
      'Provide your customers with the ultimate conversational ordering experience, fully automate order management, deliveries, and payments through WhatsApp with cutting-edge AI technology.',
    icon: TbAutomaticGearbox,
  },
  {
    name: 'All-in-One Delivery Solution.',
    description:
      'With seamless 3rd party deliveries and stores order pick-ups – no app required, simply WhatsApp Chat with “Hi”',
    icon: TbTruckDelivery,
  },
  {
    name: 'Direct Customer Targeting.',
    description:
      'Skip 3rd party apps, directly engage customers for repeat orders, enhancing efficiency and customer relationships.',
    icon: TbUserBolt,
  },
  {
    name: 'No More Extra Fees.',
    description:
      "CB360's WhatsApp ordering eliminates unnecessary fees and commissions, offering a cost-effective monthly subscription with rich features.",
    icon: TbReportMoney,
  },
  {
    name: 'Effortless Business Growth.',
    description:
      'Boost business income effortlessly while establishing direct connections with customers for a hassle-free experience. Enjoy unlimited orders, deliveries, and payment options directly deposited into your bank account.',
    icon: TbBusinessplan,
  },
];

const BuildYourPresenceSection = () => {
  return (
    <div id='fullServicesSection' className='mt-12 sm:mt-20'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            More than just an Ordering System &{' '}
            <span className='text-brand-500'>Payment Solution</span>
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Streamline your business with seamless online sales, inventory
            management, and efficient customer handling—all in one powerful
            solution. Experience effortless mastery of every aspect, from
            transactions to shipping.
          </p>
        </div>
      </div>
      <div className='relative overflow-hidden pt-16'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <Image
            src={'/assets/mockups/laptop-01.png'}
            alt='App screenshot'
            className='mb-[-12%] rounded-3xl shadow-2xl ring-1 ring-gray-900/10'
            width={2432}
            height={1442}
          />
          <div className='relative' aria-hidden='true'>
            <div className='absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]' />
          </div>
        </div>
      </div>
      <div className='mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8'>
        <dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
          {secondaryFeatures.map((feature) => (
            <div key={feature.name} className='relative pl-9'>
              <dt className='inline font-semibold text-gray-900'>
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
  );
};

export default BuildYourPresenceSection;
