"use client";
import { useRef, useState } from 'react';
import styles from './Projects.module.css';
import { useLanguage } from '../context/LanguageContext';

// Focus carousel: the selected project sits in the middle, its neighbours wait blurred on either side.
// Move with the arrow buttons, the keyboard arrow keys, a swipe, or by clicking a neighbour.
export default function Projects() {
  const { t } = useLanguage();
  const items = t.projects.items;
  const count = items.length;
  const [active, setActive] = useState(0);
  const touchStart = useRef(null);

  const go = index => setActive((index + count) % count);
  // Relative moves build on the latest state, so key repeats and quick clicks never get lost.
  const move = delta => setActive(current => (current + delta + count) % count);
  // Shortest signed distance from the active card, so the list wraps around in both directions.
  const offsetOf = index => {
    let offset = index - active;
    if (offset > count / 2) offset -= count;
    if (offset < -count / 2) offset += count;
    return offset;
  };

  function onKeyDown(event) {
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
  }

  function onTouchEnd(event) {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 40) move(distance < 0 ? 1 : -1);
    touchStart.current = null;
  }

  return (
    <section id="projects" className={`panel ${styles.panel}`} aria-labelledby="projects-title">
      <div className={`container ${styles.head}`}>
        <div>
          <h2 id="projects-title" className="section-title">{t.projects.title}</h2>
          {t.projects.intro && <p className={styles.intro}>{t.projects.intro}</p>}
        </div>
        <div className={styles.controls}>
          <button type="button" onClick={() => move(-1)} aria-controls="projects-stage" aria-label={t.projects.prev}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 8 12l7 7" /></svg>
          </button>
          <span className={styles.position} aria-hidden="true">{active + 1} / {count}</span>
          <button type="button" onClick={() => move(1)} aria-controls="projects-stage" aria-label={t.projects.next}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div
        id="projects-stage"
        className={styles.stage}
        role="group"
        aria-roledescription="carousel"
        aria-label={t.projects.title}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={event => { touchStart.current = event.touches[0].clientX; }}
        onTouchEnd={onTouchEnd}
      >
        <p className="sr-only" aria-live="polite">{active + 1} / {count}: {items[active]?.title}</p>
        {items.map((project, index) => {
          const offset = offsetOf(index);
          const isActive = offset === 0;
          return (
            <article
              key={index}
              className={`${styles.card} ${isActive ? styles.active : ''} ${Math.abs(offset) > 1 ? styles.hidden : ''}`}
              style={{ '--offset': offset }}
              aria-roledescription="slide"
              aria-label={`${index + 1} / ${count}`}
              aria-hidden={!isActive}
              onClick={isActive ? undefined : () => go(index)}
            >
              {project.category && <p className={styles.category}>{project.category}</p>}
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              {project.highlights?.length > 0 && (
                <ul className={styles.highlights}>
                  {project.highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
                </ul>
              )}
              <div className={styles.footer}>
                <ul className={styles.tags}>
                  {project.tags.map((tag, i) => <li key={i}>{tag}</li>)}
                </ul>
                {project.github && (
                  <a className={styles.link} href={project.github} target="_blank" rel="noreferrer" tabIndex={isActive ? undefined : -1}>
                    {t.projects.viewSource}<span className="sr-only">: {project.title}</span>
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
