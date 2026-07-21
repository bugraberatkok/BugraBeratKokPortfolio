"use client";
import styles from './Hero.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.photoContainer}>
          <div className={styles.photoPlaceholder}>
            <img src="/hero/profile.jpg" alt={t.hero.photoAlt} />
          </div>
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.greeting}>{t.hero.greeting}</h2>
          <h1 className={styles.name}>{t.hero.name}</h1>
          <h3 className={styles.title}>{t.hero.title}</h3>
          <p className={styles.tagline}>{t.hero.tagline}</p>
          <div className={styles.actions}>
            <a href="#projects" className="btn btn-primary">{t.hero.viewWork}</a>
            <a href="/resume.pdf" target="_blank" className={`btn ${styles.btnOutline}`}>{t.hero.downloadResume}</a>
          </div>
        </div>
      </div>

      <div className={styles.glowElement}></div>
    </section>
  );
}
