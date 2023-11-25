'use client';

import loginServerAction from '@/app/action';
import { useFormState } from 'react-dom';

export default function Home() {
  const [loginActionState, loginAction] = useFormState(loginServerAction, null);
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-8">
      <pre>{JSON.stringify(loginActionState)}</pre>
      <div className="flex flex-col gap-4 card-body">
        <div className="card-title">
          <h1>Log In</h1>
        </div>
        <form action={loginAction} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email..."
            defaultValue="superadmin@mail.com"
            required
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="password"
            name="password"
            placeholder="Password..."
            defaultValue="Pa55word"
            required
            className="input input-bordered w-full max-w-xs"
          />
          <button type="submit" className="btn max-w-xs">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
