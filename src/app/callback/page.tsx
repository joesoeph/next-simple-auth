'use client';

import { deleteAccessToken } from '@/app/callback/action';
import { useEffect, useTransition } from 'react';

export default function Callback() {
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      await deleteAccessToken();
    });
  }, []);
  return <p>Waiting...</p>;
}
