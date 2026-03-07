import type { Project } from "../types/project";
import Tag from "./Tag";

interface ProjectSidebarProps {
  project: Project;
  showSourceCode?: boolean;
}

export default function ProjectSidebar({
  project,
  showSourceCode = true,
}: ProjectSidebarProps) {
  const hasLiveUrl = !!project.liveUrl;
  const hasGithubUrl = showSourceCode && !!project.githubUrl;
  const hasLinks = hasLiveUrl || hasGithubUrl;

  return (
    <div className="p-8 rounded-3xl bg-white/[0.05] border border-white/10 space-y-8">
      {/* LINKS — only rendered when at least one is available */}
      {hasLinks && (
        <div className="flex flex-col gap-4">
          {hasLiveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-3 rounded-xl bg-[#06d4b3] text-black font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all"
            >
              Launch Live Demo
            </a>
          )}
          {hasGithubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              View Source Code
            </a>
          )}
        </div>
      )}

      {/* METADATA */}
      <div className="space-y-6">
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-3">
            Timeline
          </h4>
          <p className="text-white/80 font-medium">{project.year}</p>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-3">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Tag key={tech} name={tech} />
            ))}
          </div>
        </div>

        {project.isHackathon && project.hackathonName && (
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-3">
              Event
            </h4>
            <p className="text-cyan-400 font-medium italic">
              {project.hackathonName}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
