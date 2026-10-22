"use client";
import styles from './Experience.module.css';
import { useLanguage } from '../context/LanguageContext';

// Jobs are listed newest first; the first one is the current role.
export default function Experience() {
  const { t } = useLanguage();
  return (
    <section id="experience" className={`section ${styles.section}`}>
      <div className="container split">
        <h2 className="section-title">{t.experience.title}</h2>
        <ol className={styles.timeline}>
          {t.experience.jobs.map((job, index) => (
            <li key={index} className={styles.job}>
              <span className={`${styles.marker} ${index === 0 ? styles.markerCurrent : ''}`} aria-hidden="true" />
              <div className={styles.head}>
                <h3 className={styles.company}>{job.company}</h3>
                <p className={styles.date}>{job.date}</p>
              </div>
              <p className={styles.title}>
                {job.title}
                {index === 0 && t.experience.current && <span className={styles.current}>{t.experience.current}</span>}
              </p>
              <ul className={styles.points}>
                {job.description.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
