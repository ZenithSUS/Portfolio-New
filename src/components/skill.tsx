import { Skill } from "../libs/types";
import { motion } from "motion/react";

export const SkillBox = ({ skills }: { skills: Skill[] }) => {
  return (
    <div className="grid grid-cols-4 items-center gap-2 p-2">
      {skills.map((skill: Skill) => (
        <motion.div
          key={skill.name}
          className="flex flex-col items-center gap-2 group cursor-pointer hover:bg-slate-900 hover:shadow-lg hover:shadow-blue-500 transition-ease-in-out duration-300 rounded-2xl p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={skill.image} alt={skill.name} className="w-14 h-14" />
          <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
            {skill.name}
          </p>
        </motion.div>
      ))}
    </div>
  );
};
