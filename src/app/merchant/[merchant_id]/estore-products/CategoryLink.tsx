'use client';

import { stringToUrlParser, urlToSTringParser } from '@/lib/format';
import { cn } from '@/lib/utils';
import { CategoryType } from '@/types/products';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';

const CategoryLink = ({ category }: { category: CategoryType }) => {
  const { category: activeCategory } = useParams();
  const category_link = stringToUrlParser(category.title);
  const parsed_link = urlToSTringParser(activeCategory as string);

  return (
    <Link
      href={`/merchant/36049357/estore-products/${category_link}`}
      className={cn(
        'text-sm text-gray-500 hover:underline',
        parsed_link === category.title ? 'font-medium text-gray-900' : ''
      )}
    >
      {category.title}
    </Link>
  );
};

export default CategoryLink;
