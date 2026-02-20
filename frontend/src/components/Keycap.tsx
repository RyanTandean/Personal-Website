import React from "react";
import type { ReactNode } from "react";

interface KeycapProps {
  children: ReactNode;
  link: string;
  rotation?: number;
  yOffset?: number;
  xOffset?: number;
}

export default function Keycap({
  children,
  link,
  rotation = 0,
  yOffset = 0,
  xOffset = 0,
}: KeycapProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-16 h-18"
      style={{
        transform: `translate(${xOffset}px, ${yOffset}px) rotate(${rotation}deg)`,
      }}
    >
      <div className="absolute inset-0 transition-all duration-100 ease-out group-hover:translate-y-[2px] group-active:translate-y-[6px]">
        
        {/* FRONT WALL: Restored Original Deep Tones */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(14% 15%, 86% 15%, 100% 100%, 0% 100%)",
            background: "linear-gradient(to bottom, #202b36 0%, #0e1820 100%)",
          }}
        />

        {/* SIDE WALLS: Restored Original Deep Tones */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0% 25%, 14% 15%, 14% 100%, 0% 100%)",
            background: "linear-gradient(to bottom, #151e26, #0e1820)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(86% 15%, 100% 25%, 100% 100%, 86% 100%)",
            background: "linear-gradient(to bottom, #151e26, #0e1820)",
          }}
        />

        {/* SUBTLE BLOOM (Behind Face) */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 40%, #38bdf8 0%, transparent 60%)",
          }}
        />

        {/* TOP FACE: Restored Dark Radial Gradient */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(24% 15%, 76% 15%, 76% 78%, 24% 78%)",
            background: "radial-gradient(ellipse at 45% 35%, #34495a 0%, #22333f 50%, #18262f 100%)",
          }}
        >
          {/* Subtle Rim Highlight */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)",
            }}
          />

          {/* THE SCOOP */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_60%,rgba(0,0,0,0.4)_0%,transparent_100%)] pointer-events-none" />

          {/* LEGEND: White -> Subtle Blue Glow */}
          <div className="
            absolute inset-0 flex items-center justify-center 
            text-white/90 group-hover:text-[#a1dffa] 
            transition-all duration-300 pb-[22%] 
            drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]
            group-hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]
          ">
            {children}
          </div>
        </div>

        {/* AMBIENT SHADOW */}
        <div className="absolute -bottom-1 left-0 right-0 h-4 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.6)_0%,transparent_80%)] blur-md pointer-events-none transition-all" />
      </div>
    </a>
  );
}