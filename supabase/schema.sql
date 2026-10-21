-- Portfolio admin panel schema.
-- Run once in the Supabase SQL editor (safe to re-run).

-- Admins: only users listed here can write content.
create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade
);
alter table public.admins enable row level security;

drop policy if exists "Users can see their own admin row" on public.admins;
create policy "Users can see their own admin row" on public.admins
  for select to authenticated using (user_id = (select auth.uid()));

-- Runs with the caller's rights, so it only sees the caller's own admins row.
create or replace function public.is_admin()
returns boolean
language sql
stable
security invoker
set search_path = ''
as $$
  select exists (select 1 from public.admins where user_id = (select auth.uid()));
$$;
revoke execute on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;

-- Certificates shown under "Education & Languages".
create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  title_tr text not null,
  title_en text not null,
  issuer text not null default '',
  issued_on text,            -- 'YYYY-MM'
  credential_url text,
  file_path text,            -- object path in the "certificates" bucket
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);
alter table public.certificates enable row level security;

-- Visitors read anonymously; signed-in access goes through the admin policies.
drop policy if exists "Certificates are public" on public.certificates;
create policy "Certificates are public" on public.certificates
  for select to anon using (true);

drop policy if exists "Admins manage certificates" on public.certificates;
create policy "Admins manage certificates" on public.certificates
  for all to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));

-- Site text overrides, one row per section and language.
-- Missing rows fall back to locales/en.js and locales/tr.js.
create table if not exists public.site_content (
  section text not null,
  locale text not null check (locale in ('en', 'tr')),
  data jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (section, locale)
);
alter table public.site_content enable row level security;

drop policy if exists "Site content is public" on public.site_content;
create policy "Site content is public" on public.site_content
  for select to anon using (true);

drop policy if exists "Admins manage site content" on public.site_content;
create policy "Admins manage site content" on public.site_content
  for all to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));

-- New tables are not exposed to the Data API by default; grant only what the app uses.
grant select on public.certificates, public.site_content to anon;
grant select, insert, update, delete on public.certificates, public.site_content to authenticated;
grant select on public.admins to authenticated;

-- Certificate files (public read, admin write).
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('certificates', 'certificates', true, 10485760,
        array['application/pdf', 'image/png', 'image/jpeg', 'image/webp'])
on conflict (id) do nothing;

drop policy if exists "Admins read certificate files" on storage.objects;
create policy "Admins read certificate files" on storage.objects
  for select to authenticated
  using (bucket_id = 'certificates' and (select public.is_admin()));

drop policy if exists "Admins upload certificate files" on storage.objects;
create policy "Admins upload certificate files" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'certificates' and (select public.is_admin()));

drop policy if exists "Admins update certificate files" on storage.objects;
create policy "Admins update certificate files" on storage.objects
  for update to authenticated
  using (bucket_id = 'certificates' and (select public.is_admin()));

drop policy if exists "Admins delete certificate files" on storage.objects;
create policy "Admins delete certificate files" on storage.objects
  for delete to authenticated
  using (bucket_id = 'certificates' and (select public.is_admin()));

-- After creating your user (Authentication > Users > Add user), make it the admin:
-- insert into public.admins (user_id)
-- select id from auth.users where email = 'you@example.com';
