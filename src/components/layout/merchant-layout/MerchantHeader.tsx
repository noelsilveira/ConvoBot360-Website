import React, { Fragment } from 'react';

import { useHeroStore } from '@/store/heroStore';
import TopBar from '../TopBar';
import Navbar from '../Navbar';
import OffersHero from '@/components/sections/home-page/OffersHero';
import HeroSection from '@/components/sections/home-page/HeroSection';
import MerchantNavbar from './MerchantNavbar';

const MerchantHeader = () => {
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
