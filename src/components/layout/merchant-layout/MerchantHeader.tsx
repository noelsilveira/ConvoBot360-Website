'use client';
import React, { Fragment, useEffect } from 'react';
import { useHeroStore } from '@/store/heroStore';
import TopBar from '../TopBar';
import Navbar from '../Navbar';
import OffersHero from '@/components/sections/home-page/OffersHero';
import HeroSection from '@/components/sections/home-page/HeroSection';
import MerchantNavbar from './MerchantNavbar';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';

const MerchantHeader = () => {
  const { toggleHeader, toggleOffersHero } = useHeroStore();
  const pathname = usePathname();
  const { merchant_id } = useParams();

  useEffect(() => {
    const isHomepage = pathname === `/merchant/${merchant_id}`;
    console.log(pathname, isHomepage);
    isHomepage ? toggleHeader(true) : toggleHeader(false);
    isHomepage ? toggleOffersHero(true) : toggleOffersHero(false);
  }, [pathname]);

  const { showHero, showOffersHero } = useHeroStore();
  return (
    <header className='relative'>
      {/* Top navigation */}
      <TopBar />

      <MerchantNavbar />

      {/* Hero section */}
      {showOffersHero && <OffersHero />}
      {showHero && <HeroSection />}
    </header>
  );
};

export default MerchantHeader;
