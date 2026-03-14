import { memo, useMemo } from "react";

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface MotesLayerProps {
  count: number;
  depth?: number; // 0 to 1
}

const MotesLayer = memo(function MotesLayer({
  count,
  depth = 0,
}: MotesLayerProps) {
  const motes = useMemo(() => {
    const rand = mulberry32(20260216);
    return Array.from({ length: count }).map(() => {
      // Bias top distribution away from extremes to avoid clustering at the bottom.
      // Use a slightly narrowed range (10%..90%) and a mild centralizing effect.
      const left = rand() * 120 - 10; // allow slight overflow horizontally
      const top = ((rand() + rand() + rand()) / 3) * 80 + 10; // ~10%..90%, more centered
      return {
        left,
        top,
        size: 2 + rand() * 4,
        opacity: 0.3 + rand() * 0.4,
        duration: 40 + rand() * 40,
      };
    });
  }, [count]);

  return (
    <div
      className="motes-container absolute inset-0 overflow-hidden pointer-events-none transition-transform duration-700 ease-out motes"
      style={{
        // Parallax: As you scroll down (depth increases), motes should rise.
        // Increase multiplier slightly so motes move more noticeably on full scroll.
        transform: `translate3d(0, ${-depth * 420}px, 0)`,
        // keep will-change on container only to avoid promoting many layers
        willChange: "transform",
      }}
    >
      {motes.map((mote, i) => (
        <div
          key={i}
          className="mote-element absolute rounded-full"
          style={
            {
              background:
                "radial-gradient(circle, #fff 0%, #7dd3fc 40%, transparent 100%)",
              width: `${mote.size}px`,
              height: `${mote.size}px`,
              left: `${mote.left}%`,
              top: `${mote.top}%`,
              opacity: mote.opacity,

              // Keep animation duration independent of scroll depth so updates
              // to `depth` don't restart CSS animations (which causes abrupt flicker).
              animation: `orbitalDrift ${mote.duration}s infinite linear`,
              animationDelay: `${-(i * 1.5)}s`,

              transform: "translate3d(0,0,0)",
              WebkitFontSmoothing: "antialiased",
              "--drift-x": `${((i * 937) % 30) - 15}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
});

export default MotesLayer;
