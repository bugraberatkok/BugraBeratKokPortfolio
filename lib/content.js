import { en } from '../locales/en';
import { tr } from '../locales/tr';
import { mergeContent } from './contentSchema';
import { createPublicClient } from './supabase/server';
import { isSupabaseConfigured, CERTIFICATE_BUCKET } from './supabase/config';

export const defaultContent = { en, tr };

// Site text from locales/, overridden by whatever was saved in the admin panel.
export async function getSiteContent() {
  if (!isSupabaseConfigured) return defaultContent;
  try {
    const { data, error } = await createPublicClient().from('site_content').select('section, locale, data');
    if (error) throw error;

    const content = { ...defaultContent };
    for (const row of data) {
      if (!content[row.locale]) continue;
      content[row.locale] = mergeContent(content[row.locale], { [row.section]: row.data });
    }
    return content;
  } catch (error) {
    console.error('Could not load site content, using defaults:', error.message);
    return defaultContent;
  }
}

export async function getCertificates(supabase = isSupabaseConfigured ? createPublicClient() : null) {
  if (!supabase) return [];
  try {
    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .order('sort_order')
      .order('created_at');
    if (error) throw error;

    return data.map((row) => ({
      id: row.id,
      titleTr: row.title_tr,
      titleEn: row.title_en,
      issuer: row.issuer,
      issuedOn: row.issued_on,
      credentialUrl: row.credential_url,
      filePath: row.file_path,
      fileUrl: row.file_path
        ? supabase.storage.from(CERTIFICATE_BUCKET).getPublicUrl(row.file_path).data.publicUrl
        : null,
    }));
  } catch (error) {
    console.error('Could not load certificates:', error.message);
    return [];
  }
}
