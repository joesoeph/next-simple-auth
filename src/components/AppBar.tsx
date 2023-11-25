import LogInButton from '@/components/LogInButton';
import Link from 'next/link';

export default function AppBar() {
  return (
    <div className="flex justify-between p-4 bg-white border-zinc-200 shadow-md border-2">
      <div className="flex gap-4 items-center">
        <Link href="/anyone" className="link link-hover block">
          Anyone Page
        </Link>
        <Link href="/dashboard" className="link link-hover block">
          Dashboard Page
        </Link>
      </div>

      <LogInButton />
    </div>
  );
}
