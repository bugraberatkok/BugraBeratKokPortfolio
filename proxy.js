import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import { supabaseUrl, supabaseKey, isSupabaseConfigured } from './lib/supabase/config';

// Refreshes the Supabase session for the admin panel and keeps signed-out visitors on the login page.
export async function proxy(request) {
  let response = NextResponse.next({ request });
  if (!isSupabaseConfigured) return response;

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet, headers) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        Object.entries(headers ?? {}).forEach(([key, value]) => response.headers.set(key, value));
      },
    },
  });

  const { data } = await supabase.auth.getClaims();
  const signedIn = Boolean(data?.claims);
  const onLoginPage = request.nextUrl.pathname === '/admin/login';

  const redirectTo = (path) => {
    const redirect = NextResponse.redirect(new URL(path, request.url));
    response.cookies.getAll().forEach((cookie) => redirect.cookies.set(cookie));
    return redirect;
  };

  if (!signedIn && !onLoginPage) return redirectTo('/admin/login');
  if (signedIn && onLoginPage) return redirectTo('/admin');
  return response;
}

export const config = {
  matcher: ['/admin/:path*'],
};
