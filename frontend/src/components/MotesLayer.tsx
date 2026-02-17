import { memo, useMemo } from "react";

// Deterministic seeded random for stable motes
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
    return Array.from({ length: count }).map((_, i) => {
      const cx = rand() * 100;
      const cy = rand() * 100;
      const r = 0.06 + rand() * 0.14;
      const opacity = 0.55 + rand() * 0.25;
      const duration = 120 + rand() * 60;
      return { cx, cy, r, opacity, duration };
    });
  }, [count]);

  return (
    <svg
      className="motes absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="moteGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="30%" stopColor="#e0f2fe" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#7dd3fc" stopOpacity="0.35" />
          <stop offset="90%" stopColor="#7dd3fc" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0" />
        </radialGradient>
      </defs>
      {motes.map((mote, i) => (
        <circle
          key={i}
          cx={mote.cx}
          cy={mote.cy}
          r={mote.r}
          fill="url(#moteGradient)"
          opacity={mote.opacity}
          stroke="#fff"
          strokeWidth={0.04}
          style={{
            animation: `moteDriftSvg ${mote.duration}s linear infinite`,
            transformOrigin: `${mote.cx}% ${mote.cy}%`,
            filter: "blur(0.04px)",
          }}
        />
      ))}
    </svg>
  );
});

export default MotesLayer;
