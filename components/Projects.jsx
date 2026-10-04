"use client";
import styles from './Projects.module.css';
import { useLanguage } from '../context/LanguageContext';
export default function Projects() {
  const { t } = useLanguage();
  return (<section id="projects"><div className="container">
    <h2 className="section-title">{t.projects.title}</h2>
    <div className={styles.list}>{t.projects.items.map(project => (
      <article className={styles.item} key={project.github}>
        <div className={styles.copy}><p className={styles.category}>{project.category}</p><h3>{project.title}</h3><p className={styles.description}>{project.description}</p><ul className={styles.tags}>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
        <a className={styles.link} href={project.github} target="_blank" rel="noreferrer" aria-label={project.title + ' — GitHub'}>GitHub <span aria-hidden="true">↗</span></a>
      </article>
    ))}</div>
  </div></section>);
}
