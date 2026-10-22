"use client";
import Image from 'next/image';
import styles from './Hero.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className={`panel ${styles.hero}`} aria-labelledby="hero-name">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h1 id="hero-name" className={styles.name}>{t.hero.name}</h1>
          <p className={styles.role}>{t.hero.title}</p>
          <p className={styles.statement}>{t.hero.tagline}</p>
          <div className={styles.actions}>
            <a className="btn btn-primary" href="#projects">{t.hero.viewWork}</a>
            <a className="btn btn-ghost-dark" href="/resume.pdf" download>{t.hero.downloadResume}</a>
          </div>
          <p className={styles.now}>
            <span className={styles.dot} aria-hidden="true" />
            <strong>{t.hero.currentCompany}</strong>
            <span>{t.hero.currentRole}</span>
          </p>
        </div>
        <div className={styles.portrait}>
          <div className={styles.disc} aria-hidden="true" />
          <div className={styles.photo}>
            <Image src="/hero/profile.jpg" alt={t.hero.photoAlt} fill sizes="(max-width: 860px) 200px, 300px" preload />
          </div>
        </div>
      </div>
    </section>
  );
}
