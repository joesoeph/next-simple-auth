import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

function isExpired(token) {
  const decoded: any = jwt.decode(token);
  return decoded.exp < Math.floor(Date.now() / 1000);
}

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (isExpired(accessToken)) {
    return NextResponse.redirect(new URL('/callback', request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
};
