import { myProjects } from "../../data/project";
import ProjectSidebar from "../ProjectSidebar";

interface ProjectDetailProps {
  projectId: number;
  onBack: () => void;
}

export default function ProjectDetail({
  projectId,
  onBack,
}: ProjectDetailProps) {
  const project = myProjects.find((p) => p.id === projectId) || myProjects[0];

  const renderTextBlocks = (text: string, className: string) => {
    return text
      .split(/\n\s*\n/g)
      .filter((block) => block.trim().length > 0)
      .map((block, i) => (
        <p key={i} className={className}>
          {block}
        </p>
      ));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sidebarContent = (
    <>
      {/* PROJECT SIDEBAR SPECS */}
      <ProjectSidebar project={project} />

      {/* TABLE OF CONTENTS */}
      {project.description.sections.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/50">
            On this page
          </h3>
          <nav className="space-y-1 max-h-[30vh] overflow-y-auto pr-2 pb-2 scrollbar-thin">
            {project.description.sections.map((section, idx) => (
              <div key={idx} className="space-y-1">
                {/* Main section heading */}
                <button
                  onClick={() => scrollToSection(`section-${idx}`)}
                  className="block w-full text-left text-sm text-gray-400/80 hover:text-[#60a5fa] transition-colors duration-200 font-light"
                >
                  {section.heading}
                </button>

                {/* Subsections (indented) */}
                {section.subsections && section.subsections.length > 0 && (
                  <div className="space-y-1 pl-3 border-l border-white/10">
                    {section.subsections.map((subsection, subIdx) => (
                      <button
                        key={subIdx}
                        onClick={() =>
                          scrollToSection(`section-${idx}-sub-${subIdx}`)
                        }
                        className="block w-full text-left text-xs text-gray-500/70 hover:text-[#60a5fa] transition-colors duration-200 font-light"
                      >
                        {subsection.heading}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );

  return (
    <div className="max-w-6xl mx-auto px-6 pt-8 sm:pt-12 pb-20">
      {/* NAVIGATION / BACK BUTTON */}
      <button
        onClick={onBack}
        className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#38bdf8] transition-colors uppercase text-[10px] tracking-[0.2em] font-bold"
      >
        <span className="transition-transform group-hover:-translate-x-1">
          ←
        </span>
        Return
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT COLUMN: Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* HERO IMAGE STAGE */}
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/2 group">
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />
            <img
              src={project.modalImage ?? project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
          </div>

          {/* DESCRIPTION */}
          <section className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              {project.title}
            </h1>
            <div className="h-1 w-20 bg-[#60a5fa]" />
            <div className="space-y-4">
              {renderTextBlocks(
                project.description.summary,
                "text-lg text-gray-400 font-light leading-relaxed whitespace-pre-line",
              )}
            </div>

            {/* MOBILE: show specs + TOC after hero/description */}
            <div className="lg:hidden space-y-8">{sidebarContent}</div>

            {/* SECTIONS */}
            <div className="space-y-10 pt-6">
              {project.description.sections.map((section, idx) => (
                <div
                  key={idx}
                  id={`section-${idx}`}
                  className="space-y-3 scroll-mt-20"
                >
                  <h2 className="text-2xl font-semibold text-white tracking-tight">
                    {section.heading}
                  </h2>

                  {/* Main body (optional) */}
                  {section.body && (
                    <div className="space-y-4">
                      {renderTextBlocks(
                        section.body,
                        "text-base text-gray-400 font-light leading-relaxed whitespace-pre-line",
                      )}
                    </div>
                  )}

                  {/* Subsections (optional) */}
                  {section.subsections && section.subsections.length > 0 && (
                    <div className="space-y-5 pt-3">
                      {section.subsections.map((subsection, subIdx) => (
                        <div
                          key={subIdx}
                          id={`section-${idx}-sub-${subIdx}`}
                          className="space-y-2 border-l border-white/10 pl-5"
                        >
                          <h3 className="text-lg font-medium text-white/90">
                            {subsection.heading}
                          </h3>
                          <div className="space-y-3">
                            {renderTextBlocks(
                              subsection.body,
                              "text-sm text-gray-400 font-light leading-relaxed whitespace-pre-line",
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: Sidebar (Specs + TOC) */}
        <div className="hidden lg:block space-y-8 lg:sticky lg:top-6 self-start">
          {sidebarContent}
        </div>
      </div>
    </div>
  );
}
