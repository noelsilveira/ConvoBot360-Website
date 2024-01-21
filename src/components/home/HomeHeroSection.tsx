import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';
import { TbArrowUpRight, TbBrandMeta, TbRobotFace } from 'react-icons/tb';
import {
  BackgroundGradient,
  SVGBackgroundPattern,
} from '../about/AboutHeroSection';
import Link from 'next/link';

const HomeHeroSection = () => {
  return (
    <div className='relative isolate'>
      <SVGBackgroundPattern />
      <BackgroundGradient />
      {/* <svg
        className='absolute inset-0 -z-10 h-full w-full stroke-brand-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
        aria-hidden='true'
      >
        <defs>
          <pattern
            id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
            width={200}
            height={200}
            x='50%'
            y={-1}
            patternUnits='userSpaceOnUse'
          >
            <path d='M100 200V.5M.5 .5H200' fill='none' />
          </pattern>
        </defs>
        <svg x='50%' y={-1} className='overflow-visible fill-brand-50'>
          <path
            d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
            strokeWidth={0}
          />
        </svg>
        <rect
          width='100%'
          height='100%'
          strokeWidth={0}
          fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
        />
      </svg> */}
      <div className='mx-auto max-w-7xl px-6 py-4 pb-8 sm:py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-10'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto'>
          <Image
            src={'/assets/brand/meta-partner.svg'}
            alt='Meta Business Partner'
            width={200}
            height={50}
            className='h-20 object-contain object-left lg:h-28'
          />
          <div className='flex'>
            <div className='relative flex items-center gap-x-4 rounded-full bg-brand-50/50 px-4 py-1 text-xs leading-6 text-gray-600 ring-1 ring-gray-900/10 backdrop-blur-md hover:ring-gray-900/20 lg:text-sm'>
              <span className='inline-flex items-center justify-center gap-2 font-medium text-gallery-700'>
                Unlock the power of bots
                <TbRobotFace className='h-5 w-5' />
              </span>
              <span className='h-4 w-px bg-gray-900/10' aria-hidden='true' />
              <a href='#' className='flex items-center gap-x-1'>
                <span className='absolute inset-0' aria-hidden='true' />
                Start now
                <TbArrowUpRight
                  className='-mr-2 h-5 w-5 text-gray-500'
                  aria-hidden='true'
                />
              </a>
            </div>
          </div>
          <h1 className='mt-10 max-w-lg text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Revolutionize Your{' '}
            <span className='font-serif font-semibold italic text-brand-500'>
              Growth:
            </span>{' '}
            Our powerful tools ensures reduced OpEx and doubles your{' '}
            <span className='text-emerald-500'>business success</span>
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            We’re passionate about building the technology to give you the best
            tools to operate your business.
          </p>
          <div className='mt-10 flex items-center gap-x-6'>
            <Link
              href='/contact-us'
              className='rounded-full bg-brand-500 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600'
            >
              Get started
            </Link>
            <Link
              href='/about'
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              Learn more <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
        <div className='mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow'>
          <Image
            width={400}
            height={1000}
            quality={100}
            priority
            placeholder='blur'
            blurDataURL='/assets/mockups/app-03.png'
            alt='app-screen'
            src={'/assets/mockups/app-03.png'}
            className='mx-auto w-[22.875rem] max-w-full drop-shadow-xl'
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
