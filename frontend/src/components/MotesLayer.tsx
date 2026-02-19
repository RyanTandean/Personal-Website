import { memo, useMemo } from "react";

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const MotesLayer = memo(function MotesLayer({ count }: { count: number }) {
  const motes = useMemo(() => {
    const rand = mulberry32(20260216);
    return Array.from({ length: count }).map(() => {
      return {
        left: rand() * 100,
        top: rand() * 100,
        size: 2 + rand() * 4, // Size in pixels
        opacity: 0.3 + rand() * 0.4,
        duration: 40 + rand() * 40, // Slower is usually smoother
      };
    });
  }, [count]);

  return (
    // Use a DIV container instead of an SVG for DIV motes
    <div className="motes-container absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {motes.map((mote, i) => (
        <div
          key={i}
          className="mote-element absolute rounded-full"
          style={{
            background: 'radial-gradient(circle, #fff 0%, #7dd3fc 40%, transparent 100%)',
            width: `${mote.size}px`,
            height: `${mote.size}px`,
            left: `${mote.left}%`,
            top: `${mote.top}%`,
            opacity: mote.opacity,
            animation: `orbitalDrift ${mote.duration}s infinite linear`,
            animationDelay: `${-(i * 1.5)}s`,
            willChange: 'transform, opacity',
            // @ts-ignore
            "--drift-x": `${((i * 937) % 30) - 15}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
});

export default MotesLayer;