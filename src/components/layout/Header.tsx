import { navigation } from '@/constants/navigation';
import { cn } from '@/lib/utils';
import { useNavigationStore } from '@/store/navigationStore';
import { Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import React, { Fragment } from 'react';

const Header = () => {
  const { toggleMenu } = useNavigationStore();

  return (
    <header className='relative overflow-hidden'>
      {/* Top navigation */}
      <nav
        aria-label='Top'
        className='relative z-20 bg-white bg-opacity-90 backdrop-blur-xl backdrop-filter'
      >
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center'>
            <button
              type='button'
              className='relative rounded-md bg-white p-2 text-gray-400 lg:hidden'
              onClick={() => toggleMenu(true)}
            >
              <span className='absolute -inset-0.5' />
              <span className='sr-only'>Open menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>

            {/* Logo */}
            <div className='ml-4 flex lg:ml-0'>
              <a href='#'>
                <span className='sr-only'>Your Company</span>
                <img className='h-12 w-auto' src='/cb360-logo.jpg' alt='' />
              </a>
            </div>

            {/* Flyout menus */}
            <Popover.Group className='hidden lg:ml-8 lg:block lg:self-stretch'>
              <div className='flex h-full space-x-8'>
                {navigation.categories.map((category) => (
                  <Popover key={category.name} className='flex'>
                    {({ open }) => (
                      <>
                        <div className='relative flex'>
                          <Popover.Button
                            className={cn(
                              open
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-700 hover:text-gray-800',
                              'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                            )}
                          >
                            {category.name}
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-200'
                          enterFrom='opacity-0'
                          enterTo='opacity-100'
                          leave='transition ease-in duration-150'
                          leaveFrom='opacity-100'
                          leaveTo='opacity-0'
                        >
                          <Popover.Panel className='absolute inset-x-0 top-full bg-white text-sm text-gray-500'>
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div
                              className='absolute inset-0 top-1/2 bg-white shadow'
                              aria-hidden='true'
                            />
                            {/* Fake border when menu is open */}
                            <div
                              className='absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8'
                              aria-hidden='true'
                            >
                              <div
                                className={cn(
                                  open ? 'bg-gray-200' : 'bg-transparent',
                                  'h-px w-full transition-colors duration-200 ease-out'
                                )}
                              />
                            </div>

                            <div className='relative'>
                              <div className='mx-auto max-w-7xl px-8'>
                                <div className='grid grid-cols-2 gap-x-8 gap-y-10 py-16'>
                                  <div className='col-start-2 grid grid-cols-2 gap-x-8'>
                                    {category.featured.map((item) => (
                                      <div
                                        key={item.name}
                                        className='group relative text-base sm:text-sm'
                                      >
                                        <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
                                          <img
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            className='object-cover object-center'
                                          />
                                        </div>
                                        <a
                                          href={item.href}
                                          className='mt-6 block font-medium text-gray-900'
                                        >
                                          <span
                                            className='absolute inset-0 z-10'
                                            aria-hidden='true'
                                          />
                                          {item.name}
                                        </a>
                                        <p aria-hidden='true' className='mt-1'>
                                          Shop now
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                  <div className='row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm'>
                                    {category.sections.map((section) => (
                                      <div key={section.name}>
                                        <p
                                          id={`${section.name}-heading`}
                                          className='font-medium text-gray-900'
                                        >
                                          {section.name}
                                        </p>
                                        <ul
                                          role='list'
                                          aria-labelledby={`${section.name}-heading`}
                                          className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'
                                        >
                                          {section.items.map((item) => (
                                            <li
                                              key={item.name}
                                              className='flex'
                                            >
                                              <a
                                                href={item.href}
                                                className='hover:text-gray-800'
                                              >
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ))}

                {navigation.pages.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'
                  >
                    {page.name}
                  </a>
                ))}
              </div>
            </Popover.Group>

            <div className='ml-auto flex items-center'>
              <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                <a
                  href='#'
                  className='text-sm font-medium text-gray-700 hover:text-gray-800'
                >
                  Sign in
                </a>
                <span className='h-6 w-px bg-gray-200' aria-hidden='true' />
                <a
                  href='#'
                  className='text-sm font-medium text-gray-700 hover:text-gray-800'
                >
                  Create account
                </a>
              </div>

              <div className='hidden lg:ml-8 lg:flex'>
                <a
                  href='#'
                  className='flex items-center text-gray-700 hover:text-gray-800'
                >
                  <img
                    src='https://tailwindui.com/img/flags/flag-canada.svg'
                    alt=''
                    className='block h-auto w-5 flex-shrink-0'
                  />
                  <span className='ml-3 block text-sm font-medium'>CAD</span>
                  <span className='sr-only'>, change currency</span>
                </a>
              </div>

              {/* Search */}
              <div className='flex lg:ml-6'>
                <a href='#' className='p-2 text-gray-400 hover:text-gray-500'>
                  <span className='sr-only'>Search</span>
                  <MagnifyingGlassIcon className='h-6 w-6' aria-hidden='true' />
                </a>
              </div>

              {/* Cart */}
              <div className='ml-4 flow-root lg:ml-6'>
                <a href='#' className='group -m-2 flex items-center p-2'>
                  <ShoppingBagIcon
                    className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                    aria-hidden='true'
                  />
                  <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
                    0
                  </span>
                  <span className='sr-only'>items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <div className='pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40'>
        <div className='relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8'>
          <div className='sm:max-w-lg'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Summer styles are finally here
            </h1>
            <p className='mt-4 text-xl text-gray-500'>
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesn&apos;t care if you live or
              die.
            </p>
          </div>
          <div>
            <div className='mt-10'>
              {/* Decorative image grid */}
              <div
                aria-hidden='true'
                className='pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl'
              >
                <div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
                  <div className='flex items-center space-x-6 lg:space-x-8'>
                    <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                      <div className='h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                    </div>
                    <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                    </div>
                    <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href='#'
                className='inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700'
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
