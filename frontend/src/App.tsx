import Navbar from "./components/Navbar";
import Experience from "./components/sections/Experiences";
import { myExperiences } from "./data/experience";
import Projects from "./components/sections/Projects";
import { myProjects } from "./data/project";
import HeroSection from "./components/HeroSection";
import BackgroundAbyss from "./components/BackgroundAbyss";
import GradualBlur from "./components/GradualBlur";

export default function App() {
  return (
    <main className="relative min-h-screen bg-[#020617] text-white">
      {/* Add this as the very first thing inside your background div */}

      <BackgroundAbyss />
      {/* CONTENT LAYER */}
      <div className="relative z-30 w-full">
        <HeroSection />
        <Experience items={myExperiences} />
        <Projects items={myProjects} />
      </div>
      <GradualBlur
        target="page"
        position="bottom"
        height="5rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential
        opacity={1}
        zIndex={40}
      />
      <Navbar />
    </main>
  );
}
