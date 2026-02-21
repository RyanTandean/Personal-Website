import type { Project } from "../../types/project";
import { myProjects } from "../../data/project";

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

export default function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const project = myProjects.find((p) => p.title === projectId) || myProjects[0];

  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
      {/* NAVIGATION / BACK BUTTON */}
      <button
        onClick={onBack}
        className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#06d4b3] transition-colors uppercase text-[10px] tracking-[0.2em] font-bold"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span>
        Back to Abyss
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* LEFT COLUMN: Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* HERO IMAGE STAGE */}
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-3xl group">
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
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-8">
            {/* LINKS */}
            <div className="flex flex-col gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} className="flex items-center justify-center py-3 rounded-xl bg-[#06d4b3] text-black font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all">
                  Launch Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} className="flex items-center justify-center py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                  View Source Code
                </a>
              )}
            </div>

            {/* METADATA */}
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-3">Timeline</h4>
                <p className="text-white/80 font-medium">{project.year}</p>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 text-[9px] bg-white/5 border border-white/10 rounded uppercase text-white/50 tracking-tighter">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.isHackathon && (
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-3">Event</h4>
                  <p className="text-cyan-400 font-medium italic">{project.hackathonName}</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}