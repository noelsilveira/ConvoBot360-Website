'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SignUpPage = () => {
  return (
    <section className=''>
      <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
        <aside className='relative block h-20 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6'>
          <Image
            height={2000}
            width={2000}
            alt='Pattern'
            src='https://images.unsplash.com/photo-1530669244764-0909211cd8e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3JhbmdlJTIwY29sb3IlMjBwYXR0ZXJufGVufDB8fDB8fHwy'
            className='absolute inset-0 h-full w-full object-cover'
          />
        </aside>

        <main className='flex items-center justify-center px-6 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
          <div className='max-w-xl lg:max-w-3xl'>
            <Link className='block text-brand-600' href='/'>
              <span className='sr-only'>Home</span>
              <Image
                height={50}
                width={100}
                className='h-8 w-auto md:h-10'
                src={'/cb360-logo.svg'}
                alt='CB360 Logo'
              />
            </Link>

            <h1 className='mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl'>
              Welcome to CB360 🛍️
            </h1>

            <p className='mt-4 leading-relaxed text-gray-500'>
              Let us take care of all your shopping needs! Shop with us because
              you’re worth it.
            </p>

            <form action='#' className='mt-8 grid grid-cols-6 gap-6'>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='FirstName'
                  className='block text-sm font-medium text-gray-700'
                >
                  First Name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    id='FirstName'
                    name='first_name'
                    placeholder='Enter your first name'
                    className='block w-full rounded-md border-0 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='LastName'
                  className='block text-sm font-medium text-gray-700'
                >
                  Last Name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    id='LastName'
                    name='last_name'
                    placeholder='Enter your last name'
                    className='block w-full rounded-md border-0 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='col-span-6'>
                <label
                  htmlFor='Email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email{' '}
                </label>
                <div className='mt-1'>
                  <input
                    type='email'
                    id='Email'
                    name='email'
                    placeholder='your-name@mail.com'
                    className='block w-full rounded-md border-0 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='Password'
                  className='block text-sm font-medium text-gray-700'
                >
                  Password
                </label>
                <div className='mt-1'>
                  <input
                    type='password'
                    id='Password'
                    name='password'
                    placeholder='minimum 8 characters'
                    className='block w-full rounded-md border-0 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='PasswordConfirmation'
                  className='block text-sm font-medium text-gray-700'
                >
                  Password Confirmation
                </label>
                <div className='mt-1'>
                  <input
                    type='password'
                    id='PasswordConfirmation'
                    name='password_confirmation'
                    placeholder='must be the same characters'
                    className='block w-full rounded-md border-0 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='col-span-6'>
                <label htmlFor='MarketingAccept' className='flex gap-4'>
                  <input
                    type='checkbox'
                    id='MarketingAccept'
                    name='marketing_accept'
                    className='h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-gray-700'>
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>

              <div className='col-span-6'>
                <p className='text-sm text-gray-500'>
                  By creating an account, you agree to our
                  <a href='#!' className='text-gray-700 underline'>
                    {' '}
                    terms and conditions{' '}
                  </a>
                  and
                  <a href='#!' className='ml-1 text-gray-700 underline'>
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className='col-span-6 sm:flex sm:items-center sm:gap-4'>
                <button className='inline-block shrink-0 rounded-md border border-brand-500 bg-brand-500 px-12 py-3 text-sm font-medium text-brand-50 transition hover:bg-brand-600 hover:text-white focus:outline-none focus:ring active:text-brand-600'>
                  Create an account
                </button>

                <p className='mt-4 text-sm text-gray-500 sm:mt-0'>
                  Already have an account?
                  <Link
                    href='/auth/login'
                    className='ml-2 text-brand-600 underline'
                  >
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default SignUpPage;
