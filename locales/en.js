export const en = {
  "nav": {
    "about": "About",
    "projects": "Projects",
    "experience": "Experience",
    "contact": "Contact",
    "education": "Education",
    "label": "Main menu",
    "menu": "Menu",
    "close": "Close",
    "sectionsLabel": "Sections"
  },
  "hero": {
    "greeting": "Hi, I am",
    "name": "Buğra Berat Kök",
    "title": "Software Engineering Student and Full-Stack Developer",
    "tagline": "I build full-stack applications, backend systems, and AI integrations with software architecture at the center.",
    "viewWork": "Explore projects",
    "downloadResume": "Download resume",
    "photoAlt": "Portrait of Buğra Berat Kök",
    "currentCompany": "Ailways",
    "currentRole": "Software Developer Intern",
    "focus": [
      "Full-stack development",
      "Backend engineering",
      "Software architecture",
      "AI-integrated systems"
    ]
  },
  "about": {
    "title": "About Me",
    "p1": "I am growing into a new kind of software engineer: one who designs the system, directs AI tools, and verifies the result.",
    "p2": "Software architecture is where I am strongest. I started with game development, a path that went from Unity projects to a C++ game engine I wrote from scratch.",
    "skillsTitle": "Capabilities",
    "p3": "",
    "skillGroups": [
      {
        "title": "Architecture",
        "description": "Clear module boundaries and a structure that is easy to extend.",
        "items": [
          "Modular & layered architecture",
          "REST API design",
          "Design patterns"
        ]
      },
      {
        "title": "Backend",
        "description": "The server side, from the database to the API.",
        "items": [
          "Java",
          "Spring Boot",
          "Node.js, Express",
          "PHP, WordPress",
          "PostgreSQL"
        ]
      },
      {
        "title": "Frontend",
        "description": "Responsive, accessible web interfaces.",
        "items": [
          "TypeScript",
          "JavaScript",
          "React",
          "Next.js",
          "Tailwind CSS"
        ]
      },
      {
        "title": "AI & integration",
        "description": "Connecting AI agents and APIs to real product flows.",
        "items": [
          "n8n",
          "AI agents",
          "LLM integration",
          "Supabase",
          "MCP"
        ]
      },
      {
        "title": "Testing",
        "description": "Automated UI, API, and load testing.",
        "items": [
          "Selenium",
          "JUnit",
          "Postman",
          "JMeter",
          "Jira"
        ]
      },
      {
        "title": "Tooling & deployment",
        "description": "Version control, automated builds, and deployment.",
        "items": [
          "Git",
          "GitHub Actions",
          "Docker",
          "Vercel"
        ]
      },
      {
        "title": "Games & graphics",
        "description": "Game engines, rendering, and real-time loops.",
        "items": [
          "C++",
          "SDL2",
          "C#",
          "Unity",
          "Unreal Engine (Blueprints)"
        ]
      }
    ]
  },
  "projects": {
    "title": "Projects",
    "items": [
      {
        "title": "Smart Chores Tracker",
        "description": "A full-stack household chore platform with assignments, progress tracking, and rewards.",
        "tags": [
          "Spring Boot",
          "React / TypeScript",
          "PostgreSQL"
        ],
        "github": "https://github.com/bugraberatkok/SmartChoresTracker",
        "images": [
          {
            "src": "/projects/smart-chores-tracker-1.png",
            "alt": "A household member’s daily chore dashboard in Smart Chores Tracker, with points, streak and a weekly calendar"
          },
          {
            "src": "/projects/smart-chores-tracker-2.png",
            "alt": "Weekly progress chart with completed chores and total points"
          },
          {
            "src": "/projects/smart-chores-tracker-3.png",
            "alt": "Badge cabinet with earned and upcoming achievements"
          }
        ],
        "category": "Capstone",
        "shortTitle": "Smart Chores Tracker",
        "highlights": [
          "Modular architecture and authentication / authorization.",
          "CI and deployment."
        ]
      },
      {
        "title": "Şifa — AI Health Assistant",
        "description": "A conversational health assistant with a main agent and specialized sub-agents.",
        "tags": [
          "n8n",
          "LLM",
          "Supabase / PostgreSQL"
        ],
        "github": "",
        "category": "Ailways · AI agents",
        "shortTitle": "Şifa AI Assistant",
        "highlights": [
          "Agent orchestration and conversational context.",
          "Validation and automated testing."
        ]
      },
      {
        "title": "WordPress Multisite Management Platform",
        "description": "Centralized management for independent websites, with shared content tools and live editing.",
        "tags": [
          "WordPress Multisite",
          "Content Studio",
          "MCP experimentation"
        ],
        "github": "",
        "images": [
          {
            "src": "/projects/wordpress-1.png",
            "alt": "Content Studio: fields on the left update the live preview of the site in the middle (sample site)"
          },
          {
            "src": "/projects/wordpress-2.png",
            "alt": "Editing the cards of a differently designed site from the same panel (sample site)"
          },
          {
            "src": "/projects/wordpress-3.png",
            "alt": "SEO and GEO page with a search result preview, a compliance score and a list of missing details"
          }
        ],
        "category": "Ailways · Infrastructure",
        "shortTitle": "WordPress Multisite",
        "highlights": [
          "Shared infrastructure with independent site designs.",
          "Centralized editing and management."
        ]
      },
      {
        "title": "Football Analyzer AI",
        "description": "Collects live football statistics and uses Gemini to write pre-match tactical reports.",
        "tags": [
          "Spring Boot",
          "React",
          "Gemini"
        ],
        "github": "https://github.com/bugraberatkok/football-analyzer-ai",
        "category": "Match analysis",
        "shortTitle": "Football Analyzer AI",
        "highlights": [
          "API aggregation.",
          "MVC, Facade, and Strategy patterns."
        ]
      },
      {
        "title": "Focus — Custom C++ Game Engine",
        "description": "A 2D game engine written from scratch, with two playable games built on it.",
        "tags": [
          "C++",
          "SDL2"
        ],
        "github": "https://github.com/bugraberatkok/Focus-GameEngine-and-Two-Playable-Games",
        "images": [
          {
            "src": "/projects/focus-1.webp",
            "alt": "Apple Collector gameplay: the player collects apples that match its colour to score points"
          },
          {
            "src": "/projects/focus-2.webp",
            "alt": "Cat Chase gameplay: the cat catches mice while escaping the dogs on its tail"
          }
        ],
        "category": "C++ · Game engine",
        "shortTitle": "Focus Game Engine",
        "highlights": [
          "Rendering, input, and collision systems.",
          "Reusable engine architecture."
        ]
      },
      {
        "title": "FitTrack — Fitness & Nutrition Dashboard",
        "description": "A full-stack app for tracking workouts and nutrition.",
        "tags": [
          "Spring Boot",
          "React",
          "H2"
        ],
        "github": "https://github.com/bugraberatkok/fitness-web-app",
        "images": [
          {
            "src": "/projects/fittrack-1.png",
            "alt": "FitTrack dashboard with the day’s calorie summary, a progress ring and recent activity"
          },
          {
            "src": "/projects/fittrack-2.png",
            "alt": "Weekly workout calendar and logged exercises"
          },
          {
            "src": "/projects/fittrack-3.png",
            "alt": "Meal log with calorie totals"
          }
        ],
        "category": "Fitness & nutrition",
        "shortTitle": "FitTrack",
        "highlights": [
          "Authentication and a tracking dashboard.",
          "Nutrition, workouts, and activity history."
        ]
      }
    ],
    "intro": "Some of the systems I have designed, built, and tested.",
    "viewSource": "View code on GitHub",
    "architectureTitle": "Inside Smart Chores Tracker",
    "interfaceLabel": "Interface",
    "apiLabel": "API & access",
    "dataLabel": "Persistence",
    "households": "Households",
    "chores": "Chores",
    "rewards": "Rewards",
    "deploymentLabel": "Delivery",
    "prev": "Previous project",
    "next": "Next project",
    "screenshot": "Screenshot",
    "enlarge": "Enlarge screenshot",
    "prevShot": "Previous screenshot",
    "nextShot": "Next screenshot",
    "close": "Close"
  },
  "experience": {
    "title": "Experience",
    "certTitle": "Certificates",
    "issuer": "Issuer:",
    "date": "Issued Date:",
    "viewCert": "View Credential (PDF)",
    "jobs": [
      {
        "company": "Ailways",
        "title": "Software Developer Intern",
        "date": "Sep 2026 – Present",
        "summary": "Building AI agent workflows and the architecture around them.",
        "description": [
          "Design multi-agent workflows in n8n and decide how responsibilities are split between agents.",
          "Integrate different LLMs into product flows, keeping agent prompts in the database and measuring token usage and latency in a separate test workflow.",
          "Document architecture decisions and keep test and live environments apart.",
          "Projects from this role: Şifa and the WordPress Multisite platform (see Projects)."
        ]
      },
      {
        "company": "Egemsoft",
        "title": "Software Testing / Test Automation Internship",
        "date": "Jul – Aug 2026",
        "summary": "Manual and automated testing across UI, API, and performance.",
        "description": [
          "Designed functional, integration, UAT, regression, and positive/negative test scenarios across Agile and Waterfall processes.",
          "Managed the defect lifecycle and test plans in Jira, and validated data with SQL queries.",
          "Automated UI tests with Selenium and Java, and tested APIs with Postman.",
          "Ran performance and load tests with JMeter."
        ]
      },
      {
        "company": "TNC Group",
        "title": "Project-Based Software Engineering Training",
        "date": "Jul – Aug 2026",
        "summary": "One project per module across web, mobile, database, and backend.",
        "description": [
          "Completed a project-based program covering web, mobile, database, and backend development.",
          "Delivered a practical assignment and a technical project for each module.",
          "Worked with JavaScript for the web, Android and iOS app development, SQL, and backend technologies."
        ]
      },
      {
        "company": "IdeaSoft",
        "title": "Frontend Developer Intern",
        "date": "Mar – Sep 2025",
        "summary": "Responsive WordPress sites and reusable UI components.",
        "description": [
          "Built and customized responsive web pages with WordPress and Elementor.",
          "Developed reusable UI components, animated sections, and interactive page elements with HTML, CSS, and JavaScript.",
          "Applied on-page SEO improvements.",
          "Worked with the team through daily meetings, task planning, and regular design reviews."
        ]
      }
    ],
    "certificates": [
      {
        "id": 1,
        "title": "Frontend School",
        "issuer": "Coderspace",
        "date": "2024",
        "file": "/certificates/frontend-school.pdf"
      },
      {
        "id": 2,
        "title": "Introduction to Software Testing",
        "issuer": "BTK Akademi",
        "date": "2026",
        "file": "/certificates/software-testing.pdf"
      },
      {
        "id": 3,
        "title": "API and API Testing",
        "issuer": "BTK Akademi",
        "date": "2026",
        "file": "/certificates/api-testing.pdf"
      },
      {
        "id": 4,
        "title": "Introduction to Web Services",
        "issuer": "BTK Akademi",
        "date": "2026",
        "file": "/certificates/web-services.pdf"
      },
      {
        "id": 5,
        "title": "DevOps Solutions with Jenkins",
        "issuer": "BTK Akademi",
        "date": "2026",
        "file": "/certificates/jenkins.pdf"
      },
      {
        "id": 6,
        "title": "Introduction to Databases",
        "issuer": "BTK Akademi",
        "date": "2026",
        "file": "/certificates/databases.pdf"
      }
    ],
    "current": "Current",
    "details": "Details"
  },
  "contact": {
    "title": "Get in touch",
    "description": "I am open to junior software engineer roles and internships. Email gets the fastest reply.",
    "name": "Name",
    "email": "Email",
    "message": "Message",
    "send": "Send Message",
    "footer": "Built with Next.js.",
    "emailAction": "Email",
    "write": "Send an email",
    "copy": "Copy",
    "copied": "Copied",
    "openProfile": "Open profile",
    "resume": "Resume",
    "download": "Download PDF"
  },
  "education": {
    "title": "Education & Languages",
    "items": [
      {
        "institution": "Bahçeşehir University",
        "degree": "B.Sc. Software Engineering",
        "date": "Graduating January 2027",
        "description": ""
      },
      {
        "institution": "Bahçeşehir University",
        "degree": "Computer Education and Instructional Technology (Double Major)",
        "date": "Completed June 2026",
        "description": ""
      },
      {
        "institution": "Universidad San Jorge, Spain",
        "degree": "Erasmus Exchange, Zaragoza",
        "date": "2025–2026",
        "description": ""
      }
    ],
    "languagesTitle": "Languages",
    "languages": [
      "Turkish (native)",
      "English (advanced)",
      "Spanish (A1 certificate)"
    ]
  },
  "certificates": {
    "title": "Certificates",
    "view": "View certificate",
    "verify": "Verify"
  },
  "workbench": {
    "choose": "Choose a cartridge",
    "loaded": "Loaded",
    "insert": "Insert",
    "hint": "Pick a project. Let the machine do its thing.",
    "companion": "Your project companion",
    "online": "ONLINE",
    "ready": "READY",
    "standby": "Good ideas.\nBuilt into systems.",
    "standbyHint": "Insert a project to explore.",
    "eject": "Eject project",
    "footer": "A little playfulness. A lot of engineering."
  }
};
