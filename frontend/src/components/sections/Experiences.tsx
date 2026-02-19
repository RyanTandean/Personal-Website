// src/components/sections/Experiences.tsx
import ExperienceCard from "../ExperienceCard";
import type { Experience } from "../../types/experience"; // Assuming you have a type defined

interface ExperiencesProps {
  items: Experience[];
}

export default function Experiences({ items }: ExperiencesProps) {
  return (
    <section className="relative w-full flex flex-col items-center py-32">
      <div className="w-full max-w-5xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 tracking-wide text-white text-center [text-shadow:0_0_8px_rgba(56,189,248,0.55)]">
          Experience
        </h2>
        
        <div className="flex flex-col gap-12">
          {items.map((exp, idx) => (
            <div 
              key={exp.id} 
              className="animate-fadein-slideup" 
              style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
            >
              <ExperienceCard experience={exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}