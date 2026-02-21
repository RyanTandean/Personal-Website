import { useRef, useState } from "react";
import type { Experience } from "../types/experience";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set the CSS variables so the background can track the mouse
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOverlayOpacity(1)}
      onMouseLeave={() => setOverlayOpacity(0)}
      className="relative z-30 isolate flex flex-col rounded-3xl bg-white/[0.03] backdrop-blur-xs border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20"
    >
      {/* THE SPOTLIGHT OVERLAY */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: overlayOpacity,
          background: `radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y), 
            rgba(6, 212, 179, 0.15), 
            transparent 40%
          )`,
        }}
      />

      {/* BORDER ILLUMINATION (Optional: Makes the border glow near the mouse) */}
      <div
        className="pointer-events-none absolute -inset-px z-10 rounded-3xl transition-opacity duration-500"
        style={{
          opacity: overlayOpacity,
          background: `radial-gradient(
            300px circle at var(--mouse-x) var(--mouse-y), 
            rgba(6, 212, 179, 0.4), 
            transparent 80%
          )`,
          WebkitMaskImage: `linear-gradient(black, black), linear-gradient(black, black)`,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      <div className="relative z-20 p-8 flex flex-col h-full">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white tracking-tight">
              {experience.company}
            </h3>
            <p className="text-[#06d4b3] text-sm font-medium">
              {experience.title}
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="block text-[10px] tracking-widest text-white/30 font-bold uppercase">
              {experience.location}
            </span>
            <span className="text-[10px] text-[#06d4b3]/50 font-bold">
              {experience.start} — {experience.end}
            </span>
          </div>
        </div>

        <p className="mt-6 z-30 text-gray-400 font-light leading-relaxed text-sm line-clamp-3">
          {experience.description}
        </p>

        <div className="mt-auto pt-8 flex flex-wrap gap-2">
          {experience.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="relative px-2.5 py-0.5 text-[10px] font-medium tracking-wider bg-white/[0.05] border border-white/5 rounded-full text-white/40 z-30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}