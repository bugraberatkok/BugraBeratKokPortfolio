'use client';
import { useState, useTransition } from 'react';
import { createClient } from '../../../lib/supabase/browser';
import { CERTIFICATE_BUCKET } from '../../../lib/supabase/config';
import { saveCertificate, deleteCertificate, reorderCertificates } from '../actions';
import styles from './Admin.module.css';

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const FILE_TYPES = ['pdf', 'png', 'jpg', 'jpeg', 'webp'];

export default function CertificateManager({ certificates }) {
  const [editing, setEditing] = useState(null); // null, 'new' or a certificate
  const [confirmingDelete, setConfirmingDelete] = useState(null);
  const [error, setError] = useState(null);
  const [pending, startTransition] = useTransition();

  function run(action) {
    setError(null);
    startTransition(async () => {
      const result = await action();
      if (result?.error) setError(result.error);
    });
  }

  function move(index, offset) {
    const ids = certificates.map(cert => cert.id);
    const [id] = ids.splice(index, 1);
    ids.splice(index + offset, 0, id);
    run(() => reorderCertificates(ids));
  }

  return (
    <section>
      <div className={styles.pageHead}>
        <div>
          <h1 className={styles.pageTitle}>Sertifikalar</h1>
          <p className={styles.muted}>Sitede “Eğitim ve Diller”in altında görünür. Liste boşken bölüm gizli kalır.</p>
        </div>
        {!editing && <button type="button" className="btn btn-primary" onClick={() => setEditing('new')}>+ Sertifika ekle</button>}
      </div>

      {editing && (
        <CertificateForm
          key={editing === 'new' ? 'new' : editing.id}
          certificate={editing === 'new' ? null : editing}
          onClose={() => setEditing(null)}
        />
      )}

      {error && <p className={styles.error} role="alert">{error}</p>}

      {certificates.length === 0 ? (
        !editing && <p className={styles.empty}>Henüz sertifika yok. İlk sertifikayı eklediğinde bölüm sitede otomatik olarak görünür.</p>
      ) : (
        <ul className={styles.certList}>
          {certificates.map((cert, index) => (
            <li key={cert.id} className={styles.certItem}>
              <div className={styles.certInfo}>
                <strong>{cert.titleTr}</strong>
                <span className={styles.muted}>{cert.titleEn}</span>
                <span className={styles.meta}>{[cert.issuer, cert.issuedOn].filter(Boolean).join(' · ')}</span>
                <span className={styles.certLinks}>
                  {cert.fileUrl && <a href={cert.fileUrl} target="_blank" rel="noreferrer">Dosya ↗</a>}
                  {cert.credentialUrl && <a href={cert.credentialUrl} target="_blank" rel="noreferrer">Doğrulama linki ↗</a>}
                </span>
              </div>
              <div className={styles.rowActions}>
                <button type="button" className={styles.iconButton} disabled={pending || index === 0} onClick={() => move(index, -1)} aria-label="Yukarı taşı">↑</button>
                <button type="button" className={styles.iconButton} disabled={pending || index === certificates.length - 1} onClick={() => move(index, 1)} aria-label="Aşağı taşı">↓</button>
                <button type="button" className={styles.smallButton} disabled={pending} onClick={() => setEditing(cert)}>Düzenle</button>
                {confirmingDelete === cert.id ? (
                  <>
                    <button type="button" className={`${styles.smallButton} ${styles.danger}`} disabled={pending} onClick={() => { setConfirmingDelete(null); run(() => deleteCertificate(cert.id)); }}>Evet, sil</button>
                    <button type="button" className={styles.smallButton} onClick={() => setConfirmingDelete(null)}>Vazgeç</button>
                  </>
                ) : (
                  <button type="button" className={styles.smallButton} disabled={pending} onClick={() => setConfirmingDelete(cert.id)}>Sil</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function CertificateForm({ certificate, onClose }) {
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [removeFile, setRemoveFile] = useState(false);

  // The file goes straight from the browser to Supabase Storage, then the action saves the row.
  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const file = form.get('file');
    const supabase = createClient();
    let uploadedPath = null;

    setError(null);
    setBusy(true);
    try {
      let filePath = removeFile ? null : certificate?.filePath ?? null;
      if (file && file.size > 0) {
        const extension = file.name.split('.').pop().toLowerCase();
        if (!FILE_TYPES.includes(extension)) throw new Error('Sadece PDF, PNG, JPG veya WEBP yükleyebilirsin.');
        if (file.size > MAX_FILE_SIZE) throw new Error('Dosya en fazla 10 MB olabilir.');

        const path = `${crypto.randomUUID()}.${extension}`;
        const { error: uploadError } = await supabase.storage
          .from(CERTIFICATE_BUCKET)
          .upload(path, file, { contentType: file.type });
        if (uploadError) throw new Error('Dosya yüklenemedi: ' + uploadError.message);
        uploadedPath = filePath = path;
      }

      const result = await saveCertificate({
        id: certificate?.id,
        titleTr: form.get('titleTr'),
        titleEn: form.get('titleEn'),
        issuer: form.get('issuer'),
        issuedOn: form.get('issuedOn'),
        credentialUrl: form.get('credentialUrl'),
        filePath,
      });
      if (result.error) throw new Error(result.error);
      onClose();
    } catch (err) {
      if (uploadedPath) await supabase.storage.from(CERTIFICATE_BUCKET).remove([uploadedPath]);
      setError(err.message);
      setBusy(false);
    }
  }

  return (
    <form className={styles.panel} onSubmit={handleSubmit}>
      <h2 className={styles.panelTitle}>{certificate ? 'Sertifikayı düzenle' : 'Yeni sertifika'}</h2>
      <div className={styles.grid2}>
        <label className={styles.field}>
          <span>Başlık (TR)</span>
          <input className={styles.input} name="titleTr" defaultValue={certificate?.titleTr} required />
        </label>
        <label className={styles.field}>
          <span>Başlık (EN)</span>
          <input className={styles.input} name="titleEn" defaultValue={certificate?.titleEn} required />
        </label>
        <label className={styles.field}>
          <span>Veren kurum</span>
          <input className={styles.input} name="issuer" defaultValue={certificate?.issuer} placeholder="BTK Akademi" />
        </label>
        <label className={styles.field}>
          <span>Tarih (ay / yıl)</span>
          <input className={styles.input} name="issuedOn" type="month" defaultValue={certificate?.issuedOn ?? ''} />
        </label>
        <label className={styles.field}>
          <span>Doğrulama linki (isteğe bağlı)</span>
          <input className={styles.input} name="credentialUrl" type="url" defaultValue={certificate?.credentialUrl ?? ''} placeholder="https://" />
        </label>
        <label className={styles.field}>
          <span>{certificate?.fileUrl ? 'Dosyayı değiştir (isteğe bağlı)' : 'Dosya: PDF veya görsel (isteğe bağlı)'}</span>
          <input className={styles.input} name="file" type="file" accept=".pdf,.png,.jpg,.jpeg,.webp" />
        </label>
      </div>
      {certificate?.fileUrl && (
        <label className={styles.checkbox}>
          <input type="checkbox" checked={removeFile} onChange={event => setRemoveFile(event.target.checked)} />
          Mevcut dosyayı kaldır (<a href={certificate.fileUrl} target="_blank" rel="noreferrer">görüntüle ↗</a>)
        </label>
      )}
      {error && <p className={styles.error} role="alert">{error}</p>}
      <div className={styles.formActions}>
        <button type="submit" className="btn btn-primary" disabled={busy}>{busy ? 'Kaydediliyor…' : 'Kaydet ve yayınla'}</button>
        <button type="button" className="btn btn-ghost" disabled={busy} onClick={onClose}>Vazgeç</button>
      </div>
    </form>
  );
}
