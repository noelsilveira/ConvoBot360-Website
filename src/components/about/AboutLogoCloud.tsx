import Image from 'next/image';
import React from 'react';

const clientsLogo = [
  {
    name: 'Invo',
    image: '/assets/clients/invo.svg',
  },
  {
    name: 'Casheer',
    image: '/assets/clients/casheer.svg',
  },
  {
    name: 'AFS',
    image: '/assets/clients/afs.svg',
  },
];

const AboutLogoCloud = () => {
  return (
    <div className='relative isolate -z-10 mt-16 sm:mt-24'>
      <div className='absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]'>
        <svg
          className='h-[40rem] w-[80rem] flex-none stroke-gray-200'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='e9033f3e-f665-41a6-84ef-756f6778e6fe'
              width={200}
              height={200}
              x='50%'
              y='50%'
              patternUnits='userSpaceOnUse'
              patternTransform='translate(-100 0)'
            >
              <path d='M.5 200V.5H200' fill='none' />
            </pattern>
          </defs>
          <svg x='50%' y='50%' className='overflow-visible fill-gray-50'>
            <path
              d='M-300 0h201v201h-201Z M300 200h201v201h-201Z'
              strokeWidth={0}
            />
          </svg>
          <rect
            width='100%'
            height='100%'
            strokeWidth={0}
            fill='url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)'
          />
        </svg>
      </div>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-center text-3xl font-bold leading-8 tracking-tight text-gray-900'>
          Trusted partners of our business
        </h2>
        {/* <div className='mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'> */}
        <div className='mx-auto mt-16 flex max-w-lg flex-wrap items-center justify-center gap-x-10 gap-y-10 sm:max-w-xl sm:gap-x-16 lg:max-w-7xl'>
          {clientsLogo.map((client, index) => (
            <Image
              key={`client-logo-${client.name + index}`}
              className='h-12 min-w-fit object-contain'
              src={client.image}
              alt={client.name + '-logo'}
              width={158}
              height={48}
            />
          ))}
          {/* <Image
            className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
            src={'/assets/clients/ddk.svg'}
            alt='DDk Partner logo'
            width={158}
            height={48}
          />

          <Image
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
            src={'/assets/clients/invo.svg'}
            alt='Invo Client logo'
            width={158}
            height={48}
          />
          <Image
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
            src={'/assets/clients/casheer.svg'}
            alt='Casheer Client logo'
            width={158}
            height={48}
          />
          <Image
            className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
            src={'/assets/clients/nbb.svg'}
            alt='NBB Client logo'
            width={158}
            height={48}
          />
          <Image
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
            src={'/assets/clients/afs.svg'}
            alt='AFS Client logo'
            width={158}
            height={48}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutLogoCloud;
