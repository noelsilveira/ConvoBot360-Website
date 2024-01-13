import MainLayout from '@/components/layout/MainLayout';
import CategorySection from '@/components/sections/home-page/CategorySection';
import FeaturedSection from '@/components/sections/home-page/FeaturedSection';
import FavoritesSection from '@/components/sections/home-page/FavoritesSection';
import CTASection from '@/components/sections/home-page/CTASection';
import CategorySideBySideSection from '@/components/sections/home-page/CategorySideBySideSection';

export default function Home() {
  return (
    <MainLayout>
      {/* Category section */}
      <CategorySideBySideSection />

      {/* Featured section */}
      <FeaturedSection />

      {/* Favorites section */}
      <FavoritesSection />

      {/* CTA section */}
      <CTASection />
    </MainLayout>
  );
}
