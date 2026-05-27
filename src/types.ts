/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  githubUrl: string;
  category: 'Full-Stack' | 'Blockchain' | 'Backend' | 'Web App';
}

export interface WorkExperience {
  role: string;
  company: string;
  duration: string;
  highlights: string[];
}

export interface DiplomaticExperience {
  title: string;
  organizer: string;
  year: string;
  description: string;
  details: string[];
  images: {
    src: string;
    caption: string;
    aspectRatio: string;
  }[];
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[]; // Level out of 100
}

export const DARYL_PROFILE = {
  name: "Daryl Sango",
  title: "Full Stack Developer | IT Engineer",
  location: "Yaoundé, Cameroon",
  email: "dascorey2@gmail.com",
  phone: "+237 682 335 275",
  github: "https://github.com/darylmbeng",
  linkedin: "https://www.linkedin.com/in/daryl-sango-0a76b9304/",
  whatsapp: "https://wa.me/237682335275",
  summary: "Results-driven Full Stack Developer and IT Engineer with hands-on experience building secure, scalable web applications using Node.js, Express, MySQL, and modern front-end technologies. Strong problem-solver with experience delivering real-world projects, optimizing database schemas, implementing cryptographic authentication (JWT, Blockchain components, 2FA), and collaborating with cross-functional teams. Seeking remote, contract, or full-time roles.",
  education: {
    degree: "Professional Degree in IT & Computer Science",
    school: "University of Yaoundé I",
    duration: "2020 – 2025"
  },
  languages: [
    { name: "English", level: "Fluent" },
    { name: "French", level: "Fluent" }
  ]
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    role: "Full Stack Developer",
    company: "NgahTech Group",
    duration: "2024 – 2025",
    highlights: [
      "Developed secure, high-performance RESTful APIs using Node.js, Express, and MySQL.",
      "Optimized query runtimes and database indexes, accelerating search and transaction speeds.",
      "Maintained, debugged, and upgraded legacy modules with complete backward compatibility.",
      "Collaborated closely with front-end teams and product owners to release features on schedule."
    ]
  },
  {
    role: "Software Developer & Database Administrator",
    company: "Consultan ThinkSarl Ltd",
    duration: "2022 – 2024",
    highlights: [
      "Engineered an advanced real-estate web application solving Cameroon's accommodation and tenant validation challenges.",
      "Implemented state-of-the-art authentication mechanisms, incorporating blockchain-based verification components and multi-factor 2FA.",
      "Designed, partitioned, and optimized relational MySQL databases handling complex visual transaction logs.",
      "Successfully migrated deprecated systems to modern reactive single-page components, increasing user engagement and operational speeds."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "immochain",
    title: "ImmoChain",
    description: "A secure, decentralized real-estate solution designed specifically to address housing search and verification challenges in Cameroon. Features cryptographic ownership proofs, robust 2FA security, and relational database schema optimizations for fast rental lookup.",
    tech: [],
    link: "https://github.com/arthurcadren/ImmoChain",
    githubUrl: "https://github.com/arthurcadren/ImmoChain",
    category: "Blockchain"
  },
  {
    id: "rollclall",
    title: "RollClall Attendance Engine",
    description: "A highly responsive classroom roll call and meeting attendance tracking application built with a performance-first architecture. Eliminates coordinate fraud, logs real-time entries, and provides instructors with clean statistical export sheets.",
    tech: [],
    link: "https://github.com/darylmbeng/rollclall/tree/master",
    githubUrl: "https://github.com/darylmbeng/rollclall/tree/master",
    category: "Web App"
  },
  {
    id: "agriscan",
    title: "AgriScan Cameroon",
    description: "A sleek, full-stack predictive dashboard tracking agricultural distribution networks inside Yaoundé and Douala food hubs, incorporating supply chain maps, real-time demand indices, and inventory levels.",
    tech: [],
    link: "https://github.com/darylmbeng",
    githubUrl: "https://github.com/darylmbeng",
    category: "Full-Stack"
  },
  {
    id: "cameroun-agri",
    title: "AgriTrack Cameroon Portal",
    description: "A modern full-stack web application linking crop distribution points in Yaoundé and Duola. Empowers agricultural suppliers with real-time stock dashboards, inventory prediction metrics, and secure, lightweight transactions.",
    tech: [],
    link: "https://github.com/darylmbeng",
    githubUrl: "https://github.com/darylmbeng",
    category: "Full-Stack"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js & Express.js", level: 95 },
      { name: "RESTful API Engineering", level: 92 },
      { name: "JWT & Multi-Factor Auth (2FA)", level: 88 },
      { name: "Blockchain Verification Systems", level: 75 }
    ]
  },
  {
    name: "Frontend Development",
    skills: [
      { name: "React.js & Hooks", level: 90 },
      { name: "TypeScript & Esbuild", level: 85 },
      { name: "Tailwind CSS & Modern UI", level: 92 },
      { name: "Responsive & Accessible Design", level: 94 }
    ]
  },
  {
    name: "Database & Architecture",
    skills: [
      { name: "MySQL Schema Design", level: 90 },
      { name: "Database Query Optimization", level: 88 },
      { name: "Model-View-Controller (MVC)", level: 92 },
      { name: "Security & OWASP Best Practices", level: 85 }
    ]
  },
  {
    name: "Tools & Collaboration",
    skills: [
      { name: "Git & Version Control", level: 92 },
      { name: "Postman & API Mocking", level: 94 },
      { name: "Project Management Boards", level: 86 },
      { name: "Technical Peer Mentoring", level: 90 }
    ]
  }
];

export const DIPLOMATIC_EXPERIENCE: DiplomaticExperience = {
  title: "High Commissioner for a Day 2025",
  organizer: "United Kingdom High Commission in Cameroon",
  year: "2025",
  description: "An elite leadership and diplomatic selection organized by the British High Commission in Cameroon. Out of numerous outstanding applications, selected to shadowed the resident British High Commissioner in Yaoundé, demonstrating strong diplomatic skills, public advocacy, and technological leadership.",
  details: [
    "Participated in high-level briefing rounds and executive policy briefings focused on Cameroon-UK bilateral trade, digital education, and youth development opportunities.",
    "Delivered a presentation in front of national and foreign leaders on reducing digital divides and leveraging IT engineering initiatives to create local jobs.",
    "Engaged in leadership roundtable discussions with national diplomats, representatives of international organizations, and professional youth leaders in Yaoundé.",
    "Collaborated on designing policy recommendations on cyber safety and technological enablement for students in rural Cameroon."
  ],
  images: [
    {
      src: "/input_file_0.jpeg",
      caption: "Receiving the prestigious Certificate of Appreciation from the High Commission diplomats with international attendees.",
      aspectRatio: "3/4"
    },
    {
      src: "/input_file_1.jpeg",
      caption: "A historic group photograph with ministers, diplomats, senior leadership, and youth representatives on the embassy steps of the resident high commission in Yaoundé.",
      aspectRatio: "4/3"
    },
    {
      src: "/input_file_2.jpeg",
      caption: "Standing with follow representatives at the official flagposts representing youth empowerment in leadership roles.",
      aspectRatio: "4/3"
    }
  ]
};
