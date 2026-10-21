'use server';

import { redirect } from 'next/navigation';
import { revalidatePath, refresh } from 'next/cache';
import { createClient } from '../../lib/supabase/server';
import { CERTIFICATE_BUCKET } from '../../lib/supabase/config';
import { findSection, sanitizeSection } from '../../lib/contentSchema';

const NO_ACCESS = 'Bu işlem için yetkin yok. Tekrar giriş yap.';

// Every action re-checks the session; RLS policies enforce the same rule in the database.
async function adminClient() {
  const supabase = await createClient();
  const { data: isAdmin, error } = await supabase.rpc('is_admin');
  return error || !isAdmin ? null : supabase;
}

// Rebuilds the public page and reloads the panel's data.
function publishChanges() {
  revalidatePath('/');
  refresh();
}

export async function signIn(prevState, formData) {
  const email = String(formData.get('email') ?? '');
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password: String(formData.get('password') ?? ''),
  });
  if (error) return { email, error: 'E-posta veya şifre hatalı.' };

  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) {
    await supabase.auth.signOut();
    return { email, error: 'Bu hesabın panel yetkisi yok.' };
  }
  redirect('/admin');
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/admin/login');
}

// ---- Certificates ----

const text = (value, max = 300) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

function readCertificate(input) {
  const titleTr = text(input?.titleTr);
  const titleEn = text(input?.titleEn);
  if (!titleTr || !titleEn) return { error: 'Türkçe ve İngilizce başlık gerekli.' };

  const issuedOn = text(input.issuedOn, 7);
  if (issuedOn && !/^\d{4}-(0[1-9]|1[0-2])$/.test(issuedOn)) return { error: 'Tarih geçersiz.' };

  const credentialUrl = text(input.credentialUrl, 1000);
  if (credentialUrl && !/^https?:\/\//i.test(credentialUrl)) {
    return { error: 'Doğrulama linki http:// veya https:// ile başlamalı.' };
  }

  const filePath = text(input.filePath);
  if (filePath && !/^[\w-]+\.(pdf|png|jpe?g|webp)$/i.test(filePath)) return { error: 'Dosya yolu geçersiz.' };

  return {
    row: {
      title_tr: titleTr,
      title_en: titleEn,
      issuer: text(input.issuer),
      issued_on: issuedOn || null,
      credential_url: credentialUrl || null,
      file_path: filePath || null,
    },
  };
}

export async function saveCertificate(input) {
  const supabase = await adminClient();
  if (!supabase) return { error: NO_ACCESS };

  const { row, error: invalid } = readCertificate(input);
  if (invalid) return { error: invalid };

  if (input.id) {
    const { data: existing, error: findError } = await supabase
      .from('certificates').select('file_path').eq('id', input.id).single();
    if (findError) return { error: 'Sertifika bulunamadı.' };

    const { error } = await supabase.from('certificates').update(row).eq('id', input.id);
    if (error) return { error: 'Kaydedilemedi: ' + error.message };

    if (existing.file_path && existing.file_path !== row.file_path) {
      await supabase.storage.from(CERTIFICATE_BUCKET).remove([existing.file_path]);
    }
  } else {
    const { data: last } = await supabase
      .from('certificates').select('sort_order').order('sort_order', { ascending: false }).limit(1);
    const sortOrder = last?.length ? last[0].sort_order + 1 : 0;

    const { error } = await supabase.from('certificates').insert({ ...row, sort_order: sortOrder });
    if (error) return { error: 'Kaydedilemedi: ' + error.message };
  }

  publishChanges();
  return { ok: true };
}

export async function deleteCertificate(id) {
  const supabase = await adminClient();
  if (!supabase) return { error: NO_ACCESS };

  const { data: existing, error } = await supabase
    .from('certificates').delete().eq('id', id).select('file_path').single();
  if (error) return { error: 'Silinemedi: ' + error.message };

  if (existing.file_path) {
    await supabase.storage.from(CERTIFICATE_BUCKET).remove([existing.file_path]);
  }
  publishChanges();
  return { ok: true };
}

export async function reorderCertificates(ids) {
  const supabase = await adminClient();
  if (!supabase) return { error: NO_ACCESS };
  if (!Array.isArray(ids) || ids.some((id) => typeof id !== 'string')) return { error: 'Geçersiz sıralama.' };

  const results = await Promise.all(
    ids.map((id, index) => supabase.from('certificates').update({ sort_order: index }).eq('id', id)),
  );
  const failed = results.find((result) => result.error);
  if (failed) return { error: 'Sıralama kaydedilemedi: ' + failed.error.message };

  publishChanges();
  return { ok: true };
}

// ---- Site content ----

export async function saveContentSection(sectionKey, values) {
  const section = findSection(sectionKey);
  if (!section) return { error: 'Bilinmeyen bölüm.' };

  const supabase = await adminClient();
  if (!supabase) return { error: NO_ACCESS };

  const updatedAt = new Date().toISOString();
  const rows = ['tr', 'en'].map((locale) => ({
    section: sectionKey,
    locale,
    data: sanitizeSection(section.fields, values?.[locale]),
    updated_at: updatedAt,
  }));
  const { error } = await supabase.from('site_content').upsert(rows);
  if (error) return { error: 'Kaydedilemedi: ' + error.message };

  publishChanges();
  return { ok: true };
}

export async function resetContentSection(sectionKey) {
  if (!findSection(sectionKey)) return { error: 'Bilinmeyen bölüm.' };

  const supabase = await adminClient();
  if (!supabase) return { error: NO_ACCESS };

  const { error } = await supabase.from('site_content').delete().eq('section', sectionKey);
  if (error) return { error: 'Sıfırlanamadı: ' + error.message };

  publishChanges();
  return { ok: true };
}
