"use client";
import styles from './Navbar.module.css';

export default function Navbar() {
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
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('experience')}>Experience</li>
          <li onClick={() => scrollToSection('contact')} className={styles.contactBtn}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
