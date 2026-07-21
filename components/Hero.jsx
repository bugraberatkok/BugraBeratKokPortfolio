import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.photoContainer}>
          <div className={styles.photoPlaceholder}>
            <img src="/hero/profile.jpg" alt="Buğra Berat Kök" />
          </div>
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.greeting}>Hi, I am</h2>
          <h1 className={styles.name}>Buğra Berat Kök</h1>
          <h3 className={styles.title}>Software Engineering Student & Developer</h3>
          <p className={styles.tagline}>
            I enjoy building systems, solving problems, and improving things with every iteration.
            My work spans backend development, software testing, web applications, and game technologies.
          </p>
          <div className={styles.actions}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="/resume.pdf" target="_blank" className={`btn ${styles.btnOutline}`}>Download Resume</a>
          </div>
        </div>
      </div>

      <div className={styles.glowElement}></div>
    </section>
  );
}
