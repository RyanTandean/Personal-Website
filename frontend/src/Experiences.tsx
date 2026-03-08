import { Helmet } from "react-helmet-async";
import BackgroundAbyss from "./components/BackgroundAbyss";
import Navbar from "./components/Navbar";
import ExperienceCard from "./components/ExperienceCard";
import GradualBlur from "./components/GradualBlur";
import { myExperiences } from "./data/experience";
import Footer from "./components/Footer";

export default function ExperiencesPage() {
  return (
    <main
      id="main-content"
      className="relative min-h-screen text-white bg-black"
    >
      <Helmet>
        <title>Experience · Ryan Tandean</title>
        <meta
          name="description"
          content="Ryan Tandean's work experience, internships, and career timeline."
        />
        <meta property="og:title" content="Experience · Ryan Tandean" />
        <meta
          property="og:description"
          content="Ryan Tandean's work experience, internships, and career timeline."
        />
      </Helmet>
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundAbyss />
      </div>

      {/* Content */}
      <div className="relative z-30 w-full max-w-4xl mx-auto px-6 pt-28 pb-40">
        {/* Page header */}
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#06d4b3]/70 mb-3">
            Career
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white [text-shadow:0_0_20px_rgba(6,212,179,0.35),0_0_55px_rgba(6,212,179,0.12)]">
            Experience
          </h1>
          <p className="mt-3 text-white/40 text-lg font-light">
            Where I&apos;ve worked and what I&apos;ve done.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-10">
          {myExperiences.map((exp) => (
            <div key={exp.id} className="relative flex items-start gap-8">
              {/* Dot column — holds dot + the line segment below it */}
              <div className="relative flex-shrink-0 flex flex-col items-center self-stretch w-3.5">
                {/* Spacer to push dot down to align with card header */}
                <div className="mt-7" />
                {/* Glow + dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-[#06d4b3]/30 blur-[5px] scale-150" />
                  <div className="relative w-3.5 h-3.5 rounded-full bg-[#06d4b3] ring-2 ring-black shadow-[0_0_10px_rgba(6,212,179,0.8)]" />
                </div>
                {/* Line segment — grows to fill space below dot */}
                <div
                  className="flex-1 w-px mt-3"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(6,212,179,0.4) 0%, rgba(255,255,255,0.06) 70%, transparent 100%)",
                  }}
                />
              </div>

              {/* Card */}
              <div className="flex-1 min-w-0">
                <ExperienceCard experience={exp} />
              </div>
            </div>
          ))}
        </div>
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
      <Footer />
    </main>
  );
}
