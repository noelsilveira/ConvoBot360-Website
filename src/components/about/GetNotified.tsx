import {
  infoEmail,
  infoEmailBody,
  infoEmailSubject,
} from '@/constants/company';
import Link from 'next/link';
import React from 'react';

const GetNotified = () => {
  return (
    <div className='mx-auto mt-12 max-w-7xl sm:px-6 lg:mb-12 lg:mt-32 lg:px-8'>
      <div className='relative isolate overflow-hidden bg-gray-950 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32'>
        <h2 className='mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl'>
          Take your business digital today.
        </h2>
        <p className='mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300'>
          Despite diverse backgrounds, our shared belief is in empowering local
          brands for sustainable growth.
        </p>
        <form className='mx-auto mt-10 flex max-w-md justify-center gap-x-4'>
          <Link
            href={`mailto:${infoEmail + infoEmailSubject + infoEmailBody}`}
            className='flex-none rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
          >
            Try out CB360
          </Link>
        </form>
        <svg
          viewBox='0 0 1024 1024'
          className='absolute left-1/2 top-1/4 -z-10 h-[100rem] w-[100rem] -translate-x-1/2'
          aria-hidden='true'
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
            fillOpacity='0.7'
          />
          <defs>
            <radialGradient
              id='759c1415-0410-454c-8f7c-9a820de03641'
              cx={0}
              cy={0}
              r={1}
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(512 512) rotate(90) scale(512)'
            >
              <stop stopColor='#ff8400' />
              <stop offset={1} stopColor='#ff9c0a' stopOpacity={0} />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default GetNotified;

export const DarkGradientSVG = () => {
  return (
    <svg
      viewBox='0 0 1024 1024'
      className='absolute left-1/2 top-1/4 -z-10 h-[100rem] w-[100rem] -translate-x-1/2'
      aria-hidden='true'
    >
      <circle
        cx={512}
        cy={512}
        r={512}
        fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
        fillOpacity='0.7'
      />
      <defs>
        <radialGradient
          id='759c1415-0410-454c-8f7c-9a820de03641'
          cx={0}
          cy={0}
          r={1}
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(512 512) rotate(90) scale(512)'
        >
          <stop stopColor='#ff8400' />
          <stop offset={1} stopColor='#ff9c0a' stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  );
};
