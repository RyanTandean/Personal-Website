import type { Project } from "../types/project";
import { useState } from "react";

export default function ProjectCard({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="group relative flex-col h-112.5 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md transition-all duration-200 hover:border-white/30 hover:shadow-[0_0_16px_4px_rgba(56,189,248,0.22),0_0_32px_8px_rgba(125,211,252,0.12)]">
      {/* Project Image with Underwater Mask */}
      <div className="absolute inset-0 z-0">
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 grayscale group-hover:grayscale-0 rounded-3xl"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-black/60">
            <span className="text-white/60 text-center text-xs px-2">
              {project.title}
            </span>
          </div>
        )}
        {/* Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent rounded-3xl" />
      </div>

      <div className="relative z-10 p-8 flex flex-col h-full">
        <div className="flex justify-between items-start">
          <span className="text-[10px] tracking-[0.3em] text-white/40 font-bold uppercase">
            {project.year}{" "}
            {project.isHackathon &&
              `// ${project.hackathonName || "Hackathon"}`}
          </span>
          {project.featured && (
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
          )}
        </div>

        <h3 className="mt-4 text-xl font-medium text-white [text-shadow:0_0_15px_rgba(255,255,255,0.2)]">
          {project.title}
        </h3>

        <p className="mt-4 text-gray-400 font-light leading-relaxed text-sm line-clamp-4">
          {project.description}
        </p>

        <div className="mt-auto pt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-[9px] uppercase tracking-widest bg-white/5 border border-white/10 rounded text-white/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="text-xs text-white/30 hover:text-white transition-colors uppercase tracking-widest"
            >
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="text-xs text-white/30 hover:text-white transition-colors uppercase tracking-widest"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
