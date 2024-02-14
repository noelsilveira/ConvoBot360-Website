import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { product } from '@/constants/products';
import { cn } from '@/lib/utils';

type ProductBreadcrumbProps = {
  homeElement: React.ReactNode;
  separator?: React.ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const ProductBreadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: ProductBreadcrumbProps) => {
  const router = useRouter();

  const paths = router.pathname;
  const pathnames = paths.split('/').filter((path) => path);

  return (
    <nav
      aria-label='Breadcrumb'
      className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
    >
      <ol role='list' className='flex items-center space-x-4'>
        {/* {product.breadcrumbs.map((breadcrumb) => ( */}
        <li>
          <div className='flex items-center'>
            <Link href={'/'} className='mr-4 text-sm font-medium text-gray-900'>
              {homeElement}
            </Link>
            {pathnames.length > 0 && <Slash />}
          </div>
        </li>
        {pathnames.map((link, index) => {
          let href = `/${pathnames.slice(0, index + 1).join('/')}`;
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <li key={`breadcrumb-${index}-${itemLink}`}>
              <div className='flex items-center'>
                <Link
                  href={href}
                  className={cn(
                    'mr-4 text-sm font-medium capitalize text-gray-900',
                    pathnames.length - 1 !== index &&
                      'text-gray-500 hover:text-gray-600'
                  )}
                >
                  {itemLink}
                </Link>
                {pathnames.length !== index + 1 && <Slash />}
              </div>
            </li>
          );
        })}
        {/* <li className='text-sm'>
          <Link
            href={product.href}
            aria-current='page'
            className='font-medium text-gray-500 hover:text-gray-600'
          >
            {product.name}
          </Link>
        </li> */}
      </ol>
    </nav>
  );
};

const Slash = () => (
  <svg
    viewBox='0 0 6 20'
    aria-hidden='true'
    className='h-5 w-auto text-gray-300'
  >
    <path
      d='M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z'
      fill='currentColor'
    />
  </svg>
);
export default ProductBreadcrumb;
