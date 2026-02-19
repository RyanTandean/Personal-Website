import React from 'react';

interface KeycapProps {
  children: React.ReactNode;
  link: string;
  label: string;
}

export default function Keycap({ children, link, label }: KeycapProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-16 h-16"
        style={{ perspective: '400px' }}
      >
        {/* THE SINGLE PARENT BODY: Handles 3D, Walls, and Shadow */}
        <div 
          className="absolute inset-0 rounded-[1.25rem] bg-gradient-to-b from-[#1a1d23] to-[#0a0c10]
            transition-all duration-150 cubic-bezier(0.23, 1, 0.32, 1)
            [transform:rotateX(15deg)] [transform-origin:bottom]
            
            /* STATIC STATE */
            shadow-[0_14px_0_0_#0a0c10,0_20px_30px_rgba(0,0,0,0.5)]

            /* HOVER STATE (Half-press) */
            group-hover:[transform:rotateX(12deg)_translateY(4px)]
            group-hover:shadow-[0_10px_0_0_#0a0c10,0_15px_20px_rgba(0,0,0,0.4)]
            
            /* ACTIVE STATE (Full-press) */
            group-active:[transform:rotateX(8deg)_translateY(10px)]
            group-active:shadow-[0_4px_0_0_#0a0c10,0_8px_10px_rgba(0,0,0,0.3)]"
        >
          {/* THE TOP FACE: Handles the Scoop and Lighting */}
          <div className="absolute inset-[4px] rounded-[0.9rem] overflow-hidden
            bg-[#1e232a] border-t-[1.5px] border-white/20 
            flex items-center justify-center"
          >
            {/* 1. Deep Center Shadow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8)_0%,transparent_85%)]" />
            
            {/* 2. Rear Wall Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
            {/* The "Water Surface" reflection */}
            <div className="absolute inset-0 opacity-20 pointer-events-none 
              bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] 
              bg-[length:250%_250%] animate-[shimmer_5s_infinite_linear]" 
            />
            {/* 3. Legend (Icon) */}
            <div className="relative z-10 [transform:rotateX(-15deg)] 
              text-white/40 group-hover:text-white group-hover:scale-95 
              transition-all duration-150">
              {children}
            </div>
          </div>
        </div>
      </a>
      
    </div>
  );
}