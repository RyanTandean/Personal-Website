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
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      // Only calculate depth if we are on the home page
      if (activePage !== "home") return;

      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      
      // We use a small threshold to avoid 'jitter' at the very top
      const scrolled = height > 0 ? winScroll / height : 0;
      setScrollDepth(scrolled);
    };

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activePage]);

  const navigateTo = useCallback((page: string) => {
    // Reset depth immediately to 0 so the new page starts 'bright'
    setScrollDepth(0);
    
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
        <BackgroundAbyss depth={scrollDepth} />
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
        height="10rem"
        strength={3}
        divCount={6}
        zIndex={40}
      />

      <Navbar onHomeClick={() => navigateTo("home")} />
    </main>
  );
}