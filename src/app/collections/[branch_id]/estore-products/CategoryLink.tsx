'use client';

import { stringToUrlParser, urlToStringParser } from '@/lib/format';
import { cn } from '@/lib/utils';
import { useFiltersNavigationStore } from '@/store/navigationStore';
import { CategoryType } from '@/types/products';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const CategoryLink = ({ category }: { category: CategoryType }) => {
  const { category: activeCategory } = useParams();
  const { setMobileFiltersOpen } = useFiltersNavigationStore();
  const category_link = stringToUrlParser(category.title);
  const parsed_link = urlToStringParser(activeCategory as string);

  return (
    <div className='' onClick={() => setMobileFiltersOpen(false)}>
      <Link
        href={`/merchant/36049357/estore-products/${category_link}`}
        className={cn(
          'text-sm text-gray-500 hover:underline',
          parsed_link === category.title
            ? 'font-medium text-gray-900 underline'
            : ''
        )}
      >
        {category.title}
      </Link>
    </div>
  );
};

export default CategoryLink;
