import React from 'react';
import {
  TbAward,
  TbBrandPatreonFilled,
  TbCloudNetwork,
  TbFireHydrant,
  TbHeartHandshake,
  TbNorthStar,
  TbTrophy,
  TbUserStar,
} from 'react-icons/tb';
const values = [
  {
    name: 'Customer-first',
    icon: TbUserStar,
    description: 'We exist to grow our customer’s business',
  },
  {
    name: 'Raise standards',
    icon: TbAward,
    description:
      'Always curious to know more, and hungry to better our best performance',
  },
  {
    name: 'Simple is beautiful',
    icon: TbCloudNetwork,
    description: 'Work hard to make our products simple and a delight to use',
  },
  {
    name: 'Nurture talent',
    icon: TbNorthStar,
    description:
      'Embrace diversity of people and ideas; respect and rely on each other',
  },
  {
    name: 'Work fast to completion',
    icon: TbTrophy,
    description:
      'Be nimble-footed, execute fast, do it well, and stay focused till it’s done',
  },
  {
    name: 'Integrity',
    icon: TbHeartHandshake,
    description: 'Own the cause, take responsibility for decisions and actions',
  },
];

const AboutValuesSection = () => {
  return (
    <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
      <div className='mx-auto max-w-2xl lg:mx-0'>
        <span className='text-sm font-semibold uppercase tracking-wider text-gallery-600'>
          Core values
        </span>
        <h2 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Who we are and how we do things
        </h2>
        <p className='mt-6 text-lg leading-8 text-gray-600'>
          We make it easy for such businesses to automate their customer
          interactions to turn conversations to transactions.
        </p>
      </div>
      <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
        {values.map((value) => (
          <div
            key={value.name}
            className='flex items-start justify-start gap-2'
          >
            <div className='relative mt-1'>
              <value.icon className='h-6 w-6' />
              <TbBrandPatreonFilled className='absolute inset-0 -top-2 -z-10 h-12 w-12 text-brand-300/50' />
            </div>
            <div>
              <dt className='font-semibold text-gray-900'>{value.name}</dt>
              <dd className='mt-1 text-gray-600'>{value.description}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default AboutValuesSection;
