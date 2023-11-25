'use client';

import LogInButton from '@/components/LogInButton';
import { SessionContext } from '@/components/SessionProvider';
import Link from 'next/link';
import { useContext } from 'react';

export default function AppBar() {
  const session = useContext(SessionContext);

  return (
    <div className="flex justify-between p-4 bg-white border-zinc-200 shadow-md border-2">
      <div className="flex gap-4 items-center">
        <Link href="/anyone" className="link link-hover block">
          Anyone Page
        </Link>

        {session && (
          <Link href="/dashboard" className="link link-hover block">
            Dashboard Page
          </Link>
        )}
      </div>

      <LogInButton />
    </div>
  );
}
