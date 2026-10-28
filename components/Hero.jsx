"use client";
import Image from 'next/image';
import styles from './Hero.module.css';
import { useLanguage } from '../context/LanguageContext';
import { getSections } from '../lib/sections';

// Identity on the left; on the right one card split in two: the portrait, and the section links
// as equal rows. The card has a fixed aspect ratio, so switching language never resizes it.
export default function Hero({ certificates }) {
  const { t } = useLanguage();
  const sections = getSections(t, certificates.length > 0);
  const counts = { projects: t.projects.items.length, certificates: certificates.length };

  return (
    <section id="top" className={`panel ${styles.hero}`} aria-labelledby="hero-name">
      <div className={`container ${styles.grid}`}>
        <div className={styles.identity}>
          <h1 id="hero-name" className={styles.name}>{t.hero.name}</h1>
          <p className={styles.role}>{t.hero.title}</p>
          <p className={styles.tagline}>{t.hero.tagline}</p>
          <div className={styles.actions}>
            <a className="btn btn-primary" href="/resume.pdf" download>{t.hero.downloadResume}</a>
            <p className={styles.now}>
              <span className={styles.dot} aria-hidden="true" />
              <strong>{t.hero.currentCompany}</strong>
              <span>{t.hero.currentRole}</span>
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.photo}>
            <Image src="/hero/profile.jpg" alt={t.hero.photoAlt} fill sizes="(max-width: 860px) 45vw, 280px" preload />
          </div>
          <nav className={styles.rows} aria-label={t.nav.sectionsLabel}>
            {sections.map(({ id, label }, index) => (
              <a key={id} href={'#' + id} className={styles.row} style={{ '--i': index }}>
                <span className={styles.label}>{label}</span>
                {counts[id] > 0 && <span className={styles.count}>{counts[id]}</span>}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
