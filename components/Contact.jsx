"use client";
import { useState } from 'react';
import styles from './Contact.module.css';
import { useLanguage } from '../context/LanguageContext';

const EMAIL = 'kokbugraberat@gmail.com';

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const channels = [
    { id: 'email', name: t.contact.emailAction, value: EMAIL, href: `mailto:${EMAIL}`, action: t.contact.write },
    { id: 'linkedin', name: 'LinkedIn', value: 'linkedin.com/in/bugraberatkok', href: 'https://www.linkedin.com/in/bugraberatkok/', action: t.contact.openProfile, external: true },
    { id: 'github', name: 'GitHub', value: 'github.com/bugraberatkok', href: 'https://github.com/bugraberatkok', action: t.contact.openProfile, external: true },
    { id: 'resume', name: t.contact.resume, value: 'PDF', href: '/resume.pdf', action: t.contact.download, download: true },
  ];

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be blocked; the mailto link still works.
    }
  }

  return (
    <section id="contact" className={`panel ${styles.panel}`} aria-labelledby="contact-title">
      <div className={`container ${styles.layout}`}>
        <div>
          <h2 id="contact-title" className={styles.title}>{t.contact.title}</h2>
          {t.contact.description && <p className={styles.description}>{t.contact.description}</p>}
        </div>

        <ul className={styles.channels}>
          {channels.map(channel => (
            <li key={channel.id} className={styles.channel}>
              <div className={styles.text}>
                <a
                  className={styles.link}
                  href={channel.href}
                  {...(channel.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  {...(channel.download ? { download: true } : {})}
                >
                  {channel.name}
                </a>
                <span className={styles.value}>{channel.value}</span>
              </div>
              {channel.id === 'email' && (
                <button type="button" className={styles.copy} onClick={copyEmail}>
                  <span aria-live="polite">{copied ? t.contact.copied : t.contact.copy}</span>
                </button>
              )}
              <span className={styles.action} aria-hidden="true">{channel.action}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
