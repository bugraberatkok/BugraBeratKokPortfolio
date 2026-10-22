"use client";
import styles from './Projects.module.css';
import { useLanguage } from '../context/LanguageContext';

// The first project is featured: full width, with its highlights listed.
export default function Projects() {
  const { t } = useLanguage();
  return (
    <section id="projects" className={`panel ${styles.panel}`}>
      <div className="container">
        <div className={styles.head}>
          <h2 className="section-title">{t.projects.title}</h2>
          {t.projects.intro && <p className={styles.intro}>{t.projects.intro}</p>}
        </div>
        <ul className={styles.grid}>
          {t.projects.items.map((project, index) => {
            const featured = index === 0;
            return (
              <li key={index} className={`${styles.card} ${featured ? styles.featured : ''}`}>
                <div className={styles.main}>
                  {project.category && <p className={styles.category}>{project.category}</p>}
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                </div>
                <div className={styles.meta}>
                  {featured && project.highlights?.length > 0 && (
                    <ul className={styles.highlights}>
                      {project.highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
                    </ul>
                  )}
                  <ul className={styles.tags}>
                    {project.tags.map((tag, i) => <li key={i}>{tag}</li>)}
                  </ul>
                  {project.github && (
                    <a className={styles.link} href={project.github} target="_blank" rel="noreferrer">
                      {t.projects.viewSource}<span className="sr-only">: {project.title}</span>
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
