// src/components/sections/Projects.tsx
import ProjectCard from "../ProjectCard";
import type { Project } from "../../types/project";

interface ProjectsProps {
  items: Project[];
}

export default function Projects({ items }: ProjectsProps) {
  // We filter for featured projects here to keep the main App logic simple
  const featuredProjects = items.filter(p => p.featured);

  return (
    <section className="relative w-full flex flex-col items-center py-32 pb-64">
      <div className="w-full max-w-5xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 tracking-wide text-white text-center [text-shadow:0_0_8px_rgba(56,189,248,0.55)]">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className="animate-fadein-slideup" 
              style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}