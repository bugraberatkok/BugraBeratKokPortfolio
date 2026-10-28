"use client";
import styles from './Education.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">{t.education.title}</h2>
        <div className={styles.grid}>
          <ul className={styles.schools}>
            {t.education.items.map((item, index) => (
              <li key={index} className={styles.school}>
                <h3 className={styles.degree}>{item.degree}</h3>
                <p className={styles.meta}>
                  <span>{item.institution}</span>
                  <span className={styles.date}>{item.date}</span>
                </p>
              </li>
            ))}
          </ul>
          <div>
            <h3 className={styles.languagesTitle}>{t.education.languagesTitle}</h3>
            <ul className={styles.languages}>
              {t.education.languages.map((language, index) => <li key={index}>{language}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
