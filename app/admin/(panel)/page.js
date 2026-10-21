import { createClient } from '../../../lib/supabase/server';
import { getCertificates } from '../../../lib/content';
import CertificateManager from '../_components/CertificateManager';

export default async function CertificatesPage() {
  const certificates = await getCertificates(await createClient());
  return <CertificateManager certificates={certificates} />;
}
