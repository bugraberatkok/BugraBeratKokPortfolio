"use client";
import styles from './Contact.module.css';
import { useLanguage } from '../context/LanguageContext';
export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact">
      <div className={'container ' + styles.container}>
        <div><h2 className={styles.title}>{t.contact.title}</h2><p className={styles.description}>{t.contact.description}</p></div>
        <div className={styles.socials}>
          <a href="mailto:kokbugraberat@gmail.com">{t.contact.emailAction}<span aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/in/bugraberatkok/" target="_blank" rel="noreferrer">LinkedIn<span aria-hidden="true">↗</span></a>
          <a href="https://github.com/bugraberatkok" target="_blank" rel="noreferrer">GitHub<span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
