import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Experience from "./components/sections/Experiences";
import { myExperiences } from "./data/experience";
import Projects from "./components/sections/Projects";
import { myProjects } from "./data/project";
import HeroSection from "./components/sections/HeroSection";
import BackgroundAbyss from "./components/BackgroundAbyss";
import GradualBlur from "./components/GradualBlur";

export default function App() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main
      className={`relative min-h-screen text-white bg-black transition-opacity duration-500 ease-out ${
        isMounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 1. PERSISTENT BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundAbyss />
      </div>

      {/* 2. CONTENT */}
      <div className="relative z-30 w-full flex flex-col animate-in fade-in duration-1000">
        <HeroSection />
        <Experience items={myExperiences} />
        <Projects items={myProjects} />
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

      <Navbar />
    </main>
  );
}
