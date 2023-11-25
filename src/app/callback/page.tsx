'use client';

import { deleteAccessToken } from '@/app/callback/action';
import { useRefreshSession } from '@/components/SessionProvider';
import { useEffect, useTransition } from 'react';

export default function Callback() {
  const [isPending, startTransition] = useTransition();
  const handleRefreshSession = useRefreshSession();

  useEffect(() => {
    startTransition(async () => {
      await deleteAccessToken();
    });
    handleRefreshSession();
  }, []);
  return <p>Waiting...</p>;
}
