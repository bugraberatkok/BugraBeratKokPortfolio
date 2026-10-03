"use client";
import styles from './Experience.module.css';
import { useLanguage } from '../context/LanguageContext';
export default function Experience() {
  const { t } = useLanguage();
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">{t.experience.title}</h2>
        <div>
          {t.experience.jobs.map((job, index) => (
            <article key={job.company} className={styles.job}>
              <div className={styles.jobMeta}><h3>{job.company}</h3><p>{job.date}</p>{index === 0 && <span className={styles.current}>{t.experience.current}</span>}</div>
              <div className={styles.jobContent}><h4>{job.title}</h4><ul>{job.description.map(desc => <li key={desc}>{desc}</li>)}</ul></div>
            </article>
          ))}
        </div>
        <div className={styles.certificates} id="certificates">
          <h3>{t.experience.certTitle}</h3>
          <div className={styles.certGrid}>
            {t.experience.certificates.map(cert => (
              <details key={cert.id} className={styles.certificate}>
                <summary>{cert.title}<span aria-hidden="true">+</span></summary>
                <div className={styles.certDetails}><p>{cert.issuer} · {cert.date}</p><a href={cert.file} target="_blank" rel="noreferrer">{t.experience.viewCert} ↗</a></div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
