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

const MotesLayer = memo(function MotesLayer({ count, depth = 0 }: MotesLayerProps) {
  const motes = useMemo(() => {
    const rand = mulberry32(20260216);
    return Array.from({ length: count }).map(() => {
      return {
        left: rand() * 100,
        top: rand() * 100,
        size: 2 + rand() * 4,
        opacity: 0.3 + rand() * 0.4,
        duration: 40 + rand() * 40,
      };
    });
  }, [count]);

  return (
    <div 
      className="motes-container absolute inset-0 overflow-hidden pointer-events-none transition-transform duration-700 ease-out"
      style={{ 
        // Parallax: As you scroll down (depth increases), motes move UP 
        // Adjust the -100px to -200px if you want more aggressive parallax
        transform: `translate3d(0, ${depth * -500}px, 0)`,
        willChange: 'transform'
      }}
    >
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
            
            // Apply speed multiplier based on depth (slower in the deep)
            animation: `orbitalDrift ${mote.duration * (1 + depth)}s infinite linear`,
            animationDelay: `${-(i * 1.5)}s`,
            
            willChange: 'transform', 
            transform: 'translate3d(0,0,0)',
            WebkitFontSmoothing: 'antialiased', 
            // @ts-ignore
            "--drift-x": `${((i * 937) % 30) - 15}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
});

export default MotesLayer;