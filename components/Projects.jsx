"use client";
import styles from './Projects.module.css';
import { useLanguage } from '../context/LanguageContext';
export default function Projects() {
  const { t } = useLanguage();
  return (
    <section id="projects">
      <div className="container">
        <div className={styles.sectionHeader}><h2 className="section-title">{t.projects.title}</h2><p>{t.projects.intro}</p></div>
        <div className={styles.grid}>
          {t.projects.items.map((project, index) => (
            <article key={project.github} className={index === 0 ? styles.featured : styles.card}>
              <div>
                <p className={styles.category}>{project.category}</p>
                <h3 className={styles.projectTitle}><a href={project.github} target="_blank" rel="noreferrer">{project.title}</a></h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <ul className={styles.projectTechList}>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                <a className={styles.repoLink} href={project.github} target="_blank" rel="noreferrer" aria-label={project.title + ' — GitHub'}>{t.projects.viewSource} <span aria-hidden="true">↗</span></a>
              </div>
              {index === 0 && (
                <figure className={styles.architecture}>
                  <figcaption>{t.projects.architectureTitle}</figcaption>
                  <div className={styles.node}><span>{t.projects.interfaceLabel}</span><strong>React / TypeScript</strong></div>
                  <div className={styles.connector} aria-hidden="true">↕</div>
                  <div className={styles.node}><span>{t.projects.apiLabel}</span><strong>Spring Boot / JWT</strong></div>
                  <div className={styles.modules}><span>{t.projects.households}</span><span>{t.projects.chores}</span><span>{t.projects.rewards}</span></div>
                  <div className={styles.connector} aria-hidden="true">↕</div>
                  <div className={styles.node}><span>{t.projects.dataLabel}</span><strong>PostgreSQL / Flyway</strong></div>
                  <p>{t.projects.deploymentLabel}: GitHub Actions · Railway · Vercel</p>
                </figure>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
