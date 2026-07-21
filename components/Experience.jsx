"use client";
import { useState } from 'react';
import styles from './Experience.module.css';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCert, setActiveCert] = useState(null);

  const jobs = [
    {
      company: "Ideasoft",
      title: "Frontend Developer Intern",
      date: "Mar 2025 – Aug 2025",
      description: [
        "Built and customized responsive web pages using WordPress and Elementor.",
        "Developed reusable UI components, animated sections, and interactive page elements.",
        "Applied on-page SEO improvements and supported ongoing front-end development tasks.",
        "Collaborated with the team through daily meetings, task planning, and regular design updates."
      ]
    },
    {
      company: "Egemsoft",
      title: "Test Engineering Internship Program",
      date: "Jul 2026 – Aug 2026 | Ongoing",
      description: [
        "Receiving intensive training in software testing fundamentals, SDLC, Agile and Waterfall testing processes.",
        "Designing functional, integration, UAT, regression, positive, and negative test scenarios.",
        "Practicing defect lifecycle management, test planning, Jira workflows, API testing with Postman, and SQL queries.",
        "Progressing toward mobile testing, Selenium with Java, test automation, and performance testing modules."
      ]
    },
    {
      company: "TNC Group - Software Persona",
      title: "Software Engineering Project-Based Training",
      date: "Jul 2026 – Aug 2026 | Ongoing",
      description: [
        "Participating in a project-based software engineering program covering web, mobile, database, and backend development.",
        "Completing practical assignments and technical projects for each module.",
        "Studying JavaScript web development, Android and iOS application development, SQL, and backend technologies.",
        "Strengthening problem-solving, software design, and end-to-end development skills through hands-on work."
      ]
    }
  ];

  const certificates = [
    { id: 1, title: "Frontend School", issuer: "Coderspace", date: "2024", file: "/certificates/frontend-school.pdf" },
    { id: 2, title: "Introduction to Software Testing", issuer: "BTK Akademi", date: "2026", file: "/certificates/software-testing.pdf" },
    { id: 3, title: "API and API Testing", issuer: "BTK Akademi", date: "2026", file: "/certificates/api-testing.pdf" },
    { id: 4, title: "Introduction to Web Services", issuer: "BTK Akademi", date: "2026", file: "/certificates/web-services.pdf" },
    { id: 5, title: "DevOps Solutions with Jenkins", issuer: "BTK Akademi", date: "2026", file: "/certificates/jenkins.pdf" },
    { id: 6, title: "Introduction to Databases", issuer: "BTK Akademi", date: "2026", file: "/certificates/databases.pdf" }
  ];

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={`container ${styles.container}`}>

        {/* Experience Section */}
        <div className={styles.half}>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Experience & Training</h2>

          <div className={styles.tabsContainer}>
            <div className={styles.tabList}>
              {jobs.map((job, index) => (
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
              {jobs.map((job, index) => (
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
          <h2 className="section-title" style={{ textAlign: 'left' }}>Certificates</h2>

          <div className={styles.accordionContainer}>
            {certificates.map((cert) => (
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
                    <p><strong>Issuer:</strong> {cert.issuer}</p>
                    <p><strong>Issued Date:</strong> {cert.date}</p>
                    <a href={cert.file} target="_blank" rel="noreferrer" className={styles.certLink}>View Credential (PDF)</a>
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
