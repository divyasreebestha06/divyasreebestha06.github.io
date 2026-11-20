export const portfolioData = {
  personal: {
    name: "Divya Sree Bestha",
    title: "Software Engineer | Backend Developer | AI/ML Enthusiast",
    subtitle: "B.Tech CSE (AI & Machine Learning) @ SRIT • CGPA 8.47 • ServiceNow CSA • AWS Cloud Practitioner",
    location: "Anantapur, Andhra Pradesh, India",
    email: "besthadivya9@gmail.com",
    backupEmail: "divyasreebestha161@gmail.com",
    github: "https://github.com/divyasreebestha06",
    linkedin: "https://www.linkedin.com/in/divyasree-bestha-5000b22a0",
    leetcode: "https://leetcode.com/u/BesthaDivyaSree",
    codechef: "https://www.codechef.com/users/quiet_wave_99",
    availability: "Available for Software Engineer Intern Roles (Summer 2025/2026)",
    bio: "Passionate Computer Science undergraduate specializing in Artificial Intelligence & Machine Learning at Srinivasa Ramanujan Institute of Technology. Experienced in architecting robust backend microservices, RESTful APIs, high-throughput distributed systems, and real-time algorithmic pipelines in Python, Django, FastAPI, and React. With 355+ genuine GitHub commits and 250+ LeetCode algorithmic solutions, I build clean, test-driven, customer-focused software."
  },

  stats: [
    { label: "Profile Commits", value: "359+", sub: "Across 25+ repositories" },
    { label: "LeetCode Solved", value: "250+", sub: "143-Day verified streak" },
    { label: "Academic CGPA", value: "8.47", sub: "B.Tech CSE (AI & ML)" },
    { label: "CodeChef Rating", value: "3-Star", sub: "Competitive Programming" },
    { label: "Certifications", value: "3", sub: "ServiceNow CSA & AWS" },
  ],

  education: [
    {
      institution: "Srinivasa Ramanujan Institute of Technology (SRIT)",
      degree: "B.Tech in Computer Science & Engineering (AI & Machine Learning)",
      period: "2023 – 2027",
      score: "CGPA: 8.47 / 10.0",
      details: "Comprehensive coursework in Data Structures, Algorithms, Object-Oriented Design, Database Management Systems, Operating Systems, Machine Learning Foundations, and Software Engineering."
    },
    {
      institution: "Sri Chaitanya Junior College, Ananthapur",
      degree: "Intermediate — MPC (Mathematics, Physics, Chemistry)",
      period: "2021 – 2023",
      score: "87.0%",
      details: "State Board of Intermediate Education, Andhra Pradesh. Strong foundational training in analytical problem solving and advanced mathematics."
    }
  ],

  skillCategories: [
    {
      category: "Programming",
      skills: [
        { name: "Python", level: 90, desc: "FastAPI, Django, Pandas, AST analysis, Multi-threading, Pytest" },
        { name: "JavaScript (ES6+)", level: 85, desc: "React, Async/Await, Fetch API, DOM, Node.js basics" },
        { name: "SQL", level: 88, desc: "Complex joins, indexing, query optimization, ACID transactions" },
        { name: "Java", level: 75, desc: "OOP, Collections Framework, Spring Boot REST architecture" }
      ]
    },
    {
      category: "Backend & APIs",
      skills: [
        { name: "Django & Django REST", level: 88, desc: "ORM modeling, ATS systems, authentication, viewsets" },
        { name: "FastAPI", level: 90, desc: "Pydantic v2 schemas, async endpoints, Swagger UI, SQLite" },
        { name: "RESTful Web APIs", level: 92, desc: "Stateless HTTP methods, JSON serialization, API contracts" },
        { name: "Microservices", level: 82, desc: "Decoupled services, event dispatchers, circuit breakers" }
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React 18", level: 85, desc: "Hooks, component lifecycles, state management, SPA" },
        { name: "Tailwind CSS", level: 90, desc: "Modern utility-first styling, glassmorphism, responsive UI" },
        { name: "HTML5 & Modern CSS", level: 92, desc: "Semantic layout, flexbox, CSS grid, keyframe animations" }
      ]
    },
    {
      category: "Databases & Storage",
      skills: [
        { name: "MySQL", level: 88, desc: "Relational schema design, foreign keys, stored procedures, indexing" },
        { name: "PostgreSQL", level: 82, desc: "ACID compliance, complex analytical queries, constraints" },
        { name: "SQLite", level: 90, desc: "Lightweight embedded persistence, file locks, transactional DDL" }
      ]
    },
    {
      category: "Core Computer Science",
      skills: [
        { name: "Data Structures & Algorithms", level: 90, desc: "Trees, graphs, dynamic programming, sliding window, bisect" },
        { name: "Object-Oriented Design (OOP)", level: 92, desc: "Encapsulation, inheritance, polymorphism, design patterns" },
        { name: "DBMS & Systems", level: 86, desc: "Normalization, indexing strategies, concurrency control, locks" },
        { name: "Complexity Analysis", level: 90, desc: "Asymptotic Big-O time and space optimization" }
      ]
    },
    {
      category: "Cloud, DevOps & Tools",
      skills: [
        { name: "AWS Cloud", level: 80, desc: "S3, EC2, IAM, Cloud Practitioner CLF-C02 certified" },
        { name: "Docker", level: 82, desc: "Multi-stage Dockerfiles, container isolation, environment parity" },
        { name: "Git & GitHub", level: 94, desc: "Branching, PRs, conventional commits, GitHub Actions CI/CD" },
        { name: "VS Code & Linux", level: 88, desc: "Terminal workflows, bash scripting, debugging & profiling" }
      ]
    },
    {
      category: "Enterprise Platforms",
      skills: [
        { name: "ServiceNow Platform", level: 88, desc: "Certified System Administrator (CSA), PDI, ITSM (Incident, Change)" },
        { name: "ServiceNow Automation", level: 85, desc: "Business Rules, Client Scripts, Service Catalog, Update Sets" }
      ]
    }
  ],

  projects: [
    {
      id: "smart-ai-code-reviewer",
      title: "Smart AI Code Reviewer",
      category: "AI & Full-Stack",
      tagline: "Automated static analysis, bug detection, and AI code optimization engine",
      tech: ["Python", "Django", "React", "REST APIs", "MySQL", "AST Parsing"],
      github: "https://github.com/divyasreebestha06/smart-ai-code-reviewer",
      featured: true,
      badge: "Flagship AI Project",
      description: "A comprehensive full-stack code review platform that combines Python AST static analysis with AI-driven recommendations to detect syntax bugs, anti-patterns, and provide algorithmic optimization advice across multiple programming languages.",
      caseStudy: {
        problem: "Manual code reviews in fast-paced development environments often fail to catch syntax edge-cases, memory leaks, and suboptimal time complexities before production.",
        architecture: "Client-Server decoupling: A responsive React frontend communicates over RESTful JSON APIs with a high-throughput Django backend. Source code is ingested, validated, and processed through Python AST visitors to detect branch complexities and code smells.",
        challenges: [
          "Parsing multi-language syntax trees safely without executing untrusted user code.",
          "Minimizing database serialization latency during high-frequency review runs.",
          "Handling asynchronous review jobs while maintaining responsive UI feedback."
        ],
        solution: "Implemented isolated in-memory AST tokenization with strict timeout barriers, optimized MySQL query indexing for saved review history, and engineered an intuitive React diff viewer.",
        impact: "Provides automated instant code scoring, reducing turnaround time for initial code health checks by over 70%."
      }
    },
    {
      id: "binance-trading-bot",
      title: "Binance Futures Trading Bot",
      category: "Backend & Systems",
      tagline: "Automated real-time algorithmic cryptocurrency futures trading engine",
      tech: ["Python", "Binance API", "Pandas", "MySQL", "WebSocket", "Risk Management"],
      github: "https://github.com/divyasreebestha06/divyasree-binance-bot",
      featured: true,
      badge: "Real-Time Systems",
      description: "An automated algorithmic cryptocurrency trading bot that interfaces with the Binance Futures API over HTTP/WebSocket to monitor real-time order books, execute buy/sell strategies, and log performance metrics.",
      caseStudy: {
        problem: "Cryptocurrency futures markets operate 24/7 with extreme volatility, making manual trading execution prone to emotional bias, slippage, and latency penalties.",
        architecture: "Continuous event loop consuming live ticker feeds, processing market indicators via Pandas data pipelines, and executing cryptographically signed HMAC-SHA256 authenticated orders with database transaction logging.",
        challenges: [
          "Handling exchange network disconnects, API rate-limiting, and WebSocket reconnects.",
          "Preventing catastrophic drawdown through deterministic stop-loss and position sizing logic.",
          "Ensuring zero state corruption during sudden market flash-crashes."
        ],
        solution: "Engineered structured logging with tiered try-except boundaries, automatic exponential backoff on network failures, and relational MySQL schemas tracking every trade invariant.",
        impact: "Operates continuously without manual intervention, maintaining disciplined risk-to-reward parameters on live price streams."
      }
    },
    {
      id: "ai-voice-assistant",
      title: "AI Voice Assistant",
      category: "AI & Full-Stack",
      tagline: "Hands-free voice recognition, conversational NLU, and desktop automation",
      tech: ["Python", "SpeechRecognition", "Pyttsx3", "NLU", "System Automation"],
      github: "https://github.com/divyasreebestha06/ai-voice-assistant",
      featured: true,
      badge: "Conversational AI",
      description: "An intelligent voice assistant that captures voice commands via microphone input, processes intent using natural language parsing, and automates desktop operations like search, email dispatch, and application management.",
      caseStudy: {
        problem: "Users require quick, hands-free multimodal interfaces to execute repetitive desktop workflows and queries without manual keyboard input.",
        architecture: "Dual-thread voice pipeline: Audio capture layer with ambient noise calibration, speech-to-text acoustic parsing, regex/intent routing engine, and low-latency text-to-speech feedback.",
        challenges: [
          "Ambient acoustic noise interference in non-studio environments.",
          "Low-latency response execution for rapid conversational feedback."
        ],
        solution: "Integrated energy-threshold dynamic microphone calibration and mapped asynchronous worker routines to background commands.",
        impact: "Achieves sub-second command interpretation with hands-free desktop execution."
      }
    },
    {
      id: "docspot-healthcare",
      title: "DocSpot: Healthcare Booking",
      category: "Full-Stack",
      tagline: "Seamless doctor appointment booking, patient triage, and schedule management",
      tech: ["Python", "Django", "MySQL", "REST APIs", "HTML5/CSS3"],
      github: "https://github.com/divyasreebestha06/Docspot-seamless-Appointment-Booking-For-Health",
      featured: true,
      badge: "Healthcare Platform",
      description: "A comprehensive healthcare appointment management platform bridging patients with medical specialists, featuring dynamic slot reservations, department filtering, and automated confirmation workflows.",
      caseStudy: {
        problem: "Overcrowded clinic waiting rooms and double-booking errors caused by fragmented phone-based reservation systems.",
        architecture: "Role-based architecture separating Patient, Doctor, and Clinic Administrator portals with relational MySQL tables enforcing slot uniqueness and appointment states.",
        challenges: [
          "Preventing overlapping bookings when two patients select the same specialist slot simultaneously.",
          "Structuring clean, accessible UI for patients across all demographics."
        ],
        solution: "Enforced database-level unique constraints on (doctor_id, appointment_slot) and built responsive booking workflows with clear visual feedback.",
        impact: "Eliminates double-booking errors and provides instant visibility into doctor availability."
      }
    },
    {
      id: "consistent-hashing-load-balancer",
      title: "Consistent Hashing Load Balancer",
      category: "Distributed Systems",
      tagline: "Distributed hash ring with virtual nodes, bisect lookup, and minimal node churn",
      tech: ["Python", "MD5", "Consistent Hashing", "Bisect", "Distributed Systems"],
      github: "https://github.com/divyasreebestha06/consistent-hashing-load-balancer",
      featured: false,
      badge: "Distributed Systems",
      description: "A production-grade Consistent Hash Ring implementing virtual nodes (100 replicas per physical node) and logarithmic bisect lookups to distribute cache keys with minimal reassignment during cluster scaling.",
      caseStudy: {
        problem: "Traditional modulo hashing (hash(key) % N) causes near 100% cache invalidation when servers are added or removed from a distributed cluster.",
        architecture: "Hash ring mapped onto a 32-bit integer continuum [0, 2^32 - 1]. Each physical host maps to K virtual nodes using salted MD5 hashing. Key routing utilizes binary search (bisect_right).",
        challenges: [
          "Non-uniform key distribution on small clusters.",
          "Minimizing rebalancing overhead when adding nodes dynamically."
        ],
        solution: "Implemented 100 virtual node replicas per physical server, yielding a standard deviation of key distribution under 5%.",
        impact: "Guarantees that only K/N keys are reshuffled during node scale events instead of the entire cluster."
      }
    },
    {
      id: "distributed-rate-limiter",
      title: "Distributed Rate Limiter Service",
      category: "Backend & Systems",
      tagline: "Dual-algorithm rate limiting with Token Bucket and Sliding Window Log",
      tech: ["Python", "Token Bucket", "Sliding Window", "Concurrency", "REST"],
      github: "https://github.com/divyasreebestha06/distributed-rate-limiter-service",
      featured: false,
      badge: "High Throughput",
      description: "High-performance API rate limiter featuring dual algorithmic implementations: Token Bucket for smooth burst capacity and Sliding Window Log for zero-boundary time accuracy with per-client IP isolation.",
      caseStudy: {
        problem: "Unprotected public APIs are vulnerable to volumetric DDoS attacks, resource starvation, and abusive traffic spikes.",
        architecture: "In-memory thread-safe rate limiter managing independent client buckets. Token Bucket dynamically replenishes based on elapsed clock time without background thread polling.",
        challenges: [
          "Boundary race conditions where bursts at the end of window 1 and start of window 2 double allowed throughput.",
          "Thread contention under concurrent requests."
        ],
        solution: "Engineered Sliding Window Log with atomic mutex locks, accurately measuring sliding sub-second timestamps.",
        impact: "Protects backend microservices from cascading degradation with sub-millisecond evaluation overhead."
      }
    },
    {
      id: "custom-inmemory-cache",
      title: "Custom O(1) LRU Cache Engine",
      category: "Backend & Systems",
      tagline: "High-throughput O(1) LRU cache with TTL expiration and thread safety",
      tech: ["Python", "Doubly-Linked List", "Hash Map", "Mutex Locks", "Data Structures"],
      github: "https://github.com/divyasreebestha06/custom-inmemory-cache-engine",
      featured: false,
      badge: "Data Structures",
      description: "An ultra-fast in-memory cache combining a hash map with a doubly-linked list to achieve guaranteed O(1) reads, updates, and evictions, supplemented with timestamped TTL automatic expiration.",
      caseStudy: {
        problem: "High-frequency database reads for static configuration and session data introduce substantial latency penalties.",
        architecture: "Composite data structure: Hash map pointers directly referencing nodes inside a doubly-linked list with sentinel head and tail nodes, protected by Python threading locks.",
        challenges: [
          "Maintaining strictly O(1) node relocation on cache hits without table scanning.",
          "Expiring stale keys without background thread thrashing."
        ],
        solution: "Implemented inline node unlinking and head-insertion alongside lazy TTL evaluation during cache access.",
        impact: "Delivers sub-microsecond cache access with deterministic memory footprint bounds."
      }
    },
    {
      id: "fullstack-kanban-board",
      title: "Full-Stack Agile Kanban Board",
      category: "Full-Stack",
      tagline: "Interactive sprint board with React frontend, FastAPI backend, and drag-and-drop",
      tech: ["React 18", "FastAPI", "Python", "SQLite", "REST APIs"],
      github: "https://github.com/divyasreebestha06/fullstack-kanban-board",
      featured: false,
      badge: "Full-Stack Agile",
      description: "A collaborative Agile sprint management application featuring a reactive React UI, three-stage Kanban columns (To Do, In Progress, Done), atomic card transitions, and FastAPI backend persistence.",
      caseStudy: {
        problem: "Software teams need visual, low-latency task tracking tools that maintain atomic state integrity across concurrent updates.",
        architecture: "Separated frontend/backend: React component managing local column state with optimistic UI updates backed by RESTful FastAPI endpoints writing to SQLite.",
        challenges: [
          "Preventing invalid status transitions and maintaining task order integrity."
        ],
        solution: "Modeled state machine validation at both API and database layers with comprehensive unit tests.",
        impact: "Clean, responsive project management interface ready for team sprint workflows."
      }
    }
  ],

  achievements: [
    {
      title: "250+ LeetCode Problems Solved",
      icon: "Code",
      metric: "250+ Solved",
      desc: "Proven track record in Data Structures & Algorithms across Arrays, Trees, Dynamic Programming, Graphs, and Heaps. Verified 143-day coding streak repository on GitHub.",
      badge: "5 LeetCode Badges"
    },
    {
      title: "CodeChef 3★ Programmer",
      icon: "Award",
      metric: "3-Star Rating",
      desc: "Ranked competitive programmer under handle 'quiet_wave_99', participating in algorithmic division contests and rapid problem-solving rounds.",
      badge: "Division Competitor"
    },
    {
      title: "TCS CodeVita Season 13 Round 2",
      icon: "Trophy",
      metric: "Round 2 Qualified",
      desc: "Successfully competed and qualified for Round 2 of the world's largest competitive coding contest organized by Tata Consultancy Services.",
      badge: "National Qualification"
    },
    {
      title: "1st Prize — Poster Presentation",
      icon: "Star",
      metric: "1st Prize",
      desc: "Won first prize at PVKK Institute of Technology for an innovative technical poster presentation on AI and machine learning architectures.",
      badge: "Technical Innovation"
    }
  ],

  certifications: [
    {
      name: "ServiceNow Certified System Administrator (CSA)",
      issuer: "ServiceNow",
      year: "2024 / 2025",
      id: "CSA Verified",
      skills: ["ITSM", "Business Rules", "Client Scripts", "Service Catalog", "Platform Configuration", "Update Sets"]
    },
    {
      name: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Amazon Web Services (AWS)",
      year: "2024 / 2025",
      id: "CLF-C02",
      skills: ["Cloud Architecture", "AWS S3", "IAM", "EC2", "Cloud Security", "Cost Optimization"]
    },
    {
      name: "100 Days of Code: Complete Python Pro",
      issuer: "Udemy (Dr. Angela Yu)",
      year: "2026",
      id: "Python Pro",
      skills: ["Python OOP", "Pandas", "Flask/Django", "Web Scraping", "REST APIs", "Automation"]
    }
  ],

  internships: [
    {
      role: "Gen AI Virtual Intern",
      organization: "AICTE-EduSkills (AWS Academy)",
      period: "Apr 2026 – Jun 2026",
      grade: "Grade: Outstanding",
      desc: "8-week intensive program covering AWS Cloud architecture, foundational generative AI models, vector embeddings, and cloud-native application deployments. Awarded top performance grade by Ministry of Education / AICTE."
    },
    {
      role: "Prompt Engineering for AI Intern",
      organization: "EduSkills Academy",
      period: "2026",
      grade: "Capstone Completed",
      desc: "Hands-on engineering curriculum applying OpenAI API and Hugging Face Transformers. Designed structured prompt pipelines for text synthesis, conversational agents, and built an end-to-end AI content generation platform."
    }
  ]
};
