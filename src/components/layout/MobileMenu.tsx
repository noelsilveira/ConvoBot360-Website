'use client';
import { mapLocation } from '@/constants/company';
import { navigation } from '@/constants/navigation';
import { cn } from '@/lib/utils';
import { useNavigationStore } from '@/store/navigationStore';
import { Dialog, Tab, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Fragment } from 'react';
import { TbLocationFilled } from 'react-icons/tb';

const MobileMenu = () => {
  const { openMenu, toggleMenu } = useNavigationStore();
  return (
    <Transition.Root show={openMenu} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-40 lg:hidden'
        onClose={() => toggleMenu(false)}
      >
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 z-40 flex'>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <Dialog.Panel className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
              <div className='flex px-4 pb-2 pt-5'>
                <button
                  type='button'
                  className='relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none'
                  onClick={() => toggleMenu(false)}
                >
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              {/* Links */}

              <div className='space-y-6 px-4 py-6'>
                {navigation.pages.map((page) => (
                  <div key={page.name} className='flow-root'>
                    <a
                      href={page.href}
                      className='-m-2 block p-2 font-medium text-gray-900'
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                <div className='flow-root'>
                  <Link
                    href='/auth/login'
                    className='-m-2 block p-2 font-medium text-gray-900'
                  >
                    Sign in
                  </Link>
                </div>
                <div className='flow-root'>
                  <a
                    href='#'
                    className='-m-2 block p-2 font-medium text-gray-900'
                  >
                    Create account
                  </a>
                </div>
              </div>

              <div className='border-t border-gray-200 px-4 py-6'>
                <div className='flex'>
                  <label htmlFor='mobile-geolocation' className='sr-only'>
                    Geolocation
                  </label>
                  <div>
                    <Link
                      href={mapLocation}
                      target='_blank'
                      rel='noopener'
                      referrerPolicy='no-referrer'
                      className='inline-flex items-center justify-center gap-2 text-base text-gallery-500'
                    >
                      <TbLocationFilled />
                      Kingdom of Bahrain, West Asia
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileMenu;
