import MainLayout from '@/components/layout/MainLayout';
import CategorySection from '@/components/sections/home-page/CategorySection';
import FeaturedSection from '@/components/sections/home-page/FeaturedSection';
import FavoritesSection from '@/components/sections/home-page/FavoritesSection';
import CTASection from '@/components/sections/home-page/CTASection';

export default function Home() {
  return (
    <MainLayout>
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
