import React from 'react';
import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import { TbArrowUpRight } from 'react-icons/tb';

type ErrorProps = {
  statusCode?: number;
};

const Custom404page = () => {
  return (
    <div className='flex min-h-[calc(100vh-64px)] flex-col items-center justify-center gap-4'>
      <h1 className='text-2xl'>Page not found</h1>
      <p className='text-sm text-gray-400'>
        The page you tried to access does not exist.
      </p>
      <Link
        className='group flex items-center gap-x-1 text-brand-600 duration-150 ease-out hover:text-brand-500'
        href='/'
      >
        <span className=''>Go back to e-store</span>
        <TbArrowUpRight className='duration-150 ease-in-out group-hover:rotate-45' />
      </Link>
    </div>
  );
};

export default Custom404page;
