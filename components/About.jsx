"use client";
import styles from './About.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="section">
      <div className="container split">
        <h2 className="section-title">{t.about.title}</h2>
        <div>
          <div className={styles.text}>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
          <h3 className={styles.toolkitTitle}>{t.about.skillsTitle}</h3>
          <div className={styles.toolkit}>
            {t.about.skillGroups.map((group, index) => (
              <div key={index}>
                <h4 className={styles.groupTitle}>{group.title}</h4>
                <ul className={styles.items}>
                  {group.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
