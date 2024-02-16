'use server';
'use server';
import { mapLocation } from '@/constants/company';
import { navigation } from '@/constants/navigation';
import { useNavigationStore } from '@/store/navigationStore';
import { Dialog, Tab, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { TbLocationFilled, TbLogout, TbLogout2 } from 'react-icons/tb';
import MobileMenuWrapper from './MobileMenuWrapper';
import { accessTokenChecker, handleLogout } from '@/app/actions/auth';
import MobileMerchantRelatedMenu from './MobileMerchantRelatedMenu';
import { MobileLogoutButton } from './LogoutButton';

const MobileMenu = async () => {
  const access_token = await accessTokenChecker();

  return (
    <MobileMenuWrapper>
      {/* Links */}

      <ul className='space-y-6 px-4 py-6'>
        {/* Merchant related pages here */}
        <MobileMerchantRelatedMenu />
        {navigation.pages.map((page) => (
          <div key={page.name} className='flow-root'>
            <Link
              href={page.href}
              className='-m-2 block p-2 font-medium text-gray-900'
            >
              {page.name}
            </Link>
          </div>
        ))}
      </ul>

      <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
        {!access_token ? (
          <>
            <div>
              <Link
                href='/auth/login'
                className='-m-2 block p-2 font-medium text-gray-900'
              >
                Sign in
              </Link>
            </div>
            <div>
              <Link
                href='/auth/sign-up'
                className='-m-2 block p-2 font-medium text-gray-900'
              >
                Create account
              </Link>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link
                href='/auth/login'
                className='-m-2 block p-2 font-medium text-gray-900'
              >
                View profile
              </Link>
            </div>
            {/* Mobile Logout button */}
            <MobileLogoutButton />
          </>
        )}
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
      {/* mobile nav wrapper end */}
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
