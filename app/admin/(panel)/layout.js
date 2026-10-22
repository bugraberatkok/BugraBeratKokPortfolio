import { redirect } from 'next/navigation';
import { createClient } from '../../../lib/supabase/server';
import { isSupabaseConfigured } from '../../../lib/supabase/config';
import { signOut } from '../actions';
import SetupNotice from '../_components/SetupNotice';
import PanelNav from '../_components/PanelNav';
import styles from '../_components/Admin.module.css';

// The panel must always show the latest saved data.
export const dynamic = 'force-dynamic';

export default async function PanelLayout({ children }) {
  if (!isSupabaseConfigured) return <SetupNotice />;

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/admin/login');

  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) {
    return (
      <div className={styles.centered}>
        <form action={signOut} className={styles.card}>
          <h1 className={styles.cardTitle}>Yetkin yok</h1>
          <p className={styles.muted}>{user.email} hesabı admin olarak tanımlı değil.</p>
          <button className="btn btn-ghost" type="submit">Çıkış yap</button>
        </form>
      </div>
    );
  }

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <span className={styles.brand}>Buğra<span>.</span> Panel</span>
          <PanelNav />
          <div className={styles.headerActions}>
            <a href="/" target="_blank" rel="noreferrer">Siteyi aç ↗</a>
            <form action={signOut}><button type="submit" className={styles.linkButton}>Çıkış</button></form>
          </div>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
