'use client';

import { handleLogout } from '@/app/actions/auth';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useFormStatus } from 'react-dom';
import { TbLogout } from 'react-icons/tb';

export const LogoutButton = () => {
  const router = useRouter();
  return (
    <form
      action={async () => {
        await handleLogout();
        router.refresh();
      }}
    >
      <Button />
    </form>
  );
};

const Button = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      disabled={pending}
      className={cn(
        'text-sm font-medium text-white hover:text-gray-100',
        pending ? 'animate-pulse opacity-60' : ''
      )}
    >
      {pending ? <span>Logging out...</span> : <span>Logout</span>}
    </button>
  );
};

export const MobileLogoutButton = () => {
  const router = useRouter();

  return (
    <form
      action={async () => {
        await handleLogout();
        router.refresh();
      }}
    >
      <MButton />
    </form>
  );
};

const MButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      disabled={pending}
      className='-m-2 inline-flex items-center gap-2 p-2 font-medium text-rose-500'
    >
      {pending ? <span>Logging out...</span> : <span>Logout</span>}
      <TbLogout />
    </button>
  );
};
