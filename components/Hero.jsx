"use client";
import Image from 'next/image';
import styles from './Hero.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="hero" className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroContent}>
          <div>
            <p className={styles.greeting}>{t.hero.greeting}</p>
            <h1 className={styles.name} aria-label={t.hero.name}>Buğra Berat<span>Kök<span className={styles.dot} aria-hidden="true">.</span></span></h1>
            <p className={styles.title}>{t.hero.title}</p>
            <p className={styles.tagline}>{t.hero.tagline}</p>
            <div className={styles.actions}>
              <a href="#projects" className="btn btn-primary">{t.hero.viewWork} <span aria-hidden="true">↘</span></a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className={styles.resume}>{t.hero.downloadResume} <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <figure className={styles.portrait}>
            <div className={styles.photo}>
              <Image src="/hero/profile.jpg" alt={t.hero.photoAlt} fill sizes="(max-width: 700px) 80vw, 380px" preload />
            </div>
            <figcaption><span>Ailways</span><span>{t.hero.currentRole}</span></figcaption>
          </figure>
        </div>
        <div className={styles.focus}>
          {t.hero.focus.map(item => <span key={item}>{item}</span>)}
        </div>
      </div>
    </section>
  );
}
