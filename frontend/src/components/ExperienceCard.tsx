import { useRef, useState, useId } from "react";
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
  const detailsId = `exp-${useId()}`;
  const titleId = `exp-title-${useId()}`;
  const descId = `exp-desc-${useId()}`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set the CSS variables so the background can track the mouse
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    // Keep the last pointer position so the glow fades out in place.
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
      className="glow-breathe card-lift-smooth antialiased relative z-30 isolate group flex flex-col rounded-3xl min-h-48 sm:min-h-56 md:min-h-64 bg-white/2 backdrop-blur-xs border border-white/10 overflow-hidden hover:border-[#60a5fa]/35 hover:shadow-[0_0_40px_-10px_rgba(96,165,250,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      {/* THE SPOTLIGHT OVERLAY */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ease-out"
        style={{
          opacity: overlayOpacity,
          background: `
            radial-gradient(360px 250px at 0% 0%, rgba(96, 165, 250, 0.12), transparent 74%),
            radial-gradient(360px 250px at 100% 100%, rgba(96, 165, 250, 0.08), transparent 76%),
            radial-gradient(640px circle at var(--mouse-x) var(--mouse-y), rgba(96, 165, 250, 0.14), transparent 58%)
          `,
        }}
      />

      {/* Border-adjacent glow without mask-composite to avoid Firefox artifacts */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-3xl transition-opacity duration-300 ease-out"
        style={{
          opacity: overlayOpacity,
          background: `
            radial-gradient(420px circle at var(--mouse-x) var(--mouse-y), rgba(96, 165, 250, 0.22), transparent 78%),
            radial-gradient(240px 170px at 100% 0%, rgba(96, 165, 250, 0.12), transparent 82%),
            radial-gradient(240px 170px at 0% 100%, rgba(96, 165, 250, 0.11), transparent 84%)
          `,
        }}
      />

      <div className="relative z-20 p-6 sm:p-8 flex flex-col h-full">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0 flex-1">
            {experience.logo ? (
              <img
                src={experience.logo}
                alt={experience.logoAlt ?? `${experience.company} logo`}
                className="w-12 h-12 rounded-md object-contain bg-white/5 p-1"
                loading="lazy"
              />
            ) : null}

            <div>
              <h3
                id={titleId}
                className="text-xl md:text-2xl font-semibold text-white tracking-tight transition-colors duration-300 group-hover:text-[#60a5fa]"
              >
                {experience.company}
              </h3>
              <p className="text-[#60a5fa] text-base md:text-lg font-medium">
                {experience.title}
              </p>
            </div>
          </div>
          <div className="text-right shrink-0 max-w-[45%] sm:max-w-none">
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
            className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
          >
            {open ? "Show less" : "Read more"}
          </button>

          <div
            id={detailsId}
            aria-hidden={!open}
            className={`mt-3 overflow-hidden transition-[max-height,opacity] duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          >
            {experience.points?.length ? (
              <ul className="text-gray-300 text-sm space-y-2">
                {experience.points.map((p, i) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>
            ) : null}
          </div>
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
