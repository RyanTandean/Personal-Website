import type { Project } from "../../types/project";
import { myProjects } from "../../data/project";
import ProjectSidebar from "../ProjectSidebar";

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

export default function ProjectDetail({
  projectId,
  onBack,
}: ProjectDetailProps) {
  const project =
    myProjects.find((p) => p.title === projectId) || myProjects[0];

  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
      {/* NAVIGATION / BACK BUTTON */}
      <button
        onClick={onBack}
        className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#06d4b3] transition-colors uppercase text-[10px] tracking-[0.2em] font-bold"
      >
        <span className="transition-transform group-hover:-translate-x-1">
          ←
        </span>
        Back to Abyss
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT COLUMN: Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* HERO IMAGE STAGE */}
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
          </div>

          {/* DESCRIPTION */}
          <section className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              {project.title}
            </h1>
            <div className="h-1 w-20 bg-[#06d4b3]" />
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              {project.description}
            </p>
          </section>
        </div>

        {/* RIGHT COLUMN: Sidebar Specs */}
        <div className="space-y-8">
          <ProjectSidebar project={project} />
        </div>
      </div>
    </div>
  );
}
