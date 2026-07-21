"use client";
import styles from './About.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  const skills = [
    "Java", "Spring Boot", "HTML/CSS", "JavaScript",
    "C#", "Unity", "Postman", "Git & Github", "SQL", "REST APIs", "Software Testing", "Unreal Engine Blueprints", "Game Engine Development"
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>
        <h2 className="section-title">{t.about.title}</h2>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.paragraph}>{t.about.p1}</p>
            <p className={styles.paragraph}>{t.about.p2}</p>
          </div>

          <div className={styles.skillsWrapper}>
            <h3 className={styles.skillsTitle}>{t.about.skillsTitle}</h3>
            <ul className={styles.skillsList}>
              {skills.map((skill, index) => (
                <li key={index} className={styles.skillItem}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
