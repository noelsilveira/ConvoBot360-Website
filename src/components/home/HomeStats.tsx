import Image from 'next/image';
import React from 'react';
export const stats = [
  { id: 1, name: 'Merchants on the platform', value: '3,300+' },
  { id: 2, name: 'Flat platform fee', value: '0%' },
  { id: 3, name: 'Uptime guarantee', value: '99.9%' },
  { id: 4, name: 'Conversational Chats Order', value: '$1.5M' },
];

const HomeStats = () => {
  return (
    <div className='bg-white py-12 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Trusted by merchants in the Kingdom of Bahrain
          </h2>
          <p className='mt-4 text-lg leading-8 text-gray-600'>
            The all-in-one solution that helps you master every aspect of your
            business effortlessly
          </p>
        </div>
        <dl className='mt-16 grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4'>
          {stats.map((stat) => (
            <div
              key={stat.id}
              className='mx-auto flex max-w-xs flex-col gap-y-4'
            >
              <dt className='text-base leading-7 text-gray-600'>{stat.name}</dt>
              <dd className='order-first text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default HomeStats;
