"use client";
import { useState } from 'react';
import styles from './Navbar.module.css';
import { useLanguage } from '../context/LanguageContext';
export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.nav} aria-label={t.nav.label} onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }}>
      <div className={styles.navContainer}>
        <a className={styles.logo} href="#hero" onClick={() => setOpen(false)}>Buğra<span>.</span></a>
        <div className={styles.controls}>
          <button type="button" onClick={toggleLanguage} className={styles.langToggle} aria-label={language === 'en' ? 'Türkçeye geç' : 'Switch to English'}>{language === 'en' ? 'TR' : 'EN'}</button>
          <button type="button" className={styles.menuToggle} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? t.nav.close : t.nav.menu}</button>
        </div>
        <ul id="main-navigation" className={open ? styles.navOpen : styles.navLinks}>
          {['projects', 'about', 'experience', 'education', 'contact'].map(id => (
            <li key={id}><a href={'#' + id} onClick={() => setOpen(false)}>{t.nav[id]}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
