import GetNotified from '@/components/about/GetNotified';
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import React from 'react';
import { TbArrowUpRight } from 'react-icons/tb';
const jobs = [
  {
    name: 'Sales Manager',
    role: 'Direct Sales Executive',
    // role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '/contact-us',
    lastUploaded: '3h ago',
    lastUploadedDateTime: '2023-01-23T13:23Z',
    tags: ['On site', 'Full time'],
  },
  {
    name: 'Finance Manager',
    role: 'Finance Systems Expert',
    // role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '/contact-us',
    lastUploaded: '3h ago',
    lastUploadedDateTime: '2023-01-23T13:23Z',
    tags: ['On site', 'Full time', 'Long-term role'],
  },
  {
    name: 'Head of Marketing',
    role: 'Digital Product Marketing',
    // role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '/contact-us',
    lastUploaded: '3h ago',
    lastUploadedDateTime: '2023-01-23T13:23Z',
    tags: ['On site', 'Full time', 'Long-term role'],
  },
];

const CareersPage = () => {
  return (
    <MainLayout title='Careers - CB360 Convobot360'>
      <CareersHeroSection />
      <div className='mx-auto max-w-7xl px-6 pb-6 sm:pb-12 lg:px-8'>
        <h2 className='py-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Job Openings
        </h2>
        <ul
          role='list'
          className='divide-y divide-gray-100 border-t border-gray-300'
        >
          {jobs.map((job) => (
            <li key={job.role} className='relative py-6 lg:py-8'>
              <div className='mx-auto flex justify-between gap-x-6'>
                <div className='flex min-w-0 gap-x-4'>
                  {/* <img
                      className='h-12 w-12 flex-none rounded-full bg-gray-50'
                      src={job.imageUrl}
                      alt=''
                    /> */}
                  <div className='min-w-0 flex-auto'>
                    <p className='text-2xl font-semibold leading-6 text-gray-900'>
                      <a href={job.href} className='underline'>
                        <span className='absolute inset-x-0 -top-px bottom-0' />
                        {job.name}
                      </a>
                    </p>
                    <p className='mt-2 flex text-lg text-gray-500'>
                      <a
                        href={`mailto:${job.role}`}
                        className='relative truncate hover:underline'
                      >
                        {job.role}
                      </a>
                    </p>
                    <div className='mt-2 inline-flex flex-wrap items-center justify-start gap-2 text-sm font-medium tracking-tight'>
                      {job.tags.map((tag, i) => (
                        <span
                          key={'job-tag-' + tag + i}
                          className='rounded-full border border-gallery-700/50 bg-gallery-50 px-3 py-1.5'
                        >
                          {tag}
                        </span>
                      ))}

                      {/* <span className='rounded-full border border-brand-700/50 bg-brand-50 px-3 py-1.5'>
                          Full time
                        </span> */}
                    </div>
                  </div>
                </div>
                <div className='flex shrink-0 items-start gap-x-4'>
                  <div className='hidden sm:flex sm:flex-col sm:items-end'>
                    <Link
                      href={'/contact-us'}
                      className='inline-flex items-center gap-1 text-lg font-medium leading-6 text-gray-900 underline duration-300 hover:text-gallery-800'
                    >
                      {/* {job.role} */}
                      Apply now <TbArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className='flex justify-center border-t border-gray-300 pt-8 text-center text-gray-500 lg:pt-16'>
          <p>New jobs will be posted here. Stay tuned!</p>
        </div>
      </div>
      <GetNotified />
    </MainLayout>
  );
};

export default CareersPage;

const CareersHeroSection = () => {
  return (
    <div className='overflow-hidden bg-white py-16'>
      <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
          <div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Be a part of our journey
            </h2>
            <p className='mt-6 text-xl leading-8 text-gray-600'>
              We are looking for passionate people to join us on our journey. We
              value flat hierarchies, clear communication, and full ownership
              and responsibility.
            </p>
            <div className='mt-10 flex'>
              <a
                href='#'
                className='rounded-md bg-brand-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600'
              >
                Join our team <span aria-hidden='true'>&rarr;</span>
              </a>
            </div>
          </div>
          {/* TODO */}
          {/* <div className='flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents'>
            <div className='w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end'>
              <Image
                height={500}
                width={1000}
                src='/assets/about/about-hero-02.jpg'
                alt='career-image'
                className='aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover'
              />
            </div>
            <div className='contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8'>
              <div className='order-first flex w-64 flex-none justify-end self-end lg:w-auto'>
                <Image
                  height={500}
                  width={1000}
                  src='/assets/about/about-hero-05.jpg'
                  alt='career-image'
                  className='aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                />
              </div>
              <div className='flex w-96 flex-auto justify-end lg:w-auto lg:flex-none'>
                <Image
                  height={500}
                  width={1000}
                  src='/assets/about/about-hero-07.jpg'
                  alt='career-image'
                  className='aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                />
              </div>
              <div className='hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none'>
                <Image
                  height={500}
                  width={1000}
                  src='/assets/about/about-hero-01.jpg'
                  alt='career-image'
                  className='aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover'
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
