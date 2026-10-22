"use client";
import styles from './Contact.module.css';
import { useLanguage } from '../context/LanguageContext';

const EMAIL = 'kokbugraberat@gmail.com';

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className={`panel ${styles.panel}`}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>{t.contact.title}</h2>
        {t.contact.description && <p className={styles.description}>{t.contact.description}</p>}
        <div className={styles.actions}>
          <a className="btn btn-primary" href={`mailto:${EMAIL}`}>{t.contact.emailAction}</a>
          <a className="btn btn-ghost-dark" href="https://www.linkedin.com/in/bugraberatkok/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn btn-ghost-dark" href="https://github.com/bugraberatkok" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p className={styles.email}>{EMAIL}</p>
      </div>
    </section>
  );
}
