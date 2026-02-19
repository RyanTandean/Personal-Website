import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Keycap from "../Keycap";

export default function KeyboardSection() {
  return (
    <section className="flex flex-col items-center justify-center py-16">
      {/* Removed the 'case' styling. 
         The wrapper now only provides the 3D perspective context 
         and the tight spacing found on real PCBs.
      */}
      <div 
        className="flex gap-1.5 p-4" 
        style={{ perspective: '1200px' }}
      >
        <Keycap link="https://github.com" label="Github">
          <Github size={20} strokeWidth={2.5} />
        </Keycap>

        <Keycap link="https://linkedin.com" label="LinkedIn">
          <Linkedin size={20} strokeWidth={2.5} className="text-sky-400" />
        </Keycap>

        <Keycap link="mailto:your@email.com" label="Email">
          <Mail size={20} strokeWidth={2.5} className="text-emerald-400" />
        </Keycap>

        <Keycap link="/resume.pdf" label="Resume">
          <FileText size={20} strokeWidth={2.5} className="text-amber-400" />
        </Keycap>
      </div>
      
      {/* Subtle floor shadow to ground the keys since the case is gone */}
      <div className="mt-[-10px] h-2 w-48 bg-black/40 blur-xl rounded-full pointer-events-none" />
    </section>
  );
}