'use client';
import React, { useEffect } from 'react';
import { useHeroStore } from '@/store/heroStore';
import { useParams, usePathname, useSearchParams } from 'next/navigation';

const offers = [
  {
    name: 'Download the app',
    description: 'Get an exclusive $5 off code',
    href: '#',
  },
  {
    name: "Return when you're ready",
    description: '60 days of free returns',
    href: '#',
  },
  {
    name: 'Sign up for our newsletter',
    description: '15% off your first order',
    href: '#',
  },
];

const OffersHero = () => {
  const { showHero, showOffersHero, toggleHeader, toggleOffersHero } =
    useHeroStore();
  // const router = useRouter();
  const pathname = usePathname();
  const { merchant_id } = useParams();

  useEffect(() => {
    const isHomepage = pathname === `/merchant/${merchant_id}`;
    // const isHomepage = false;
    isHomepage ? toggleHeader(true) : toggleHeader(false);
    isHomepage ? toggleOffersHero(true) : toggleOffersHero(false);
  }, [pathname]);

  return showOffersHero ? (
    <div className='hidden border-b border-gray-200 lg:flex lg:flex-col'>
      <nav aria-label='Offers' className='order-last lg:order-first'>
        <div className='mx-auto max-w-7xl lg:px-8'>
          <ul
            role='list'
            className='grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0'
          >
            {offers.map((offer) => (
              <li key={offer.name} className='flex flex-col'>
                <a
                  href={offer.href}
                  className='relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10'
                >
                  <p className='text-sm text-gray-500'>{offer.name}</p>
                  <p className='font-semibold text-gray-900'>
                    {offer.description}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  ) : (
    <></>
  );
};

export default OffersHero;
