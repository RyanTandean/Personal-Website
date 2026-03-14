import { useEffect, useState } from "react";

// Returns normalized scroll progress [0,1] and sets CSS vars used by CSS
export function useScrollParallax() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      document.documentElement.style.setProperty("--scroll", "0");
      document.documentElement.style.setProperty("--grad", "0");
      setProgress(0);
      return;
    }

    let ticking = false;

    const update = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const max = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const t = Math.min(1, Math.max(0, scrollY / max));
      // update CSS variables for CSS-driven pieces
      document.documentElement.style.setProperty("--scroll", String(t));
      const base = 0.15;
      const maxGrad = 0.6;
      const grad = base + (maxGrad - base) * t;
      document.documentElement.style.setProperty("--grad", String(grad));
      setProgress(t);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    // ensure initial value is correct
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return progress;
}

export default useScrollParallax;
