// src/components/sections/Projects.tsx
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../ProjectCard";
import Modal from "../Modal";
import ProjectDetail from "./ProjectDetail";
// Reveal removed: use hover grow on project cards
import type { Project } from "../../types/project";

interface ProjectsProps {
  items: Project[];
}

export default function Projects({ items }: ProjectsProps) {
  const featuredProjects = items.filter((p) => p.featured);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const btnRef = useRef<HTMLAnchorElement | null>(null);
  const [btnOverlay, setBtnOverlay] = useState(0);

  const handleBtnMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty("--mouse-x", `${x}px`);
    btnRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      aria-label="Featured projects"
      className="relative w-full flex flex-col items-center py-32 pb-64"
    >
      <div className="w-full max-w-5xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-wide text-white [text-shadow:0_0_8px_rgba(56,189,248,0.55)]">
            Projects
          </h2>
          <Link
            ref={btnRef}
            to="/projects"
            onMouseMove={handleBtnMove}
            onMouseEnter={() => setBtnOverlay(1)}
            onMouseLeave={() => setBtnOverlay(0)}
            className="self-start sm:self-auto relative inline-flex items-center h-12 md:h-14 px-5 bg-white/[0.03] border border-white/10 rounded-full text-sm font-semibold text-white/80 hover:bg-white/[0.05] transition transform duration-300 motion-safe:hover:scale-105"
            aria-label="View all projects"
          >
            <span className="relative z-20">
              View all projects <span aria-hidden="true">→</span>
            </span>
            <div
              className="pointer-events-none absolute inset-0 z-10 rounded-full transition-opacity duration-300"
              style={{
                opacity: btnOverlay,
                background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(6,212,179,0.12), transparent 40%)`,
              }}
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              role="button"
              tabIndex={0}
              aria-label={`Open ${project.title} project details`}
              className="w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06d4b3] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-3xl"
              onClick={() => setSelectedProject(project.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project.id);
                }
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        >
          {selectedProject ? (
            <ProjectDetail
              projectId={selectedProject}
              onBack={() => setSelectedProject(null)}
            />
          ) : null}
        </Modal>
      </div>
    </section>
  );
}
