import { Project } from "../libs/types";
import CMS from "../assets/projects/cms.png";
import GreekMyth from "../assets/projects/greekmyth.png";
import CtrlAltLearn from "../assets/projects/cal.png";
import CyberGhost from "../assets/projects/cyberghost.png";
import GreekMythApi from "../assets/projects/greekmythApi.png";
import NoteTakingApp from "../assets/projects/noteTaking.jpg";
import TodoApp from "../assets/projects/todoApp.png";
import ProdSystem from "../assets/projects/prodSystem.jpg";
import Monitoring from "../assets/projects/monitoring.png";

export const projects: Project[] = [
  {
    title: "Compliance Monitoring System",
    description:
      "A secure system for monitoring and managing compliance policies. It ensures data privacy, supports tracking, and integrates third-party authentication, for a seamless experience.",
    tech: ["React", "Tailwind", "Node.js", "Express.js", "Appwrite"],
    image: Monitoring,
    href: "https://github.com/ZenithSUS/monitoring-system-admin",
  },
  {
    title: "Content Management System",
    description:
      "A secure system for managing user registration, authentication, profiles, and role-based access. It ensures data privacy, supports profile customization, and integrates third-party authentication for a seamless experience.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: CMS,
    href: "https://greekmythcms.infinityfreeapp.com/",
  },
  {
    title: "GreekMyth",
    description:
      "GreekMyth is an interactive platform designed for mythology enthusiasts to explore their creativity by crafting and sharing their own Greek mythology-inspired stories.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: GreekMyth,
    href: "https://zenithsus.infinityfreeapp.com/",
  },
  {
    title: "Ctrl+Alt+Learn",
    description:
      "Ctrl+Alt+Learn is about tackling web development, where students can learn web development by playing this game. They can earn rewards, achievements, and participate in PvP (speedrun) to duel against other students.",
    tech: ["Next.js", "Tailwind", "Prisma", "MySQL"],
    image: CtrlAltLearn,
    href: "https://calgame.vercel.app/",
  },
  {
    title: "GreekMyth API",
    description:
      "GreekMyth API is a RESTful API that allows users to create, read, update, and delete Greek mythology-inspired stories.",
    tech: ["PHP", "MySQL"],
    image: GreekMythApi,
    href: "https://github.com/ZenithSUS/GreekMythApi",
  },
];

export const smallProjects: Project[] = [
  {
    title: "CyberGhost",
    description:
      "CyberGhost is a simple website that encrypts your text using a RSA and OTP algorithm.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: CyberGhost,
    href: "https://zenithsus.github.io/finalProject_ITEC111/",
  },
  {
    title: "Note Taking App",
    description:
      "Note taking app is a simple website that performs CRUD operations.",
    tech: ["React", "Tailwind", "PHP", "MySQL"],
    image: NoteTakingApp,
    href: "https://github.com/ZenithSUS/note-taking-app",
  },
  {
    title: "Product Managment System",
    description: "A small project that manages products using REST API calls.",
    tech: ["React", "Tailwind", "PHP", "MySQL"],
    image: ProdSystem,
    href: "https://github.com/ZenithSUS/product-management-system",
  },
  {
    title: "Todo List",
    description:
      "A small project that allows users to create, read, update, and delete tasks using firebase as a database.",
    tech: ["React", "Tailwind", "Firebase"],
    image: TodoApp,
    href: "https://github.com/ZenithSUS/todo-firebase",
  },
];
