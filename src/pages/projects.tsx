import { Project } from "../libs/types";
import {
  ProjectCard,
  ProjectWrapper,
  ProjectTitle,
  ProjectImage,
  ProjectBox,
} from "../components/project";
import CMS from "../assets/CMS.png";
import GreekMyth from "../assets/GreekMyth.png";
import CtrlAltLearn from "../assets/cal.png";

export default function Projects() {
  const projects: Project[] = [
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
  ];
  return (
    <main className="flex flex-col gap-5 animate-fade-in h-fit">
      <div className="flex flex-wrap gap-3 max-h-screen overflow-y-scroll">
        <h1 className="text-2xl font-bold text-blue-400">Featured Projects</h1>
        <ProjectWrapper>
          <ProjectBox>
            {projects.map((project: Project) => (
              <ProjectCard key={project.title}>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectTitle>{project.title}</ProjectTitle>
                <p>{project.description}</p>
                <div className="flex flex-col gap-2 justify-end">
                  <h2 className="font-bold text-blue-400">Techologies Used</h2>
                  <div className="flex gap-5">
                    {project.tech.map((tech: string) => (
                      <div
                        className="p-2 bg-slate-950 rounded-2xl hover:bg-slate-900 transition-ease-in-out duration-300 cursor-pointer"
                        key={tech}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                  <a
                    className="p-2 bg-blue-500 rounded-2xl hover:bg-blue-400 transition-ease-in-out duration-300 cursor-pointer w-fit"
                    href={project.href}
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>
              </ProjectCard>
            ))}
          </ProjectBox>
        </ProjectWrapper>
        <h1 className="text-2xl font-bold text-blue-400">Small Projects</h1>
        <ProjectWrapper>
          <ProjectBox>
            {projects.map((project: Project) => (
              <ProjectCard key={project.title}>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectTitle>{project.title}</ProjectTitle>
                <p>{project.description}</p>
                <div className="flex flex-col gap-2 justify-end">
                  <h2 className="font-bold text-blue-400">Techologies Used</h2>
                  <div className="flex gap-5">
                    {project.tech.map((tech: string) => (
                      <div
                        className="p-2 bg-slate-950 rounded-2xl hover:bg-slate-900 transition-ease-in-out duration-300 cursor-pointer"
                        key={tech}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                  <a
                    className="p-2 bg-blue-500 rounded-2xl hover:bg-blue-400 transition-ease-in-out duration-300 cursor-pointer w-fit"
                    href={project.href}
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>
              </ProjectCard>
            ))}
          </ProjectBox>
        </ProjectWrapper>
      </div>
    </main>
  );
}
