import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions, type SessionData } from '@/lib/session';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const session = await getIronSession<SessionData>(
    request.cookies,
    sessionOptions
  );

  const { isLoggedIn } = session;

  // Ak používateľ nie je prihlásený a snaží sa dostať na /admin, presmeruj ho na /login
  if (!isLoggedIn && request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Ak je používateľ prihlásený a snaží sa dostať na /login alebo /register, presmeruj ho na /admin
  if (isLoggedIn && (request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/register'))) {
      return NextResponse.redirect(new URL('/admin', request.url))
  }


  return response;
}

export const config = {
  matcher: ['/admin/:path*', '/login', '/register'],
};
