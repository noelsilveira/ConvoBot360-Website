'use server';

import Link from 'next/link';
import { LogoutButton } from './LogoutButton';
import { TbLocationFilled } from 'react-icons/tb';
import { accessTokenChecker } from '@/app/actions/auth';
import { mapLocation } from '@/constants/company';

const TopBar = async () => {
  const access_token = await accessTokenChecker();

  return (
    <div className='bg-gradient-to-r from-brand-500 to-brand-500'>
      <div className='mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        {/* Geolocation #TODO #FIXME */}
        <form className='block lg:block lg:flex-1'>
          <div className='flex'>
            <label htmlFor='desktop-geolocation' className='sr-only'>
              Geolocation
            </label>
            <div>
              <Link
                href={mapLocation}
                target='_blank'
                rel='noopener'
                referrerPolicy='no-referrer'
                className='inline-flex items-center justify-center gap-2 text-sm text-white'
              >
                <TbLocationFilled />
                Kingdom of Bahrain, West Asia
              </Link>
            </div>
          </div>
        </form>
        {/* <p className='flex-1 text-center text-sm font-medium text-white lg:flex-none'>
          Get free delivery on orders over $100
        </p> */}

        <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
          {!access_token ? (
            <>
              <Link
                href='/auth/sign-up'
                className='text-sm font-medium text-white hover:text-gray-100'
              >
                Create an account
              </Link>
              <span className='h-6 w-px bg-gray-100' aria-hidden='true' />
              <Link
                href='/auth/login'
                className='text-sm font-medium text-white hover:text-gray-100'
              >
                Sign in
              </Link>
            </>
          ) : (
            <>
              <Link
                href='/user/profile'
                className='text-sm font-medium text-white hover:text-gray-100'
              >
                View profile
              </Link>
              <span className='h-6 w-px bg-gray-100' aria-hidden='true' />
              {/* Logout Button */}
              <LogoutButton />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
