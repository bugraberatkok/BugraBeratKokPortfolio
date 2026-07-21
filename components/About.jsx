import styles from './About.module.css';

export default function About() {
  const skills = [
    "Java", "Spring Boot", "HTML/CSS", "JavaScript",
    "C#", "Unity", "Postman", "Git & Github", "SQL", "REST APIs", "Software Testing", "Unreal Engine Blueprints", "Game Engine Fundamentals"
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>
        <h2 className="section-title">About Me</h2>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              Hello! I'm Buğra, a fourth-year Software Engineering student who enjoys understanding how systems work, turning ideas into functional projects, and finding practical solutions to technical problems.            </p>
            <p className={styles.paragraph}>
              My experience covers backend development, web applications, software testing, databases, and game technologies. I am currently strengthening my skills through project-based training, QA practices, and personal projects while exploring areas such as test automation, game development, and backend technologies.            </p>
          </div>

          <div className={styles.skillsWrapper}>
            <h3 className={styles.skillsTitle}>My Professional Skills and Experiences</h3>
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
