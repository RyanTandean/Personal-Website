import React from "react";
import { tagMeta } from "../data/tagColors";

type Props = {
  name: string;
  className?: string;
  onClick?: () => void;
  active?: boolean;
};

export default function Tag({ name, className = "", onClick, active }: Props) {
  const meta = (tagMeta as Record<string, { classes: string; icon?: string }>)[
    name
  ];
  const base =
    "relative inline-flex items-center px-3 py-0.5 text-sm sm:text-base font-medium tracking-wider rounded-full z-30";
  const classes =
    `${base} ${meta?.classes || "bg-white/[0.05] border border-white/5 text-white/40"} ${className}`.trim();

  if (onClick) {
    return (
      <button
        onClick={onClick}
        aria-pressed={active}
        className={`${classes} cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06d4b3] focus-visible:ring-offset-1 focus-visible:ring-offset-black ${
          active
            ? "ring-2 ring-white/60 ring-offset-1 ring-offset-black brightness-125 opacity-100"
            : "opacity-60 hover:opacity-100"
        }`}
      >
        {name}
      </button>
    );
  }

  return (
    <span className={classes}>
      {name}
    </span>
  );
}
