import React, { useRef, Suspense, lazy } from "react";
import type { Project } from "../types/project";
import Tag from "./Tag";

const ProjectImage = lazy(() => import("./ProjectImage"));

// Keep featured metadata for sorting/filtering, but hide the badge for now.
const SHOW_FEATURED_BADGE = false;

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const titleId = `project-title-${project.id}`;
  const descId = `project-desc-${project.id}`;
  const overlayDarkness = Math.min(
    0.9,
    Math.max(0, project.cardOverlayDarkness ?? 0.3),
  );
  const visibleTechnologies = project.technologies.slice(0, 5);
  const remainingTechnologies =
    project.technologies.length - visibleTechnologies.length;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;

    cardRef.current.style.setProperty("--mouse-x", `${xPct}%`);
    cardRef.current.style.setProperty("--mouse-y", `${yPct}%`);
  };

  const handleMouseLeave = () => {
    // Keep the last pointer position so the glint fades from where it was.
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="article"
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="glow-breathe card-lift-smooth group antialiased relative flex flex-col h-full min-h-64 sm:min-h-80 md:min-h-105 lg:min-h-125 rounded-3xl bg-[#0a101f]/60 border border-white/10 backdrop-blur-xl overflow-hidden hover:border-[#60a5fa]/35 hover:shadow-[0_0_40px_-10px_rgba(96,165,250,0.2)] isolate focus:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      {/* 1. IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <Suspense
          fallback={<div className="absolute inset-0 bg-[#020617] z-0" />}
        >
          <ProjectImage
            src={project.cardImage ?? project.image}
            alt={project.title}
          />
        </Suspense>
        <div
          className="absolute inset-0 z-1 bg-black"
          style={{ opacity: overlayDarkness }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-[#020617]/40 to-transparent z-1" />
      </div>

      {/* 2. THE "GLINT" */}
      <div
        className="pointer-events-none absolute inset-0 z-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
        style={{
          background: `
            radial-gradient(320px 220px at 0% 0%, rgba(96,165,250,0.08), transparent 74%),
            radial-gradient(320px 220px at 100% 100%, rgba(96,165,250,0.08), transparent 74%),
            radial-gradient(560px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.11) 0%, transparent 58%)
          `,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <span className="text-sm tracking-[0.3em] text-[#60a5fa] font-bold uppercase opacity-90">
              {project.year}
            </span>
            {project.isHackathon && (
              <span className="text-sm text-white/30 uppercase tracking-widest italic font-medium">
                {project.hackathonName || "Hackathon Entry"}
              </span>
            )}
          </div>
          {SHOW_FEATURED_BADGE && project.featured && (
            <span className="px-3 py-0.5 rounded-full border border-blue-400/50 bg-blue-400/10 text-sm text-blue-300 font-bold uppercase tracking-tight shadow-[0_0_10px_rgba(96,165,250,0.2)]">
              Featured
            </span>
          )}
        </div>

        <h3
          id={titleId}
          className="mt-6 text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-[#60a5fa] transition-colors duration-300"
        >
          {project.title}
        </h3>

        <p
          id={descId}
          className="mt-3 text-gray-300/90 font-light leading-relaxed text-base md:text-lg"
        >
          {project.description.summary}
        </p>

        {/* REFINED LINKS: We stop propagation so clicking these doesn't trigger the card's page-swap */}
        <div className="mt-6 flex gap-6">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="z-20 text-sm font-bold text-white/40 hover:text-white transition-colors flex items-center gap-2 uppercase tracking-tighter"
            >
              View Code{" "}
              <span className="text-[#60a5fa]" aria-hidden="true">
                →
              </span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="z-20 text-sm font-bold text-white/40 hover:text-white transition-colors flex items-center gap-2 uppercase tracking-tighter"
            >
              Live Demo{" "}
              <span className="text-[#60a5fa]" aria-hidden="true">
                ↗
              </span>
            </a>
          )}
        </div>

        {/* TECH STACK */}
        <div className="mt-auto pt-6 flex flex-wrap gap-1.5">
          {visibleTechnologies.map((tech) => (
            <Tag key={tech} name={tech} />
          ))}
          {remainingTechnologies > 0 && (
            <span className="relative inline-flex items-center px-3 py-0.5 text-sm sm:text-base font-medium tracking-wider rounded-full z-30 bg-white/5 border border-white/5 text-white/50">
              +{remainingTechnologies} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
