import type { LucideIcon } from "lucide-react";

interface NavItemProps {
  label: string;
  path: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
  // Use forwardRef style if you want, but passing as a standard prop is simpler here
  setRef: (el: HTMLDivElement | null) => void; 
}

export function NavItem({ label, icon: Icon, isActive, onClick, setRef }: NavItemProps) {
  return (
    <div ref={setRef} className="group relative">
      <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white/10 border border-white/20 backdrop-blur-xl rounded-xl text-xs font-semibold text-white opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none shadow-xl">
        {label}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0a192f] border-r border-b border-white/20 rotate-45" />
      </div>

      <button
        onClick={onClick}
        /* ADDED: antialiased, transform-gpu, and backface-hidden to fix blur */
        className={`relative z-10 p-3.5 rounded-full transition-all duration-300 flex items-center justify-center transform-gpu backface-hidden
          ${isActive 
            ? "text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" 
            : "text-white/40 hover:text-white hover:scale-110 active:scale-95"
          }
        `}
      >
        <Icon 
          size={20} 
          strokeWidth={isActive ? 2.5 : 2} 
          /* Hint to the browser to keep this sharp */
          className="will-change-transform"
        />
      </button>
    </div>
  );
}