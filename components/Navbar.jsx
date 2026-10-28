"use client";
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { useLanguage } from '../context/LanguageContext';
import { getSections } from '../lib/sections';

// While the hero (with its own section index) is on screen, the bar only shows the name and language switch.
// Once the hero scrolls away, the section links appear and the current section is highlighted.
export default function Navbar({ hasCertificates }) {
  const { language, toggleLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [active, setActive] = useState(null);
  const sections = getSections(t, hasCertificates);
  const sectionIds = sections.map(section => section.id).join(',');

  useEffect(() => {
    const hero = document.getElementById('top');
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => {
      setPastHero(!entry.isIntersecting);
      if (entry.isIntersecting) setOpen(false);
    }, { rootMargin: '-72px 0px 0px 0px' });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // The section crossing the middle of the viewport counts as the current one.
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sectionIds.split(',').forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <header className={styles.bar}>
      <nav className={styles.inner} aria-label={t.nav.label} onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }}>
        <a className={styles.name} href="#top" onClick={() => setOpen(false)}>{t.hero.name}</a>

        {pastHero && (
          <ul id="main-navigation" className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a href={'#' + id} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
        )}

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
          {pastHero && (
            <button type="button" className={styles.menu} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
              {open ? t.nav.close : t.nav.menu}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
