'use client';

import loginServerAction from '@/app/action';
import Alert from '@/components/Alert';
import { useFormState } from 'react-dom';

export default function Home() {
  const [loginActionState, loginAction] = useFormState(loginServerAction, null);
  return (
    <div className="w-96  mx-auto">
      {loginActionState && <Alert message={loginActionState.message} />}

      <div className="card bg-base-100 shadow-xl mt-8">
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
    </div>
  );
}
