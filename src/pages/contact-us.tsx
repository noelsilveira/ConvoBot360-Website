import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import {
  contactDetails,
  infoEmail,
  infoEmailBody,
  infoEmailSubject,
  mapLocation,
} from '@/constants/company';
import Link from 'next/link';
import {
  TbBuildingSkyscraper,
  TbBuildingStore,
  TbMail,
  TbPhone,
} from 'react-icons/tb';
import GetNotified from '@/components/about/GetNotified';

const ContactPage = () => {
  return (
    <MainLayout title='Contact us - CB360'>
      <div className='relative isolate bg-white'>
        <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
          <div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
              <div className='absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gallery-50 ring-1 ring-gray-900/10 lg:w-1/2'>
                <svg
                  className='absolute inset-0 h-full w-full stroke-brand-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
                  aria-hidden='true'
                >
                  <defs>
                    <pattern
                      id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
                      width={200}
                      height={200}
                      x='100%'
                      y={-1}
                      patternUnits='userSpaceOnUse'
                    >
                      <path d='M130 200V.5M.5 .5H200' fill='none' />
                    </pattern>
                  </defs>
                  <rect
                    width='100%'
                    height='100%'
                    strokeWidth={0}
                    fill='white'
                  />
                  <svg
                    x='100%'
                    y={-1}
                    className='overflow-visible fill-brand-50'
                  >
                    <path d='M-470.5 0h201v201h-201Z' strokeWidth={0} />
                  </svg>
                  <rect
                    width='100%'
                    height='100%'
                    strokeWidth={0}
                    fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
                  />
                </svg>
              </div>
              <h2 className='text-5xl font-bold tracking-tight text-gray-900'>
                Get in touch
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Our team is happy to answer your questions. Fill out the form
                and we’ll be in touch as soon as possible.
              </p>
              <dl className='mt-10 space-y-4 text-base leading-7 text-gray-600'>
                <div className='flex gap-x-4'>
                  <dt className='flex-none'>
                    <span className='sr-only'>Company</span>
                    <TbBuildingSkyscraper
                      className='h-7 w-6 text-brand-400'
                      aria-hidden='true'
                    />
                  </dt>
                  <dd>{contactDetails.company}</dd>
                </div>
                <Link
                  href={mapLocation}
                  target='_blank'
                  rel='noopener'
                  referrerPolicy='no-referrer'
                  className='flex max-w-sm gap-x-4 hover:text-gray-900'
                >
                  <dt className='flex-none'>
                    <span className='sr-only'>Address</span>
                    <TbBuildingStore
                      className='h-7 w-6 text-brand-400'
                      aria-hidden='true'
                    />
                  </dt>
                  <dd>{contactDetails.address}</dd>
                </Link>
                <div className='flex gap-x-4'>
                  <dt className='flex-none'>
                    <span className='sr-only'>Telephone</span>
                    <TbPhone
                      className='h-7 w-6 text-brand-400'
                      aria-hidden='true'
                    />
                  </dt>
                  <dd>
                    <a
                      className='hover:text-gray-900'
                      href={`tel: ${contactDetails.phone}`}
                    >
                      {contactDetails.phone}
                    </a>
                  </dd>
                </div>
                <div className='flex gap-x-4'>
                  <dt className='flex-none'>
                    <span className='sr-only'>Email</span>
                    <TbMail
                      className='h-7 w-6 text-brand-400'
                      aria-hidden='true'
                    />
                  </dt>
                  <dd>
                    <Link
                      className='hover:text-gray-900'
                      href={`mailto:${
                        infoEmail + infoEmailSubject + infoEmailBody
                      }`}
                    >
                      {infoEmail}
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            action='#'
            method='POST'
            className='px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48'
          >
            <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
              <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                <div>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    First name
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      placeholder='Your first name'
                      autoComplete='given-name'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    Last name
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      name='last-name'
                      placeholder='Your last name'
                      id='last-name'
                      autoComplete='family-name'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    Email
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='youremail@abc.com'
                      autoComplete='email'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='phone-number'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    Phone number
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='tel'
                      name='phone-number'
                      id='phone-number'
                      placeholder='03XX-XXXXXXX'
                      autoComplete='tel'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    Message
                  </label>
                  <div className='mt-2.5'>
                    <textarea
                      name='message'
                      id='message'
                      placeholder='Type your message here..'
                      rows={4}
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6'
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className='mt-8 flex justify-end'>
                <button
                  type='submit'
                  className='rounded-md bg-brand-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600'
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
        <GetNotified />
      </div>
    </MainLayout>
  );
};

export default ContactPage;
