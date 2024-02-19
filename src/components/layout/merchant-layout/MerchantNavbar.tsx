import CartIconButton from '@/components/checkout/CartIconButton';
import Image from 'next/image';
import Link from 'next/link';
import CategoriesNavigation from './CatagoriesNavigation';
import FlyoutMenu from './FlyoutMenu';
import { ProductListingParamsType } from '@/types/products';
import { cookies } from 'next/headers';

const MerchantNavbar = ({ params }: ProductListingParamsType) => {
  const logo_url = cookies().get('logo_url')?.value;
  const cb360Logo = '/cb360-logo.svg';

  return (
    <header className='relative z-10 border-b border-gray-200 bg-white'>
      <nav
        aria-label='Top'
        className='z-40 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
      >
        <div>
          <div className='flex h-16 items-center justify-start'>
            {/* Menu Button */}
            {/* <MenuButton /> */}
            {/* Logo */}
            <div className='ml-4 flex lg:ml-0'>
              <Link href='/'>
                <span className='sr-only'>CB360</span>
                <Image
                  height={40}
                  width={80}
                  className='h-8 w-auto sm:h-8'
                  src={logo_url ? logo_url : cb360Logo}
                  alt='Merchant logo'
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
                      <CategoriesNavigation params={params} />
                    </div>
                  </div>
                </div>
              </div>
            </FlyoutMenu>

            <div className='ml-0 flex flex-1 items-center justify-end'>
              {/* Search */}
              {/* <div className='flex flex-1 items-center justify-end'>
                <SearchProduct />
              </div> */}

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
