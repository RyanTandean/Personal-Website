import { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Experience from "./components/sections/Experiences";
import { myExperiences } from "./data/experience";
import Projects from "./components/sections/Projects";
import { myProjects } from "./data/project";
import HeroSection from "./components/HeroSection";
import BackgroundAbyss from "./components/BackgroundAbyss";
import GradualBlur from "./components/GradualBlur";
import ProjectDetail from "./components/sections/ProjectDetail";

export default function App() {
  const [isMounted, setIsMounted] = useState(false);
  const [activePage, setActivePage] = useState("home");
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navigateTo = useCallback((page: string) => {
    // Use 'instant' for SPA transitions to prevent the 'scroll-up'
    // animation from fighting with the new page load
    window.scrollTo({ top: 0, behavior: "instant" });
    setActivePage(page);
  }, []);

  return (
    <main
      className={`relative min-h-screen text-white bg-black transition-opacity duration-1000 ease-in ${
        isMounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 1. PERSISTENT BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundAbyss />
      </div>

      {/* 2. DYNAMIC CONTENT LAYER */}
      <div className="relative z-30 w-full flex flex-col">
        {activePage === "home" ? (
          <div className="animate-in fade-in duration-1000">
            <HeroSection />
            <Experience items={myExperiences} />
            <Projects
              items={myProjects}
              onProjectClick={(id) => navigateTo(id)}
            />
          </div>
        ) : (
          <div className="animate-in slide-in-from-bottom-8 fade-in duration-700 ease-out">
            <ProjectDetail
              projectId={activePage}
              onBack={() => navigateTo("home")}
            />
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

      <Navbar onHomeClick={() => navigateTo("home")} />
    </main>
  );
}
