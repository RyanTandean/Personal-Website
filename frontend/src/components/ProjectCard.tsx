import { useRef } from "react";
import type { Project } from "../types/project";

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;
    
    cardRef.current.style.setProperty("--mouse-x", `${xPct}%`);
    cardRef.current.style.setProperty("--mouse-y", `${yPct}%`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col h-[450px] rounded-3xl bg-[#0a101f]/60 border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#06d4b3]/40 hover:shadow-[0_0_40px_-10px_rgba(6,212,179,0.2)] isolate cursor-pointer active:scale-[0.98]"
    >
      {/* 1. IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-30 grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent z-[1]" />
      </div>

      {/* 2. THE "GLINT" */}
      <div 
        className="pointer-events-none absolute inset-0 z-[2] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.12) 0%, transparent 50%)`
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 p-8 flex flex-col h-full">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] tracking-[0.3em] text-[#06d4b3] font-bold uppercase opacity-80">
              {project.year}
            </span>
            {project.isHackathon && (
              <span className="text-[9px] text-white/30 uppercase tracking-widest italic font-medium">
                {project.hackathonName || "Hackathon Entry"}
              </span>
            )}
          </div>
          {project.featured && (
            <span className="px-2 py-0.5 rounded-full border border-emerald-500/50 bg-emerald-500/10 text-[9px] text-emerald-400 font-bold uppercase tracking-tight shadow-[0_0_10px_rgba(16,185,129,0.2)]">
              Featured
            </span>
          )}
        </div>

        <h3 className="mt-6 text-2xl font-bold text-white tracking-tight group-hover:text-[#06d4b3] transition-colors duration-300">
          {project.title}
        </h3>

        <p className="mt-3 text-gray-400/90 font-light leading-relaxed text-sm line-clamp-3">
          {project.description}
        </p>

        {/* REFINED LINKS: We stop propagation so clicking these doesn't trigger the card's page-swap */}
        <div className="mt-6 flex gap-6">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="z-20 text-[11px] font-bold text-white/40 hover:text-white transition-colors flex items-center gap-2 uppercase tracking-tighter"
            >
              View Code <span className="text-[#06d4b3]">→</span>
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="z-20 text-[11px] font-bold text-white/40 hover:text-white transition-colors flex items-center gap-2 uppercase tracking-tighter"
            >
              Live Demo <span className="text-[#06d4b3]">↗</span>
            </a>
          )}
        </div>

        {/* TECH STACK */}
        <div className="mt-auto pt-6 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[9px] font-semibold bg-white/[0.03] border border-white/5 rounded text-white/40 group-hover:text-white/60 group-hover:border-white/20 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}