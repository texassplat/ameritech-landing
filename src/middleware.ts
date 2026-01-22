import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isValidService } from '@/config/services';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Extract subdomain from hostname
  // Examples: windows.ameritechwindows.com, doors.localhost:3000
  const subdomain = getSubdomain(hostname);

  // Skip middleware for static files, api routes
  if (
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/api') ||
    url.pathname.includes('.') // Static files
  ) {
    return NextResponse.next();
  }

  // If we have a valid service subdomain, rewrite to the dynamic route
  if (subdomain && isValidService(subdomain)) {
    // Rewrite /path to /[service]/path internally
    url.pathname = `/${subdomain}${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // For the main domain without subdomain, show a service selector or redirect
  // For now, just proceed normally
  return NextResponse.next();
}

function getSubdomain(hostname: string): string | null {
  // Remove port if present
  const host = hostname.split(':')[0];

  // Handle localhost development
  // Format: subdomain.localhost
  if (host.endsWith('.localhost') || host.endsWith('.local')) {
    const parts = host.split('.');
    if (parts.length >= 2) {
      return parts[0];
    }
    return null;
  }

  // Handle production domain
  // Format: windows.ameritechwindows.com
  const parts = host.split('.');

  // Must have at least subdomain.domain.tld
  if (parts.length >= 3) {
    // The first part is the subdomain
    return parts[0];
  }

  // Handle cases like subdomain.vercel.app for previews
  if (parts.length === 3 && (parts[1] === 'vercel' || parts[2] === 'app')) {
    return parts[0];
  }

  return null;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
