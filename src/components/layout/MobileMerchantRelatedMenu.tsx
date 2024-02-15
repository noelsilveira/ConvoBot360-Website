'use client';
import { navigation } from '@/constants/navigation';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const MobileMerchantRelatedMenu = () => {
  const { merchant_id } = useParams();
  const temp_id = 36049357;

  return navigation
    ? navigation.merchant_related.map((page, i) => (
        <li key={page.name} className='flow-root'>
          {!merchant_id ||
          merchant_id === 'undefined' ||
          merchant_id === undefined ? (
            <Link
              href={`${page.base_href}/${temp_id}/estore-products`}
              className='-m-2 block p-2 font-medium text-gray-900'
            >
              {page.name}
            </Link>
          ) : (
            <Link
              href={`${page.base_href}/${merchant_id}/estore-products`}
              className='-m-2 block p-2 font-medium text-gray-900'
            >
              {page.name}
            </Link>
          )}
        </li>
      ))
    : null;
};

export default MobileMerchantRelatedMenu;
