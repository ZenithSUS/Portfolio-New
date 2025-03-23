export function ProjectCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-around gap-5 bg-slate-800 p-5 rounded-2xl h-full w-96">
      {children}
    </div>
  );
}

export function ProjectWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex p-2 gap-7 w-full flex-wrap overflow-x-scroll scrollbar-default scroll-smooth scrollbar-hide hover:scrollbar-default">
      {children}
    </div>
  );
}

export function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-40 object-fit rounded hover:scale-105"
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
