import allProjects from './allProjects.json';

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
    bio: "Passionate Computer Science undergraduate specializing in Artificial Intelligence & Machine Learning at Srinivasa Ramanujan Institute of Technology. Experienced in architecting robust backend microservices, RESTful APIs, high-throughput distributed systems, and real-time algorithmic pipelines in Python, Django, FastAPI, Java, and React. With 370+ genuine GitHub commits across 34 repositories and 250+ LeetCode algorithmic solutions, I build clean, test-driven, customer-focused software."
  },

  stats: [
    { label: "Profile Commits", value: "370+", sub: "Across 34 repositories" },
    { label: "Total Projects", value: "34", sub: "100% Live on GitHub" },
    { label: "LeetCode Solved", value: "250+", sub: "143-Day verified streak" },
    { label: "Academic CGPA", value: "8.47", sub: "B.Tech CSE (AI & ML)" },
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

  projects: allProjects,

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
