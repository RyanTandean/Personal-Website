import { useLayoutEffect, useState, useRef } from "react";
import MotesLayer from "./components/MotesLayer";
import { useNavigate, useLocation } from "react-router-dom";
import { myExperiences } from "./data/experience";
import { myProjects } from "./data/project";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import ScrollDownArrow from "./components/ScrollDownArrow";

export default function App() {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
  ];
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    const idx = navItems.findIndex((item) => item.path === location.pathname);
    if (idx !== -1 && idx !== selected) setSelected(idx);
  }, [location.pathname]);

  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [selectorStyle, setSelectorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
    transition: "left 120ms cubic-bezier(.4,0,.2,1)",
  });

  useLayoutEffect(() => {
    const activeBtn = btnRefs.current[selected];
    if (activeBtn) {
      setSelectorStyle((style) => ({
        ...style,
        left: activeBtn.offsetLeft,
        width: activeBtn.offsetWidth,
        opacity: 1,
      }));
    }
  }, [selected]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <nav className="fixed top-8 right-10 z-50">
        <div
          className="relative flex items-center bg-black/60 border border-white/10 backdrop-blur-sm p-1 rounded-full shadow-[0_0_24px_6px_rgba(56,189,248,0.25)]"
          style={{
            boxShadow:
              "0 0 24px 6px rgba(56,189,248,0.25), 0 0 0 2px rgba(255,255,255,0.10)",
          }}
        >
          {/* Hardware Accelerated Selector */}
          <div
            className="absolute h-[calc(100%-8px)] bg-white/10 rounded-full transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)] will-change-[left,width]"
            style={{
              left: selectorStyle.left,
              width: selectorStyle.width,
              opacity: selectorStyle.opacity,
            }}
          />

          {navItems.map((item, idx) => (
            <button
              key={item.label}
              ref={(el) => {
                btnRefs.current[idx] = el;
              }}
              onClick={() => {
                setSelected(idx);
                navigate(item.path);
              }}
              className={`relative z-10 px-6 py-2 text-lg font-semibold transition duration-200
                ${
                  selected === idx
                    ? "opacity-100 text-white [text-shadow:0_0_8px_rgba(56,189,248,0.7),0_0_20px_rgba(56,189,248,0.45)]"
                    : "opacity-40 text-white/80 hover:opacity-100 hover:text-white hover:[text-shadow:0_0_8px_rgba(56,189,248,0.7),0_0_20px_rgba(56,189,248,0.45)]"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Water/Beams Animated Background */}
      <div className="beams-bg absolute inset-0 z-0" aria-hidden="true">
        <div className="surface-ripple" />
        <div className="beam beam-1" />
        <div className="beam beam-2" />
        <div className="beam beam-3" />
        <div className="beam beam-4" />
        <div className="beam-fog" />
        <div className="water-tint" />
        {/* Motes (memoized, fixed count) */}
        <MotesLayer count={24} />
        {/* Bottom Gradient Overlay (Transitions into the deep) */}
        <div
          className="absolute inset-x-0 bottom-0 h-[30vh]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, #020a12 80%, #000 100%)",
          }}
        />
      </div>

      {/* Global Blur/Glass Overlay */}
      <div className="absolute inset-0 backdrop-blur-[0.5px] bg-black/10 z-20" />

      {/* 2. SCROLLABLE CONTENT LAYER */}
      <div className="relative z-30 w-full overflow-y-auto">
        {/* Hero Section */}
        <section className="relative w-full flex flex-col justify-center pt-[36vh] pb-128 animate-fadein-slideup">
          <div className="w-full max-w-5xl px-4 flex flex-col items-start mx-auto">
            <h1 className="text-4xl md:text-6xl font-medium tracking-[0.12em] text-white text-left [text-shadow:0_0_32px_rgba(56,189,248,0.85),0_0_64px_rgba(56,189,248,0.55),0_0_8px_rgba(255,255,255,0.95),0_0_20px_rgba(255,255,255,0.65)]">
              Hi, I'm Ryan.
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-gray-300 font-light text-left">
              I am a Data Science student at the University of Waterloo.
            </p>
          </div>
          <ScrollDownArrow />
        </section>

        {/* Experience Section */}
        <section className="relative w-full flex flex-col items-center py-12">
          <div className="w-full max-w-5xl px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 tracking-wide text-white text-center [text-shadow:0_0_8px_rgba(56,189,248,0.55),0_0_20px_rgba(56,189,248,0.25)]">
              Experience
            </h2>
            <div className="flex flex-col gap-8 w-full">
              {myExperiences.map((exp, idx) => (
                <div
                  key={exp.id}
                  className="animate-fadein-slideup"
                  style={{
                    animationDelay: `${0.1 + idx * 0.08}s`,
                    animationFillMode: "both",
                  }}
                >
                  <ExperienceCard experience={exp} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="relative w-full flex flex-col items-center py-12">
          <div className="w-full max-w-5xl px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 tracking-wide text-white text-center [text-shadow:0_0_8px_rgba(56,189,248,0.55),0_0_20px_rgba(56,189,248,0.25)]">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {myProjects
                .filter((p) => p.featured)
                .slice(0, 3)
                .map((project, idx) => (
                  <div
                    key={project.id}
                    className="animate-fadein-slideup"
                    style={{
                      animationDelay: `${0.1 + idx * 0.08}s`,
                      animationFillMode: "both",
                    }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
