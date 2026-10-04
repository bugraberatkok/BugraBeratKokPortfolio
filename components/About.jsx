"use client";
import styles from './About.module.css';
import { useLanguage } from '../context/LanguageContext';
export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>
        <div className={styles.content}>
          <div className={styles.text}><p>{t.about.p1}</p><p>{t.about.p2}</p></div>
          <div className={styles.toolkit}>
            <h3>{t.about.skillsTitle}</h3>
            {t.about.skillGroups.map(group => (
              <div className={styles.group} key={group.title}>
                <h4>{group.title}</h4>
                <p>{group.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
