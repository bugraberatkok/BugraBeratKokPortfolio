"use client";
import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Projects.module.css';
import { useLanguage } from '../context/LanguageContext';

// Focus carousel: the selected project sits in the middle, its neighbours wait blurred on either side.
// Move with the arrow buttons, the keyboard arrow keys, a swipe, or by clicking a neighbour.
// Projects with screenshots show them at the top of the card; the active card lets you flip through
// them and open the current one in a full-size viewer.
export default function Projects() {
  const { t } = useLanguage();
  const items = t.projects.items;
  const count = items.length;
  const [active, setActive] = useState(0);
  const [shot, setShot] = useState(0);
  const touchStart = useRef(null);
  const viewer = useRef(null);

  const shots = items[active]?.images ?? [];
  const go = index => { setActive((index + count) % count); setShot(0); };
  // Relative moves build on the latest state, so key repeats and quick clicks never get lost.
  const move = delta => { setActive(current => (current + delta + count) % count); setShot(0); };
  const moveShot = delta => setShot(current => (current + delta + shots.length) % shots.length);
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

  function onViewerKeyDown(event) {
    if (shots.length < 2) return;
    if (event.key === 'ArrowRight') { event.preventDefault(); moveShot(1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); moveShot(-1); }
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
          const images = project.images ?? [];
          const image = images[isActive ? Math.min(shot, images.length - 1) : 0];
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
              {image && (
                <div className={styles.media}>
                  {isActive ? (
                    <button type="button" className={styles.mediaButton} onClick={() => viewer.current?.showModal()} aria-label={`${t.projects.enlarge}: ${image.alt}`}>
                      <Image src={image.src} alt="" fill sizes="(max-width: 700px) 84vw, 560px" quality={90} />
                    </button>
                  ) : (
                    <Image src={image.src} alt="" fill sizes="(max-width: 700px) 84vw, 560px" quality={90} />
                  )}
                  {isActive && images.length > 1 && (
                    <div className={styles.shots}>
                      {images.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          className={styles.shotDot}
                          aria-label={`${t.projects.screenshot} ${i + 1} / ${images.length}`}
                          aria-pressed={i === shot}
                          onClick={() => setShot(i)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
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

      {/* Full-size viewer for the active project's screenshots; Esc or a click outside closes it. */}
      <dialog
        ref={viewer}
        className={styles.viewer}
        aria-label={items[active]?.title}
        onKeyDown={onViewerKeyDown}
        onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close(); }}
      >
        {shots[shot] && (
          <figure className={styles.viewerFigure}>
            <Image src={shots[shot].src} alt={shots[shot].alt} width={1600} height={900} sizes="(max-width: 1240px) 94vw, 1200px" quality={90} className={styles.viewerImage} />
            <figcaption className={styles.viewerCaption}>
              <span>{shots[shot].alt}</span>
              {shots.length > 1 && <span className={styles.position}>{shot + 1} / {shots.length}</span>}
            </figcaption>
          </figure>
        )}
        <div className={styles.viewerBar}>
          {shots.length > 1 && (
            <div className={styles.controls}>
              <button type="button" onClick={() => moveShot(-1)} aria-label={t.projects.prevShot}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 8 12l7 7" /></svg>
              </button>
              <button type="button" onClick={() => moveShot(1)} aria-label={t.projects.nextShot}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
              </button>
            </div>
          )}
          <button type="button" className={styles.viewerClose} onClick={() => viewer.current?.close()}>{t.projects.close}</button>
        </div>
      </dialog>
    </section>
  );
}
