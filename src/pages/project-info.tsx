import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNav } from "../context/navprovider";
import { projects, smallProjects } from "../data/projects";
import { Project } from "../libs/types";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { FaRegWindowClose } from "react-icons/fa";

export default function ProjectInfo() {
  const { setName } = useNav();
  const [project, setProject] = useState<Project | null>(null);
  const { projectName } = useParams<{ projectName: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    setName("Project Info");
    if (projectName) {
      const allProjects = [...projects, ...smallProjects];
      const project = allProjects.find((p) => p.name === projectName);
      if (project) {
        setProject(project);
      } else {
        setProject(null);
      }
    }
  }, [projectName, projects, setName]);

  const handleClose = () => {
    navigate("/projects");
  };

  return (
    <div className="flex flex-col flex-grow gap-5 animate-fade-in overflow-y-auto scrollbar-default scroll-smooth">
      <motion.div
        className="absolute top-5 right-5 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClose}
      ></motion.div>
      {project ? (
        <div className="flex flex-col gap-3 p-5 rounded-2xl">
          <div className="flex justify-between items-center p-5 bg-slate-950 rounded-2xl border-l-4 border-blue-400">
            <h1 className="text-2xl font-bold text-blue-400">
              {project.title}
            </h1>
            <FaRegWindowClose
              className="text-red-400 hover:scale-105 cursor-pointer"
              onClick={handleClose}
            />
          </div>

          <div className="flex flex-col gap-2 p-5 bg-slate-950 rounded-2xl">
            <h2 className="font-bold text-blue-400">Project Overview</h2>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded"
            />
            <p className="p-5">{project.description}</p>
            <div className="flex flex-col gap-2 p-5">
              <h2 className="font-bold text-blue-400">Features</h2>
              <div className="grid grid-cols-4 gap-2">
                {project.features?.map((feature: string) => (
                  <div
                    className="p-2 flex justify-center items-center text-center h-15 bg-slate-800 rounded-2xl hover:bg-slate-900 transition-ease-in-out duration-300 cursor-pointer"
                    key={feature}
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <h2 className="font-bold text-blue-400">Technologies Used</h2>
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

              <h2 className="font-bold text-blue-400">Links</h2>

              <a
                className="p-2 bg-blue-500 rounded-2xl hover:bg-blue-400 transition-ease-in-out duration-300 cursor-pointer w-fit"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      ) : (
        <h1>Project not found</h1>
      )}
    </div>
  );
}
