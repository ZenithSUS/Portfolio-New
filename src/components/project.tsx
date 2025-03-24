import { motion } from "motion/react";
export function ProjectCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <div className="flex flex-col justify-around gap-5 bg-slate-950 p-5 rounded-2xl h-full w-96">
        {children}
      </div>
    </motion.div>
  );
}

export function ProjectWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex p-2 gap-7 max-w-screen flex-wrap overflow-x-scroll overflow-y-hidden scrollbar-default scroll-smooth scrollbar-hide hover:scrollbar-default">
      {children}
    </div>
  );
}

export function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-30 object-cover rounded hover:scale-105"
    />
  );
}

export function ProjectTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold text-blue-400">{children}</h2>;
}

export function ProjectBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-6 w-full">{children}</div>
    </div>
  );
}
