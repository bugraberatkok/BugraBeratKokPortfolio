import { createPublicClient } from '../../../lib/supabase/server';
import { isSupabaseConfigured } from '../../../lib/supabase/config';

// Called daily by Vercel Cron (vercel.json) so the free Supabase project is never paused for inactivity.
export async function GET(request) {
  const secret = process.env.CRON_SECRET;
  if (secret && request.headers.get('authorization') !== `Bearer ${secret}`) {
    return new Response('Unauthorized', { status: 401 });
  }
  if (!isSupabaseConfigured) {
    return Response.json({ ok: false, error: 'Supabase is not configured' }, { status: 500 });
  }

  const { error } = await createPublicClient().from('certificates').select('id').limit(1);
  if (error) return Response.json({ ok: false, error: error.message }, { status: 500 });
  return Response.json({ ok: true });
}
