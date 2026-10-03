"use client";
import styles from './Navbar.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className={`${styles.nav} glass`}>
      <div className={styles.navContainer}>
        <a className={styles.logo} href="#hero">
          Buğra.
        </a>
        <ul className={styles.navLinks}>
          <li><a href="#about">{t.nav.about}</a></li>
          <li><a href="#projects">{t.nav.projects}</a></li>
          <li><a href="#experience">{t.nav.experience}</a></li>
          <li><a href="#education">{t.nav.education}</a></li>
          <li><a href="#contact" className={styles.contactBtn}>{t.nav.contact}</a></li>
          <li>
            <button type="button" onClick={toggleLanguage} className={styles.langToggle} aria-label={language === 'en' ? 'Türkçeye geç' : 'Switch to English'}>
              {language === 'en' ? 'TR' : 'EN'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
