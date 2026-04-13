import { useId, useRef, useState } from "react";
import type { Experience } from "../types/experience";
import Tag from "./Tag";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [open, setOpen] = useState(false);
  const baseId = useId();
  const detailsId = `exp-details-${baseId}`;
  const titleId = `exp-title-${baseId}`;
  const descId = `exp-desc-${baseId}`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    setOverlayOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOverlayOpacity(0.3)}
      onMouseLeave={handleMouseLeave}
      role="article"
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="glow-breathe card-lift-smooth antialiased relative z-30 transform-gpu group flex flex-col rounded-3xl min-h-48 sm:min-h-56 md:min-h-64 overflow-hidden hover:shadow-[0_0_40px_-10px_rgba(96,165,250,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <div className="pointer-events-none absolute inset-0 z-0 rounded-3xl bg-white/2 backdrop-blur-sm will-change-[backdrop-filter] border border-white/10 transition-colors duration-300 group-hover:border-[#60a5fa]/35" />

      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 ease-out"
        style={{
          opacity: overlayOpacity,
          background: `
            radial-gradient(360px 250px at 0% 0%, rgba(96, 165, 250, 0.12), transparent 74%),
            radial-gradient(360px 250px at 100% 100%, rgba(96, 165, 250, 0.08), transparent 76%),
            radial-gradient(640px circle at var(--mouse-x) var(--mouse-y), rgba(96, 165, 250, 0.14), transparent 58%)
          `,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-3xl transition-opacity duration-300 ease-out"
        style={{
          opacity: overlayOpacity,
          background: `
            radial-gradient(420px circle at var(--mouse-x) var(--mouse-y), rgba(96, 165, 250, 0.22), transparent 78%),
            radial-gradient(240px 170px at 100% 0%, rgba(96, 165, 250, 0.12), transparent 82%),
            radial-gradient(240px 170px at 0% 100%, rgba(96, 165, 250, 0.11), transparent 84%)
          `,
        }}
      />

      <div className="relative z-30 p-4 sm:p-8 flex flex-col h-full">
        <div className="flex flex-col sm:flex-row flex-wrap items-start justify-between gap-2 sm:gap-4">
          <div className="flex items-start gap-4 min-w-0 flex-1">
            {experience.logo ? (
              <img
                src={experience.logo}
                alt={experience.logoAlt ?? `${experience.company} logo`}
                className="w-12 h-12 mt-0.5 rounded-md object-contain bg-white/5 p-1"
                loading="lazy"
              />
            ) : null}

            <div>
              <div className="flex items-start gap-2">
                <h3
                  id={titleId}
                  title={experience.company}
                  className="text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-tight leading-tight transition-colors duration-300 group-hover:text-[#60a5fa]"
                >
                  {experience.company}
                </h3>
              </div>
              <p className="text-[#60a5fa] text-sm sm:text-base md:text-lg font-medium">
                {experience.title}
              </p>
            </div>
          </div>
          <div className="text-left sm:text-right w-full sm:w-auto shrink-0 max-w-none sm:max-w-[45%]">
            <span className="block text-sm tracking-wider text-white/30 font-bold uppercase">
              {experience.location}
            </span>
            <span className="text-sm md:text-base text-[#60a5fa]/60 font-bold">
              {experience.start} — {experience.end}
            </span>
          </div>
        </div>
        <p
          id={descId}
          className={`mt-6 z-30 text-gray-300 font-light leading-relaxed text-base md:text-lg ${open ? "" : "line-clamp-3"}`}
        >
          {experience.description}
        </p>

        <div className="mt-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
            }}
            aria-expanded={open}
            aria-controls={detailsId}
            className="text-sm font-semibold text-white/70 hover:text-[#60a5fa] transition-colors duration-300"
          >
            {open ? "Show less" : "Read more"}
          </button>

          {open && (
            <div id={detailsId} className="mt-3">
              {experience.points?.length ? (
                <ul className="text-gray-300 text-sm space-y-2">
                  {experience.points.map((p, i) => (
                    <li key={i}>• {p}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          )}
        </div>

        <div className="mt-auto pt-8 flex flex-wrap gap-2">
          {experience.technologies.slice(0, 5).map((tech) => (
            <Tag key={tech} name={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
