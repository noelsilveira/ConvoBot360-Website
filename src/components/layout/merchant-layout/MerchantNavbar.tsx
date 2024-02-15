import CartIconButton from '@/components/checkout/CartIconButton';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import CategoriesNavigation from './CatagoriesNavigation';
import FlyoutMenu from './FlyoutMenu';
import MenuButton from './MenuButton';

const MerchantNavbar = () => {
  // const handleButtonClick = () => {
  //   toast.custom((t) => (
  //     <CustomToaster t={t}>Yayyy! Product added to bag</CustomToaster>
  //   ));
  // };

  return (
    <header className='relative z-10 border-b border-gray-200 bg-white'>
      <nav
        aria-label='Top'
        className='z-40 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
      >
        <div>
          <div className='flex h-16 items-center justify-start'>
            {/* Menu Button */}
            <MenuButton />
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
            <FlyoutMenu>
              <div className='relative bg-white shadow-xl'>
                <div className='mx-auto max-w-7xl px-8'>
                  <div className='grid grid-cols-2 gap-x-8 gap-y-10 pb-16 pt-6'>
                    <div className='row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm'>
                      {/* Categories */}
                      <CategoriesNavigation />
                    </div>
                  </div>
                </div>
              </div>
            </FlyoutMenu>

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
              <CartIconButton />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MerchantNavbar;
