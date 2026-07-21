export const en = {
  // Navbar
  nav: {
    about: "About",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact"
  },

  // Hero
  hero: {
    greeting: "Hi, I am",
    name: "Buğra Berat Kök",
    title: "Software Engineering Student & Developer",
    tagline: "I enjoy building systems, solving problems, and improving things with every iteration. My work spans backend development, software testing, web applications, and game technologies.",
    viewWork: "View My Work",
    downloadResume: "Download Resume",
    photoAlt: "Buğra Berat Kök"
  },

  // About
  about: {
    title: "About Me",
    p1: "Hello! I'm Buğra, a fourth-year Software Engineering student who enjoys understanding how systems work, turning ideas into functional projects, and finding practical solutions to technical problems.",
    p2: "My experience covers backend development, web applications, software testing, databases, and game technologies. I am currently strengthening my skills through project-based training and personal projects while exploring areas such as test automation, game development, and backend technologies.",
    skillsTitle: "My Professional Skills and Experiences"
  },

  // Projects
  projects: {
    title: "Featured Projects",
    items: [
      {
        title: "Focus — Custom 2D Game Engine",
        description: "A modular 2D game engine built from scratch in C++, powering two playable games through reusable rendering, physics, input, and scene systems.",
        tags: ["C++", "SDL", "OpenGL", "OOP"],
        github: "https://github.com/bugraberatkok/Focus-GameEngine-and-Two-Playable-Games"
      },
      {
        title: "Doomsday — 3D Space Runner",
        description: "A 3D space runner and shooter featuring custom geometry, dynamic difficulty, object pooling, collision detection, and smooth cinematic camera movement.",
        tags: ["Java", "Processing", "P3D", "OOP"],
        github: "https://github.com/bugraberatkok/ProcessingGameProject"
      },
      {
        title: "Football Analyzer AI",
        description: "A full-stack pre-match analysis platform that collects real-time football statistics and uses Gemini AI to generate structured tactical reports.",
        tags: ["Java", "Spring Boot", "React", "Gemini API", "RapidAPI"],
        github: "https://github.com/bugraberatkok/football-analyzer-ai"
      },
      {
        title: "FitTrack — Fitness & Nutrition Dashboard",
        description: "A secure full-stack dashboard for tracking daily meals, calories, workouts, exercise progress, and weekly training consistency.",
        tags: ["Java", "Spring Boot", "React", "H2"],
        github: "https://github.com/bugraberatkok/fitness-web-app"
      },
      {
        title: "The Lost & Found Pet System",
        description: "A desktop application for registering, managing, and tracking lost or found pets through a graphical interface with persistent local storage.",
        tags: ["Python", "Tkinter", "SQLite", "Git"],
        github: "https://github.com/bengisusagir/TheLostFoundPetSystem"
      },
      {
        title: "Instrument Duel",
        description: "A browser-based rhythm and reaction game built around musical timing, responsive input, audio-driven mechanics, and a custom JavaScript game loop.",
        tags: ["JavaScript", "HTML5", "CSS3", "MIDI"],
        github: "https://github.com/bugraberatkok/Instrument-Duel"
      }
    ]
  },

  // Experience
  experience: {
    title: "Experience & Training",
    certTitle: "Certificates",
    issuer: "Issuer:",
    date: "Issued Date:",
    viewCert: "View Credential (PDF)",
    jobs: [
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
        company: "TNC Group",
        title: "Software Engineering Project-Based Training",
        date: "Jul 2026 – Aug 2026 | Ongoing",
        description: [
          "Participating in a project-based software engineering program covering web, mobile, database, and backend development.",
          "Completing practical assignments and technical projects for each module.",
          "Studying JavaScript web development, Android and iOS application development, SQL, and backend technologies.",
          "Strengthening problem-solving, software design, and end-to-end development skills through hands-on work."
        ]
      }
    ],
    certificates: [
      { id: 1, title: "Frontend School", issuer: "Coderspace", date: "2024", file: "/certificates/frontend-school.pdf" },
      { id: 2, title: "Introduction to Software Testing", issuer: "BTK Akademi", date: "2026", file: "/certificates/software-testing.pdf" },
      { id: 3, title: "API and API Testing", issuer: "BTK Akademi", date: "2026", file: "/certificates/api-testing.pdf" },
      { id: 4, title: "Introduction to Web Services", issuer: "BTK Akademi", date: "2026", file: "/certificates/web-services.pdf" },
      { id: 5, title: "DevOps Solutions with Jenkins", issuer: "BTK Akademi", date: "2026", file: "/certificates/jenkins.pdf" },
      { id: 6, title: "Introduction to Databases", issuer: "BTK Akademi", date: "2026", file: "/certificates/databases.pdf" }
    ]
  },

  // Contact
  contact: {
    title: "Get In Touch",
    description: "I'm open to internship, junior developer, and software testing opportunities. Feel free to contact me through email or LinkedIn.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    footer: "Built with Next.js."
  }
};
