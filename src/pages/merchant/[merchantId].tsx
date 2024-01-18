import MainLayout from '@/components/layout/MainLayout';
import MerchantLayout from '@/components/layout/merchant-layout/MerchantLayout';
import CTASection from '@/components/sections/home-page/CTASection';
import CategorySideBySideSection from '@/components/sections/home-page/CategorySideBySideSection';
import FavoritesSection from '@/components/sections/home-page/FavoritesSection';
import FeaturedSection from '@/components/sections/home-page/FeaturedSection';
import React from 'react';

const MerchantPage = () => {
  return (
    <MerchantLayout>
      {/* Category section */}
      <CategorySideBySideSection />

      {/* Featured section */}
      <FeaturedSection />

      {/* Favorites section */}
      <FavoritesSection />

      {/* CTA section */}
      <CTASection />
    </MerchantLayout>
  );
};

export default MerchantPage;
