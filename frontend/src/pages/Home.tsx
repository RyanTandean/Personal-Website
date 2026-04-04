import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Experience from "../components/sections/Experiences";
import { myExperiences } from "../data/experience";
import Projects from "../components/sections/Projects";
import { myProjects } from "../data/project";
import HeroSection from "../components/sections/HeroSection";
import BackgroundAbyss from "../components/BackgroundAbyss";
import Footer from "../components/Footer";
import { OG_IMAGE_URL, SITE_URL } from "../config/site";

export default function App() {
  return (
    <main
      id="main-content"
      className="relative min-h-screen text-white bg-black"
    >
      <Helmet>
        <title>Ryan Tandean</title>
        <meta
          name="description"
          content="Data science student and software developer. Projects, experience, and more."
        />
        <meta property="og:title" content="Ryan Tandean" />
        <meta
          property="og:description"
          content="Data science student and software developer. Projects, experience, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ryan Tandean" />
        <meta
          name="twitter:description"
          content="Data science student and software developer. Projects, experience, and more."
        />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
        <link rel="canonical" href={`${SITE_URL}/`} />
      </Helmet>
      {/* 1. PERSISTENT BACKGROUND LAYER (now participates in scroll) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundAbyss />
      </div>

      {/* 2. CONTENT */}
      <div className="relative z-30 w-full flex flex-col animate-in fade-in duration-1000">
        <HeroSection />
        <Experience items={myExperiences} />
        <Projects items={myProjects} />
      </div>

      <Navbar />
      <Footer />
    </main>
  );
}
