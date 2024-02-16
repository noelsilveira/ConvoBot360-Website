'use server';
import React from 'react';
import TopBar from '../TopBar';
import OffersHero from '@/components/sections/home-page/OffersHero';
import HeroSection from '@/components/sections/home-page/HeroSection';
import MerchantNavbar from './MerchantNavbar';
import { ProductListingParamsType } from '@/types/products';

const MerchantHeader = ({ params }: ProductListingParamsType) => {
  return (
    <header className='relative'>
      {/* Top navigation */}
      {/* <TopBar /> */}

      <MerchantNavbar params={params} />

      {/* Hero section */}
      {<OffersHero />}
      {<HeroSection />}
    </header>
  );
};

export default MerchantHeader;
