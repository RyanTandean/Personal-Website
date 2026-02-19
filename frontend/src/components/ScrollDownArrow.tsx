import { useEffect, useState } from "react";

export default function ScrollDownArrow() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY < 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-in-out
      ${isVisible ? "opacity-80 translate-y-0" : "opacity-0 translate-y-4"}
      animate-bounce`} 
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        className="drop-shadow-[0_0_8px_rgba(94,234,212,0.6)]"
        stroke="currentColor" // Uses parent text-white
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 10l6 6 6-6" />
      </svg>
    </div>
  );
}