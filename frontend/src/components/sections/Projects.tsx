// src/components/sections/Projects.tsx
import ProjectCard from "../ProjectCard";
import type { Project } from "../../types/project";

interface ProjectsProps {
  items: Project[];
  onProjectClick: (projectId: string) => void; // Added this
}

export default function Projects({ items, onProjectClick }: ProjectsProps) {
  const featuredProjects = items.filter(p => p.featured);

  return (
    <section className="relative w-full flex flex-col items-center py-32 pb-64">
      <div className="w-full max-w-5xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 tracking-wide text-white text-center [text-shadow:0_0_8px_rgba(56,189,248,0.55)]">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              onClick={() => onProjectClick(project.title)} // Trigger navigation
              className="animate-fadein-slideup cursor-pointer active:scale-[0.98] transition-transform" 
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