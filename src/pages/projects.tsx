import { useNav } from "../context/navprovider";
import { useEffect } from "react";
import { Project } from "../libs/types";
import { useNavigate } from "react-router-dom";
import {
  ProjectCard,
  ProjectWrapper,
  ProjectTitle,
  ProjectImage,
  ProjectBox,
} from "../components/project";
import { projects, smallProjects } from "../data/projects";

export default function Projects() {
  const { setName } = useNav();
  const navigate = useNavigate();

  useEffect(() => {
    setName("Projects");
  }, [setName]);

  const renderProject = (project: Project) => {
    return (
      <ProjectCard key={project.title}>
        <ProjectImage src={project.image} alt={project.title} />
        <ProjectTitle>{project.title}</ProjectTitle>
        <p>{project.description}</p>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-blue-400">Techologies Used</h2>
          <div className="grid grid-cols-3 items-center gap-2 text-center">
            {project.tech.map((tech: string) => (
              <div
                className="p-2 bg-slate-800 rounded-2xl hover:bg-slate-900 transition-ease-in-out duration-300 cursor-pointer"
                key={tech}
              >
                {tech}
              </div>
            ))}
          </div>

          <h2 className="font-bold text-blue-400">Sources</h2>
          <div className="flex gap-2 items-center">
            <a
              className="p-2 bg-blue-500 rounded-2xl hover:bg-blue-400 transition-ease-in-out duration-300 cursor-pointer w-fit"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
            <button
              className="p-2 bg-blue-500 rounded-2xl hover:bg-blue-400 transition-ease-in-out duration-300 cursor-pointer w-fit"
              onClick={() => navigate(`/project/${project.name}`)}
            >
              More Info
            </button>
          </div>
        </div>
      </ProjectCard>
    );
  };

  return (
    <main className="flex flex-col gap-5 animate-fade-in overflow-y-auto scrollbar-default scroll-smooth">
      <div className="flex flex-wrap gap-3 justify-center">
        <h1 className="text-2xl font-bold text-blue-400">Featured Projects</h1>
        <ProjectWrapper>
          <ProjectBox>
            {projects.map((project: Project) => renderProject(project))}
          </ProjectBox>
        </ProjectWrapper>
        <h1 className="text-2xl font-bold text-blue-400">Small Projects</h1>
        <ProjectWrapper>
          <ProjectBox>
            {smallProjects.map((project: Project) => renderProject(project))}
          </ProjectBox>
        </ProjectWrapper>
      </div>
    </main>
  );
}
