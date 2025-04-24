import { Project } from "../libs/types";
import CMS from "../assets/projects/cms.webp";
import GreekMyth from "../assets/projects/greekmyth.webp";
import CtrlAltLearn from "../assets/projects/cal.webp";
import CyberGhost from "../assets/projects/cyberghost.webp";
import GreekMythApi from "../assets/projects/greekmythApi.webp";
import TodoApp from "../assets/projects/todoApp.webp";
import ProdSystem from "../assets/projects/prodSystem.webp";
import Monitoring from "../assets/projects/monitoring.webp";
import ZenithBooth from "../assets/projects/zenithbooth.webp";

export const projects: Project[] = [
  {
    title: "Zenith Booth",
    name: "zenithbooth",
    description:
      "Zenith Booth is a web application that allows users to take 3 quick pictures and share the picture to the website. It provides a user-friendly interface for booth creation, customization, and management.",
    tech: ["React", "Tailwind", "Appwrite"],
    features: [
      "Intuitive Booth Management",
      "Custom templates",
      "Voting System",
      "Account Dashboard",
      "Photo Sharing",
      "Secure Authentication",
    ],
    image: ZenithBooth,
    href: "https://zenithbooth.onrender.com",
  },
  {
    title: "Compliance Monitoring System",
    name: "monitoring-system",
    description:
      "A secure system for monitoring and managing compliance policies. It ensures data privacy, supports tracking, and integrates third-party authentication, for a seamless experience.",
    tech: ["React", "Tailwind", "Node.js", "Express.js", "Appwrite"],
    features: [
      "Compliance Dashboard",
      "Expiration Alerts",
      "Document Storage",
      "Analytics Reports",
      "Real-time Tracking",
      "Account Management",
      "Data Security",
    ],
    image: Monitoring,
    href: "https://github.com/ZenithSUS/monitoring-system-admin",
  },
  {
    title: "Content Management System",
    name: "cms",
    description:
      "A secure system for managing user registration, authentication, profiles, and role-based access. It ensures data privacy, supports profile customization, and integrates third-party authentication for a seamless experience.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Admin Dashboard",
      "User Registration",
      "UI Customization",
      "CRUD Operations",
      "User Authentication",
      "Profile Management",
      "Role-based Access Control",
      "Data Privacy",
    ],
    image: CMS,
    href: "https://greekmythcms.infinityfreeapp.com/",
  },
  {
    title: "GreekMyth",
    name: "greek-myth",
    features: [
      "User Registration and Authentication",
      "Content Creation",
      "Group Creation",
      "Friend and Voting System",
      "User Profiles",
      "Account Management",
      "Search Functionality",
      "Data Privacy",
    ],
    description:
      "GreekMyth is an interactive platform designed for mythology enthusiasts to explore their creativity by crafting and sharing their own Greek mythology-inspired stories.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: GreekMyth,
    href: "https://zenithsus.infinityfreeapp.com/",
  },
  {
    title: "Ctrl+Alt+Learn",
    name: "ctrl-alt-learn",
    description:
      "Ctrl+Alt+Learn is about tackling web development, where students can learn web development by playing this game. They can earn rewards, achievements, and participate in PvP (speedrun) to duel against other students.",
    tech: ["Next.js", "Tailwind", "Prisma", "MySQL"],
    features: [
      "User Registration and Authentication",
      "Gamification",
      "Leaderboard",
      "Achievements",
      "Rewards System",
      "PvP Speedrun",
      "Character Customization",
      "Progress Tracking",
    ],
    image: CtrlAltLearn,
    href: "https://calgame.vercel.app/",
  },
  {
    title: "GreekMyth API",
    name: "greek-myth-api",
    description:
      "GreekMyth API is a RESTful API that allows users to create, read, update, and delete Greek mythology-inspired stories.",
    tech: ["PHP", "MySQL"],
    features: [
      "API Endpoints",
      "CRUD Operations",
      "Data Privacy",
      "Role-based Access Control",
    ],
    image: GreekMythApi,
    href: "https://github.com/ZenithSUS/GreekMythApi",
  },
];

export const smallProjects: Project[] = [
  {
    title: "CyberGhost",
    name: "cyberghost",
    description:
      "CyberGhost is a simple website that encrypts your text using a RSA and OTP algorithm.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Text Encryption",
      "Text Decryption",
      "CRUD Operations",
      "User Authentication",
      "Secure Algorithm",
    ],
    image: CyberGhost,
    href: "https://zenithsus.github.io/finalProject_ITEC111/",
  },
  {
    title: "Product Managment System",
    name: "product-management-system",
    description: "A small project that manages products using REST API calls.",
    tech: ["React", "Tailwind", "PHP", "MySQL"],
    features: ["Product Management", "CRUD Operations", "User Authentication"],
    image: ProdSystem,
    href: "https://github.com/ZenithSUS/product-management-system",
  },
  {
    title: "Todo List",
    name: "todo-list",
    description:
      "A small project that allows users to create, read, update, and delete tasks using firebase as a database.",
    tech: ["React", "Tailwind", "Firebase"],
    features: [
      "Task Management",
      "CRUD Operations",
      "User Authentication",
      "Firebase Integration",
    ],
    image: TodoApp,
    href: "https://github.com/ZenithSUS/todo-firebase",
  },
];
