'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Admin.module.css';

const LINKS = [
  { href: '/admin', label: 'Sertifikalar' },
  { href: '/admin/content', label: 'Site içeriği' },
];

export default function PanelNav() {
  const pathname = usePathname();
  return (
    <nav className={styles.nav} aria-label="Panel">
      {LINKS.map(link => (
        <Link key={link.href} href={link.href} className={pathname === link.href ? styles.navActive : undefined}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
