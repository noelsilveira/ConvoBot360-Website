import React, { Fragment } from 'react';
import HeroSection from '../sections/home-page/HeroSection';
import Navbar from './Navbar';
import OffersHero from '../sections/home-page/OffersHero';
import { useHeroStore } from '@/store/heroStore';
import TopBar from './TopBar';

const Header = () => {
  const { showHero, showOffersHero } = useHeroStore();
  return (
    <header className='relative'>
      {/* Top navigation */}
      <TopBar />

      <Navbar />

      {/* Hero section */}
      {showOffersHero && <OffersHero />}
      {showHero && <HeroSection />}
    </header>
  );
};

export default Header;
