import React from 'react';
import HeroSection from '../sections/home-page/HeroSection';
import Navbar from './Navbar';
import OffersHero from '../sections/home-page/OffersHero';
import TopBar from './TopBar';

const Header = () => {
  return (
    <header className='relative'>
      {/* Top navigation */}
      <TopBar />

      <Navbar />

      {/* Hero section */}
      {<OffersHero />}
      {<HeroSection />}
    </header>
  );
};

export default Header;
