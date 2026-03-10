// src/components/sections/Experiences.tsx
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ExperienceCard from "../ExperienceCard";
import type { Experience } from "../../types/experience";

interface ExperiencesProps {
  items: Experience[];
}

export default function Experiences({ items }: ExperiencesProps) {
  const btnRef = useRef<HTMLAnchorElement | null>(null);
  const [btnOverlay, setBtnOverlay] = useState(0);

  const handleBtnMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty("--mouse-x", `${x}px`);
    btnRef.current.style.setProperty("--mouse-y", `${y}px`);
  };
  return (
    <section
      aria-label="Work experience"
      className="relative w-full flex flex-col items-center py-32 z-30"
    >
      <div className="w-full max-w-5xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-white [text-shadow:0_0_8px_rgba(56,189,248,0.55)]">
            Experience
          </h2>
          <Link
            ref={btnRef}
            to="/experience"
            onMouseMove={handleBtnMove}
            onMouseEnter={() => setBtnOverlay(1)}
            onMouseLeave={() => setBtnOverlay(0)}
            className="self-start sm:self-auto relative inline-flex items-center h-12 md:h-14 px-5 bg-white/3 border border-white/10 rounded-full text-sm font-semibold text-white/80 hover:bg-white/5 transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out motion-safe:hover:-translate-y-0.5"
            aria-label="View all experiences"
          >
            <span className="relative z-20">
              View all experiences <span aria-hidden="true">→</span>
            </span>
            <div
              className="pointer-events-none absolute inset-0 z-10 rounded-full transition-opacity duration-300"
              style={{
                opacity: btnOverlay,
                background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(6,212,179,0.12), transparent 40%)`,
              }}
            />
            <div
              className="pointer-events-none absolute -inset-px z-10 rounded-full mix-blend-screen transition-opacity duration-300 ease-out"
              style={{
                opacity: btnOverlay,
                background: `radial-gradient(180px circle at var(--mouse-x) var(--mouse-y), rgba(6,212,179,0.45), transparent 78%)`,
              }}
            />
          </Link>
        </div>

        <div className="flex flex-col gap-8 sm:gap-12">
          {items.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
