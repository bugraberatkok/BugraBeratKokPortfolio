import styles from './Admin.module.css';

export default function SetupNotice() {
  return (
    <div className={styles.centered}>
      <div className={styles.card}>
        <h1 className={styles.cardTitle}>Supabase henüz bağlanmadı</h1>
        <p className={styles.muted}>
          Paneli kullanmak için <code>NEXT_PUBLIC_SUPABASE_URL</code> ve{' '}
          <code>NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY</code> ortam değişkenlerini ekle
          (lokalde <code>.env.local</code>, canlıda Vercel → Settings → Environment Variables).
        </p>
      </div>
    </div>
  );
}
