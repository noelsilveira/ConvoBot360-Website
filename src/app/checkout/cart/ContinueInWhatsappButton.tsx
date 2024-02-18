'use client';

import { cn } from '@/lib/utils';
import { useFormStatus } from 'react-dom';

export const ContinueInWhatsappButton = () => {
  const { pending } = useFormStatus();
  return (
    <div className='mt-6' id='order-summary'>
      <button
        type='submit'
        aria-disabled={pending}
        disabled={pending}
        className={cn(
          'flex w-full items-center justify-center rounded-xl border border-transparent bg-blue-600 px-4 py-3 text-center text-base font-medium text-white shadow-sm duration-150 ease-out hover:bg-blue-700',
          pending ? 'opacity-40' : 'opacity-100'
        )}
      >
        {pending ? 'Redirecting...' : 'Continue in WhatsApp'}
      </button>
    </div>
  );
};
