"use client";
import { useState } from 'react';
import styles from './Experience.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCert, setActiveCert] = useState(null);
  const { t } = useLanguage();

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={`container ${styles.container}`}>

        {/* Experience Section */}
        <div className={styles.half}>
          <h2 className="section-title" style={{ textAlign: 'left' }}>{t.experience.title}</h2>

          <div className={styles.tabsContainer}>
            <div className={styles.tabList}>
              {t.experience.jobs.map((job, index) => (
                <button
                  key={index}
                  className={`${styles.tabButton} ${activeTab === index ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {job.company}
                </button>
              ))}
            </div>

            <div className={styles.tabPanels}>
              {t.experience.jobs.map((job, index) => (
                <div
                  key={index}
                  className={styles.tabPanel}
                  style={{ display: activeTab === index ? 'block' : 'none' }}
                >
                  <h3 className={styles.jobTitle}>
                    {job.title} <span className={styles.companyName}></span>
                  </h3>
                  <p className={styles.jobDate}>{job.date}</p>
                  <ul className={styles.jobDescription}>
                    {job.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates Section (Accordions) */}
        <div className={styles.half} id="certificates">
          <h2 className="section-title" style={{ textAlign: 'left' }}>{t.experience.certTitle}</h2>

          <div className={styles.accordionContainer}>
            {t.experience.certificates.map((cert) => (
              <div
                key={cert.id}
                className={`${styles.accordionItem} glass`}
              >
                <div
                  className={styles.accordionHeader}
                  onClick={() => setActiveCert(activeCert === cert.id ? null : cert.id)}
                >
                  <h4 className={styles.certTitle}>{cert.title}</h4>
                  <span className={styles.accordionIcon}>
                    {activeCert === cert.id ? '−' : '+'}
                  </span>
                </div>

                <div
                  className={styles.accordionContent}
                  style={{
                    maxHeight: activeCert === cert.id ? '200px' : '0',
                    opacity: activeCert === cert.id ? 1 : 0
                  }}
                >
                  <div className={styles.certDetails}>
                    <p><strong>{t.experience.issuer}</strong> {cert.issuer}</p>
                    <p><strong>{t.experience.date}</strong> {cert.date}</p>
                    <a href={cert.file} target="_blank" rel="noreferrer" className={styles.certLink}>{t.experience.viewCert}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
