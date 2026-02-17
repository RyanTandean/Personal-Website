import { useEffect, useState } from "react";

export default function ScrollDownArrow() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      // Fade out as you scroll down, fade in at top
      const y = window.scrollY;
      let newOpacity = 1 - Math.min(y / 80, 1);
      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="absolute left-1/2 bottom-16 -translate-x-1/2 z-30 flex flex-col items-center transition-opacity duration-300 will-change-opacity"
      style={{ animation: "arrow-bounce 2.2s infinite", opacity }}
    >
      <style>{`
        @keyframes arrow-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-80"
      >
        <path d="M6 10l6 6 6-6" />
      </svg>
    </div>
  );
}
