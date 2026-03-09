"use client";

import { useEffect, useState } from "react";

const FULL_TEXT = "available_for_work!";

export default function TerminalBadge() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    // Small initial delay so it doesn't fire before the page fade-in
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(FULL_TEXT.slice(0, i));
        if (i >= FULL_TEXT.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 60);
      return () => clearInterval(interval);
    }, 600);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 mb-6 font-mono text-sm text-sky-300/80 select-none">
      {/* Prompt */}
      <span className="text-sky-600/70">~/ryan $</span>

      {/* Typed text */}
      <span className="text-sky-300/90">{displayed}</span>

      {/* Blinking cursor — stays visible while typing, keeps blinking after */}
      <span
        className={`inline-block w-[7px] h-[14px] rounded-sm bg-sky-400 ${
          done ? "animate-[blink_1.1s_step-end_infinite]" : "opacity-100"
        }`}
        style={
          done
            ? {}
            : undefined
        }
      />
    </div>
  );
}