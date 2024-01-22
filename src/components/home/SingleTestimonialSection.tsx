import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const SingleTestimonialSection = () => {
  return (
    <section className='bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <figure className='mx-auto max-w-2xl'>
        <p className='sr-only'>5 out of 5 stars</p>
        <div className='flex gap-x-1 text-brand-400'>
          <StarIcon className='h-5 w-5 flex-none' aria-hidden='true' />
          <StarIcon className='h-5 w-5 flex-none' aria-hidden='true' />
          <StarIcon className='h-5 w-5 flex-none' aria-hidden='true' />
          <StarIcon className='h-5 w-5 flex-none' aria-hidden='true' />
          <StarIcon className='h-5 w-5 flex-none' aria-hidden='true' />
        </div>
        <blockquote className='mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9'>
          <p>
            &quot;With CB360&apos;s all-out integration features, we have been
            able to manage all of our orders efficiently and let our customers
            decide when they want their order delivered. We never miss an order
            and always keep our customers happy!! Thanks a lot! ⭐️&quot;
          </p>
        </blockquote>
        <figcaption className='mt-10 flex items-center gap-x-6'>
          <Image
            className='h-12 w-12 rounded-full bg-gray-50 object-cover object-top'
            width={40}
            height={40}
            src={'/assets/clients/DDK-owner.jpeg'}
            alt='DDK Owner'
          />
          <div className='text-sm leading-6'>
            <div className='font-semibold text-gray-900'>
              Nadeem Usman Dhaduk
            </div>
            <div className='mt-0.5 text-gray-600'>
              Founder, Desi Dastar Khawn Restaurant
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export default SingleTestimonialSection;
