import MainLayout from '@/components/layout/MainLayout';
import CategorySection from '@/components/sections/home-page/CategorySection';
import FeaturedSection from '@/components/sections/home-page/FeaturedSection';
import FavoritesSection from '@/components/sections/home-page/FavoritesSection';
import CTASection from '@/components/sections/home-page/CTASection';
import CategorySideBySideSection from '@/components/sections/home-page/CategorySideBySideSection';
import HomeHeroSection from '@/components/home/HomeHeroSection';
import TrustedPartners from '@/components/merchant/TrustedPartners';
import FeatureFullSection from '@/components/home/FeatureFullSection';
import HomeStats from '@/components/home/HomeStats';
import AboutLogoCloud from '@/components/about/AboutLogoCloud';
import GetNotified from '@/components/about/GetNotified';

export default function Home() {
  return (
    <MainLayout title='Home - CB360'>
      <HomeHeroSection />
      {/* Category section */}
      {/* <TrustedPartners /> */}
      <AboutLogoCloud />

      {/* Featured section */}
      <FeatureFullSection />

      <HomeStats />

      {/* CTA section */}
      <GetNotified />
    </MainLayout>
  );
}
