"use client";
import styles from './About.module.css';
import { useLanguage } from '../context/LanguageContext';

// A two-sentence introduction, then capabilities: what I do in each area and the tools I use for it.
// The first group is the main strength, so it gets the wide, dark tile.
// When that would leave a single tile on the last row, the last tile widens to close the gap.
export default function About() {
  const { t } = useLanguage();
  const groups = t.about.skillGroups;
  const widenLast = (groups.length + 1) % 3 === 2;
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>
        <p className={styles.lead}>{t.about.p1}</p>
        {t.about.p2 && <p className={styles.support}>{t.about.p2}</p>}

        <h3 className={styles.capabilitiesTitle}>{t.about.skillsTitle}</h3>
        <ul className={styles.capabilities}>
          {groups.map((group, index) => (
            <li
              key={index}
              className={`${styles.capability} ${index === 0 ? styles.primary : ''} ${widenLast && index === groups.length - 1 ? styles.wide : ''}`}
            >
              <h4 className={styles.capabilityTitle}>{group.title}</h4>
              {group.description && <p className={styles.capabilityText}>{group.description}</p>}
              <ul className={styles.tools}>
                {group.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
