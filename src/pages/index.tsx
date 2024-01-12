import MainLayout from '@/components/layout/MainLayout';
import CategorySection from '@/components/sections/home-page/CategorySection';
import FeaturedSection from '@/components/sections/home-page/FeaturedSection';
import FavoritesSection from '@/components/sections/home-page/FavoritesSection';
import CTASection from '@/components/sections/home-page/CTASection';
import HeroSection from '@/components/sections/home-page/HeroSection';

export default function Home() {
  return (
    <MainLayout>
      {/* Hero section */}
      <HeroSection />

      {/* Category section */}
      <CategorySection />

      {/* Featured section */}
      <FeaturedSection />

      {/* Favorites section */}
      <FavoritesSection />

      {/* CTA section */}
      <CTASection />
    </MainLayout>
  );
}
