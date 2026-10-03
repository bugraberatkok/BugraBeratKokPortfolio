"use client";
import styles from './Education.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className={styles.educationSection}>
      <div className="container">
        <h2 className="section-title">{t.education.title}</h2>
        <div className={styles.grid}>
          {t.education.items.map((item) => (
            <article key={item.degree} className={`${styles.card} glass`}>
              <p className={styles.institution}>{item.institution}</p>
              <h3 className={styles.degree}>{item.degree}</h3>
              <p className={styles.date}>{item.date}</p>
              <p className={styles.description}>{item.description}</p>
            </article>
          ))}
        </div>
        <div className={styles.languages}>
          <h3>{t.education.languagesTitle}</h3>
          <ul className={styles.languageList}>
            {t.education.languages.map((language) => (
              <li key={language} className="glass">{language}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
