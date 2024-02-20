import MainLayout from '@/components/layout/MainLayout';
import CuratedModels from '@/components/merchant/CuratedModels';
import MerchantCTA from '@/components/merchant/MerchantCTA';
import MerchantHero from '@/components/merchant/MerchantHero';
import MerchantStats from '@/components/merchant/MerchantStats';
import MerchantTestimonials from '@/components/merchant/MerchantTestimonials';
import TrustedPartners from '@/components/merchant/TrustedPartners';
import React from 'react';

const MerchantAboutPage = () => {
  return (
    <>
      {/* Merchant hero section */}
      <MerchantHero />
      {/* Trusted partners */}
      <TrustedPartners />
      {/* Curated models */}
      <CuratedModels />
      {/* Merchant stats */}
      <MerchantStats />
      <MerchantTestimonials />
      <MerchantCTA />
    </>
  );
};

export default MerchantAboutPage;
