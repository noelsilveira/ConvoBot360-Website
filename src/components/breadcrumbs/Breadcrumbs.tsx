import { HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { TbHome } from 'react-icons/tb';

export type CrumbItem = {
  label: string;
  path: string;
};

export type BreadcrumbsProps = {
  items: CrumbItem[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav
      className='mx-auto flex max-w-7xl px-4 sm:px-6 lg:px-8'
      aria-label='Breadcrumb'
    >
      <ol role='list' className='flex items-center space-x-2 sm:space-x-4'>
        <li>
          <div className='flex items-center gap-2 sm:gap-4'>
            {items.slice(0, 1).map((crumb, i) => (
              <Link
                href={crumb.path}
                key={'home-breadcrum-item-' + crumb.label + i}
                className='text-gray-800 hover:text-gray-700'
              >
                <TbHome
                  className='h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5'
                  aria-hidden='true'
                />
                <span className='sr-only'>Merchant Home</span>
              </Link>
            ))}

            <span className='text-gray-300'> / </span>
          </div>
        </li>
        {items.slice(1, items.length).map((crumb, i) => {
          const isLastItem = i === items.length - 2;
          if (!isLastItem) {
            return (
              <li key={'breadcrum-item-' + i + crumb.label}>
                <div className='flex items-center'>
                  {/* separator */}

                  <Link
                    href={crumb.path}
                    className='mr-2 text-xs font-medium capitalize text-gray-800 duration-200 ease-out hover:text-gray-700 hover:underline sm:mr-4 sm:text-sm'
                  >
                    {crumb.label}
                  </Link>
                  <span className='text-gray-300'> / </span>
                </div>
              </li>
            );
          } else {
            return (
              <li
                aria-current='page'
                className='flex items-center'
                key={'product-in-view' + crumb.label}
              >
                <Link
                  href={crumb.path}
                  className='text-xs font-medium capitalize text-gray-400 duration-200 ease-out hover:text-gray-600 sm:text-sm'
                >
                  {crumb.label}
                </Link>
              </li>
            );
          }
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
