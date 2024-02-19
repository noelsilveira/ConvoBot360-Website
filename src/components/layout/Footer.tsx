import { footerNavigation } from '@/constants/navigation';
import { WHATSAPP_LANDING_URL } from '@/constants/urls';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-white' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8'>
            <Image
              className='h-12 object-contain object-left'
              height={60}
              width={200}
              src={'/cb360-logo.svg'}
              alt='CB360 logo'
            />
            <p className='text-sm leading-6 text-gray-600'>
              Revolutionize Your Growth: Our powerful tools ensures reduced OpEx
              and doubles your business success
            </p>
            <div className='flex space-x-6'>
              {footerNavigation.connect.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-gray-400 hover:text-gray-500'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-6 w-6' aria-hidden='true' />
                </Link>
              ))}
            </div>
          </div>
          <div className='mt-16 grid grid-cols-2 gap-8 gap-y-12 lg:grid-cols-3 xl:col-span-3 xl:mt-0'>
            {/* <div className='bg-blue-50 md:grid md:grid-cols-2 md:gap-8'> */}
            <div>
              <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                Company
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                Account
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {footerNavigation.account.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={WHATSAPP_LANDING_URL}
                    className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                  >
                    WhatsApp Login
                  </Link>
                </li>
              </ul>
            </div>
            {/* </div> */}
            {/* <div className='md:grid md:grid-cols-2 md:gap-8'> */}
            <div>
              <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                Support
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {footerNavigation.support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* </div> */}
          </div>
          <div className='mt-10 xl:mt-0'>
            <h3 className='text-sm font-semibold leading-6 text-gray-900'>
              Subscribe to our newsletter
            </h3>
            <p className='mt-2 text-sm leading-6 text-gray-600'>
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className='mt-6 sm:flex sm:max-w-md'>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                type='email'
                name='email-address'
                id='email-address'
                autoComplete='email'
                required
                className='w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full'
                placeholder='Enter your email'
              />
              <div className='mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0'>
                <button
                  type='submit'
                  className='flex w-full items-center justify-center rounded-md bg-brand-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600'
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24'>
          <p className='text-xs leading-5 text-gray-500'>
            &copy; {new Date().getFullYear()} • Convobot360 • CB360. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
