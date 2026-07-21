"use client";
import styles from './Projects.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <h2 className="section-title">{t.projects.title}</h2>

        <div className={styles.grid}>
          {t.projects.items.map((project, index) => (
            <div key={index} className={`${styles.card} glass`}>
              <div className={styles.cardHeader}>
                <div className={styles.folderIcon}>
                  {index === 0 || index === 1 || index === 5 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 3 22 12 22 21 2 21 2 12 5 3"></polygon><line x1="2" y1="12" x2="22" y2="12"></line><line x1="9" y1="16" x2="15" y2="16"></line><circle cx="6.5" cy="16.5" r="1.5"></circle><circle cx="17.5" cy="16.5" r="1.5"></circle></svg>
                  ) : index === 2 || index === 3 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  )}
                </div>
                <div className={styles.projectLinks}>
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                </div>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>
                {project.description}
              </p>
              <ul className={styles.projectTechList}>
                {project.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
