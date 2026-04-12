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

export function NavItem({
  label,
  icon: Icon,
  isActive,
  onClick,
  setRef,
}: NavItemProps) {
  return (
    <div ref={setRef} className="group relative">
      <div className="absolute z-40 -top-14 left-1/2 -translate-x-1/2 -translate-y-1 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-white/5 border border-white/10 backdrop-blur-2xl opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 pointer-events-none shadow-[0_12px_28px_rgba(0,0,0,0.45)]">
        {label}
      </div>

      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        aria-current={isActive ? "page" : undefined}
        className={`relative z-10 p-3.5 rounded-full transition-all duration-300 flex items-center justify-center transform-gpu backface-hidden
            ${
              isActive
                ? "text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                : "text-white/40 hover:text-white motion-safe:hover:-translate-y-1 active:translate-y-0"
            }
          `}
      >
        <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
      </button>
    </div>
  );
}
