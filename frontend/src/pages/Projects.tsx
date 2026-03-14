import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import BackgroundAbyss from "../components/BackgroundAbyss";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Modal from "../components/Modal";
import ProjectDetail from "../components/sections/ProjectDetail";
import GradualBlur from "../components/GradualBlur";
import { myProjects } from "../data/project";
import Tag from "../components/Tag";
import Footer from "../components/Footer";
import type { TagName } from "../data/tagColors";

const SITE_URL = "https://ryantandean.dev";
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;
export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Derive selected project from URL `?modal=` param (URL is source-of-truth)
  const selectedProjectId = useMemo(() => {
    const modalId = searchParams.get("modal");
    if (!modalId) return null;
    const id = Number(modalId);
    if (!Number.isFinite(id)) return null;
    return myProjects.find((p) => p.id === id)?.id ?? null;
  }, [searchParams]);
  const [activeTags, setActiveTags] = useState<TagName[]>([]);

  const allTags = useMemo(
    () => Array.from(new Set(myProjects.flatMap((p) => p.technologies))),
    [],
  );
  // Deep-link: open modal from /projects?modal=id
  // URL-derived modal — no effect needed because `selectedProjectId` is computed

  // Sync browser history for modal deep-linking
  function openProject(id: number) {
    setSearchParams({ modal: id.toString() }, { replace: false });
  }

  function closeProject() {
    setSearchParams({}, { replace: false });
  }

  function toggleTag(tag: TagName) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  }

  const filtered =
    activeTags.length === 0
      ? myProjects
      : myProjects.filter((p) =>
          activeTags.every((t) => p.technologies.includes(t)),
        );

  return (
    <main
      id="main-content"
      className="relative min-h-screen text-white bg-black"
    >
      <Helmet>
        <title>Projects · Ryan Tandean</title>
        <meta
          name="description"
          content="A collection of Ryan Tandean's software and data science projects."
        />
        <meta property="og:title" content="Projects · Ryan Tandean" />
        <meta
          property="og:description"
          content="A collection of Ryan Tandean's software and data science projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/projects`} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects · Ryan Tandean" />
        <meta
          name="twitter:description"
          content="A collection of Ryan Tandean's software and data science projects."
        />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
        <link rel="canonical" href={`${SITE_URL}/projects`} />
      </Helmet>
      {/* Background (now participates in scroll) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundAbyss />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-40">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#06d4b3]/70 mb-3">
            Work
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white [text-shadow:0_0_20px_rgba(6,212,179,0.35),0_0_55px_rgba(6,212,179,0.12)]">
            Projects
          </h1>
          <p className="mt-3 text-white/40 text-lg font-light">
            A collection of work, side projects, and experiments.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveTags([])}
            aria-pressed={activeTags.length === 0}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
              activeTags.length === 0
                ? "bg-[#06d4b3] text-black border-[#06d4b3]"
                : "bg-white/5 border-white/10 text-white/60 hover:border-[#06d4b3]/50 hover:text-white"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <Tag
              key={tag}
              name={tag}
              onClick={() => toggleTag(tag)}
              active={activeTags.includes(tag)}
            />
          ))}
        </div>

        {/* Count when filtered */}
        {activeTags.length > 0 && (
          <p className="mb-6 text-sm text-white/40">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""} matching{" "}
            {activeTags.map((t, i) => (
              <span key={t}>
                {i > 0 && <span className="mx-1 text-white/20">+</span>}
                <span className="text-[#06d4b3]">{t}</span>
              </span>
            ))}
            <button
              onClick={() => setActiveTags([])}
              className="ml-3 text-white/30 hover:text-white transition-colors"
              aria-label="Clear filters"
            >
              ✕ clear
            </button>
          </p>
        )}

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-white/30 text-lg mt-20 text-center">
            No projects match that filter.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filtered.map((project) => (
              <div
                key={project.id}
                role="button"
                aria-haspopup="dialog"
                tabIndex={0}
                onClick={() => openProject(project.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openProject(project.id);
                  }
                }}
                className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06d4b3] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </div>

      <GradualBlur
        target="page"
        position="bottom"
        height="7rem"
        curve="bezier"
        exponential
        opacity={1}
        strength={2}
        divCount={5}
        zIndex={40}
      />

      {/* Modal */}
      <Modal
        isOpen={!!selectedProjectId}
        onClose={closeProject}
        ariaLabel={
          selectedProjectId
            ? myProjects.find((p) => p.id === selectedProjectId)?.title
            : undefined
        }
      >
        {selectedProjectId && (
          <ProjectDetail projectId={selectedProjectId} onBack={closeProject} />
        )}
      </Modal>

      <Navbar />
      <Footer />
    </main>
  );
}
