import CartIconButton from '@/components/checkout/CartIconButton';
import Image from 'next/image';
import Link from 'next/link';
import CategoriesNavigation from './CatagoriesNavigation';
import FlyoutMenu from './FlyoutMenu';
import { ProductListingParamsType } from '@/types/products';
import { cookies } from 'next/headers';
import { decodeUrlToString } from '@/lib/format';
import { Suspense } from 'react';
import SearchProduct from '@/components/product/SearchProduct';
import CategoryNameInProductList from '@/components/product/estore/category/CategoryNameInProductList';
import SortFilterMenu from '../product-layout/SortFilterMenu';
import FilterCategoriesButton from '@/components/product/estore/FilterCategoriesButton';
import { TbFilter, TbFilterFilled } from 'react-icons/tb';
import SearchAndFilterHeader from './SearchAndFilterHeader';

const MerchantNavbar = ({ params }: ProductListingParamsType) => {
  const logo_url = cookies().get('logo_url')?.value;
  console.log(params);

  const parsed_logo_url = logo_url && decodeUrlToString(logo_url);
  const cb360Logo = '/cb360-logo.svg';

  return (
    <header className='relative z-10 border-b border-gray-200 bg-white'>
      <nav aria-label='Top' className='sticky top-0 z-40 mx-auto max-w-7xl'>
        <div className='px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-start'>
            {/* Menu Button */}
            {/* <MenuButton /> */}
            {/* Logo */}
            <div className='ml-4 flex lg:ml-0'>
              <Link href='/merchant/36049357/estore-products/'>
                <span className='sr-only'>CB360</span>
                <Image
                  height={40}
                  width={80}
                  className='h-8 w-auto sm:h-8'
                  src={parsed_logo_url ? parsed_logo_url : cb360Logo}
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
        <SearchAndFilterHeader />
      </nav>
    </header>
  );
};

export default MerchantNavbar;
