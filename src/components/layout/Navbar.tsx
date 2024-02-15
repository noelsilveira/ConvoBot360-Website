'use client';
import { navigation } from '@/constants/navigation';
import { cn } from '@/lib/utils';
import { useNavigationStore } from '@/store/navigationStore';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import CustomToaster from '../toasts/CustomToast';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
  const { toggleMenu } = useNavigationStore();
  const router = useRouter();
  const pathname = usePathname();

  const handleButtonClick = () => {
    toast.custom((t) => (
      <CustomToaster t={t}>Yayyy! Product added to bag</CustomToaster>
    ));
  };

  return (
    <header className='relative z-10 border-b border-gray-200 bg-white'>
      <nav
        aria-label='Top'
        className='z-40 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
      >
        <div>
          <div className='flex h-16 items-center justify-start'>
            <button
              type='button'
              className='relative -ml-2 rounded-md bg-white p-2 text-gray-400 lg:hidden'
              onClick={() => toggleMenu(true)}
            >
              <span className='absolute -inset-0.5' />
              <span className='sr-only'>Open menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>

            {/* Logo */}
            <div className='ml-4 flex lg:ml-0'>
              <Link href='/'>
                <span className='sr-only'>CB360</span>
                <Image
                  height={40}
                  width={80}
                  className='h-8 w-auto sm:h-8'
                  src='/cb360-logo.svg'
                  alt='CB360 logo'
                />
              </Link>
            </div>

            {/* Flyout menus */}
            <Popover.Group className='hidden lg:ml-8 lg:block lg:self-stretch'>
              <div className='flex h-full space-x-8'>
                {navigation.pages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className={cn(
                      `flex items-center text-sm font-medium`,
                      pathname === page.href
                        ? 'font-semibold text-brand-600 hover:text-brand-500'
                        : 'text-gray-700 hover:text-gray-800'
                    )}
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </Popover.Group>

            <div className='ml-auto flex items-center justify-end'>
              {/* Search */}
              <div className='flex lg:ml-6'>
                <button
                  type='button'
                  // onClick={handleButtonClick}
                  className='p-2 text-gray-400 hover:text-gray-500'
                >
                  <span className='sr-only'>Search</span>
                  <MagnifyingGlassIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              {/* Cart */}
              {/* <CartIconButton /> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
