import { memo, useMemo } from "react";

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function randomNormal01(rand: () => number, mean = 0.5, stdDev = 0.2): number {
  // Box-Muller transform mapped to [0, 1] with clamping.
  const u1 = Math.max(rand(), Number.EPSILON);
  const u2 = rand();
  const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  const n = mean + z0 * stdDev;
  return Math.min(1, Math.max(0, n));
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
    const seed = (Date.now() ^ Math.floor(Math.random() * 0xffffffff)) >>> 0;
    const rand = mulberry32(seed);
    return Array.from({ length: count }).map(() => {
      // Normal-distributed spawn: cluster around center with fewer edge outliers.
      const left = randomNormal01(rand, 0.5, 0.23) * 120 - 10;
      const top = randomNormal01(rand, 0.5, 0.2) * 100;
      return {
        left,
        top,
        size: 2 + rand() * 4,
        opacity: 0.3 + rand() * 0.4,
        // Small per-mote speed variance so movement is not too uniform.
        speedFactor: 0.88 + rand() * 0.24,
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
      {motes.map((mote, i) => {
        // Linearly scale rise distance by spawn height:
        // top-spawned motes travel less, bottom-spawned motes travel up to 500vh.
        const minRiseVh = 120;
        const maxRiseVh = 500;
        const riseEndVh =
          minRiseVh + (mote.top / 100) * (maxRiseVh - minRiseVh);
        const rise33Vh = riseEndVh * 0.34;
        const rise66Vh = riseEndVh * 0.7;

        // Keep average vertical speed similar across different travel distances.
        const baseRiseSpeedVhPerSecond = 3;
        const duration = Math.max(
          18,
          Math.min(
            72,
            riseEndVh / (baseRiseSpeedVhPerSecond * mote.speedFactor),
          ),
        );

        return (
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
                animation: `orbitalDrift ${duration}s infinite`,
                animationDelay: `${-(i * 1.5)}s`,
                // Linear timing avoids noticeable stop-start at sway waypoints.
                animationTimingFunction: "linear",

                transform: "translate3d(0,0,0)",
                WebkitFontSmoothing: "antialiased",
                "--drift-x": `${((i * 937) % 220) - 110}px`,
                "--rise-33": `-${rise33Vh}vh`,
                "--rise-66": `-${rise66Vh}vh`,
                "--rise-end": `-${riseEndVh}vh`,
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

export default MotesLayer;
