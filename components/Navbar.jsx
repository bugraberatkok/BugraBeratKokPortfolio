"use client";
import styles from './Navbar.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.nav} glass`}>
      <div className={styles.navContainer}>
        <div className={styles.logo} onClick={() => scrollToSection('hero')}>
          Buğra.
        </div>
        <ul className={styles.navLinks}>
          <li onClick={() => scrollToSection('about')}>{t.nav.about}</li>
          <li onClick={() => scrollToSection('projects')}>{t.nav.projects}</li>
          <li onClick={() => scrollToSection('experience')}>{t.nav.experience}</li>
          <li onClick={() => scrollToSection('contact')} className={styles.contactBtn}>{t.nav.contact}</li>
          <li onClick={toggleLanguage} className={styles.langToggle} style={{ cursor: 'pointer', fontWeight: 'bold', borderLeft: '1px solid var(--glass-border)', paddingLeft: '1rem', marginLeft: '0.5rem' }}>
            {language === 'en' ? 'TR' : 'EN'}
          </li>
        </ul>
      </div>
    </nav>
  );
}
