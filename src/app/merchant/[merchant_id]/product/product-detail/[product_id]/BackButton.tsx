'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { TbChevronLeft } from 'react-icons/tb';

const BackButton = () => {
  const router = useRouter();
  return (
    <div className='px-3'>
      <button
        type='button'
        className='inline-flex items-center justify-center gap-0 text-sm font-medium tracking-tight text-blue-600'
        onClick={() => router.back()}
      >
        <TbChevronLeft className='h-4 w-4' /> <span>Back</span>
      </button>
    </div>
  );
};

export default BackButton;
