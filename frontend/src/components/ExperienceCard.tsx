import type { Experience } from "../types/experience";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  // Optionally, you can add an image property to Experience type and data for a background image
  // For now, fallback to a colored background if no image
  return (
    <div className="group relative flex-col rounded-4xl bg-black/40 border border-white/10 transition-all duration-200 hover:border-white/30 hover:shadow-[0_0_16px_4px_rgba(56,189,248,0.22),0_0_32px_8px_rgba(125,211,252,0.12)] rounded-b-4xl">
      {/* Background overlay (no image available for experience) */}
      <div className="absolute inset-0 z-0 bg-linear-to-t from-black via-black/80 to-transparent rounded-4xl" />

      <div className="relative z-10 p-8 flex flex-col h-full">
        <div className="flex items-center justify-between mt-2 mb-1 gap-2">
          <h3 className="text-xl font-medium text-white [text-shadow:0_0_15px_rgba(255,255,255,0.2)]">
            {experience.company}
          </h3>
          <span className="text-gray-300/80 font-medium tracking-wide text-base whitespace-nowrap text-right">
            {experience.title}
          </span>
        </div>
        <div className="flex items-center justify-between mb-1 gap-2">
          <span className="text-[10px] tracking-[0.3em] text-white/40 font-bold uppercase">
            {experience.start} — {experience.end}
          </span>
          <span className="text-[10px] tracking-[0.2em] text-gray-400/60 font-bold uppercase whitespace-nowrap text-right">
            {experience.location}
          </span>
        </div>

        <p className="mt-2 text-gray-400 font-light leading-relaxed text-sm line-clamp-4">
          {experience.description}
        </p>

        <div className="pt-6 flex flex-wrap gap-2">
          {experience.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-[9px] uppercase tracking-widest bg-white/5 border border-white/10 rounded text-white/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
