"use client";
import Image from 'next/image';
import styles from './Hero.module.css';
import { useLanguage } from '../context/LanguageContext';
export default function Hero() {
  const { t } = useLanguage();
  return (<section id="hero" className={styles.profile} aria-label={t.hero.name}>
    <div className={styles.photo}><Image src="/hero/profile.jpg" alt={t.hero.photoAlt} fill sizes="144px" preload /></div>
    <h1>{t.hero.name}</h1>
    <p className={styles.role}>{t.hero.title}</p>
    <p className={styles.tagline}>{t.hero.tagline}</p>
    <div className={styles.current}><strong>Ailways</strong><span>{t.hero.currentRole}</span></div>
    <a className="btn btn-primary" href="#contact">{t.nav.contact} <span aria-hidden="true">↗</span></a>
    <div className={styles.socials}><a href="https://github.com/bugraberatkok" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/bugraberatkok/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
  </section>);
}
