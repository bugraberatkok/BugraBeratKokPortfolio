"use client";
import styles from './Experience.module.css';
import { useLanguage } from '../context/LanguageContext';

// Jobs are listed newest first; the first one is the current role and starts expanded.
// Each role shows a one-line summary; its detailed points sit behind "Details".
// The details share a name, so opening one role closes the other (native exclusive accordion).
export default function Experience() {
  const { t } = useLanguage();
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">{t.experience.title}</h2>
        <ol className={styles.timeline}>
          {t.experience.jobs.map((job, index) => (
            <li key={index} className={styles.job}>
              <p className={styles.date}>{job.date}</p>
              <div className={styles.body}>
                <div className={styles.head}>
                  <h3 className={styles.company}>{job.company}</h3>
                  {index === 0 && t.experience.current && <span className={styles.current}>{t.experience.current}</span>}
                </div>
                <p className={styles.title}>{job.title}</p>
                {job.summary && <p className={styles.summary}>{job.summary}</p>}
                {job.description.length > 0 && (
                  <details className={styles.details} name="experience-details" open={index === 0}>
                    <summary>{t.experience.details} <span className={styles.count}>{job.description.length}</span></summary>
                    <ul className={styles.points}>
                      {job.description.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                  </details>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
