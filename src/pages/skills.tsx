import { useNav } from "../context/navprovider";
import { useEffect } from "react";
import { frontend, backend, database, tools } from "../data/skills";
import { SkillBox } from "../components/skill";

export default function Skills() {
  const { setName } = useNav();
  useEffect(() => {
    setName("Skills");
  }, [setName]);

  return (
    <main className="flex flex-col gap-5 animate-fade-in h-fit">
      <div className="bg-slate-950 p-5 rounded-2xl border-l-4 border-blue-400">
        My <span className="font-bold text-blue-400">technical expertise</span>{" "}
        span across the full spectrum of web development technologies, including
        frontend, backend, database, and tools.
      </div>

      <div className="overflow-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-5 items-start mb-5">
          <div className="flex flex-col gap-2 bg-slate-950 p-5 rounded-2xl">
            <h2 className="font-bold text-blue-400 text-xl">Frontend</h2>
            <SkillBox skills={frontend} />
          </div>
          <div className="flex flex-col gap-2 bg-slate-950 p-5 rounded-2xl">
            <h2 className="font-bold text-blue-400 text-xl">Backend</h2>
            <SkillBox skills={backend} />
          </div>
          <div className="flex flex-col gap-2 bg-slate-950 p-5 rounded-2xl">
            <h2 className="font-bold text-blue-400 text-xl">Database</h2>
            <SkillBox skills={database} />
          </div>
          <div className="flex flex-col gap-2 bg-slate-950 p-5 rounded-2xl">
            <h2 className="font-bold text-blue-400 text-xl">Tools</h2>
            <SkillBox skills={tools} />
          </div>
        </div>
      </div>
    </main>
  );
}
