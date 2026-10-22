"use client";
import styles from './Education.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section">
      <div className="container split">
        <h2 className="section-title">{t.education.title}</h2>
        <div>
          <ul className={styles.schools}>
            {t.education.items.map((item, index) => (
              <li key={index} className={styles.school}>
                <p className={styles.institution}>{item.institution}</p>
                <h3 className={styles.degree}>{item.degree}</h3>
                <p className={styles.date}>{item.date}</p>
              </li>
            ))}
          </ul>
          <h3 className={styles.languagesTitle}>{t.education.languagesTitle}</h3>
          <ul className={styles.languages}>
            {t.education.languages.map((language, index) => <li key={index}>{language}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
