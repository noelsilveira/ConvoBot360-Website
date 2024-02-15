'use client';

import { useNavigationStore } from '@/store/navigationStore';
import { Bars3Icon } from '@heroicons/react/24/outline';
import React from 'react';

const MenuButton = () => {
  const { toggleMenu } = useNavigationStore();

  return (
    <button
      type='button'
      className='relative -ml-2 rounded-md bg-white p-2 text-gray-400 lg:hidden'
      onClick={() => toggleMenu(true)}
    >
      <span className='absolute -inset-0.5' />
      <span className='sr-only'>Open menu</span>
      <Bars3Icon className='h-6 w-6' aria-hidden='true' />
    </button>
  );
};

export default MenuButton;
