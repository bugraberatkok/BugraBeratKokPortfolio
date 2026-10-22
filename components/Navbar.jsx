"use client";
import { useState } from 'react';
import styles from './Navbar.module.css';
import { useLanguage } from '../context/LanguageContext';

const SECTIONS = ['about', 'experience', 'projects', 'education', 'contact'];

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.bar}>
      <nav className={styles.inner} aria-label={t.nav.label} onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }}>
        <a className={styles.name} href="#top" onClick={() => setOpen(false)}>{t.hero.name}</a>

        <ul id="main-navigation" className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {SECTIONS.map(id => (
            <li key={id}><a href={'#' + id} onClick={() => setOpen(false)}>{t.nav[id]}</a></li>
          ))}
        </ul>

        <div className={styles.controls}>
          <div className={styles.language} role="group" aria-label="Language / Dil">
            {['tr', 'en'].map(code => (
              <button
                key={code}
                type="button"
                lang={code}
                aria-pressed={language === code}
                onClick={() => { if (language !== code) toggleLanguage(); }}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button type="button" className={styles.menu} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
            {open ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </nav>
    </header>
  );
}
