import { cn } from '@/lib/utils';
import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { toast, ToastIcon } from 'react-hot-toast';
import { Toast } from 'react-hot-toast/headless';

const CustomToaster = ({
  children,
  t,
}: {
  children: React.ReactNode;
  t: Toast;
}) => {
  return (
    <Transition
      appear
      show={t.visible}
      enter='transition-all duration-150'
      enterFrom='opacity-0 scale-50'
      enterTo='opacity-100 scale-100'
      leave='transition-all duration-150'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-75'
    >
      <div className={cn('rounded-xl bg-green-50 p-4')}>
        <div className='flex'>
          <div className='flex-shrink-0'>
            <ToastIcon toast={t} />
          </div>
          <div className='ml-3'>
            <p className={cn('text-sm font-medium text-green-800')}>
              {children}
            </p>
          </div>
          <div className='ml-auto pl-3'>
            <div className='-mx-1.5 -my-1.5'>
              <button
                type='button'
                onClick={() => toast.dismiss(t.id)}
                className='inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50'
              >
                <span className='sr-only'>Dismiss</span>
                <XMarkIcon className='h-5 w-5' aria-hidden='true' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default CustomToaster;
