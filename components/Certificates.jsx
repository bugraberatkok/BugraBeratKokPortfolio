"use client";
import styles from './Certificates.module.css';
import { useLanguage } from '../context/LanguageContext';

// issuedOn is stored as 'YYYY-MM'.
function formatIssuedOn(value, language) {
  const [year, month] = (value || '').split('-').map(Number);
  if (!year) return '';
  if (!month) return String(year);
  return new Intl.DateTimeFormat(language === 'tr' ? 'tr-TR' : 'en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(Date.UTC(year, month - 1)));
}

export default function Certificates({ items }) {
  const { t, language } = useLanguage();
  if (!items.length) return null;

  return (
    <section id="certificates">
      <div className="container">
        <h2 className="section-title">{t.certificates.title}</h2>
        <ul className={styles.list}>
          {items.map(cert => {
            const title = (language === 'tr' ? cert.titleTr : cert.titleEn) || cert.titleTr || cert.titleEn;
            const meta = [cert.issuer, formatIssuedOn(cert.issuedOn, language)].filter(Boolean).join(' · ');
            return (
              <li key={cert.id} className={styles.item}>
                <div className={styles.copy}><h3>{title}</h3>{meta && <p>{meta}</p>}</div>
                <div className={styles.links}>
                  {cert.fileUrl && <a href={cert.fileUrl} target="_blank" rel="noreferrer">{t.certificates.view} <span aria-hidden="true">↗</span></a>}
                  {cert.credentialUrl && <a href={cert.credentialUrl} target="_blank" rel="noreferrer">{t.certificates.verify} <span aria-hidden="true">↗</span></a>}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
