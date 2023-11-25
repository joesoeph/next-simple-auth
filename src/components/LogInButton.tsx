'use client';

import { useSession } from '@/components/SessionProvider';
import { useIsClient } from '@/lib/isClient';
import Link from 'next/link';

export default function LogInButton() {
  const { isAuthenticated, userInfo } = useSession();
  const isClient = useIsClient();

  return (
    <>
      <div className="flex gap-4 items-center">
        {isClient && isAuthenticated ? (
          <>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <p className="text-sm">{userInfo.name}</p>
            <button className="link link-hover ml-4">Log Out</button>
          </>
        ) : null}

        {isClient && !isAuthenticated ? (
          <Link href="/" className="link link-hover">
            Log In
          </Link>
        ) : null}
      </div>
    </>
  );
}
