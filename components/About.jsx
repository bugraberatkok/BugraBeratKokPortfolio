"use client";
import styles from './About.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>
        <h2 className="section-title">{t.about.title}</h2>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.paragraph}>{t.about.p1}</p>
            <p className={styles.paragraph}>{t.about.p2}</p>
            <p className={styles.paragraph}>{t.about.p3}</p>
          </div>

          <div className={styles.skillsWrapper}>
            <h3 className={styles.skillsTitle}>{t.about.skillsTitle}</h3>
            {t.about.skillGroups.map((group) => (
              <div key={group.title} className={styles.skillGroup}>
                <h4 className={styles.groupTitle}>{group.title}</h4>
                <ul className={styles.skillsList}>
                  {group.items.map((skill) => (
                    <li key={skill} className={styles.skillItem}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
